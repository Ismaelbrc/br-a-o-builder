// Varre dist/**/index.html (saída do prerender) e valida o JSON-LD de cada
// página: todo bloco parseia, toda referência {"@id"} resolve para um nó
// declarado na própria página, e todo streetAddress de LocalBusiness bate com
// o endereço canônico (GBP_ADDRESS em src/lib/schema.ts) — é a checagem que
// teria pego as 5 variantes de endereço divergentes antes deste script existir.
//
// Warn-only por design, mesma postura de scripts/prerender.ts: nunca falha o
// build por isto. Rodar: tsx scripts/validate-schema.ts (chamado por `npm run seo`).

import { readFileSync, readdirSync, statSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { GBP_ADDRESS } from '../src/lib/schema';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');

function findIndexHtmlFiles(dir: string, out: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      findIndexHtmlFiles(full, out);
    } else if (entry === 'index.html') {
      out.push(full);
    }
  }
  return out;
}

function extractJsonLdBlocks(html: string): unknown[] {
  const blocks: unknown[] = [];
  const re = /<script type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs;
  let match: RegExpExecArray | null;
  while ((match = re.exec(html))) {
    try {
      blocks.push(JSON.parse(match[1]));
    } catch {
      blocks.push({ __parseError: true, raw: match[1].slice(0, 120) });
    }
  }
  return blocks;
}

/** Nós declarados (têm "@id" + pelo menos outra propriedade — não é stub puro). */
function collectDeclaredIds(blocks: unknown[]): Set<string> {
  const ids = new Set<string>();
  const walk = (value: unknown) => {
    if (Array.isArray(value)) {
      value.forEach(walk);
    } else if (value && typeof value === 'object') {
      const obj = value as Record<string, unknown>;
      const keys = Object.keys(obj);
      if (typeof obj['@id'] === 'string' && keys.length > 1) ids.add(obj['@id'] as string);
      for (const key of keys) walk(obj[key]);
    }
  };
  blocks.forEach(walk);
  return ids;
}

/** Stubs de referência: objeto só com "@id". */
function collectReferencedIds(blocks: unknown[]): Set<string> {
  const ids = new Set<string>();
  const walk = (value: unknown) => {
    if (Array.isArray(value)) {
      value.forEach(walk);
    } else if (value && typeof value === 'object') {
      const obj = value as Record<string, unknown>;
      const keys = Object.keys(obj);
      if (keys.length === 1 && keys[0] === '@id' && typeof obj['@id'] === 'string') {
        ids.add(obj['@id'] as string);
      }
      for (const key of keys) walk(obj[key]);
    }
  };
  blocks.forEach(walk);
  return ids;
}

function collectStreetAddresses(blocks: unknown[]): string[] {
  const addresses: string[] = [];
  const walk = (value: unknown) => {
    if (Array.isArray(value)) {
      value.forEach(walk);
    } else if (value && typeof value === 'object') {
      const obj = value as Record<string, unknown>;
      if (typeof obj.streetAddress === 'string') addresses.push(obj.streetAddress);
      Object.values(obj).forEach(walk);
    }
  };
  blocks.forEach(walk);
  return addresses;
}

function main() {
  let files: string[];
  try {
    files = findIndexHtmlFiles(DIST);
  } catch {
    console.warn('⚠️  validate-schema: dist/ não encontrado — rode `npm run build` antes. Pulando.');
    return;
  }

  let parseErrors = 0;
  let danglingRefs = 0;
  let wrongAddress = 0;
  let pagesChecked = 0;

  for (const file of files) {
    const html = readFileSync(file, 'utf-8');
    const blocks = extractJsonLdBlocks(html);
    if (blocks.length === 0) continue;
    pagesChecked++;

    const rel = file.replace(DIST, '').replace(/\\/g, '/');

    for (const block of blocks) {
      if ((block as Record<string, unknown>)?.__parseError) {
        parseErrors++;
        console.warn(`  ✗ JSON-LD inválido em ${rel}`);
      }
    }

    const declared = collectDeclaredIds(blocks);
    const referenced = collectReferencedIds(blocks);
    const dangling = [...referenced].filter(id => !declared.has(id));
    if (dangling.length) {
      danglingRefs += dangling.length;
      console.warn(`  ✗ referência pendurada em ${rel}: ${dangling.join(', ')}`);
    }

    for (const addr of collectStreetAddresses(blocks)) {
      if (addr !== GBP_ADDRESS.streetAddress) {
        wrongAddress++;
        console.warn(`  ✗ streetAddress divergente em ${rel}: "${addr}" (esperado: "${GBP_ADDRESS.streetAddress}")`);
      }
    }
  }

  console.log(
    `✅ validate-schema: ${pagesChecked} páginas com JSON-LD verificadas — ` +
    `${parseErrors} erro(s) de parse, ${danglingRefs} referência(s) pendurada(s), ${wrongAddress} endereço(s) divergente(s).`
  );
  // Warn-only, mesma postura de scripts/prerender.ts: nunca falha o deploy por
  // isto. Depois de 2 deploys limpos, considerar `process.exitCode = 1` aqui.
}

main();
