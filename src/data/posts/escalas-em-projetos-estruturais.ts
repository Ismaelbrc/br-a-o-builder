// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 76,
  slug: "escalas-em-projetos-estruturais",
  category: "Projeto Estrutural",
  title: "Escalas em Projetos Estruturais: Como Interpretar e Usar Corretamente",
  metaDescription: "Entenda as escalas em projetos de engenharia, como converter medidas do papel para a realidade e qual usar em cada desenho.",
  keyword: "escalas em projetos estruturais",
  date: "10 Mar 2026",
  summary: "Entenda como funcionam as escalas em projetos de engenharia, como converter medidas no papel para a realidade e quais escalas são usadas em cada tipo de desenho técnico.",
  content: `## O que é Escala em Projetos de Engenharia?

Escala é a relação entre a dimensão representada no desenho e a dimensão real do elemento construído. Uma escala 1:50 significa que 1 cm no papel equivale a 50 cm na obra — ou seja, a planta é 50 vezes menor que a realidade. Na BR Aço, esse processo é aplicado no dia a dia do fornecimento a obras de Goiânia e do DF.

A escala não é um detalhe: ela define o nível de detalhe que o projeto precisa mostrar e é a base para qualquer conferência de medida em campo.

## Escalas Mais Usadas em Projetos Estruturais

| Escala | Uso Típico |
|---|---|
| 1:1 | Detalhes de emendas, ganchos e chumbadores |
| 1:5 / 1:10 | Detalhes de armação de pilares e vigas |
| 1:20 / 1:25 | Seções de elementos, cortes de lajes |
| 1:50 | Plantas de forma e armação (pavimentos) |
| 1:100 | Plantas gerais, locação de pilares |
| 1:200 | Implantação e plantas de grandes obras |

Em projetos de casas populares é comum a escala 1:50 para tudo. Em edificações de grande porte, cada folha usa a escala mais adequada ao nível de detalhe exigido.

## Como Converter Medidas na Escala

A fórmula é simples:

**Medida real = medida no papel × denominador da escala**

Exemplo: numa planta 1:50, você mede 3 cm com a régua. A dimensão real é 3 × 50 = 150 cm = 1,50 m.

**Medida no papel = medida real ÷ denominador**

Para desenhar uma viga de 6,00 m em escala 1:100: 600 cm ÷ 100 = 6 cm no papel.

Use sempre o escalímetro — régua triangular com múltiplas escalas impressas — para leitura direta sem necessidade de cálculo.

## Escalímetro: Como Usar

O escalímetro tem faces com escalas impressas (normalmente 1:20, 1:25, 1:50, 1:75, 1:100, 1:125). Posicione a face correta sobre o desenho e leia diretamente em centímetros ou metros.

Dica: sempre confirme a escala escrita no rodapé da folha antes de medir. Projetos impressos em formato diferente do original (ex.: A4 em vez de A1) perdem a correspondência de escala — nesse caso, use apenas as cotas escritas no projeto.

## Escala Numérica vs Escala Gráfica

- **Escala numérica** (1:50, 1:100): válida apenas se a impressão estiver no formato original
- **Escala gráfica** (barra com divisões no rodapé): mantém a proporção mesmo se o papel for reduzido ou ampliado

Projetos de qualidade incluem ambas.

## Qual Escala Pedir ao Projetista?

Para execução de armação em canteiro, peça detalhes na escala 1:20 ou 1:25 para pilares e vigas, e 1:50 para a planta geral. Detalhes críticos (ligações, ancoragens especiais) devem vir em 1:10 ou 1:5 para que as dimensões de gancho e transpasse fiquem legíveis sem ambiguidade.`,
};

export default post;
