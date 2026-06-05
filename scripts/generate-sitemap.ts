// Gera o sitemap.xml COMPLETO a partir da fonte única scripts/seo-routes.ts.
// Substitui o antigo generate-lp-sitemap.js (que emitia 2.702 URLs, a maioria 404/noindex).
// Rodar: tsx scripts/generate-sitemap.ts  (também é chamado por scripts/prerender.ts)

import { writeFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { getSeoRoutes } from './seo-routes';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const BASE = 'https://grupobraco.com.br';

function buildSitemap(): string {
  const routes = getSeoRoutes();
  const urls = routes
    .map((r) => {
      // Home sem barra final; demais com barra final (GitHub Pages serve /path/ a partir de /path/index.html)
      const loc = r.path === '/' ? `${BASE}/` : `${BASE}${r.path}/`;
      return [
        '  <url>',
        `    <loc>${loc}</loc>`,
        `    <lastmod>${r.lastmod}</lastmod>`,
        `    <changefreq>${r.changefreq}</changefreq>`,
        `    <priority>${r.priority}</priority>`,
        '  </url>',
      ].join('\n');
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

const xml = buildSitemap();
const count = getSeoRoutes().length;

// public/ = fonte no repo. dist/ = artefato do deploy (o build já copiou public->dist
// ANTES deste script rodar, então precisamos sobrescrever dist/ também).
const targets = [join(root, 'public', 'sitemap.xml')];
const distDir = join(root, 'dist');
if (existsSync(distDir)) targets.push(join(distDir, 'sitemap.xml'));

for (const path of targets) {
  writeFileSync(path, xml, 'utf8');
  console.log(`✅ sitemap.xml gerado: ${count} URLs -> ${path}`);
}
