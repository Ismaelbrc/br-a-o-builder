// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 116,
  slug: "laje-nervurada-guia-completo",
  category: "Projeto Estrutural",
  title: "Laje Nervurada: Guia Completo para Engenheiros",
  metaDescription: "Tudo sobre laje nervurada: tipos, vigotas, nervos, espaçamentos, armação, vantagens e quando usar segundo a NBR 6118. Tabelas técnicas e detalhamento.",
  keyword: "laje nervurada",
  date: "21 Mai 2026",
  summary: "Guia técnico completo sobre laje nervurada: tipos (unidirecional e bidirecional), vigotas, nervos, armação, cobrimento e comparativo com outros sistemas.",
  content: `## O que é Laje Nervurada?

Laje nervurada é o sistema estrutural composto por nervuras (nervos) espaçadas regularmente, preenchidas com elementos de enchimento — blocos cerâmicos, EPS ou lajotas de concreto — que não contribuem estruturalmente. A zona de compressão é garantida pela mesa (capa) de concreto sobre os enchimentos. Na prática, a BR Aço aplica esse critério em obras de Goiânia, Aparecida de Goiânia e do DF.

A NBR 6118:2014, item 13.2.4, define laje nervurada como aquela com espaçamento entre eixos de nervuras não superior a 65 cm e altura total inferior a 30 cm.

## Tipos de Laje Nervurada

### Laje Nervurada Unidirecional
Nervuras em uma única direção. Indicada para vãos retangulares com relação comprimento/largura ≥ 2:1. Comporta-se como conjunto de vigas T paralelas.

### Laje Nervurada Bidirecional
Nervuras cruzadas nas duas direções, formando grelha. Indicada para painéis próximos do quadrado (relação < 2:1). Maior rigidez e melhor distribuição de cargas.

### Laje Treliçada
Subcategoria com vigotas pré-moldadas de concreto e treliças de aço incorporadas. Detalhada em artigo específico.

## Geometria: Dimensões Usuais

| Parâmetro | Valor usual | Limite NBR 6118 |
|-----------|-------------|-----------------|
| Espessura da mesa (capa) | 5 a 7 cm | ≥ 4 cm (sem tráfego) / ≥ 5 cm (com tráfego) |
| Largura do nervo (bw) | 8 a 15 cm | ≥ 5 cm |
| Altura total | 12 a 25 cm | — |
| Espaçamento entre eixos dos nervos | 40 a 65 cm | ≤ 65 cm |

## Elementos de Enchimento

| Tipo | Material | Observação |
|------|----------|------------|
| Bloco cerâmico | Cerâmica | Mais comum em GO — fôrma permanente |
| Bloco de EPS | Poliestireno expandido | Mais leve, menor absorção de água |
| Lajota de concreto | Concreto simples | Alta durabilidade, maior peso |
| Fôrma removível | Plástico/borracha | Nervos moldados in loco sem enchimento permanente |

Os blocos cerâmicos e de EPS não são computados na resistência estrutural — servem apenas de fôrma e reduzem o peso próprio da laje.

## Armação da Laje Nervurada

### Armação dos Nervos (armadura principal)
Cada nervo comporta-se como viga T. A armação positiva (parte inferior, região de tração em vão) é colocada dentro da seção do nervo. Diâmetro mínimo: 6,3 mm (CA-60) ou 8 mm (CA-50).

### Armação da Mesa (capa)
Armadura construtiva para controle de fissuração por retração e distribuição de cargas concentradas.

**Taxa mínima da mesa (NBR 6118):**
- ≥ 0,9 cm²/m em ambas as direções
- Espaçamento máximo: 33 cm

### Cobrimento Nominal nos Nervos

| Classe de agressividade | Cobrimento nominal (vigas/lajes) |
|------------------------|----------------------------------|
| I — Fraca (interior seco) | 25 mm |
| II — Moderada (urbano) | 35 mm |
| III — Forte (marinha/respingos) | 45 mm |
| IV — Muito forte (imersão) | 65 mm |

## Quando Usar Laje Nervurada?

| Situação | Indicação |
|----------|-----------|
| Vãos de 5 a 9 m | ✅ Ideal — otimiza peso e materiais |
| Carga distribuída ≤ 5 kN/m² | ✅ Padrão residencial e comercial |
| Vãos > 9 m | ⚠️ Avaliar protendido ou outros sistemas |
| Cargas concentradas pesadas | ❌ Prefer laje maciça + vigas de distribuição |
| Piso industrial com tráfego de veículos | ❌ Não recomendado |

## Comparativo: Laje Nervurada vs Laje Maciça

| Critério | Nervurada | Maciça |
|----------|-----------|--------|
| Peso próprio | Menor | Maior |
| Consumo de concreto | Menor | Maior |
| Execução | Mais demorada (blocos) | Mais simples |
| Cargas concentradas | Menos adequada | Mais adequada |
| Vãos longos (> 6 m) | Mais econômica | Menos econômica |

A escolha entre sistemas deve ser definida pelo engenheiro calculista após análise do vão, cargas e condições de execução da obra.`,
};

export default post;
