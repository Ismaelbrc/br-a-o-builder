// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 126,
  slug: "selecao-sistema-estrutural",
  category: "Projeto Estrutural",
  title: "Como Escolher o Sistema Estrutural: Pórticos, Paredes e Laje Plana",
  metaDescription: "Como selecionar o sistema estrutural: pórticos (vigas e pilares), paredes estruturais, laje plana, laje plana protendida — critérios técnicos e econômicos.",
  keyword: "seleção sistema estrutural",
  date: "21 Mai 2026",
  summary: "Critérios para escolha do sistema estrutural: pórticos, paredes, laje plana e sistemas mistos — vantagens, limitações e quando usar cada um.",
  content: `## O que Determina a Escolha do Sistema Estrutural?

O sistema estrutural define como as cargas são transferidas da laje até as fundações. A escolha influencia o custo, o prazo de execução, a flexibilidade de uso e a durabilidade da edificação.

Os principais fatores a considerar são:
- Altura e número de pavimentos
- Tipo de uso (residencial, comercial, industrial)
- Planta livre vs planta rígida
- Vãos entre apoios
- Orçamento disponível
- Disponibilidade de mão de obra especializada

## Sistemas Estruturais Principais

### 1. Sistema de Pórticos (Vigas + Pilares)

O mais tradicional no Brasil. As cargas das lajes são transferidas às vigas, que as transferem aos pilares e, finalmente, às fundações.

**Características:**
- Vigas e pilares formam pórticos resistentes às cargas horizontais e verticais
- Alta flexibilidade de posicionamento de paredes (paredes não estruturais)
- Vãos de laje: 4 a 8 m
- Altura de vigas: L/10 a L/15 (L = vão)

**Indicado para:**
- Edifícios residenciais de qualquer altura
- Obras com planta variável entre pavimentos
- Mão de obra convencional (sem especialização)

**Limitação:**
- Vigas aparentes no teto limitam pé-direito útil
- Custo de fôrma relativamente alto

### 2. Paredes Estruturais

As cargas são transferidas por paredes de concreto armado (ou alvenaria estrutural), sem vigas e pilares convencionais.

**Paredes de concreto armado moldadas in loco:**
- Espessura: 12 a 20 cm
- fck ≥ 20 MPa (paredes de concreto — ABNT NBR 16055)
- Planta rígida — paredes não podem ser removidas após execução

**Paredes de alvenaria estrutural:**
- Blocos de concreto ou cerâmicos estruturais
- Altura: até 12 pavimentos (geralmente até 15 m)
- Não requer mão de obra de concreto armado especializada

**Indicado para:**
- Edifícios com planta repetida (flats, habitação social)
- Obras de alto volume e prazo curto
- Regiões com mão de obra de concreto armado escassa

**Limitação:**
- Planta rígida — dificulta mudanças de uso
- Paredes não podem ser removidas

### 3. Laje Plana (sem vigas)

Laje apoiada diretamente nos pilares. Tratado em artigo específico.

**Indicado para:**
- Edifícios comerciais e de escritórios com planta livre
- Garagens
- Vãos regulares de 6 a 9 m

### 4. Laje Plana Protendida

Laje plana com cabos de protensão — permite vãos maiores com espessura menor.

**Indicado para:**
- Escritórios, shoppings, hospitais com vãos 9 a 14 m
- Exigência de pé-direito máximo

### 5. Sistema Misto (Pórticos + Paredes)

Combinação de pilares, vigas e núcleos rígidos de concreto (caixas de elevadores, escadas). Os núcleos resistem às forças horizontais (vento).

**Indicado para:**
- Edifícios altos (> 20 pavimentos)
- Edifícios em região de ventos intensos

## Critérios de Escolha por Tipo de Obra

| Tipo de obra | Sistema recomendado |
|-------------|---------------------|
| Casa residencial 1–2 pavimentos | Pórtico simples (laje treliçada ou maciça) |
| Edifício residencial 3–15 pav. | Pórticos ou paredes estruturais |
| Edifício comercial / escritórios | Laje plana ou laje plana protendida |
| Habitação social em larga escala | Paredes de concreto (ABNT NBR 16055) |
| Galpão industrial | Pré-moldados (alveolar + vigas pré) |
| Edifício alto > 20 andares | Sistema misto com núcleos rígidos |

## Comparativo Econômico Orientativo

| Sistema | Consumo de concreto | Consumo de aço | Custo de fôrma | Prazo |
|---------|--------------------|-----------------|--------------|----|
| Pórtico convencional | Médio | Médio | Alto | Médio |
| Paredes de concreto | Alto | Médio | Baixo (fôrma sistêmica) | Rápido |
| Laje plana | Médio-alto | Médio-alto | Baixo | Médio |
| Laje plana protendida | Médio | Alto | Baixo | Rápido |

A decisão final é sempre do engenheiro calculista, que analisa a estrutura completa incluindo as cargas, os ventos e as condições do solo.`,
};

export default post;
