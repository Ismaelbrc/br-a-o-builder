// Localizações para landing pages programáticas
// distanceKm = distância da fábrica (Aparecida de Goiânia)

export type LocationType = 'city' | 'neighborhood' | 'region';

export type LandingLocation = {
  slug: string;
  name: string;           // "Setor Sul"
  fullName: string;       // "Setor Sul, Goiânia – GO"
  city: string;           // "Goiânia"
  citySlug: string;       // "goiania"
  state: string;          // "GO"
  type: LocationType;
  distanceKm: number;
  region: string;         // "Goiás" | "DF" | "Entorno DF"
};

function city(slug: string, name: string, state: string, distanceKm: number, region: string): LandingLocation {
  return { slug, name, fullName: `${name} – ${state}`, city: name, citySlug: slug, state, type: 'city', distanceKm, region };
}

function hood(slug: string, name: string, cityName: string, citySlug: string, state: string, distanceKm: number, region: string): LandingLocation {
  return { slug, name, fullName: `${name}, ${cityName} – ${state}`, city: cityName, citySlug, state, type: 'neighborhood', distanceKm, region };
}

function region(slug: string, name: string, distanceKm: number): LandingLocation {
  return { slug, name, fullName: `${name} – DF`, city: name, citySlug: slug, state: 'DF', type: 'region', distanceKm, region: 'DF' };
}

// ─── Helper: delivery label ────────────────────────────────────────────────
export function getDeliveryLabel(distanceKm: number): string {
  if (distanceKm <= 60) return 'com entrega em até 24h';
  if (distanceKm <= 300) return 'com entrega em até 48h';
  return 'com entrega em até 72h';
}

// ─── Localizações ──────────────────────────────────────────────────────────
const locations: LandingLocation[] = [

  // ── Cidades de Goiás (20 maiores) ─────────────────────────────────────
  city('goiania',               'Goiânia',               'GO',  15,  'Goiás'),
  city('aparecida-de-goiania',  'Aparecida de Goiânia',  'GO',   5,  'Goiás'),
  city('anapolis',              'Anápolis',               'GO',  52,  'Goiás'),
  city('rio-verde',             'Rio Verde',              'GO', 245,  'Goiás'),
  city('luziania',              'Luziânia',               'GO', 215,  'Goiás'),
  city('aguas-lindas-de-goias', 'Águas Lindas de Goiás', 'GO', 185,  'Entorno DF'),
  city('valparaiso-de-goias',   'Valparaíso de Goiás',   'GO', 200,  'Entorno DF'),
  city('trindade',              'Trindade',               'GO',  25,  'Goiás'),
  city('formosa',               'Formosa',                'GO', 280,  'Goiás'),
  city('novo-gama',             'Novo Gama',              'GO', 190,  'Entorno DF'),
  city('senador-canedo',        'Senador Canedo',         'GO',  20,  'Goiás'),
  city('itumbiara',             'Itumbiara',              'GO', 220,  'Goiás'),
  city('jatai',                 'Jataí',                  'GO', 325,  'Goiás'),
  city('catalao',               'Catalão',                'GO', 275,  'Goiás'),
  city('caldas-novas',          'Caldas Novas',           'GO', 165,  'Goiás'),
  city('planaltina-go',         'Planaltina',             'GO', 225,  'Entorno DF'),
  city('goianesia',             'Goianésia',              'GO', 155,  'Goiás'),
  city('mineiros',              'Mineiros',               'GO', 455,  'Goiás'),
  city('inhumas',               'Inhumas',                'GO',  50,  'Goiás'),
  city('ceres',                 'Ceres',                  'GO', 170,  'Goiás'),

  // ── Regiões Administrativas do DF (33) ────────────────────────────────
  region('brasilia',          'Brasília',            210),
  region('gama',              'Gama',                190),
  region('taguatinga',        'Taguatinga',          200),
  region('brazlandia',        'Brazlândia',          230),
  region('sobradinho',        'Sobradinho',          215),
  region('planaltina-df',     'Planaltina (DF)',     240),
  region('paranoa',           'Paranoá',             225),
  region('nucleo-bandeirante','Núcleo Bandeirante',  205),
  region('ceilandia',         'Ceilândia',           195),
  region('guara',             'Guará',               205),
  region('cruzeiro',          'Cruzeiro',            210),
  region('samambaia',         'Samambaia',           200),
  region('santa-maria',       'Santa Maria',         195),
  region('sao-sebastiao',     'São Sebastião',       225),
  region('recanto-das-emas',  'Recanto das Emas',    195),
  region('lago-sul',          'Lago Sul',            215),
  region('riacho-fundo',      'Riacho Fundo',        200),
  region('lago-norte',        'Lago Norte',          215),
  region('candangolandia',    'Candangolândia',      205),
  region('aguas-claras',      'Águas Claras',        200),
  region('riacho-fundo-ii',   'Riacho Fundo II',     200),
  region('sudoeste-octogonal','Sudoeste/Octogonal',  210),
  region('varjao',            'Varjão',              215),
  region('park-way',          'Park Way',            215),
  region('estrutural',        'Estrutural',          195),
  region('sobradinho-ii',     'Sobradinho II',       220),
  region('jardim-botanico',   'Jardim Botânico',     225),
  region('itapoa',            'Itapoã',              230),
  region('sia',               'SIA',                 200),
  region('vicente-pires',     'Vicente Pires',       200),
  region('fercal',            'Fercal',              225),
  region('sol-nascente',      'Sol Nascente',        195),
  region('arniqueira',        'Arniqueira',          200),

  // ── Bairros de Goiânia (~80) ──────────────────────────────────────────
  hood('goiania-setor-sul',         'Setor Sul',              'Goiânia', 'goiania', 'GO', 18, 'Goiás'),
  hood('goiania-setor-oeste',       'Setor Oeste',            'Goiânia', 'goiania', 'GO', 18, 'Goiás'),
  hood('goiania-setor-bueno',       'Setor Bueno',            'Goiânia', 'goiania', 'GO', 17, 'Goiás'),
  hood('goiania-setor-marista',     'Setor Marista',          'Goiânia', 'goiania', 'GO', 17, 'Goiás'),
  hood('goiania-setor-central',     'Setor Central',          'Goiânia', 'goiania', 'GO', 15, 'Goiás'),
  hood('goiania-setor-norte',       'Setor Norte',            'Goiânia', 'goiania', 'GO', 14, 'Goiás'),
  hood('goiania-setor-leste',       'Setor Leste',            'Goiânia', 'goiania', 'GO', 20, 'Goiás'),
  hood('goiania-setor-aeroporto',   'Setor Aeroporto',        'Goiânia', 'goiania', 'GO', 12, 'Goiás'),
  hood('goiania-setor-universitario','Setor Universitário',   'Goiânia', 'goiania', 'GO', 16, 'Goiás'),
  hood('goiania-pedro-ludovico',    'Setor Pedro Ludovico',   'Goiânia', 'goiania', 'GO', 14, 'Goiás'),
  hood('goiania-nova-suica',        'Setor Nova Suíça',       'Goiânia', 'goiania', 'GO', 18, 'Goiás'),
  hood('goiania-coimbra',           'Setor Coimbra',          'Goiânia', 'goiania', 'GO', 16, 'Goiás'),
  hood('goiania-campinas',          'Setor Campinas',         'Goiânia', 'goiania', 'GO', 12, 'Goiás'),
  hood('goiania-jardim-goias',      'Jardim Goiás',           'Goiânia', 'goiania', 'GO', 20, 'Goiás'),
  hood('goiania-setor-bela-vista',  'Setor Bela Vista',       'Goiânia', 'goiania', 'GO', 20, 'Goiás'),
  hood('goiania-setor-criacao',     'Setor Criação',          'Goiânia', 'goiania', 'GO', 14, 'Goiás'),
  hood('goiania-setor-serrinha',    'Setor Serrinha',         'Goiânia', 'goiania', 'GO', 22, 'Goiás'),
  hood('goiania-santos-dumont',     'Santos Dumont',          'Goiânia', 'goiania', 'GO', 22, 'Goiás'),
  hood('goiania-parque-amazonia',   'Parque Amazônia',        'Goiânia', 'goiania', 'GO', 18, 'Goiás'),
  hood('goiania-novo-horizonte',    'Novo Horizonte',         'Goiânia', 'goiania', 'GO', 24, 'Goiás'),
  hood('goiania-vila-nova',         'Vila Nova',              'Goiânia', 'goiania', 'GO', 14, 'Goiás'),
  hood('goiania-jardim-europa',     'Jardim Europa',          'Goiânia', 'goiania', 'GO', 24, 'Goiás'),
  hood('goiania-jardim-atlantico',  'Jardim Atlântico',       'Goiânia', 'goiania', 'GO', 22, 'Goiás'),
  hood('goiania-jardim-novo-mundo', 'Jardim Novo Mundo',      'Goiânia', 'goiania', 'GO', 18, 'Goiás'),
  hood('goiania-jardim-curitiba',   'Jardim Curitiba',        'Goiânia', 'goiania', 'GO', 20, 'Goiás'),
  hood('goiania-santa-genoveva',    'Santa Genoveva',         'Goiânia', 'goiania', 'GO', 20, 'Goiás'),
  hood('goiania-alto-da-gloria',    'Alto da Glória',         'Goiânia', 'goiania', 'GO', 16, 'Goiás'),
  hood('goiania-dos-funcionarios',  'Setor dos Funcionários', 'Goiânia', 'goiania', 'GO', 18, 'Goiás'),
  hood('goiania-jardim-america',    'Jardim América',         'Goiânia', 'goiania', 'GO', 20, 'Goiás'),
  hood('goiania-eldorado',          'Residencial Eldorado',   'Goiânia', 'goiania', 'GO', 22, 'Goiás'),
  hood('goiania-parque-oeste',      'Parque Oeste Industrial','Goiânia', 'goiania', 'GO', 22, 'Goiás'),
  hood('goiania-popular-cerrado',   'Popular do Cerrado',     'Goiânia', 'goiania', 'GO', 24, 'Goiás'),
  hood('goiania-goiania-2',         'Goiânia 2',              'Goiânia', 'goiania', 'GO', 20, 'Goiás'),
  hood('goiania-vila-rosa',         'Vila Rosa',              'Goiânia', 'goiania', 'GO', 18, 'Goiás'),
  hood('goiania-nova-esperanca',    'Nova Esperança',         'Goiânia', 'goiania', 'GO', 24, 'Goiás'),
  hood('goiania-sudoeste',          'Setor Sudoeste',         'Goiânia', 'goiania', 'GO', 16, 'Goiás'),
  hood('goiania-faicalville',       'Setor Faiçalville',      'Goiânia', 'goiania', 'GO', 20, 'Goiás'),
  hood('goiania-jao',               'Setor Jaó',              'Goiânia', 'goiania', 'GO', 18, 'Goiás'),
  hood('goiania-aeroporto',         'Jardim Aeroporto',       'Goiânia', 'goiania', 'GO', 12, 'Goiás'),
  hood('goiania-jardim-presidente', 'Jardim Presidente',      'Goiânia', 'goiania', 'GO', 22, 'Goiás'),
  hood('goiania-capuava',           'Setor Capuava',          'Goiânia', 'goiania', 'GO', 20, 'Goiás'),
  hood('goiania-jardim-guanabara',  'Jardim Guanabara',       'Goiânia', 'goiania', 'GO', 22, 'Goiás'),
  hood('goiania-alto-do-vale',      'Setor Alto do Vale',     'Goiânia', 'goiania', 'GO', 24, 'Goiás'),
  hood('goiania-morada-do-sol',     'Morada do Sol',          'Goiânia', 'goiania', 'GO', 22, 'Goiás'),
  hood('goiania-itatiaia',          'Setor Itatiaia',         'Goiânia', 'goiania', 'GO', 20, 'Goiás'),
  hood('goiania-parque-anhanguera', 'Parque Anhanguera',      'Goiânia', 'goiania', 'GO', 18, 'Goiás'),
  hood('goiania-cidade-jardim',     'Cidade Jardim',          'Goiânia', 'goiania', 'GO', 22, 'Goiás'),
  hood('goiania-paulo-camargo',     'Setor Paulo Camargo',    'Goiânia', 'goiania', 'GO', 24, 'Goiás'),
  hood('goiania-monte-alegre',      'Setor Monte Alegre',     'Goiânia', 'goiania', 'GO', 20, 'Goiás'),
  hood('goiania-tocantins',         'Setor Tocantins',        'Goiânia', 'goiania', 'GO', 14, 'Goiás'),
  hood('goiania-sao-judas-tadeu',   'Setor São Judas Tadeu',  'Goiânia', 'goiania', 'GO', 22, 'Goiás'),
  hood('goiania-bougainville',      'Setor Bougainville',     'Goiânia', 'goiania', 'GO', 18, 'Goiás'),
  hood('goiania-jardim-florenca',   'Jardim Florença',        'Goiânia', 'goiania', 'GO', 20, 'Goiás'),
  hood('goiania-sao-lourenco',      'Setor São Lourenço',     'Goiânia', 'goiania', 'GO', 18, 'Goiás'),
  hood('goiania-santa-helena',      'Setor Santa Helena',     'Goiânia', 'goiania', 'GO', 20, 'Goiás'),
  hood('goiania-jardim-santo-antonio','Jardim Santo Antônio', 'Goiânia', 'goiania', 'GO', 22, 'Goiás'),
  hood('goiania-nova-aurora',       'Setor Nova Aurora',      'Goiânia', 'goiania', 'GO', 24, 'Goiás'),
  hood('goiania-garavelo',          'Setor Garavelo',         'Goiânia', 'goiania', 'GO', 14, 'Goiás'),
  hood('goiania-setor-negrinho',    'Setor Negrinho',         'Goiânia', 'goiania', 'GO', 12, 'Goiás'),
  hood('goiania-parque-santa-cruz', 'Parque Santa Cruz',      'Goiânia', 'goiania', 'GO', 20, 'Goiás'),
  hood('goiania-lemos-magalhaes',   'Lemos de Magalhães',     'Goiânia', 'goiania', 'GO', 18, 'Goiás'),
  hood('goiania-jardim-esmeraldas', 'Jardim das Esmeraldas',  'Goiânia', 'goiania', 'GO', 22, 'Goiás'),
  hood('goiania-setor-pedro-ii',    'Setor Pedro II',         'Goiânia', 'goiania', 'GO', 16, 'Goiás'),
  hood('goiania-distrito-industrial','Distrito Industrial',   'Goiânia', 'goiania', 'GO', 12, 'Goiás'),
  hood('goiania-fama',              'Setor Fama',             'Goiânia', 'goiania', 'GO', 16, 'Goiás'),

  // ── Bairros de Aparecida de Goiânia (~55) ────────────────────────────
  hood('aparecida-garavelo',        'Setor Garavelo',         'Aparecida de Goiânia', 'aparecida-de-goiania', 'GO',  8, 'Goiás'),
  hood('aparecida-conde-arcos',     'Setor Conde dos Arcos',  'Aparecida de Goiânia', 'aparecida-de-goiania', 'GO',  6, 'Goiás'),
  hood('aparecida-recanto-bosque',  'Recanto do Bosque',      'Aparecida de Goiânia', 'aparecida-de-goiania', 'GO',  7, 'Goiás'),
  hood('aparecida-palmital',        'Setor Palmital',         'Aparecida de Goiânia', 'aparecida-de-goiania', 'GO',  5, 'Goiás'),
  hood('aparecida-independencia',   'Setor Independência',    'Aparecida de Goiânia', 'aparecida-de-goiania', 'GO',  4, 'Goiás'),
  hood('aparecida-jardim-flores',   'Jardim das Flores',      'Aparecida de Goiânia', 'aparecida-de-goiania', 'GO',  6, 'Goiás'),
  hood('aparecida-jardim-bela-vista','Jardim Bela Vista',     'Aparecida de Goiânia', 'aparecida-de-goiania', 'GO',  5, 'Goiás'),
  hood('aparecida-vila-sao-tomas',  'Vila São Tomás',         'Aparecida de Goiânia', 'aparecida-de-goiania', 'GO',  5, 'Goiás'),
  hood('aparecida-parque-nacoes',   'Parque das Nações',      'Aparecida de Goiânia', 'aparecida-de-goiania', 'GO',  6, 'Goiás'),
  hood('aparecida-bernardi',        'Setor Bernardi',         'Aparecida de Goiânia', 'aparecida-de-goiania', 'GO',  5, 'Goiás'),
  hood('aparecida-bom-jesus',       'Setor Bom Jesus',        'Aparecida de Goiânia', 'aparecida-de-goiania', 'GO',  4, 'Goiás'),
  hood('aparecida-bom-pastor',      'Setor Bom Pastor',       'Aparecida de Goiânia', 'aparecida-de-goiania', 'GO',  5, 'Goiás'),
  hood('aparecida-caribi',          'Setor Caribi',           'Aparecida de Goiânia', 'aparecida-de-goiania', 'GO',  6, 'Goiás'),
  hood('aparecida-cruzeiro-sul',    'Cruzeiro do Sul',        'Aparecida de Goiânia', 'aparecida-de-goiania', 'GO',  7, 'Goiás'),
  hood('aparecida-estrela-dalva',   'Estrela Dalva',          'Aparecida de Goiânia', 'aparecida-de-goiania', 'GO',  6, 'Goiás'),
  hood('aparecida-finsocial',       'Setor Finsocial',        'Aparecida de Goiânia', 'aparecida-de-goiania', 'GO',  5, 'Goiás'),
  hood('aparecida-industrial',      'Setor Industrial',       'Aparecida de Goiânia', 'aparecida-de-goiania', 'GO',  3, 'Goiás'),
  hood('aparecida-jardim-america',  'Jardim América',         'Aparecida de Goiânia', 'aparecida-de-goiania', 'GO',  6, 'Goiás'),
  hood('aparecida-lago-azul',       'Setor Lago Azul',        'Aparecida de Goiânia', 'aparecida-de-goiania', 'GO',  8, 'Goiás'),
  hood('aparecida-marajo',           'Setor Marajó',           'Aparecida de Goiânia', 'aparecida-de-goiania', 'GO',  7, 'Goiás'),
  hood('aparecida-nova-aparecida',  'Nova Aparecida',         'Aparecida de Goiânia', 'aparecida-de-goiania', 'GO',  6, 'Goiás'),
  hood('aparecida-nova-esperanca',  'Nova Esperança',         'Aparecida de Goiânia', 'aparecida-de-goiania', 'GO',  5, 'Goiás'),
  hood('aparecida-olimpico',        'Setor Olímpico',         'Aparecida de Goiânia', 'aparecida-de-goiania', 'GO',  7, 'Goiás'),
  hood('aparecida-primavera',       'Setor Primavera',        'Aparecida de Goiânia', 'aparecida-de-goiania', 'GO',  6, 'Goiás'),
  hood('aparecida-recanto-tropical','Recanto Tropical',       'Aparecida de Goiânia', 'aparecida-de-goiania', 'GO',  7, 'Goiás'),
  hood('aparecida-rio-claro',       'Setor Rio Claro',        'Aparecida de Goiânia', 'aparecida-de-goiania', 'GO',  6, 'Goiás'),
  hood('aparecida-santo-andre',     'Setor Santo André',      'Aparecida de Goiânia', 'aparecida-de-goiania', 'GO',  5, 'Goiás'),
  hood('aparecida-serra',           'Setor Serra',            'Aparecida de Goiânia', 'aparecida-de-goiania', 'GO',  8, 'Goiás'),
  hood('aparecida-serra-dourada',   'Serra Dourada',          'Aparecida de Goiânia', 'aparecida-de-goiania', 'GO',  9, 'Goiás'),
  hood('aparecida-tocantins',       'Setor Tocantins',        'Aparecida de Goiânia', 'aparecida-de-goiania', 'GO',  5, 'Goiás'),
  hood('aparecida-vila-brasilia',   'Vila Brasília',          'Aparecida de Goiânia', 'aparecida-de-goiania', 'GO',  4, 'Goiás'),
  hood('aparecida-vila-rica',       'Vila Rica',              'Aparecida de Goiânia', 'aparecida-de-goiania', 'GO',  5, 'Goiás'),
  hood('aparecida-villa-real',      'Villa Real',             'Aparecida de Goiânia', 'aparecida-de-goiania', 'GO',  7, 'Goiás'),
  hood('aparecida-santa-barbara',   'Conjunto Santa Bárbara', 'Aparecida de Goiânia', 'aparecida-de-goiania', 'GO',  6, 'Goiás'),
  hood('aparecida-sonho-verde',     'Residencial Sonho Verde','Aparecida de Goiânia', 'aparecida-de-goiania', 'GO',  8, 'Goiás'),
  hood('aparecida-siderurgica',     'Setor Siderúrgica',      'Aparecida de Goiânia', 'aparecida-de-goiania', 'GO',  3, 'Goiás'),
  hood('aparecida-orion',           'Setor Orion',            'Aparecida de Goiânia', 'aparecida-de-goiania', 'GO',  6, 'Goiás'),
  hood('aparecida-andrade',         'Setor Andrade',          'Aparecida de Goiânia', 'aparecida-de-goiania', 'GO',  4, 'Goiás'),
  hood('aparecida-morada-do-sol',   'Morada do Sol',          'Aparecida de Goiânia', 'aparecida-de-goiania', 'GO',  7, 'Goiás'),
  hood('aparecida-buriti-sereno',   'Jardim Buriti Sereno',   'Aparecida de Goiânia', 'aparecida-de-goiania', 'GO',  8, 'Goiás'),

  // ── Bairros de Anápolis (~45) ─────────────────────────────────────────
  hood('anapolis-centro',           'Centro',                 'Anápolis', 'anapolis', 'GO', 52, 'Goiás'),
  hood('anapolis-setor-sul',        'Setor Sul',              'Anápolis', 'anapolis', 'GO', 52, 'Goiás'),
  hood('anapolis-setor-norte',      'Setor Norte',            'Anápolis', 'anapolis', 'GO', 53, 'Goiás'),
  hood('anapolis-jundiai',          'Jundiaí',                'Anápolis', 'anapolis', 'GO', 52, 'Goiás'),
  hood('anapolis-vila-gois',        'Vila Góis',              'Anápolis', 'anapolis', 'GO', 51, 'Goiás'),
  hood('anapolis-recanto-sol',      'Recanto do Sol',         'Anápolis', 'anapolis', 'GO', 53, 'Goiás'),
  hood('anapolis-maracana',         'Setor Maracanã',         'Anápolis', 'anapolis', 'GO', 54, 'Goiás'),
  hood('anapolis-parque-brasilia',  'Parque Brasília',        'Anápolis', 'anapolis', 'GO', 53, 'Goiás'),
  hood('anapolis-calixtoladia',      'Calixtolândia',          'Anápolis', 'anapolis', 'GO', 52, 'Goiás'),
  hood('anapolis-daltro-filho',     'Daltro Filho',           'Anápolis', 'anapolis', 'GO', 51, 'Goiás'),
  hood('anapolis-progresso',        'Setor Progresso',        'Anápolis', 'anapolis', 'GO', 52, 'Goiás'),
  hood('anapolis-cidade-jardim',    'Cidade Jardim',          'Anápolis', 'anapolis', 'GO', 53, 'Goiás'),
  hood('anapolis-arco-verde',       'Arco Verde',             'Anápolis', 'anapolis', 'GO', 54, 'Goiás'),
  hood('anapolis-antonio-azevedo',  'Antônio Azevedo',        'Anápolis', 'anapolis', 'GO', 52, 'Goiás'),
  hood('anapolis-vila-jaiara',      'Vila Jaiara',            'Anápolis', 'anapolis', 'GO', 51, 'Goiás'),
  hood('anapolis-bandeirantes',     'Setor dos Bandeirantes', 'Anápolis', 'anapolis', 'GO', 53, 'Goiás'),
  hood('anapolis-industrial',       'Setor Industrial',       'Anápolis', 'anapolis', 'GO', 50, 'Goiás'),
  hood('anapolis-itamaraty',        'Setor Itamaraty',        'Anápolis', 'anapolis', 'GO', 52, 'Goiás'),
  hood('anapolis-santos-dumont',    'Santos Dumont',          'Anápolis', 'anapolis', 'GO', 51, 'Goiás'),
  hood('anapolis-sao-carlos',       'São Carlos',             'Anápolis', 'anapolis', 'GO', 52, 'Goiás'),
  hood('anapolis-sao-francisco',    'São Francisco',          'Anápolis', 'anapolis', 'GO', 53, 'Goiás'),
  hood('anapolis-portela',          'Setor Engenheiro Portela','Anápolis','anapolis', 'GO', 52, 'Goiás'),
  hood('anapolis-estadio',          'Setor Estádio',          'Anápolis', 'anapolis', 'GO', 52, 'Goiás'),
  hood('anapolis-setor-novo',       'Setor Novo',             'Anápolis', 'anapolis', 'GO', 53, 'Goiás'),
  hood('anapolis-bela-suica',       'Residencial Bela Suíça', 'Anápolis', 'anapolis', 'GO', 53, 'Goiás'),
  hood('anapolis-sao-miguel',       'Setor São Miguel',       'Anápolis', 'anapolis', 'GO', 54, 'Goiás'),
  hood('anapolis-tropical',         'Setor Tropical',         'Anápolis', 'anapolis', 'GO', 52, 'Goiás'),
  hood('anapolis-dom-bosco',        'Dom Bosco',              'Anápolis', 'anapolis', 'GO', 51, 'Goiás'),
  hood('anapolis-macambira',        'Residencial Macambira',  'Anápolis', 'anapolis', 'GO', 52, 'Goiás'),
  hood('anapolis-setor-leste',      'Setor Leste',            'Anápolis', 'anapolis', 'GO', 53, 'Goiás'),
  hood('anapolis-parque-central',   'Parque Central',         'Anápolis', 'anapolis', 'GO', 52, 'Goiás'),
  hood('anapolis-pedroso',          'Setor Pedroso',          'Anápolis', 'anapolis', 'GO', 51, 'Goiás'),
  hood('anapolis-prado',            'Setor Prado',            'Anápolis', 'anapolis', 'GO', 52, 'Goiás'),
  hood('anapolis-costa-sul',        'Costa Sul',              'Anápolis', 'anapolis', 'GO', 53, 'Goiás'),
  hood('anapolis-lourdes',          'Bairro de Lourdes',      'Anápolis', 'anapolis', 'GO', 52, 'Goiás'),
];

// Index por slug para lookup O(1)
export const landingLocations: Record<string, LandingLocation> =
  Object.fromEntries(locations.map(l => [l.slug, l]));

export const locationSlugs = locations.map(l => l.slug);
export const allLocations = locations;
