// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 86,
  slug: "espacadores-cobrimento-concreto",
  category: "Normas ABNT",
  title: "Espaçadores e Cobrimento do Concreto: Tipos, Normas e Aplicação Correta",
  metaDescription: "O que é cobrimento nominal, como calcular pela NBR 6118, tipos de espaçadores e como posicioná-los para durabilidade.",
  keyword: "espaçadores cobrimento concreto NBR 6118",
  date: "21 Mar 2026",
  summary: "Cobrimento nominal, cobrimento mínimo segundo NBR 6118, tipos de espaçadores e como posicioná-los corretamente para durabilidade.",
  content: `## O que é Cobrimento do Concreto?

Cobrimento é a distância entre a face externa do concreto e a superfície da armadura (barra). Ele protege o aço contra:
- **Carbonatação** (neutralização do pH do concreto, que destrói a camada passivadora do aço)
- **Cloretos** (penetração de íons de cloreto que causam corrosão ativa)
- **Fogo** (o concreto funciona como isolamento térmico da armadura)

Cobrimento insuficiente é a principal causa de patologia estrutural no Brasil.

## Cobrimento Nominal vs Mínimo

A **NBR 6118:2014** distingue dois valores:

- **Cobrimento mínimo (cmin)**: o menor valor admissível, determinado pela classe de agressividade ambiental
- **Cobrimento nominal (cnom)**: o valor adotado no projeto e especificado para execução

> **cnom = cmin + Δc**  (onde Δc = tolerância de execução, tipicamente 10 mm)

## Cobrimento Mínimo por Classe de Agressividade (NBR 6118 Tabela 7.2)

| Classe | Ambiente | Laje | Viga/Pilar | Fundação |
|---|---|---|---|---|
| I — fraca | rural, interior seco | 10 mm | 15 mm | 25 mm |
| II — moderada | urbano | 15 mm | 20 mm | 30 mm |
| III — forte | marinho, industrial | 20 mm | 25 mm | 40 mm |
| IV — muito forte | splashing marinho, industrial quím. | 25 mm | 35 mm | 50 mm |

Goiânia e Brasília são tipicamente Classe II para estruturas expostas e I para elementos internos protegidos.

## Tipos de Espaçadores

### Espaçadores de Concreto (pastilha ou cadeira)
Os mais usados no Brasil. Fabricados com pasta de cimento e areia, têm resistência compatível com o concreto. Vêm em espessuras de 10, 15, 20, 25, 30, 40 e 50 mm.

**Para lajes:** espaçadores circulares ou quadrados sob a malha inferior.
**Para vigas:** cadeiras metálicas ou pastilhas laterais fixadas com arame aos estribos.
**Para pilares:** pastilhas ou clips plásticos fixados às faces do estribo.

### Espaçadores Plásticos (clips)
Encaixam diretamente na barra ou tela. Rápidos de instalar em telas soldadas.

### Espaçadores Metálicos (cadeiras)
Usados para sustentar malhas de laje a grandes alturas (lajes com capeamento acima de 8 cm).

## Posicionamento e Quantidade

A NBR 14931 exige:
- **Fundações e lajes**: 4 a 6 espaçadores por m²
- **Paredes e pilares**: 2 a 4 espaçadores por m² de face
- **Vigas**: espaçadores laterais a cada 1,0 m e na base a cada 1,5 m

Espaçadores devem ser de material resistente e compatível com o concreto. **São proibidos:** pedaços de tijolo, pedras, pedaços de madeira ou arames dobrados.`,
};

export default post;
