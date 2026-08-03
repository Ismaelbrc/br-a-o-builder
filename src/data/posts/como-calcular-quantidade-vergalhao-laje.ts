// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 12,
  slug: "como-calcular-quantidade-vergalhao-laje",
  category: "Vergalhões",
  title: "Como Calcular a Quantidade de Vergalhão para uma Laje: Guia Prático",
  metaDescription: "Aprenda passo a passo como calcular a quantidade de vergalhão para laje. Fórmulas, taxas de consumo e dicas para evitar desperdício na sua obra.",
  keyword: "calcular quantidade de vergalhão para laje",
  date: "10 Jan 2026",
  summary: "Guia prático com passo a passo, fórmulas e taxas de consumo para calcular corretamente a quantidade de vergalhão necessária para executar lajes de qualquer tipo.",
  content: `**Em resumo:** Para calcular o vergalhão de uma laje, multiplique a área (m²) pelo consumo típico por tipo: laje treliçada consome entre 8 e 12 kg/m²; laje maciça, entre 15 e 25 kg/m². Divida o peso total pelo peso por metro do diâmetro escolhido e depois por 12m (comprimento padrão da barra) para obter o número de barras. Sempre arredonde para cima e adicione 10% de perda por corte e emenda.

---

## Por Que o Cálculo Correto Faz Diferença?

Subestimar ou superestimar a quantidade de vergalhão para uma laje são erros que custam caro. A falta de aço paralisa a obra, obriga compras emergenciais com preços mais altos e compromete o cronograma. O excesso gera capital imobilizado, espaço desperdiçado no canteiro e material que muitas vezes se perde por corrosão ou furto.

Um cálculo bem feito é a base de um orçamento confiável — e é um dos primeiros passos antes de solicitar qualquer cotação de corte e dobra.

## Tipos de Laje e Suas Particularidades

Antes de calcular, é preciso saber com qual tipo de laje você está trabalhando, pois cada uma tem taxa de consumo de aço diferente:

- **Laje maciça:** armada em duas direções com vergalhão CA-50, maior consumo de aço, usada em vãos pequenos ou onde há grandes cargas concentradas
- **Laje nervurada:** estrutura com vigotas e espaço entre elas preenchido por blocos cerâmicos ou EPS, menor consumo de aço por m²
- **Laje pré-moldada com vigotas e treliças:** combinação de vigotas de concreto pré-fabricadas com treliças metálicas, consumo de aço médio
- **Laje steel deck:** chapa metálica como forma permanente com armadura complementar

## Taxas de Consumo por m² (Estimativas Preliminares)

Para uma estimativa inicial de orçamento, utilize estas taxas médias de consumo:

| Tipo de Laje | Consumo de Aço (kg/m²) |
|---|---|
| Maciça residencial | 8 a 15 kg/m² |
| Nervurada residencial | 4 a 8 kg/m² |
| Pré-moldada com treliça | 3 a 6 kg/m² |
| Laje de cobertura plana | 6 a 10 kg/m² |

**Importante:** essas taxas servem apenas para estimativas preliminares. O cálculo definitivo deve ser feito a partir do projeto estrutural.

## Método de Cálculo pela Armadura de Projeto

Quando você tem o projeto estrutural, o cálculo é feito pela planilha de ferro (lista de armaduras). Para cada barra de aço, calcula-se:

**Peso da barra (kg) = comprimento (m) × peso linear (kg/m)**

O peso linear de cada diâmetro de vergalhão CA-50 é:

| Diâmetro (mm) | Peso linear (kg/m) |
|---|---|
| 6,3 | 0,245 |
| 8,0 | 0,395 |
| 10,0 | 0,617 |
| 12,5 | 0,963 |
| 16,0 | 1,578 |
| 20,0 | 2,466 |
| 25,0 | 3,853 |

Multiplique o peso de cada barra pela quantidade prevista no projeto e some tudo. O resultado é o total de aço em quilogramas.

## Exemplo Prático: Laje Maciça de 30 m²

Suponha uma laje maciça com armadura positiva em ambas as direções, com vergalhão φ 8,0 mm, espaçamento de 15 cm:

- Direção X: comprimento do vão = 5,0 m → 30 barras de 5,0 m = 150 m
- Direção Y: comprimento do vão = 6,0 m → 25 barras de 6,0 m = 150 m
- Total de barras: 300 metros lineares
- Peso: 300 m × 0,395 kg/m = **118,5 kg** (só a armadura positiva)

Some ainda a armadura negativa (sobre os apoios), os estribos das vigas de borda e a armadura de distribuição.

## Fator de Perda: Nunca Esqueça

No cálculo de compra, sempre adicione de **3% a 5%** sobre o total calculado para cobrir pequenas emendas de comprimento de barra, ajustes de corte e eventuais perdas de montagem.

Se você contratar o serviço de **corte e dobra industrial**, esse fator pode cair para 1% a 2%, pois o corte é feito com precisão milimétrica a partir do projeto.

## Por Que o Corte e Dobra Simplifica Tudo?

Quando você contrata o corte e dobra, não precisa fazer o cálculo de compra de barras inteiras de 12 metros — você envia o projeto e a indústria entrega exatamente as peças necessárias, já cortadas e dobradas, com a quantidade certa.

A **BR Aço** recebe seu projeto estrutural por WhatsApp, faz a quantificação completa gratuitamente e entrega o orçamento com o total exato de aço necessário para sua laje. Entre em contato e evite desperdício desde o primeiro pedido.`,
};

export default post;
