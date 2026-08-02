// Dados dos produtos para landing pages programáticas
// Template usa {city} = nome da cidade/bairro, {state} = UF

/** Como o item entra no grafo schema.org (ver src/lib/schemaCatalog.ts).
 *  'Service'  → beneficiamento sobre spec do cliente, sem SKU (corte-e-dobra)
 *  'Product'  → bem físico entregue (vergalhão, coluna, treliça...)
 *  'BusinessFacet' → página de formato de busca/varejo (ferragista, ferragens...),
 *                    não é algo que a BR Aço "vende" como item — não gera nó de catálogo */
export type SchemaKind = 'Service' | 'Product' | 'BusinessFacet';

export type LandingProduct = {
  slug: string;
  name: string;         // "Vergalhão"
  nameFull: string;     // "Vergalhão CA-50 e CA-60"
  verb: string;         // "Comprar" | "Solicitar" | "Pedir"
  preposition: string;  // "em" | "para"
  shortDesc: string;    // 1 linha para pills/badges
  schemaKind: SchemaKind;
  schemaCategory: string; // nome canônico do serviceType/category, independe da cidade
  metaDesc: (city: string, state: string) => string;
  h1: (city: string) => string;
  intro: (city: string, state: string, deliveryLabel: string) => string;
  features: { icon: string; title: string; desc: string }[];
  faq: { q: (city: string) => string; a: (city: string, deliveryLabel: string) => string }[];
  relatedSlugs: string[];
  whatsappMsg: (city: string) => string;
  pageTitle: (city: string) => string;
};

export const landingProducts: Record<string, LandingProduct> = {

  'corte-e-dobra': {
    slug: 'corte-e-dobra',
    name: 'Corte e Dobra',
    nameFull: 'Corte e Dobra de Vergalhão',
    verb: 'Solicitar',
    preposition: 'em',
    shortDesc: 'Aço cortado e dobrado conforme seu projeto',
    schemaKind: 'Service',
    schemaCategory: 'Corte e Dobra de Vergalhão',
    pageTitle: (city) => `Corte e Dobra de Vergalhão em ${city} | BR Aço`,
    metaDesc: (city, state) =>
      `Corte e dobra de vergalhão em ${city} – ${state}. Produção industrial automatizada, entrega em até 48h, peças etiquetadas por elemento. Solicite orçamento grátis.`,
    h1: (city) => `Corte e Dobra de Vergalhão em ${city}`,
    intro: (city, state, deliveryLabel) =>
      `A BR Aço é a maior indústria de corte e dobra de vergalhão de Goiás e atende obras em ${city} com ${deliveryLabel}. Nosso processo 100% automatizado garante peças cortadas e dobradas exatamente conforme o projeto estrutural — sem desperdício de pontas e com redução de até 60% no tempo de armação no canteiro.`,
    features: [
      { icon: '⚙️', title: 'Produção CNC automatizada', desc: 'Dobras com precisão de ±1 mm. Cada peça sai exatamente conforme o detalhamento estrutural.' },
      { icon: '🏷️', title: 'Etiquetado por elemento', desc: 'Pilares, vigas, estribos e laços chegam identificados (P1, V1, E1...) para montagem direta.' },
      { icon: '📋', title: 'Quantitativo grátis', desc: 'Envie a planta e receba o quantitativo completo de aço + orçamento em até 24h, sem custo.' },
      { icon: '🚚', title: 'Entrega rápida', desc: 'Frota própria com entrega programada direto no canteiro de obras.' },
      { icon: '📜', title: 'Certificação ABNT', desc: 'Vergalhão CA-50 e CA-60 com laudo de qualidade ABNT NBR 7480 em cada lote.' },
      { icon: '💰', title: 'Economia de até 15%', desc: 'Menos desperdício + menos mão de obra de armação = custo total menor.' },
    ],
    faq: [
      {
        q: () => 'O que é corte e dobra de vergalhão?',
        a: () => 'Corte e dobra de vergalhão é o serviço industrial que processa barras de aço conforme o projeto estrutural, entregando peças cortadas e dobradas na medida exata, identificadas por elemento (pilar, viga, estribo), prontas para montar no canteiro. Substitui o corte manual no canteiro, reduzindo desperdício de 8–15% para menos de 2% e diminuindo em até 50% o custo de mão de obra de armação.',
      },
      {
        q: (city) => `Como funciona o corte e dobra para obras em ${city}?`,
        a: (city, dl) => `Você envia a planta estrutural ou a planilha de armação por WhatsApp. Nossa equipe faz o quantitativo, confirma o orçamento e inicia a produção. O aço chega em ${city} ${dl}, identificado por elemento, pronto para montagem.`,
      },
      {
        q: () => 'Qual a diferença entre corte e dobra e comprar a barra inteira?',
        a: () => 'Na compra de barra inteira, o armador corta e dobra no canteiro — gerando perda de 8% a 15% de aço e consumindo tempo de mão de obra qualificada. No corte e dobra industrial, a perda cai para menos de 2% e a equipe de armação só faz a montagem.',
      },
      {
        q: (city) => `A BR Aço atende projetos grandes em ${city}?`,
        a: (city) => `Sim. A BR Aço atende desde residências unifamiliares até edifícios multifamiliares, galpões industriais e obras de infraestrutura em ${city} e em todo o estado de Goiás. Temos capacidade para processar centenas de toneladas por mês.`,
      },
      {
        q: () => 'O serviço inclui projeto de armação?',
        a: () => 'Não fazemos o projeto estrutural, mas nossa equipe técnica confere a planilha de armação do engenheiro e avisa sobre inconsistências antes de iniciar a produção.',
      },
    ],
    relatedSlugs: ['vergalhao', 'trelica', 'malha', 'barra'],
    whatsappMsg: (city) => `Olá! Preciso de orçamento para corte e dobra de vergalhão para obra em ${city}. Tenho o projeto estrutural e gostaria de saber prazo e preço.`,
  },

  'vergalhao': {
    slug: 'vergalhao',
    name: 'Vergalhão',
    nameFull: 'Vergalhão CA-50 e CA-60',
    verb: 'Comprar',
    preposition: 'em',
    shortDesc: 'CA-25, CA-50 e CA-60 com certificação ABNT',
    schemaKind: 'Product',
    schemaCategory: 'Vergalhão',
    pageTitle: (city) => `Vergalhão em ${city} | BR Aço – CA-50 e CA-60`,
    metaDesc: (city, state) =>
      `Vergalhão CA-50 e CA-60 em ${city} – ${state}. Todos os diâmetros de 6,3 mm a 40 mm, certificação ABNT NBR 7480, entrega em até 48h. Solicite orçamento.`,
    h1: (city) => `Vergalhão em ${city} – CA-50 e CA-60`,
    intro: (city, state, deliveryLabel) =>
      `Compre vergalhão CA-50 e CA-60 em ${city} diretamente da maior indústria de aço de Goiás. A BR Aço fornece vergalhões de todos os diâmetros (6,3 mm a 40 mm) com certificação ABNT NBR 7480 e ${deliveryLabel}. Atendemos obras residenciais, comerciais e de infraestrutura em ${city} e em todo ${state}.`,
    features: [
      { icon: '📏', title: 'Todos os diâmetros', desc: 'De ø6,3 mm a ø40 mm — CA-50 e CA-60 para qualquer aplicação estrutural.' },
      { icon: '📜', title: 'Certificação ABNT NBR 7480', desc: 'Laudo de qualidade Gerdau / ArcelorMittal em cada lote. Aceito em obras com vistoria da CEF (MCMV).' },
      { icon: '✂️', title: 'Corte e dobra inclusos', desc: 'Solicite o vergalhão já cortado e dobrado conforme o projeto — sem custo adicional de processo.' },
      { icon: '🚚', title: 'Entrega rápida', desc: 'Frota própria com entrega programada direto no canteiro de obras.' },
      { icon: '📦', title: 'Venda por quilo ou tonelada', desc: 'Sem mínimo de pedido imposto — atendemos de pequenas obras a grandes empreendimentos.' },
      { icon: '🤝', title: 'Suporte técnico', desc: 'Equipe técnica para orientar sobre a classe e diâmetro correto para cada elemento.' },
    ],
    faq: [
      {
        q: () => 'O que é vergalhão e quais os tipos usados na construção civil?',
        a: () => 'Vergalhão é uma barra de aço nervurada usada como armadura de concreto armado — o "esqueleto de ferro" de pilares, vigas, lajes e fundações. No Brasil, os tipos são definidos pela ABNT NBR 7480: CA-50 (resistência ao escoamento ≥ 500 MPa, barras de ø6,3mm a ø40mm) e CA-60 (≥ 600 MPa, somente ø4,2mm a ø10mm, padrão para treliças e telas soldadas). O CA-25 (liso, ≥ 250 MPa) praticamente não é mais produzido.',
      },
      {
        q: (city) => `Qual o preço do vergalhão em ${city}?`,
        a: (city) => `O preço do vergalhão em ${city} varia conforme o diâmetro, a classe (CA-50 ou CA-60) e o volume do pedido. Em 2026, a faixa de preço gira entre R$ 5,80 e R$ 7,50/kg para CA-50, e R$ 6,00 a R$ 7,50/kg para CA-60. Solicite orçamento atualizado diretamente pelo WhatsApp.`,
      },
      {
        q: () => 'Qual a diferença entre CA-50 e CA-60?',
        a: () => 'O CA-50 tem limite de escoamento de 500 MPa e é usado em pilares, vigas, fundações e toda armadura estrutural principal. O CA-60, com 600 MPa, é produzido apenas em diâmetros pequenos (ø4,2mm a ø10mm) e é o padrão para treliças metálicas, telas soldadas e estribos de pequeno diâmetro. A escolha depende do projeto estrutural do engenheiro.',
      },
      {
        q: (city) => `Vocês entregam vergalhão em ${city}?`,
        a: (city, dl) => `Sim, a BR Aço entrega vergalhão em ${city} ${dl}. O material sai da nossa fábrica em Aparecida de Goiânia diretamente para o canteiro de obras.`,
      },
      {
        q: () => 'É possível comprar vergalhão já cortado?',
        a: () => 'Sim. Além da venda de barras inteiras (12 m), a BR Aço oferece o serviço de corte e dobra: o vergalhão chega cortado nas medidas exatas do projeto, identificado por elemento, pronto para montagem.',
      },
    ],
    relatedSlugs: ['corte-e-dobra', 'barra', 'trelica', 'malha'],
    whatsappMsg: (city) => `Olá! Preciso de orçamento para vergalhão em ${city}. Podem me informar preço e prazo de entrega?`,
  },

  'coluna': {
    slug: 'coluna',
    name: 'Coluna Pronta',
    nameFull: 'Coluna Pronta — Pilar Pré-Montado em Aço',
    verb: 'Comprar',
    preposition: 'em',
    shortDesc: 'Coluna pronta para obra — pilar com armadura completa',
    schemaKind: 'Product',
    schemaCategory: 'Coluna Pronta',
    pageTitle: (city) => `Coluna Pronta em ${city} | BR Aço – Pilar Pré-Montado`,
    metaDesc: (city, state) =>
      `Coluna pronta em ${city} – ${state}. Pilar pré-montado com barras longitudinais CA-50 e estribos dobrados, entrega em até 48h. Solicite orçamento na BR Aço.`,
    h1: (city) => `Coluna Pronta em ${city} — Pilar Pré-Montado`,
    intro: (city, _state, deliveryLabel) =>
      `A BR Aço fornece coluna pronta — armadura de pilar pré-montada — para obras em ${city}, com ${deliveryLabel}. Cada peça sai da fábrica com as barras longitudinais CA-50 e os estribos já dobrados com ganchos de 135°, posicionados no espaçamento exato do projeto estrutural. No canteiro, a equipe só posiciona a armadura na forma, adiciona o concreto e concreta — reduzindo em até 70% o tempo de armação de pilares.`,
    features: [
      { icon: '🏗️', title: 'Armadura de pilar pronta', desc: 'Barras longitudinais CA-50 + estribos dobrados e amarrados conforme o detalhamento estrutural.' },
      { icon: '📐', title: 'Espaçamento NBR 6118', desc: 'Estribos posicionados conforme a norma — espaçamento reduzido nas regiões de emenda calculado automaticamente.' },
      { icon: '⚡', title: 'Armação 70% mais rápida', desc: 'A equipe só posiciona a armadura na forma e concreta — sem cortar, dobrar ou amarrar estribos no canteiro.' },
      { icon: '📏', title: 'Qualquer seção transversal', desc: 'Produzimos armaduras de pilar para seções de 10×10 cm até 60×80 cm e maiores, conforme o projeto.' },
      { icon: '📜', title: 'Laudo NBR 7480 incluso', desc: 'Aço CA-50 e CA-60 com certificado de qualidade em cada lote. Produção conforme NBR 6118.' },
      { icon: '🚚', title: 'Entrega por etapa de obra', desc: 'Armaduras entregues por pavimento ou etapa, identificadas por pilar, para facilitar a logística no canteiro.' },
    ],
    faq: [
      {
        q: (city) => `O que é coluna pronta e como funciona para obras em ${city}?`,
        a: (city, dl) => `"Coluna pronta" é o nome comercial da armadura de pilar pré-montada: barras longitudinais CA-50 e estribos já dobrados e posicionados conforme o projeto estrutural. A BR Aço produz e entrega em ${city} ${dl}. No canteiro, você só posiciona a armadura na forma e concreta — sem armar no local.`,
      },
      {
        q: () => 'O que inclui a coluna pronta (armadura de pilar)?',
        a: () => 'Inclui as barras longitudinais CA-50, os estribos (CA-50 ou CA-60) já dobrados com ganchos de 135° e posicionados no espaçamento correto conforme NBR 6118. Não inclui o concreto nem as formas — apenas a armadura pronta para montar.',
      },
      {
        q: () => 'Como enviar o projeto para orçamento de armadura de pilar?',
        a: () => 'Envie o detalhamento estrutural dos pilares (seção transversal, barras longitudinais, bitola e espaçamento dos estribos) por WhatsApp. Nossa equipe técnica retorna com o quantitativo completo e o orçamento em até 24h.',
      },
    ],
    relatedSlugs: ['corte-e-dobra', 'vergalhao', 'barra', 'arame'],
    whatsappMsg: (city) => `Olá! Preciso de orçamento para armadura de pilar (coluna pronta) para obra em ${city}. Tenho o projeto estrutural dos pilares.`,
  },

  'barra': {
    slug: 'barra',
    name: 'Barra de Aço',
    nameFull: 'Barras de Aço para Construção Civil',
    verb: 'Comprar',
    preposition: 'em',
    shortDesc: 'Barras CA-50 e CA-60 em todos os diâmetros',
    schemaKind: 'Product',
    schemaCategory: 'Barra de Aço',
    pageTitle: (city) => `Barra de Aço em ${city} | BR Aço`,
    metaDesc: (city, state) =>
      `Barras de aço CA-50 e CA-60 em ${city} – ${state}. Diâmetros de 6,3 mm a 40 mm, barras de 12 m, certificação ABNT. Entrega rápida. Orçamento grátis.`,
    h1: (city) => `Barras de Aço em ${city} – CA-50 e CA-60`,
    intro: (city, _state, deliveryLabel) =>
      `Compre barras de aço em ${city} com ${deliveryLabel} e certificação ABNT NBR 7480. A BR Aço fornece barras CA-50 e CA-60 de 6,3 mm a 40 mm, em comprimentos padrão de 12 metros ou já cortadas nas medidas do projeto.`,
    features: [
      { icon: '📏', title: 'Barras de 12 metros', desc: 'Comprimento padrão ABNT para transporte e armazenamento. Disponível em todos os diâmetros CA-50 e CA-60.' },
      { icon: '✂️', title: 'Corte sob medida', desc: 'Corte nas medidas exatas do projeto — sem desperdício de pontas no canteiro.' },
      { icon: '📜', title: 'Certificação ABNT', desc: 'Barras rastreáveis com marcação do fabricante e laudo de qualidade por lote.' },
      { icon: '⚖️', title: 'Venda por kg ou tonelada', desc: 'Atendemos pequenos volumes e grandes empreendimentos com o mesmo padrão de qualidade.' },
      { icon: '🚚', title: 'Entrega no canteiro', desc: 'Frota própria com entrega direta na obra, no prazo combinado.' },
      { icon: '🤝', title: 'Assessoria técnica', desc: 'Orientamos sobre diâmetro e classe certa para cada elemento estrutural.' },
    ],
    faq: [
      {
        q: (city) => `Qual o preço da barra de aço em ${city}?`,
        a: () => 'O preço varia pelo diâmetro e volume. CA-50 ø10 mm e ø12,5 mm costumam estar entre R$ 5,80 e R$ 6,50/kg em 2026. Solicite cotação atualizada pelo WhatsApp.',
      },
      {
        q: () => 'Qual o comprimento padrão das barras?',
        a: () => 'As barras são fornecidas em comprimentos padrão de 12 metros, conforme ABNT NBR 7480. Também realizamos corte nas medidas do projeto antes da entrega.',
      },
      {
        q: (city) => `Vocês entregam barras de aço em ${city}?`,
        a: (city, dl) => `Sim, entregamos em ${city} ${dl} com frota própria diretamente no canteiro.`,
      },
    ],
    relatedSlugs: ['vergalhao', 'corte-e-dobra', 'arame', 'prego'],
    whatsappMsg: (city) => `Olá! Preciso de orçamento para barras de aço para obra em ${city}. Podem me informar preços e disponibilidade?`,
  },

  'malha': {
    slug: 'malha',
    name: 'Malha de Aço',
    nameFull: 'Malha de Aço (Malha Pop)',
    verb: 'Comprar',
    preposition: 'em',
    shortDesc: 'Malha pop para lajes e contrapisos',
    schemaKind: 'Product',
    schemaCategory: 'Malha de Aço',
    pageTitle: (city) => `Malha de Aço em ${city} | BR Aço – Malha Pop`,
    metaDesc: (city, state) =>
      `Malha de aço (malha pop) em ${city} – ${state}. Ideal para lajes, contrapisos e pisos industriais. Entrega rápida com certificação ABNT. Solicite orçamento.`,
    h1: (city) => `Malha de Aço (Malha Pop) em ${city}`,
    intro: (city, _state, deliveryLabel) =>
      `Compre malha de aço (malha pop) em ${city} com ${deliveryLabel}. A BR Aço fornece malhas soldadas CA-60 em painéis para armação de lajes, contrapisos, pisos industriais e platibandas. Praticidade no canteiro sem abrir mão da resistência.`,
    features: [
      { icon: '🔲', title: 'Painéis prontos', desc: 'Malhas em painéis de 2,0 × 3,0 m e 2,0 × 6,0 m — fácil transporte e instalação.' },
      { icon: '⚡', title: 'Montagem rápida', desc: 'Instalação 3× mais rápida que vergalhão avulso — painéis posicionados diretamente sobre espaçadores.' },
      { icon: '📐', title: 'Espaçamento uniforme', desc: 'Fios soldados com espaçamento constante garantido em fábrica — sem risco de erro no canteiro.' },
      { icon: '📜', title: 'CA-60 certificado', desc: 'Fios de aço CA-60 conforme ABNT NBR 7480 e painéis conforme ABNT NBR 7481.' },
      { icon: '🏭', title: 'Para pisos industriais', desc: 'Malha estrutural para contrapisos de alta carga — supermercados, galpões, estacionamentos.' },
      { icon: '🚚', title: 'Entrega em obra', desc: 'Painéis entregues empilhados e amarrados para facilitar o manuseio no canteiro.' },
    ],
    faq: [
      {
        q: () => 'O que é malha pop?',
        a: () => 'Malha pop é a denominação popular para tela soldada em painéis de pequenas dimensões (normalmente 2×3 m). É composta por fios CA-60 soldados em forma de grelha, usada principalmente em lajes de pequeno vão, contrapisos e pisos industriais.',
      },
      {
        q: (city) => `Qual a diferença entre malha pop e tela soldada em ${city}?`,
        a: () => 'Tecnicamente são o mesmo produto — fios de aço CA-60 soldados em grelha. "Malha pop" é o nome comercial para painéis de menor dimensão (2×3 m), enquanto "tela soldada" pode se referir a painéis maiores (2×6 m) ou rolos. A escolha depende do espaço disponível no canteiro.',
      },
      {
        q: (city) => `Vocês entregam malha de aço em ${city}?`,
        a: (city, dl) => `Sim, entregamos em ${city} ${dl}.`,
      },
    ],
    relatedSlugs: ['tela', 'trelica', 'vergalhao', 'corte-e-dobra'],
    whatsappMsg: (city) => `Olá! Preciso de orçamento para malha de aço (malha pop) para obra em ${city}. Podem me enviar preços e especificações?`,
  },

  'tela': {
    slug: 'tela',
    name: 'Tela Soldada',
    nameFull: 'Tela Soldada para Construção Civil',
    verb: 'Comprar',
    preposition: 'em',
    shortDesc: 'Telas soldadas CA-60 para lajes e pisos',
    schemaKind: 'Product',
    schemaCategory: 'Tela Soldada',
    pageTitle: (city) => `Tela Soldada em ${city} | BR Aço`,
    metaDesc: (city, state) =>
      `Tela soldada CA-60 em ${city} – ${state}. Para lajes, pisos industriais e contrapisos. Painéis 2×3 m e 2×6 m. Certificação ABNT. Entrega rápida.`,
    h1: (city) => `Tela Soldada em ${city} – CA-60`,
    intro: (city, _state, deliveryLabel) =>
      `A BR Aço fornece tela soldada CA-60 em ${city} com ${deliveryLabel}. Painéis de 2×3 m e 2×6 m com fios ø4,2 mm a ø8,0 mm, para armação de lajes treliçadas, lajes maciças, pisos industriais e contrapisos.`,
    features: [
      { icon: '🔲', title: 'Painéis 2×3 m e 2×6 m', desc: 'Formatos padrão para fácil transporte, corte e instalação em qualquer planta.' },
      { icon: '📜', title: 'ABNT NBR 7481', desc: 'Telas soldadas produzidas conforme norma brasileira. Laudo disponível por lote.' },
      { icon: '🏭', title: 'Pisos industriais', desc: 'Telas ø6,3 e ø8,0 mm para contrapisos de galpões, supermercados e estacionamentos.' },
      { icon: '🏠', title: 'Lajes residenciais', desc: 'Armadura de distribuição e negativa em lajes treliçadas residenciais.' },
      { icon: '✂️', title: 'Corte sob medida', desc: 'Painéis cortados nas dimensões da loja antes da entrega, se necessário.' },
      { icon: '🚚', title: 'Entrega programada', desc: 'Entrega direta no canteiro, data e hora combinados.' },
    ],
    faq: [
      {
        q: () => 'Qual tela soldada usar em laje treliçada?',
        a: () => 'Para lajes treliçadas residenciais, usa-se geralmente tela de ø4,2 mm ou ø5,0 mm como armadura de distribuição (armadura positiva sobre as treliças) e tela de ø5,0 mm ou ø6,3 mm como armadura negativa sobre os apoios.',
      },
      {
        q: (city) => `Qual o preço da tela soldada em ${city}?`,
        a: () => 'O preço varia pelo diâmetro do fio. Em 2026, telas ø4,2 mm giram em torno de R$ 6,00 a R$ 7,50/m² e telas ø6,3 mm entre R$ 9,00 e R$ 12,00/m². Solicite orçamento atualizado.',
      },
      {
        q: (city) => `Vocês entregam tela soldada em ${city}?`,
        a: (city, dl) => `Sim, entregamos em ${city} ${dl}.`,
      },
    ],
    relatedSlugs: ['malha', 'trelica', 'vergalhao', 'corte-e-dobra'],
    whatsappMsg: (city) => `Olá! Preciso de orçamento para tela soldada para obra em ${city}. Podem me informar preços por m² e prazos?`,
  },

  'trelica': {
    slug: 'trelica',
    name: 'Treliça',
    nameFull: 'Treliças Metálicas para Laje',
    verb: 'Comprar',
    preposition: 'em',
    shortDesc: 'Treliças T6, T8, T10 e T12 para laje treliçada',
    schemaKind: 'Product',
    schemaCategory: 'Treliça Metálica',
    pageTitle: (city) => `Treliça Metálica em ${city} | BR Aço`,
    metaDesc: (city, state) =>
      `Treliças metálicas T6, T8, T10 e T12 em ${city} – ${state}. Para lajes treliçadas conforme ABNT NBR 14859. Entrega rápida. Solicite orçamento na BR Aço.`,
    h1: (city) => `Treliças Metálicas para Laje em ${city}`,
    intro: (city, _state, deliveryLabel) =>
      `A BR Aço fornece treliças metálicas (T6, T8, T10 e T12) para laje treliçada em ${city} com ${deliveryLabel}. Produzidas conforme ABNT NBR 14859, as treliças chegam cortadas no comprimento do vão da laje, prontas para posicionamento sobre as formas.`,
    features: [
      { icon: '🏗️', title: 'Tipos T6, T8, T10 e T12', desc: 'Treliças para alturas de laje de 12 cm a 20 cm ou mais. Escolha conforme o projeto estrutural.' },
      { icon: '📜', title: 'ABNT NBR 14859', desc: 'Treliças produzidas com aço CA-60, conforme norma vigente. Laudo de qualidade disponível.' },
      { icon: '✂️', title: 'Cortadas no vão exato', desc: 'Cada treliça cortada no comprimento do vão da laje — sem sobras e sem necessidade de corte no canteiro.' },
      { icon: '🏠', title: 'Lajes de até 7 m de vão', desc: 'Lajes treliçadas economizam até 40% de concreto e reduzem o peso da estrutura em relação à laje maciça.' },
      { icon: '⚡', title: 'Montagem rápida', desc: 'Treliças posicionadas diretamente sobre as formas — sem necessidade de armação negativa adicional na maioria dos casos.' },
      { icon: '🚚', title: 'Entrega em obra', desc: 'Treliças amarradas em pacotes, entregues diretamente na obra.' },
    ],
    faq: [
      {
        q: () => 'Qual treliça usar na minha laje?',
        a: () => 'Depende da espessura e do vão da laje. Para vãos de 3 a 4 m, o T8 é o mais comum (laje de 16 cm). Para vãos de 4 a 5 m, T10 (laje de 20 cm). Para vãos maiores, consulte o engenheiro estrutural.',
      },
      {
        q: (city) => `Como comprar treliças para laje em ${city}?`,
        a: (city, dl) => `Envie as dimensões da laje (comprimento, largura e vão) por WhatsApp. Calculamos a quantidade de treliças necessária e entregamos em ${city} ${dl}.`,
      },
      {
        q: () => 'Qual a diferença entre laje maciça e laje treliçada?',
        a: () => 'A laje treliçada usa treliças metálicas + elementos de preenchimento (EPS ou cerâmico) + capa de concreto. Ela consome até 50% menos concreto e pesa 30% a 40% menos que a maciça, reduzindo o custo da fundação. Em contrapartida, a laje maciça tem maior rigidez e é indicada para cargas muito concentradas.',
      },
    ],
    relatedSlugs: ['tela', 'malha', 'vergalhao', 'corte-e-dobra'],
    whatsappMsg: (city) => `Olá! Preciso de orçamento para treliças metálicas para laje em ${city}. A laje tem [dimensões]. Qual o preço e prazo?`,
  },

  'prego': {
    slug: 'prego',
    name: 'Prego',
    nameFull: 'Pregos para Construção Civil',
    verb: 'Comprar',
    preposition: 'em',
    shortDesc: 'Pregos para obra em todos os tamanhos',
    schemaKind: 'Product',
    schemaCategory: 'Prego',
    pageTitle: (city) => `Prego para Construção em ${city} | BR Aço`,
    metaDesc: (city, state) =>
      `Pregos para construção civil em ${city} – ${state}. Todos os tamanhos para formas, madeiramento, acabamento. Venda por kg. Entrega rápida. Solicite orçamento.`,
    h1: (city) => `Pregos para Construção Civil em ${city}`,
    intro: (city, _state, deliveryLabel) =>
      `A BR Aço fornece pregos para construção civil em ${city} com ${deliveryLabel}. Todos os tamanhos e tipos — pregos de obra para formas, madeiramento e acabamento — vendidos por kg, com ou sem cabeça.`,
    features: [
      { icon: '🔨', title: 'Todos os tamanhos', desc: 'De 13×15 (preguinho de acabamento) ao 75×200 (prego de obra pesada). Consulte disponibilidade.' },
      { icon: '⚖️', title: 'Venda por kg ou caixa', desc: 'Sem mínimo — atendemos o mestre de obras com uma caixa e o empreiteiro com uma tonelada.' },
      { icon: '🏗️', title: 'Para formas de concreto', desc: 'Pregos 20×48 e 17×27 são os mais usados em montagem de formas de pilares e vigas.' },
      { icon: '🏠', title: 'Para madeiramento de telhado', desc: 'Pregos 30×72 e 38×120 para estrutura de telhado e assentamento de caibros.' },
      { icon: '📦', title: 'Entrega junto com o aço', desc: 'Peça pregos junto com o vergalhão e receba tudo no mesmo pedido.' },
      { icon: '💰', title: 'Preço de distribuidor', desc: 'Compra direta da indústria — sem intermediário no preço.' },
    ],
    faq: [
      {
        q: (city) => `Qual o preço do prego de obra em ${city}?`,
        a: () => 'O preço varia pelo tipo e tamanho. Em 2026, pregos de obra giram entre R$ 7,00 e R$ 12,00/kg. Consulte o preço atualizado pelo WhatsApp.',
      },
      {
        q: () => 'Qual prego usar para formas de concreto?',
        a: () => 'Para formas de pilares e vigas, os mais usados são o prego 20×48 e o 17×27. Para montagem de escoras de madeira, o 30×72 é o padrão no mercado.',
      },
      {
        q: (city) => `Vocês entregam pregos em ${city}?`,
        a: (city, dl) => `Sim, entregamos em ${city} ${dl}. É possível incluir os pregos no mesmo pedido do vergalhão, sem custo adicional de frete.`,
      },
    ],
    relatedSlugs: ['arame', 'barra', 'vergalhao'],
    whatsappMsg: (city) => `Olá! Preciso de orçamento para pregos para obra em ${city}. Podem me informar preços e tipos disponíveis?`,
  },

  'arame': {
    slug: 'arame',
    name: 'Arame',
    nameFull: 'Arames para Construção Civil',
    verb: 'Comprar',
    preposition: 'em',
    shortDesc: 'Arame recozido e farpado para obra',
    schemaKind: 'Product',
    schemaCategory: 'Arame',
    pageTitle: (city) => `Arame para Construção em ${city} | BR Aço`,
    metaDesc: (city, state) =>
      `Arame recozido e farpado para construção civil em ${city} – ${state}. Para amarração de armadura, telas e cercas. Venda por kg. Entrega rápida.`,
    h1: (city) => `Arame para Construção Civil em ${city}`,
    intro: (city, _state, deliveryLabel) =>
      `A BR Aço fornece arames para construção civil em ${city} com ${deliveryLabel}. Arame recozido para amarração de armadura e telas soldadas, além de arame farpado e liso para cercas e vedações.`,
    features: [
      { icon: '🔗', title: 'Arame recozido', desc: 'Para amarração de vergalhão, treliças e telas soldadas. Fácil de torcer manualmente ou com torquês.' },
      { icon: '🌾', title: 'Arame farpado', desc: 'Para cercas e divisas de terreno. Vendido em rolos.' },
      { icon: '⚖️', title: 'Venda por kg ou rolo', desc: 'Atendemos desde pequenas obras até grandes quantidades.' },
      { icon: '📦', title: 'Entrega junto com o aço', desc: 'Receba o arame no mesmo pedido do vergalhão, sem custo adicional de frete.' },
      { icon: '💰', title: 'Preço competitivo', desc: 'Compra direta da indústria — distribuidor autorizado.' },
      { icon: '🚚', title: 'Entrega rápida', desc: 'Frota própria com entrega direta no canteiro.' },
    ],
    faq: [
      {
        q: () => 'Qual arame usar para amarração de armadura?',
        a: () => 'O arame recozido é o padrão para amarração de armadura em concreto armado. O mais usado é o n° 18 (diâmetro 1,25 mm), que é macio o suficiente para torcer manualmente ou com alicate torquês.',
      },
      {
        q: (city) => `Qual o preço do arame recozido em ${city}?`,
        a: () => 'Em 2026, o arame recozido n° 18 está entre R$ 8,00 e R$ 12,00/kg. Consulte preço atualizado pelo WhatsApp.',
      },
      {
        q: (city) => `Vocês entregam arame em ${city}?`,
        a: (city, dl) => `Sim, entregamos em ${city} ${dl}. É possível incluir no mesmo pedido do vergalhão.`,
      },
    ],
    relatedSlugs: ['prego', 'barra', 'vergalhao', 'malha'],
    whatsappMsg: (city) => `Olá! Preciso de orçamento para arame para obra em ${city}. Podem me informar tipos disponíveis e preços?`,
  },

  'ferragista': {
    slug: 'ferragista',
    name: 'Ferragista',
    nameFull: 'Ferragista Especializado em Aço para Construção',
    verb: 'Encontrar',
    preposition: 'em',
    shortDesc: 'Vergalhão, treliças e malhas com entrega rápida',
    schemaKind: 'BusinessFacet',
    schemaCategory: 'Ferragista',
    pageTitle: (city) => `Ferragista em ${city} | BR Aço – Vergalhão e Ferragens`,
    metaDesc: (city, state) =>
      `Ferragista em ${city} – ${state}. BR Aço: vergalhão CA-50 e CA-60, treliças, malhas e corte e dobra industrial. Entrega rápida, certificação ABNT. Solicite orçamento.`,
    h1: (city) => `Ferragista em ${city} – BR Aço`,
    intro: (city, state, deliveryLabel) =>
      `A BR Aço é a ferragista especializada em aço para construção civil em ${city} – ${state}. Fornecemos vergalhões CA-50 e CA-60, treliças metálicas, telas soldadas e malhas, com ${deliveryLabel} diretamente no canteiro de obras. Nosso diferencial é o serviço de corte e dobra industrial: peças cortadas e dobradas nas medidas exatas do projeto, sem desperdício.`,
    features: [
      { icon: '🏗️', title: 'Vergalhão CA-50 e CA-60', desc: 'Todos os diâmetros de 6,3 mm a 32 mm com certificação ABNT NBR 7480.' },
      { icon: '✂️', title: 'Corte e dobra industrial', desc: 'Peças cortadas e dobradas conforme o projeto — eliminando desperdício e mão de obra de armação.' },
      { icon: '🔲', title: 'Treliças e malhas', desc: 'Treliças T8, T10 e T12 e malhas soldadas CA-60 para lajes de qualquer vão.' },
      { icon: '📜', title: 'Laudo de qualidade', desc: 'Certificado ABNT NBR 7480 em cada lote com rastreabilidade de origem.' },
      { icon: '🚚', title: 'Entrega rápida', desc: 'Frota própria com entrega programada diretamente no canteiro de obras.' },
      { icon: '💰', title: 'Preço direto de fábrica', desc: 'Sem intermediários — distribuidora integrada à indústria de corte e dobra.' },
    ],
    faq: [
      {
        q: (city) => `O que é e o que vende uma ferragista em ${city}?`,
        a: (city) => `Uma ferragista especializada em construção civil, como a BR Aço em ${city}, fornece os aços estruturais da obra: vergalhões (CA-25, CA-50, CA-60), treliças metálicas para laje, telas soldadas, malhas pop, arames e pregos. Diferente de ferragerias de acabamento (dobradiças, fechaduras), a ferragista de construção atende o esqueleto estrutural da obra.`,
      },
      {
        q: (city) => `Qual a melhor ferragista perto de ${city}?`,
        a: (city, dl) => `A BR Aço, localizada em Aparecida de Goiânia, atende ${city} ${dl}. Somos a maior indústria de corte e dobra de vergalhão de Goiás — com vergalhão certificado, treliças, malhas e serviço completo de armação industrial.`,
      },
      {
        q: () => 'A ferragista vende aço para pequenas obras também?',
        a: () => 'Sim. A BR Aço atende desde residências unifamiliares com 500 kg de aço até grandes empreendimentos com centenas de toneladas. Não há pedido mínimo obrigatório para compra de barras e malhas.',
      },
      {
        q: () => 'Posso enviar o projeto pelo WhatsApp?',
        a: () => 'Sim. Envie a planta estrutural, a planilha de ferro ou o croqui pelo WhatsApp e receba o orçamento completo em até 2 horas, com valores por bitola e prazo de entrega.',
      },
    ],
    relatedSlugs: ['vergalhao', 'corte-e-dobra', 'ferragens', 'ferro-e-aco'],
    whatsappMsg: (city) => `Olá! Preciso de aço para obra em ${city}. Podem me enviar orçamento de vergalhão e serviço de corte e dobra?`,
  },

  'ferragens': {
    slug: 'ferragens',
    name: 'Ferragens',
    nameFull: 'Ferragens para Construção Civil',
    verb: 'Comprar',
    preposition: 'em',
    shortDesc: 'Vergalhão, treliças, malhas e pregos para obra',
    schemaKind: 'BusinessFacet',
    schemaCategory: 'Ferragens',
    pageTitle: (city) => `Ferragens em ${city} | BR Aço – Aço para Construção`,
    metaDesc: (city, state) =>
      `Ferragens para construção civil em ${city} – ${state}. Vergalhão CA-50, treliças, malhas, arames e pregos. Entrega rápida com certificação ABNT. Solicite orçamento BR Aço.`,
    h1: (city) => `Ferragens para Construção Civil em ${city}`,
    intro: (city, state, deliveryLabel) =>
      `Compre ferragens para construção civil em ${city} – ${state} diretamente da BR Aço, maior distribuidora de aço de Goiás. Vergalhões CA-50 e CA-60, treliças metálicas, malhas soldadas, arames e pregos — tudo com ${deliveryLabel} e certificação ABNT. Atendemos obras residenciais, comerciais e industriais em ${city} e região.`,
    features: [
      { icon: '📏', title: 'Vergalhão em todos os diâmetros', desc: 'CA-25, CA-50 e CA-60 de 5 mm a 32 mm — a principal ferragem estrutural da construção.' },
      { icon: '🔲', title: 'Treliças e telas soldadas', desc: 'Para lajes treliçadas e lajes maciças. Modelos T8, T10, T12 e telas Q-92, Q-138, Q-196.' },
      { icon: '🔗', title: 'Arame recozido e farpado', desc: 'Para amarração de armadura, telas e cercas.' },
      { icon: '🔨', title: 'Pregos para obra', desc: 'Todos os tamanhos para formas, madeiramento e acabamento. Venda por kg.' },
      { icon: '✂️', title: 'Corte e dobra incluso', desc: 'Peça as ferragens já cortadas e dobradas conforme o projeto — sem trabalho adicional de armação.' },
      { icon: '📜', title: 'Certificação ABNT', desc: 'Laudos de qualidade em todos os lotes. Aceito em obras com fiscalização da CEF.' },
    ],
    faq: [
      {
        q: (city) => `Onde comprar ferragens para construção em ${city}?`,
        a: (city, dl) => `A BR Aço atende ${city} ${dl} com vergalhão, treliças, malhas, arames e pregos certificados. Solicite orçamento pelo WhatsApp com a lista de materiais do projeto.`,
      },
      {
        q: () => 'Qual a diferença entre ferragem de obra e ferragem de acabamento?',
        a: () => 'Ferragem de obra (ou ferragem estrutural) é o aço usado na estrutura do edifício: vergalhões, treliças, telas. Ferragem de acabamento são os arremates metálicos (dobradiças, fechaduras, puxadores). A BR Aço é especializada em ferragem estrutural — o esqueleto da obra.',
      },
      {
        q: () => 'Posso comprar ferragens em quantidade pequena?',
        a: () => 'Sim. A BR Aço vende a partir de pequenas quantidades para vergalhão, malhas e pregos. Para corte e dobra, o pedido mínimo é de 500 kg processados.',
      },
      {
        q: (city) => `Qual o prazo de entrega de ferragens em ${city}?`,
        a: (city, dl) => `Entregamos em ${city} ${dl} após aprovação do orçamento. Frota própria com entrega diretamente no canteiro de obras.`,
      },
    ],
    relatedSlugs: ['ferragista', 'vergalhao', 'corte-e-dobra', 'ferro-e-aco'],
    whatsappMsg: (city) => `Olá! Preciso de orçamento para ferragens (vergalhão, treliças, malhas) para obra em ${city}. Podem me ajudar?`,
  },

  'ferro-e-aco': {
    slug: 'ferro-e-aco',
    name: 'Ferro e Aço',
    nameFull: 'Ferro e Aço para Construção Civil',
    verb: 'Comprar',
    preposition: 'em',
    shortDesc: 'Distribuição de ferro e aço para obras em Goiás',
    schemaKind: 'BusinessFacet',
    schemaCategory: 'Ferro e Aço',
    pageTitle: (city) => `Ferro e Aço em ${city} | BR Aço – Distribuidora`,
    metaDesc: (city, state) =>
      `Ferro e aço para construção civil em ${city} – ${state}. Distribuidora BR Aço: vergalhão CA-50 e CA-60, treliças, malhas. Corte e dobra industrial. Entrega rápida.`,
    h1: (city) => `Ferro e Aço em ${city} – BR Aço`,
    intro: (city, state, deliveryLabel) =>
      `A BR Aço é a principal distribuidora de ferro e aço para construção civil em ${city} – ${state}. Com parque industrial próprio de corte e dobra, fornecemos vergalhões CA-50 e CA-60, treliças metálicas, telas soldadas e todos os aços estruturais com ${deliveryLabel} e certificação ABNT NBR 7480.`,
    features: [
      { icon: '🏭', title: 'Indústria + distribuição', desc: 'Processamos e entregamos — sem intermediários entre a usina e a sua obra.' },
      { icon: '📏', title: 'Todos os perfis e bitolas', desc: 'Vergalhões de 5 mm a 32 mm, treliças T8 a T12, telas Q-92 a Q-196 e malhas pop.' },
      { icon: '✂️', title: 'Corte e dobra CNC', desc: 'O aço sai da fábrica cortado e dobrado conforme o projeto — tolerância ±5 mm.' },
      { icon: '📜', title: 'Certificado de qualidade', desc: 'Laudo ABNT NBR 7480 em cada lote com rastreabilidade até a usina.' },
      { icon: '🚚', title: 'Entrega programada', desc: 'Frota própria com entrega direta no canteiro, no prazo e horário combinados.' },
      { icon: '📋', title: 'Orçamento em 2 horas', desc: 'Envie a planilha de ferro e receba o orçamento completo em até 2 horas.' },
    ],
    faq: [
      {
        q: (city) => `Onde comprar ferro e aço para construção em ${city}?`,
        a: (city, dl) => `A BR Aço é a maior distribuidora de ferro e aço de Goiás e atende ${city} ${dl}. Vergalhões, treliças, malhas e serviço de corte e dobra — tudo em um só lugar.`,
      },
      {
        q: () => 'Vocês vendem ferro e aço apenas para grandes obras?',
        a: () => 'Não. A BR Aço atende obras de todos os tamanhos — desde uma residência com 500 kg de vergalhão até grandes empreendimentos com centenas de toneladas. Sem pedido mínimo para barras e malhas.',
      },
      {
        q: (city) => `Qual o preço do ferro e aço em ${city}?`,
        a: (city) => `O preço do vergalhão CA-50 em ${city} varia conforme o diâmetro e o volume do pedido. Solicite orçamento pelo WhatsApp com a lista do projeto e receba o preço atualizado em até 2 horas.`,
      },
      {
        q: () => 'A BR Aço faz entrega de ferro e aço no DF?',
        a: () => 'Sim. Atendemos todo o Distrito Federal e Entorno com entrega em até 48h a 72h, conforme a distância. Envie a lista de materiais pelo WhatsApp para verificar prazo e frete para sua região.',
      },
    ],
    relatedSlugs: ['vergalhao', 'ferragista', 'ferragens', 'distribuidora-de-ferro'],
    whatsappMsg: (city) => `Olá! Preciso de orçamento para ferro e aço para obra em ${city}. Podem me enviar tabela de preços e prazos?`,
  },

  'material-de-construcao': {
    slug: 'material-de-construcao',
    name: 'Material de Construção',
    nameFull: 'Material de Construção – Aço Estrutural',
    verb: 'Comprar',
    preposition: 'em',
    shortDesc: 'O aço da sua obra: vergalhão, treliças e malhas',
    schemaKind: 'BusinessFacet',
    schemaCategory: 'Material de Construção',
    pageTitle: (city) => `Material de Construção em ${city} | BR Aço – Aço Estrutural`,
    metaDesc: (city, state) =>
      `Material de construção (aço) em ${city} – ${state}. BR Aço: vergalhão CA-50, treliças, malhas, arames e pregos com entrega rápida. Especialistas em aço estrutural para obras.`,
    h1: (city) => `Material de Construção em ${city} – Aço Estrutural BR Aço`,
    intro: (city, state, deliveryLabel) =>
      `A BR Aço é a especialista em materiais de construção de aço em ${city} – ${state}. Fornecemos vergalhões CA-50 e CA-60, treliças metálicas, malhas soldadas, arames e pregos para obras residenciais e comerciais, com ${deliveryLabel}. Nosso diferencial: serviço de corte e dobra industrial com peças etiquetadas por elemento estrutural.`,
    features: [
      { icon: '🏗️', title: 'Vergalhão certificado', desc: 'CA-25, CA-50 e CA-60 com laudo ABNT para todas as etapas da estrutura.' },
      { icon: '🔲', title: 'Treliças e malhas', desc: 'Treliças T8/T10/T12 e telas soldadas para lajes — entrega no comprimento exato.' },
      { icon: '🔗', title: 'Arame e pregos', desc: 'Arame recozido para amarração e pregos de obra em todos os tamanhos.' },
      { icon: '✂️', title: 'Corte e dobra industrial', desc: 'Receba o aço cortado e dobrado conforme o projeto — sem trabalho no canteiro.' },
      { icon: '📋', title: 'Quantitativo gratuito', desc: 'Envie a planta e receba a quantidade de material estimada sem custo.' },
      { icon: '🚚', title: 'Entrega direta na obra', desc: 'Frota própria com agendamento de entrega direto no canteiro.' },
    ],
    faq: [
      {
        q: (city) => `Onde comprar material de construção (aço) em ${city}?`,
        a: (city, dl) => `A BR Aço é especialista no aço da construção civil em ${city}, com ${dl}. Vergalhões, treliças, malhas e serviço de corte e dobra — tudo com certificação ABNT e entrega direta na obra.`,
      },
      {
        q: () => 'A BR Aço vende apenas aço ou outros materiais de construção também?',
        a: () => 'A BR Aço é especializada em aço estrutural: vergalhões, treliças, malhas, arames e pregos. Para materiais como cimento, brita, areia e bloco, recomendamos um home center ou depósito de materiais de construção. Nosso foco é a ferragem da obra.',
      },
      {
        q: (city) => `Como pedir material de construção (aço) com entrega em ${city}?`,
        a: (city, dl) => `Envie a lista de materiais ou a planilha de ferro pelo WhatsApp. Fazemos o orçamento em até 2 horas e entregamos em ${city} ${dl}.`,
      },
      {
        q: () => 'A BR Aço aceita pagamento parcelado?',
        a: () => 'Consulte as condições de pagamento disponíveis diretamente com nossa equipe comercial. Aceitamos cartão, boleto bancário, PIX e transferência. Condições especiais para cadastro aprovado.',
      },
    ],
    relatedSlugs: ['vergalhao', 'ferragista', 'ferragens', 'corte-e-dobra'],
    whatsappMsg: (city) => `Olá! Preciso de orçamento para materiais de construção (vergalhão e aço) para obra em ${city}. Podem me ajudar?`,
  },

  'distribuidora-de-ferro': {
    slug: 'distribuidora-de-ferro',
    name: 'Distribuidora de Ferro',
    nameFull: 'Distribuidora de Ferro e Aço para Construção',
    verb: 'Solicitar',
    preposition: 'em',
    shortDesc: 'Distribuição direta de ferro e aço para obras',
    schemaKind: 'BusinessFacet',
    schemaCategory: 'Distribuidora de Ferro',
    pageTitle: (city) => `Distribuidora de Ferro em ${city} | BR Aço`,
    metaDesc: (city, state) =>
      `Distribuidora de ferro e aço em ${city} – ${state}. BR Aço: vergalhão CA-50, treliças, malhas e corte e dobra industrial. Entrega rápida com laudo de qualidade.`,
    h1: (city) => `Distribuidora de Ferro e Aço em ${city} – BR Aço`,
    intro: (city, state, deliveryLabel) =>
      `A BR Aço é a principal distribuidora de ferro e aço para construção civil em ${city} – ${state}. Com integração vertical entre distribuição e indústria de corte e dobra, entregamos vergalhões CA-50 e CA-60, treliças metálicas, malhas soldadas e arames com ${deliveryLabel} — direto da fábrica para o canteiro de obras.`,
    features: [
      { icon: '🏭', title: 'Distribuição + indústria', desc: 'Somos distribuidora e indústria de corte e dobra — o aço sai processado direto para a sua obra.' },
      { icon: '📦', title: 'Estoque amplo', desc: 'Todos os diâmetros CA-50 e CA-60 em estoque permanente — sem falta de material no meio da obra.' },
      { icon: '✂️', title: 'Corte e dobra sem custo extra', desc: 'O processamento industrial está integrado à distribuição — uma única negociação cobre tudo.' },
      { icon: '📜', title: 'Laudo de qualidade', desc: 'Certificado ABNT NBR 7480 com número de corrida rastreável até a usina de origem.' },
      { icon: '🚚', title: 'Frota própria', desc: 'Entrega programada sem depender de transportadoras terceiras — prazo garantido.' },
      { icon: '🤝', title: 'Suporte técnico', desc: 'Equipe técnica para orientar sobre bitola, classe e quantidade correta para cada projeto.' },
    ],
    faq: [
      {
        q: (city) => `Qual a principal distribuidora de ferro e aço em ${city}?`,
        a: (city, dl) => `A BR Aço é a maior distribuidora de ferro e aço de Goiás, com atendimento em ${city} ${dl}. Vergalhões certificados, treliças, malhas e serviço de corte e dobra industrial em um só lugar.`,
      },
      {
        q: () => 'A distribuidora faz entrega de ferro e aço em obra?',
        a: () => 'Sim. A BR Aço entrega diretamente no canteiro de obras com frota própria. Basta indicar o endereço e agendar a entrega no pedido.',
      },
      {
        q: (city) => `Como fazer pedido na distribuidora de ferro em ${city}?`,
        a: (city) => `Envie a planilha de ferro ou a lista de materiais pelo WhatsApp. Nossa equipe técnica em ${city} faz o orçamento em até 2 horas, com valores por bitola, prazo de entrega e opção de corte e dobra industrial.`,
      },
      {
        q: () => 'A distribuidora vende para pessoa física?',
        a: () => 'Sim. A BR Aço atende tanto pessoa física (autoconstrutores) quanto pessoa jurídica (construtoras, empreiteiras). O processo de orçamento e entrega é o mesmo para ambos.',
      },
    ],
    relatedSlugs: ['vergalhao', 'ferro-e-aco', 'ferragista', 'corte-e-dobra'],
    whatsappMsg: (city) => `Olá! Preciso de orçamento na distribuidora de ferro para obra em ${city}. Podem me enviar preços de vergalhão e aço estrutural?`,
  },

};

export const productSlugs = Object.keys(landingProducts);
