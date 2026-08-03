// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 156,
  slug: "controle-tecnologico-aco-concreto-armado-ensaios",
  category: "Normas ABNT",
  title: "Controle Tecnológico do Aço para Concreto Armado: Ensaios, Certificações e Rastreabilidade",
  metaDescription: "Quais ensaios de controle tecnológico do aço a NBR 7480 e a NBR 6118 exigem, e como verificar o certificado do aço.",
  keyword: "controle tecnológico aço concreto armado",
  date: "28 Mai 2026",
  summary: "Guia completo sobre controle de qualidade do aço para concreto armado: ensaios normativos, interpretação de laudos, rastreabilidade por corrida e responsabilidade técnica.",
  content: `## O Engenheiro é Responsável pelo Aço Que Entra na Obra

A NBR 6118:2023 é clara no item 11.2: o responsável técnico deve garantir que os materiais utilizados atendam às especificações de projeto e às normas técnicas aplicáveis. Na prática, a maioria das obras aceita o aço verificando apenas se "parece certo" — diâmetro estimado a olho, ausência de ferrugem grosseira, rótulo no fardo. Isso não constitui controle tecnológico.

## O Que a NBR 7480 Exige do Fabricante

| Ensaio | Norma | Frequência |
|--------|-------|-----------|
| Tração (fy, ft, A%) | ABNT NBR ISO 15630-1 | 1 CP por corrida |
| Dobramento simples | ABNT NBR ISO 15630-1 | 1 CP por corrida |
| Geometria (diâmetro, massa) | ABNT NBR ISO 15630-1 | 5 CP por corrida |

### Valores Exigidos — CA-50

| Propriedade | Valor mínimo | Valor máximo |
|-------------|-------------|-------------|
| Resistência ao escoamento (fyk) | 500 MPa | 600 MPa |
| Resistência à tração (ft) | 1,08 × fy | — |
| Alongamento total (Agt) | 5,0% | — |
| Relação ft/fy | 1,08 | 1,35 |

## Como Interpretar o Certificado de Qualidade

Cada lote deve vir com o certificado da corrida contendo:
- Número da corrida (heat number) — deve coincidir com as nervuras das barras
- fy medido (500–600 MPa para CA-50)
- ft medido (≥ 1,08 × fy)
- Agt (≥ 5%)
- Carbono equivalente (Ceq ≤ 0,50% para CA-50)

**Sinais de certificado problemático:**
- Ausência de número de corrida — não rastreável
- Apenas "conforme NBR 7480" sem valores numéricos — não é certificado, é declaração genérica
- Agt ≤ 5,5% — material no limite de ductilidade

## Rastreabilidade: O Número de Corrida

Em caso de sinistro estrutural, o perito forense começa pelo rastreio da corrida do aço. Obras sem rastreabilidade não conseguem comprovar que usaram material conforme. O número de corrida está gravado nas nervuras do vergalhão e no certificado — sempre confira que ambos coincidem.

## Aço com Rastreabilidade Completa no Serviço de CDA

No serviço de corte e dobra da BR Aço, operamos exclusivamente com aço de usinas participantes do PSQ PBQP-H Nível A (Gerdau, ArcelorMittal, Ternium). O certificado da corrida é vinculado ao romaneio de entrega — cada peça cortada e dobrada tem rastreabilidade até a usina de origem. Para obras que exigem relatório de rastreabilidade, emitimos o documento junto com a entrega.`,
};

export default post;
