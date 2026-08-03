// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 127,
  slug: "cargas-em-estruturas-como-calcular",
  category: "Projeto Estrutural",
  title: "Cargas em Estruturas de Concreto Armado: Como Calcular e Combinar",
  metaDescription: "Como calcular cargas permanentes, variáveis e acidentais em estruturas de concreto armado segundo a NBR 6120:2019 e NBR 6118:2014. Tabelas de valores.",
  keyword: "cargas em estruturas concreto armado",
  date: "21 Mai 2026",
  summary: "Cargas em estruturas: permanentes (peso próprio, revestimento), variáveis (uso), acidentais (vento) — valores da NBR 6120 e combinações de projeto.",
  content: `## Por que Calcular Cargas Corretamente?

O cálculo de cargas é a entrada de todo projeto estrutural. Subestimar cargas leva a estruturas inseguras; superestimar aumenta custo desnecessariamente. As cargas são classificadas conforme a ABNT NBR 6118:2014 e quantificadas pela NBR 6120:2019.

## Classificação das Cargas

### Cargas Permanentes (g)
Atuam de forma contínua e com magnitude praticamente constante ao longo da vida útil da estrutura.

**Exemplos:** peso próprio do concreto, revestimentos, impermeabilização, paredes fixas, instalações permanentes.

### Cargas Variáveis (q)
Atuam intermitentemente ou com magnitude variável — cargas de uso, vento, temperatura.

**Exemplos:** pessoas, mobiliário, equipamentos, veículos, cargas de construção.

### Cargas Acidentais
Cargas excepcionais — impacto de veículo, explosão, sismo.

## Peso Próprio dos Materiais (NBR 6120:2019)

| Material | Peso específico (kN/m³) |
|----------|------------------------|
| Concreto armado | 25,0 |
| Concreto simples | 24,0 |
| Argamassa de cimento | 21,0 |
| Alvenaria de tijolo cerâmico | 13,0 a 19,0 |
| Alvenaria de bloco de concreto | 14,0 a 17,0 |
| Cerâmica (piso + contrapiso) | 1,0 a 1,5 kN/m² |
| Madeira | 6,0 a 11,0 |
| Aço | 78,5 |

## Cargas de Uso por Tipo de Ambiente (NBR 6120:2019, Tabela 3)

| Uso | Carga variável (kN/m²) |
|-----|----------------------|
| Dormitórios residenciais | 1,5 |
| Salas, corredores, banheiros residenciais | 2,0 |
| Escritórios sem partições pesadas | 2,0 |
| Escritórios com partições (divisórias) | 3,0 |
| Salas de reunião, auditórios | 3,0 |
| Bares, restaurantes, halls de hotel | 3,0 |
| Escadas residenciais | 2,5 |
| Escadas de uso público | 5,0 |
| Corredores de uso público | 3,0 a 5,0 |
| Garagens para carros de passeio | 2,5 |
| Garagens para veículos pesados | 5,0 |
| Cobertura com acesso de pessoas | 2,0 |
| Cobertura sem acesso (manutenção) | 0,5 |
| Biblioteca — salas de leitura | 3,0 |
| Biblioteca — depósito de livros | 6,0 a 9,0 |
| Lojas e comércio | 3,0 a 5,0 |
| Hospitais — quartos | 2,0 |
| Hospitais — corredores e salas | 3,0 |

## Como Calcular o Peso Próprio de uma Laje

**Peso próprio da laje (kN/m²) = espessura (m) × 25 kN/m³**

| Espessura | Peso próprio |
|-----------|-------------|
| 8 cm | 2,0 kN/m² |
| 10 cm | 2,5 kN/m² |
| 12 cm | 3,0 kN/m² |
| 15 cm | 3,75 kN/m² |
| 20 cm | 5,0 kN/m² |

**Exemplo de carga total em laje residencial:**
- Peso próprio (laje 10 cm): 2,5 kN/m²
- Revestimento (cerâmica + contrapiso): 1,2 kN/m²
- Paredes divisórias (NBR 6120 permite equivalente): 1,0 kN/m²
- Carga variável (uso residencial): 1,5 kN/m²
- **Total característico: 6,2 kN/m²**

## Combinações de Cargas para o ELU (NBR 6118, item 11.7)

Para o Estado Limite Último (cálculo de resistência), as cargas são combinadas com fatores de ponderação:

**Fd = γg × Fgk + γq × (Fq1k + Σψ0j × Fqjk)**

Coeficientes parciais mais usados:
- γg = 1,4 (cargas permanentes de grandes variabilidades) ou 1,25 (pequena variabilidade)
- γq = 1,4 (cargas variáveis)
- ψ0 = 0,5 a 0,7 (fator de combinação, varia pelo tipo de carga)

**Exemplo simplificado (combinação fundamental, sem vento):**

Fd = 1,4 × gk + 1,4 × qk

Para a laje residencial acima:
- gk = 2,5 + 1,2 + 1,0 = 4,7 kN/m²
- qk = 1,5 kN/m²
- **Fd = 1,4 × 4,7 + 1,4 × 1,5 = 6,58 + 2,10 = 8,68 kN/m²**

## Cargas de Vento

O vento é calculado pela ABNT NBR 6123. A velocidade básica do vento (V0) depende da região geográfica.

| Região | V0 (m/s) |
|--------|----------|
| Goiânia / Goiás interior | 35 a 40 m/s |
| Brasília / DF | 35 m/s |
| Litoral brasileiro | 40 a 50 m/s |

A pressão dinâmica do vento: q = 0,613 × V²k (N/m²), onde Vk é a velocidade de projeto.

## Cargas de Temperatura

Em estruturas expostas, variações de temperatura geram esforços internos. A NBR 6118 recomenda considerar variação de ±15°C em estruturas abrigadas e ±25°C em estruturas expostas ao sol.

## Carga nas Vigas e Pilares

A partir das cargas nas lajes, os engenheiros calculam as cargas transmitidas às vigas (em kN/m) e aos pilares (em kN), considerando as áreas de influência de cada elemento.

Para uma estimativa rápida de carga em pilar de edifício convencional:
- **N ≈ 10 a 15 kN/m² × área de influência × número de pavimentos**

*Esse valor deve ser sempre confirmado em projeto estrutural.*`,
};

export default post;
