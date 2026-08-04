// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 17,
  slug: "normas-abnt-vergalhao-o-que-engenheiro-precisa-saber",
  category: "Normas ABNT",
  title: "Normas ABNT para Vergalhão: O Que Todo Engenheiro Precisa Saber",
  metaDescription: "Guia das normas ABNT aplicáveis a vergalhão: NBR 7480, NBR 6118, NBR 6122. Requisitos técnicos e ensaios obrigatórios.",
  keyword: "normas ABNT vergalhão",
  date: "14 Fev 2026",
  summary: "Panorama completo das normas ABNT que regulamentam vergalhões para concreto armado: requisitos de produto, de projeto e de execução que todo engenheiro civil deve conhecer.",
  content: `**Em resumo:** As normas técnicas que todo engenheiro deve conhecer ao especificar aço para concreto armado são: ABNT NBR 7480 (barras e fios de aço), NBR 6118 (projeto de estruturas de concreto armado), NBR 6122 (fundações) e NBR 14859 (treliças metálicas). A NBR 7480 define as classes CA-25, CA-50 e CA-60, os ensaios de dobramento e tração obrigatórios, e a rastreabilidade exigida em cada lote de vergalhão. É um detalhe que a BR Aço não deixa passar em nenhuma obra atendida em Goiânia ou no DF.

---

## O Sistema Normativo do Aço para Concreto Armado

A utilização de vergalhões na construção civil brasileira é regulamentada por um conjunto de normas técnicas da ABNT (Associação Brasileira de Normas Técnicas) que abrange desde a fabricação do aço até sua aplicação em projeto e execução. Conhecer esse sistema normativo é obrigação de todo engenheiro civil — tanto por responsabilidade técnica quanto por responsabilidade legal.

O desconhecimento ou o descumprimento dessas normas pode resultar em obras com desempenho estrutural abaixo do projetado, autuações do CREA, responsabilização civil em caso de acidentes e problemas com seguros de obras.

## NBR 7480:2007 — A Norma Principal do Produto

A **ABNT NBR 7480** é o ponto de partida. Intitulada "Aço destinado a armaduras para estruturas de concreto armado — Especificação", ela define os requisitos que os vergalhões e fios de aço devem atender.

### O que a norma especifica:

**Classificação:** o aço é classificado como CA-25, CA-50 ou CA-60, conforme sua tensão de escoamento característica em MPa.

**Requisitos mecânicos:**

| Grau | fy,k mín (MPa) | ft,k mín (MPa) | Alongamento mín. (%) |
|---|---|---|---|
| CA-25 | 250 | 1,20 × fy | 18% |
| CA-50 | 500 | 1,10 × fy | 8% (φ ≤ 20 mm) / 6% (φ > 20 mm) |
| CA-60 | 600 | 1,05 × fy | 5% |

**Requisitos de aderência:** a norma define índices mínimos de aderência que as nervuras devem garantir para que haja transferência adequada de esforços entre aço e concreto.

**Identificação:** todo vergalhão deve ter gravado em relevo o símbolo do fabricante e o grau do aço (25, 50 ou 60). Essa identificação permite rastreabilidade em campo.

**Ensaios obrigatórios por lote:** ensaio de tração (para verificar fy, ft e alongamento), ensaio de dobramento e verificações dimensionais.

## NBR 6118:2014 — Projeto de Estruturas de Concreto

A **ABNT NBR 6118** é a norma de projeto. Ela define como os vergalhões devem ser dimensionados, detalhados e utilizados em estruturas de concreto armado. Os pontos mais relevantes para a escolha e especificação do aço:

**Cobrimento nominal (c_nom):** define a espessura mínima de concreto entre a superfície da estrutura e a face externa da armadura. Varia conforme a classe de agressividade ambiental (CAA):

| Classe de Agressividade | Ambiente | c_nom vigas/pilares |
|---|---|---|
| I | Rural/suburbano leve | 25 mm |
| II | Urbano | 30 mm |
| III | Marinho/industrial | 40 mm |
| IV | Altamente agressivo | 50 mm |

**Espaçamento mínimo entre barras:** a norma define espaçamentos mínimos para garantir que o concreto envolva adequadamente cada barra.

**Emendas por traspasse:** define os comprimentos mínimos de emenda conforme o diâmetro e o grau de solicitação da seção.

**Ganchos e dobramento:** raios mínimos de dobramento para evitar fissuração no aço durante a execução.

## NBR 6122:2022 — Projeto e Execução de Fundações

Para fundações de concreto armado, a **ABNT NBR 6122** complementa a NBR 6118 com requisitos específicos para sapatas, blocos sobre estacas, tubulões e radiers. Pontos críticos para o projetista:

- Armadura mínima de distribuição em sapatas: 0,15% da área da seção transversal
- Comprimento de ancoragem das barras nos pilares
- Armadura de cintamento para blocos sobre estacas múltiplas

## NBR 7481:1990 — Telas de Aço Soldadas

Para armaduras em forma de malha (telas soldadas), a norma vigente é a **ABNT NBR 7481**, que especifica os fios de aço CA-60 utilizados na fabricação, os requisitos de soldagem nos pontos de cruzamento e a classificação das malhas (Q, R, L, C).

## NBR 14862:2002 — Armaduras Treliçadas Eletrossoldadas

Rege a fabricação das treliças metálicas utilizadas em lajes. Define tolerâncias dimensionais, resistência mínima das soldas e requisitos de identificação.

## Responsabilidade do Engenheiro e do Fornecedor

O engenheiro calculista é responsável por especificar o aço correto no projeto. O engenheiro de execução (ou o responsável técnico pela obra) é responsável por verificar se o material recebido atende às especificações. O fornecedor é responsável por garantir e comprovar que o produto atende às normas.

**Documentos que o fornecedor deve fornecer obrigatoriamente:**
- Certificado de qualidade do lote com resultados dos ensaios mecânicos
- Identificação da corrida siderúrgica (rastreabilidade)
- Declaração de conformidade com a ABNT NBR 7480

**O que verificar no recebimento:**
- Identificação gravada nas barras (fabricante + grau)
- Certificado do lote específico entregue
- Conferência dimensional de amostras por lote

A **BR Aço** fornece certificado ABNT NBR 7480 de cada lote, com rastreabilidade completa desde a usina siderúrgica até o canteiro. Nossa equipe técnica está disponível para esclarecer dúvidas sobre especificação e garantir que você está comprando o produto correto para cada aplicação.`,
};

export default post;
