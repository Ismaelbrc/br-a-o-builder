import { describe, it, expect } from 'vitest';
import { rootGraphNodes, rootGraphHtml } from '@/lib/schemaCatalog';
import { ID } from '@/lib/schema';
import { landingProducts, productSlugs } from '@/data/landingProducts';

/** Coleta todo @id declarado num nó (o próprio + qualquer sub-objeto). */
function collectDeclaredIds(nodes: object[]): Set<string> {
  const ids = new Set<string>();
  for (const node of nodes) {
    const id = (node as Record<string, unknown>)['@id'];
    if (typeof id === 'string') ids.add(id);
  }
  return ids;
}

/** Coleta todo @id *referenciado* (qualquer {"@id": "..."} em qualquer profundidade). */
function collectReferencedIds(value: unknown, out: Set<string> = new Set()): Set<string> {
  if (Array.isArray(value)) {
    value.forEach(v => collectReferencedIds(v, out));
  } else if (value && typeof value === 'object') {
    const obj = value as Record<string, unknown>;
    const keys = Object.keys(obj);
    // Referência pura: objeto só com "@id" (stub). Nó completo também tem "@id"
    // mas não é referência a outra coisa — pulamos ele mesmo, só olhamos filhos.
    if (keys.length === 1 && keys[0] === '@id' && typeof obj['@id'] === 'string') {
      out.add(obj['@id'] as string);
    }
    for (const key of keys) collectReferencedIds(obj[key], out);
  }
  return out;
}

describe('schema — grafo raiz', () => {
  const nodes = rootGraphNodes();

  it('rootGraphHtml() produz JSON válido dentro do <script>', () => {
    const html = rootGraphHtml();
    const match = html.match(/<script[^>]*>(.*)<\/script>/s);
    expect(match).not.toBeNull();
    expect(() => JSON.parse(match![1])).not.toThrow();
  });

  it('contém os ids fixos esperados', () => {
    const declared = collectDeclaredIds(nodes);
    expect(declared).toContain(ID.organization);
    expect(declared).toContain(ID.localBusiness);
    expect(declared).toContain(ID.person);
    expect(declared).toContain(ID.website);
    expect(declared).toContain(ID.blog);
    expect(declared).toContain(ID.catalog);
  });

  it('todo produto/serviço não-BusinessFacet vira nó de catálogo', () => {
    const declared = collectDeclaredIds(nodes);
    for (const slug of productSlugs) {
      const p = landingProducts[slug];
      if (p.schemaKind === 'BusinessFacet') continue;
      const expectedId = p.schemaKind === 'Service' ? ID.service(slug) : ID.product(slug);
      expect(declared, `esperava nó de catálogo para "${slug}"`).toContain(expectedId);
    }
  });

  it('toda referência {"@id"} do grafo raiz resolve para um nó declarado no mesmo grafo — pega nó órfão/referência pendurada', () => {
    const declared = collectDeclaredIds(nodes);
    const referenced = collectReferencedIds(nodes);
    const dangling = [...referenced].filter(id => !declared.has(id));
    expect(dangling, `referências penduradas: ${dangling.join(', ')}`).toEqual([]);
  });

  it('todo relatedSlugs resolve para um slug real de landingProducts — pega typo na lista de arestas', () => {
    for (const slug of productSlugs) {
      for (const related of landingProducts[slug].relatedSlugs) {
        expect(landingProducts[related], `"${slug}".relatedSlugs contém slug inexistente "${related}"`).toBeDefined();
      }
    }
  });

  it('não há dois LocalBusiness com streetAddress divergente — a classe do bug de NAP', () => {
    const addresses = new Set<string>();
    for (const node of nodes) {
      const n = node as Record<string, unknown>;
      const types = Array.isArray(n['@type']) ? n['@type'] : [n['@type']];
      if (types.includes('LocalBusiness')) {
        const addr = n.address as Record<string, unknown> | undefined;
        if (addr?.streetAddress) addresses.add(addr.streetAddress as string);
      }
    }
    expect(addresses.size).toBeLessThanOrEqual(1);
  });
});
