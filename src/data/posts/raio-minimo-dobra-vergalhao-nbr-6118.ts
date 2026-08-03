// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 153,
  slug: "raio-minimo-dobra-vergalhao-nbr-6118",
  category: "Normas ABNT",
  title: "Raio Mínimo de Dobra de Vergalhão e Comprimento de Desenvolvimento pela NBR 6118",
  metaDescription: "Tabela de raio mínimo de dobra para CA-50 e CA-60 pela NBR 6118, e por que dobra incorreta compromete a ancoragem.",
  keyword: "raio mínimo dobra vergalhão NBR 6118",
  date: "28 Mai 2026",
  summary: "Tabela de raios mínimos de dobra para CA-50 e CA-60, comprimento de desenvolvimento e ancoragem conforme NBR 6118, com impacto prático na qualidade das armaduras.",
  content: `## Dobrar Vergalhão Não é Só Dobrar: A NBR 6118 Regula Cada Detalhe

A dobra de vergalhões é uma das operações mais executadas em obra e, ao mesmo tempo, uma das mais sujeitas a erros que comprometem o comportamento estrutural. A NBR 6118:2023 dedica a seção 9.4 ao tema, estabelecendo raios mínimos de dobramento que garantem a integridade do aço e a eficiência da ancoragem.

## Por Que o Raio de Dobra Importa

Quando um vergalhão é dobrado com raio insuficiente, três problemas surgem:

1. **Fissuração do aço no ponto de dobra**: o encruamento da região dobrada pode criar microtrincas que propagam sob carga cíclica
2. **Esmagamento do concreto no interior da curva**: a força que o aço transfere para o concreto no ponto de curvatura é inversamente proporcional ao raio
3. **Ancoragem ineficiente**: a norma assume que o gancho padrão garante comprimento de ancoragem equivalente — se o raio for menor, essa equivalência não vale

## Tabela de Raio Mínimo de Dobra (NBR 6118 — Tabela 9.1)

| Diâmetro da barra (φ) | Raio mínimo CA-50 | Raio mínimo CA-60 |
|-----------------------|-------------------|-------------------|
| φ ≤ 20 mm | 3,5 φ | 5,0 φ |
| φ > 20 mm | 5,0 φ | 7,0 φ |
| CA-25 (qualquer) | 2,5 φ | — |

**Exemplos práticos:**

| Barra | Grau | Raio mínimo | Mandril mínimo |
|-------|------|-------------|----------------|
| ø8,0 mm | CA-50 | 28 mm | 56 mm |
| ø12,5 mm | CA-50 | 43,75 mm | 87,5 mm |
| ø16,0 mm | CA-50 | 56 mm | 112 mm |
| ø20,0 mm | CA-50 | 70 mm | 140 mm |
| ø25,0 mm | CA-50 | 125 mm | 250 mm |

## Comprimento de Desenvolvimento — Tabela CA-50/C30

| Diâmetro | Comprimento básico (posição boa) | Comprimento básico (posição ruim) |
|----------|----------------------------------|-----------------------------------|
| ø8,0 mm | 27,4 cm | 39,1 cm |
| ø10,0 mm | 34,2 cm | 48,9 cm |
| ø12,5 mm | 42,8 cm | 61,1 cm |
| ø16,0 mm | 54,8 cm | 78,3 cm |
| ø20,0 mm | 68,5 cm | 97,9 cm |
| ø25,0 mm | 85,6 cm | 122,3 cm |

## O Erro Mais Comum nos Canteiros

O erro mais frequente é a dobra com mandril de diâmetro insuficiente. Para um vergalhão ø16 mm CA-50, o mandril mínimo é de 112 mm (11 cm). Uma chave de dobra caseira tipicamente usa mandris de 30–40 mm — menos de 40% do mínimo normativo.

Mesmo que a barra chegue ao projeto em dimensão correta, a ancoragem pode ser ineficiente. O gancho não equivale ao comprimento necessário, e o elemento pode perder resistência de até 25%.

## Dobra Industrial CNC vs Manual

| Parâmetro | Dobra manual | Dobra CNC |
|-----------|-------------|-----------|
| Controle do raio de dobra | Visual/estimado | Programado para cada diâmetro |
| Tolerância de ângulo | ±5° a ±10° | ±0,5° |
| Mandril verificado por lote | Raramente | A cada setup de produção |
| Conformidade NBR 6118 | Depende do armador | Garantida por parâmetro de máquina |

O corte e dobra industrial garante, por definição, que cada barra entregue em obra atende ao raio mínimo normativo — porque o mandril da máquina CNC é configurado por diâmetro antes de iniciar a produção do lote.`,
};

export default post;
