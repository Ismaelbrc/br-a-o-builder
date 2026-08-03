// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 79,
  slug: "cortes-e-secoes-em-projetos-estruturais",
  category: "Projeto Estrutural",
  title: "Cortes e Seções em Projetos: Como Identificar Elementos Estruturais",
  metaDescription: "Aprenda a ler cortes e seções transversais em projetos estruturais. Entenda como interpretar vigas, pilares, lajes e fundações representados em vista de corte.",
  keyword: "cortes seções projetos estruturais",
  date: "13 Mar 2026",
  summary: "Aprenda a ler cortes e seções transversais em projetos estruturais — como interpretar vigas, pilares, lajes e fundações em vista de corte.",
  content: `## O que são Cortes e Seções em Projetos?

Um corte é um plano imaginário que "fatia" a edificação, permitindo visualizar elementos que não aparecem na planta baixa. Seção é o resultado dessa fatia — a figura que aparece no desenho técnico mostrando o interior do elemento.

### Corte x Seção
- **Corte**: vista que mostra o que há além do plano de corte (fundo visível)
- **Seção**: mostra apenas a superfície exata do plano de corte, sem fundo

Na prática em projetos de estrutura, os dois termos são usados de forma intercambiável.

## Como Identificar um Corte no Projeto

Na planta baixa, o corte é indicado por uma linha tracejada grossa com setas nas extremidades (indicando a direção do olhar) e uma letra ou número: **Corte A-A**, **Corte B-B**, **Corte 1-1**, etc.

Na folha de detalhes, o corte aparece desenhado com o mesmo rótulo e na escala indicada.

## O que o Corte Mostra

### Corte de Viga
Mostra a seção transversal da viga: largura (bw), altura total (h), cobrimento, armadura longitudinal (barras no fundo e topo) e estribos. É a representação mais usada para detalhar armação.

### Corte de Pilar
Mostra a seção do pilar com as dimensões, quantidade e posição de barras longitudinais, e o detalhe do estribo. Pilares com seção não-retangular (L, T, circulares) precisam de corte para deixar claro o arranjo de barras.

### Corte de Laje
O corte de laje mostra a espessura, a posição das armaduras inferiores e superiores (positiva e negativa), e, se for nervurada, as dimensões das nervuras e do capeamento.

### Corte de Fundação
Mostra a profundidade e dimensões da sapata, bloco ou radier, incluindo armação de fundo, armação de parede lateral e a ligação com o pilar (barras de espera ou colarinho).

## Hachuras no Corte

As hachuras indicam o material cortado:
- **Concreto**: losangos ou quadriculado fino
- **Aço / armadura**: círculos sólidos (seção de barras) ou símbolo de metal
- **Alvenaria**: retângulos alternados (tijolo)
- **Solo**: traços inclinados com pontos (terra)
- **Madeira (fôrma)**: traços curvos paralelos

## Corte de Armação (Planta de Armação)

Nos projetos de armação, o corte mostra as barras "de frente" (representadas como linhas) e as barras perpendiculares ao plano (representadas como círculos com o diâmetro indicado).

> ● 5φ12.5 = cinco barras de 12,5 mm de diâmetro na posição indicada

Sempre verifique se o corte está na mesma revisão da planta de forma — inconsistências entre eles são fonte de erros graves na montagem da armação.`,
};

export default post;
