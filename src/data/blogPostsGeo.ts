// GEO/AIO enhancements — Answer Capsules + FAQ Schema por post
// Separado de blogPosts.ts para não inflar o bundle principal.
// Adicionado 13/06/2026 conforme protocolos GEO-1 e GEO-4.

export interface GeoPost {
  answerCapsule: string;   // 120–150 chars, linguagem definitória, aparece antes do artigo
  faqItems: { q: string; a: string }[];  // injetado como FAQPage JSON-LD
}

export const blogPostsGeo: Record<string, GeoPost> = {

  "o-que-e-corte-e-dobra-de-aco": {
    answerCapsule: "Corte e dobra de aço é o serviço industrial que entrega vergalhões já cortados e dobrados na medida exata do projeto, prontos para armar.",
    faqItems: [
      { q: "O que é corte e dobra de aço?", a: "É um serviço industrial que recebe o projeto estrutural de uma obra e entrega os vergalhões já cortados e dobrados nas medidas exatas especificadas pelo engenheiro, prontos para armar no canteiro." },
      { q: "Quanto custa o serviço de corte e dobra?", a: "Em Goiânia e Goiás, o custo varia de R$ 0,80 a R$ 1,50 por kg de aço processado, dependendo do volume, complexidade do projeto e prazo de entrega." },
      { q: "Qual a economia com corte e dobra?", a: "Em média, a economia em mão de obra chega a 50% comparado ao corte manual no canteiro. Além disso, elimina o desperdício de material, que no corte manual pode chegar a 3%–8% do total de aço." },
      { q: "A BR Aço atende em Goiânia e Brasília?", a: "Sim. A BR Aço realiza serviços de corte e dobra com entrega em Goiânia, interior de Goiás, Brasília e Distrito Federal. O prazo padrão é 7 dias úteis." },
    ],
  },

  "corte-e-dobra-vs-corte-manual": {
    answerCapsule: "O corte e dobra industrial é até 50% mais barato que o corte manual no canteiro, eliminando desperdício de 3%–8% e dispensando equipes de armadores.",
    faqItems: [
      { q: "Corte e dobra industrial é mais barato que corte manual?", a: "Sim. O corte e dobra industrial reduz em até 50% os custos com mão de obra de armação e elimina o desperdício de material (3%–8% no corte manual), resultando em economia total expressiva na obra." },
      { q: "Quando vale mais a pena cortar no canteiro?", a: "O corte manual no canteiro é vantajoso apenas em obras muito pequenas (menos de 200 kg de aço) ou quando não há projeto estrutural definido para enviar ao serviço industrial." },
      { q: "O aço do corte e dobra tem a mesma qualidade?", a: "Sim. O serviço usa vergalhão CA-50 e CA-60 certificado pela ABNT NBR 7480. A qualidade do aço é idêntica — o que muda é a precisão e a ausência de desperdício no corte industrial com máquinas CNC." },
    ],
  },

  "como-calcular-quantidade-de-aco-construcao": {
    answerCapsule: "A quantidade de aço por m² varia por estrutura: lajes simples usam 8–12 kg/m², vigas e pilares entre 80 e 150 kg/m³ de concreto, conforme NBR 6118.",
    faqItems: [
      { q: "Como calcular a quantidade de aço para uma construção?", a: "A forma mais precisa é somar o peso de cada peça da planilha de ferro do projeto estrutural. Como estimativa, lajes usam 8–12 kg/m², pilares 100–150 kg/m³ e vigas 80–120 kg/m³ de concreto." },
      { q: "Quantos kg de aço por m² de construção em média?", a: "Para uma residência simples, o consumo médio é de 15 a 20 kg de aço por m² de área construída, incluindo fundação, pilares, vigas e lajes. Obras mais complexas podem chegar a 40 kg/m²." },
      { q: "É possível calcular sem o projeto estrutural?", a: "Sim, usando tabelas de referência por tipo de estrutura e m² de área, mas com menor precisão. O serviço de corte e dobra da BR Aço inclui auxílio técnico no levantamento de quantitativos." },
    ],
  },

  "vergalhao-ca-50-vs-ca-60-diferencas": {
    answerCapsule: "CA-50 é o vergalhão nervurado mais usado na construção civil (500 MPa). CA-60 é para estribos finos (até 10 mm) e peças esbeltas com alta resistência.",
    faqItems: [
      { q: "Qual a diferença entre CA-50 e CA-60?", a: "CA-50 é o vergalhão nervurado com resistência ao escoamento de 500 MPa, mais usado em pilares, vigas e lajes. CA-60 tem resistência de 600 MPa e é indicado para estribos de diâmetro igual ou inferior a 10 mm." },
      { q: "Qual vergalhão usar em lajes?", a: "Para lajes convencionais, recomenda-se CA-50 para a armadura principal e CA-60 ou CA-50 para a armadura de distribuição e temperatura. A especificação correta deve seguir o projeto estrutural." },
      { q: "CA-50 e CA-60 têm o mesmo preço?", a: "Em geral, CA-60 tem custo ligeiramente maior por kg. Porém, é usado em bitolas menores, então o volume total de aço CA-60 numa obra é pequeno comparado ao CA-50." },
      { q: "A BR Aço fornece CA-50 e CA-60 em Goiânia?", a: "Sim. A BR Aço fornece vergalhões CA-50 e CA-60 em Goiânia, Goiás e DF, com serviço de corte e dobra já incluso no preço. Solicite orçamento pelo WhatsApp." },
    ],
  },

  "malha-de-aco-construcao-tipos-aplicacoes": {
    answerCapsule: "Malha de aço é uma armadura em grade pré-fabricada usada em lajes, pisos e fundações para distribuir cargas e reduzir o tempo de armação da obra.",
    faqItems: [
      { q: "O que é malha de aço?", a: "Malha de aço (ou tela soldada) é uma armadura pré-fabricada formada por barras de aço soldadas em forma de grade, usada em lajes, pisos industriais e radiers para distribuição uniforme de cargas." },
      { q: "Qual a diferença entre malha pop e tela soldada?", a: "Malha pop é uma tela soldada leve (CA-60, fios finos), usada para revestimentos e contrapiso. Tela soldada convencional é mais pesada (CA-50 ou CA-60 em barras maiores) e serve para estruturas como lajes e pisos." },
      { q: "A BR Aço fornece malha de aço em Goiás?", a: "Sim. A BR Aço fornece tela soldada e malha de aço com entrega em Goiânia e interior de Goiás. Para projetos específicos, também realizamos o corte e dobra da armação de laje sob medida." },
    ],
  },

  "entrega-aco-48-horas-goias": {
    answerCapsule: "A BR Aço entrega vergalhão CA-50 e CA-60 em Goiânia, Goiás e DF em até 48 horas para pedidos expressos — frota própria, sem intermediários.",
    faqItems: [
      { q: "É possível receber vergalhão em 48 horas em Goiânia?", a: "Sim. A BR Aço oferece entrega expressa de vergalhões em Goiânia e região metropolitana em até 48 horas para pedidos com aço disponível em estoque. Consulte disponibilidade pelo WhatsApp." },
      { q: "A BR Aço entrega no interior de Goiás?", a: "Sim. Atendemos cidades do interior de Goiás com prazo de entrega a combinar conforme a localidade. Para cidades mais próximas de Goiânia, o prazo pode ser de 2 a 3 dias úteis." },
      { q: "A entrega inclui o serviço de corte e dobra?", a: "Sim. A entrega de corte e dobra inclui o aço já processado conforme o projeto, identificado por peça e etapa. O prazo padrão para corte e dobra é 7 dias úteis, com opção expressa a consultar." },
    ],
  },

  "quanto-pesa-vergalhao-por-metro-tabela-completa": {
    answerCapsule: "O peso do vergalhão por metro varia de 0,222 kg (bitola 4,2 mm) a 6,31 kg (bitola 32 mm). Fórmula: peso (kg/m) = diâmetro² ÷ 162.",
    faqItems: [
      { q: "Qual o peso do vergalhão CA-50 de 10 mm por metro?", a: "O vergalhão CA-50 de 10 mm pesa 0,617 kg por metro linear. Usando a fórmula: 10² ÷ 162 = 0,617 kg/m." },
      { q: "Qual a fórmula para calcular o peso do vergalhão?", a: "A fórmula é: peso (kg/m) = diâmetro em mm² ÷ 162. Para calcular o peso total: multiplique pelo comprimento em metros. Exemplo: vergalhão 12,5 mm = 12,5² ÷ 162 = 0,963 kg/m." },
      { q: "Qual bitola de vergalhão é mais usada em lajes?", a: "As bitolas mais usadas em lajes são 8 mm, 10 mm e 12,5 mm para armadura principal. Estribos de vigas geralmente usam 5 mm ou 6,3 mm (CA-60)." },
    ],
  },

  "custo-corte-e-dobra-goiania-preco-2026": {
    answerCapsule: "O custo de corte e dobra em Goiânia em 2026 varia de R$ 0,80 a R$ 1,50 por kg, dependendo do volume, complexidade do projeto e prazo de entrega.",
    faqItems: [
      { q: "Qual o preço do serviço de corte e dobra em Goiânia?", a: "Em 2026, o custo do serviço de corte e dobra em Goiânia varia de R$ 0,80 a R$ 1,50 por kg de aço processado. O preço varia conforme volume (projetos maiores têm menor custo unitário) e complexidade." },
      { q: "Como solicitar orçamento de corte e dobra na BR Aço?", a: "Envie a planta estrutural ou planilha de ferro pelo WhatsApp da BR Aço. Nossa equipe técnica analisa, quantifica e envia o orçamento em até 24 horas." },
      { q: "O frete está incluso no preço de corte e dobra?", a: "A política de frete varia conforme a localização da obra e o volume do pedido. Consulte nossa equipe para verificar as condições de entrega para a sua cidade em Goiás ou DF." },
    ],
  },

  "corte-e-dobra-brasilia-df-guia-completo": {
    answerCapsule: "Corte e dobra de vergalhão em Brasília e DF é entregue na obra com aço certificado ABNT NBR 7480, prazo de 7 dias úteis e orçamento em 24 horas.",
    faqItems: [
      { q: "Como contratar corte e dobra de vergalhão em Brasília?", a: "Envie o projeto estrutural ou planilha de ferro pelo WhatsApp para a BR Aço. Receba orçamento em 24h. Após aprovação, o aço é cortado e dobrado em Goiânia e entregue em Brasília/DF em até 7 dias úteis." },
      { q: "Qual empresa faz corte e dobra de aço no DF?", a: "A BR Aço — Casa Brasileira de Aço — atende obras em Brasília e todo o Distrito Federal com serviço de corte e dobra de vergalhão CA-50 e CA-60, entregue na obra pronto para armar." },
      { q: "Qual o prazo de entrega de vergalhão em Brasília?", a: "O prazo padrão para entrega de corte e dobra em Brasília (DF) é de 7 a 10 dias úteis. Para vergalhão em barra reta sem processamento, consulte disponibilidade de entrega expressa." },
    ],
  },

  "vergalhao-brasilia-onde-comprar-ca50-ca60": {
    answerCapsule: "Vergalhão CA-50 e CA-60 para obras em Brasília pode ser adquirido com entrega direta via BR Aço — Goiânia, com prazo de 7 dias úteis e aço certificado.",
    faqItems: [
      { q: "Onde comprar vergalhão CA-50 em Brasília?", a: "A BR Aço fornece vergalhão CA-50 e CA-60 com entrega direta em obras de Brasília e DF, já no formato de corte e dobra conforme projeto, pronto para armar." },
      { q: "Qual o preço do vergalhão CA-50 em Brasília hoje?", a: "O preço do vergalhão CA-50 em Brasília varia conforme bitola e volume. Solicite cotação atualizada pelo WhatsApp da BR Aço — enviamos o orçamento com preço e prazo de entrega em até 24 horas." },
    ],
  },

  "quanto-vergalhao-por-m2-laje-tabela": {
    answerCapsule: "Lajes simples usam 8–10 kg/m² de vergalhão, lajes treliçadas 10–12 kg/m² e lajes maciças até 15 kg/m², conforme parâmetros da NBR 6118.",
    faqItems: [
      { q: "Quantos kg de vergalhão por m² de laje?", a: "A quantidade depende do tipo: lajes simples (10 cm) usam 8–10 kg/m², lajes treliçadas 10–12 kg/m² e lajes maciças de maior espessura podem usar até 15 kg/m². O projeto estrutural define a quantidade exata." },
      { q: "Como calcular o vergalhão de uma laje?", a: "Multiplique a área da laje em m² pelo consumo médio em kg/m² do tipo de laje. Para precisão, use a planilha de ferro do projeto. A BR Aço auxilia gratuitamente no levantamento de quantitativos." },
      { q: "Laje de 50 m² usa quanto de vergalhão?", a: "Uma laje convencional de 50 m² usa em média 400 a 600 kg de vergalhão. O valor exato depende da espessura, vão livre, cargas previstas e do projeto estrutural do engenheiro calculista." },
    ],
  },

  "ca-25-ca-50-ca-60-qual-vergalhao-usar": {
    answerCapsule: "CA-50 é o vergalhão padrão para pilares, vigas e lajes. CA-25 serve para obras simples sem exigência estrutural. CA-60 é restrito a estribos finos.",
    faqItems: [
      { q: "Qual a diferença entre CA-25, CA-50 e CA-60?", a: "CA-25 tem resistência de 250 MPa (liso, obras simples). CA-50 tem 500 MPa (nervurado, padrão da construção civil). CA-60 tem 600 MPa (nervurado fino, usado em estribos até 10 mm de diâmetro)." },
      { q: "Posso usar CA-25 em vez de CA-50?", a: "Não em estruturas de concreto armado convencionais. CA-25 é permitido apenas em aplicações sem exigência estrutural significativa. A substituição de CA-50 por CA-25 requer novo dimensionamento pelo engenheiro." },
      { q: "Onde comprar CA-50 e CA-60 em Goiânia?", a: "A BR Aço fornece vergalhões CA-50 e CA-60 em Goiânia, com estoque próprio e entrega na obra. O serviço inclui corte e dobra conforme projeto estrutural." },
    ],
  },

  "armaduras-prontas-vs-corte-e-dobra-quando-usar": {
    answerCapsule: "Corte e dobra é mais econômico que armaduras prontas a partir de 500 kg de aço, quando o projeto estrutural está definido e exige peças precisas.",
    faqItems: [
      { q: "Quando escolher corte e dobra ao invés de armaduras prontas?", a: "Prefira corte e dobra quando: há projeto estrutural definido, o volume de aço supera 500 kg, a obra exige precisão nas medidas e você quer reduzir custo de mão de obra no canteiro." },
      { q: "Armaduras prontas são mais baratas?", a: "Armaduras prontas (como sacos de estribos) podem parecer mais simples para obras pequenas, mas no cômputo geral o corte e dobra industrial é mais econômico para projetos médios e grandes, por eliminar desperdício e mão de obra de armação." },
    ],
  },

  "corte-manual-vs-corte-e-dobra-industrial-goias": {
    answerCapsule: "Em obras com mais de 500 kg de aço em Goiás, o corte e dobra industrial gera economia de até 50% em mão de obra frente ao corte manual no canteiro.",
    faqItems: [
      { q: "Vale a pena corte e dobra para obra pequena em Goiás?", a: "Para obras com mais de 200–300 kg de aço, o corte e dobra já começa a ser vantajoso. Em Goiânia, a BR Aço atende projetos de qualquer porte, desde residências até grandes empreendimentos." },
      { q: "Há empresas de corte e dobra em Goiânia?", a: "Sim. A BR Aço — Casa Brasileira de Aço — é referência em corte e dobra de vergalhão em Goiânia e Goiás, com tecnologia 100% automatizada, entrega em até 7 dias úteis e orçamento em 24 horas." },
    ],
  },

  "falta-mao-de-obra-construcao-civil-corte-e-dobra": {
    answerCapsule: "O corte e dobra industrial resolve a falta de armadores no canteiro, entregando o aço pronto para amarrar sem corte ou dobra manual no local.",
    faqItems: [
      { q: "Como resolver a falta de armadores na obra?", a: "O serviço de corte e dobra industrial elimina a necessidade de armadores especializados para corte e dobra no canteiro. O aço chega pronto — sua equipe só precisa armar e amarrar as peças." },
      { q: "Corte e dobra substitui o armador?", a: "Parcialmente. O corte e dobra substitui a etapa de corte e dobra manual (que exige armadores qualificados). A montagem e amarração ainda requer mão de obra, mas com menor qualificação e em menos tempo." },
    ],
  },

  "quanto-custa-armador-obra-vs-corte-dobra": {
    answerCapsule: "Manter armador em obra custa R$ 250–350/dia com encargos. O corte e dobra industrial elimina esse custo e reduz o tempo de armação em até 60%.",
    faqItems: [
      { q: "Qual o custo de um armador por dia em Goiânia?", a: "Em 2026, o custo diário de um armador em Goiânia, considerando salário, encargos sociais, EPI, alimentação e transporte, fica entre R$ 250 e R$ 350 por profissional." },
      { q: "O corte e dobra é mais barato que contratar armador?", a: "Na maioria das obras com mais de 500 kg de aço, sim. O corte e dobra elimina o custo diário dos armadores para corte e reduz o número de profissionais necessários para montagem em até 60%." },
    ],
  },

  "como-evitar-desperdicio-de-aco-na-obra": {
    answerCapsule: "O desperdício de aço na obra é eliminado com corte e dobra industrial, que corta cada peça na medida exata do projeto, zerando as pontas perdidas.",
    faqItems: [
      { q: "Quanto aço é desperdiçado no corte manual?", a: "No corte manual no canteiro, o desperdício de aço varia de 3% a 8% do total de material comprado, dependendo da habilidade dos armadores e da complexidade do projeto." },
      { q: "Como o corte e dobra industrial reduz o desperdício?", a: "As máquinas CNC de corte e dobra operam com tolerância milimétrica, cortando cada peça exatamente conforme o projeto estrutural. Isso elimina pontas e sobras, reduzindo o desperdício a praticamente zero." },
      { q: "Vale a pena o corte e dobra só para reduzir desperdício?", a: "Sim, principalmente em projetos com mais de 1 tonelada de aço. Uma economia de 5% em material em uma obra com 2.000 kg representa 100 kg de aço — custo considerável no orçamento." },
    ],
  },

  "vergalhao-ca-50-ca-60-guia-definitivo-2026": {
    answerCapsule: "Vergalhão CA-50 é o mais usado no Brasil: nervurado, 500 MPa, indicado para pilares, vigas e lajes. CA-60 vale para estribos esbeltos até 10 mm.",
    faqItems: [
      { q: "CA-50 ou CA-60: qual é melhor para minha obra?", a: "CA-50 é o padrão para a maioria das obras. Use CA-60 apenas onde o projeto estrutural especifica, normalmente em estribos de diâmetro até 10 mm. Nunca substitua um pelo outro sem aprovação do engenheiro." },
      { q: "Vergalhão CA-50 tem garantia de qualidade?", a: "Sim. Vergalhões CA-50 e CA-60 devem ser certificados conforme ABNT NBR 7480. A BR Aço fornece apenas aço com certificação de origem, garantindo as propriedades mecânicas exigidas pela norma." },
      { q: "Onde comprar vergalhão CA-50 em Goiânia em 2026?", a: "A BR Aço é fornecedora de vergalhão CA-50 e CA-60 em Goiânia, com estoque próprio, entrega rápida e serviço de corte e dobra incluso. Solicite cotação atualizada pelo WhatsApp." },
    ],
  },

  "5-problemas-barra-reta-12m-canteiro-obra": {
    answerCapsule: "Barras retas de 12m geram desperdício de até 8%, risco de acidentes, custo de armadores e entulho no canteiro — tudo eliminado com corte e dobra.",
    faqItems: [
      { q: "Por que barras retas de 12m são problemáticas no canteiro?", a: "Barras de 12m exigem espaço para manuseio, causam acidentes, geram pontas (desperdício de 3%–8%), exigem armadores para dobra e produzem entulho de aço no canteiro. O corte e dobra industrial resolve todos esses problemas." },
      { q: "Qual alternativa à barra reta de 12m?", a: "O corte e dobra industrial: a barra chega ao canteiro já cortada e dobrada no comprimento exato de cada peça do projeto, sem sobras, sem manuseio pesado e sem necessidade de ferramentas de dobra no canteiro." },
    ],
  },

  "laje-trelicada-como-fazer-guia-completo": {
    answerCapsule: "Laje treliçada combina vigotas pré-moldadas, treliças de aço e enchimento (EPS ou cerâmica), formando sistema econômico e resistente para vãos até 6 metros.",
    faqItems: [
      { q: "O que é laje treliçada?", a: "Laje treliçada é um sistema construtivo formado por vigotas pré-moldadas de concreto, treliças de aço (armadura espacial), enchimento de EPS ou cerâmica, armadura superior e capa de concreto. É o tipo de laje mais usado em residências no Brasil." },
      { q: "Quanto custa a armação de laje treliçada?", a: "O custo da armação de uma laje treliçada depende da área, vão livre e especificação do projeto. Em Goiânia, o serviço de corte e dobra das treliças e armadura complementar pode ser cotado com a BR Aço." },
      { q: "Qual vão máximo para laje treliçada?", a: "Lajes treliçadas convencionais atendem vãos de até 6 metros sem escoramento adicional. Para vãos maiores, o projeto estrutural deve definir se são necessários pontaletes intermediários ou um tipo diferente de laje." },
    ],
  },

  "como-calcular-quantidade-vergalhao-laje": {
    answerCapsule: "Para calcular vergalhão de laje: área (m²) × consumo por tipo (8–10 kg/m² treliçada, 15–25 kg/m² maciça) ÷ peso por metro da bitola = número de barras.",
    faqItems: [
      { q: "Quantos kg de vergalhão por m² de laje?", a: "O consumo médio de vergalhão por m² de laje depende do tipo: laje treliçada de vão até 4m usa 8–10 kg/m²; treliçada de vão 4–6m, 10–14 kg/m²; laje maciça, 15–25 kg/m². Esses valores incluem armadura principal, distribuição, negativos e cintas de borda." },
      { q: "Como calcular o vergalhão de uma laje de 60 m²?", a: "Para laje treliçada de 60 m² com vão médio: 60 × 12 kg/m² = 720 kg. Em barras de ø10 mm (0,617 kg/m × 12 m = 7,40 kg/barra): 720 ÷ 7,40 ≈ 97 barras. Adicione 10% de folga: ~107 barras. O quantitativo exato depende do projeto estrutural." },
      { q: "A BR Aço auxilia no cálculo de vergalhão para laje?", a: "Sim. Enviando a planta estrutural pelo WhatsApp, a equipe técnica da BR Aço faz o levantamento de quantitativos gratuitamente e retorna com a lista de materiais e orçamento completo em até 24 horas." },
    ],
  },

  "malha-pop-o-que-e-quando-usar": {
    answerCapsule: "Malha pop é a tela soldada CA-60 em painéis pré-fabricados, usada como armadura de distribuição em lajes, contrapisos e pisos leves, com menos desperdício e armação mais rápida.",
    faqItems: [
      { q: "O que é malha pop?", a: "Malha pop é o nome popular para tela soldada em painéis: armadura pré-fabricada de fios de aço CA-60 soldados em grade quadrada, em painéis de aproximadamente 2 × 3 m. É usada como armadura de distribuição em lajes treliçadas, contrapisos e pisos leves residenciais." },
      { q: "Malha pop substitui o vergalhão convencional em lajes?", a: "Não diretamente. A malha pop (tela soldada) funciona como armadura de distribuição e controle de temperatura e retração. As barras longitudinais e transversais principais da laje que resistem à flexão ainda devem ser especificadas e calculadas conforme a ABNT NBR 6118." },
      { q: "Qual malha pop usar em laje treliçada residencial?", a: "Para lajes treliçadas residenciais, a tela soldada mais usada é a Q-92 (fios ø4,2 mm, espaçamento 10 × 10 cm) ou Q-138 (fios ø5 mm, espaçamento 10 × 10 cm) como armadura de distribuição. A especificação correta depende da espessura da capa e das cargas previstas no projeto estrutural." },
    ],
  },

  "norma-abnt-nbr-7480-aco-concreto-armado": {
    answerCapsule: "A ABNT NBR 7480:2007 define as classes CA-25, CA-50 e CA-60 para vergalhões de concreto armado, estabelecendo resistência mínima, ductilidade, marcação e rastreabilidade obrigatória.",
    faqItems: [
      { q: "O que é a ABNT NBR 7480 e para que serve?", a: "A ABNT NBR 7480:2007 é a norma brasileira que regulamenta barras e fios de aço destinados a armaduras para concreto armado. Ela define as classes CA-25, CA-50 e CA-60, os requisitos mínimos de resistência mecânica, composição química, ductilidade, marcação obrigatória nas barras e rastreabilidade por corrida de produção. É de observância compulsória em todo o Brasil." },
      { q: "Como verificar se um vergalhão é certificado pela NBR 7480?", a: "Todo vergalhão certificado deve ter marcações em relevo nas nervuras indicando a usina fabricante, o diâmetro nominal e a classe (CA-50 = 2 fileiras de nervuras; CA-60 = 3 fileiras). O lote deve vir acompanhado de laudo técnico com número de corrida e resultados dos ensaios de tração e dobramento." },
      { q: "O que acontece se usar vergalhão sem certificação ABNT?", a: "Usar vergalhão sem certificação em estruturas de concreto armado é ilegal e perigoso: a resistência real pode ser inferior à especificada no projeto, comprometendo a segurança. Em obras com financiamento pela Caixa Econômica Federal (MCMV), o laudo ABNT é obrigatório para liberação de vistoria e desembolso das parcelas." },
    ],
  },

  "laje-macica-vs-laje-trelicada-qual-escolher-2026": {
    answerCapsule: "Laje maciça é mais rígida e indicada para vãos curtos com cargas concentradas. Laje treliçada é mais leve, econômica e padrão em residências com vãos de 3 a 6 metros.",
    faqItems: [
      { q: "O que é laje maciça e o que é laje treliçada?", a: "Laje maciça é moldada com concreto e armadura em toda a espessura, sem vazios internos — estrutura pesada e rígida, indicada para vãos até 4 m. Laje treliçada combina treliças de aço e elementos de preenchimento (EPS ou cerâmica), criando vazios que reduzem o peso próprio em 20–30% e permitem vãos de até 6 m com menor consumo de aço e concreto." },
      { q: "Qual laje usa menos vergalhão?", a: "A laje treliçada usa menos vergalhão convencional que a maciça de mesma área, pois parte da armadura principal é substituída pelas treliças metálicas. Para uma laje de 60 m² com vão de 4 m, a treliçada pode usar 20 a 30% menos vergalhão total que a maciça equivalente." },
      { q: "Qual tipo de laje é mais barata em Goiás em 2026?", a: "Para a maioria das residências em Goiás, a laje treliçada é mais econômica: menos concreto, menos vergalhão e menos escoramento. A laje maciça é indicada quando o projeto estrutural exige rigidez maior, cargas concentradas elevadas ou aberturas irregulares." },
    ],
  },

  "trelicas-de-aco-para-que-servem": {
    answerCapsule: "Treliças de aço são elementos pré-fabricados (banzo + alma diagonal soldados) usados como armadura principal de lajes treliçadas, permitindo vãos de até 6 m com menos escoramento.",
    faqItems: [
      { q: "O que são treliças de aço e para que servem?", a: "Treliças de aço são elementos pré-fabricados compostos por dois arames longitudinais (banzo superior e inferior) e um arame diagonal (alma) soldados em fábrica. Servem como armadura principal de lajes treliçadas, substituindo parte do escoramento e permitindo lajes com vãos de até 6 m." },
      { q: "Qual treliça usar para uma laje com vão de 4 metros?", a: "Para vão livre de 4 m, a treliça mais usada é a TR-10 (altura h = 10 cm), resultando em laje com espessura total de 16 a 18 cm. A TR-08 (h = 8 cm) atende vãos de até 3,5 m. Para vãos maiores (5–6 m), use TR-12 ou TR-14. A especificação exata deve seguir o projeto estrutural." },
      { q: "Qual a diferença entre TR-08, TR-10, TR-12 e TR-14?", a: "A classificação TR indica a altura h do elemento: TR-08 (h = 8 cm), TR-10 (h = 10 cm), TR-12 (h = 12 cm), TR-14 (h = 14 cm). Quanto maior a altura, maior a capacidade de vão e o momento fletor resistido. Todas devem atender à ABNT NBR 14859-1 e ser especificadas pelo engenheiro responsável." },
    ],
  },

  // ─── Rodada GEO-1/GEO-5 (17/07/2026) — 35 posts, meta 60 (26 → 61) ────────

  "fundacao-goiania-tipos-solo": {
    answerCapsule: "Em Goiânia, o solo predominante é o latossolo vermelho-amarelo; a fundação ideal (sapata, radier ou estaca) depende do SPT medido em sondagem, que varia de N=5 a N=30 na região.",
    faqItems: [
      { q: "Qual fundação usar em Goiânia?", a: "Depende do SPT: N < 5 indica radier ou estacas; 5 a 10, radier com reforço ou sapata rasa; 10 a 20, sapata isolada ou corrida; N ≥ 20, sapata, tubulão ou bloco conforme a carga." },
      { q: "É obrigatório fazer sondagem SPT em Goiânia?", a: "Sim. A região tem variação de SPT de N=5 a N=30 nos primeiros metros e solos que podem ser colapsíveis quando saturados — a sondagem é obrigatória antes de projetar a fundação." },
      { q: "Quanto de aço uma sapata usa?", a: "Entre 15 e 30 kg de vergalhão CA-50 por sapata isolada, variando conforme a carga e as dimensões definidas pelo engenheiro." },
      { q: "A BR Aço fornece aço para fundação em Goiânia?", a: "Sim, vergalhão CA-50 em todas as bitolas usadas em fundações, além de telas Q-138 e Q-196 para radier, com entrega em até 48h." },
    ],
  },

  "ferragista-goiania-como-escolher": {
    answerCapsule: "Uma ferragista em Goiânia é o fornecedor especializado em aços estruturais (vergalhão, treliça, malha); a escolha certa exige certificação NBR 7480, corte e dobra CNC e estoque de todos os diâmetros.",
    faqItems: [
      { q: "O que é uma ferragista?", a: "É o fornecedor especializado nos aços estruturais da obra — vergalhões, treliças, malhas soldadas e arames — diferente de uma ferragem de acabamento (fechaduras, dobradiças, puxadores)." },
      { q: "Quais critérios avaliar antes de escolher uma ferragista?", a: "Certificado ABNT NBR 7480 por lote, corte e dobra industrial CNC próprio, estoque de todos os diâmetros do projeto, prazo de entrega por escrito com frota própria, suporte técnico e transparência de preço." },
      { q: "Por que exigir o certificado de qualidade do lote?", a: "Sem o certificado, não há garantia de conformidade com a NBR 7480 — isso representa risco estrutural e problema para a ART do responsável técnico." },
      { q: "A BR Aço é ferragista em Goiânia?", a: "Sim, com o maior parque de corte e dobra de Goiás, estoque permanente de CA-25, CA-50 e CA-60 em todos os diâmetros e entrega em até 48h." },
    ],
  },

  "distribuidoras-ferro-aco-goiania": {
    answerCapsule: "Distribuidora de ferro e aço em Goiânia é o fornecedor de vergalhão, treliça e malha para obra; o diferencial real está no que o preço por kg inclui — frete, corte e dobra e laudo de qualidade.",
    faqItems: [
      { q: "O preço por kg da distribuidora inclui tudo?", a: "Nem sempre: frete pode custar de R$0,30 a R$0,80/kg e corte e dobra de R$0,50 a R$1,00/kg a mais — confirme o que está incluso antes de comparar propostas." },
      { q: "Qual a diferença entre distribuidor puro e distribuidor com serviço center?", a: "O distribuidor puro vende só o material, e você ainda precisa cortar (com 8% a 15% de perda); o distribuidor com serviço center já entrega cortado e dobrado, com custo total geralmente menor." },
      { q: "Distribuidora com estoque em Goiânia entrega em quanto tempo?", a: "De 24 a 48h. Quem depende de pedido direto à usina leva de 5 a 15 dias úteis — inviável para obras com cronograma apertado." },
      { q: "A BR Aço é distribuidora e serviço center em Goiânia?", a: "Sim, reúne as duas coisas em Aparecida de Goiânia: vergalhão CA-25, CA-50 e CA-60, corte e dobra CNC com tolerância ±5mm, treliças e telas, com laudo NBR 7480 em cada lote." },
    ],
  },

  "vergalhao-preco-kg-goias-2026": {
    answerCapsule: "Em 2026, o vergalhão CA-50 em Goiás custa entre R$5,80 e R$7,80 por kg dependendo do diâmetro (6,3 a 25 mm) e do volume da compra, com o preço final variando por minério de ferro, câmbio e frete.",
    faqItems: [
      { q: "Quanto custa o vergalhão CA-50 em Goiás em 2026?", a: "Entre R$5,80/kg (φ6,3mm) e R$7,80/kg (φ25mm) na barra de 12m, variando por volume e prazo de pagamento." },
      { q: "O que é ferro 3/8 e 5/16 em milímetros?", a: "5/16 pol equivale a φ8,0mm; 3/8 pol equivale a φ10,0mm (equivalente comercial); 1/2 pol equivale a φ12,5mm; 5/8 pol equivale a φ16,0mm." },
      { q: "O que faz o preço do vergalhão variar?", a: "Cotação do minério de ferro, câmbio (R$/USD), demanda da construção civil e frete das usinas (principalmente de Minas Gerais) até Goiás." },
      { q: "A BR Aço entrega vergalhão no DF?", a: "Sim, em Brasília e no Entorno (Taguatinga, Ceilândia, Valparaíso, Luziânia, Águas Lindas, Formosa etc.) em 48 a 72h." },
    ],
  },

  "preco-vergalhao-2025-goias": {
    answerCapsule: "O preço do vergalhão em Goiás oscila conforme minério de ferro, energia elétrica, câmbio (R$/USD) e demanda da construção civil — fatores que mudam semanalmente por ser um commodity.",
    faqItems: [
      { q: "O que mais influencia o preço do vergalhão?", a: "Cotação internacional do minério de ferro, tarifa de energia elétrica das usinas, câmbio R$/USD e demanda da construção civil." },
      { q: "Como comprar vergalhão de forma mais estratégica?", a: "Planejar com antecedência, comprar por etapa (fundação, pilares, laje) em vez de tudo de uma vez, e sempre pedir cotação formal por escrito com prazo de validade." },
      { q: "Por que não comparar só o preço por kg?", a: "Porque um fornecedor mais barato sem laudo de qualidade, sem entrega garantida ou com mais perda no corte pode custar mais no total da obra." },
      { q: "A BR Aço fornece cotação por escrito?", a: "Sim, com preço por bitola, prazo de validade, especificação técnica NBR 7480 e condições de entrega — sem surpresas no faturamento." },
    ],
  },

  "vantagens-corte-dobra-goiania": {
    answerCapsule: "Contratar corte e dobra em Goiânia reduz o desperdício de aço de 8-15% para menos de 3%, corta o tempo de armação em até 40% e garante entrega em 48h com suporte técnico local.",
    faqItems: [
      { q: "Quanto se economiza em desperdício com corte e dobra em Goiânia?", a: "De 500 kg a 1.200 kg de vergalhão em obras de 10 toneladas, caindo de 8-15% de perda no corte manual para menos de 3% no processo industrial." },
      { q: "O corte e dobra reduz o tempo de armação?", a: "Sim, em até 40%, pois o armador só monta e amarra as peças — não precisa operar tesoura nem dobradeira no canteiro." },
      { q: "Qual o prazo de entrega em Goiânia?", a: "Até 48 horas após a aprovação do orçamento, garantido contratualmente pela BR Aço." },
      { q: "Quem mais usa corte e dobra em Goiás?", a: "Construtoras de médio e grande porte, empreiteiras especializadas em estrutura, autoconstrutores com projeto aprovado e engenheiros que querem controle total do material." },
    ],
  },

  "corte-dobra-para-casa-residencia": {
    answerCapsule: "Corte e dobra industrial compensa em casas de 80 a 300 m² com projeto estrutural: reduz a perda de material de 10% para menos de 3%, com lote mínimo de 500 kg de aço processado.",
    faqItems: [
      { q: "Corte e dobra vale a pena para obra residencial pequena?", a: "Sim, a partir de 80 m² com projeto estrutural — o mito de que o serviço só serve para grandes obras não se sustenta." },
      { q: "Quanto de aço uma casa residencial usa?", a: "Entre 800 kg e 3.000 kg de vergalhão, dependendo do tamanho e do sistema estrutural adotado." },
      { q: "Qual o lote mínimo da BR Aço?", a: "500 kg de aço processado; obras menores que isso podem ser atendidas pontualmente sob consulta." },
      { q: "Preciso ter o projeto estrutural pronto para contratar?", a: "Sim, é indispensável — sem a planilha de ferro do engenheiro calculista não é possível cortar e dobrar com precisão." },
    ],
  },

  "fornecedor-aco-distrito-federal-obras-2026": {
    answerCapsule: "Escolher fornecedor de aço no DF exige verificar certificação NBR 7480, prazo de entrega confirmado por escrito, serviço de corte e dobra integrado e documentação para financiamento bancário.",
    faqItems: [
      { q: "Que documentos o fornecedor de aço deve entregar no DF?", a: "Nota fiscal discriminada sempre; certificado de qualidade por lote e relatório de produção para obras com financiamento bancário (CEF, BB) ou controle rigoroso." },
      { q: "Por que exigir corte e dobra no mesmo fornecedor?", a: "Reduz o número de fornecedores a coordenar, elimina intermediários e garante rastreabilidade do aço desde a siderúrgica até a peça final." },
      { q: "A BR Aço atende o Distrito Federal?", a: "Sim, com entrega em 2 a 3 dias úteis a partir de Aparecida de Goiânia, certificado de qualidade e relatório de produção em todos os lotes." },
    ],
  },

  "obra-brasilia-entrega-aco-df-prazo": {
    answerCapsule: "Para obras em Brasília, o aço cortado e dobrado vindo de Goiás leva de 3 a 4 dias úteis do pedido à entrega — por isso o pedido deve ser feito com pelo menos 4 dias de antecedência da etapa.",
    faqItems: [
      { q: "Com quanta antecedência pedir aço para obra em Brasília?", a: "No mínimo 4 dias úteis; fundação exige 5 dias e escadas ou elementos especiais, 6 a 7 dias, por terem geometria mais complexa." },
      { q: "Qual o ciclo completo do pedido até o DF?", a: "Envio da planilha (dia 0) → orçamento em até 2h → produção em 1 a 2 dias úteis → transporte Goiânia-Brasília em 1 dia útil → entrega no dia 3 a 4 útil." },
      { q: "O que fazer se o aço atrasar?", a: "Adiantar outras tarefas do cronograma, pedir o material por etapas (pilares antes da laje) ou recorrer a um distribuidor local do DF para urgências abaixo de 500 kg." },
      { q: "A BR Aço confirma prazo por escrito?", a: "Sim, com número do pedido de produção e contato do transportador no dia anterior à entrega." },
    ],
  },

  "aco-estrutural-brasilia-goiania-logistica-custos": {
    answerCapsule: "Aço estrutural custa de R$7,80 a R$9,00/kg em Goiânia e de R$9,00 a R$10,50/kg em Brasília (φ10, corte e dobra incluso) — a diferença reflete o frete de cerca de R$1 a R$1,50 por kg.",
    faqItems: [
      { q: "Por que o aço é mais caro em Brasília do que em Goiânia?", a: "O DF não tem usinas nem grandes centros de corte e dobra; o aço vem de Goiás ou MG, e o frete soma R$1,00 a R$1,50/kg ao preço." },
      { q: "Qual o prazo de entrega em cada cidade?", a: "Goiânia e Grande Goiânia: 24 a 48h. Brasília/DF: 2 a 4 dias úteis." },
      { q: "Vale a pena comprar de fornecedor de Goiás mesmo com frete?", a: "Sim, para obras acima de 3 toneladas o frete se dilui e fornecedores goianos ainda oferecem mais diâmetros e corte e dobra completo com relatório de produção." },
      { q: "A BR Aço atende as duas regiões com o mesmo processo?", a: "Sim: planilha de ferro → orçamento em 2h → produção → entrega com documentação completa, tanto em Goiânia (24-48h) quanto no DF (2-3 dias úteis)." },
    ],
  },

  "tabela-bitolas-vergalhao-diametros": {
    answerCapsule: "A tabela de bitolas de vergalhão CA-50 vai de φ6,3 mm (0,245 kg/m) a φ32 mm (6,313 kg/m), conforme a ABNT NBR 7480, com peso calculado pela densidade do aço de 7.850 kg/m³.",
    faqItems: [
      { q: "Quanto pesa 1 metro de vergalhão φ12,5mm CA-50?", a: "0,963 kg/m (área da seção de 1,227 cm²), conforme a tabela de bitolas da ABNT NBR 7480." },
      { q: "Como calcular o peso total de vergalhão?", a: "Peso (kg) = comprimento total (m) × peso por metro (kg/m). Exemplo: 120 m de φ12,5mm × 0,963 kg/m = 115,6 kg." },
      { q: "Qual bitola usar em estribos?", a: "CA-25 em φ5,0mm, φ6,3mm ou φ8,0mm, conforme a solicitação do pilar ou viga definida pelo projeto." },
      { q: "A BR Aço fornece todas as bitolas da tabela?", a: "Sim, mantém estoque de CA-50 e CA-25 em todos os diâmetros e corta na bitola e no comprimento exato do projeto." },
    ],
  },

  "tabela-de-peso-do-ferro-pronto": {
    answerCapsule: "A tabela de peso do ferro pronto traz o peso por metro do vergalhão CA-25, CA-50 e CA-60 por diâmetro — do φ6,3mm (0,245 kg/m) ao φ40mm (9,865 kg/m), conforme ABNT NBR 7480.",
    faqItems: [
      { q: "Qual a fórmula para calcular o peso do vergalhão?", a: "Peso (kg/m) = 0,00617 × diâmetro² (mm²). Para φ16mm: 0,00617 × 256 = 1,578 kg/m." },
      { q: "CA-25 e CA-50 têm o mesmo peso por diâmetro?", a: "Sim, o peso por diâmetro é igual; a diferença está na resistência ao escoamento (250 MPa no CA-25 contra 500 MPa no CA-50)." },
      { q: "Quanto pesa uma barra de 12m de φ20mm CA-50?", a: "29,59 kg (peso linear de 2,466 kg/m × 12m de barra)." },
      { q: "Qual a tolerância de peso aceita pela norma?", a: "±3% por peça, conforme ABNT NBR 7480/2007." },
    ],
  },

  "taxa-armadura-laje-viga-pilar": {
    answerCapsule: "A taxa de armadura (ρ = área de aço / área de concreto) tem limites pela NBR 6118: mínimo de 0,15% em lajes e vigas e 0,4% em pilares; máximo de 4% em vigas e 8% em pilares CA-50.",
    faqItems: [
      { q: "O que é taxa de armadura?", a: "A relação entre a área de aço (As) e a área da seção transversal de concreto (Ac): ρ = As / Ac." },
      { q: "Qual a taxa mínima de armadura em pilar?", a: "0,4% da área do pilar, com máximo de 8% para CA-50, conforme a NBR 6118." },
      { q: "Por que existe um limite máximo de armadura?", a: "Acima do limite, o concreto não envolve bem as barras e o elemento rompe de forma frágil e repentina, sem ganho estrutural proporcional ao aço extra." },
      { q: "O que acontece se a taxa ficar abaixo do mínimo?", a: "Risco de fissuração excessiva por retração e ruptura frágil e sem aviso após a fissuração do concreto." },
    ],
  },

  "espacamento-estribos-pilar-viga-tabela-nbr-6118": {
    answerCapsule: "O espaçamento máximo de estribos pela NBR 6118 é o menor valor entre d/2, 20×diâmetro da barra e 20 cm em pilares; em vigas varia de 10 a 30 cm conforme o esforço cortante.",
    faqItems: [
      { q: "Qual a fórmula do espaçamento máximo de estribos em pilar?", a: "s_máx = menor valor entre (dimensão mínima da seção)/2, 20×diâmetro da barra longitudinal e 20 cm." },
      { q: "Qual espaçamento típico num pilar residencial de 14×14 cm?", a: "7 cm, para barras longitudinais φ12,5mm — valor obtido pela fórmula da NBR 6118 (d_mín/2 = 7 cm é o menor dos três limites)." },
      { q: "O espaçamento muda perto da emenda das barras?", a: "Sim, a NBR 6118 exige reduzir para a metade do valor calculado ao longo de um comprimento mínimo de 1,5× o comprimento de emenda." },
      { q: "Qual o diâmetro mínimo do estribo?", a: "5 mm pela NBR 6118; na prática, φ6,3mm em pilares e vigas residenciais e φ8 a φ10mm em estruturas de grande porte." },
    ],
  },

  "cobrimento-minimo-armadura-tabela-nbr-6118": {
    answerCapsule: "O cobrimento mínimo de armadura pela NBR 6118:2026 vai de 20 a 50 mm conforme o elemento e a classe de agressividade; em Goiânia (Classe II, urbana), é 25 mm para laje e 30 mm para viga e pilar.",
    faqItems: [
      { q: "Qual o cobrimento mínimo de armadura em Goiânia?", a: "Classe II (urbana): 25 mm em lajes, 30 mm em vigas e pilares, 40 mm em elementos de fundação em contato com o solo." },
      { q: "O que é cobrimento nominal?", a: "É o cobrimento mínimo somado a 10 mm de tolerância de execução. Para laje em Goiânia: 25 mm + 10 mm = 35 mm nominal." },
      { q: "Qual o erro mais comum de cobrimento em lajes?", a: "Usar apenas a treliça como espaçador, sem pastilhas nas posições sem treliça — o que resulta em cobrimento de 10 a 15 mm, abaixo do mínimo de 25 mm." },
      { q: "Como garantir o cobrimento correto na obra?", a: "Com espaçadores certificados posicionados a cada 50 cm, nunca substituídos por pedras, e verificação por trena antes da concretagem." },
    ],
  },

  "taxa-armadura-minima-maxima-nbr-6118": {
    answerCapsule: "A NBR 6118 (Tabelas 17.1 e 17.3) define taxa mínima de armadura por ρ_mín = 0,26×(fctm/fyk) ≥ 0,13% em vigas, 0,4% em pilares e 0,15% em lajes, para evitar ruptura frágil após fissuração.",
    faqItems: [
      { q: "Qual a fórmula da taxa mínima de armadura em vigas?", a: "ρ_mín = 0,26 × (fctm/fyk) ≥ 0,13%. Para uma viga em concreto C30 com aço CA-50, isso resulta em ρ_mín = 0,151%." },
      { q: "Qual a taxa máxima de armadura em pilar?", a: "8% em condição normal, podendo chegar a 10% em regiões de emenda por traspasse simultâneas." },
      { q: "O que acontece numa peça sub-armada?", a: "Fissuração excessiva em serviço e possibilidade de colapso frágil logo após a fissuração do concreto — sem aviso prévio." },
      { q: "A precisão do corte afeta a taxa de armadura real?", a: "Sim — no corte manual, erros de ±15 a 25 mm obrigam o armador a compensar com barra extra, alterando a taxa calculada; no corte CNC industrial a tolerância é de ±3 mm." },
    ],
  },

  "raio-minimo-dobra-vergalhao-nbr-6118": {
    answerCapsule: "O raio mínimo de dobra do vergalhão pela NBR 6118 é 3,5×φ (CA-50) ou 5,0×φ (CA-60) para barras até 20 mm — para φ16mm CA-50, isso exige mandril de 112 mm.",
    faqItems: [
      { q: "Qual o raio mínimo de dobra para vergalhão CA-50 φ16mm?", a: "56 mm de raio, com mandril mínimo de 112 mm, conforme a Tabela 9.1 da NBR 6118." },
      { q: "Por que o raio de dobra importa?", a: "Um raio insuficiente causa fissuração do aço no ponto de dobra, esmagamento do concreto interno à curva e ancoragem ineficiente." },
      { q: "Qual o erro mais comum nos canteiros?", a: "Dobrar com mandril de 30 a 40 mm quando o mínimo exigido é bem maior (ex.: 112 mm para φ16mm CA-50) — menos de 40% do valor normativo." },
      { q: "O corte e dobra industrial garante o raio correto?", a: "Sim, a máquina CNC é configurada por diâmetro antes de cada lote, garantindo conformidade com a NBR 6118 em toda a produção." },
    ],
  },

  "cobrimento-armadura-nbr-6118-tabela-valores": {
    answerCapsule: "O cobrimento mínimo pela Tabela 7.2 da NBR 6118 varia de 20 mm (laje, Classe I) a 65 mm (fundação, Classe IV); em Goiânia e Brasília, ambiente urbano Classe II, o cobrimento de viga e pilar é 30 mm.",
    faqItems: [
      { q: "Qual a classe de agressividade de Goiânia e Brasília?", a: "Classe II (urbana), salvo setores industriais (Classe III) ou estruturas em contato direto com solo agressivo." },
      { q: "O que acontece com cobrimento insuficiente a longo prazo?", a: "Corrosão progressiva com redução de até 30% da seção de aço e, após mais de 20 anos, risco de colapso localizado por ruptura de estribo oxidado." },
      { q: "Qual a vida útil esperada com cobrimento correto?", a: "Cerca de 50 anos com cobrimento nominal de 40 mm (Classe II); com cobrimento médio abaixo de 15 mm, a primeira corrosão aparece em 5 a 8 anos, segundo dado do IBRACON." },
      { q: "Como controlar o cobrimento em campo?", a: "Com espaçadores certificados (resistência ≥ 0,25×fck, mínimo de 4 unidades/m² em laje conforme NBR 14931) e verificação por pachômetro." },
    ],
  },

  "tabela-referencia-nbr-6118-completa": {
    answerCapsule: "A tabela de referência da NBR 6118 reúne, numa página, cobrimento nominal por classe de agressividade, comprimento de ancoragem por fck, transpasse de emenda e raios mínimos de dobra.",
    faqItems: [
      { q: "Qual o comprimento de ancoragem de uma barra CA-50 φ12,5mm em concreto C25?", a: "Barra reta em tração: 68 cm; com gancho de 90°, 42 cm (posição boa de concretagem)." },
      { q: "Como calcular o comprimento de transpasse de uma emenda?", a: "lt = α1 × lb,ef, com α1 variando de 1,0 (até 25% das barras emendadas na seção) a 2,0 (mais de 50%)." },
      { q: "Qual o cobrimento nominal em ambiente urbano (Classe II)?", a: "25 mm para lajes e paredes, 35 mm para vigas e pilares." },
      { q: "Qual o gancho padrão de um estribo a 135°?", a: "Dobragem de 135° com extensão reta mínima de 5×φ, conforme o item 9.4.7.2 da NBR 6118." },
    ],
  },

  "corte-dobra-vs-barra-inteira-vantagens": {
    answerCapsule: "Comparar corte e dobra com barra inteira só pelo preço por kg ignora custos ocultos: a barra inteira perde 8% a 15% do material em pontas, contra menos de 3% no processo industrial.",
    faqItems: [
      { q: "Quanto de aço se perde comprando em barra inteira?", a: "De 8% a 15% do total em pontas e aparas — em uma obra com 5 toneladas, de 400 kg a 750 kg de aço pago e não usado." },
      { q: "Quando a barra inteira ainda compensa?", a: "Em peças muito longas e retas sem dobramento, obras muito pequenas abaixo do lote mínimo do corte e dobra, ou projeto ainda não finalizado." },
      { q: "O que está incluso no preço do corte e dobra?", a: "Material e processo: corte, dobra, identificação por elemento e entrega — sem custo adicional de mão de obra de armação bruta." },
      { q: "Como a BR Aço processa o pedido?", a: "Recebe o projeto estrutural ou a planilha de ferro e entrega cada peça identificada, cortada e dobrada na medida exata, com orçamento em até 2 horas." },
    ],
  },

  "desperdicio-vergalhao-obra-como-reduzir": {
    answerCapsule: "Obras residenciais sem gestão de armação desperdiçam de 8% a 15% do vergalhão comprado — numa casa de 150 m², isso equivale a 500 kg a 900 kg de aço jogado fora.",
    faqItems: [
      { q: "Quais as principais causas de desperdício de vergalhão?", a: "Corte manual sem otimização, erros de medição, falta de projeto de armação detalhado, retrabalho por alteração de projeto e oxidação por armazenamento inadequado." },
      { q: "Como reduzir o desperdício do corte manual?", a: "Usando corte e dobra industrial com software de otimização, que reduz a perda de 8-15% para menos de 3%." },
      { q: "Como armazenar vergalhão para evitar perda por oxidação?", a: "Em local coberto, sobre cavaletes, longe de umidade e produtos químicos." },
      { q: "A BR Aço otimiza o encaixe das peças?", a: "Sim, a planilha de ferro é processada por software que otimiza automaticamente o corte nas barras de 12m, minimizando as sobras." },
    ],
  },

  "como-funciona-corte-dobra-industrial": {
    answerCapsule: "O corte e dobra industrial transforma a planilha de ferro em peças prontas em 6 etapas: recebimento do projeto, programação do software, corte CNC (±5mm), dobra, identificação e entrega em até 48h.",
    faqItems: [
      { q: "Quais as etapas do corte e dobra industrial?", a: "Recebimento da planilha de ferro, programação do software de otimização, corte por tesoura CNC, dobramento CNC nos ângulos do projeto, identificação por elemento e entrega." },
      { q: "Qual a tolerância de corte da máquina CNC?", a: "±5 mm, conforme a ABNT NBR 7480, para bitolas até 32 mm." },
      { q: "Como as peças chegam identificadas na obra?", a: "Marcadas por elemento (P1, V3, L2...), bitola e quantidade, amarradas em feixes por etapa estrutural." },
      { q: "Qual o prazo da BR Aço em Goiás?", a: "Até 48h em Goiânia e região, com orçamento em até 2 horas após o envio da planilha de ferro." },
    ],
  },

  "como-enviar-projeto-corte-dobra": {
    answerCapsule: "Para contratar corte e dobra, basta enviar a planilha de ferro (referência da peça, diâmetro, comprimento e dobras) em PDF, Excel, DWG/DXF ou até foto legível, pelo WhatsApp.",
    faqItems: [
      { q: "Quais dados a planilha de ferro precisa ter?", a: "Referência da peça, diâmetro, comprimento total, número de dobras e quantidade — o elemento estrutural é recomendado, mas não obrigatório." },
      { q: "Quais formatos de arquivo são aceitos?", a: "PDF, Excel, DWG/DXF, foto legível da prancha impressa ou envio direto pelo WhatsApp." },
      { q: "E se eu não tiver a planilha pronta, só o projeto estrutural?", a: "A equipe técnica pode extrair as peças a partir das pranchas de armação; para obras simples, croquis com medidas do mestre de obras também são aceitos." },
      { q: "Quanto tempo leva do envio ao orçamento?", a: "Até 2 horas em dias úteis; a entrega ocorre em até 48h em Goiânia e região metropolitana." },
    ],
  },

  "precisao-corte-dobra-industrial-tolerancias": {
    answerCapsule: "A NBR 7480 exige tolerância de ±5 mm no corte de barras até 3 m (até ±15 mm acima de 6 m) — no corte manual em obra, erros de 2 a 5 cm são comuns e comprometem a ancoragem.",
    faqItems: [
      { q: "Qual a tolerância de corte exigida pela norma?", a: "±5 mm até 3 m de comprimento, ±10 mm de 3 a 6 m, e ±15 mm acima de 6 m, conforme a ABNT NBR 7480." },
      { q: "Um erro de 5 cm no corte é grave?", a: "Pode ser — numa barra φ16mm CA-50 com ancoragem mínima de 64 cm, um erro de 5 cm reduz a ancoragem em 7,8%, o que pode torná-la insuficiente." },
      { q: "Qual a tolerância de ângulo nas dobras?", a: "±2° em relação ao ângulo especificado, e ±5 mm na posição da dobra ao longo da barra." },
      { q: "O que fazer se a peça chegar fora da tolerância?", a: "Medir com trena, registrar a diferença, não montar sem autorização do engenheiro e solicitar substituição ao fornecedor." },
    ],
  },

  "como-especificar-corte-e-dobra-projeto": {
    answerCapsule: "Para especificar corte e dobra no projeto, o engenheiro define elemento, posição, material (CA-50/CA-60), diâmetro, comprimento desenvolvido, quantidade e forma de dobramento na planilha de ferro.",
    faqItems: [
      { q: "Quais campos a planilha de ferro deve ter?", a: "Elemento, posição, material (CA-50 ou CA-60), diâmetro, comprimento total, quantidade e forma e raio de dobramento." },
      { q: "Como calcular o comprimento desenvolvido de um gancho de 90°?", a: "Somar 8×φ ao comprimento reto da barra; para gancho de 180°, somar 4,5×φ." },
      { q: "Uma planilha de ferro incompleta gera que problema?", a: "Peças erradas, retrabalho, atraso na entrega e custo adicional — a qualidade do corte e dobra depende diretamente da informação fornecida." },
      { q: "Quem deve preparar a planilha de ferro?", a: "O engenheiro calculista ou o responsável pela obra, extraindo cada barra dos detalhes de armação do projeto estrutural." },
    ],
  },

  "terceirizar-armacao-de-ferro-como-funciona": {
    answerCapsule: "Terceirizar a armação de ferro não significa perder controle: você envia a planilha de ferro ou o projeto estrutural e recebe peças cortadas com tolerância de ±2mm, identificadas por etapa e com relatório de produção.",
    faqItems: [
      { q: "Posso terceirizar só parte da armação?", a: "Sim, é comum terceirizar os estribos (mais repetitivos) e cortar peças simples no canteiro — a BR Aço atende qualquer volume, sem mínimo de pedido." },
      { q: "Como conferir a entrega do corte e dobra?", a: "Conferência rápida (5 min): checar os feixes identificados e pesar 3 peças aleatórias comparando com o relatório; conferência completa: contar peças, medir com trena (±5mm) e checar ângulos de dobramento." },
      { q: "E se a peça vier errada?", a: "Fotografar, registrar na nota de entrega e acionar o fornecedor — não-conformidades confirmadas são refeitas sem custo." },
      { q: "Posso pedir entrega parcelada?", a: "Sim, é comum em obras em andamento, conforme o cronograma, reduzindo o estoque no canteiro e o risco de roubo de material." },
    ],
  },

  "atraso-obra-falta-armador-como-resolver": {
    answerCapsule: "Obra parada por falta de armador pode custar de R$3.500 a R$7.000 por semana em mão de obra parada e equipamentos; o corte e dobra industrial resolve o gargalo em 1 a 2 dias úteis, sem precisar de armador especializado.",
    faqItems: [
      { q: "Quanto custa uma semana de obra parada esperando armador?", a: "De R$3.500 a R$7.000 em mão de obra parada, aluguel de equipamentos e custo de oportunidade do atraso." },
      { q: "Quanto tempo leva para desbloquear a obra com corte e dobra?", a: "1 a 2 dias úteis para volumes até 5 toneladas, após aprovação do orçamento — entregue em até 2 horas." },
      { q: "Preciso de armador especializado para montar as peças prontas?", a: "Não necessariamente — um ajudante orientado, um encarregado de obra ou o próprio pedreiro consegue montar, já que o corte e a interpretação do projeto já foram feitos na fábrica." },
      { q: "Há casos reais de obras desbloqueadas rápido?", a: "Sim: residência de 180 m² em Goiânia entregue em 36h, laje de 82 m² em Aparecida de Goiânia entregue no dia seguinte, e fundação de 600 m² em Anápolis em 2 dias úteis." },
    ],
  },

  "construcao-civil-sem-armador-alternativas-2026": {
    answerCapsule: "Em 2026, 5 alternativas permitem construir sem depender de armador especializado: corte e dobra industrial, armadura pré-fabricada, pré-moldados, forma com armadura integrada (laje treliçada) e capacitação rápida do peão.",
    faqItems: [
      { q: "Qual a alternativa mais eficiente para substituir o armador?", a: "O corte e dobra industrial: entrega peças cortadas, dobradas e identificadas em 1 a 2 dias úteis para até 10 toneladas, com montagem por qualquer trabalhador orientado." },
      { q: "A laje treliçada dispensa armador?", a: "Sim, para a armação inferior — o aço já vem embutido na vigota; só a capa recebe malha soldada, sem necessidade de armador especializado." },
      { q: "Pré-moldados são mais rápidos que corte e dobra?", a: "Sim, mas com menos flexibilidade para projetos não-padronizados e custo inicial e logística de transporte maiores." },
      { q: "Quanto tempo de treinamento um pedreiro precisa para montar peças pré-cortadas?", a: "Menos de um dia, desde que as peças estejam identificadas por elemento e com supervisão do engenheiro nos primeiros elementos." },
    ],
  },

  "vergalhao-barra-reta-desperdicio-custo-real": {
    answerCapsule: "Vergalhão em barra reta parece mais barato por kg, mas 5 custos ocultos — desperdício de 5-8%, mão de obra de corte, ferramentas, retrabalho e atraso — quase igualam o custo total ao do corte e dobra industrial.",
    faqItems: [
      { q: "Quais são os 5 custos ocultos da barra reta?", a: "Desperdício de material (5-8%), mão de obra de corte (R$720 a R$1.500 para 5t), ferramentas e consumíveis (R$550 a R$1.200), risco de retrabalho (1-3% do custo do aço) e atraso de cronograma." },
      { q: "Qual a conta real para 5.000 kg de vergalhão?", a: "Barra reta + corte no canteiro: R$36.650 no total. Corte e dobra BR Aço: R$36.250 no total, já incluindo o serviço." },
      { q: "Quando a barra reta ainda compensa?", a: "Em peças com grandes comprimentos lineares sem corte, como pilares de altura padrão sem variação ou vergalhões em barra inteira para fundações longas." },
      { q: "Por que não comparar só o preço por kg?", a: "Porque o preço por kg da barra reta não inclui desperdício, mão de obra de corte, ferramentas e risco de erro — custos que só aparecem no fechamento da obra." },
    ],
  },

  "desperdicio-aco-corte-manual-canteiro": {
    answerCapsule: "O corte manual de vergalhão no canteiro desperdiça de 6% a 9% do material, contra 0,5% a 1,5% no corte CNC industrial — numa obra de 5.000 kg, isso equivale a R$1.950 jogados fora.",
    faqItems: [
      { q: "De onde vem o desperdício do corte manual?", a: "Sobras de barras de 12m que não se encaixam em outra peça, erros de medida e dobras fora do padrão que obrigam a refazer a peça." },
      { q: "Quanto se perde numa obra de 150 m²?", a: "Entre R$780 e R$1.560 de desperdício evitável, considerando um consumo típico de 2.000 a 4.000 kg de aço estrutural." },
      { q: "O que acontece com as sobras de vergalhão?", a: "Geralmente são vendidas como ferro-velho a R$0,50-1,20/kg — uma perda líquida de R$5 a R$6 por kg comprado a R$6,50/kg." },
      { q: "Como o corte e dobra industrial elimina esse desperdício?", a: "Com otimização de layout de corte por software, reduzindo a perda para menos de 1%, contra 6% do corte manual." },
    ],
  },

  "corte-manual-vs-corte-dobra-industrial-comparativo-custos": {
    answerCapsule: "Numa laje de 100 m² (1.200 kg de aço), o corte manual custa R$103,68/m² em 5 a 7 dias, contra R$97,00/m² em 2 a 3 dias no corte e dobra industrial — 7% mais barato e até 60% mais rápido.",
    faqItems: [
      { q: "Qual a diferença de custo por m² entre corte manual e industrial?", a: "R$103,68/m² no corte manual contra R$97,00/m² no corte e dobra industrial — economia de R$6,68/m², cerca de 7%." },
      { q: "Qual a diferença de prazo?", a: "5 a 7 dias no corte manual contra 2 a 3 dias no corte e dobra industrial — de 50% a 60% mais rápido." },
      { q: "Quando o corte manual pode ser mais barato?", a: "Em obras muito pequenas (menos de 300 kg de aço), peças todas do mesmo comprimento, ou com armador já disponível sem custo adicional." },
      { q: "Qual a precisão dimensional de cada método?", a: "±5 a 10mm no corte manual contra ±1 a 2mm no corte e dobra industrial — cerca de 5 vezes mais preciso." },
    ],
  },

  "erro-medida-corte-vergalhao-impacto-obra": {
    answerCapsule: "Um erro de 1 cm no corte do vergalhão pode deixar a peça em não-conformidade com a NBR 6118 — o comprimento mínimo de ancoragem varia de 24 cm (φ8mm) a 60 cm (φ20mm), e faltar esse valor inutiliza a peça.",
    faqItems: [
      { q: "Qual o comprimento mínimo de ancoragem por diâmetro?", a: "24 cm para φ8mm, 30 cm para φ10mm, 37,5 cm para φ12,5mm, 48 cm para φ16mm e 60 cm para φ20mm, conforme referência da NBR 6118." },
      { q: "Com que frequência o corte manual erra a medida?", a: "De 15% a 20% das peças cortadas manualmente têm desvio maior que 5mm, e de 3% a 5% têm desvio maior que 20mm — o suficiente para inutilizar a peça." },
      { q: "O que acontece com um estribo cortado curto?", a: "O gancho não fecha corretamente, a peça fica sem efetividade estrutural e precisa ser refeita." },
      { q: "Qual a tolerância do corte CNC industrial?", a: "±1 mm, eliminando o erro de medida que custaria material e retrabalho de mão de obra no corte manual." },
    ],
  },

  "tela-soldada-vs-vergalhao-laje": {
    answerCapsule: "Tela soldada e vergalhão têm custo por kg parecido para armar lajes, mas a tela soldada economiza tempo de mão de obra na montagem por já vir pronta em painéis.",
    faqItems: [
      { q: "Tela soldada é mais barata que vergalhão?", a: "O custo por kg é parecido; a diferença real está na mão de obra — a tela soldada monta mais rápido por já vir em painéis prontos." },
      { q: "Quando vale mais a pena usar vergalhão solto em vez de tela?", a: "Em armações com geometria irregular ou que exigem dobras e emendas específicas do projeto, onde o vergalhão cortado sob medida se ajusta melhor." },
      { q: "Posso combinar tela soldada e vergalhão na mesma laje?", a: "Sim, é comum usar tela para a armadura de distribuição e vergalhão cortado e dobrado para a armadura principal calculada pelo projeto." },
      { q: "A BR Aço fornece os dois produtos?", a: "Sim, telas soldadas e vergalhão CA-50/CA-60 cortado e dobrado sob medida, com entrega em Goiânia e região." },
    ],
  },

  "vergalhao-nervurado-caracteristicas-vantagens": {
    answerCapsule: "As nervuras do vergalhão CA-50/CA-60 aumentam a aderência ao concreto, permitindo dispensar ganchos em barras retas — a NBR 7480 exige índice de conformação superficial mínimo de 0,056 a 0,075.",
    faqItems: [
      { q: "Por que o vergalhão nervurado é melhor que o liso?", a: "As nervuras aumentam a aderência mecânica ao concreto, permitindo menor comprimento de ancoragem e dispensando ganchos em barras retas." },
      { q: "Todo vergalhão CA-50 e CA-60 é nervurado?", a: "Sim, a NBR 7480 exige superfície nervurada para essas classes, com índice de conformação mínimo de 0,056 (φ ≤ 6,3mm) a 0,075 (φ > 10mm)." },
      { q: "O vergalhão liso ainda é usado?", a: "Sim, principalmente em estribos e esperas (CA-25), onde a aderência exigida é menor e o gancho é obrigatório." },
      { q: "A BR Aço vende vergalhão nervurado certificado?", a: "Sim, exclusivamente CA-50 e CA-60 nervurados com laudo NBR 7480, entrega em até 48h em Goiânia e região." },
    ],
  },

  "aco-ca50-vs-ca60-diferencas-tecnicas": {
    answerCapsule: "CA-50 (fyk 500 MPa, φ6,3-40mm, soldável) é usado em barras longitudinais de vigas e pilares; CA-60 (fyk 600 MPa, φ1,6-10mm, pouco soldável) é usado em estribos finos e telas soldadas.",
    faqItems: [
      { q: "Qual a principal diferença entre CA-50 e CA-60?", a: "A resistência de escoamento: 500 MPa no CA-50 contra 600 MPa no CA-60, além do CA-60 ter menor ductilidade e diâmetros menores (até 10mm)." },
      { q: "CA-60 pode ser soldado em obra?", a: "Em geral não — fios CA-60 não são soldáveis em campo; a soldagem de telas soldadas é feita em fábrica." },
      { q: "Qual usar em barras longitudinais de vigas e pilares?", a: "CA-50, para diâmetros a partir de φ10mm; CA-60 é reservado a estribos finos (φ5,0 e φ6,3mm) e armadura de distribuição." },
      { q: "CA-60 é mais barato que CA-50?", a: "Ligeiramente, por kg, mas a diferença de custo total é marginal já que o CA-60 é usado em peças de menor peso total na obra." },
    ],
  },

  "arame-recozido-vs-galvanizado-qual-usar": {
    answerCapsule: "Arame recozido serve para amarração de ferragem embutida em concreto (maleável, sem proteção); arame galvanizado tem camada de zinco (NBR 6323) e resiste à corrosão para uso externo permanente.",
    faqItems: [
      { q: "Qual a diferença entre arame recozido e galvanizado?", a: "O recozido passa por aquecimento controlado para ficar maleável e sem revestimento, usado para amarrar ferragem embutida no concreto. O galvanizado tem uma camada de zinco (NBR 6323) que resiste à corrosão, indicado para uso externo exposto ao tempo." },
      { q: "Arame galvanizado é mais forte que o recozido?", a: "Mecanicamente é mais rígido porque normalmente não passa pelo recozimento intenso do arame recozido — mas isso reflete o objetivo de cada um, não uma versão 'fraca' e 'forte' do mesmo produto: o recozido é feito para ser maleável, o galvanizado para resistir à corrosão." },
      { q: "Arame galvanizado enferruja?", a: "Enferruja muito mais devagar que um arame sem proteção, porque a camada de zinco protege o aço por barreira física e por proteção catódica — mas não é uma proteção eterna, depende da espessura do revestimento e da exposição ambiental." },
      { q: "Posso usar arame recozido do lado de fora?", a: "Não é recomendado para uso permanente exposto ao tempo, pois sem revestimento ele oxida com a umidade e perde resistência mecânica ao longo do tempo." },
      { q: "Qual bitola de arame recozido é mais usada para amarrar ferragem?", a: "As bitolas 18 (1,25 mm) e 16 (1,65 mm) são as mais comuns em obra, vendidas em rolo ou por quilo conforme o volume de amarração necessário." },
    ],
  },

  "vergalhao-luziania-go-preco-entrega": {
    answerCapsule: "A BR Aço entrega vergalhão CA-50 em Luziânia GO via BR-040 com frota própria, atendendo desde residências populares até pequenos condomínios, com a mesma norma NBR 7480 de Goiânia.",
    faqItems: [
      { q: "A BR Aço entrega vergalhão em Luziânia?", a: "Sim. A BR Aço entrega vergalhão CA-50 em Luziânia GO com frota própria, saindo da fábrica em Aparecida de Goiânia pela BR-040, atendendo desde autoconstrução até pequenas construtoras." },
      { q: "Qual o prazo de entrega de vergalhão em Luziânia?", a: "O prazo varia conforme o pedido: vergalhão em estoque costuma ser entregue em poucos dias, enquanto o corte e dobra sob medida leva até 7 dias úteis de fabricação antes da entrega. O tempo de rota exato deve ser confirmado no momento do pedido." },
      { q: "O vergalhão vendido em Luziânia tem a mesma qualidade do de Goiânia?", a: "Sim. Todo o vergalhão CA-50 da BR Aço segue a ABNT NBR 7480, independentemente da distância da obra até a fábrica — não há variação de qualidade por localização." },
      { q: "Quais bitolas de vergalhão estão disponíveis para Luziânia?", a: "As bitolas mais usadas em obras residenciais e pequenos condomínios em Luziânia vão de 6.3 mm a 20 mm, todas em CA-50 certificado." },
    ],
  },

  "vergalhao-aguas-lindas-de-goias-ca-50-autoconstrucao": {
    answerCapsule: "Vergalhão CA-50 para laje e fundação em Águas Lindas de Goiás, entregue via BR-070 com certificação ABNT NBR 7480 — voltado ao construtor autônomo que domina a cidade.",
    faqItems: [
      { q: "Como comprar vergalhão em Águas Lindas de Goiás sem engenheiro na obra?", a: "É possível comprar seguindo tabelas de referência de bitola por tipo de estrutura, mas o ideal é exigir sempre a nota fiscal com a especificação CA-50 e a bitola, documento que pode ser exigido depois em financiamento ou regularização." },
      { q: "Qual vergalhão usar em fundação de casa em Águas Lindas de Goiás?", a: "Fundações residenciais costumam usar bitolas de 10 mm a 16 mm em CA-50, mas a especificação exata depende do projeto estrutural ou de orientação técnica, já que varia com o tipo de solo e a carga da edificação." },
      { q: "A BR Aço entrega em Águas Lindas de Goiás?", a: "Sim, a partir da fábrica em Aparecida de Goiânia, com rota pela BR-070. O prazo exato de entrega deve ser confirmado no momento do pedido." },
      { q: "Preciso de projeto estrutural para comprar vergalhão?", a: "Não é obrigatório para a compra, mas é altamente recomendado — mesmo em autoconstrução, o dimensionamento correto da bitola evita risco estrutural e retrabalho." },
    ],
  },

  "corte-e-dobra-valparaiso-de-goias-condominio": {
    answerCapsule: "Corte e dobra industrial de vergalhão CA-50 para condomínios verticais e horizontais em Valparaíso de Goiás, com peças identificadas por posição e entrega programada por etapa.",
    faqItems: [
      { q: "O corte e dobra vale a pena para condomínio em Valparaíso de Goiás?", a: "Sim, principalmente por causa da repetição de pavimentos e unidades — o corte e dobra reaproveita a mesma especificação de corte por posição, reduzindo tempo de armação e desperdício de material." },
      { q: "Como funciona a entrega de corte e dobra por etapa de condomínio?", a: "O material é fabricado e entregue conforme o avanço da obra — bloco por bloco no vertical, fase por fase no horizontal — evitando acúmulo de material parado no canteiro." },
      { q: "Qual o prazo do corte e dobra para condomínio?", a: "O prazo de fabricação costuma ser de até 7 dias úteis após a aprovação do projeto estrutural, com entrega programada conforme o cronograma da obra." },
      { q: "A BR Aço atende condomínios na fronteira com o DF?", a: "Sim, a BR Aço atende Valparaíso de Goiás e a região de fronteira com o Distrito Federal a partir da fábrica em Aparecida de Goiânia." },
    ],
  },

  "vergalhao-trindade-go-entrega-rapida": {
    answerCapsule: "Trindade fica a cerca de 25 km da fábrica da BR Aço via BR-060, com entrega em torno de 30-35 minutos — a mesma janela de Goiânia — para condomínios horizontais e residências.",
    faqItems: [
      { q: "Quanto tempo leva para entregar vergalhão em Trindade?", a: "Em condição normal de tráfego, o trecho entre a fábrica em Aparecida de Goiânia e Trindade costuma levar cerca de 30 a 35 minutos pela BR-060, mas o tempo exato porta a porta pode variar conforme o bairro de destino." },
      { q: "Trindade tem o mesmo prazo de entrega de Goiânia?", a: "Sim, por estar a apenas 25 km da fábrica, Trindade está praticamente na mesma janela de entrega rápida que Goiânia, diferente de cidades mais distantes da Região Metropolitana." },
      { q: "Vale a pena comprar aço em pedidos menores em Trindade?", a: "Sim. Como o prazo de entrega é curto, dá para trabalhar com pedidos menores e mais frequentes (quase just-in-time), reduzindo a necessidade de estocar grande volume de material no canteiro." },
      { q: "Quais bitolas de vergalhão a BR Aço tem em estoque para Trindade?", a: "As bitolas mais comuns em estoque são 6.3 mm, 8.0 mm, 10.0 mm, 12.5 mm e 16.0 mm, todas em CA-50 certificado pela ABNT NBR 7480." },
    ],
  },

  "aco-aparecida-de-goiania-direto-da-fabrica": {
    answerCapsule: "A fábrica da BR Aço fica no Polo Industrial de Aparecida de Goiânia — obras na própria cidade recebem vergalhão e corte e dobra no menor prazo de entrega da região, sem intermediário.",
    faqItems: [
      { q: "Onde fica a fábrica da BR Aço?", a: "A fábrica da BR Aço fica no Polo Industrial de Aparecida de Goiânia, o que garante o menor prazo de entrega para obras dentro da própria cidade em toda a Região Metropolitana de Goiânia." },
      { q: "Comprar direto da fábrica é mais barato que em revenda?", a: "Comprar direto da fábrica elimina a margem de intermediação de distribuidores locais, já que o material sai do mesmo lugar onde foi fabricado direto para a obra." },
      { q: "Qual o prazo de entrega dentro de Aparecida de Goiânia?", a: "Vergalhão em estoque (bitolas padrão) costuma ser entregue no mesmo dia ou no dia seguinte; o corte e dobra sob medida leva até 7 dias úteis após aprovação do projeto." },
      { q: "Preciso de nota fiscal com especificação do aço mesmo comprando na cidade da fábrica?", a: "Sim, é recomendável em qualquer localidade — a nota fiscal com a especificação CA-50 e a bitola pode ser exigida em financiamento, vistoria ou revenda do imóvel." },
    ],
  },

  "vergalhao-corte-dobra-senador-canedo-polo-jk": {
    answerCapsule: "O Polo JK e os novos loteamentos fazem de Senador Canedo um dos municípios que mais crescem na Região Metropolitana de Goiânia, com demanda por vergalhão CA-50 e corte e dobra.",
    faqItems: [
      { q: "A BR Aço atende o Polo JK em Senador Canedo?", a: "Sim, a BR Aço atende tanto galpões industriais do Polo JK quanto loteamentos residenciais em Senador Canedo, a partir da fábrica vizinha em Aparecida de Goiânia." },
      { q: "Qual bitola de vergalhão usar em galpão industrial?", a: "Galpões costumam usar bitolas de 12.5 mm a 20 mm, dependendo do vão e da carga do projeto — a especificação exata deve seguir o projeto estrutural." },
      { q: "Corte e dobra vale a pena para loteamento residencial novo?", a: "Sim, principalmente quando as casas do loteamento se repetem — o corte e dobra padroniza a armação por tipologia, reduzindo mão de obra e desperdício em cada unidade." },
      { q: "Senador Canedo tem prazo de entrega rápido?", a: "Sim, por fazer divisa direta com Aparecida de Goiânia (onde fica a fábrica), Senador Canedo está entre os municípios de menor prazo de entrega da Região Metropolitana." },
    ],
  },

  "corte-e-dobra-vergalhao-anapolis-daia": {
    answerCapsule: "Anápolis concentra o maior polo industrial de Goiás no DAIA e no Polo Farmacêutico — galpões de grande porte que exigem vergalhão CA-50 em volume, com corte e dobra programado por etapa.",
    faqItems: [
      { q: "A BR Aço atende galpões no DAIA?", a: "Sim, a BR Aço atende obras industriais no Distrito Agroindustrial de Anápolis (DAIA) e no Polo Farmacêutico, com vergalhão CA-50 em volume e corte e dobra sob medida." },
      { q: "Por que corte e dobra é importante em galpão industrial?", a: "Galpões usam bitolas grossas (16 mm a 25 mm) em grande volume — dobrar isso manualmente no canteiro é lento e arriscado; o corte e dobra industrial entrega as peças já prontas e identificadas por posição." },
      { q: "Como funciona a entrega para obras no DAIA?", a: "A entrega costuma ser programada por etapa da obra (fundação, pilares, estrutura complementar), alinhada ao cronograma da construtora, evitando acúmulo de material no canteiro." },
      { q: "Quais bitolas são mais usadas em galpão industrial?", a: "As bitolas mais comuns em galpões vão de 10 mm a 25 mm, dependendo da função da peça (armadura secundária, viga de amarração, pilar ou fundação)." },
    ],
  },

  "vergalhao-galpao-agroindustrial-rio-verde": {
    answerCapsule: "Silos e galpões agroindustriais em Rio Verde exigem vergalhão CA-50 em bitolas maiores e grandes volumes, com o mesmo laudo ABNT NBR 7480 usado nas obras urbanas de Goiânia.",
    faqItems: [
      { q: "A BR Aço entrega vergalhão em Rio Verde?", a: "Sim, a BR Aço entrega vergalhão CA-50 em Rio Verde para obras agroindustriais como silos, frigoríficos e galpões, a partir da fábrica em Aparecida de Goiânia." },
      { q: "Por que obras agroindustriais usam bitolas maiores?", a: "Silos e galpões agroindustriais têm cargas concentradas muito superiores às de obras residenciais — o peso armazenado e os vãos livres exigem pilares e fundações dimensionados com bitolas de 16 mm a 25 mm com mais frequência." },
      { q: "Qual o prazo de entrega para Rio Verde?", a: "Por ser uma distância maior, recomenda-se fechar o pedido com antecedência mínima de 48 horas antes da data necessária no canteiro, para a fábrica programar produção e transporte." },
      { q: "O vergalhão para obra agroindustrial tem laudo técnico?", a: "Sim, todo vergalhão CA-50 fornecido segue a ABNT NBR 7480 com laudo técnico, item comum em contratos de obra agroindustrial financiada por cooperativa ou banco de fomento." },
    ],
  },

  "vergalhao-aguas-claras-df-condominios-verticais": {
    answerCapsule: "Águas Claras concentra o maior volume de construção vertical do DF — torres que consomem grande volume de vergalhão CA-50 e coluna pronta por pavimento, com entrega programada por etapa.",
    faqItems: [
      { q: "O que é coluna pronta por pavimento?", a: "É a armadura do pilar fabricada e entregue já montada, no comprimento de um pé-direito, pronta para ser posicionada e concretada — reduzindo o tempo de armação manual em obras verticais." },
      { q: "A BR Aço atende torres residenciais em Águas Claras?", a: "Sim, a BR Aço atende construtoras e incorporadoras com obras verticais em Águas Claras, fornecendo vergalhão CA-50 e coluna pronta por pavimento com entrega programada conforme o cronograma da torre." },
      { q: "Como é feita a entrega de aço para uma torre em construção?", a: "Diferente de uma obra horizontal, a entrega costuma ser programada por pavimento, alinhada ao avanço da concretagem, evitando acúmulo de material no canteiro limitado da obra vertical." },
      { q: "Quais bitolas são usadas em prédios altos?", a: "Os pavimentos superiores costumam usar bitolas menores (10 mm a 16 mm) e os pavimentos inferiores, que acumulam mais carga, usam bitolas maiores (20 mm a 25 mm)." },
    ],
  },

  "corte-e-dobra-vergalhao-taguatinga-df": {
    answerCapsule: "Taguatinga concentra um dos maiores volumes de obras residenciais e comerciais do DF — a BR Aço atende com corte e dobra industrial, entregando peças identificadas por posição no canteiro.",
    faqItems: [
      { q: "A BR Aço atende obras comerciais em Taguatinga?", a: "Sim, a BR Aço atende tanto obras residenciais quanto comerciais em Taguatinga com corte e dobra de vergalhão CA-50, entregando peças já cortadas, dobradas e identificadas por posição." },
      { q: "O que significa peça identificada por posição?", a: "É a barra de aço já cortada e dobrada conforme o detalhamento do projeto estrutural, etiquetada com a mesma nomenclatura do projeto (N1, N2, N3...), para a equipe de armação só posicionar sem precisar cortar." },
      { q: "Corte e dobra reduz o desperdício de material?", a: "Sim, o corte manual no canteiro costuma gerar de 3% a 8% de desperdício de aço, enquanto o corte e dobra industrial com máquinas CNC reduz esse desperdício a praticamente zero." },
      { q: "Quais bitolas a BR Aço trabalha para corte e dobra?", a: "A BR Aço trabalha com bitolas de 6.3 mm a 25 mm em CA-50, cobrindo desde reforma residencial até obra comercial de maior porte." },
    ],
  },

  "vergalhao-ceilandia-df-entrega": {
    answerCapsule: "Ceilândia é a Região Administrativa mais populosa do DF, com demanda constante de vergalhão CA-50 para residências e pequenos condomínios, entregue com a certificação ABNT usada em Goiânia.",
    faqItems: [
      { q: "A BR Aço entrega vergalhão em Ceilândia?", a: "Sim, a BR Aço entrega vergalhão CA-50 certificado em Ceilândia a partir da fábrica em Aparecida de Goiânia, para obras residenciais, reformas, ampliações e pequenos condomínios." },
      { q: "Que bitola usar para construir um segundo pavimento (puxadinho)?", a: "Depende do dimensionamento do projeto, mas ampliações costumam usar bitolas de 8 mm a 12.5 mm — é recomendável ter orientação técnica, já que o peso adicional recai sobre uma estrutura já existente." },
      { q: "Por que a norma técnica importa em obra de reforma?", a: "Porque o vergalhão CA-50 certificado pela ABNT NBR 7480 garante a resistência ao escoamento mínima necessária para suportar o peso adicional de uma ampliação sobre uma estrutura já construída." },
      { q: "Qual o prazo de entrega em Ceilândia?", a: "O prazo varia conforme disponibilidade de frota para o Distrito Federal — recomenda-se fazer o pedido assim que a bitola e a quantidade estiverem definidas pelo projeto." },
    ],
  },

  "o-que-e-coluna-pronta-armadura-pilar": {
    answerCapsule: "Coluna pronta é a armadura de pilar montada em fábrica — barras longitudinais e estribos já dobrados e posicionados no projeto — pronta para receber a fôrma e o concreto na obra.",
    faqItems: [
      { q: "O que é coluna pronta de vergalhão?", a: "É a armadura de um pilar de concreto armado — barras longitudinais e estribos — montada em fábrica na posição exata definida pelo projeto estrutural, entregue pronta para receber a fôrma e a concretagem, sem necessidade de corte e amarração no canteiro." },
      { q: "Coluna pronta serve para qualquer tipo de pilar?", a: "Serve bem para pilares de seção constante e armadura pré-dimensionada em projeto, que é a maioria dos pilares residenciais e comerciais. Pilares com geometria muito irregular ou reforços especiais geralmente ainda exigem ajuste manual complementar." },
      { q: "Coluna pronta atende à NBR 6118?", a: "Sim — a fabricação segue os parâmetros de cobrimento nominal (Tabela 7.2) e comprimento de ancoragem (seção 9.4) da NBR 6118:2014, aplicados já na montagem industrial em vez de depender de checagem manual em obra." },
      { q: "Qual a diferença entre coluna pronta e armadura convencional?", a: "A armadura convencional é cortada, dobrada e amarrada no canteiro por um armador. A coluna pronta chega já montada nessa configuração, faltando apenas posicionar na fôrma — o trabalho de corte, dobra e amarração já foi feito industrialmente." },
      { q: "Coluna pronta funciona para obra pequena?", a: "Sim, desde que o volume de pilares justifique o transporte da peça montada; para poucos pilares isolados, o corte e dobra avulso das barras pode ser mais indicado que a peça inteira pré-montada." },
      { q: "Como pedir coluna pronta?", a: "É necessário enviar o projeto estrutural com a armadura de pilares detalhada (posição, diâmetro, comprimento e espaçamento de estribo) para a fábrica montar a peça na especificação exata." },
    ],
  },

  "vergalhao-samambaia-df-residencial": {
    answerCapsule: "Samambaia é uma das Regiões Administrativas de maior crescimento residencial do DF — a BR Aço fornece vergalhão CA-50 e corte e dobra com entrega programada para obras de pequeno e médio porte.",
    faqItems: [
      { q: "A BR Aço atende Samambaia?", a: "Sim, a BR Aço fornece vergalhão CA-50 e serviço de corte e dobra para obras residenciais, ampliações e pequenos condomínios em Samambaia, a partir da fábrica em Aparecida de Goiânia." },
      { q: "Devo comprar vergalhão avulso ou corte e dobra em Samambaia?", a: "Vergalhão avulso é melhor para obra pequena com armador próprio; corte e dobra é mais indicado para obras de médio porte com prazo apertado, já que reduz mão de obra e desperdício de material." },
      { q: "Quais bitolas estão disponíveis para Samambaia?", a: "A BR Aço fornece bitolas de 6.3 mm a 20 mm em CA-50 para obras residenciais e de pequeno/médio porte na região." },
      { q: "Como funciona a entrega para condomínios em Samambaia?", a: "Para obras de médio porte, como condomínios, a entrega costuma ser programada por etapa (fundação, estrutura, fechamento), evitando estoque de material parado no canteiro." },
    ],
  },

  "prazo-de-entrega-vergalhao-corte-dobra-goias-df": {
    answerCapsule: "A BR Aço entrega vergalhão, treliça e tela prontos em até 48h nas regiões atendidas de Goiás e DF; corte e dobra sob medida tem prazo a partir de 7 dias úteis, contado da aprovação do orçamento.",
    faqItems: [
      { q: "Qual o prazo de entrega de vergalhão avulso?", a: "Vergalhão, treliça, tela e malha de estoque são entregues em até 48 horas nas regiões atendidas de Goiás e Distrito Federal, a partir da fábrica em Aparecida de Goiânia." },
      { q: "Qual o prazo do serviço de corte e dobra?", a: "Corte e dobra sob medida tem prazo a partir de 7 dias úteis, contado da aprovação do orçamento — o prazo exato depende da complexidade do projeto e do volume de peças." },
      { q: "O prazo muda conforme a distância da obra?", a: "Para produto pronto, sim — a distância da fábrica e a rota de entrega influenciam o prazo dentro da faixa de até 48h. Para corte e dobra, o prazo é definido principalmente pela fila de produção, não pela distância." },
      { q: "A BR Aço atende o Distrito Federal no mesmo prazo?", a: "Sim, as regiões atendidas do DF recebem produto pronto em até 48h, dentro da mesma faixa aplicada às cidades goianas mais distantes da fábrica." },
    ],
  },

  "corte-e-dobra-compensa-vs-comprar-vergalhao-dobrado": {
    answerCapsule: "Corte e dobra industrial compensa na maioria das obras de médio/grande porte: elimina o armador especializado, reduz o desperdício de 3-8% para quase zero e acelera o cronograma. Em obras pequenas e pontuais, vergalhão avulso pode ser mais simples.",
    faqItems: [
      { q: "Corte e dobra compensa para qualquer tamanho de obra?", a: "Compensa mais em obras de médio e grande porte com volume de aço recorrente. Em obras muito pequenas e pontuais, o prazo de produção sob medida pode não valer a pena frente à urgência, e vergalhão avulso resolve mais rápido." },
      { q: "Quanto de desperdício o corte e dobra evita?", a: "O corte manual no canteiro costuma gerar de 3% a 8% de perda de material em sobras e pontas. O corte e dobra industrial corta cada peça na medida exata, reduzindo esse desperdício a praticamente zero." },
      { q: "Corte e dobra elimina a necessidade de armador na obra?", a: "Elimina a necessidade de um armador especializado fazer o corte e a dobra manual — a peça chega pronta para montar. A amarração final na fôrma ainda é feita pela equipe da obra, a menos que se contrate o serviço de CDA (Corte, Dobra e Armação)." },
      { q: "Como saber se compensa na minha obra?", a: "Compare o custo da mão de obra de armação que você deixaria de contratar e o desperdício típico do método manual com o prazo de produção do corte e dobra (a partir de 7 dias úteis) frente ao cronograma da sua obra." },
    ],
  },

  "quanto-custa-coluna-pronta-fatores-que-definem-o-preco": {
    answerCapsule: "Coluna pronta não tem preço fixo por unidade — o custo varia com seção transversal, altura do pilar, taxa de armadura do projeto e tipo de amarração. A forma correta de orçar é enviar o projeto estrutural, não buscar um preço médio genérico.",
    faqItems: [
      { q: "Quanto custa uma coluna pronta de aço?", a: "Não existe um preço fixo por unidade — o custo depende da seção transversal do pilar, da bitola das barras, da altura, da taxa de armadura definida em projeto e do tipo de amarração. É preciso enviar o projeto estrutural para cotação real." },
      { q: "Por que colunas de mesma altura têm preços diferentes?", a: "Porque o peso de aço não depende só da altura — a seção transversal do pilar e a taxa de armadura definida pelo engenheiro (kg de aço por m³ de concreto) variam conforme a exigência estrutural de cada projeto." },
      { q: "Como estimar o custo antes de pedir orçamento?", a: "Levante a seção e a altura de cada tipo de pilar, confira a taxa de armadura do projeto estrutural e multiplique para chegar a uma estimativa de peso de aço — depois envie o projeto completo para a cotação real." },
      { q: "Qual a diferença entre coluna com corte e dobra simples e CDA?", a: "No corte e dobra simples, as peças chegam cortadas e dobradas e a amarração final é feita pela equipe da obra. No CDA (Corte, Dobra e Armação), a coluna chega pronta para concretar, já amarrada ou soldada na fábrica." },
    ],
  },

  "preco-medio-vergalhao-ca-50-ca-60-por-kg-goias": {
    answerCapsule: "O preço médio praticado de vergalhão CA-50 cortado sob medida em Goiás variou entre R$ 5,57/kg e R$ 6,49/kg por bitola nos últimos meses; o CA-60 ficou em torno de R$ 6,70/kg. São valores históricos de referência, não uma cotação fixa.",
    faqItems: [
      { q: "Qual o preço médio do vergalhão CA-50 por kg?", a: "O preço médio praticado varia entre R$ 5,57/kg e R$ 6,49/kg dependendo da bitola, com base em vendas reais da BR Aço nos últimos meses. Bitolas médias (12,5mm a 25mm) tendem à faixa mais baixa; bitolas finas (6,3mm) à faixa mais alta." },
      { q: "O preço do vergalhão CA-60 é diferente do CA-50?", a: "Sim, o CA-60 (bitolas finas, usado em treliças e estribos) teve preço médio em torno de R$ 6,70/kg, ligeiramente acima da faixa média do CA-50 cortado." },
      { q: "Corte, Dobra e Armação (CDA) custa mais que corte e dobra simples?", a: "Sim — o CDA inclui a mão de obra de amarração ou solda da peça, o que eleva o preço por kg em relação ao corte e dobra simples. A diferença costuma compensar frente ao custo de contratar um armador na obra." },
      { q: "Esses valores são uma cotação válida?", a: "Não — são médias históricas de vendas reais, usadas como referência inicial. O preço final depende do volume do pedido, da forma de pagamento e da condição de mercado do aço no momento da compra." },
    ],
  },

  "barra-de-transferencia-o-que-e-diferenca-vergalhao": {
    answerCapsule: "Barra de transferência é uma barra de aço lisa (sem nervuras), usada em juntas de piso industrial para transferir carga entre placas de concreto sem impedir a dilatação — diferente do vergalhão nervurado, feito para aderir ao concreto.",
    faqItems: [
      { q: "O que é barra de transferência?", a: "É uma barra de aço lisa usada em juntas de piso industrial e pavimento de concreto, para transferir carga vertical entre placas adjacentes sem impedir o movimento de dilatação e retração." },
      { q: "Qual a diferença entre barra de transferência e vergalhão?", a: "O vergalhão é nervurado, feito para aderir ao concreto na armadura estrutural. A barra de transferência é lisa e parcialmente untada, feita para deslizar dentro do concreto na junta de piso." },
      { q: "Onde a barra de transferência é usada?", a: "Em juntas de piso industrial (galpões, indústrias, armazéns) e pavimentos de concreto que recebem tráfego de empilhadeiras ou cargas pesadas sobre a junta." },
      { q: "A BR Aço fornece barra de transferência?", a: "A BR Aço fornece barras de aço cortadas nas medidas do projeto, incluindo diâmetros usados em juntas de transferência de piso industrial. Envie a especificação pelo WhatsApp." },
    ],
  },

  "checklist-recebimento-aco-obra-nbr-7480-6118": {
    answerCapsule: "Ao receber vergalhão na obra, confira 7 pontos: certificado de qualidade do lote, marcação na barra, bitola, quantidade/peso, integridade física, classe do aço (CA-50/CA-60) e conformidade com o projeto — antes de assinar o canhoto.",
    faqItems: [
      { q: "O que conferir ao receber vergalhão na obra?", a: "Certificado de qualidade do lote, marcação de identificação na barra, bitola conforme pedido, peso total, integridade física, classe do aço (CA-50 ou CA-60) e conformidade com a planilha de ferro do projeto." },
      { q: "O vergalhão precisa vir com certificado de qualidade?", a: "Sim — todo lote deve ter um certificado com a composição química e os ensaios de tração exigidos pela NBR 7480. Sem esse documento não há como comprovar a conformidade depois." },
      { q: "Como identificar a classe do aço na barra?", a: "A NBR 7480 exige marcação em relevo na própria barra, identificando fabricante e classe (CA-50 ou CA-60). Confira se está legível e bate com o que foi pedido." },
      { q: "O que fazer se o vergalhão chegar fora do especificado?", a: "Não assine o canhoto de entrega sem registrar a divergência. Fotografe a marcação da barra, o certificado (ou a falta dele) e qualquer dano visível antes de liberar a descarga." },
    ],
  },

};
