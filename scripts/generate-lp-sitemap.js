// Gera as entradas de sitemap para as landing pages programáticas
// Execute: node scripts/generate-lp-sitemap.js
// Lê public/sitemap.xml e injeta as novas URLs antes de </urlset>

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

// ─── Dados inline (espelho compacto dos dados TypeScript) ─────────────────

const productSlugs = [
  'corte-e-dobra', 'vergalhao', 'coluna', 'barra',
  'malha', 'tela', 'trelica', 'prego', 'arame',
  'ferragista', 'ferragens', 'ferro-e-aco',
  'material-de-construcao', 'distribuidora-de-ferro',
];

// Prioridades por tipo de produto
const productPriority = {
  'corte-e-dobra':          '0.8',
  'vergalhao':              '0.8',
  'ferragista':             '0.8',
  'ferragens':              '0.8',
  'ferro-e-aco':            '0.8',
  'material-de-construcao': '0.7',
  'distribuidora-de-ferro': '0.7',
  'trelica':                '0.7',
  'malha':                  '0.7',
  'tela':                   '0.7',
  'coluna':                 '0.7',
  'barra':                  '0.6',
  'prego':                  '0.6',
  'arame':                  '0.6',
};

// Prioridades por tipo de localização
const locationPriority = {
  city:         '0.8',
  neighborhood: '0.7',
  region:       '0.7',
};

// slugs de todas as localizações com tipo
const locations = [
  // cidades GO
  ...['goiania','aparecida-de-goiania','anapolis','rio-verde','luziania',
      'aguas-lindas-de-goias','valparaiso-de-goias','trindade','formosa',
      'novo-gama','senador-canedo','itumbiara','jatai','catalao',
      'caldas-novas','planaltina-go','goianesia','mineiros','inhumas','ceres',
  ].map(s => ({ slug: s, type: 'city' })),

  // regiões DF
  ...['brasilia','gama','taguatinga','brazlandia','sobradinho','planaltina-df',
      'paranoa','nucleo-bandeirante','ceilandia','guara','cruzeiro','samambaia',
      'santa-maria','sao-sebastiao','recanto-das-emas','lago-sul','riacho-fundo',
      'lago-norte','candangolandia','aguas-claras','riacho-fundo-ii',
      'sudoeste-octogonal','varjao','park-way','estrutural','sobradinho-ii',
      'jardim-botanico','itapoa','sia','vicente-pires','fercal','sol-nascente','arniqueira',
  ].map(s => ({ slug: s, type: 'region' })),

  // bairros Goiânia
  ...['goiania-setor-sul','goiania-setor-oeste','goiania-setor-bueno','goiania-setor-marista',
      'goiania-setor-central','goiania-setor-norte','goiania-setor-leste','goiania-setor-aeroporto',
      'goiania-setor-universitario','goiania-pedro-ludovico','goiania-nova-suica','goiania-coimbra',
      'goiania-campinas','goiania-jardim-goias','goiania-setor-bela-vista','goiania-setor-criacao',
      'goiania-setor-serrinha','goiania-santos-dumont','goiania-parque-amazonia','goiania-novo-horizonte',
      'goiania-vila-nova','goiania-jardim-europa','goiania-jardim-atlantico','goiania-jardim-novo-mundo',
      'goiania-jardim-curitiba','goiania-santa-genoveva','goiania-alto-da-gloria','goiania-dos-funcionarios',
      'goiania-jardim-america','goiania-eldorado','goiania-parque-oeste','goiania-popular-cerrado',
      'goiania-goiania-2','goiania-vila-rosa','goiania-nova-esperanca','goiania-sudoeste',
      'goiania-faicalville','goiania-jao','goiania-aeroporto','goiania-jardim-presidente',
      'goiania-capuava','goiania-jardim-guanabara','goiania-alto-do-vale','goiania-morada-do-sol',
      'goiania-itatiaia','goiania-parque-anhanguera','goiania-cidade-jardim','goiania-paulo-camargo',
      'goiania-monte-alegre','goiania-tocantins','goiania-sao-judas-tadeu','goiania-bougainville',
      'goiania-jardim-florenca','goiania-sao-lourenco','goiania-santa-helena','goiania-jardim-santo-antonio',
      'goiania-nova-aurora','goiania-garavelo','goiania-setor-negrinho','goiania-parque-santa-cruz',
      'goiania-lemos-magalhaes','goiania-jardim-esmeraldas','goiania-setor-pedro-ii',
      'goiania-distrito-industrial','goiania-fama',
  ].map(s => ({ slug: s, type: 'neighborhood' })),

  // bairros Aparecida
  ...['aparecida-garavelo','aparecida-conde-arcos','aparecida-recanto-bosque','aparecida-palmital',
      'aparecida-independencia','aparecida-jardim-flores','aparecida-jardim-bela-vista','aparecida-vila-sao-tomas',
      'aparecida-parque-nacoes','aparecida-bernardi','aparecida-bom-jesus','aparecida-bom-pastor',
      'aparecida-caribi','aparecida-cruzeiro-sul','aparecida-estrela-dalva','aparecida-finsocial',
      'aparecida-industrial','aparecida-jardim-america','aparecida-lago-azul','aparecida-marajo',
      'aparecida-nova-aparecida','aparecida-nova-esperanca','aparecida-olimpico','aparecida-primavera',
      'aparecida-recanto-tropical','aparecida-rio-claro','aparecida-santo-andre','aparecida-serra',
      'aparecida-serra-dourada','aparecida-tocantins','aparecida-vila-brasilia','aparecida-vila-rica',
      'aparecida-villa-real','aparecida-santa-barbara','aparecida-sonho-verde','aparecida-siderurgica',
      'aparecida-orion','aparecida-andrade','aparecida-morada-do-sol','aparecida-buriti-sereno',
  ].map(s => ({ slug: s, type: 'neighborhood' })),

  // bairros Anápolis
  ...['anapolis-centro','anapolis-setor-sul','anapolis-setor-norte','anapolis-jundiai',
      'anapolis-vila-gois','anapolis-recanto-sol','anapolis-maracana','anapolis-parque-brasilia',
      'anapolis-calixtoladia','anapolis-daltro-filho','anapolis-progresso','anapolis-cidade-jardim',
      'anapolis-arco-verde','anapolis-antonio-azevedo','anapolis-vila-jaiara','anapolis-bandeirantes',
      'anapolis-industrial','anapolis-itamaraty','anapolis-santos-dumont','anapolis-sao-carlos',
      'anapolis-sao-francisco','anapolis-portela','anapolis-estadio','anapolis-setor-novo',
      'anapolis-bela-suica','anapolis-sao-miguel','anapolis-tropical','anapolis-dom-bosco',
      'anapolis-macambira','anapolis-setor-leste','anapolis-parque-central','anapolis-pedroso',
      'anapolis-prado','anapolis-costa-sul','anapolis-lourdes',
  ].map(s => ({ slug: s, type: 'neighborhood' })),
];

// ─── Gera as entradas XML ─────────────────────────────────────────────────

const today = new Date().toISOString().split('T')[0];
let entries = '';
let count = 0;

for (const prod of productSlugs) {
  const pPrio = productPriority[prod] || '0.6';
  for (const loc of locations) {
    const lPrio = locationPriority[loc.type] || '0.6';
    // Prioridade final = média das duas, com boost para corte-e-dobra + goiania
    const finalPrio = (
      prod === 'corte-e-dobra'          && loc.type === 'city' ? '0.9' :
      prod === 'vergalhao'              && loc.type === 'city' ? '0.8' :
      prod === 'ferragista'             && loc.type === 'city' ? '0.9' :
      prod === 'ferragens'              && loc.type === 'city' ? '0.8' :
      prod === 'ferro-e-aco'            && loc.type === 'city' ? '0.8' :
      prod === 'material-de-construcao' && loc.type === 'city' ? '0.8' :
      prod === 'distribuidora-de-ferro' && loc.type === 'city' ? '0.8' :
      Math.min(0.8, (parseFloat(pPrio) + parseFloat(lPrio)) / 2 + 0.05).toFixed(1)
    );

    entries += `  <url>
    <loc>https://grupobraco.com.br/${prod}/${loc.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${finalPrio}</priority>
  </url>\n`;
    count++;
  }
}

// ─── Injeta no sitemap existente ──────────────────────────────────────────

const sitemapPath = join(root, 'public', 'sitemap.xml');
let sitemap = readFileSync(sitemapPath, 'utf8');

// Remove entradas LP antigas se existirem (marcadas pelo comentário)
sitemap = sitemap.replace(/\n  <!-- Landing Pages LP -->[^]*?(?=\n<\/urlset>)/, '');

// Injeta antes do fechamento
const lpBlock = `\n  <!-- Landing Pages LP (${count} páginas geradas automaticamente) -->\n${entries}`;
sitemap = sitemap.replace('</urlset>', `${lpBlock}</urlset>`);

writeFileSync(sitemapPath, sitemap, 'utf8');
console.log(`✅ Sitemap atualizado: ${count} landing pages adicionadas`);
