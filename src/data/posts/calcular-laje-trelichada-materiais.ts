// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 58,
  slug: "calcular-laje-trelichada-materiais",
  category: "Treliças",
  title: "Como Calcular os Materiais para Laje Treliçada",
  metaDescription: "Aprenda a calcular treliças metálicas, lajotas, concreto e aço complementar para laje treliçada. Fórmulas práticas para orçamento e pedido de material.",
  keyword: "calcular laje treliçada materiais",
  date: "30 Dez 2025",
  summary: "Para orçar uma laje treliçada você precisa calcular treliças, lajotas ou EPS, aço complementar e concreto de capeamento. Veja as fórmulas e um exemplo completo para 50 m².",
  content: `## Componentes da Laje Treliçada

Uma laje treliçada com lajotas cerâmicas ou EPS é composta por:

1. **Treliças metálicas** (TR-08, TR-10 ou TR-12) — a estrutura principal
2. **Lajotas ou blocos EPS** — enchimento entre as nervuras
3. **Armadura complementar** — barras perpendiculares às treliças
4. **Concreto de capeamento** — camada superior (5 a 7 cm)
5. **Escoramento** — apoio temporário durante a cura

## Passo 1: Escolha o Tipo de Treliça

A escolha depende do vão e da carga. Tabela simplificada:

| Modelo | Altura (cm) | Vão máximo | Carga |
|---|---|---|---|
| TR-08 | 8 | Até 3,5 m | Residencial |
| TR-10 | 10 | Até 4,5 m | Residencial/comercial |
| TR-12 | 12 | Até 5,5 m | Comercial |

## Passo 2: Calcular a Quantidade de Treliças

Treliças são posicionadas com espaçamento de **40 cm a 50 cm** (conforme o módulo da lajota).

**Número de treliças = largura do painel ÷ espaçamento**

Para um painel de 4 m de largura com espaçamento de 0,40 m:
= 4 ÷ 0,40 = **10 treliças**

**Comprimento de cada treliça** = vão livre + 2 × apoio (≈ 10 cm cada lado)
Para vão de 4 m: 4,00 + 0,20 = **4,20 m**

## Passo 3: Calcular as Lajotas

**Lajotas por m²** = 1 / (módulo da lajota em m²)
Para lajota 8×25 cm (módulo 0,40 × 0,25): 1 / (0,40 × 0,25) = **10 lajotas/m²**

## Passo 4: Calcular a Armadura Complementar

Barras transversais (perpendiculares às treliças), geralmente φ 5 mm CA-60, espaçadas de 25 a 30 cm:

**Quantidade de barras** = comprimento do painel ÷ espaçamento
**Comprimento de cada barra** = largura do painel + 2 × ancoragem (10 cm)

## Passo 5: Calcular o Concreto de Capeamento

**Volume de concreto (m³)** = área × espessura da capa

Para capa de 5 cm sobre 50 m²:
= 50 × 0,05 = **2,5 m³** de concreto

Na prática, adicione 10% de folga: **2,75 m³**.

## Exemplo Completo: Painel 5 m × 10 m (50 m²)

- **Treliças TR-10** (espaçamento 40 cm): 10 m ÷ 0,40 = 25 treliças × 5,20 m = 130 m
- **Lajotas 8×25**: 50 m² × 10 = 500 lajotas
- **Concreto (capa 5 cm)**: 50 × 0,05 × 1,10 = 2,75 m³
- **Armadura complementar φ 5**: 5 m ÷ 0,25 = 20 barras × 10,20 m = 204 m

## Peça as Treliças Prontas pela BR Aço

A BR Aço fornece treliças TR-08, TR-10 e TR-12 no comprimento exato da sua laje, com corte e identificação. Elimine o desperdício de pontas e o retrabalho na obra. Solicite orçamento via WhatsApp.`,
};

export default post;
