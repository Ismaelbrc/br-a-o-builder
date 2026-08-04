// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 85,
  slug: "barras-de-espera-como-detalhar",
  category: "Projeto Estrutural",
  title: "Barras de Espera: O que São e Como Detalhar Corretamente no Projeto",
  metaDescription: "O que são barras de espera em concreto armado, comprimento mínimo de transpasse e como detalhar na ligação pilar-fundação.",
  keyword: "barras de espera concreto armado",
  date: "20 Mar 2026",
  summary: "O que são barras de espera, para que servem, comprimento de transpasse e como detalhar na ligação pilar-fundação e pilar-pilar.",
  content: `## O que são Barras de Espera?

Barras de espera (ou "ferros de espera") são as armaduras longitudinais que saem de um elemento de concreto concretado anteriormente — como uma fundação ou um pilar inferior — para dentro do próximo elemento — pilar superior, laje ou viga. Elas garantem a continuidade estrutural e a transferência de esforços entre os elementos. Vale lembrar que esse critério vale tanto para obras em Goiânia quanto para obras no Distrito Federal, onde a BR Aço também atende.

Sem barras de espera corretas, a ligação entre fundação e pilar, ou entre pavimentos de um pilar, fica comprometida mecanicamente.

## Onde São Usadas

- **Pilar sobre fundação (sapata, bloco, radier)**: as barras de espera saem da fundação e formam o esqueleto do pilar do 1º pavimento
- **Pilar de um pavimento para o próximo**: as barras saem do pilar inferior e se empalmarão com as barras do pilar superior
- **Viga sobre alvenaria**: barras saem da parede ou pilar para ancoragem da viga
- **Escada sobre viga ou laje**: barras de espera para a futura laje da escada

## Comprimento de Transpasse Mínimo

O comprimento de transpasse (ld) é definido pela **NBR 6118 — Tabela 9.3** e depende de:
- Diâmetro da barra (φ)
- Resistência do concreto (fck)
- Posição de concretagem (barra boa: armada > 30 cm do fundo; barra má: armada < 30 cm ou horizontal no topo)

Valores orientativos para CA-50, fck = 25 MPa:

| Diâmetro | Barra boa (ld) | Barra má (ld) |
|---|---|---|
| φ 8,0 mm | ≈ 30 cm | ≈ 40 cm |
| φ 12,5 mm | ≈ 45 cm | ≈ 60 cm |
| φ 16,0 mm | ≈ 60 cm | ≈ 80 cm |
| φ 20,0 mm | ≈ 75 cm | ≈ 100 cm |
| φ 25,0 mm | ≈ 90 cm | ≈ 120 cm |

> A barra de espera deve sair da fundação com comprimento mínimo = ld (comprimento de ancoragem na fundação) + comprimento de transpasse no pilar.

## Proteção de Barras de Espera Expostas

Barras de espera ficam expostas durante o prazo de execução do elemento seguinte — às vezes semanas ou meses. Nesse período:

- Não devem ser dobradas e endireitadas (isso fragiliza o aço)
- Devem ser protegidas com graxa, tinta anticorrosiva ou mangas plásticas se houver risco de ferrugem agressiva
- Devem ter o posicionamento verificado antes da concretagem do próximo elemento — se estiverem fora da posição, use gabarito para reposicionar antes da concretagem (nunca após)

## Dica Prática: Gabarito de Posicionamento

Para garantir que as barras de espera fiquem na posição correta durante a concretagem da fundação, use um gabarito de madeira ou metal com os furos nas posições exatas do projeto. O gabarito é colocado no topo da fôrma da fundação, as barras passam pelos furos e são fixadas ao gabarito até o concreto endurecer.`,
};

export default post;
