// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 155,
  slug: "laje-nervurada-dimensionamento-armadura-execucao",
  category: "Projeto Estrutural",
  title: "Laje Nervurada: Dimensionamento, Armação e Execução Correta pela NBR 6118",
  metaDescription: "Guia de laje nervurada: tipos, dimensionamento pela NBR 6118, armação de nervura e mesa, e como evitar erros de execução.",
  keyword: "laje nervurada dimensionamento armadura",
  date: "28 Mai 2026",
  summary: "Tudo sobre laje nervurada: classificação, requisitos da NBR 6118, cálculo de armadura para nervuras e mesa, e boas práticas de execução com corte e dobra industrial.",
  content: `## Por Que a Laje Nervurada Domina a Construção Brasileira

A laje nervurada responde por mais de 60% das lajes executadas no Brasil em edificações residenciais acima de 4 pavimentos. Menor peso próprio, maior vão livre e possibilidade de integrar instalações hidráulicas e elétricas nas cavidades entre nervuras. Em Goiânia e no Distrito Federal, é esse o critério técnico que a BR Aço segue no fornecimento.

## Requisitos Geométricos (NBR 6118 — item 13.2.4)

| Parâmetro | Mínimo normativo | Recomendado |
|-----------|-----------------|-------------|
| Largura da nervura (bw) | 5 cm | 10 cm |
| Altura da mesa (hf) sem tubulação | 4 cm | 6 cm |
| Altura da mesa com tubulação | 5 cm (tubo ≤ hf/3) | 7 cm |
| Espaçamento entre eixos (moldada) | — | Máx. 60 cm |
| Espaçamento entre eixos (pré-moldada) | — | Máx. 65 cm |

## Armação das Nervuras

### Armadura de Tração (Inferior)
Para nervura 10×15 cm, concreto C25:

| Momento Md (kN.m/m) | Solução típica CA-50 |
|--------------------|----------------------|
| Até 1,5 | 1 ø14 mm (1,54 cm²) |
| 1,5 a 2,5 | 1 ø18 mm (2,54 cm²) |
| 2,5 a 4,0 | 2 ø16 mm (4,02 cm²) |

### Armadura da Mesa (Distribuição)
Mínimo normativo (NBR 6118 item 17.3.7): As_mesa ≥ 0,9 cm²/m

Prática recomendada: malha 10×20 cm com ø5 mm CA-60 (As = 0,98 cm²/m), ou tela soldada Q-92.

## Os 5 Erros Mais Comuns na Execução de Laje Nervurada

1. **Mesa com espessura insuficiente** — causa fissuração diagonal logo após o descimbramento
2. **Armadura de mesa omitida** — resultado: fissuração + perfuração da mesa sob carga concentrada
3. **Cobrimento insuficiente nas nervuras** — nervura de 10 cm com estribos não tem espaço para o cobrimento correto
4. **Vergalhão comprado em barra reta e cortado no canteiro** — gera 20%+ de desperdício nas nervuras de comprimento irregular
5. **Barra da mesa colocada após concretagem** — cobrimento e aderência comprometidos

O erro número 4 é resolvido diretamente pelo corte e dobra industrial: a programação de corte (nesting) otimiza o aproveitamento de todas as nervuras, reduzindo o desperdício de material a menos de 2%.

## Forma Incorporada: Alternativa para Laje Nervurada

A forma incorporada substitui simultaneamente a fôrma das nervuras e a armadura de distribuição da mesa em algumas geometrias. Para lajes com nervuras de vão ≤ 4,5 m e carga variável ≤ 3 kN/m², é possível eliminar totalmente a carpintaria e reduzir a armação inferior em 30% a 40%.

A BR Aço fornece forma incorporada para esse tipo de aplicação em Goiânia e Brasília — único fornecedor do produto no Centro-Oeste.`,
};

export default post;
