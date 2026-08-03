// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 78,
  slug: "como-ler-planta-baixa-estrutural",
  category: "Projeto Estrutural",
  title: "Como Ler uma Planta Baixa Estrutural: Pilares, Vigas e Lajes no Projeto",
  metaDescription: "Guia prático para interpretar planta baixa estrutural: como identificar pilar, viga, laje, eixos e convenções do projeto.",
  keyword: "como ler planta baixa estrutural",
  date: "12 Mar 2026",
  summary: "Guia prático para interpretar plantas baixas estruturais — como identificar pilares, vigas, lajes e convenções de representação no projeto de estrutura.",
  content: `## O que é a Planta Baixa Estrutural?

A planta baixa estrutural (também chamada planta de forma ou planta de fôrma) é o desenho que mostra, visto de cima, a disposição dos elementos estruturais de um pavimento: pilares, vigas, lajes e aberturas. É o desenho mais consultado durante a execução da estrutura.

## Como Identificar os Elementos

### Pilares
Representados como retângulos cheios (hachurados) ou com a sigla P seguida de número (P1, P2, P3…). A posição indica o eixo do pilar; as dimensões aparecem em cota ou em tabela separada.

Exemplo: **P7 (20×60)** = pilar número 7, com seção de 20 cm por 60 cm.

### Vigas
Representadas por linhas cheias entre pilares, com identificação como V ou VP (viga principal) e VC (viga de contraventamento). A seção aparece junto: **V3 (14×50)** = viga 3, largura 14 cm, altura 50 cm.

As vigas podem ser:
- **Vigas embutidas na laje**: só aparecem como linha pontilhada (invisíveis na vista superior)
- **Vigas aparentes abaixo da laje**: aparecem com hachura e dimensão visível

### Lajes
A região entre vigas e pilares é a laje. No projeto de forma, as lajes aparecem numeradas (L1, L2…) com indicação de espessura (ex.: **L1 e=12**) e tipo (maciça, nervurada, pré-moldada).

Setas inclinadas indicam o sentido de armação principal das lajes.

### Aberturas e Reservatórios
Furos na laje são indicados por um X ou hachura especial com as dimensões anotadas. Reservatórios superiores aparecem como retângulo com espessura de parede e capacidade.

## Eixos de Referência

A maioria dos projetos estruturais usa uma malha de eixos numerados (1, 2, 3…) no sentido horizontal e letras (A, B, C…) no sentido vertical. Os pilares ficam nos cruzamentos desses eixos.

Exemplo: **Pilar no cruzamento do eixo 3 com o eixo B** = P(3B).

Essa referência é fundamental para locação em campo: use trena ou estação total para marcar os eixos primeiro, depois posicione os pilares em relação a eles.

## Planta de Forma vs Planta de Armação

| Planta de Forma | Planta de Armação |
|---|---|
| Mostra a geometria dos elementos (dimensões) | Mostra as barras de aço dentro de cada elemento |
| Usada para executar fôrmas e cimbramento | Usada para cortar, dobrar e montar armaduras |
| Escala 1:50 ou 1:100 | Escala 1:20 ou 1:25 (detalhes em 1:10) |

Ambas as plantas precisam estar disponíveis na obra durante toda a execução da estrutura.

## Dicas Práticas de Leitura

- Sempre verifique o **norte arquitetônico** e a **escala** no rodapé antes de qualquer medição
- Confirme que a planta que você tem é a **revisão mais recente** (número de revisão no carimbo)
- Em caso de dúvida sobre dimensão, **prevalecem as cotas escritas** sobre a medição direta no papel
- Se o projeto não tiver cota explícita para algum elemento, **solicite ao projetista** antes de executar`,
};

export default post;
