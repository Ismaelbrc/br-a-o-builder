// Fonte ÚNICA da verdade das rotas indexáveis do site.
// Consumida por scripts/generate-sitemap.ts e scripts/prerender.ts.
// Rodar via tsx (importa os dados .ts diretamente).
//
// Regra: só entra aqui o que retorna HTTP 200 + index,follow.
// Tudo o mais permanece servido pelo 404.html (fallback SPA) e fora do sitemap.

import { blogPostsMeta } from '../src/data/blogPostsMeta';
import { landingProducts } from '../src/data/landingProducts';
import { allLocations } from '../src/data/landingLocations';

export type SeoRoute = {
  path: string;        // sempre começa com "/", sem barra final (exceto "/")
  lastmod: string;     // ISO YYYY-MM-DD
  priority: string;    // "0.0".."1.0"
  changefreq: string;
};

// Produtos com conteúdo realmente diferenciado (não-duplicado) por cidade.
// Só estes são pré-renderizados/indexados nas cidades com uniqueContent.
export const CORE_PRODUCTS = ['corte-e-dobra', 'vergalhao', 'coluna'] as const;

const TODAY = new Date().toISOString().slice(0, 10);

// "07 Fev 2026" -> "2026-02-07"
const MONTHS: Record<string, string> = {
  Jan: '01', Fev: '02', Mar: '03', Abr: '04', Mai: '05', Jun: '06',
  Jul: '07', Ago: '08', Set: '09', Out: '10', Nov: '11', Dez: '12',
};
function parseDateISO(dateStr: string): string {
  const parts = (dateStr || '').trim().split(/\s+/);
  if (parts.length === 3) {
    const [day, mon, year] = parts;
    return `${year}-${MONTHS[mon] ?? '01'}-${day.padStart(2, '0')}`;
  }
  return TODAY;
}

// ── Rotas estáticas (index,follow) ──────────────────────────────────────────
const STATIC_ROUTES: SeoRoute[] = [
  { path: '/',                      priority: '1.0', changefreq: 'weekly',  lastmod: TODAY },
  { path: '/corte-e-dobra',         priority: '0.9', changefreq: 'weekly',  lastmod: TODAY },
  { path: '/calculadora-vergalhao', priority: '0.8', changefreq: 'monthly', lastmod: TODAY },
  { path: '/produtos',              priority: '0.7', changefreq: 'monthly', lastmod: TODAY },
  { path: '/blog',                  priority: '0.7', changefreq: 'weekly',  lastmod: TODAY },
  { path: '/tebas',                 priority: '0.7', changefreq: 'monthly', lastmod: TODAY },
  { path: '/sobre',                 priority: '0.6', changefreq: 'monthly', lastmod: TODAY },
  { path: '/cases',                  priority: '0.8', changefreq: 'monthly', lastmod: TODAY },
  { path: '/galeria',               priority: '0.6', changefreq: 'monthly', lastmod: TODAY },
  { path: '/faq',                   priority: '0.6', changefreq: 'monthly', lastmod: TODAY },
  { path: '/contato',               priority: '0.6', changefreq: 'monthly', lastmod: TODAY },
];

// ── Blog (todos os posts) ───────────────────────────────────────────────────
function blogRoutes(): SeoRoute[] {
  return blogPostsMeta.map((p) => ({
    path: `/blog/${p.slug}`,
    lastmod: parseDateISO(p.date),
    priority: '0.7',
    changefreq: 'monthly',
  }));
}

// ── Landing pages indexáveis = CORE_PRODUCTS × cidades com uniqueContent ─────
function lpRoutes(): SeoRoute[] {
  const indexableLocations = allLocations.filter((l) => !!l.uniqueContent);
  const routes: SeoRoute[] = [];
  for (const product of CORE_PRODUCTS) {
    if (!landingProducts[product]) continue;
    for (const loc of indexableLocations) {
      routes.push({
        path: `/${product}/${loc.slug}`,
        lastmod: TODAY,
        priority: product === 'corte-e-dobra' ? '0.9' : product === 'vergalhao' ? '0.8' : '0.7',
        changefreq: 'monthly',
      });
    }
  }
  return routes;
}

export function getSeoRoutes(): SeoRoute[] {
  return [...STATIC_ROUTES, ...blogRoutes(), ...lpRoutes()];
}

// Execução direta para inspeção rápida: `tsx scripts/seo-routes.ts`
if (import.meta.url === `file://${process.argv[1]}`) {
  const routes = getSeoRoutes();
  console.log(`Total de rotas indexáveis: ${routes.length}`);
  console.log(`  estáticas: ${STATIC_ROUTES.length}`);
  console.log(`  blog: ${blogRoutes().length}`);
  console.log(`  LPs: ${lpRoutes().length}`);
}
