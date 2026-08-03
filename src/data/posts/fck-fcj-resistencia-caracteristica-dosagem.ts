// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 110,
  slug: "fck-fcj-resistencia-caracteristica-dosagem",
  category: "Concreto",
  title: "fck e fcj: Resistência Característica e de Dosagem do Concreto — Entenda a Diferença",
  metaDescription: "Diferença entre fck e fcj do concreto: como são calculados, para que servem e o que significam C20, C25, C30 e C40.",
  keyword: "fck fcj resistência característica concreto",
  date: "18 Abr 2026",
  summary: "Diferença entre fck e fcj do concreto, como são calculados, para que servem e o que são os concretos C20, C25, C30 e C40.",
  content: `## O que é fck?

O **fck** (f = force, c = compression, k = characteristic) é a **resistência característica à compressão** do concreto, em MPa (ou kN/cm²). É o valor abaixo do qual somente 5% dos resultados dos ensaios devem cair — ou seja, é o valor que o concreto atinge em 95% dos casos.

A **NBR 6118:2014** usa o fck como parâmetro de resistência em todas as fórmulas de dimensionamento estrutural.

## Nomenclatura: C20, C25, C30…

A nomenclatura comercial "C" + número indica o fck mínimo em MPa:

| Classe | fck (MPa) | Uso típico |
|---|---|---|
| C15 | 15 | Concreto magro, lastro |
| C20 | 20 | Estruturas em classe I (seco) |
| C25 | 25 | Estruturas convencionais (classe II) |
| C30 | 30 | Estruturas em classe III |
| C35 | 35 | Pilares de edifícios altos |
| C40 | 40 | Estruturas em classe IV, protendidas |
| C50+ | 50+ | Concreto de alto desempenho |

## O que é fcj?

O **fcj** é a **resistência de dosagem** — o valor médio que a concreteira deve atingir para garantir que o fck especificado seja cumprido estatisticamente.

Pela estatística (distribuição normal, 5% de probabilidade), o fcj é calculado como:

> fcj = fck + 1,65 × σ

Onde σ é o desvio padrão do controle de produção da concreteira. Para uma concreteira com controle rigoroso (σ = 4 MPa):
> fcj para C25 = 25 + 1,65 × 4 = 31,6 MPa

Isso explica por que um caminhão de "C25" rompido no laboratório frequentemente dá 30–35 MPa: o valor de dosagem é propositalmente mais alto para garantir o fck no campo.

## Resistência aos 28 Dias vs Resistência Inicial

Os valores de fck e fcj são sempre referidos aos **28 dias** de idade do concreto (cura úmida a 23 °C). Mas o concreto já tem resistência antes disso:

| Idade | Resistência relativa (CP II) |
|---|---|
| 3 dias | ≈ 40–50% do fck28 |
| 7 dias | ≈ 60–70% do fck28 |
| 14 dias | ≈ 80–90% do fck28 |
| 28 dias | 100% (valor de projeto) |
| 90 dias | ≈ 115–120% do fck28 |

Para o **CP V-ARI**, a resistência aos 7 dias é comparável ao fck28 do CP II — daí sua vantagem em obras com cronograma apertado.

## Aceitação do Concreto (NBR 12655)

Um lote de concreto é aceito se:
- Nenhum resultado individual < 0,85 × fck
- A média de qualquer grupo de 3 resultados consecutivos ≥ fck

Se os resultados ficarem abaixo do mínimo, o engenheiro avalia por extração de testemunhos (corpos de prova extraídos da estrutura) se a resistência in loco é satisfatória antes de decidir pelo reforço ou demolição.`,
};

export default post;
