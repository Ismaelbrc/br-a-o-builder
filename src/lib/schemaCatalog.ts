/* ──────────────────────────────────────────────────────────────────────────
   Schema catalog — deriva o grafo raiz (Organization/LocalBusiness/Person +
   catálogo de Service/Product) a partir de landingProducts.ts.

   Build-time only: importado pelo plugin do Vite (vite.config.ts) via
   transformIndexHtml, nunca por uma página React em runtime. É por isso que
   pode importar dado — schema.ts continua livre de imports pra não vazar
   esse dado nos chunks lazy do app.
   ────────────────────────────────────────────────────────────────────────── */

import { SITE, ID, GBP_ADDRESS } from './schema';
import { landingProducts, productSlugs } from '../data/landingProducts';

// ── Nós fixos (LocalBusiness, Organization, Person, WebSite, Blog) ─────────

function localBusinessNode() {
  return {
    '@type': ['LocalBusiness', 'HardwareStore'],
    '@id': ID.localBusiness,
    name: 'BR Aço – Casa Brasileira de Aço',
    alternateName: ['Grupo BR Aço', 'Grupo Braco', 'Casa Brasileira de Aço'],
    description:
      'Maior indústria de corte e dobra de vergalhão de Goiás. Vergalhões CA-25, CA-50 e CA-60, treliças metálicas, telas soldadas e malhas para construção civil. Entrega em até 48h em Goiânia e região.',
    url: SITE,
    telephone: '+55-62-9903-2023',
    email: 'vendas@grupobraco.com.br',
    priceRange: '$$',
    currenciesAccepted: 'BRL',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer, PIX',
    address: { '@type': 'PostalAddress', ...GBP_ADDRESS },
    areaServed: [
      { '@type': 'City', name: 'Goiânia' },
      { '@type': 'City', name: 'Aparecida de Goiânia' },
      { '@type': 'City', name: 'Anápolis' },
      { '@type': 'City', name: 'Senador Canedo' },
      { '@type': 'City', name: 'Trindade' },
      { '@type': 'State', name: 'Goiás' },
      { '@type': 'State', name: 'Distrito Federal' },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '17:00',
      },
    ],
    sameAs: [
      'https://www.instagram.com/grupobraco_',
      'https://www.facebook.com/bracogoiania/',
      'https://br.linkedin.com/company/grupobraco',
    ],
    hasMap: 'https://www.google.com/maps/search/BR+Aço+Aparecida+de+Goiânia',
    knowsAbout: [
      'Corte e Dobra de Vergalhão',
      'Armaduras Prontas',
      'Vergalhões CA-25, CA-50, CA-60',
      'Treliças Metálicas para Laje',
      'Telas Soldadas e Malhas Pop',
      'Pregos e Arames',
      // BusinessFacets (não viram nó de catálogo próprio — entram aqui)
      'Ferragista',
      'Ferragens para Construção',
      'Distribuição de Ferro e Aço',
      'Material de Construção',
    ],
    parentOrganization: { '@id': ID.organization },
    founder: { '@id': ID.person },
    hasOfferCatalog: { '@id': ID.catalog },
  };
}

function organizationNode() {
  return {
    '@type': 'Organization',
    '@id': ID.organization,
    name: 'Grupo BR Aço',
    alternateName: ['BR Aço', 'Casa Brasileira de Aço', 'Grupo Braco'],
    description:
      'Indústria goiana especializada em corte e dobra de vergalhão, vergalhões CA-25/CA-50/CA-60, treliças, telas soldadas e malhas para construção civil. Atende GO e DF com entrega em obra.',
    url: SITE,
    logo: { '@type': 'ImageObject', url: `${SITE}/logo-braco.png`, width: 1920, height: 440 },
    foundingLocation: { '@type': 'Place', name: 'Goiânia, Goiás, Brasil' },
    areaServed: ['Goiás', 'Distrito Federal'],
    sameAs: [
      'https://www.instagram.com/grupobraco_',
      'https://www.facebook.com/bracogoiania/',
      'https://br.linkedin.com/company/grupobraco',
    ],
    founder: { '@id': ID.person },
    subOrganization: { '@id': ID.localBusiness },
    hasOfferCatalog: { '@id': ID.catalog },
  };
}

function personNode() {
  return {
    '@type': 'Person',
    '@id': ID.person,
    name: 'Ismael Cavalcante',
    jobTitle: 'CEO e Diretor Comercial',
    worksFor: { '@id': ID.organization },
    affiliation: { '@id': ID.organization },
    url: `${SITE}/sobre#ismael-cavalcante`,
    sameAs: 'https://www.linkedin.com/in/ismael-cavalcante-a2359211/',
    alumniOf: { '@type': 'EducationalOrganization', name: 'Fundação Getulio Vargas (FGV)' },
    knowsAbout: [
      'Corte e Dobra de Vergalhão',
      'Aços para Construção Civil — CA-25, CA-50, CA-60',
      'Norma ABNT NBR 7480',
      'Armaduras Prontas para Obra',
      'Treliças Metálicas para Laje',
      'Telas Soldadas e Malhas Pop',
      'Mercado de Aço em Goiás e Distrito Federal',
      'Gestão de Indústria Siderúrgica',
    ],
    address: { '@type': 'PostalAddress', addressLocality: 'Goiânia', addressRegion: 'GO', addressCountry: 'BR' },
  };
}

function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': ID.website,
    url: SITE,
    name: 'BR Aço',
    publisher: { '@id': ID.organization },
    inLanguage: 'pt-BR',
  };
}

function blogNode() {
  return {
    '@type': 'Blog',
    '@id': ID.blog,
    url: `${SITE}/blog`,
    name: 'Blog BR Aço',
    publisher: { '@id': ID.organization },
    isPartOf: { '@id': ID.website },
    inLanguage: 'pt-BR',
  };
}

// ── Catálogo Service/Product — derivado de landingProducts.ts ──────────────
// Nós enxutos de propósito: o shell de dist/index.html é congelado e repetido
// em ~197 snapshots (ver prerender.ts). description curta, sem features[]/faq[]
// nem areaServed por cidade — isso fica no patch da página dona (CorteEDobra,
// LandingPage). Orçamento: ~9 nós × ~380B ≈ 3,4KB cru.

const STATE_AREA_SERVED = [
  { '@type': 'State', name: 'Goiás' },
  { '@type': 'State', name: 'Distrito Federal' },
];

function catalogNodes() {
  const catalogSlugs = productSlugs.filter(s => landingProducts[s].schemaKind !== 'BusinessFacet');

  /** id do nó de catálogo de um slug, respeitando o schemaKind dele mesmo. */
  const nodeIdFor = (slug: string) =>
    landingProducts[slug].schemaKind === 'Service' ? ID.service(slug) : ID.product(slug);

  const entityNodes = catalogSlugs.map(slug => {
    const p = landingProducts[slug];
    const isService = p.schemaKind === 'Service';
    const relatedIds = p.relatedSlugs
      .filter(s => landingProducts[s] && landingProducts[s].schemaKind !== 'BusinessFacet')
      .map(s => ({ '@id': nodeIdFor(s) }));

    const base: Record<string, unknown> = {
      '@type': p.schemaKind,
      '@id': nodeIdFor(slug),
      name: p.schemaCategory,
      description: p.shortDesc,
      url: `${SITE}/${slug}/goiania`,
      areaServed: STATE_AREA_SERVED,
      ...(relatedIds.length ? { isRelatedTo: relatedIds } : {}),
    };

    if (isService) {
      base.serviceType = p.schemaCategory;
      base.provider = { '@id': ID.organization };
    } else {
      base.brand = { '@id': ID.organization };
    }

    return base;
  });

  const offerCatalog = {
    '@type': 'OfferCatalog',
    '@id': ID.catalog,
    name: 'Aço para construção civil — BR Aço',
    itemListElement: catalogSlugs.map(slug => ({
      '@type': 'Offer',
      itemOffered: { '@id': nodeIdFor(slug) },
      seller: { '@id': ID.organization },
    })),
  };

  return [...entityNodes, offerCatalog];
}

// ── Montagem final ──────────────────────────────────────────────────────────

export function rootGraphNodes(): object[] {
  return [
    localBusinessNode(),
    organizationNode(),
    personNode(),
    websiteNode(),
    blogNode(),
    ...catalogNodes(),
  ];
}

export function rootGraphHtml(): string {
  const json = JSON.stringify({ '@context': 'https://schema.org', '@graph': rootGraphNodes() });
  return `<script type="application/ld+json">${json}</script>`;
}
