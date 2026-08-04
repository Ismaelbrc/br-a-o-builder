// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 88,
  slug: "emendas-de-vergalhao-transpasse-luva-solda",
  category: "Normas ABNT",
  title: "Emendas de Vergalhão: Transpasse, Luvas Mecânicas e Solda Conforme NBR 6118",
  metaDescription: "Os três tipos de emenda de vergalhão — transpasse, luva mecânica e solda — comprimento mínimo e regras da NBR 6118.",
  keyword: "emendas vergalhão transpasse luva solda",
  date: "24 Mar 2026",
  summary: "Transpasse, luva mecânica e solda — comprimentos mínimos, posicionamento de emendas e o que exige a NBR 6118 para barras de aço em concreto armado.",
  content: `## Por que Precisamos de Emendas?

Barras de aço são fornecidas em comprimentos padrão de 12 metros. Elementos estruturais como pilares de edifícios altos, vigas longas e muros precisam de comprimentos maiores — ou é necessário empaimar barras em locais estratégicos para viabilizar a construção (como barras de espera de pilar que se iniciam na fundação e sobem por vários pavimentos). A equipe da BR Aço reforça esse ponto em cada orçamento fechado em Goiânia e em Goiás.

## Tipo 1: Emenda por Transpasse (Sobreposição)

É o método mais simples e econômico: duas barras paralelas se sobrepõem por um comprimento mínimo definido por cálculo (comprimento de transpasse, lt).

**lt** é calculado com base no comprimento de ancoragem (ld) da barra e depende de:
- Diâmetro e classe do aço
- Resistência do concreto (fck)
- Posição de concretagem (boa ou má posição)
- Percentual de barras emendadas na mesma seção

### Regras de posicionamento:
- Não empalmar mais de **50% da armadura** na mesma seção transversal
- Escalonar as emendas com separação mínima de 1,3 × lt entre elas
- Nunca empalmar no meio do vão de vigas em tração (momento positivo máximo) ou no topo de pilares

### Limites práticos de lt (CA-50, fck 25 MPa, barra boa, ≤50%):

| φ | lt mínimo |
|---|---|
| 8,0 mm | 35 cm |
| 12,5 mm | 55 cm |
| 16,0 mm | 70 cm |
| 20,0 mm | 90 cm |
| 25,0 mm | 110 cm |

## Tipo 2: Luva Mecânica (Emenda Mecânica)

Dispositivo metálico (luva rosqueada, prensada ou por atrito) que une duas barras topo a topo, transferindo esforços diretamente por compressão ou tração.

**Vantagens:** sem comprimento adicional, permite empalmar 100% das barras na mesma seção, reduz congestionamento de armação.

**Desvantagens:** custo maior, exige qualificação do aplicador, precisa de aprovação do projetista.

Tipos comuns: luva de rosca paralela (coneflange), luva de rosca cônica (taper-lock), luva prensada (swage).

## Tipo 3: Solda

Solda estrutural de barras CA-50 exige:
- Aço com composição química adequada (carbono equivalente ≤ 0,43%)
- Procedimento de soldagem qualificado (PQS) conforme AWS ou NBR
- Inspeção por ensaio não destrutivo (END) em soldas críticas

A solda de topo (V ou duplo V) é a mais usada. Solda tipo filete ou "ponto" no encontro de barras cruzadas não transmite esforços longitudinais — é apenas fixação de posição.

> **Atenção:** CA-60 (fios e telas soldadas) é soldável em fábrica durante a produção, mas **não deve ser soldado em campo** sem procedimento qualificado — o processo de trefilação altera a microestrutura e a soldagem pode reduzir a resistência local abaixo do mínimo.

## Qual Método Escolher?

| Critério | Transpasse | Luva | Solda |
|---|---|---|---|
| Custo | Baixo | Alto | Médio |
| Complexidade | Simples | Média | Alta |
| Congestionamento | Aumenta | Não aumenta | Não aumenta |
| % máxima emendada | 50% | 100% | 100% (c/ inspeção) |
| Aplicação típica | Pilares residenciais | Pilares altos, pontes | Estruturas especiais |`,
};

export default post;
