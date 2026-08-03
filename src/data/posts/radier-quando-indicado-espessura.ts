// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 104,
  slug: "radier-quando-indicado-espessura",
  category: "Fundação",
  title: "Radier: Quando É Indicado, Vantagens e Como Calcular a Espessura",
  metaDescription: "Entenda o que é o radier, quando ele é a melhor solução de fundação, como calcular a espessura mínima e como armar conforme as solicitações de projeto.",
  keyword: "radier fundação quando indicado espessura",
  date: "11 Abr 2026",
  summary: "O que é radier, quando é indicado como solução de fundação, como calcular a espessura mínima e como armar corretamente.",
  content: `## O que é Radier?

Radier (do francês *radier*) é uma laje de fundação que cobre toda a área da edificação. Ele distribui as cargas de todos os pilares e paredes para o solo uniformemente, funcionando como uma "plataforma flutuante" sobre o terreno.

Ao contrário das sapatas isoladas que pontualmente distribuem a carga, o radier transforma toda a edificação numa única fundação contínua.

## Quando o Radier é Indicado?

### Solo de baixa resistência (σadm < 80 kPa)
Se a tensão admissível do solo é baixa, as sapatas ficariam tão grandes que se sobreporiam — é mais racional reunir tudo numa única laje.

### Edificações leves e uniformes
Residências térreas, galpões e edificações com carga relativamente uniforme distribuída. O radier funciona bem quando não há concentrações muito elevadas de carga.

### Solos com variabilidade (risco de recalque diferencial)
A rigidez do radier tende a distribuir recalques diferenciais entre os pilares, reduzindo o risco de fissuras por recalque não uniforme.

### Edifícios em solos de aterro controlado
Quando o terreno é todo aterrado e compactado com controle tecnológico, o radier pode ser a solução mais econômica.

## Quando NÃO Usar Radier

- Solo com camada resistente muito profunda (melhor usar estacas)
- Edificações com cargas muito concentradas e desiguais (pilares com carga 10× maior que outros)
- Terrenos com nível d'água elevado e variável (risco de subpressão de água)

## Espessura Mínima do Radier

A espessura mínima para radiers de edificações convencionais é determinada pelo maior dos seguintes critérios:

1. **Punção nos pilares:** h ≥ Vd / (bo × fcd) — onde bo é o perímetro crítico (d ao redor do pilar)
2. **Flexão:** h definida para limitar a altura de cálculo
3. **Construtivo:** mínimo de **20 cm** para execução e cobrimento adequados

Para residências unifamiliares (cargas baixas, σadm = 80–150 kPa), espessuras de 20 a 30 cm com malha dupla de φ10 c/15 são usuais. Para edificações comerciais, 30 a 50 cm são mais comuns.

## Armação do Radier

O radier trabalha como laje invertida — as reações do solo são as "cargas" e os pilares são os apoios. Por isso:

- **Armadura principal: na face SUPERIOR** (região mais tracionada sobre pilares)
- **Armadura de distribuição: na face INFERIOR** (região mais tracionada no meio dos vãos)

Na prática, adota-se armação dupla (malha superior e inferior) com poucas variações — a incerteza na distribuição real de pressões no solo justifica a simetria.

## Atenção ao Contato com o Solo

Antes de concretar o radier:
- Apiloar ou compactar o solo de fundação
- Aplicar um lastro de concreto magro (Cc 8 a 10 MPa) de 5 cm — serve de superfície de trabalho e protege a armação do contato direto com o solo
- Usar impermeabilização sob o lastro se houver risco de umidade ascensional`,
};

export default post;
