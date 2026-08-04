// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 38,
  slug: "taxa-armadura-laje-viga-pilar",
  category: "Vergalhões",
  title: "Taxa de Armadura: Quanto Aço Usar em Laje, Viga e Pilar?",
  metaDescription: "Taxas de armadura mínima e máxima para laje, viga e pilar segundo a NBR 6118, e como definir a quantidade de vergalhão.",
  keyword: "taxa de armadura",
  date: "20 Nov 2025",
  summary: "A NBR 6118 define taxas mínimas e máximas de armadura para cada elemento estrutural. Entender esses limites ajuda a verificar se o projeto está correto e evitar sub ou superarmação.",
  content: `## O Que É Taxa de Armadura?

A taxa de armadura (ρ) é a relação entre a **área de aço** e a **área da seção transversal de concreto**: A equipe da BR Aço reforça esse ponto em cada orçamento fechado em Goiânia e em Goiás.

**ρ = As / Ac**

Onde:
- As = área da seção de aço (cm²)
- Ac = área da seção de concreto (cm²)

A **ABNT NBR 6118** estabelece limites mínimos e máximos para essa taxa em cada tipo de elemento estrutural, evitando tanto a subarmação (peça frágil) quanto a superarmação (ruptura súbita do concreto).

## Taxas de Armadura por Elemento

### Laje Maciça (armadura principal)
| Limite | Taxa (ρ) |
|---|---|
| Mínimo | 0,15% (CA-50) |
| Máximo | 1,5% (recomendado) |

### Viga (armadura longitudinal de tração)
| Limite | Taxa (ρ) |
|---|---|
| Mínimo | 0,15% da seção bruta |
| Máximo | 4% (limite absoluto NBR 6118) |

### Pilar (armadura longitudinal)
| Limite | Taxa (ρ) |
|---|---|
| Mínimo | 0,4% da área do pilar |
| Máximo | 8% (CA-50) |

> Valores de referência para CA-50. Consulte sempre o engenheiro calculista para valores de projeto.

## Por Que Existem Limites Mínimos?

Sem armadura mínima, a peça de concreto pode apresentar:
- Fissuração excessiva por retração
- Ruptura frágil e sem aviso após a fissuração
- Comportamento imprevisível sob cargas de serviço

## Por Que Existem Limites Máximos?

Com armadura excessiva:
- O concreto não consegue envolver todas as barras (problemas de concretagem)
- Antes de o aço escoar, o concreto comprimido estoura — ruptura explosiva
- Aumento de custo sem melhoria proporcional de resistência

## Exemplo Prático: Viga 20×50 cm

Seção bruta: 20 × 50 = 1.000 cm²
- Armadura mínima: 1.000 × 0,15% = **1,5 cm²** → 2 barras φ 10 mm (As = 1,57 cm²) ✓
- Armadura máxima: 1.000 × 4% = **40 cm²** → valor raramente atingido em projeto normal

## Corte e Dobra nas Dimensões do Projeto

A BR Aço processa o aço exatamente como especificado no projeto estrutural — bitola, comprimento e dobramento corretos para cada elemento. Evite retrabalho e perda de material: envie a planilha de ferro e receba as peças prontas para montagem.`,
};

export default post;
