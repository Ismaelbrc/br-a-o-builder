// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 105,
  slug: "bloco-de-coroamento-funcao-dimensionamento",
  category: "Fundação",
  title: "Bloco de Coroamento: Função, Dimensionamento e Ligação com as Estacas",
  metaDescription: "O que é bloco de coroamento em fundação profunda, como distribui a carga do pilar para as estacas e como dimensioná-lo.",
  keyword: "bloco de coroamento estacas dimensionamento",
  date: "12 Abr 2026",
  summary: "O que é o bloco de coroamento, como distribui a carga do pilar para as estacas e como dimensionar o número de estacas e a geometria do bloco.",
  content: `## O que é Bloco de Coroamento?

Bloco de coroamento (ou simplesmente "bloco") é o elemento de fundação que reúne um grupo de estacas e transmite a carga do pilar para elas. É um elemento de concreto, geralmente de grandes dimensões, que fica entre o pilar e as estacas. Em Goiânia e no Distrito Federal, é esse o critério técnico que a BR Aço segue no fornecimento.

Ao contrário da sapata (que distribui a carga diretamente ao solo), o bloco não apoia no solo — ele se sustenta pelas estacas.

## Número de Estacas Necessárias

A quantidade de estacas é determinada pela carga do pilar e pela capacidade individual de cada estaca (Nd):

> n = N / Nd  (arredondado para cima, mínimo 2 estacas por pilar)

Onde:
- n = número de estacas
- N = carga de cálculo do pilar (incluindo peso próprio do bloco)
- Nd = carga admissível da estaca (fornecida pelo relatório de execução ou prova de carga)

**Mínimo de 2 estacas por pilar** (para garantir estabilidade em qualquer direção horizontal).

## Disposição das Estacas

As estacas são distribuídas simetricamente em relação ao eixo do pilar:

| Nº estacas | Disposição |
|---|---|
| 2 | Alinhadas |
| 3 | Triângulo equilátero |
| 4 | Quadrado |
| 5 | Quadrado + centro |
| 6 | Hexágono ou 2 fileiras de 3 |

O espaçamento mínimo entre eixos de estacas é **3 × diâmetro** da estaca (NBR 6122), para evitar interferência entre os bulbos de pressão.

## Dimensões do Bloco

- **Largura:** borda da última estaca + balanço mínimo (geralmente Ø/2 a 1× o diâmetro da estaca)
- **Comprimento:** idem no outro sentido
- **Altura mínima:** 1,5× o diâmetro da estaca mais larga, com mínimo de 50 cm

O bloco trabalha como uma viga de travação que distribui os esforços para cada estaca — por isso precisa de armação adequada (modelo de bielas e tirantes).

## Armação pelo Modelo de Bielas e Tirantes

O bloco de coroamento é dimensionado pelo modelo de bielas de compressão e tirantes de tração (strut-and-tie):

- As bielas de compressão partem do pilar e chegam às estacas
- O tirante é a armação de tração na base do bloco, que une os cabeços das estacas

O comprimento de ancoragem do tirante deve ser garantido além do eixo das estacas — o que exige comprimento de ancoragem calculado.

## Ligação Bloco-Estaca

As estacas devem ser **embutidas no bloco** com comprimento mínimo de:
- 5 cm (para estacas moldadas in loco — hélice contínua)
- 10 a 15 cm para estacas pré-moldadas

Após embutimento, as armaduras das estacas (ou as barras inseridas nas estacas hélice) se prolongam até a armação do bloco para garantir a ligação estrutural.`,
};

export default post;
