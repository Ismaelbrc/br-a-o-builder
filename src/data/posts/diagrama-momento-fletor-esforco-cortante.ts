// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 128,
  slug: "diagrama-momento-fletor-esforco-cortante",
  category: "Projeto Estrutural",
  title: "Diagramas de Momento Fletor e Esforço Cortante: Como Interpretar",
  metaDescription: "Como ler e interpretar diagramas de momento fletor (DMF) e esforço cortante (DEF) em vigas e pórticos. Conceitos de sinal, máximos e relação com a armação.",
  keyword: "diagrama momento fletor esforço cortante",
  date: "21 Mai 2026",
  summary: "Interpretação de diagramas de momento fletor (DMF) e esforço cortante (DEF): sinais, posições de máximo, zero de momento e relação com armação.",
  content: `## Por que os Diagramas de Esforços São Importantes?

Os diagramas de momento fletor (DMF) e esforço cortante (DEF) são a linguagem visual do projeto estrutural. Eles mostram como os esforços internos variam ao longo do elemento. Interpretar corretamente esses diagramas é essencial para:
- Posicionar a armadura no lugar certo (onde há tração)
- Definir os pontos de corte das barras
- Dimensionar os estribos ao longo da viga

## O que é Momento Fletor?

Momento fletor (M) é o esforço interno que tende a curvar o elemento estrutural. É causado por cargas transversais e desbalanceadas.

**Convenção de sinais mais usada em vigas:**
- **Momento positivo (+):** curva a viga "para baixo" (concavidade para cima) — tração na fibra inferior
- **Momento negativo (−):** curva a viga "para cima" (concavidade para baixo) — tração na fibra superior

**Consequência para a armação:**
- Momento positivo → armadura **na parte de baixo** da viga
- Momento negativo → armadura **na parte de cima** da viga

## Formas do DMF para Cargas Comuns

### Viga simplesmente apoiada com carga distribuída uniforme
DMF: parábola com máximo no meio do vão.
M_max = w × L² / 8

| w (kN/m) | L (m) | M_max (kN·m) |
|----------|-------|-------------|
| 20 | 5 | 62,5 |
| 20 | 6 | 90 |
| 30 | 5 | 93,75 |
| 30 | 6 | 135 |

### Viga simplesmente apoiada com carga pontual no meio
DMF: dois segmentos de reta com máximo no ponto de aplicação.
M_max = P × L / 4

### Viga engastada-livre (balanço) com carga distribuída
DMF: parábola com máximo no engaste e zero na extremidade livre.
M_max = w × L² / 2

### Viga contínua (dois vãos iguais, carga distribuída)
- Momento positivo máximo em cada vão: menor que na viga simplesmente apoiada
- Momento negativo máximo sobre o apoio central
- **Ponto de momento zero:** existe entre o apoio e o vão — onde a armadura muda de face

## O que é Esforço Cortante?

Esforço cortante (V) é a força interna perpendicular ao eixo do elemento — tende a "cortar" a seção transversal. É máximo próximo aos apoios e nulo no centro de vão (para carga uniforme simétrica).

### Viga simplesmente apoiada com carga distribuída
DEF: função linear, máximo nos apoios, zero no meio do vão.
V_max = w × L / 2

### Diagrama de esforço cortante e estribos
O espaçamento dos estribos é definido pelo esforço cortante local:
- Onde V é alto (próximo ao apoio): estribos mais espaços
- Onde V é baixo (meio do vão): estribos mais afastados

## Ponto de Momento Zero — Importância para a Armação

O ponto de momento zero é onde o momento fletor muda de sinal (de positivo para negativo ou vice-versa). Nesse ponto:
- As barras de armadura positiva podem (potencialmente) ser cortadas
- A armadura negativa começa

**Na prática:** as barras não são cortadas exatamente no ponto de zero — precisam se estender além pelo comprimento de ancoragem lb,ef. A NBR 6118 exige que a barra vá além do ponto teórico de zero de momento por no mínimo d (altura útil) ou lb (o que for maior).

## Diagrama em Pilares

Em pilares, os diagramas mais relevantes são:
- **Diagrama de força normal (N):** força axial de compressão — constante ao longo do pilar para cargas verticais uniformes
- **Diagrama de momento fletor:** gerado pelo vento ou pela excentricidade da carga — máximo na base e no topo do pilar

## Como Ler um Diagrama no Projeto Estrutural

1. **Sinal (+ ou −):** define em qual face da seção está a tração — e portanto onde vai a armadura
2. **Valor máximo:** define a quantidade de armação no ponto mais solicitado
3. **Variação ao longo do elemento:** indica se é possível reduzir (cortar) barras em regiões menos solicitadas
4. **Posição dos zeros:** indica onde as armaduras podem ter seus comprimentos iniciados ou terminados

## Relação Prática com a Planilha de Ferro

A planilha de ferro (mapa de armação) é a tradução dos diagramas de esforços para quantidades de aço. Cada variação no diagrama corresponde a uma mudança no detalhamento:

| Região no DMF | Armação necessária |
|---------------|--------------------|
| Máximo positivo (vão) | Mais barras inferiores — bitola maior ou mais barras |
| Máximo negativo (apoio) | Mais barras superiores |
| Zona de transição | Barras intercaladas, escalonadas |
| Esforço cortante alto | Estribos com espaçamento menor |
| Esforço cortante baixo | Estribos com espaçamento maior |`,
};

export default post;
