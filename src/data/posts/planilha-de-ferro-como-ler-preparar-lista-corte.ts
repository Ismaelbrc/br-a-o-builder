// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 157,
  slug: "planilha-de-ferro-como-ler-preparar-lista-corte",
  category: "Projeto Estrutural",
  title: "Planilha de Ferro: Como Ler e Preparar a Lista de Corte para o Serviço de CDA",
  metaDescription: "Como ler a planilha de ferro de um projeto estrutural e preparar a lista de corte para o serviço de corte e dobra.",
  keyword: "planilha de ferro lista de corte",
  date: "28 Mai 2026",
  summary: "Guia prático para engenheiros e mestres de obra sobre como ler a planilha de ferro, verificar os campos obrigatórios e preparar a lista de corte para o serviço de corte e dobra.",
  content: `## A Planilha de Ferro é o "DNA" do Projeto Estrutural

A planilha de ferro é o documento que traduz o projeto estrutural em quantidades e dimensões de barras. É o documento que você envia para o serviço de corte e dobra — e a qualidade desse documento determina diretamente a qualidade do que vai chegar na obra. Esse é o entendimento que orienta o trabalho da BR Aço em obras de Goiânia e do DF.

## Estrutura da Planilha de Ferro — Campos Obrigatórios

| Campo | Descrição | Exemplo |
|-------|-----------|---------|
| Posição | Código interno do projeto | P-07 |
| Elemento | Identificação da peça estrutural | V3 (Viga 3) |
| Diâmetro (φ) | Em milímetros | 16 mm |
| Classe do aço | CA-25, CA-50 ou CA-60 | CA-50 |
| Comprimento de corte (L) | Comprimento total antes da dobra, em cm | 635 cm |
| Número de peças (n) | Quantidade de barras da posição | 8 |
| Forma | Código de dobra ou croqui dimensional | F-12 (180°) |

**Lendo a linha de exemplo:**
Posição P-07, Viga V3, 8 barras de ø16 mm CA-50, cada barra com 635 cm, gancho de 180° numa extremidade.
Peso: 8 × 6,35 × 1,578 kg/m = 79,8 kg

## Erros Frequentes que Causam Problemas no CDA

### Erro 1: Comprimento de Corte ≠ Comprimento de Forma
O comprimento de corte (L) deve ser o comprimento em linha reta, antes de qualquer dobra. Alguns projetistas especificam o comprimento de forma (comprimento perimetral após dobra). Isso gera barras com comprimento errado.

### Erro 2: Croqui de Dobra Sem Cotas Parciais
Um croqui sem cotas individuais para cada trecho é insuficiente. O industrializador não sabe onde está o ponto de dobra ao longo da barra. Sempre especificar cotas a, b, c e ângulo de cada dobra.

### Erro 3: Diâmetros Não Comerciais
CA-50 disponível: 6,3 — 8,0 — 10,0 — 12,5 — 16,0 — 20,0 — 25,0 — 32,0 — 40,0 mm. Verificar disponibilidade antes de finalizar a planilha.

### Erro 4: Omissão de Armaduras de Pele e Distribuição
Armaduras de pele em vigas altas (h > 60 cm) e armadura de distribuição de lajes são frequentemente omitidas. O industrializador não adiciona o que não está na planilha.

## Formatos Aceitos para Envio ao CDA

| Formato | Uso |
|---------|-----|
| Excel/Sheets | Formato ideal — tabela com os campos obrigatórios |
| PDF de projeto | Aceito, requer interpretação da equipe técnica |
| DWG/CAD | Ideal para projetos com geometria complexa |
| Foto/escaneamento | Aceito para orçamento estimativo, não para produção |

## O Que Acontece Após o Envio

1. Engenheiro da BR Aço revisa a planilha (1–4h)
2. Retorno com confirmação de interpretação, prazo e preço
3. Após aprovação: produção inicia no dia seguinte
4. Romaneio de entrega com posição, diâmetro, quantidade e comprimento acompanha cada pacote

Nossa equipe analisa planilhas em qualquer formato. Em casos de planilha incompleta, retornamos com lista de pendências antes de iniciar — não produzimos com dúvida.`,
};

export default post;
