// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 133,
  slug: "armacao-de-lajes-detalhamento-completo",
  category: "Projeto Estrutural",
  title: "Armação de Lajes: Detalhamento Completo das Armaduras Conforme NBR 6118",
  metaDescription: "Detalhamento da armação de laje maciça: armadura positiva e negativa, bordas, ancoragem e comprimentos da NBR 6118.",
  keyword: "armação de lajes detalhamento",
  date: "21 Mai 2026",
  summary: "Detalhamento da armação de lajes maciças: positiva, negativa, distribuição, bordas livres, ancoragem e tabelas de comprimentos mínimos.",
  content: `## Tipos de Armadura em Lajes Maciças

Uma laje maciça pode ter até 5 tipos de armadura, cada uma com função específica:

### 1. Armadura Positiva (principal de flexão)
Posicionada na face inferior da laje, na direção do menor vão (Lx). Resiste ao momento fletor positivo (tração na parte inferior, típico do vão central).

### 2. Armadura Negativa (sobre apoios)
Posicionada na face superior da laje, sobre as vigas ou paredes de apoio. Resiste ao momento fletor negativo (tração na parte superior, gerado pelo engastamento no apoio).

### 3. Armadura de Distribuição (construtiva transversal)
Posicionada na mesma face que a armadura principal, mas na direção perpendicular. Taxa mínima: 20% da armadura principal, com mínimo de 0,9 cm²/m.

### 4. Armadura de Borda Livre
Lajes com borda não apoiada (balanços, aberturas) recebem armaduras adicionais de borda.

### 5. Armadura Construtiva (face comprimida)
Na face oposta à principal (face superior no vão), armadura mínima para controle de retração: ≥ 0,9 cm²/m.

## Espessura Mínima por Situação (NBR 6118, item 13.2.3)

| Situação | h mínima |
|----------|---------|
| Laje de cobertura não transitável | 7 cm |
| Laje com tráfego leve de pedestres | 8 cm |
| Laje com tráfego de veículos leves | 10 cm |
| Laje plana (sem vigas) | 16 cm |
| Laje nervurada — espessura da capa | 4 cm (sem tráfego) / 5 cm (com tráfego) |

## Direção Preferencial do Momento

Para laje com quatro apoios (bidirecional), o menor vão (Lx) recebe maior momento. A armadura principal segue o menor vão.

Para laje com dois apoios opostos (unidirecional): toda a armadura principal segue a direção do vão.

**Regra:** se Ly/Lx > 2, a laje funciona praticamente em uma direção (unidirecional).

## Dimensionamento Orientativo — Lajes Residenciais (CA-50)

### Laje Maciça Unidirecional — Simplesmente Apoiada

| Vão (m) | Carga total (kN/m²) | Espessura (cm) | Armadura positiva | Espaçamento |
|---------|--------------------|--------------|--------------------|-------------|
| 3,0 | 6 a 8 | 10 | φ 8 | 20 cm |
| 4,0 | 6 a 8 | 12 | φ 8 | 15 cm |
| 4,5 | 6 a 8 | 13 | φ 10 | 20 cm |
| 5,0 | 6 a 8 | 15 | φ 10 | 17,5 cm |
| 5,5 | 6 a 8 | 16 | φ 10 | 15 cm |

*Valores orientativos para lajes de cobertura/piso residencial. Verificar com calculista.*

## Comprimento da Armadura Positiva além dos Apoios

As barras da armadura positiva devem se estender além da face do apoio (viga ou parede) por:

**Comprimento mínimo além da face do apoio:**
- Para apoio de extremidade (borda): ≥ lb,ef (comprimento de ancoragem com gancho)
- Para apoio intermediário (laje contínua): ≥ lb,ef ou até o ponto de inflexão + lb/3

**Regra prática:** barras de fundo devem entrar no apoio pelo menos 12 cm além da face do apoio (mínimo absoluto para boas condições de ancoragem).

## Comprimento da Armadura Negativa

A armadura negativa sobre o apoio deve se estender para dentro dos vãos adjacentes até o ponto onde o momento negativo se anula. Na ausência de cálculo preciso:

**Extensão mínima além da face do apoio:** L/4 (onde L é o vão adjacente)

Para lajes com diferença de vão entre tramos adjacentes, usar o maior vão para determinar o comprimento da armadura negativa.

## Espaçamento Máximo da Armadura (NBR 6118, item 17.3.3.2)

| Armadura | Espaçamento máximo |
|----------|-------------------|
| Armadura principal (momentos) | 2 × h ≤ 20 cm |
| Armadura de distribuição | 3 × h ≤ 33 cm |

*h = espessura total da laje*

## Detalhamento das Bordas Livres (NBR 6118, item 14.6.8)

Bordas livres (não apoiadas) de lajes devem receber armadura especial:
- Uma barra de borda ao longo da borda, com cobrimento normal
- Ou armadura em U (laço) circundando a borda

A NBR 6118 exige armadura de borda em todas as bordas de lajes não apoiadas.

## Aberturas em Lajes

Aberturas (para escadas, dutos, poços de elevador) interrompem as armaduras. Ao redor da abertura, adicionar:
- Barras paralelas à abertura em quantidade equivalente às barras interrompidas
- Barras diagonais nos cantos da abertura (φ 10 ou 12,5 mm, comprimento ≥ 1 m de cada lado)

**Regra:** pequenas aberturas (< h × h) podem ser executadas sem reforço estrutural. Aberturas maiores exigem avaliação do calculista.

## Checklist de Verificação antes da Concretagem

- [ ] Cobrimento verificado com espaçadores em todas as faces
- [ ] Armadura positiva na face correta (inferior)
- [ ] Armadura negativa posicionada sobre os apoios (face superior)
- [ ] Diâmetro máximo das barras ≤ h/8
- [ ] Espaçamento das barras dentro dos limites normativos
- [ ] Barras de borda nas bordas livres
- [ ] Reforço nas aberturas
- [ ] Comprimentos de ancoragem nos apoios`,
};

export default post;
