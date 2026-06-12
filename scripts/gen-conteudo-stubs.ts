// Gera stubs de redirect (meta refresh + canonical) em dist/conteudo/<slug>/index.html
// para TODAS as URLs antigas /conteudo/ do WordPress que ainda recebem impressões no
// Google Search Console (lista em scripts/gsc-conteudo-slugs.txt, exportada do GSC).
//
// Sem stub físico, essas URLs caem no 404.html (HTTP 404) e o Google descarta o
// ranking que elas ainda têm. Com stub (HTTP 200 + canonical + redirect), a
// autoridade é transferida para a página nova equivalente.
//
// Rodar APÓS `vite build` (parte do `npm run seo`):  tsx scripts/gen-conteudo-stubs.ts
//
// Resolução do destino, em ordem:
//   1. EXPLICIT_MAP (mesmo mapeamento do public/404.html)
//   2. Cidade com LP indexável (uniqueContent) → /corte-e-dobra/<cidade> ou /vergalhao/<cidade>
//   3. Regras de palavra-chave → post /blog/ equivalente
//   4. Similaridade de tokens com slugs do blog (mínimo 2 tokens em comum)
//   5. Fallback: /blog

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { blogPostsMeta } from '../src/data/blogPostsMeta';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const distConteudo = join(root, 'dist', 'conteudo');
const ORIGIN = 'https://grupobraco.com.br';

const blogSlugs = new Set(blogPostsMeta.map((p) => p.slug));

// ── 1. Mapeamento explícito (espelho do public/404.html) ────────────────────
const EXPLICIT_MAP: Record<string, string> = {
  'a-revolucao-do-aco-conheca-a-fabrica-de-vergalhao-em-goiania-que-transforma-seus-projetos': '/blog/o-que-e-corte-e-dobra-de-aco',
  'o-que-e-corte-e-dobra': '/blog/o-que-e-corte-e-dobra-de-aco',
  'corte-e-dobra-de-aco': '/blog/o-que-e-corte-e-dobra-de-aco',
  'corte-e-dobra-vs-manual': '/blog/corte-e-dobra-vs-corte-manual',
  'vergalhao-ca-50-ca-60': '/blog/vergalhao-ca-50-vs-ca-60-diferencas',
  'ca-25-ca-50-ca-60': '/blog/ca-25-ca-50-ca-60-qual-vergalhao-usar',
  'trelicas-de-aco': '/blog/trelicas-de-aco-para-que-servem',
  'trelicas-metalicas-laje': '/blog/trelicas-metalicas-laje-guia-completo',
  'malha-de-aco': '/blog/malha-de-aco-construcao-tipos-aplicacoes',
  'tela-soldada-piso-industrial': '/blog/tela-soldada-ou-malha-pop-piso-industrial',
  'calculo-de-aco': '/blog/como-calcular-quantidade-de-aco-construcao',
  'calculo-vergalhao-laje': '/blog/como-calcular-quantidade-vergalhao-laje',
  'norma-abnt': '/blog/norma-abnt-nbr-7480-aco-concreto-armado',
  'normas-abnt-vergalhao': '/blog/normas-abnt-vergalhao-o-que-engenheiro-precisa-saber',
  'entrega-de-aco': '/blog/entrega-aco-48-horas-goias',
  'entrega-rapida-goias': '/blog/entrega-aco-48-horas-goias',
  'desperdicio-de-aco': '/blog/como-evitar-desperdicio-de-aco-na-obra',
  'gestao-de-materiais': '/blog/gestao-de-materiais-construcao-civil-guia-pratico',
  'projeto-estrutural': '/blog/como-ler-interpretar-projeto-estrutural',
  'sapatas-fundacao': '/blog/sapatas-de-fundacao-tipos-como-dimensionar',
  'fundacao-radier': '/blog/fundacao-em-radier-como-dimensionar-armadura',
  'corte-e-dobra-goias': '/blog/corte-manual-vs-corte-e-dobra-industrial-goias',
  'tabela-de-peso-do-vergalhao-a-importancia-de-conhecer-seus-dimensionamentos-para-construcoes-eficientes': '/blog/quanto-pesa-vergalhao-por-metro-tabela-completa',
  'tabela-de-peso-do-vergalhao': '/blog/quanto-pesa-vergalhao-por-metro-tabela-completa',
  'vergalhao-em-anapolis-a-sustentacao-que-seu-projeto-precisa': '/vergalhao/anapolis',
  'br-aco-a-referencia-em-vergalhao-em-goiania': '/vergalhao/goiania',
  'calculadora-vergalhao': '/calculadora-vergalhao',
  'vergalhao-direto-da-fabrica-acelere-seus-projetos-com-a-br-aco': '/blog/fabrica-vs-distribuidor-vergalhao',
  'corte-e-dobra-de-ferro-barato-a-solucao-ideal-para-seus-projetos-de-construcao-3': '/blog/o-que-e-corte-e-dobra-de-aco',
  'corte-e-dobra-de-ferro-barato': '/blog/o-que-e-corte-e-dobra-de-aco',
  'vergalhao-goiania': '/vergalhao/goiania',
  'vergalhao-aparecida-de-goiania': '/vergalhao/aparecida-de-goiania',
  'vergalhao-anapolis': '/vergalhao/anapolis',
  'corte-e-dobra-de-aco-goiania': '/corte-e-dobra/goiania',
  'corte-e-dobra-aparecida-de-goiania': '/corte-e-dobra/aparecida-de-goiania',
  'br-aco-vergalhao': '/blog/o-que-e-corte-e-dobra-de-aco',
  'ferro-para-construcao': '/blog/quanto-pesa-vergalhao-por-metro-tabela-completa',
  'tabela-vergalhao': '/blog/quanto-pesa-vergalhao-por-metro-tabela-completa',
  'preco-vergalhao': '/blog/vergalhao-preco-kg-goias-2026',
  'corte-dobra-industrial': '/blog/como-funciona-corte-dobra-industrial',
  'armadura-pronta': '/blog/armaduras-prontas-vs-corte-e-dobra-quando-usar',
};

// ── 2. Cidades com LP indexável (uniqueContent em landingLocations.ts) ─────
// Ordem importa: slugs mais específicos primeiro (aparecida antes de goiania).
const CITY_LPS: Array<[RegExp, string]> = [
  [/aparecida/, 'aparecida-de-goiania'],
  [/goiania/, 'goiania'],
  [/anapolis/, 'anapolis'],
  [/rio-verde/, 'rio-verde'],
  [/luziania/, 'luziania'],
  [/aguas-lindas/, 'aguas-lindas-de-goias'],
  [/valparaiso/, 'valparaiso-de-goias'],
  [/trindade/, 'trindade'],
  [/senador-canedo/, 'senador-canedo'],
];

// ── 3. Regras de palavra-chave → slug do blog ───────────────────────────────
const KEYWORD_RULES: Array<[RegExp, string]> = [
  [/armador/, 'quanto-custa-armador-obra-vs-corte-dobra'],
  [/(ferro|armadura).*pront|pront.*(ferro|armadura)/, 'armaduras-prontas-vs-corte-e-dobra-quando-usar'],
  [/malha/, 'malha-de-aco-construcao-tipos-aplicacoes'],
  [/telas?-/, 'tela-soldada-ou-malha-pop-piso-industrial'],
  [/trelica|trelic/, 'trelicas-metalicas-laje-guia-completo'],
  [/peso/, 'quanto-pesa-vergalhao-por-metro-tabela-completa'],
  [/tabela.*vergalhao|vergalhao.*tabela/, 'quanto-pesa-vergalhao-por-metro-tabela-completa'],
  [/sapata/, 'sapatas-de-fundacao-tipos-como-dimensionar'],
  [/radier/, 'fundacao-em-radier-como-dimensionar-armadura'],
  [/fundacao|fundacoes/, 'tipos-de-fundacao-como-escolher'],
  [/estribo/, 'estribos-funcao-tipos-espacamento'],
  [/pilar/, 'pilares-de-concreto-armado-tipos-e-detalhamento'],
  [/viga/, 'armacao-de-vigas-concreto-armado'],
  [/desperdicio/, 'como-evitar-desperdicio-de-aco-na-obra'],
  [/nbr|norma|abnt/, 'norma-abnt-nbr-7480-aco-concreto-armado'],
  [/brasilia|distrito-federal|-df-|-df$/, 'corte-e-dobra-brasilia-df-guia-completo'],
  [/laje.*(calcul|quantidade)|(calcul|quantidade).*laje/, 'como-calcular-quantidade-vergalhao-laje'],
  [/laje/, 'laje-trelicada-como-fazer-guia-completo'],
  [/calcul|quantidade/, 'como-calcular-quantidade-de-aco-construcao'],
  [/ca-?25/, 'ca-25-ca-50-ca-60-qual-vergalhao-usar'],
  [/ca-?50|ca-?60/, 'vergalhao-ca-50-vs-ca-60-diferencas'],
  [/preco|barato|custo/, 'vergalhao-preco-kg-goias-2026'],
  [/entrega|prazo/, 'entrega-aco-48-horas-goias'],
  [/ferragista/, 'ferragista-goiania-como-escolher'],
  [/distribuidor/, 'fabrica-vs-distribuidor-vergalhao'],
  [/fabrica/, 'fabrica-vs-distribuidor-vergalhao'],
  [/projeto/, 'como-ler-interpretar-projeto-estrutural'],
  [/corte.*dobra|dobra.*corte/, 'o-que-e-corte-e-dobra-de-aco'],
  [/concreto/, 'classes-do-concreto-quando-usar'],
  [/vergalhao|ferro|aco-/, 'o-que-e-corte-e-dobra-de-aco'],
];

const STOPWORDS = new Set([
  'como', 'para', 'uma', 'umas', 'que', 'com', 'dos', 'das', 'por', 'seu', 'sua', 'seus', 'suas',
  'descubra', 'conheca', 'guia', 'completo', 'ideal', 'melhor', 'solucao', 'projetos', 'projeto',
  'construcao', 'civil', 'obra', 'obras', 'braco', 'aco', 'qualidade', 'eficiencia', 'transforma',
  'realidade', 'precisa', 'revolucao', 'referencia', 'necessaria', 'necessario', 'quantidade',
]);

function tokens(slug: string): Set<string> {
  return new Set(
    slug
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .split('-')
      .filter((t) => t.length >= 4 && !STOPWORDS.has(t) && !/^\d+$/.test(t)),
  );
}

function bestBlogMatch(slug: string): string | null {
  const slugTokens = tokens(slug);
  let best: string | null = null;
  let bestScore = 0;
  for (const blogSlug of blogSlugs) {
    let score = 0;
    for (const t of tokens(blogSlug)) if (slugTokens.has(t)) score++;
    if (score > bestScore) { bestScore = score; best = blogSlug; }
  }
  return bestScore >= 2 ? best : null;
}

function resolveTarget(slug: string): { target: string; via: string } {
  if (EXPLICIT_MAP[slug]) return { target: EXPLICIT_MAP[slug], via: 'explicit' };

  const norm = slug.normalize('NFD').replace(/[̀-ͯ]/g, '');

  for (const [re, city] of CITY_LPS) {
    if (re.test(norm)) {
      const product = /corte.*dobra|dobra/.test(norm) ? 'corte-e-dobra' : 'vergalhao';
      return { target: `/${product}/${city}`, via: 'city-lp' };
    }
  }

  for (const [re, blogSlug] of KEYWORD_RULES) {
    if (re.test(norm)) {
      if (!blogSlugs.has(blogSlug)) throw new Error(`Regra aponta para slug inexistente: ${blogSlug}`);
      return { target: `/blog/${blogSlug}`, via: 'keyword' };
    }
  }

  const match = bestBlogMatch(norm);
  if (match) return { target: `/blog/${match}`, via: 'similarity' };

  return { target: '/blog', via: 'fallback' };
}

function stubHtml(targetPath: string): string {
  const url = ORIGIN + targetPath;
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="refresh" content="0; url=${url}" />
  <link rel="canonical" href="${url}" />
  <script>window.location.replace('${url}');</script>
  <title>Redirecionando...</title>
</head>
<body>
  <p>Redirecionando para <a href="${url}">grupobraco.com.br</a>...</p>
</body>
</html>
`;
}

function main() {
  const listFile = join(__dirname, 'gsc-conteudo-slugs.txt');
  const slugs = readFileSync(listFile, 'utf8')
    .split(/\r?\n/)
    .map((s) => decodeURIComponent(s.trim()).replace(/\/$/, ''))
    .filter((s) => s.length > 0 && !s.includes('..'));

  if (!existsSync(join(root, 'dist'))) {
    console.error('✖ dist/ não existe — rodar `vite build` antes.');
    process.exit(1);
  }

  const stats: Record<string, number> = {};
  let written = 0;
  let skipped = 0;

  for (const slug of slugs) {
    const dir = join(distConteudo, slug);
    const file = join(dir, 'index.html');
    if (existsSync(file)) { skipped++; continue; } // stub do public/conteudo já cobre
    const { target, via } = resolveTarget(slug);
    stats[via] = (stats[via] ?? 0) + 1;
    mkdirSync(dir, { recursive: true });
    writeFileSync(file, stubHtml(target));
    written++;
  }

  console.log(`✔ stubs /conteudo/: ${written} gerados, ${skipped} já existiam (public/conteudo)`);
  console.log('  por método:', JSON.stringify(stats));
}

main();
