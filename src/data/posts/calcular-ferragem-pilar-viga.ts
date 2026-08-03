// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 48,
  slug: "calcular-ferragem-pilar-viga",
  category: "Dicas Técnicas",
  title: "Como Calcular a Ferragem de Pilar e Viga: Passo a Passo",
  metaDescription: "Aprenda a estimar a quantidade de vergalhão em pilares e vigas. Fórmulas práticas para armadura longitudinal e estribos com exemplos reais de obra.",
  keyword: "calcular ferragem pilar viga",
  date: "10 Dez 2025",
  summary: "Pilares e vigas concentram a maior parte do aço estrutural de uma edificação. Veja como calcular a armadura longitudinal e os estribos com fórmulas práticas e exemplos numéricos.",
  content: `## Pilares: Armadura Longitudinal

A armadura longitudinal de pilar resiste à compressão e à flambagem. O dimensionamento segue a NBR 6118, mas para estimativa inicial você pode usar:

### Fórmula de Estimativa

**As = ρ × b × h × 100** (cm²)

Onde:
- ρ = taxa de armadura (use 1% a 2% para estimativa)
- b, h = dimensões do pilar em centímetros

### Exemplo: Pilar 20×20 cm

As = 0,01 × 20 × 20 = **4,0 cm²**

Barras possíveis: 4 barras φ 12,5 mm (As = 4 × 1,227 = 4,91 cm²) ✓

### Altura da barra longitudinal

Comprimento = **pé-direito + comprimento de emenda** (≈ 50× o diâmetro)

Para pé-direito de 3 m e φ 12,5 mm:
Comprimento ≈ 3,00 + 0,50 + (50 × 0,0125) = 3,00 + 0,50 + 0,625 = **4,125 m por barra**

## Pilares: Estribos

Os estribos envolvem as barras longitudinais e resistem ao cisalhamento. Para pilar 20×20 cm com 4 barras nos cantos:

**Perímetro do estribo = 2 × (b + h) + ganchos**
= 2 × (18 + 18) + 2 × (10 × φ) para gancho de 135°
= 72 + 25 = **~97 cm por estribo** (use 1 m para arredondamento)

Espaçamento de estribos: conforme projeto (tipicamente 10 a 20 cm)
Para pé-direito de 3 m com espaçamento de 15 cm: **20 estribos × 1 m = 20 m de φ 6,3 mm**

## Vigas: Armadura Longitudinal

Para vigas de concreto armado, a armadura longitudinal de tração fica na face tracionada (geralmente a inferior no vão e a superior no apoio).

### Estimativa simplificada

As mínimo = 0,15% × b × d (cm²)

Para viga 20×50 cm (d ≈ 44 cm):
As mín = 0,0015 × 20 × 44 = **1,32 cm²** → 2 barras φ 10 mm

Na prática, vigas de edifícios residenciais usam de **2 a 4 barras φ 12,5 a φ 16 mm** na armadura principal.

## Vigas: Estribos

Estribos de viga 20 cm de largura:
Perímetro ≈ 2 × (largura interna + altura interna) + ganchos
≈ 2 × (17 + 44) + 0,25 = **~1,47 m por estribo**

Espaçamento: d/2 = 22 cm (máximo por norma em região de cisalhamento)
Para viga de 4 m: aproximadamente **20 estribos × 1,5 m = 30 m de φ 6,3 mm**

## Da Estimativa ao Projeto Formal

Esses cálculos são estimativas para orçamento. O dimensionamento real exige análise estrutural completa pelo engenheiro calculista, considerando cargas, combinações e verificações de estado limite.

Com o projeto em mãos, envie para o corte e dobra da BR Aço e receba as peças prontas para montagem em **até 48h em Goiânia**.`,
};

export default post;
