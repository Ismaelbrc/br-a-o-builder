// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 100,
  slug: "pilares-de-concreto-armado-tipos-e-detalhamento",
  category: "Projeto Estrutural",
  title: "Pilares de Concreto Armado: Tipos, Dimensionamento Básico e Detalhamento",
  metaDescription: "Tipos de pilar de concreto armado — intermediário, de canto, de divisa — dimensionamento e detalhamento pela NBR 6118.",
  keyword: "pilares concreto armado tipos detalhamento",
  date: "07 Abr 2026",
  summary: "Tipos de pilares de concreto armado, dimensionamento básico por taxa de armação e detalhamento de barras e estribos conforme NBR 6118.",
  content: `## O que é um Pilar em Concreto Armado?

Pilar é um elemento estrutural predominantemente comprimido, com comprimento muito maior que as dimensões da seção transversal. Ele recebe as cargas das vigas e lajes e as transmite para as fundações. É esse tipo de detalhamento que a BR Aço executa em todo fornecimento de armadura para pilares em Goiânia e no restante de Goiás.

Em concreto armado, o pilar é formado por:
- **Concreto** (resistência à compressão)
- **Barras longitudinais** (resistência à tração e ao momento fletor)
- **Estribos** (confinamento do concreto e resistência ao cisalhamento)

## Classificação dos Pilares por Posição

| Tipo | Localização | Característica |
|---|---|---|
| Pilar intermediário | Interior da edificação | Carga centrada, mais simples |
| Pilar de divisa | Borda do edifício | Viga em apenas um lado → excentricidade |
| Pilar de canto | Canto do edifício | Vigas em duas direções → momento biaxial |
| Pilar-parede | Pilar estreito e longo (b ≤ h/4) | Comportamento de parede, regras especiais |

## Dimensões Mínimas (NBR 6118)

- Menor dimensão da seção: **≥ 19 cm** (regra geral)
- Para pilares em paredes: pode ser reduzido a **12 cm** com verificações específicas
- Seção mínima absoluta: **≥ 360 cm²**

## Taxa de Armação Longitudinal

A NBR 6118 exige que a armação longitudinal dos pilares esteja entre:

- **Mínimo:** 0,4% da área bruta da seção (Ac)
- **Máximo:** 8% de Ac (para evitar congestionamento)
- **Prático usual:** 1% a 4%

Exemplo: pilar 20×50 cm → Ac = 1.000 cm²
- As,mín = 0,4% × 1.000 = 4,0 cm²
- As,máx = 8,0% × 1.000 = 80,0 cm²

## Estribos: Espaçamento Máximo

O espaçamento máximo entre estribos em pilares (NBR 6118 item 18.3.3.2) é o menor de:

- 20 × φl (diâmetro da barra longitudinal)
- Menor dimensão da seção
- 30 cm

Exemplo: barra longitudinal φ12,5 mm em pilar 20×50 cm:
- 20 × 12,5 = 250 mm = 25 cm
- Menor dimensão = 20 cm ← **governa**
- 30 cm

Portanto, espaçamento máximo de estribos = **20 cm**.

## Detalhamento Mínimo da Seção

- Mínimo 4 barras longitudinais (uma em cada canto)
- Espaçamento livre entre barras: ≥ 2 cm e ≥ 1,2 × Dmax do agregado
- Espaçamento livre máximo entre barras adjacentes: ≤ 20 cm (para garantir ação conjunta)
- Ganchos dos estribos alternados (no mínimo 1 gancho por face) entre estribos consecutivos

## Pilar-Parede: Regra Especial

Quando b/h ≤ 1/4, o elemento é chamado pilar-parede e requer:
- Armadura distribuída nas faces laterais (armadura de pele)
- Estribos horizontais com função de costura
- Verificação à flambagem no sentido da espessura`,
};

export default post;
