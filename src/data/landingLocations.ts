// Localizações para landing pages programáticas
// distanceKm = distância da fábrica (Aparecida de Goiânia)

export type LocationType = 'city' | 'neighborhood' | 'region';

// Conteúdo único por localidade — presença desse campo habilita indexação
export type UniqueContent = {
  marketContext: string;    // 2-3 frases sobre o mercado local de construção
  neighborhoods: string[];  // bairros/setores principais atendidos
  route: string;            // rota de entrega e tempo estimado
  buildingTypes: string;    // tipos de obra predominantes
  population: number;       // população estimada
};

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
  uniqueContent?: UniqueContent; // presença = indexável pelo Google
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
  {
    ...city('goiania', 'Goiânia', 'GO', 15, 'Goiás'),
    uniqueContent: {
      marketContext: 'Goiânia concentra o maior volume de obras de Goiás, com destaque para condomínios verticais no Setor Bueno, Jardim América e Nova Suíça, e grandes empreendimentos comerciais no Setor Oeste e Marista. A BR Aço abastece obras de todos os portes na capital — de residências unifamiliares no Jardim Goiás até torres com mais de 20 pavimentos no centro expandido. Com fábrica a apenas 15 km em Aparecida de Goiânia, garantimos a entrega mais rápida do mercado.',
      neighborhoods: ['Setor Bueno', 'Setor Marista', 'Jardim América', 'Nova Suíça', 'Setor Oeste', 'Setor Sul', 'Setor Coimbra', 'Jardim Goiás', 'Setor Campinas', 'Setor Central', 'Setor Jaó', 'Setor Faiçalville', 'Parque Amazônia', 'Vila Rosa', 'Setor Aeroporto'],
      route: 'via Anel Viário (BR-153), com tempo médio de entrega de 30 a 45 minutos',
      buildingTypes: 'condomínios verticais, torres comerciais, residências unifamiliares e obras de infraestrutura',
      population: 1_437_000,
    },
  },
  {
    ...city('aparecida-de-goiania', 'Aparecida de Goiânia', 'GO', 5, 'Goiás'),
    uniqueContent: {
      marketContext: 'Aparecida de Goiânia é o município onde fica a fábrica da BR Aço — no Polo Industrial, a apenas 5 km da nossa planta. A cidade tem crescimento imobiliário acelerado com forte expansão de condomínios horizontais fechados, loteamentos populares e galpões logísticos no eixo BR-153. Somos o fornecedor mais próximo e rápido para qualquer obra em Aparecida.',
      neighborhoods: ['Polo Industrial', 'Setor Garavelo', 'Setor Conde dos Arcos', 'Setor Palmital', 'Setor Independência', 'Setor Bom Jesus', 'Setor Serra', 'Serra Dourada', 'Jardim das Flores', 'Setor Industrial', 'Nova Aparecida', 'Setor Olímpico', 'Vila Brasília', 'Morada do Sol'],
      route: 'entrega local dentro de Aparecida de Goiânia, tempo médio de 15 a 25 minutos',
      buildingTypes: 'condomínios horizontais, galpões logísticos, loteamentos residenciais e obras populares',
      population: 600_000,
    },
  },
  {
    ...city('anapolis', 'Anápolis', 'GO', 52, 'Goiás'),
    uniqueContent: {
      marketContext: 'Anápolis é o maior hub logístico de Goiás, com o DAIA (Distrito Agroindustrial) e o Polo Farmacêutico gerando alta demanda por galpões industriais de grande porte. Além do setor industrial, a cidade registra forte crescimento de condomínios fechados e residências em bairros como Jundiaí e Parque Brasília. A BR Aço atende Anápolis via GO-060 com entregas programadas em até 48h.',
      neighborhoods: ['Centro', 'Jundiaí', 'DAIA', 'Setor Industrial', 'Setor Sul', 'Parque Brasília', 'Setor Norte', 'Setor Maracanã', 'Vila Góis', 'Setor Progresso', 'Cidade Jardim', 'Dom Bosco', 'Santos Dumont'],
      route: 'via GO-060 e BR-153, tempo médio de 50 a 60 minutos',
      buildingTypes: 'galpões industriais, condomínios fechados, residências e obras comerciais',
      population: 400_000,
    },
  },
  {
    ...city('rio-verde', 'Rio Verde', 'GO', 245, 'Goiás'),
    uniqueContent: {
      marketContext: 'Rio Verde é a capital do agronegócio goiano, com intensa demanda por construção de galpões agroindustriais, silos, frigoríficos e unidades de processamento de grãos. O crescimento urbano acelerado — impulsionado pelo agro — também gera alto volume de condomínios residenciais fechados e obras comerciais no centro expandido. A BR Aço entrega em Rio Verde em até 48h via BR-060.',
      neighborhoods: ['Centro', 'Setor Sul', 'Setor Industrial', 'Jardim Primavera', 'Setor Progresso', 'Setor Goiânia', 'Residencial Village', 'Jardim Europa'],
      route: 'via BR-060 e GO-184, tempo médio de 2h30min',
      buildingTypes: 'galpões agroindustriais, silos, obras comerciais e condomínios residenciais',
      population: 260_000,
    },
  },
  {
    ...city('luziania', 'Luziânia', 'GO', 215, 'Goiás'),
    uniqueContent: {
      marketContext: 'Luziânia é um dos municípios do Entorno DF com maior dinamismo imobiliário, abastecendo trabalhadores de Brasília que buscam residências a preços acessíveis. A cidade tem alta demanda por vergalhão e corte e dobra para casas, sobrados e pequenos condomínios populares. Grandes construtoras que operam no eixo Luziânia–Valparaíso também são atendidas com regularidade pela BR Aço.',
      neighborhoods: ['Centro', 'Setor Leste', 'Jardim Ingá', 'Parque Estrela Dalva', 'Setor Oeste', 'Jardim Bela Vista', 'Setor Santos Dumont'],
      route: 'via BR-040, tempo médio de 2h10min',
      buildingTypes: 'residências populares, sobrados, condomínios de médio padrão e obras de infraestrutura',
      population: 230_000,
    },
  },
  {
    ...city('aguas-lindas-de-goias', 'Águas Lindas de Goiás', 'GO', 185, 'Entorno DF'),
    uniqueContent: {
      marketContext: 'Águas Lindas de Goiás tem uma das maiores densidades populacionais do Entorno DF e concentra grande volume de obras residenciais populares conduzidas por construtores autônomos e pequenas construtoras locais. A alta demanda por vergalhão CA-50 para lajes, pilares e fundações é contínua. A BR Aço entrega com frota própria via BR-070 para atender o ritmo acelerado das obras na cidade.',
      neighborhoods: ['Centro', 'Setor Industriário', 'Parque da Barragem', 'Jardim Brasília', 'Expansão do Setor Central', 'Morada dos Pássaros', 'Setor de Chácaras'],
      route: 'via BR-070, tempo médio de 1h55min',
      buildingTypes: 'residências populares, sobrados, lajes e obras autônomas de pequeno e médio porte',
      population: 210_000,
    },
  },
  {
    ...city('valparaiso-de-goias', 'Valparaíso de Goiás', 'GO', 200, 'Entorno DF'),
    uniqueContent: {
      marketContext: 'Valparaíso de Goiás faz fronteira com Brasília e tem crescimento imobiliário concentrado em condomínios verticais na Etapa 1 e horizontais no Residencial das Américas. A proximidade com o DF atrai construtoras de médio porte que buscam aço certificado com entrega confiável. A BR Aço atende Valparaíso regularmente com cronograma de entrega alinhado ao andamento das obras.',
      neighborhoods: ['Etapa 1', 'Etapa 2', 'Etapa 3', 'Residencial das Américas', 'Chácaras Califórnia', 'Jardim Céu Azul', 'Setor de Mansões'],
      route: 'via BR-040, tempo médio de 2 horas',
      buildingTypes: 'condomínios verticais e horizontais, residências de médio padrão e obras comerciais',
      population: 180_000,
    },
  },
  {
    ...city('trindade', 'Trindade', 'GO', 25, 'Goiás'),
    uniqueContent: {
      marketContext: 'Trindade integra a Região Metropolitana de Goiânia e registra forte crescimento de condomínios horizontais fechados e residências unifamiliares, especialmente ao longo da BR-060. A cidade recebe obras de pequenas e médias construtoras que buscam aço com entrega rápida, aproveitando a proximidade com Goiânia e Aparecida de Goiânia.',
      neighborhoods: ['Centro', 'Setor Residencial', 'Vila Esperança', 'Jardim Santo Antônio', 'Parque Alvorada', 'Setor dos Funcionários', 'Jardim Planalto'],
      route: 'via BR-060, tempo médio de 30 a 35 minutos',
      buildingTypes: 'condomínios horizontais, residências unifamiliares e obras populares',
      population: 130_000,
    },
  },
  city('formosa',               'Formosa',                'GO', 280,  'Goiás'),
  city('novo-gama',             'Novo Gama',              'GO', 190,  'Entorno DF'),
  {
    ...city('senador-canedo', 'Senador Canedo', 'GO', 20, 'Goiás'),
    uniqueContent: {
      marketContext: 'Senador Canedo está em forte expansão imobiliária, com o Polo JK e novos loteamentos transformando o município em um dos que mais crescem na Região Metropolitana de Goiânia. A cidade atrai construtoras de pequeno e médio porte focadas em condomínios fechados e residências populares, com alta demanda por vergalhão CA-50 e corte e dobra.',
      neighborhoods: ['Polo JK', 'Setor Paranaíba', 'Setor Pinheiros', 'Centro', 'Residencial Santa Fé', 'Vila Maria', 'Jardim Bela Vista', 'Setor Industrial'],
      route: 'via GO-462 e BR-153, tempo médio de 25 a 30 minutos',
      buildingTypes: 'condomínios fechados, residências populares e loteamentos abertos em expansão',
      population: 120_000,
    },
  },
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
  {
    ...region('brasilia', 'Brasília', 210),
    uniqueContent: {
      marketContext: 'O Plano Piloto tem um mercado de construção diferente do resto do Distrito Federal: como Patrimônio Mundial da Unesco, o conjunto urbanístico é tombado pelo IPHAN e as superquadras têm regras rígidas — prédios de no máximo 6 pavimentos, pilotis livres e fachada padronizada. Isso limita construção nova e concentra a demanda em reformas estruturais, retrofit de fachada e obras nos setores comerciais, hoteleiros e de autarquias, onde as restrições são menores. A BR Aço atende essas obras com vergalhão CA-50/CA-60 certificado e corte e dobra sob medida, a partir da fábrica em Aparecida de Goiânia.',
      neighborhoods: ['Asa Sul', 'Asa Norte', 'Setor Comercial Sul', 'Setor Comercial Norte', 'Setor de Autarquias', 'Setor Hoteleiro'],
      route: 'via BR-060 e DF-003 (EPTG), tempo médio de 2h50min',
      buildingTypes: 'reformas estruturais e retrofit de fachada em superquadras, obras comerciais e institucionais',
      population: 199_000,
    },
  },
  region('gama',              'Gama',                190),
  region('brazlandia',        'Brazlândia',          230),
  region('sobradinho',        'Sobradinho',          215),
  {
    ...region('planaltina-df', 'Planaltina (DF)', 240),
    uniqueContent: {
      marketContext: 'Planaltina é uma das frentes de expansão urbana do Distrito Federal, com crescimento constante de loteamentos e condomínios horizontais nas regiões do Setor Tradicional, Vila Buritis e Jardim Roriz. O ritmo de obra combina autoconstrução residencial com pequenas construtoras locais atendendo o avanço dos novos loteamentos — perfil parecido com o das cidades do entorno goiano que a BR Aço já atende. Entregamos vergalhão CA-50 e corte e dobra a partir da fábrica em Aparecida de Goiânia.',
      neighborhoods: ['Setor Tradicional', 'Vila Buritis', 'Jardim Roriz', 'Vila Nossa Senhora de Fátima', 'Estâncias Mestre D\'Armas', 'Vale do Amanhecer'],
      route: 'via BR-020 e DF-128, tempo médio de 3h10min',
      buildingTypes: 'loteamentos residenciais, condomínios horizontais, autoconstrução e ampliações',
      population: 180_000,
    },
  },
  region('paranoa',           'Paranoá',             225),
  region('nucleo-bandeirante','Núcleo Bandeirante',  205),
  region('guara',             'Guará',               205),
  region('cruzeiro',          'Cruzeiro',            210),
  region('santa-maria',       'Santa Maria',         195),
  region('sao-sebastiao',     'São Sebastião',       225),
  region('recanto-das-emas',  'Recanto das Emas',    195),
  region('lago-sul',          'Lago Sul',            215),
  region('riacho-fundo',      'Riacho Fundo',        200),
  region('lago-norte',        'Lago Norte',          215),
  region('candangolandia',    'Candangolândia',      205),
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
  {
    ...region('aguas-claras', 'Águas Claras', 200),
    uniqueContent: {
      marketContext: 'Águas Claras concentra o maior volume de construção vertical do Distrito Federal, com torres residenciais e comerciais de grande porte ao longo de toda a região. Esse padrão de obra consome grandes volumes de vergalhão CA-50 e coluna pronta por pavimento, com entrega programada por etapa da concretagem para não sobrecarregar o canteiro limitado das torres. A BR Aço atende construtoras e incorporadoras de Águas Claras a partir da fábrica em Aparecida de Goiânia.',
      neighborhoods: ['Águas Claras Centro', 'Rua das Pitangueiras', 'Areal', 'Norte', 'Sul', 'Burle Marx'],
      route: 'via DF-003 (EPTG) e DF-095, tempo médio de 2h40min',
      buildingTypes: 'torres residenciais e comerciais verticais, condomínios de alto padrão e obras de grande porte',
      population: 150_000,
    },
  },
  {
    ...region('taguatinga', 'Taguatinga', 200),
    uniqueContent: {
      marketContext: 'Taguatinga é uma das Regiões Administrativas mais populosas e comercialmente ativas do DF, com forte demanda tanto de obras residenciais quanto comerciais — do centro comercial da Taguatinga Centro às expansões residenciais na Taguatinga Norte e Sul. A BR Aço atende essa diversidade com corte e dobra industrial, entregando peças identificadas por posição no canteiro para acelerar a armação em obras de qualquer porte.',
      neighborhoods: ['Taguatinga Centro', 'Taguatinga Norte', 'Taguatinga Sul', 'QNL', 'Setor Industrial', 'Pistão Sul'],
      route: 'via DF-003 (EPTG) e BR-070, tempo médio de 2h30min',
      buildingTypes: 'obras comerciais, residências unifamiliares, edifícios multifamiliares e reformas',
      population: 220_000,
    },
  },
  {
    ...region('ceilandia', 'Ceilândia', 195),
    uniqueContent: {
      marketContext: 'Ceilândia é a Região Administrativa mais populosa do Distrito Federal, com demanda constante de vergalhão CA-50 para residências, reformas, ampliações (puxadinhos) e pequenos condomínios. O ritmo intenso de autoconstrução e pequenas construtoras locais exige entrega confiável e aço com a mesma certificação ABNT usada nas obras de Goiânia. A BR Aço entrega em Ceilândia a partir da fábrica em Aparecida de Goiânia.',
      neighborhoods: ['Ceilândia Centro', 'QNM', 'Setor O', 'Setor P Norte', 'Setor P Sul', 'Expansão do Setor O'],
      route: 'via BR-070 e DF-180, tempo médio de 2h15min',
      buildingTypes: 'residências populares, ampliações e reformas, e pequenos condomínios',
      population: 490_000,
    },
  },
  {
    ...region('samambaia', 'Samambaia', 200),
    uniqueContent: {
      marketContext: 'Samambaia é uma das Regiões Administrativas de maior crescimento residencial do Distrito Federal, com expansão contínua de loteamentos e pequenos condomínios. A demanda predominante é por obras de pequeno e médio porte, onde vergalhão avulso e corte e dobra convivem conforme o porte da construtora ou autoconstrutor. A BR Aço fornece vergalhão CA-50 e serviço de corte e dobra com entrega programada por etapa da obra.',
      neighborhoods: ['Samambaia Norte', 'Samambaia Sul', 'QR 100', 'QN 400', 'Setor de Chácaras'],
      route: 'via BR-070 e DF-180, tempo médio de 2h20min',
      buildingTypes: 'residências populares, sobrados, ampliações e pequenos condomínios',
      population: 260_000,
    },
  },

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
