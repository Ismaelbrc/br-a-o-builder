// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 136,
  slug: "tabela-de-peso-do-ferro-pronto",
  category: "Vergalhões",
  title: "Ferro Pronto: Tabela de Peso Completa por Diâmetro (CA-25, CA-50, CA-60)",
  metaDescription: "Ferro pronto: quanto pesa cada diâmetro? Tabela completa CA-25, CA-50 e CA-60 por metro e por barra de 12m — pronta para orçamento e quantitativo de obra.",
  keyword: "ferro pronto",
  date: "22 Mai 2026",
  summary: "Tabela de referência com o peso do ferro pronto (vergalhão CA-25, CA-50 e CA-60) por metro e por barra de 12m, para todos os diâmetros disponíveis no mercado. Referência indispensável para orçamento e compra de aço.",
  content: `## Tabela de Peso do Ferro Pronto por Diâmetro

O "ferro pronto" é o nome popular do vergalhão de aço cortado e dobrado (ou em barra) usado na construção civil. O peso varia conforme o diâmetro e o grau (CA-25, CA-50 ou CA-60). Use as tabelas abaixo como referência rápida para orçamentos e quantitativos. É um cuidado que a BR Aço mantém em toda entrega, de Goiânia até o Distrito Federal.

A fórmula para calcular o peso linear é: **peso (kg/m) = 0,00617 × diâmetro² (mm²)**

## Tabela de Peso do Ferro CA-50 (mais usado em obras)

O CA-50 é o vergalhão mais utilizado em pilares, vigas, lajes e fundações. É comercializado em barras de 12 metros.

| Diâmetro (mm) | Denominação | Peso por metro (kg/m) | Peso por barra 12m (kg) | Área da seção (cm²) |
|:---:|:---:|:---:|:---:|:---:|
| 6,3 | φ 6,3 | 0,245 | 2,94 | 0,312 |
| 8,0 | φ 8 | 0,395 | 4,74 | 0,503 |
| 10,0 | φ 10 | 0,617 | 7,40 | 0,785 |
| 12,5 | φ 12,5 | 0,963 | 11,56 | 1,227 |
| 16,0 | φ 16 | 1,578 | 18,94 | 2,011 |
| 20,0 | φ 20 | 2,466 | 29,59 | 3,142 |
| 25,0 | φ 25 | 3,853 | 46,24 | 4,909 |
| 32,0 | φ 32 | 6,313 | 75,76 | 8,042 |
| 40,0 | φ 40 | 9,865 | 118,38 | 12,566 |

> **Norma:** Valores conforme ABNT NBR 7480/2007. Tolerância de ±3% por peça é aceita pela norma.

## Tabela de Peso do Ferro CA-60 (treliças, malhas e estribos finos)

O CA-60 é usado em treliças metálicas (teba), malhas soldadas e estribos de pequeno diâmetro. É comercializado em rolos de 100m ou em barras.

| Diâmetro (mm) | Peso por metro (kg/m) | Peso rolo 100m (kg) | Área da seção (cm²) |
|:---:|:---:|:---:|:---:|
| 3,4 | 0,071 | 7,1 | 0,091 |
| 4,2 | 0,109 | 10,9 | 0,139 |
| 5,0 | 0,154 | 15,4 | 0,196 |
| 6,0 | 0,222 | 22,2 | 0,283 |
| 7,0 | 0,302 | 30,2 | 0,385 |
| 8,0 | 0,395 | 39,5 | 0,503 |
| 9,5 | 0,558 | 55,8 | 0,709 |
| 10,0 | 0,617 | 61,7 | 0,785 |

## Tabela de Peso do Ferro CA-25 (uso limitado, obras antigas)

O CA-25 é um aço de baixa resistência, cada vez menos utilizado. Em projetos modernos, foi praticamente substituído pelo CA-50.

| Diâmetro (mm) | Peso por metro (kg/m) | Peso por barra 12m (kg) |
|:---:|:---:|:---:|
| 6,3 | 0,245 | 2,94 |
| 8,0 | 0,395 | 4,74 |
| 10,0 | 0,617 | 7,40 |
| 12,5 | 0,963 | 11,56 |
| 16,0 | 1,578 | 18,94 |
| 20,0 | 2,466 | 29,59 |
| 25,0 | 3,853 | 46,24 |

> O peso por diâmetro é igual entre CA-25 e CA-50. A diferença está na resistência ao escoamento: 250 MPa (CA-25) vs 500 MPa (CA-50).

## Como Calcular o Peso Total de Ferro para sua Obra

Com as tabelas acima, o cálculo do total de aço é direto:

**Peso total (kg) = comprimento total das barras (m) × peso por metro (kg/m)**

### Exemplo 1 — Pilar com 4 barras φ 16 mm × 3,00 m

1. Comprimento total: 4 × 3,00 m = 12,00 m lineares
2. Peso por metro (φ 16): **1,578 kg/m**
3. Peso total: 12,00 × 1,578 = **18,94 kg**

### Exemplo 2 — Viga 5m com 3 barras φ 12,5 mm (armadura inferior)

1. Comprimento total: 3 × 5,00 m = 15,00 m lineares
2. Peso por metro (φ 12,5): **0,963 kg/m**
3. Peso total: 15,00 × 0,963 = **14,45 kg**

### Exemplo 3 — Laje 50m² com malha φ 8,0 mm CA-50 a cada 15 cm

1. Direção X: ~66 barras de 7m = 462 m lineares
2. Direção Y: ~47 barras de 5m = 470 m lineares
3. Total: 932 metros lineares
4. Peso: 932 × 0,395 = **368 kg** (armadura principal, sem nervuras)

## Diâmetros Mais Usados por Elemento Estrutural

| Elemento | Diâmetro mais comum | Grau recomendado |
|---|---|---|
| Sapatas e blocos de fundação | 12,5 mm, 16,0 mm, 20,0 mm | CA-50 |
| Pilares residenciais | 10,0 mm, 12,5 mm, 16,0 mm | CA-50 |
| Vigas | 10,0 mm, 12,5 mm, 16,0 mm, 20,0 mm | CA-50 |
| Laje maciça | 8,0 mm, 10,0 mm | CA-50 |
| Laje treliçada (capa) | 4,2 mm, 5,0 mm | CA-60 |
| Estribos (pilares/vigas) | 5,0 mm, 6,3 mm, 8,0 mm | CA-50 ou CA-60 |
| Treliças (teba) | 3,4 mm a 7,0 mm | CA-60 |
| Muros e blocos de contenção | 8,0 mm, 10,0 mm, 12,5 mm | CA-50 |

## Quanto Comprar a Mais? (Fator de Perda)

O percentual de perda depende do método de corte:

- **Corte manual no canteiro:** adicione 5% a 8% ao total calculado
- **Corte e dobra industrial (como da BR Aço):** perda menor que 1% — você recebe exatamente o que o projeto pede, sem sobras

No corte e dobra, as peças chegam identificadas e prontas para armar, o que também reduz o custo de mão de obra em até 50%.

## Tabela de Conversão: Metros Lineares → Quilogramas

Para facilitar a conferência de pedidos de compra:

| φ (mm) | 10 m | 50 m | 100 m | 500 m | 1.000 m |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 8,0 | 3,95 kg | 19,75 kg | 39,5 kg | 197,5 kg | 395 kg |
| 10,0 | 6,17 kg | 30,85 kg | 61,7 kg | 308,5 kg | 617 kg |
| 12,5 | 9,63 kg | 48,15 kg | 96,3 kg | 481,5 kg | 963 kg |
| 16,0 | 15,78 kg | 78,9 kg | 157,8 kg | 789 kg | 1.578 kg |
| 20,0 | 24,66 kg | 123,3 kg | 246,6 kg | 1.233 kg | 2.466 kg |

## Perguntas Frequentes sobre Peso do Ferro

**Quanto pesa uma barra de ferro de 12m?**
Depende do diâmetro: φ 8mm = 4,74 kg; φ 10mm = 7,40 kg; φ 12,5mm = 11,56 kg; φ 16mm = 18,94 kg; φ 20mm = 29,59 kg.

**Qual o peso do ferro 10mm por metro?**
O vergalhão de 10mm pesa **0,617 kg por metro linear**, seja CA-50 ou CA-25.

**Quanto pesa 1 tonelada de ferro (1.000 kg) em metros lineares de φ 12,5mm?**
1.000 ÷ 0,963 = **aproximadamente 1.038 metros lineares** de vergalhão φ 12,5mm.

**Qual a diferença entre ferro CA-50 e CA-60?**
O CA-50 tem limite de escoamento de 500 MPa e é usado em barras de obra (pilares, vigas, lajes). O CA-60 tem 600 MPa, é mais rígido e usado em fios para treliças, malhas e estribos finos. O peso por metro é idêntico para o mesmo diâmetro.`,
};

export default post;
