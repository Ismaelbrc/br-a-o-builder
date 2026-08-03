// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 131,
  slug: "como-especificar-corte-e-dobra-projeto",
  category: "Corte e Dobra",
  title: "Como Especificar Corte e Dobra no Projeto Estrutural e na Planilha de Ferro",
  metaDescription: "Guia para engenheiros sobre como especificar corte e dobra no memorial descritivo e na planilha de ferro, com os dados necessários para orçamento e fabricação.",
  keyword: "como especificar corte e dobra projeto",
  date: "21 Mai 2026",
  summary: "O que o engenheiro precisa especificar para contratar corte e dobra: planilha de ferro, memorial descritivo, tolerâncias e dados para orçamento.",
  content: `## Por que a Especificação Correta de Corte e Dobra Importa?

A qualidade do serviço de corte e dobra depende diretamente das informações fornecidas pelo engenheiro calculista ou pelo responsável pela obra. Uma planilha de ferro incompleta resulta em peças erradas, retrabalho, atraso na entrega e custo adicional.

Este guia é direcionado a engenheiros calculistas, arquitetos com projeto estrutural e gestores de obra que querem garantir que a indústria de corte e dobra produza exatamente o que o projeto especifica.

## O que é a Planilha de Ferro (Mapa de Armação)?

A planilha de ferro (também chamada mapa de armação ou boletim de aço) é o documento que relaciona todas as barras de aço de uma obra, organizadas por:
- Elemento estrutural (pilar P1, viga V1, laje L1, etc.)
- Posição dentro do elemento (armadura longitudinal, estribo, armadura negativa)
- Bitola (diâmetro)
- Comprimento das barras
- Número de barras
- Forma das dobras (se houver)

É a base de fabricação do serviço de corte e dobra.

## Dados Mínimos para a Planilha de Ferro

| Campo | Descrição | Exemplo |
|-------|-----------|---------|
| Elemento | Identificação do elemento estrutural | P1, V-102, L3 |
| Posição | Designação da barra no detalhe | 1, 2, 3... |
| Material | Classe do aço | CA-50, CA-60 |
| Diâmetro (φ) | Bitola em mm | 8, 10, 12,5, 16 mm |
| Comprimento total | Comprimento desenvolvido da barra | 1,50 m, 2,35 m |
| Quantidade | Número de barras iguais | 8 barras |
| Forma de dobramento | Tipo de dobra (reta, com gancho, estribo) | Gancho 180° em ambas as extremidades |
| Raio de dobramento | Raio da dobra em mm | 3,5 × φ (padrão CA-50) |

## Como Montar a Planilha de Ferro: Passo a Passo

### 1. Extrair as barras do projeto estrutural
Analisar cada detalhe de armação (pilares, vigas, lajes, fundações) e listar cada barra com suas características.

### 2. Calcular o comprimento desenvolvido
O comprimento desenvolvido é o comprimento real do aço, incluindo os trechos retos e os arcos de dobra.

**Para gancho de 90°:** acrescentar 8 × φ ao comprimento reto.
**Para gancho de 180°:** acrescentar 4,5 × φ.
**Para estribo fechado com ganchos de 135°:** comprimento = (2 × altura + 2 × largura) + 2 × 5 × φ (extensão do gancho).

### 3. Multiplicar pela quantidade
Quantidade × comprimento desenvolvido = comprimento total de cada bitola/tipo.

### 4. Calcular o peso
Peso (kg) = comprimento total (m) × peso linear (kg/m)

| Bitola | Peso linear (kg/m) |
|--------|-------------------|
| φ 4,2 mm | 0,109 |
| φ 5,0 mm | 0,154 |
| φ 6,3 mm | 0,245 |
| φ 8,0 mm | 0,395 |
| φ 10,0 mm | 0,617 |
| φ 12,5 mm | 0,963 |
| φ 16,0 mm | 1,578 |
| φ 20,0 mm | 2,466 |
| φ 25,0 mm | 3,853 |
| φ 32,0 mm | 6,313 |

## O que Incluir no Memorial Descritivo Estrutural

O memorial descritivo é o documento que acompanha o projeto e define as especificações técnicas. Para corte e dobra, deve conter:

1. **Normas de referência:** NBR 6118:2014, NBR 7480 (aço)
2. **Classes de aço:** CA-50 para armaduras principais; CA-60 para estribos e malhas; especificar claramente onde cada classe é usada
3. **Dimensões das barras:** comprimentos mínimos e máximos aceitáveis (tolerância ± 5 mm é padrão industrial)
4. **Raios de dobramento:** conforme NBR 7480 e NBR 6118 (mínimo 3,5 × φ para CA-50 com φ ≤ 20 mm)
5. **Identificação:** cada peça deve vir etiquetada com o elemento estrutural e a posição (ex.: "P1 - pos.2")
6. **Prazo de entrega:** alinhado com o cronograma de concretagem da obra

## Comunicação com a Indústria de Corte e Dobra

### O que enviar para solicitar orçamento
- Planilha de ferro (Excel ou PDF) com todos os campos acima
- Ou: projeto estrutural (PDF) com detalhes de armação claramente legíveis
- Endereço da obra e prazo desejado de entrega

### O que esperar receber
- Orçamento por kg de aço, por bitola ou por pacote/lote
- Prazo de produção e entrega
- Método de identificação das peças

### Tolerâncias de Fabricação (NBR 7480)
| Dimensão | Tolerância |
|----------|------------|
| Comprimento das barras ≤ 6 m | ± 5 mm |
| Comprimento das barras > 6 m | ± 10 mm |
| Ângulo de dobra | ± 2° |
| Diâmetro | ± 4% do nominal |

## Erros Comuns ao Especificar Corte e Dobra

1. **Esquecer o comprimento de ancoragem:** especificar apenas o comprimento do elemento estrutural sem incluir os ganchos ou comprimentos de transpasse
2. **Não indicar a classe do aço:** "vergalhão 10 mm" sem especificar CA-50 ou CA-60
3. **Dobras sem dimensões:** detalhar a forma das dobras sem indicar as dimensões dos tramos retos
4. **Planilha de ferro sem a posição:** números de posição não vinculados ao detalhe do projeto — dificulta conferência em obra

A BR Aço aceita projetos estruturais em PDF e planilhas de ferro em Excel ou AutoCAD. Nossa equipe técnica confere cada detalhe antes da produção para evitar erros e retrabalho.`,
};

export default post;
