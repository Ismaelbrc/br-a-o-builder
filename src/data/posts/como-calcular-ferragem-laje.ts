// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 46,
  slug: "como-calcular-ferragem-laje",
  category: "Dicas Técnicas",
  title: "Como Calcular a Ferragem de uma Laje: Guia Prático",
  metaDescription: "Como calcular a quantidade de vergalhão para laje maciça e treliçada. Fórmulas práticas e tabelas para não errar no pedido.",
  keyword: "como calcular ferragem laje",
  date: "06 Dez 2025",
  summary: "Calcular a ferragem da laje corretamente evita falta de material ou desperdício. Veja as fórmulas para laje maciça e treliçada com exemplos práticos em metros quadrados.",
  content: `## Por Que Calcular a Ferragem Antes de Comprar?

Comprar aço sem cálculo preciso leva a dois problemas:
1. **Falta de material:** para a obra, atraso no cronograma
2. **Excesso:** capital imobilizado em material parado no canteiro

O cálculo preciso começa sempre pelo **projeto estrutural** — mas existem referências práticas para estimativa inicial.

## Laje Maciça: Cálculo de Armadura

A laje maciça tem duas camadas de armadura: **armadura principal** (vão menor) e **armadura de distribuição** (vão maior).

### Fórmula simplificada

**Área de aço por m² (As/m²) = h × ρ × 100**

Onde:
- h = espessura da laje em metros
- ρ = taxa de armadura (use 0,15% para estimativa)

### Exemplo: Laje de 12 cm de espessura

As/m² = 0,12 × 0,0015 × 100 = **1,8 cm²/m²**

Para cobrir 1 m² com barras φ 6,3 mm (As = 0,312 cm²):
Barras por metro = 1,8 / 0,312 = **5,8 barras** → 1 barra a cada 17 cm

## Tabela de Referência: Espaçamento por Bitola e Espessura

| Espessura (cm) | Bitola | Espaçamento (cm) | Taxa atendida |
|---|---|---|---|
| 10 cm | φ 6,3 mm | 20 | 0,15% |
| 12 cm | φ 8,0 mm | 20 | 0,21% |
| 15 cm | φ 8,0 mm | 15 | 0,22% |
| 18 cm | φ 10,0 mm | 15 | 0,22% |

> Valores de referência para CA-50. O engenheiro calculista define os valores exatos do projeto.

## Laje Treliçada: Estimativa de Aço

Na laje treliçada, o aço vem em dois componentes:

1. **Treliças metálicas:** geralmente TR-08, TR-10 ou TR-12 — espaçamento conforme projeto
2. **Armadura complementar:** barras φ 5 mm a φ 8 mm para nervuras e topos

### Consumo típico de treliças
- TR-08 (altura 8 cm): **4 a 5 kg/m²**
- TR-10 (altura 10 cm): **5 a 7 kg/m²**
- TR-12 (altura 12 cm): **6 a 9 kg/m²**

## Calculadora Online Gratuita

A BR Aço disponibiliza a **Calculadora de Vergalhão** em nosso site. Informe o vão, a espessura e o sistema de laje — receba a estimativa de material em segundos.

Depois, envie o projeto para o corte e dobra e receba o orçamento com os valores exatos.`,
};

export default post;
