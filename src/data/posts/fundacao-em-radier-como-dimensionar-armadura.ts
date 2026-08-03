// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 18,
  slug: "fundacao-em-radier-como-dimensionar-armadura",
  category: "Normas ABNT",
  title: "Fundação em Radier: Como Dimensionar a Armadura Corretamente",
  metaDescription: "Guia técnico sobre dimensionamento de armadura para fundação em radier: quando usar, espessura, taxa de aço mínima conforme ABNT NBR 6118 e NBR 6122.",
  keyword: "fundação em radier armadura",
  date: "21 Fev 2026",
  summary: "Guia técnico completo sobre fundação em radier: conceito, quando é indicado, dimensionamento da armadura conforme ABNT NBR 6118 e NBR 6122, e boas práticas de execução.",
  content: `## O Que É uma Fundação em Radier?

O radier (ou radier geral) é um tipo de fundação superficial que consiste em uma laje de concreto armado que cobre toda a área da edificação — ou de parte dela — e distribui as cargas de todos os pilares e paredes para o solo de forma contínua.

Diferentemente das fundações pontuais (sapatas isoladas) ou lineares (vigas de baldrame), o radier funciona como um elemento único que age em conjunto. Essa característica o torna especialmente eficiente quando a capacidade de suporte do solo é baixa e uniforme, ou quando as cargas da edificação são distribuídas de forma relativamente uniforme.

## Quando o Radier É a Solução Mais Adequada?

O engenheiro geotécnico ou o projetista estrutural decide pelo radier com base no sondagem do solo (SPT ou CPTU) e nas cargas da edificação. Os cenários mais comuns:

- **Solo com baixa capacidade de suporte (σ_adm < 50 kPa):** sapatas isoladas precisariam ser tão grandes que a distância entre elas seria menor que as próprias dimensões — nesse caso o radier é mais econômico
- **Obras em solos variáveis:** quando a resistência do solo varia lateralmente, o radier acomoda recalques diferenciais de forma mais controlada
- **Edificações leves com cargas distribuídas:** galpões pré-moldados, casas térreas em solos de baixa resistência
- **Solos expansivos:** em regiões com solo argiloso expansivo, o radier controla melhor os movimentos do solo
- **Pisos industriais integrados à fundação:** em alguns projetos, a laje de piso industrial serve simultaneamente como radier

## Espessura Mínima do Radier

A espessura mínima do radier é determinada por três critérios:

1. **Critério estrutural:** a espessura deve ser suficiente para resistir aos esforços de flexão e cisalhamento gerados pelas cargas dos pilares e pela reação do solo. Calculada pelo engenheiro.

2. **Critério de cobrimento (ABNT NBR 6118):** o cobrimento nominal mínimo para fundações é de **40 mm (CAA II)** a **50 mm (CAA III)**, mais a tolerância de execução de 10 mm. Na prática, a maioria dos radiers tem 50 a 60 mm de cobrimento.

3. **Critério mínimo normativo:** a ABNT NBR 6118 define espessura mínima de **15 cm** para lajes de fundação. Na prática, a maioria dos radiers residenciais tem entre **15 e 30 cm**, e os industriais entre **20 e 50 cm**.

## Dimensionamento da Armadura: Conceitos Fundamentais

O radier é dimensionado como uma laje invertida — as cargas vêm de cima (pilares, paredes, cargas permanentes e variáveis) e a reação vem de baixo (pressão do solo). Os esforços resultantes são de flexão e cisalhamento.

### Armadura de Flexão

A armadura principal é disposta nas duas direções (X e Y), tanto na face inferior (armadura positiva, para o momento de vão) quanto na face superior (armadura negativa, sobre os pilares, onde ocorre momento negativo).

**Taxa mínima de armadura (ABNT NBR 6118, tabela 17.3):**

Para lajes de fundação (radier), a taxa de armadura mínima em cada direção é:

- **CA-50:** ρ_mín = 0,15% (sobre a seção bruta de concreto)

Para uma seção de 1 m de largura com espessura de 20 cm:
- Área de seção = 1.000 mm × 200 mm = 200.000 mm²
- Armadura mínima = 0,0015 × 200.000 = **300 mm²/m**

Isso equivale, por exemplo, a barras φ 10,0 mm CA-50 a cada 26 cm, ou φ 12,5 mm a cada 40 cm.

### Armadura de Cisalhamento (Punção)

Na região dos pilares, o radier está sujeito ao esforço de **punção** — cisalhamento bidirecional provocado pela concentração de carga. A verificação de punção segue o método da ABNT NBR 6118 (item 19.5).

Quando a punção ultrapassa a capacidade do concreto, é necessário adicionar **armadura de punção** (estribos ou conectores de aço) na região ao redor do pilar.

## Armadura Prática: O Que o Calculista Define

O projeto estrutural do radier deve indicar:

- **Armadura de fundo:** barras na direção X e na direção Y, com diâmetro, espaçamento e comprimento
- **Armadura de topo:** barras nas mesmas direções, geralmente com maior concentração sobre os pilares
- **Bordas:** armadura de reforço nas bordas livres do radier
- **Região de pilares:** eventual armadura de punção
- **Emendas e ancoragens:** comprimentos conforme ABNT NBR 6118

**Exemplo de configuração para radier residencial (espessura 20 cm, CAA I):**
- Fundo: φ 10,0 CA-50 a cada 20 cm nas duas direções (As = 393 mm²/m)
- Topo: φ 10,0 CA-50 a cada 20 cm nas duas direções
- Bordas: φ 12,5 CA-50 a cada 20 cm + dobre nas extremidades

## Erros Comuns no Dimensionamento e Execução

1. **Cobrimento insuficiente:** em solos com umidade, o cobrimento abaixo de 40 mm leva à corrosão precoce da armadura
2. **Não verificar a punção:** pode resultar em ruptura frágil e súbita ao redor dos pilares
3. **Desconsiderar recalques diferenciais:** solos heterogêneos exigem modelagem mais cuidadosa
4. **Concreto sem controle de resistência:** o concreto do radier deve ter fck mínimo de **20 MPa** (residencial) a **30 MPa** (industrial), com controle tecnológico por ensaios de compressão
5. **Armar somente o fundo:** esquecer a armadura de topo sobre pilares é erro que compromete a segurança

## A BR Aço no Seu Projeto de Radier

A **BR Aço** fornece vergalhões CA-50 em todos os diâmetros necessários para o radier, com certificação ABNT NBR 7480 e rastreabilidade de lote. Oferecemos também o serviço de **corte e dobra** para as armaduras de borda e os elementos especiais do projeto. Envie sua planta e receba orçamento em 24 horas.`,
};

export default post;
