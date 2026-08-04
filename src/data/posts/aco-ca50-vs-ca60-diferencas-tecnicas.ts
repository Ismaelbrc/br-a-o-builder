// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 114,
  slug: "aco-ca50-vs-ca60-diferencas-tecnicas",
  category: "Produtos",
  title: "Aço CA-50 vs CA-60: Diferenças Técnicas e Quando Usar Cada Um",
  metaDescription: "Diferenças técnicas entre CA-50 e CA-60: resistência, diâmetros disponíveis, soldabilidade e aplicação indicada.",
  keyword: "aço CA-50 CA-60 diferenças aplicações",
  date: "23 Abr 2026",
  summary: "Diferenças técnicas entre CA-50 e CA-60 — resistência, diâmetros, soldabilidade, dobramento e quando usar cada classe de aço.",
  content: `## O que Define a Classe do Aço?

A classe do aço para concreto armado é definida pela sua **resistência de escoamento característica (fyk)** — critério que a BR Aço segue à risca em todo vergalhão fornecido em Goiânia e no interior de Goiás:

- **CA-50:** fyk = 500 MPa
- **CA-60:** fyk = 600 MPa

Ambas as classes são regulamentadas pela **ABNT NBR 7480:2007** — Barras e fios de aço destinados a armaduras para concreto armado.

## Características do CA-50

- **Fyk:** 500 MPa
- **Resistência de ruptura (fst):** ≥ 540 MPa
- **Forma:** nervurado (com nervuras transversais na superfície)
- **Diâmetros disponíveis:** φ 6,3 a 40,0 mm
- **Alongamento mínimo:** 8%
- **Soldabilidade:** sim, se carbono equivalente ≤ 0,43%

**Onde é mais usado:**
- Barras longitudinais de pilares e vigas (φ ≥ 10 mm)
- Armadura principal de lajes maciças
- Tirantes e barras estruturais em geral

## Características do CA-60

- **Fyk:** 600 MPa
- **Forma:** nervurado ou liso (fios trefilados)
- **Diâmetros disponíveis:** φ 1,6 a 10,0 mm
- **Alongamento mínimo:** 5% (menor que CA-50)
- **Soldabilidade:** limitada — fios CA-60 em geral NÃO são soldáveis em campo

**Onde é mais usado:**
- Estribos finos (φ 5,0 e φ 6,3 mm)
- Telas soldadas (malha Q-92, Q-138, etc. — soldagem realizada em fábrica)
- Armadura de distribuição em lajes pré-moldadas
- Barras finas em geral (φ 5 a φ 8 mm)

## Dobramento: Diferença Importante

O CA-60 tem menor ductilidade que o CA-50 — o que significa que tolera menos dobramento antes de fissurar:

| Classe | Diâmetro mínimo de dobramento |
|---|---|
| CA-50 φ ≤ 20 mm | 4φ (mandril mínimo) |
| CA-60 | 3φ para estribos (mas atenção ao raio) |

Na prática, estribos de CA-60 φ5 feitos com dobradeira bem regulada são adequados. O problema surge quando se tentam dobrar barras CA-60 de maior diâmetro com equipamento impróprio.

## Qual Usar em Cada Situação?

| Elemento | Aço recomendado |
|---|---|
| Barras longitudinais de vigas e pilares (φ ≥ 10) | CA-50 |
| Estribos (φ 5,0 e φ 6,3) | CA-60 (ou CA-50 fina) |
| Armadura de tela soldada | CA-60 (fabricação) |
| Armadura de laje maciça φ 8–10 | CA-50 ou CA-60 |
| Estruturas especiais (protendidas) | CA-50 (corpo) + CP (cabos de protensão) |

## E o Custo?

O CA-60 costuma ser ligeiramente mais barato por kg do que o CA-50, por ser produzido por trefilação (processo mais simples). Para estribos, onde a economia é em peso total, a diferença é marginal. A escolha deve ser guiada pela especificação do projeto — nunca substitua CA-50 por CA-60 ou vice-versa sem aprovação do projetista.`,
};

export default post;
