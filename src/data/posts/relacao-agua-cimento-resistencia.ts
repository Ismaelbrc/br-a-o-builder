// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 109,
  slug: "relacao-agua-cimento-resistencia",
  category: "Concreto",
  title: "Relação Água/Cimento: O Fator Mais Importante para a Resistência do Concreto",
  metaDescription: "Por que a relação água/cimento controla a resistência e durabilidade do concreto, e os valores máximos por classe.",
  keyword: "relação água cimento concreto resistência",
  date: "17 Abr 2026",
  summary: "Por que a relação a/c é o principal fator que controla a resistência e durabilidade do concreto, como calcular e valores máximos por classe de agressividade.",
  content: `## A Lei de Abrams e a Relação a/c

Em 1919, Duff Abrams estabeleceu empiricamente que **a resistência do concreto é inversamente proporcional à relação água/cimento (a/c)**:

> fck ∝ 1 / (a/c)

Aqui na BR Aço, esse é um dos pontos que mais pesam na hora de orientar clientes de Goiânia e do DF. Quanto mais água em relação ao cimento, mais poroso e fraco o concreto. Esta é a lei mais importante da tecnologia do concreto e é válida para qualquer concreto convencional (sem aditivos especiais).

## O que é a Relação a/c?

É o quociente entre a massa de água e a massa de cimento usados na mistura:

> a/c = massa de água (kg) / massa de cimento (kg)

Exemplo: traço 1:2:3 (cimento:areia:brita) com 200 kg de água e 350 kg de cimento → a/c = 200/350 = 0,57

## Efeito no fck

Valores de referência (concreto com CP II, agregados normais, cura 28 dias):

| a/c | fck estimado (MPa) |
|---|---|
| 0,35 | ≈ 55–65 MPa |
| 0,45 | ≈ 35–45 MPa |
| 0,55 | ≈ 25–30 MPa |
| 0,65 | ≈ 18–22 MPa |
| 0,75 | ≈ 12–16 MPa |

> Atenção: esses valores dependem muito do tipo de cimento, dos agregados e das condições de cura. São apenas referências orientativas.

## Limites por Classe de Agressividade (NBR 6118 Tabela 7.1)

| Classe de agressividade | a/c máximo | fck mínimo |
|---|---|---|
| I — fraca | 0,65 | 20 MPa |
| II — moderada | 0,60 | 25 MPa |
| III — forte | 0,55 | 30 MPa |
| IV — muito forte | 0,45 | 40 MPa |

## Por que Não Adicionar Mais Água?

É tentador adicionar água ao concreto no canteiro para facilitar o lançamento — mas cada litro extra de água:
- Aumenta a relação a/c
- Reduz a resistência de compressão
- Aumenta a porosidade → facilita entrada de gás carbônico (carbonatação) e cloretos
- Aumenta a retração → mais fissuras

Adicionar 20 L de água a extra num caminhão de 7 m³ (14 sacos de cimento ≈ 350 kg) eleva a a/c de 0,55 para ~0,61, o que pode reduzir a resistência de C25 para C20.

## Como Manter a a/c sem Sacrificar a Trabalhabilidade?

Use **superplastificantes** (aditivos redutores de água de alta eficiência). Eles permitem aumentar o slump de 8 cm para 16 cm sem adicionar água — mantendo a a/c constante e a resistência intacta.

Em obras com fck ≥ 30 MPa ou com bombeamento de concreto, o uso de superplastificante é praticamente obrigatório para garantir trabalhabilidade sem sacrificar a qualidade.`,
};

export default post;
