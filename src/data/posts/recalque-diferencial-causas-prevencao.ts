// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 106,
  slug: "recalque-diferencial-causas-prevencao",
  category: "Fundação",
  title: "Recalque Diferencial: Causas, Manifestações e Como Prevenir",
  metaDescription: "O que é recalque diferencial, por que ocorre, como identificar suas manifestações e como prevenir com projeto adequado.",
  keyword: "recalque diferencial fundação causas",
  date: "14 Abr 2026",
  summary: "O que é recalque diferencial, por que ocorre, como identificar fissuras e desníveis e como prevenir com projeto e execução adequados.",
  content: `## O que é Recalque?

Recalque é o afundamento (assentamento vertical) de uma fundação quando o solo se deforma sob a carga aplicada. Até certo ponto, o recalque é normal e previsto no projeto — o problema ocorre quando diferentes fundações da mesma edificação recalcam de forma desigual.

**Recalque uniforme:** todas as fundações afundam igualmente → a estrutura desce, mas não fissura (raridade na prática).

**Recalque diferencial:** fundações diferentes afundam por quantidades diferentes → a estrutura distorce, gerando esforços adicionais não previstos no cálculo, com consequente fissuração.

## Causas do Recalque Diferencial

### Solo heterogêneo
O mais comum. O solo tem resistências diferentes nos pontos de cada fundação — comum em terrenos com variação lateral de solo ou com aterros irregulares.

### Cargas desiguais entre pilares
Pilar interno com 1.000 kN ao lado de pilar de borda com 200 kN, ambos em sapatas num solo uniforme — mesmo que proporcionalmente corretas, as deformações podem ser diferentes pela não-linearidade do solo.

### Construção vizinha posterior
Obra adjacente que escava ou carrega o solo altera as tensões no terreno da edificação existente.

### Variação do lençol freático
Rebaixamento do lençol comprime solos argilosos saturados (adensamento) → recalque lento mas expressivo em argilas moles.

### Vazamento de água ou esgoto
Amolece o solo localizado sob uma fundação específica.

## Como Identificar Recalque Diferencial na Estrutura

| Manifestação | O que pode indicar |
|---|---|
| Fissuras diagonais nas alvenarias (45°) | Distorção angular entre apoios |
| Fissuras em janelas e portas (diagonal no canto) | Deformação da estrutura ao redor da abertura |
| Portas que "empancam" ou deixam de vedar | Distorção do quadro pela deformação estrutural |
| Desnível visível no piso ou no telhado | Recalque concentrado em um ponto |
| Separação entre fachada e estrutura | Recalque diferencial entre estrutura e alvenaria |

## Limites Normativos (NBR 6118)

A NBR 6118 limita a distorção angular (Δ/L) em função do tipo de estrutura e do revestimento:

- **Estruturas com vedação em alvenaria de tijolo:** Δ/L ≤ 1/600
- **Estruturas com revestimento frágil (cerâmica):** Δ/L ≤ 1/1000
- **Danos estruturais visíveis:** Δ/L > 1/150

## Como Prevenir

1. **Sondagem adequada**: laudo SPT em todos os cantos do terreno antes do projeto
2. **Fundação uniforme**: usar o mesmo tipo de fundação para toda a edificação (misturar sapata e estaca aumenta o risco de diferencial)
3. **Junta de dilatação**: separar blocos de cargas muito diferentes (torre + garagem)
4. **Vigas de equilíbrio** (baldrames): redistribuem recalques diferenciais entre vizinhos`,
};

export default post;
