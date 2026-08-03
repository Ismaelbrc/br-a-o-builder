// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 66,
  slug: "estribos-pilares-vigas-funcao-calculo",
  category: "Dicas Técnicas",
  title: "Estribos em Pilares e Vigas: Função, Espaçamento e Cálculo",
  metaDescription: "Estribos resistem ao cisalhamento em pilar e viga. Função estrutural, espaçamento máximo da NBR 6118 e como calcular.",
  keyword: "estribos pilares vigas",
  date: "15 Jan 2026",
  summary: "Estribos são a armadura transversal que impede o colapso por cisalhamento em pilares e vigas. A NBR 6118 define espaçamentos máximos rigorosos que devem ser respeitados na execução.",
  content: `## O Que São Estribos?

Estribos (também chamados cintas, aros ou grampos) são barras de aço dobradas em forma fechada (retangular, quadrada, circular ou poligonal) que envolvem as barras longitudinais de pilares e vigas.

Eles são uma das armaduras mais críticas da estrutura — e frequentemente mal executadas em obras sem supervisão técnica adequada.

## Funções dos Estribos

### 1. Resistência ao Cisalhamento
O principal papel dos estribos é resistir às **forças cortantes** que agem transversalmente à peça. Sem estribos suficientes, a peça pode apresentar fissuras diagonais de cisalhamento — ruptura súbita e sem aviso.

### 2. Confinamento do Concreto
Em pilares, os estribos "confinam" o núcleo de concreto comprimido, aumentando sua resistência e ductilidade. Pilares sem estribos ou com estribos muito espaçados colapsam de forma explosiva.

### 3. Impedimento da Flambagem das Longitudinais
Barras longitudinais de pilar comprimidas tendem a flambar (desviar lateralmente). Os estribos funcionam como "travamentos" que impedem esse desvio.

## Espaçamento Máximo de Estribos (NBR 6118)

### Pilares (Item 18.4.2)
O espaçamento máximo de estribos em pilares é o menor valor entre:
- **b** (menor dimensão da seção)
- **24 × diâmetro do estribo**
- **20 cm** (limite geral)

Para pilar 20×30 cm com estribo φ 6,3 mm:
- b = 20 cm
- 24 × 6,3 = 151 mm ≈ 15 cm
- **Espaçamento máximo: 15 cm**

### Vigas (Item 17.4.1)
Nas **zonas de cisalhamento crítico** (próximo ao apoio):
- Espaçamento ≤ d/2 (d = altura útil)
- Para viga com d = 44 cm: espaçamento máximo = **22 cm**

## Zonas de Adensamento: Estribos Mais Próximos

Nas regiões de emenda de pilar e nos nós (pilar-viga), a norma exige adensamento de estribos:
- Espaçamento reduzido para **2/3 do espaçamento geral**
- Comprimento da zona: pelo menos **maior dimensão da seção** × 2

## Cálculo Simplificado de Estribos

**Quantidade de estribos = comprimento da peça ÷ espaçamento**

Para pilar de 3 m com espaçamento de 15 cm:
= 300 ÷ 15 = **20 estribos**

**Comprimento do estribo = perímetro + ganchos**
Para pilar 20×20 cm: 4 × 18 (interno) + 2 × 10 (ganchos) = **92 cm ≈ 1 m**

Total de aço em estribos φ 6,3 mm:
20 × 1 m × 0,245 kg/m = **4,9 kg por pilar**

## BR Aço: Estribos Cortados e Dobrados em Goiânia

A BR Aço produz estribos em qualquer bitola e formato — retos, quadrados, retangulares, poligonais. Entregamos identificados por elemento da estrutura, prontos para montagem. Solicite via WhatsApp.`,
};

export default post;
