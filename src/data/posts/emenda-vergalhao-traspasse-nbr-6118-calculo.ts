// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 158,
  slug: "emenda-vergalhao-traspasse-nbr-6118-calculo",
  category: "Normas ABNT",
  title: "Emenda de Vergalhão por Traspasse: Regras da NBR 6118 e Como Calcular o Comprimento",
  metaDescription: "Como calcular o comprimento de emenda por traspasse conforme a NBR 6118: tabelas, fatores de redução e regras.",
  keyword: "emenda vergalhão traspasse NBR 6118",
  date: "28 Mai 2026",
  summary: "Guia técnico completo sobre emenda de vergalhões por traspasse: cálculo do comprimento mínimo, fatores da NBR 6118, distribuição de emendas na seção e erros comuns em canteiro.",
  content: `## Por Que a Emenda de Vergalhão é um Ponto Crítico Estrutural

A região de emenda é, por definição, um ponto de menor resistência — duas barras que se sobrepõem transferem força por aderência com o concreto, não por solda ou conector mecânico. Comprimento insuficiente de emenda é causa documentada de colapso estrutural e está entre as falhas mais encontradas em perícias técnicas de edificações.

## Cálculo do Comprimento de Traspasse (l0)

### Fórmula NBR 6118 — item 9.5.4.2

**l0 = α1 × lb,nec**

| % de barras emendadas na mesma seção | Coeficiente α1 |
|---------------------------------------|----------------|
| ≤ 25% | 1,0 |
| ≤ 50% | 1,4 |
| > 50% | 2,0 |

**Regra prática:** nunca emendar mais de 50% das barras na mesma seção transversal. Em pilares, distribuir emendas em seções espaçadas de pelo menos l0.

### Tabela de Comprimento de Traspasse Mínimo — CA-50/C25

| Diâmetro | l0 (≤25% emendas) | l0 (≤50% emendas) |
|----------|-------------------|-------------------|
| ø8,0 mm | 49 cm | 69 cm |
| ø10,0 mm | 61 cm | 86 cm |
| ø12,5 mm | 77 cm | 107 cm |
| ø16,0 mm | 98 cm | 137 cm |
| ø20,0 mm | 123 cm | 172 cm |
| ø25,0 mm | 154 cm | 215 cm |

### Comprimento Mínimo Absoluto

Independente do cálculo: **l0 ≥ max(0,3 × α1 × lb; 15φ; 200 mm)**

## Regras Para Distribuição das Emendas

- **Vigas:** emendas da armadura de tração devem ser evitadas nas regiões de momento máximo (meio do vão). Preferir os apoios.
- **Pilares:** emendas na região de momento reduzido — no ninho de pilar (2,0 m a 3,0 m acima do pavimento).
- **Lajes:** emendas da armadura positiva no apoio, armadura negativa no terço central do vão.
- **Afastamento lateral:** barras emendadas com afastamento ≥ 4φ entre si.

## O Que Acontece Quando o Traspasse é Insuficiente

| Situação encontrada em vistoria | Consequência estrutural |
|---------------------------------|-------------------------|
| l0 = 30 cm para ø16 CA-50 (deveria ser 98 cm) | Ancoragem efetiva de apenas 30% da carga |
| 100% das barras emendadas na mesma seção | Seção enfraquecida — descontinuidade estrutural |
| Emendas no terço médio de vigas | Região de momento máximo com menor resistência |

## Como o Corte e Dobra Industrial Resolve o Problema

Quando a planilha de ferro especifica corretamente os comprimentos de corte — incluindo os comprimentos de ancoragem e traspasse — o industrializador entrega cada barra exatamente no comprimento necessário. O armador posiciona a barra conforme o projeto e a emenda acontece no comprimento correto automaticamente.

No corte manual, o armador frequentemente "aproxima" comprimentos para aproveitar a barra. Um traspasse de 98 cm vira "80 cm que é mais fácil de amarrar" — erro sistemático, silencioso e potencialmente grave.

Para projetos com diâmetros grandes (ø20 mm a ø40 mm), onde os comprimentos de traspasse superam 1,5 m, o corte e dobra industrial é particularmente vantajoso: a barra chega com comprimento preciso e documentação de rastreabilidade.`,
};

export default post;
