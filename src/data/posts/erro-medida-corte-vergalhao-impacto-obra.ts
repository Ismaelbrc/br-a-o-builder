// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 145,
  slug: "erro-medida-corte-vergalhao-impacto-obra",
  category: "Corte e Dobra",
  title: "Erro de 1cm no Corte do Vergalhão: Como Isso Multiplica o Custo da Obra",
  metaDescription: "Um erro de 1cm no corte do vergalhão pode inutilizar a peça ou comprometer a estrutura. Entenda o impacto e como evitar.",
  keyword: "erro medida corte vergalhão obra",
  date: "22 Mai 2026",
  summary: "O corte manual de vergalhão no canteiro é suscetível a erros de medida que parecem pequenos mas têm consequências grandes: peça inutilizada, retrabalho, risco estrutural e atraso de obra. Veja como o corte CNC industrial elimina esse problema.",
  content: `## O Erro de 1cm Que Custa Caro

No canteiro de obras, um erro de medida de 1cm no corte do vergalhão parece insignificante. Mas dependendo do elemento estrutural e do momento da obra, esse 1cm pode:

- Inutilizar a peça completamente
- Obrigar a compra de uma nova barra
- Comprometer a conformidade com o projeto estrutural
- Em casos extremos, criar um ponto de fraqueza que a inspeção técnica vai reprovar

É a mesma régua usada pela BR Aço em obras espalhadas por Goiânia, Goiás e o Distrito Federal. Isso não é exagero — é física estrutural e norma técnica.

## Por Que a Medida Importa Tanto

A ABNT NBR 6118:2023 e a NBR 7480 estabelecem requisitos mínimos de comprimento para emendas, ganchos e ancoragens. Esses requisitos são baseados no diâmetro da barra e no tipo de solicitação estrutural.

### Comprimento mínimo de ancoragem (referência NBR 6118)

| Diâmetro (φ) | Ancoragem básica mínima |
|-------------|------------------------|
| 8mm | 24 cm |
| 10mm | 30 cm |
| 12,5mm | 37,5 cm |
| 16mm | 48 cm |
| 20mm | 60 cm |

Se um estribo ou barra de armação chegar 1cm abaixo do comprimento mínimo de ancoragem, **a peça está em não-conformidade com a norma**. O engenheiro responsável não pode assinar a estrutura como está.

## O Que Acontece na Prática

### Cenário 1 — Estribo cortado curto (problema mais comum)

O estribo (o "laço" que circunda os vergalhões longitudinais do pilar ou viga) precisa de um comprimento de gancho mínimo. Um corte 2cm mais curto e o gancho não fecha corretamente — a peça fica solta, sem efetividade estrutural.

**Solução prática:** refazer o estribo. Custo: nova barra + tempo do armador.

### Cenário 2 — Barra de espera cortada baixa

As esperas de pilar que ficam para a etapa seguinte da obra precisam de comprimento suficiente de emenda (geralmente 50 a 60 vezes o diâmetro). Se o concreto já foi lançado com a espera 5cm mais curta, a emenda fica fora de norma.

**Solução prática:** emenda metálica mecânica (cara) ou aceitar a não-conformidade (risco técnico e legal).

### Cenário 3 — Viga com comprimento insuficiente de apoio

A barra longitudinal de uma viga precisa penetrar o suficiente no pilar para garantir a ancoragem. Se saiu 3cm curta, o engenheiro precisa recalcular ou complementar com outra peça.

**Solução prática:** ou solda (não recomendada pela NBR para cargas dinâmicas) ou peça complementar (custo adicional).

## A Frequência do Erro Manual

Estudos de controle de qualidade em canteiros tradicionais indicam:
- **15 a 20% das peças** cortadas manualmente têm desvio de mais de 5mm
- **3 a 5%** têm desvio de mais de 20mm — que normalmente inutiliza a peça para uso previsto

Em uma obra com 500 peças cortadas, isso significa de 75 a 100 peças com desvio significativo.

## Como o Corte CNC Elimina o Problema

No corte e dobra industrial com máquinas CNC:
- Tolerância de corte: **±1mm** (contra ±5 a 20mm do corte manual)
- A mesma programação é executada identicamente na primeira e na 500ª peça
- O software verifica dimensões antes de liberar o lote

O erro de 1cm que custaria R$50 em material e R$150 em mão de obra de retrabalho no canteiro não existe no processo industrial.

## O Custo Acumulado dos Erros em uma Obra

Estimativa para uma obra com 300 peças cortadas, taxa de erro de 4% e custo médio de R$80 por peça com retrabalho:

- 12 peças refeitas × R$80 = **R$960 em retrabalho evitável**
- Mais: atraso médio de 4h por incidente = 2 dias extras de armador = **R$440**
- **Total: R$1.400 em erros que o corte CNC elimina**

Mais uma conta que aparece no resultado final da obra — e que o orçamento inicial não previu.`,
};

export default post;
