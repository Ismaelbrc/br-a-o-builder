// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 77,
  slug: "cotagem-em-projetos-de-engenharia",
  category: "Projeto Estrutural",
  title: "Cotagem em Projetos de Engenharia: Guia Prático para Leitura de Cotas",
  metaDescription: "Aprenda a ler cotas em projetos estruturais, hidráulicos e elétricos: linhas de cota, cotas de nível e tolerâncias.",
  keyword: "cotagem projetos engenharia",
  date: "11 Mar 2026",
  summary: "Aprenda a ler cotas em projetos estruturais, hidráulicos e elétricos — linhas de cota, cotas acumuladas, cotas de nível e tolerâncias dimensionais.",
  content: `## O que é Cotagem?

Cotagem é o conjunto de linhas, símbolos e valores numéricos que informam as dimensões de um elemento no projeto. Sem cotas, a escala não é suficiente para garantir precisão na execução — e qualquer erro de impressão se transforma em erro construtivo. É assim que a BR Aço trabalha esse item em obras de Goiânia, Aparecida de Goiânia e região.

## Elementos de uma Cota

Uma cota é formada por três partes:

1. **Linha de extensão** — parte do elemento e vai até a linha de cota, sem tocá-lo
2. **Linha de cota** — paralela ao elemento, terminando em setas, traços ou pontos
3. **Valor da cota** — a medida em cm, mm ou m (dependendo da norma do escritório)

No Brasil, a ABNT NBR 8403 padroniza a representação de cotas em desenho técnico. Em projetos estruturais, o mais comum é usar **centímetros** nas plantas de forma e **milímetros** nos detalhes de armação.

## Tipos de Cota

### Cota Linear
Indica uma distância entre dois pontos. A mais comum em projetos de estrutura.

### Cota de Nível (Altitude)
Representada pelo símbolo ▽ ou com seta vertical, informa a altura de um elemento em relação a um referencial (geralmente o piso do térreo = ±0,00).

> ▽ +2,80 significa que a face inferior de uma viga está a 2,80 m acima do piso de referência.

### Cota Acumulada (cota progressiva)
Parte de um ponto fixo (eixo de referência) e vai acumulando as dimensões. Facilita a locação de múltiplos elementos a partir de um único ponto de origem.

### Cota de Eixo
Indica a posição do eixo de um pilar ou parede, não a face externa. Atenção: ao executar, some ou subtraia metade da largura do elemento para encontrar a face.

## Cotas em Projeto Estrutural vs Projeto Arquitetônico

- **Projeto arquitetônico**: cota a dimensão interna dos ambientes (vão livre entre paredes)
- **Projeto estrutural**: cota eixo a eixo de pilares e de eixo de viga a eixo de viga

Essa diferença é fonte frequente de conflito em obra. O engenheiro de estruturas e o arquiteto precisam usar o mesmo referencial de eixos.

## Como Ler Cotas de Armação

Em desenhos de armação, as cotas indicam:
- Comprimento de cada barra após o corte
- Posição de dobramentos (distância da extremidade ao ponto de dobra)
- Comprimento de ganchos
- Espaçamento entre estribos (ex.: "c/15" = de 15 em 15 cm)

Sempre confira o comprimento total das barras somando as cotas parciais — qualquer discrepância indica erro de detalhamento que precisa ser resolvido antes da produção.`,
};

export default post;
