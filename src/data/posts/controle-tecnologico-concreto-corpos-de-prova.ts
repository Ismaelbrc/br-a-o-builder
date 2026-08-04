// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 112,
  slug: "controle-tecnologico-concreto-corpos-de-prova",
  category: "Concreto",
  title: "Controle Tecnológico do Concreto: Como Fazer e O que Exige a Norma",
  metaDescription: "Controle tecnológico do concreto: coleta de corpo de prova, ensaio de compressão e critérios de aceitação da NBR 12655.",
  keyword: "controle tecnológico concreto corpos de prova",
  date: "21 Abr 2026",
  summary: "Controle tecnológico do concreto — coleta e moldagem de corpos de prova, cura, ensaio de compressão e critérios de aceitação conforme NBR 12655 e NBR 5738.",
  content: `## Por que Controlar o Concreto?

O controle tecnológico do concreto é a única forma de confirmar que o fck especificado no projeto foi efetivamente entregue pela concreteira e materializado na estrutura. Sem esse controle, você está aceitando uma estrutura sem saber se ela atende ao projeto. Esse padrão técnico é seguido pela BR Aço em fornecimentos por toda a Grande Goiânia e o DF.

Além disso, a **NBR 12655** (preparo e controle) e a **NBR 14931** (execução) tornam o controle obrigatório para estruturas em classes de agressividade II ou superior.

## Frequência de Coleta (NBR 12655)

Para obras com volume de concreto ≤ 50 m³/dia:
- Mínimo 1 amostragem a cada **20 m³** de concreto lançado
- Cada amostragem deve gerar **pelo menos 2 CPs** (para rompimento aos 28 dias)
- Recomenda-se também moldagem de CPs para rompimento aos 7 dias (indicador precoce)

## Onde e Como Coletar

A coleta deve ser feita **no ponto de lançamento** (não na saída do caminhão), para representar o concreto que efetivamente entra na estrutura:
- Aguardar descarregar ~10% do caminhão
- Coletar entre 20% e 80% da carga

**Nunca coletar apenas da saída da canaleta** — o concreto do início pode ser mais seco (menos slump) que o restante.

## Moldagem dos Corpos de Prova (NBR 5738)

Forma padrão: cilindro de **10 × 20 cm** (Ø10 cm, altura 20 cm). Também aceitos 15 × 30 cm.

**Procedimento de moldagem:**
1. Preencher em 2 camadas (para CP de 10×20 cm)
2. Socar cada camada 12 vezes com haste lisa
3. Arredondar a superfície topo com espátula
4. Cobrir com plástico e manter em temperatura ambiente por 24 horas
5. Após 24h: desformar e levar à câmara de cura úmida (T = 23 ± 2 °C, UR ≥ 95%) até o dia do ensaio

## Cura dos Corpos de Prova

Os CPs não devem ficar sobre a laje sob o sol ou na van do laboratório. As condições de cura afetam significativamente o resultado:

- CP curado fora da câmara úmida pode registrar resistência 15–25% menor
- CP curado a 35 °C pode ganhar resistência mais rápido nos primeiros dias mas apresentar resistência final menor

A câmara úmida padroniza as condições e torna os resultados comparáveis entre obras.

## Ensaio de Compressão (NBR 5739)

O CP é prensado axialmente até a ruptura numa prensa hidráulica calibrada. O resultado é:

> fci = F / A

Onde F é a força de ruptura (kN) e A é a área da seção (cm²).

**Critérios de aceitação (NBR 12655):**
- Nenhum resultado individual < **0,85 × fck**
- Média de qualquer conjunto de 3 resultados consecutivos ≥ **fck**

Se qualquer resultado estiver abaixo do mínimo, o engenheiro avalia por **extração de testemunhos** da estrutura para confirmar a resistência real.

## Quem Deve Fazer o Controle?

O controle tecnológico pode ser executado pelo próprio responsável técnico da obra, mas o ideal é contratar **laboratório credenciado** pelo INMETRO ou CREA. Para obras financiadas por banco (SBPE, FGTS, CEF), o controle por laboratório credenciado é obrigatório.`,
};

export default post;
