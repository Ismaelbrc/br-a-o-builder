// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 107,
  slug: "no-viga-pilar-detalhes-criticos",
  category: "Projeto Estrutural",
  title: "Nó Viga-Pilar: Detalhes Críticos para Resistência e Ductilidade da Estrutura",
  metaDescription: "Comportamento do nó viga-pilar em concreto armado: tipos de nó, esforços envolvidos e detalhes exigidos pela NBR 6118.",
  keyword: "nó viga-pilar detalhe concreto armado",
  date: "15 Abr 2026",
  summary: "Comportamento do nó viga-pilar, tipos de nó externo/interno/de topo, esforços envolvidos e detalhes de armação conforme NBR 6118.",
  content: `## O que é o Nó Viga-Pilar?

O nó viga-pilar (ou ligação viga-pilar, ou região nodal) é a zona do pilar onde uma ou mais vigas se conectam. É uma região de alta concentração de esforços, com tensões de compressão, tração e cisalhamento atuando simultaneamente. Esse é o entendimento que orienta o trabalho da BR Aço em obras de Goiânia e do DF.

Uma detalhamento inadequado do nó pode levar à falha prematura da estrutura — mesmo que as vigas e pilares individualmente estejam bem dimensionados.

## Tipos de Nó

### Nó Externo (ou de Borda)
Pilar de divisa com viga em apenas um lado. A armação superior da viga não "passa pelo pilar" — precisa ser ancorada dentro do nó com gancho ou armação adicional.

### Nó Interno
Pilar intermediário com vigas nos dois lados. As barras das vigas passam pelo nó de um lado ao outro — ancoragem mais simples, mas o nó ainda precisa de estribos adicionais.

### Nó de Topo (Coroamento)
Pilar com vigas na última laje. Região crítica para edifícios com carga de vento ou efeito de segunda ordem — requer atenção especial ao comprimento de ancoragem.

## Esforços no Nó

No nó ocorrem simultaneamente:
- **Tração** na armadura longitudinal das vigas (face tracionada)
- **Compressão** no concreto das bielas diagonais
- **Cisalhamento** nas faces do nó

Esses esforços combinados exigem:
1. Ancoragem adequada das barras de viga dentro do nó
2. Estribos de confinamento dentro do nó
3. Concreto de qualidade suficiente (fck ≥ 20 MPa, preferencialmente ≥ 25 MPa)

## Estribos de Confinamento no Nó (NBR 6118)

A NBR 6118 exige que a zona nodal contenha estribos horizontais para confinar o concreto e resistir ao cisalhamento. O espaçamento deve ser **≤ h/4** (onde h é a altura do pilar) ou **≤ 10 cm** na zona nodal.

Prática comum: dobrar a densidade de estribos no comprimento de 2d acima e abaixo da viga (d = altura útil da viga).

## Ancoragem das Barras de Viga

No nó externo, as barras superiores da viga (armadura negativa) precisam ser ancoradas com:
- **Gancho de 90° vertical** dentro do pilar (comprimento de 12φ após o dobramento)
- **Comprimento de ancoragem reta ld** disponível no pilar: se a largura do pilar for menor que ld, usar gancho

Para o nó interno, as barras passam de um lado ao outro com comprimento mínimo de transpasse.

## Erro Frequente: Viga "Pendurada" no Nó

Um erro comum em projetos simplificados é projetar vigas que chegam ao nó com barras cortadas rente à face do pilar, sem ancoragem adequada. Isso cria uma ligação articulada (rótula) — a viga não consegue transferir momento para o pilar, o que significa que a estrutura é isostática quando o projeto supõe que é contínua.

Sempre confira no projeto se o comprimento de ancoragem das barras de viga dentro dos pilares é suficiente.`,
};

export default post;
