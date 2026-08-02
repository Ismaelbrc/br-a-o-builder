/* ──────────────────────────────────────────────────────────────────────────
   Schema.org — grafo de entidades BR Aço
   Ids canônicos, stubs de referência e builders puros de nó JSON-LD.

   ⚠️ Este arquivo NÃO pode importar dados (landingProducts.ts, blogPosts.ts,
   landingLocations.ts etc). Ele é importado por páginas lazy (ex. BlogPost.tsx)
   e qualquer import de dado infla o chunk dessa página com arquivos que ela
   não precisa. Para nós que dependem de dado, ver schemaCatalog.ts (build-time)
   ou monte o nó na própria página, usando só os builders daqui.
   ────────────────────────────────────────────────────────────────────────── */

export const SITE = 'https://grupobraco.com.br';

/** Ids canônicos dos nós raiz (declarados uma vez, em schemaCatalog.ts → index.html). */
export const ID = {
  organization:  `${SITE}/#organization`,
  localBusiness: `${SITE}/#localbusiness`,
  person:        `${SITE}/#person-ismael`,
  website:       `${SITE}/#website`,
  blog:          `${SITE}/#blog`,
  catalog:       `${SITE}/#catalog`,
  service: (slug: string) => `${SITE}/#service-${slug}`,
  product: (slug: string) => `${SITE}/#product-${slug}`,
  place:   (slug: string) => `${SITE}/#place-${slug}`,
  // nós escopados por página (chaveados no canonical da própria URL)
  webPage:    (canonical: string) => `${canonical}#webpage`,
  breadcrumb: (canonical: string) => `${canonical}#breadcrumb`,
  faq:        (canonical: string) => `${canonical}#faq`,
  article:    (canonical: string) => `${canonical}#article`,
} as const;

/** Endereço canônico — fonte da verdade: Google Business Profile.
 *  Todo streetAddress do site (JSON-LD ou texto visível) deve bater com isto
 *  caractere a caractere. Ver scripts/validate-schema.ts. */
export const GBP_ADDRESS = {
  streetAddress: 'Rua 11, Qd. 05, L7. 07 - Polo Industrial',
  addressLocality: 'Aparecida de Goiânia',
  addressRegion: 'GO',
  postalCode: '74985-235',
  addressCountry: 'BR',
} as const;

/** Stub de referência — é o ponto ergonômico central do módulo.
 *  Página nunca redeclara um nó inteiro; só aponta pra ele. */
export const ref = (id: string) => ({ '@id': id });

/** Envelope @graph — um único bloco JSON-LD por página. */
export function graph(nodes: object[]) {
  return { '@context': 'https://schema.org', '@graph': nodes };
}

/** Nó parcial — funde no nó completo de mesmo @id declarado em outro lugar
 *  da página (comportamento padrão do parser JSON-LD do Google). Usado para
 *  "remendar" uma aresta (ex.: areaServed) sem recriar o nó inteiro. */
export function patch(id: string, props: Record<string, unknown>) {
  return { '@id': id, ...props };
}

// ── Builders de nó de página (puros — sem import de dado) ──────────────────

export function webPageNode(o: {
  canonical: string;
  name: string;
  description?: string;
  about?: string;       // @id de referência
  isPartOf?: string;    // @id de referência (default: ID.website)
  breadcrumbId?: string;
  mainEntity?: string;  // @id de referência
}): object {
  return {
    '@type': 'WebPage',
    '@id': ID.webPage(o.canonical),
    url: o.canonical,
    name: o.name,
    ...(o.description ? { description: o.description } : {}),
    inLanguage: 'pt-BR',
    isPartOf: ref(o.isPartOf ?? ID.website),
    ...(o.about ? { about: ref(o.about) } : {}),
    ...(o.breadcrumbId ? { breadcrumb: ref(o.breadcrumbId) } : {}),
    ...(o.mainEntity ? { mainEntity: ref(o.mainEntity) } : {}),
  };
}

export function breadcrumbNode(
  canonical: string,
  items: { name: string; item: string }[]
): object {
  return {
    '@type': 'BreadcrumbList',
    '@id': ID.breadcrumb(canonical),
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.item,
    })),
  };
}

export function faqPageNode(
  canonical: string,
  items: { q: string; a: string }[],
  aboutId?: string
): object {
  return {
    '@type': 'FAQPage',
    '@id': ID.faq(canonical),
    isPartOf: ref(ID.webPage(canonical)),
    ...(aboutId ? { about: ref(aboutId) } : {}),
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export function articleNode(o: {
  canonical: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  keywords?: string;
  articleSection?: string;
  aboutId?: string;
}): object {
  return {
    '@type': 'Article',
    '@id': ID.article(o.canonical),
    headline: o.headline,
    description: o.description,
    author: ref(ID.person),
    publisher: ref(ID.organization),
    datePublished: o.datePublished,
    dateModified: o.dateModified ?? o.datePublished,
    mainEntityOfPage: ref(ID.webPage(o.canonical)),
    isPartOf: ref(ID.blog),
    inLanguage: 'pt-BR',
    ...(o.keywords ? { keywords: o.keywords } : {}),
    ...(o.articleSection ? { articleSection: o.articleSection } : {}),
    ...(o.aboutId ? { about: ref(o.aboutId) } : {}),
  };
}

export function placeNode(o: {
  slug: string;
  name: string;
  city: string;
  state: string;
}): object {
  return {
    '@type': 'Place',
    '@id': ID.place(o.slug),
    name: o.name,
    address: {
      '@type': 'PostalAddress',
      addressLocality: o.city,
      addressRegion: o.state,
      addressCountry: 'BR',
    },
    containedInPlace: { '@type': 'State', name: o.state === 'DF' ? 'Distrito Federal' : 'Goiás' },
  };
}
