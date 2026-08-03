// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 80,
  slug: "simbologia-projetos-armacao-aco",
  category: "Projeto Estrutural",
  title: "Simbologia em Projetos de Armação de Aço: Guia de Referência Rápida",
  metaDescription: "Tabela completa dos símbolos usados em projetos de armação de concreto armado: diâmetros, dobramentos, estribos, espaçamentos e notações da NBR 7480 e NBR 6118.",
  keyword: "simbologia projetos armação aço",
  date: "14 Mar 2026",
  summary: "Tabela completa dos símbolos usados em projetos de armação — diâmetros, dobramentos, estribos, espaçamentos e notações segundo NBR 7480 e NBR 6118.",
  content: `## Por que Dominar a Simbologia?

Um projeto de armação contém dezenas de símbolos e abreviações. Interpretá-los errado gera barras com comprimento, diâmetro ou posição incorretos — e retrabalho custoso após a concretagem. Este guia reúne as notações mais usadas no Brasil.

## Notação de Barras

A notação padrão é:

**nφd / comprimento**

Onde:
- **n** = quantidade de barras
- **φ** = símbolo de diâmetro (phi)
- **d** = diâmetro nominal em mm
- **comprimento** = comprimento de corte total

Exemplos:
- 4φ12.5 = quatro barras de 12,5 mm
- 2φ20.0 L=6,00 = duas barras de 20 mm com 6 metros
- 6φ6.3 c/15 = seis barras de 6,3 mm espaçadas de 15 em 15 cm

## Diâmetros Comerciais (CA-50/CA-60)

| Símbolo | Diâmetro (mm) | Peso (kg/m) |
|---|---|---|
| φ6.3 | 6,3 | 0,245 |
| φ8.0 | 8,0 | 0,395 |
| φ10.0 | 10,0 | 0,617 |
| φ12.5 | 12,5 | 0,963 |
| φ16.0 | 16,0 | 1,578 |
| φ20.0 | 20,0 | 2,466 |
| φ25.0 | 25,0 | 3,853 |
| φ32.0 | 32,0 | 6,313 |

## Abreviações Comuns

| Símbolo | Significado |
|---|---|
| c/ | espaçamento (de ... em ... cm) |
| L= | comprimento total da barra |
| comp. | comprimento |
| c.c. | comprimento de corte |
| cb | cobrimento (cover) |
| gancho | dobramento a 90° ou 180° na extremidade |
| Est. | estribo |
| φt | diâmetro do estribo |
| n.est | número de ramos do estribo |
| asp | armadura superior positiva |
| ain | armadura inferior negativa |

## Estribos: Notação Completa

Estribos são representados como:

**φt c/s n-ramos**

Exemplo: **φ6.3 c/10 2R** = estribo de 6,3 mm, espaçado de 10 em 10 cm, 2 ramos.

A zona de confinamento (região com espaçamento menor) aparece separada:
- **φ6.3 c/7 (extremidades) / c/15 (meio)**

## Classes de Aço

| Marca | Classe | Resistência (fyk) |
|---|---|---|
| CA-50 | Nervurado | 500 MPa |
| CA-60 | Nervurado ou liso fio | 600 MPa |

CA-50 é o mais usado para barras acima de φ10. CA-60 predomina para barras finas (φ5.0 a φ8.0) e telas soldadas.

## Representação de Dobramentos

Dobramentos são indicados no croqui da barra com:
- Ângulo de dobramento (90°, 135°, 180°)
- Comprimento de cada trecho após o dobramento
- Diâmetro interno de dobramento (mandril) conforme NBR 6118 Tabela 9.1`,
};

export default post;
