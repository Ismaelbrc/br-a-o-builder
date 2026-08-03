// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 152,
  slug: "taxa-armadura-minima-maxima-nbr-6118",
  category: "Normas ABNT",
  title: "Taxa de Armadura Mínima e Máxima pela NBR 6118: Guia Técnico Completo",
  metaDescription: "O que dizem as tabelas 17.1 e 17.3 da NBR 6118 sobre taxa de armadura mínima e máxima em viga, pilar e laje.",
  keyword: "taxa de armadura mínima NBR 6118",
  date: "28 Mai 2026",
  summary: "Guia técnico sobre taxas mínimas e máximas de armadura conforme NBR 6118, com tabelas, fórmulas e exemplos práticos para vigas, pilares e lajes.",
  content: `## O Que São Taxas de Armadura e Por Que a NBR 6118 as Limita

A taxa de armadura (ρ) é a relação entre a área de aço (As) e a área da seção transversal de concreto (Ac). Ela responde a uma pergunta crítica de projeto: quanto aço é necessário — e quanto é demais?

A NBR 6118:2023 estabelece limites inferior e superior para essa taxa. Não por burocracia, mas por comportamento estrutural comprovado:

- **Taxa mínima (ρ_mín)**: garante que o elemento não apresente ruptura frágil logo após a fissuração do concreto. Sem armadura mínima, o colapso pode ser súbito e sem aviso.
- **Taxa máxima (ρ_máx)**: evita que o aço sofra deformações excessivas antes que o concreto alcance sua resistência. Uma seção super-armada falha pelo esmagamento do concreto — modo de ruptura frágil, indesejado e imprevisível.

## Tabela de Taxa Mínima por Elemento (NBR 6118 — Tabela 17.1 e 17.3)

### Vigas (item 17.3.5)

| Tipo de solicitação | ρ_mín (As/Ac) |
|---------------------|---------------|
| Flexão simples — concreto C20 | 0,15% |
| Flexão simples — concreto C30 | 0,17% |
| Flexão simples — concreto C40 | 0,19% |
| Flexão simples — concreto C50 | 0,21% |
| Compressão (armadura de pele) | 0,10% (por face) |

A fórmula exata é: ρ_mín = 0,26 × (fctm/fyk) ≥ 0,13%, onde fctm é a resistência média à tração do concreto e fyk é a resistência característica ao escoamento do aço.

**Exemplo:** Viga 30×60 cm, concreto C30 (fctm = 2,9 MPa), CA-50 (fyk = 500 MPa)
- ρ_mín = 0,26 × (2,9/500) = 0,151%
- Área mínima = 0,00151 × (30 × 60) = 2,72 cm²
- Solução prática: 3 barras ø12,5 mm CA-50 (As = 3,68 cm²) ✓

### Pilares (item 17.3.6)

| Condição | ρ_mín | ρ_máx |
|----------|--------|--------|
| Normal (compressão centrada ou excêntrica) | 0,40% | 8,00% |
| Em regiões de emenda por traspasse simultâneas | — | 10,00% |

### Lajes (item 17.3.7)

| Tipo | ρ_mín |
|------|--------|
| Laje maciça — direção principal | 0,15% de bw × h |
| Laje maciça — direção secundária | 0,90 cm²/m (armadura de distribuição) |
| Armadura negativa sobre apoios | 20% da armadura positiva no vão |

## Consequências da Violação dos Limites

**Sub-armadura (ρ < ρ_mín):** fissuração excessiva em serviço, possibilidade de colapso frágil após fissuração do concreto, responsabilidade técnica do engenheiro calculista.

**Super-armadura (ρ > ρ_máx):** dificuldade de adensamento do concreto, modo de ruptura por esmagamento sem aviso, custo desnecessário de aço sem ganho estrutural proporcional.

## A Relação Entre Taxa de Armadura e Qualidade do Corte

Uma taxa de armadura calculada com precisão nada vale se a barra chegar com comprimento errado. O desperdício do corte manual — pontas e erros de medida — obriga o armador a usar uma barra a mais para cobrir a diferença, alterando involuntariamente a taxa calculada.

No corte e dobra industrial, a tolerância de corte é de ±3 mm (máquina CNC), contra ±15–25 mm no corte manual com disco. Isso significa que a taxa de armadura do canteiro corresponde exatamente à taxa calculada pelo engenheiro — sem aproximações, sem compensações com barras extras.

Ao especificar corte e dobra industrial, o engenheiro garante que o projeto sai do papel exatamente como foi calculado.`,
};

export default post;
