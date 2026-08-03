// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 91,
  slug: "interferencias-entre-projetos-na-obra",
  category: "Gestão de Obra",
  title: "Interferências entre Projetos na Obra: Como Coordenar e Evitar Problemas",
  metaDescription: "Como identificar e resolver interferências entre projeto estrutural, elétrico e hidrossanitário antes da execução.",
  keyword: "interferências entre projetos obra",
  date: "27 Mar 2026",
  summary: "Como identificar e resolver interferências entre projetos estrutural, elétrico, hidrossanitário e arquitetônico — compatibilização antes da execução.",
  content: `## O Problema das Interferências

Imagine descobrir na hora de concretar que um pilar passa no meio da janela projetada pelo arquiteto — ou que a caixa de passagem elétrica conflita com uma viga. Essas são interferências: situações em que dois projetos de especialidade diferentes se sobrepõem no mesmo espaço físico.

As interferências descobertas em campo são caras: exigem retrabalho, modificações de projeto de emergência, quebra de elementos já executados ou, no pior caso, comprometimento estrutural.

## Tipos de Interferência

### Estrutural × Arquitetônico
- Pilar ocupa espaço de porta ou janela
- Viga reduz pé-direito abaixo do mínimo funcional
- Laje nervurada conflita com recuos de teto do projeto de interiores
- Escada estrutural com geometria incompatível com o projeto arquitetônico

### Estrutural × Hidrossanitário
- Passagem de esgoto (tubo PVC 100 mm) conflita com nervura de laje ou fundo de viga
- Caixas de gordura ou inspeção sob lajes com espaço insuficiente
- Shafts hidráulicos conflitando com pilares

### Estrutural × Elétrico
- Eletrodutos embutidos em pilares ou vigas (proibido pela NBR 6118 sem verificação)
- Caixa de luz ou tomada localizada onde há barra de armação
- Prumadas de eletrocalha conflitando com vigas

### Hidrossanitário × Elétrico
- Shafts elétrico e hidráulico no mesmo espaço (risco e norma)

## Como Realizar a Compatibilização

### Método Tradicional (sobreposição em CAD)
Imprima as plantas de cada especialidade em transparências e sobreponha fisicamente (ou no AutoCAD). Marque cada conflito e solicite revisão dos projetistas.

### Método BIM
No modelo BIM (Revit, Archicad, etc.), todas as especialidades habitam o mesmo modelo 3D. O software detecta automaticamente interferências (clash detection) e gera relatório com cada conflito: elemento A × elemento B, posição, gravidade.

## Hierarquia de Decisão em Conflitos

Quando há interferência, a hierarquia geral para resolução é:
1. **Estrutura** tem prioridade (não se mexe sem cálculo)
2. **Hidrossanitário** tem segunda prioridade (gravidade, caimento)
3. **Elétrico** é o mais flexível (pode contornar)
4. **Arquitetônico** de acabamento é o mais adaptável

Qualquer mudança no projeto estrutural exige aprovação do engenheiro calculista e nova ART.

## Quando Compatibilizar

A compatibilização deve ocorrer **antes** do início da execução — idealmente antes do licenciamento. O custo de resolver interferências em papel é 5 a 10 vezes menor que resolver na obra, e 50 vezes menor que corrigir estrutura executada.

Estabeleça reuniões semanais de compatibilização durante a fase de projeto com os responsáveis de cada especialidade.`,
};

export default post;
