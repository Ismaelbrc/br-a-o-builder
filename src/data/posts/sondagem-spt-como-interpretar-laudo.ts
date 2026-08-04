// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 97,
  slug: "sondagem-spt-como-interpretar-laudo",
  category: "Fundação",
  title: "Sondagem SPT: O que É e Como Interpretar o Laudo para Projetar Fundações",
  metaDescription: "O que é a sondagem SPT, o que significa o índice NSPT e como interpretar o laudo para definir tipo e profundidade da fundação.",
  keyword: "sondagem SPT interpretar laudo",
  date: "03 Abr 2026",
  summary: "O que é a sondagem SPT, como é realizada, o que significa o NSPT e como interpretar o laudo para projetar fundações.",
  content: `## O que é a Sondagem SPT?

SPT (Standard Penetration Test — Ensaio de Penetração Padrão) é o ensaio geotécnico mais utilizado no Brasil para investigar o subsolo. Ele determina a resistência do solo em diferentes profundidades e permite classificar o tipo de solo encontrado. A BR Aço trata esse tema com atenção redobrada em cada obra atendida em Goiânia e em Goiás.

A sondagem SPT é regulamentada pela **NBR 6484:2001** e deve ser realizada por empresa especializada antes de qualquer projeto de fundação.

## Como é Realizada

1. Perfura-se o terreno com trado manual ou mecânico até a profundidade de ensaio
2. Um amostrador padrão (Split Spoon Sampler, Ø50 mm) é inserido no furo
3. Um peso de 65 kg é solto em queda livre de 75 cm (martelo Terzaghi)
4. Conta-se o número de golpes necessários para cravar o amostrador **30 cm** no solo
5. Esse número de golpes = **NSPT** (índice de penetração padrão)
6. Repete-se a cada metro de profundidade

A amostra de solo retirada pelo amostrador é descrita (cor, textura, plasticidade) pelo sondador qualificado.

## O que Significa o NSPT

| NSPT | Classificação do solo |
|---|---|
| 0 (não crava) | Solo muito mole / sem resistência |
| 1 – 4 | Argila mole, areia fofa |
| 5 – 8 | Argila média, areia medianamente compacta |
| 9 – 18 | Argila rija, areia compacta |
| 19 – 30 | Argila dura, areia muito compacta |
| > 30 | Solo muito denso ou rocha branda |
| "Impenetrável" | Rocha ou matacão |

Em geral, fundações rasas exigem NSPT ≥ 6 a 8 nas camadas de apoio. Estacas buscam NSPT ≥ 15 a 20 na base.

## Como Ler o Laudo de Sondagem

O laudo de sondagem contém:
- Perfil estratigráfico (coluna com tipos de solo por profundidade)
- Gráfico de NSPT × profundidade
- Nível d'água (NA) — profundidade em que encontrou água
- Número e posição dos furos (SP-01, SP-02, etc.)
- Profundidade de impenetrabilidade

### Exemplo de interpretação:
> SP-01: 0–2m (argila porosa, NSPT 3-5) → solo fraco
> 2–5m (argila arenosa, NSPT 8-12) → solo médio
> 5–8m (areia compacta, NSPT 20-28) → camada de apoio
> 8m: impenetrável (rocha)

Nesse caso, estaca de 6 m seria adequada para atingir a camada de areia compacta.

## Número Mínimo de Sondagens

A **NBR 8036:1983** define:
- Área até 200 m²: mínimo 2 sondagens
- Área de 200 a 1.200 m²: 1 sondagem para cada 200 m² adicionais
- Área > 1.200 m²: 1 sondagem para cada 500 m² adicionais, mínimo 6

Para obras residenciais unifamiliares, 2 a 3 sondagens em cantos opostos do terreno já permitem uma análise adequada.

## Cuidado: Limitações do SPT

O SPT não detecta:
- **Matacões** (pedras grandes isoladas) que podem ser confundidos com rocha
- **Cavernas** e vazios no subsolo
- **Solos cimentados** que podem dar NSPT alto mas não são rocha

Em terrenos com histórico de aterro, antigas pedreiras ou próximos a corpos d'água, complementar o SPT com SPT-T (torque) ou ensaio de palheta (vane test) para solos argilosos.`,
};

export default post;
