// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 50,
  slug: "espaçamento-vergalhao-laje-nbr6118",
  category: "Normas Técnicas",
  title: "Espaçamento de Vergalhão em Laje: O Que Diz a NBR 6118",
  metaDescription: "A NBR 6118 define espaçamento máximo e mínimo de armadura em laje. Regras para não reprovar na fiscalização.",
  keyword: "espaçamento vergalhão laje NBR 6118",
  date: "14 Dez 2025",
  summary: "A NBR 6118 limita o espaçamento máximo entre barras na laje a 2h ou 20 cm. Entender essas regras evita reprova na fiscalização e garante que a armadura funcione como calculada.",
  content: `## Por Que o Espaçamento das Barras Importa?

O espaçamento entre as barras de armadura na laje não é uma decisão estética — é calculado para garantir: Esse é o padrão que a BR Aço segue em todo fornecimento de aço em Goiânia e no restante de Goiás.

1. **Distribuição uniforme das tensões** no concreto
2. **Controle de fissuração** por retração e cargas
3. **Facilidade de concretagem** (a pasta de cimento precisa envolver todas as barras)

A **ABNT NBR 6118** (projeto de estruturas de concreto) define limites de espaçamento que devem ser respeitados sob pena de reprovação na fiscalização da ART.

## Espaçamento Máximo (NBR 6118 — Item 17.3.5)

Para **laje maciça**, o espaçamento máximo entre barras é:

| Situação | Espaçamento máximo |
|---|---|
| Armadura principal | 2h ≤ 20 cm (h = espessura da laje) |
| Armadura de distribuição | 3h ≤ 30 cm |

### Exemplos práticos

Laje de 10 cm:
- Armadura principal: 2 × 10 = 20 cm → **espaçamento máximo: 20 cm** (o menor prevalece)
- Armadura de distribuição: 3 × 10 = 30 cm → **espaçamento máximo: 30 cm**

Laje de 15 cm:
- Armadura principal: 2 × 15 = 30 cm → **limitado a 20 cm** (regra geral)
- Armadura de distribuição: 3 × 15 = 45 cm → **limitado a 30 cm** (regra geral)

## Espaçamento Mínimo (NBR 6118 — Item 8.3.2)

O espaçamento mínimo entre barras paralelas, medido entre as faces externas, deve ser:

- **Maior que o diâmetro da barra**
- **Maior que 1,2 × diâmetro máximo do agregado graúdo**
- **Mínimo absoluto: 20 mm**

Isso garante que o concreto preencha todos os espaços entre as barras.

### Exemplo
Para φ 10 mm com brita nº 1 (diâmetro máximo = 19 mm):
- Mínimo pelo diâmetro: 10 mm
- Mínimo pelo agregado: 1,2 × 19 = 22,8 mm
- **Espaçamento mínimo adotado: 25 mm (arredondado)**

## Consequências de Não Respeitar o Espaçamento

- **Espaçamento excessivo:** Fissuração entre barras, comportamento estrutural diferente do calculado
- **Espaçamento insuficiente:** Nichos de concretagem, segregação do concreto, corrosão prematura das barras

## Laje Treliçada: Regras Específicas

Em lajes treliçadas, as nervuras são espaçadas por módulo do EPS (tipicamente 40 cm a 50 cm). A **armadura de distribuição** (lajotas e capa) segue as mesmas regras da laje maciça para o espaçamento.

A BR Aço fornece treliças metálicas nos espaçamentos exigidos pelo projeto. Consulte nossa equipe técnica para escolher o modelo correto.`,
};

export default post;
