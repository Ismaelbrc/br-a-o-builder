// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 118,
  slug: "armacao-de-escadas-concreto-armado",
  category: "Projeto Estrutural",
  title: "Armação de Escadas em Concreto Armado: Tipos e Detalhamento",
  metaDescription: "Como armar escadas de concreto armado: tipos estruturais, lances, patamares, armadura principal e de distribuição, ancoragem e junta reentrante.",
  keyword: "armação de escadas concreto armado",
  date: "21 Mai 2026",
  summary: "Detalhamento completo da armação de escadas: tipos estruturais, armadura de lance e patamar, distribuição, ancoragem e junta reentrante.",
  content: `## Tipos Estruturais de Escadas

### 1. Escada em Lance Simples (Laje Inclinada)
Lance como laje inclinada apoiada nos dois extremos — na viga do piso inferior e na viga do patamar ou piso superior. Tipo mais comum em edifícios residenciais.

**Comportamento:** laje inclinada como laje simplesmente apoiada ou com continuidade. Tração principal na face inferior.

### 2. Escada com Patamar Intermediário
Dois lances com patamar entre eles, apoiado nas paredes laterais ou em viga específica.

### 3. Escada em Balanço (Engastada)
Cada degrau engastado na viga ou parede lateral. Estruturalmente mais complexa — requer projeto específico.

### 4. Escada com Viga de Bordo
Lajes dos degraus apoiadas em vigas inclinadas laterais. Comum em escadas externas.

## Geometria dos Degraus

**Fórmula de Blondel:** 2h + b = 63 a 65 cm

| Uso | Altura do espelho (h) | Largura do piso (b) |
|-----|----------------------|---------------------|
| Residencial | 17 a 18 cm | 28 a 29 cm |
| Comercial/público | 16 a 17 cm | 30 a 32 cm |
| Emergência (NBR 9077) | ≤ 18 cm | ≥ 25 cm |

## Cargas de Projeto (NBR 6120:2019)

| Uso | Carga acidental |
|-----|----------------|
| Escadas residenciais | 2,5 kN/m² |
| Escadas de uso público | 5,0 kN/m² |

Peso próprio da escada (concreto + degraus): 4 a 6 kN/m² na projeção horizontal.

## Armação do Lance

### Armadura Principal
Na face inferior da laje inclinada, paralela ao comprimento do lance.

### Armadura de Distribuição
Perpendicular à principal, face inferior. Taxa mínima: 20% da armadura principal, ≥ 0,9 cm²/m.

### Cobrimento Nominal
Ambiente interno (classe I): 25 mm.

### Tabela Orientativa — Lance Residencial (CA-50)

| Vão (m) | Espessura | Armadura principal | Espaçamento |
|---------|-----------|--------------------|-------------|
| 2,5 m | 10 cm | φ 8 | 15 cm |
| 3,0 m | 12 cm | φ 10 | 15 cm |
| 3,5 m | 13 cm | φ 10 | 12,5 cm |
| 4,0 m | 15 cm | φ 12,5 | 15 cm |

*Valores orientativos para cargas residenciais. Confirmar com calculista.*

## Armação do Patamar

Laje horizontal apoiada ou contínua. Para patamares residenciais de até 1,5 m de vão: φ 8 a 10 mm CA-50, espaçamento 15 cm.

## Ancoragem nos Apoios

- **Apoio inferior (viga de piso):** ancoragem com lb,ef ≥ 20 × φ ou gancho
- **Apoio superior:** mesmo critério

## Junta Lance-Patamar — Detalhe Crítico

A ligação entre a laje inclinada e a laje horizontal cria canto reentrante. É obrigatório dispor **armadura diagonal no vértice interno** para evitar fissuração diagonal.

**Detalhe:**
- 2 a 3 barras diagonais de φ 10 ou 12,5 mm a 45°
- Comprimento de cada barra: 50 cm de cada lado do vértice

## Verificações Finais

1. Cobrimento nominal em todas as faces expostas
2. Armadura principal no sentido do vão
3. Distribuição transversal ≥ 20% da principal
4. Ancoragem nos apoios ≥ lb,ef
5. Barras diagonais nas juntas reentrantes
6. Diâmetro máximo das barras ≤ h/8`,
};

export default post;
