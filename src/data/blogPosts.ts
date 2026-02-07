export interface BlogPost {
  id: number;
  slug: string;
  category: string;
  title: string;
  metaDescription: string;
  keyword: string;
  date: string;
  summary: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "o-que-e-corte-e-dobra-de-aco",
    category: "Corte e Dobra",
    title: "O que é Corte e Dobra de Aço? Guia Completo para Construtores",
    metaDescription: "Entenda o que é o serviço de corte e dobra de aço, como funciona, quais as vantagens e como ele pode reduzir em até 50% o custo de mão de obra na sua construção.",
    keyword: "corte e dobra de aço",
    date: "07 Fev 2026",
    summary: "Entenda o que é o serviço de corte e dobra de aço, como funciona, quais as vantagens e como ele pode reduzir em até 50% o custo de mão de obra na sua construção.",
    content: `## O que é Corte e Dobra de Aço?

O corte e dobra de aço é um serviço industrial que consiste em receber o projeto estrutural de uma obra e, a partir dele, cortar e dobrar vergalhões de aço nas medidas exatas especificadas pelo engenheiro calculista. O resultado são peças prontas para armar, identificadas por tipo e etapa da obra, entregues diretamente no canteiro.

Diferente do método tradicional — onde armadores cortam e dobram manualmente no canteiro — o corte e dobra industrial utiliza máquinas automatizadas de alta precisão, eliminando desperdício e reduzindo drasticamente o tempo de execução.

## Como Funciona o Processo?

O processo de corte e dobra é simples e pode ser dividido em três etapas fundamentais:

### Etapa 1 — Envio do projeto
O cliente envia a planta estrutural ou a lista de materiais (planilha de ferro) para a equipe técnica da indústria. Isso pode ser feito por WhatsApp, e-mail ou presencialmente.

### Etapa 2 — Análise e orçamento
Engenheiros analisam o projeto, quantificam os materiais necessários e elaboram um orçamento detalhado. Nessa etapa, é possível identificar otimizações que reduzem ainda mais o consumo de aço.

### Etapa 3 — Produção e entrega
Após aprovação, o aço é cortado e dobrado em máquinas CNC (Comando Numérico Computadorizado) com precisão milimétrica. As peças são identificadas com etiquetas, organizadas por etapa da obra e entregues no canteiro.

## Vantagens do Corte e Dobra

A adoção do corte e dobra de aço traz benefícios mensuráveis para qualquer obra:

- **Economia em mão de obra** pode chegar a 50%, já que não é necessário manter equipes de armadores realizando cortes manuais no canteiro
- **Desperdício de material praticamente eliminado**, já que cada peça é cortada na medida exata do projeto, sem sobras e sem pontas
- **Produtividade aumenta significativamente**, pois o aço chega pronto para ser montado, acelerando o cronograma
- **Canteiro de obras mais organizado e seguro**, sem bancadas de corte, sem entulho de aço e sem riscos de acidentes com equipamentos cortantes

## Quando Vale a Pena Contratar Corte e Dobra?

O serviço é vantajoso para praticamente qualquer tipo de obra que utilize armaduras de aço, desde uma casa residencial até grandes empreendimentos. Obras com grande volume de aço têm economia de escala ainda maior. Porém, mesmo em obras menores, a redução de desperdício e mão de obra já justifica o investimento.

A BR Aço realiza o serviço de corte e dobra com tecnologia 100% automatizada, entrega em até 7 dias úteis e parcelamento em até 10x no cartão. Solicite seu orçamento e descubra quanto você pode economizar.`
  },
  {
    id: 2,
    slug: "corte-e-dobra-vs-corte-manual",
    category: "Corte e Dobra",
    title: "Corte e Dobra vs Corte Manual: Qual é Mais Econômico?",
    metaDescription: "Compare os custos reais entre corte e dobra industrial e o corte manual no canteiro. Descubra qual método gera mais economia, menos desperdício e mais produtividade.",
    keyword: "corte e dobra vs corte manual",
    date: "05 Fev 2026",
    summary: "Compare os custos reais entre corte e dobra industrial e o corte manual no canteiro. Descubra qual método gera mais economia e produtividade.",
    content: `## A Eterna Dúvida do Construtor

Muitos construtores e engenheiros ainda se perguntam: vale mais a pena cortar e dobrar o aço no canteiro de obras ou contratar o serviço industrializado? A resposta, baseada em dados do mercado, é quase sempre favorável ao corte e dobra industrial — mas é importante entender por quê.

## Custos com Mão de Obra

No método manual, é necessário contratar armadores especializados para cortar e dobrar vergalhões usando equipamentos como serra policorte e chave de dobra. Uma equipe típica conta com 2 a 4 profissionais, com salários, encargos trabalhistas, EPI, alimentação e transporte.

No corte e dobra industrial, o aço chega pronto. A equipe necessária é apenas para montagem e amarração das armaduras. Em média, a redução de mão de obra chega a **50%**, segundo dados de construtoras que migraram para o sistema industrializado.

## Desperdício de Material

O corte manual gera perdas de **3% a 8%** do aço comprado, dependendo da habilidade dos armadores e da complexidade do projeto. Pontas de vergalhão, erros de medida e dobras incorretas são as principais causas.

No corte e dobra industrial, as máquinas CNC operam com tolerância mínima. O desperdício é praticamente zero, pois cada peça é cortada conforme o projeto estrutural.

## Comparativo Direto

Quando somamos a economia em mão de obra, a eliminação do desperdício, a redução de acidentes de trabalho, a organização do canteiro e a aceleração do cronograma, o corte e dobra industrial se mostra significativamente mais econômico na grande maioria dos cenários.

A principal exceção seriam obras muito pequenas, com volume de aço inferior a 500 kg, onde o custo logístico de entrega pode não compensar. Ainda assim, a tendência do mercado é clara: cada vez mais construtoras — de todos os portes — estão adotando o corte e dobra industrial como padrão.

## Conclusão

Se você busca economia real, produtividade e qualidade na sua obra, o corte e dobra industrial é a escolha mais inteligente. Na BR Aço, oferecemos o serviço com produção 100% automatizada, entrega em até 7 dias úteis e condições facilitadas de pagamento.`
  },
  {
    id: 3,
    slug: "como-calcular-quantidade-de-aco-construcao",
    category: "Dicas Técnicas",
    title: "Como Calcular a Quantidade de Aço para Construção: Guia Prático",
    metaDescription: "Aprenda a calcular a quantidade de vergalhões, treliças e malhas para sua obra. Guia prático com fórmulas, dicas e exemplos para evitar desperdício e economizar.",
    keyword: "como calcular quantidade de aço",
    date: "03 Fev 2026",
    summary: "Aprenda a calcular a quantidade de vergalhões, treliças e malhas para sua obra. Guia prático com dicas para evitar desperdício e economizar.",
    content: `## Por Que o Cálculo Correto é Tão Importante?

Comprar aço a mais significa dinheiro desperdiçado. Comprar a menos significa atraso na obra, novas compras emergenciais (geralmente mais caras) e perda de produtividade. O cálculo preciso da quantidade de aço é uma das etapas mais importantes do planejamento de qualquer construção.

## O Papel do Projeto Estrutural

O ponto de partida para qualquer cálculo de aço é o projeto estrutural elaborado por um engenheiro calculista. Esse documento detalha as dimensões, os diâmetros, os comprimentos e as quantidades de cada barra de aço necessária para a obra.

A planilha de ferro (também chamada de lista de ferros ou resumo de aço) é extraída do projeto estrutural e contém todas as informações necessárias para a compra ou para a contratação do serviço de corte e dobra.

## Método Básico de Cálculo

Para obras menores ou para ter uma estimativa inicial, é possível usar a taxa de aço por metro quadrado de construção. Essa taxa varia conforme o tipo da obra:

- **8 a 12 kg/m²** em residências de até 2 pavimentos
- **15 a 25 kg/m²** em edifícios comerciais
- **20 a 40 kg/m²** em edifícios de múltiplos pavimentos

Essas taxas são apenas estimativas e não substituem o projeto estrutural. Servem para um orçamento preliminar.

## Dicas para Evitar Desperdício

Para minimizar o consumo de aço, considere:

1. Contratar o serviço de corte e dobra, que elimina desperdício de pontas
2. Solicitar ao projetista a otimização das armaduras para aproveitar o comprimento comercial das barras (12 metros)
3. Verificar se há possibilidade de usar malhas ou telas soldadas em vez de armaduras convencionais em lajes e pisos

## Próximo Passo

Se você já tem o projeto estrutural, envie para a equipe técnica da BR Aço. Nossos engenheiros analisam gratuitamente e fornecem um orçamento detalhado com as quantidades exatas de cada produto necessário.`
  },
  {
    id: 4,
    slug: "vergalhao-ca-50-vs-ca-60-diferencas",
    category: "Vergalhões",
    title: "Vergalhão CA-50 vs CA-60: Diferenças, Usos e Quando Usar Cada Um",
    metaDescription: "Descubra as diferenças entre vergalhão CA-50 e CA-60, onde usar cada tipo, resistência, aplicações e como escolher o aço certo para sua obra.",
    keyword: "vergalhão CA-50 CA-60 diferenças",
    date: "01 Fev 2026",
    summary: "Descubra as diferenças entre vergalhão CA-50 e CA-60, onde usar cada tipo, resistência e como escolher o aço certo para sua obra.",
    content: `## Entendendo a Classificação do Aço

A sigla CA significa Concreto Armado. Os números 50 e 60 indicam a tensão de escoamento do aço em kgf/mm². Em termos simples, quanto maior o número, maior a resistência mecânica do vergalhão.

O CA-25 também existe, mas é cada vez menos utilizado na construção civil moderna. Os tipos CA-50 e CA-60 dominam o mercado brasileiro e têm características bem distintas que determinam sua aplicação.

## Vergalhão CA-50

O CA-50 é o tipo mais utilizado em estruturas de concreto armado no Brasil. Suas principais características são:

- Superfície nervurada (com saliências), proporcionando excelente aderência ao concreto
- Soldável
- Permite dobramento e redobramento
- Encontrado em diâmetros de 6,3 mm a 40 mm
- Comercializado em barras retas de 12 metros

**Aplicações mais comuns:** pilares, vigas, fundações (sapatas, blocos, estacas), lajes, escadas e muros de arrimo. Ele é o "coringa" da construção civil.

## Vergalhão CA-60

O CA-60 tem resistência mecânica superior ao CA-50, mas apresenta diferenças importantes:

- Superfície pode ser lisa, entalhada ou nervurada
- Menor capacidade de alongamento (é mais rígido)
- Não é soldável por todos os métodos
- Encontrado em diâmetros menores, de 3,4 mm a 12,5 mm
- Comercializado tanto em barras retas quanto em rolos (bobinas)

**Aplicações comuns:** treliças, malhas soldadas, estribos, armaduras secundárias de lajes e elementos pré-moldados.

## Como Escolher?

A escolha entre CA-50 e CA-60 deve ser feita pelo engenheiro calculista no projeto estrutural. Na prática, a maioria das obras utiliza os dois tipos em combinação: CA-50 para as armaduras principais (pilares, vigas, fundações) e CA-60 para armaduras complementares (estribos, telas, treliças).

A BR Aço trabalha com ambos os tipos, sempre seguindo a norma ABNT NBR 7480/2007, garantindo rastreabilidade e certificação de qualidade em cada lote.`
  },
  {
    id: 5,
    slug: "norma-abnt-nbr-7480-aco-concreto-armado",
    category: "Normas Técnicas",
    title: "Norma ABNT NBR 7480: O que Você Precisa Saber sobre Aço para Concreto Armado",
    metaDescription: "Entenda a norma ABNT NBR 7480/2007 que regulamenta o aço para concreto armado no Brasil. Saiba por que ela é essencial para a segurança da sua obra.",
    keyword: "norma ABNT NBR 7480",
    date: "30 Jan 2026",
    summary: "Entenda a norma ABNT NBR 7480/2007 que regulamenta o aço para concreto armado no Brasil e por que ela é essencial para a segurança da sua obra.",
    content: `## O que é a NBR 7480?

A ABNT NBR 7480, intitulada "Aço destinado a armaduras para estruturas de concreto armado — Especificação", é a norma técnica brasileira que estabelece os requisitos mínimos de qualidade para vergalhões e fios de aço utilizados em concreto armado.

Publicada pela Associação Brasileira de Normas Técnicas (ABNT), a versão vigente é de 2007 e se aplica a todos os fabricantes, distribuidores e usuários de aço para construção civil no Brasil.

## Por Que Essa Norma é Importante?

O aço é o esqueleto de qualquer estrutura de concreto armado. Se o material não atende aos requisitos mínimos de resistência, ductilidade e aderência, a segurança de toda a edificação fica comprometida.

A NBR 7480 garante que o aço utilizado na sua obra tenha:

- A **resistência mecânica** especificada pelo fabricante
- A **ductilidade mínima** para absorver deformações sem romper
- A **aderência ao concreto** necessária para que o sistema funcione em conjunto
- A **composição química adequada** para soldagem quando necessário

## O que a Norma Especifica?

A norma classifica o aço em três categorias: CA-25 (pouco utilizado atualmente), CA-50 e CA-60. Para cada categoria, especifica valores mínimos de resistência ao escoamento, resistência à tração, alongamento e aderência.

A norma também define os ensaios obrigatórios: ensaio de tração, ensaio de dobramento e verificação dimensional.

## Como Verificar se o Aço é Certificado?

Todo aço comercializado no Brasil deve trazer identificação gravada em relevo nas barras, com informações do fabricante e da categoria do material. O fornecedor deve disponibilizar o certificado de qualidade do lote.

Na BR Aço, todos os produtos são fabricados em conformidade com a NBR 7480/2007. Cada lote possui rastreabilidade completa e certificado de qualidade disponível para o cliente.

## Riscos de Usar Aço Sem Certificação

Utilizar aço sem certificação ABNT pode:

- Comprometer a segurança estrutural da edificação
- Gerar problemas com a fiscalização do CREA
- Invalidar o seguro da obra
- Resultar em responsabilidade civil e criminal em caso de acidentes

A economia aparente de comprar aço mais barato e sem certificação pode se transformar no prejuízo mais caro da sua carreira. **Sempre exija certificação ABNT NBR 7480 do seu fornecedor.**`
  },
  {
    id: 6,
    slug: "trelicas-de-aco-para-que-servem",
    category: "Treliças",
    title: "O que São Treliças de Aço e Para que Servem na Construção Civil?",
    metaDescription: "Descubra o que são treliças de aço, como funcionam, quais os tipos e como elas reduzem custos de escoramento e aceleram a construção de lajes.",
    keyword: "treliças de aço construção civil",
    date: "28 Jan 2026",
    summary: "Descubra o que são treliças de aço, como funcionam e como elas reduzem custos de escoramento e aceleram a construção de lajes.",
    content: `## O que São Treliças?

Treliças de aço para construção civil são estruturas metálicas formadas por barras de aço soldadas em formato triangular. Elas funcionam como armadura de lajes, sendo embutidas nas vigotas ou nas pré-lajes, dispensando grande parte do escoramento necessário durante a concretagem.

Fabricadas em aço CA-60 nervurado, as treliças proporcionam resistência mecânica elevada com baixo peso próprio.

## Tipos de Treliças

### Treliça Plana (Bidimensional)
A mais comum — consiste em uma barra superior (banzo superior), uma ou duas barras inferiores (banzo inferior) e sinusoides (diagonais) que conectam os banzos.

### Treliça Espacial (Tridimensional)
Usada em estruturas mais complexas, como coberturas metálicas e galpões.

As alturas variam conforme a aplicação: 8, 10, 12, 16, 20, 25 e 30 centímetros. A escolha depende do vão a ser vencido e das cargas aplicadas.

## Vantagens das Treliças

- **Reduzem significativamente** a necessidade de escoramento durante a concretagem
- **Maior organização** no canteiro de obras
- **Aceleram a execução** das lajes, reduzindo o prazo da obra
- **Vencem vãos maiores** com menor consumo de material
- **Padronização** e controle de qualidade industrial

## Aplicações Comuns

- Lajes de edifícios residenciais e comerciais
- Coberturas
- Pisos industriais
- Estruturas pré-moldadas
- Pontes de pequeno porte

A BR Aço fabrica treliças em diversas alturas e especificações, com aço certificado ABNT e entrega rápida em todo o estado de Goiás.`
  },
  {
    id: 7,
    slug: "malha-de-aco-construcao-tipos-aplicacoes",
    category: "Malhas",
    title: "Malha de Aço para Construção: Tipos, Aplicações e Vantagens",
    metaDescription: "Conheça os tipos de malha de aço para construção civil, suas aplicações em pisos, lajes e pré-moldados, e por que elas aumentam a produtividade da obra.",
    keyword: "malha de aço construção",
    date: "26 Jan 2026",
    summary: "Conheça os tipos de malha de aço para construção civil, suas aplicações em pisos, lajes e por que elas aumentam a produtividade.",
    content: `## O que é Malha de Aço?

Malha de aço (ou tela soldada) é um produto formado por fios de aço CA-60 dispostos em duas direções perpendiculares (longitudinal e transversal) e soldados eletronicamente em todos os pontos de cruzamento. O resultado é uma estrutura plana, rígida e uniforme que distribui cargas de maneira homogênea.

As malhas são fabricadas em painéis planos ou em rolos, com diversas combinações de diâmetro de fio e espaçamento.

## Tipos de Malha

As malhas soldadas seguem a norma ABNT NBR 7481 e são classificadas por letras:

- **Malhas Q**: fios em ambas as direções têm a mesma seção transversal
- **Malhas L**: uma direção é a principal e a outra é secundária

Exemplos comerciais: Q-92, Q-138, Q-196, Q-283, Q-503 — o número indica a área de aço em mm² por metro linear.

## Vantagens da Malha sobre Armadura Convencional

- **Instalação muito mais rápida** — basta posicionar e cortar
- **Uniformidade** na distribuição das barras e garantia de espaçamento
- **Redução significativa de mão de obra** — não é necessário amarrar barra por barra
- **Menor possibilidade de erro humano** no posicionamento das armaduras

## Aplicações Mais Comuns

- Pisos industriais
- Lajes de concreto
- Pavimentos de concreto
- Paredes de concreto (sistema monolítico)
- Contenções e reservatórios
- Elementos pré-moldados

A BR Aço oferece malhas soldadas em diversas especificações, com certificação ABNT e entrega em até 48 horas para Goiás.`
  },
  {
    id: 8,
    slug: "sapatas-de-fundacao-tipos-como-dimensionar",
    category: "Fundação",
    title: "Sapatas de Fundação: O que São, Tipos e Como Dimensionar",
    metaDescription: "Saiba o que são sapatas de fundação, quais os tipos (isolada, corrida, associada), como são dimensionadas e quando usar cada uma na sua obra.",
    keyword: "sapatas de fundação",
    date: "24 Jan 2026",
    summary: "Saiba o que são sapatas de fundação, quais os tipos (isolada, corrida, associada) e quando usar cada uma na sua obra.",
    content: `## O que São Sapatas?

Sapatas são elementos de fundação superficial (ou rasa) que transferem as cargas da estrutura para o solo. Elas são posicionadas na base de pilares ou paredes e funcionam como uma "base alargada" que distribui o peso em uma área maior do terreno.

As sapatas são feitas de concreto armado e representam um dos tipos de fundação mais utilizados na construção civil brasileira.

## Tipos de Sapatas

### Sapatas Isoladas
As mais comuns. Cada sapata recebe a carga de um único pilar. Podem ter formato quadrado, retangular ou circular.

### Sapatas Corridas
Elementos contínuos que recebem cargas de paredes ou de uma sequência de pilares alinhados. Comuns em muros de arrimo.

### Sapatas Associadas
Conectam dois ou mais pilares quando estes estão próximos e suas sapatas isoladas se sobreporiam.

### Sapatas de Divisa
Utilizadas quando o pilar está no limite do terreno e não é possível centralizar a sapata sob ele.

## Armadura das Sapatas

A armadura é composta por barras de aço dispostas nas duas direções (longitudinal e transversal) na parte inferior do elemento. Essa armadura resiste aos esforços de tração gerados pela flexão da sapata.

O dimensionamento é feito pelo engenheiro calculista com base nas cargas do pilar, nas dimensões da sapata e na resistência do concreto.

## Quando Usar Sapatas?

Sapatas são indicadas quando:

- O solo tem boa capacidade de suporte a profundidades pequenas (até 2-3 metros)
- As cargas da estrutura são moderadas
- O nível do lençol freático está abaixo da cota de apoio

Quando o solo é fraco ou as cargas são muito elevadas, estacas ou tubulões podem ser mais adequados.

A BR Aço fornece sapatas prontas, conforme o projeto estrutural, com entrega rápida em todo o estado de Goiás.`
  },
  {
    id: 9,
    slug: "entrega-aco-48-horas-goias",
    category: "BR Aço",
    title: "Entrega de Aço em 48 Horas: Como a BR Aço Garante Agilidade",
    metaDescription: "Descubra como a BR Aço entrega produtos de aço prontos em até 48 horas em Goiás, com produção 100% automatizada e logística just-in-time.",
    keyword: "entrega de aço rápida Goiás",
    date: "22 Jan 2026",
    summary: "Descubra como a BR Aço entrega produtos de aço prontos em até 48 horas em Goiás, com produção 100% automatizada.",
    content: `## O Problema dos Atrasos na Construção

Cada dia de atraso em uma obra gera custos adicionais: aluguel de equipamentos parados, equipes ociosas, multas contratuais e impacto no fluxo de caixa. Uma das causas mais comuns de atraso é a demora na entrega de materiais.

No mercado tradicional, o prazo de entrega de aço pode variar de 5 a 15 dias úteis.

## Como a BR Aço Entrega em 48 Horas?

A BR Aço consegue entregar produtos prontos em até 48 horas graças a:

- **Produção 100% automatizada** — grandes volumes em curto espaço de tempo
- **Estoque estratégico** — matérias-primas mais demandadas sempre disponíveis
- **Logística integrada** — frota própria e parceiros dedicados para Goiás
- **Atendimento ágil** — equipe comercial que processa pedidos rapidamente

## Quais Produtos São Entregues em 48 Horas?

Os produtos prontos — vergalhões, treliças, malhas, telas, colunas, bobinas, sapatas, pregos e arames — são entregues em até 48 horas quando disponíveis em estoque.

Para o serviço de **Corte e Dobra**, que é fabricado sob medida, o prazo é de até 7 dias úteis após a aprovação do orçamento.

## O Impacto no Cronograma

Com entrega em 48 horas, o construtor pode:

- Trabalhar com estoque mínimo no canteiro, reduzindo capital de giro
- Fazer compras just-in-time, conforme a necessidade real da obra
- Evitar grandes pedidos antecipados

Solicite seu orçamento na BR Aço e receba seus produtos com a agilidade que sua obra merece.`
  },
  {
    id: 10,
    slug: "como-ler-interpretar-projeto-estrutural",
    category: "Dicas Técnicas",
    title: "Como Ler e Interpretar um Projeto Estrutural: Guia para Iniciantes",
    metaDescription: "Aprenda a ler e interpretar um projeto estrutural de concreto armado. Entenda plantas, cortes, detalhamentos e a planilha de ferro de forma simples.",
    keyword: "como ler projeto estrutural",
    date: "20 Jan 2026",
    summary: "Aprenda a ler e interpretar um projeto estrutural de concreto armado. Entenda plantas, cortes, detalhamentos e a planilha de ferro.",
    content: `## O que é um Projeto Estrutural?

O projeto estrutural é o conjunto de desenhos técnicos que detalha toda a estrutura de uma edificação: fundações, pilares, vigas, lajes, escadas, muros de arrimo e demais elementos de concreto armado.

Saber interpretar esse projeto é fundamental para construtores, mestres de obra, encarregados e até para quem vai contratar um serviço de corte e dobra.

## Elementos Básicos do Projeto

### Plantas de Forma
Mostram as dimensões dos elementos (largura, comprimento, altura) e o posicionamento de pilares, vigas e lajes em cada pavimento.

### Detalhamentos de Armadura
Mostram a quantidade, o diâmetro, o comprimento e o formato de cada barra de aço que compõe a armadura.

## Como Ler os Detalhamentos de Armadura

Os detalhamentos utilizam uma simbologia padronizada. As barras são representadas por linhas com indicações de:

- **N** = posição/número da barra
- **φ** = diâmetro
- **C** = comprimento

Exemplo: "N1 — 10 φ 10.0 c/20 — C=280" significa: posição N1, 10 barras de diâmetro 10 mm, espaçadas a cada 20 cm, com comprimento de 280 cm.

## A Planilha de Ferro (Resumo de Aço)

A planilha de ferro é um resumo tabular de todas as armaduras do projeto. Contém:

- Posição
- Diâmetro
- Quantidade
- Comprimento unitário
- Comprimento total
- Peso total

Essa planilha é o documento principal para solicitar o serviço de corte e dobra.

## Dúvidas sobre seu Projeto?

Se você tem dúvidas sobre como interpretar o seu projeto, a equipe técnica da BR Aço pode ajudar. Envie sua planta pelo WhatsApp e nossos engenheiros auxiliam na análise gratuitamente.`
  }
];

export const categories = ['Todos', 'Corte e Dobra', 'Vergalhões', 'Dicas Técnicas', 'Normas Técnicas', 'Treliças', 'Malhas', 'Fundação', 'BR Aço'];
