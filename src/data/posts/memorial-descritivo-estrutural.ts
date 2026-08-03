// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 93,
  slug: "memorial-descritivo-estrutural",
  category: "Projeto Estrutural",
  title: "Memorial Descritivo Estrutural: O que Contém e Como Usar na Obra",
  metaDescription: "O que é o memorial descritivo estrutural, quais informações deve conter e como usar como guia de execução da obra.",
  keyword: "memorial descritivo estrutural",
  date: "29 Mar 2026",
  summary: "O que é o memorial descritivo estrutural, quais informações ele deve conter e como usar como guia de execução na obra.",
  content: `## O que é o Memorial Descritivo Estrutural?

O memorial descritivo estrutural é o documento escrito que acompanha as pranchas de projeto e descreve as premissas, materiais, normas e condições de execução adotadas pelo engenheiro calculista. Ele complementa os desenhos com informações que não cabem ou não são adequadas para representação gráfica.

É um documento obrigatório segundo o CREA para a aprovação do projeto e é parte integrante da ART do engenheiro.

## O que Deve Conter

### 1. Identificação do Projeto
- Nome da obra e endereço
- Proprietário ou contratante
- Engenheiro calculista e número do CREA
- Data de emissão e revisão

### 2. Normas Técnicas Adotadas
Lista das NBRs utilizadas no projeto:
> ABNT NBR 6118:2014, NBR 6120:2019, NBR 6123:1988, NBR 7480:2007, NBR 14931:2003, etc.

### 3. Materiais Especificados

**Concreto:**
- Resistência característica à compressão: fck (MPa)
- Consistência (slump): em mm ou cm
- Dimensão máxima do agregado (Dmax)
- Tipo de cimento recomendado

**Aço:**
- Classe: CA-50 (fyk = 500 MPa) ou CA-60 (fyk = 600 MPa)
- Fornecedor preferencial (opcional)

### 4. Carregamentos Adotados

- **Cargas permanentes**: peso próprio dos elementos + revestimentos + alvenaria
- **Sobrecargas de uso**: escritório (2,0 kN/m²), residencial (1,5 kN/m²), garagem (3,0 kN/m²)
- **Carga de vento**: calculada conforme NBR 6123 (velocidade básica V0 da região)

### 5. Dados do Solo

- Tipo de fundação adotada
- Tensão admissível do solo (σadm) em kPa
- Laudo de sondagem SPT de referência (data e empresa)
- Profundidade de fundação

### 6. Condições de Exposição

- Classe de agressividade ambiental (I a IV, conforme NBR 6118 Tabela 6.1)
- Cobrimentos nominais adotados por elemento

### 7. Instruções de Execução

Informações complementares para o executor:
- Sequência de concretagem recomendada
- Prazo mínimo de desforma
- Posição e tratamento de juntas de concretagem
- Restrições de carga durante a obra (proibição de estoque de material sobre lajes frescas)

## Como Usar em Campo

O memorial deve estar disponível no canteiro junto com as pranchas. Antes de iniciar qualquer serviço estrutural, confira no memorial:
- O fck especificado → concreteira deve fornecer com esse fck
- O cobrimento nominal → define o espaçador a usar
- As condições de desforma → evita remover escoras cedo demais

Em caso de dúvida ou impossibilidade de seguir alguma especificação do memorial, entre em contato com o engenheiro calculista. **Nunca altere materiais ou condições de execução sem anuência do projetista.**`,
};

export default post;
