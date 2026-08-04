// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 90,
  slug: "planilha-de-ferro-como-elaborar-e-interpretar",
  category: "Gestão de Obra",
  title: "Planilha de Ferro: Como Elaborar e Interpretar para Comprar com Precisão",
  metaDescription: "Como montar ou ler uma planilha de ferro: diâmetros, quantidades, comprimento de corte e peso total, base do orçamento.",
  keyword: "planilha de ferro como elaborar",
  date: "26 Mar 2026",
  summary: "Como montar ou ler uma planilha de ferro (quadro de armação) — diâmetros, quantidades, comprimentos de corte e cálculo de peso total para orçar com precisão.",
  content: `## O que é a Planilha de Ferro?

A planilha de ferro (também chamada de quadro de armação ou lista de corte) é o documento que quantifica cada barra de aço da estrutura: tipo, diâmetro, comprimento de corte, quantidade e peso. É o documento que o responsável pela obra entrega ao fornecedor para cotar o corte e dobra ou comprar o vergalhão em barras. Esse é o cuidado que diferencia o fornecimento da BR Aço em Goiânia e em todo o estado de Goiás.

Sem planilha, você compra "a olho" — e invariavelmente sobra ou falta material.

## Estrutura da Planilha

Uma planilha de ferro padrão tem as colunas:

| Marca | Elemento | Tipo | φ (mm) | Forma | n | L corte (cm) | Peso unit. (kg/m) | Peso total (kg) |
|---|---|---|---|---|---|---|---|---|
| N01 | P1 | estribo | 6,3 | retangular | 48 | 98 | 0,245 | 11,54 |
| N02 | P1 | long. | 12,5 | reto | 4 | 350 | 0,963 | 13,48 |

Onde:
- **Marca**: identificação da barra no projeto (N01, N02...)
- **Elemento**: onde essa barra vai (P1 = pilar 1, V3 = viga 3, L2 = laje 2)
- **Tipo**: longitudinal, estribo, distribuição, negativa...
- **φ**: diâmetro nominal em mm
- **Forma**: croqui simplificado da barra (com ganchos, dobras e cotas)
- **n**: quantidade total de barras dessa marca na obra
- **L corte**: comprimento total após desdobrar (soma de todos os trechos)
- **Peso unit.**: kg por metro linear (tabela padrão por φ)
- **Peso total**: n × L corte × Peso unit. ÷ 100

## Tabela de Pesos por Diâmetro (CA-50)

| φ (mm) | Peso (kg/m) |
|---|---|
| 6,3 | 0,245 |
| 8,0 | 0,395 |
| 10,0 | 0,617 |
| 12,5 | 0,963 |
| 16,0 | 1,578 |
| 20,0 | 2,466 |
| 25,0 | 3,853 |
| 32,0 | 6,313 |

## Como Calcular o Comprimento de Corte

Para barras retas: L = soma dos trechos retos

Para barras com ganchos: L = soma dos trechos + comprimento dos ganchos

Para estribos retangulares: L = 2 × (a + b) + 2 × gancho
onde a e b são as dimensões internas do estribo.

> Atenção: desconte o encurtamento por dobramento. Em dobras de 90°, o encurtamento é ≈ 2 × r (onde r = raio de dobramento). Para barras finas isso é marginal, mas em φ20+ pode representar 2–3 cm por dobra.

## Como Usar a Planilha com o Fornecedor

1. Envie a planilha (Excel ou PDF com croquis) para a empresa de corte e dobra
2. Peça orçamento separado por peso total de cada diâmetro
3. Confirme o laudo de qualidade ABNT 7480 incluso no preço
4. Solicite as peças identificadas com etiquetas por marca — facilita a montagem no canteiro

Uma boa planilha elimina dúvidas, evita erros de corte e permite comparar orçamentos de diferentes fornecedores de forma objetiva.`,
};

export default post;
