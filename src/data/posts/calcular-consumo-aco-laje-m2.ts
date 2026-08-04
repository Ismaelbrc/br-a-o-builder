// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 47,
  slug: "calcular-consumo-aco-laje-m2",
  category: "Dicas Técnicas",
  title: "Consumo de Aço por m² de Laje: Tabela de Referência",
  metaDescription: "Tabela de consumo de aço por m² para lajes maciças e treliçadas em kg/m². Referência para orçamento de obras residenciais e comerciais com vergalhão CA-50.",
  keyword: "consumo de aço por m2 de laje",
  date: "08 Dez 2025",
  summary: "O consumo de aço em laje varia de 8 a 20 kg/m² dependendo do tipo, vão e carga. Veja a tabela de referência para laje maciça e treliçada e como usar no orçamento da obra.",
  content: `## Consumo de Aço em Laje: Por Que Varia Tanto?

O consumo de vergalhão em laje depende de:
- **Tipo de laje:** maciça, treliçada, nervurada, plana
- **Vão entre apoios:** quanto maior o vão, mais aço
- **Carga de utilização:** residencial (1,5 kN/m²) vs. comercial (3 kN/m²) vs. industrial
- **Espessura da laje:** determinada pelo engenheiro
- **fck do concreto:** concreto mais resistente permite reduzir a armadura. A BR Aço trata esse tema com atenção redobrada em cada obra atendida em Goiânia e em Goiás.

## Tabela: Consumo de Aço por m² de Laje (Estimativa)

### Laje Maciça CA-50

| Vão livre | Espessura | Consumo (kg/m²) |
|---|---|---|
| Até 3 m | 8 – 10 cm | 8 – 12 |
| 3 m a 4 m | 10 – 12 cm | 10 – 15 |
| 4 m a 5 m | 12 – 16 cm | 14 – 20 |
| Acima de 5 m | 16 cm+ | 18 – 30+ |

### Laje Treliçada (aço total: treliças + armadura complementar)

| Vão livre | Altura total | Consumo (kg/m²) |
|---|---|---|
| Até 3,5 m | 12 – 14 cm | 7 – 10 |
| 3,5 m a 5 m | 14 – 20 cm | 9 – 14 |
| 5 m a 6 m | 20 – 25 cm | 12 – 18 |

> Valores de referência para obras residenciais com carga de 1,5 kN/m². O projeto estrutural define os valores reais.

## Como Usar Esta Tabela no Orçamento

1. Identifique o vão livre de cada painel de laje
2. Classifique como residencial ou comercial
3. Use o consumo médio da tabela
4. Multiplique pela área total de cada painel
5. Some todos os painéis para a quantidade total estimada
6. Adicione 5% de margem para perdas e ajustes

### Exemplo Prático

Casa com 3 painéis de laje:
- Painel A: 4 m × 3 m = 12 m² → vão 4 m → 14 kg/m² → **168 kg**
- Painel B: 5 m × 4 m = 20 m² → vão 5 m → 17 kg/m² → **340 kg**
- Painel C: 3 m × 3 m = 9 m² → vão 3 m → 11 kg/m² → **99 kg**
- Total: **607 kg + 5% = ~637 kg**

## Da Estimativa ao Pedido Preciso

A tabela acima serve para orçamento inicial. Para o pedido real, você precisa da **planilha de ferro** do engenheiro calculista — que determina cada barra com precisão.

Com a planilha em mãos, envie para a BR Aço e receba o orçamento de corte e dobra em até 2 horas.`,
};

export default post;
