// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 52,
  slug: "como-ler-projeto-armacao-vergalhao",
  category: "Dicas Técnicas",
  title: "Como Ler um Projeto de Armação: Guia para Mestres de Obra",
  metaDescription: "Como interpretar pranchas de armação do projeto estrutural: símbolos, notação de bitola e detalhamento no canteiro.",
  keyword: "como ler projeto de armação",
  date: "18 Dez 2025",
  summary: "Ler um projeto de armação é essencial para que o mestre de obras execute a estrutura corretamente. Veja os principais símbolos, notações e como interpretar o detalhamento de pilares, vigas e lajes.",
  content: `## O Que é o Projeto de Armação?

O projeto de armação (ou detalhamento estrutural) é o documento técnico que especifica cada barra de vergalhão a ser colocada em cada elemento da estrutura. Ele é elaborado pelo engenheiro calculista com base nos cálculos estruturais.

Sem entender esse documento, o mestre de obras não consegue executar a armação corretamente — mesmo com o melhor aço do mercado.

## Notação de Bitola e Quantidade

A forma mais comum de indicar armadura em projetos brasileiros:

> N01 - 4 φ 12.5 c/ 15

Leitura: **Barra N01 — 4 barras de diâmetro 12,5 mm, espaçadas de 15 em 15 cm**

Outros formatos comuns:
- **4 φ 10** = 4 barras de 10 mm (sem espaçamento — barras fixas em quantidade)
- **φ 8 c/20** = barras de 8 mm a cada 20 cm
- **2L φ 12,5** = 2 camadas de barras φ 12,5 mm

## Lendo o Detalhamento de Pilar

No corte transversal de um pilar você verá:
- Os pontos (•) representando as barras longitudinais nos cantos e faces
- Os retângulos externos representando os estribos
- A cota do pilar (ex.: 20×30 cm)

### Exemplo de notação
> 4 φ 16 + 2 φ 12,5 — Estribos φ 6,3 c/15(10)

Significa: 4 barras de 16 mm + 2 barras de 12,5 mm na armadura longitudinal. Estribos de 6,3 mm espaçados de 15 cm (com adensamento para 10 cm nas zonas críticas).

## Lendo o Detalhamento de Viga

Na vista longitudinal da viga:
- Barras inferiores: resistem à tração no vão
- Barras superiores: resistem à tração no apoio (negativo)
- Linha pontilhada indica barra dobrada
- Número acima/abaixo da linha indica comprimento de corte ou dobra

## Lendo o Detalhamento de Laje

A planta da laje mostra:
- Setas com notação indicando sentido e espaçamento das barras
- Armadura principal → sentido do vão menor
- Armadura de distribuição → sentido do vão maior
- Armadura negativa (sobre vigas) indicada em separado

## Símbolos Mais Comuns

| Símbolo | Significado |
|---|---|
| φ (phy) | Diâmetro da barra |
| c/ ou @ | Espaçamento entre barras |
| L = | Comprimento total da barra |
| lb = | Comprimento de ancoragem |
| Estr. | Estribo |
| Cintas | Estribos (termo alternativo) |

## Quando a Dúvida Persiste

Diante de qualquer dúvida na interpretação do projeto, **não improvise** — consulte o engenheiro calculista. Uma barra colocada no lugar errado pode comprometer toda a estrutura.

A BR Aço também oferece suporte técnico para clientes: enviamos as peças identificadas por elemento para facilitar a montagem na obra.`,
};

export default post;
