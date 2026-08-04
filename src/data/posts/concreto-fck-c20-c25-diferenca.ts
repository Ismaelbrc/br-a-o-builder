// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 62,
  slug: "concreto-fck-c20-c25-diferenca",
  category: "Dicas Técnicas",
  title: "fck C20, C25, C30: Qual a Diferença e Qual Usar na Sua Obra?",
  metaDescription: "Classes de resistência do concreto — C20, C25, C30 (fck). Qual usar em fundação, laje e pilar pela NBR 6118.",
  keyword: "fck concreto C20 C25 diferença",
  date: "07 Jan 2026",
  summary: "C20, C25 e C30 são as classes de resistência do concreto mais usadas em obras residenciais. Entenda o que o fck significa, as diferenças práticas e qual usar em cada elemento estrutural.",
  content: `## O Que é o fck do Concreto?

O **fck** (resistência característica à compressão) é o valor abaixo do qual apenas 5% dos resultados de ensaio se situam, em corpos de prova cilíndricos com 28 dias de cura. É a propriedade mais importante para dimensionamento estrutural. Esse padrão técnico é seguido pela BR Aço em fornecimentos por toda a Grande Goiânia e o DF.

A classificação usa a letra **C** seguida do valor em MPa: **C20** = fck de 20 MPa.

## Classes de Concreto por Elemento Estrutural (NBR 6118)

A NBR 6118 define a resistência mínima conforme a classe de agressividade ambiental:

| Elemento | CAA I (rural seco) | CAA II (urbano) | CAA III/IV (agressivo) |
|---|---|---|---|
| Fundação direta | C20 | C25 | C30 |
| Pilares e vigas | C20 | C25 | C30 |
| Laje | C20 | C25 | C30 |
| Peças pré-moldadas | C25 | C30 | C35 |

> Na prática, em Goiânia (CAA II), **C25 é o mínimo** para a maioria dos elementos.

## Diferenças Práticas entre C20, C25 e C30

| Característica | C20 | C25 | C30 |
|---|---|---|---|
| Resistência (MPa) | 20 | 25 | 30 |
| Custo relativo | Base (100%) | +8% a 12% | +15% a 20% |
| Aplicação típica | Obras simples/rurais | Residencial urbano padrão | Comercial, estrutural exigente |
| Influência na armadura | Exige mais aço | Equilibrada | Permite menos aço |

## Como o fck Afeta a Quantidade de Aço?

Quanto maior o fck, maior a resistência à compressão do concreto — e o engenheiro pode dimensionar a armadura com **menos aço** mantendo a mesma capacidade estrutural.

Para um pilar 20×20 cm sob mesma carga:
- **C20:** pode exigir 6 barras φ 12,5 mm
- **C25:** pode ser resolvido com 4 barras φ 12,5 mm

O custo adicional do concreto de maior fck pode ser compensado pela economia no aço.

## Como Pedir o Concreto Usinado Correto?

Ao encomendar concreto usinado, especifique:
- **fck** (ex.: C25)
- **Abatimento (slump)** em mm (ex.: 100 mm para lajes)
- **Diâmetro máximo do agregado** (ex.: 19 mm para lajes convencionais)

## Aço Compatível com o Concreto

O CA-50 é compatível com todos os fck de C20 a C90. O que muda com o fck é a **quantidade** de aço, não o tipo. A BR Aço fornece vergalhão CA-50 certificado para qualquer classe de concreto que seu projeto especificar.`,
};

export default post;
