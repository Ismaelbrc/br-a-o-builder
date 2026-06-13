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

};
