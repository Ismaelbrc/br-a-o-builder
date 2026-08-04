// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 135,
  slug: "viga-t-secao-composta-comportamento",
  category: "Projeto Estrutural",
  title: "Viga T em Concreto Armado: Comportamento, Largura Efetiva e Armação",
  metaDescription: "O que é viga T, como a laje colabora com a viga, largura efetiva da mesa segundo NBR 6118 e implicações para dimensionamento e armação.",
  keyword: "viga T concreto armado largura efetiva",
  date: "21 Mai 2026",
  summary: "Viga T: colaboração da laje como mesa de compressão, largura efetiva pela NBR 6118 e implicações para dimensionamento da armação.",
  content: `## O que é uma Viga T?

Em edifícios de concreto armado, as vigas raramente funcionam isoladas. Quando a laje é concretada solidariamente com a viga, parte da laje passa a colaborar com a resistência à compressão da viga. O conjunto viga + aba de laje forma uma **seção T** (ou seção em forma de T). Vale lembrar que esse critério vale tanto para obras em Goiânia quanto para obras no Distrito Federal, onde a BR Aço também atende.

A colaboração da mesa de laje é vantajosa: aumenta a área de compressão e reduz a quantidade de aço necessária na viga.

## Quando a Seção T é Reconhecida?

A NBR 6118:2014, item 14.6.2, permite considerar a colaboração da mesa (laje) quando:
- A laje é solidária com a viga (concretagem monolítica ou conectores adequados)
- A espessura da mesa (laje) é adequada
- A largura efetiva definida na norma é respeitada

Para vigas simplesmente armadas (tração na parte inferior): a mesa de compressão é a laje — o benefício é máximo.

Para vigas contínuas sobre apoios: na zona de momentos negativos, a tração passa para a face superior. Nessa zona, a mesa de laje fica em tração e **não colabora** com a compressão — a seção comporta-se como viga retangular.

## Largura Efetiva da Mesa (NBR 6118, item 14.6.2)

A largura efetiva bf é a largura de mesa que pode ser considerada no cálculo. Depende do vão, da geometria e da posição da viga.

### Viga com mesa em ambos os lados (viga interna)

bf = bw + 2 × bi (de cada lado)

Onde bi é o menor dos seguintes valores:
- L/10 (L = vão teórico da viga)
- 0,5 × distância livre entre vigas adjacentes
- 8 × espessura da laje (t_f)

### Viga com mesa em um só lado (viga de borda)

bf = bw + bi (de apenas um lado)

bi = menor de: L/20, 0,5 × distância à viga adjacente, 6 × t_f

### Exemplo de cálculo

Dados:
- Viga com bw = 25 cm, vão L = 6,0 m
- Laje com espessura tf = 12 cm
- Distância entre vigas: 3,5 m → distância livre = 3,5 − 0,25 = 3,25 m → 0,5 × 3,25 = 1,625 m

Calculando bi (de cada lado, viga interna):
- L/10 = 6,0/10 = 0,60 m
- 0,5 × distância livre = 1,625 m
- 8 × tf = 8 × 0,12 = 0,96 m

bi = min(0,60; 1,625; 0,96) = **0,60 m**

bf = 0,25 + 2 × 0,60 = **1,45 m**

## Implicações para o Dimensionamento

### No Vão (momento positivo — mesa em compressão)

Com mesa de 1,45 m de largura, a linha neutra muito provavelmente está dentro da espessura da laje. Nesse caso:

- A seção T comporta-se como uma seção retangular de largura bf = 1,45 m
- O braço de momento interno (d − tf/2 ≈ d − 6 cm) é grande
- **Resultado:** a armação de tração (face inferior) é significativamente menor do que em viga retangular com a mesma seção bw × h

### No Apoio (momento negativo — mesa em tração)

Na região de momento negativo (sobre o pilar), a laje está na zona de tração — não colabora. A seção resiste como retângulo com largura bw.

- Armadura negativa (face superior) calculada para seção retangular bw × h
- Maior consumo de aço por unidade de momento

## Armação em Vigas T

### Armadura de Vão (positiva)
Vergalhões CA-50 posicionados na face inferior, dentro da alma (bw). A seção T reduz a quantidade necessária, mas as barras ficam apenas dentro da alma, não na mesa.

### Armadura de Apoio (negativa)
Vergalhões posicionados na face superior. Podem se espalhar pela mesa (largura bf) para melhor controle de fissuração.

**Distribuição da armadura negativa pela mesa:**
- Concentrar 2/3 da armadura dentro de largura bw + 0,6 × bf
- Restante distribuir pela largura total bf

### Estribos
Os estribos envolvem apenas a alma (bw) da viga T — não precisam envolver a mesa.

## Armação da Interface Mesa-Alma (Cisalhamento Longitudinal)

A força de cisalhamento horizontal na interface laje-viga deve ser verificada (NBR 6118, item 14.6.2.4). Em geral, para obras convencionais com concretagem monolítica, essa verificação é satisfeita com a armadura transversal existente na laje.

## Viga T Pré-moldada (Vigota + Laje)

Nas lajes treliçadas, a vigota pré-moldada e a capa de concreto formam uma viga T invertida. O princípio de colaboração da mesa é o mesmo — a capa (laje) colabora com a compressão da vigota.

A largura efetiva da mesa nesse caso é definida pelo espaçamento entre vigotas e pela espessura da capa.`,
};

export default post;
