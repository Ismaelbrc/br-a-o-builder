// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 120,
  slug: "muros-de-arrimo-tipos-armacao",
  category: "Projeto Estrutural",
  title: "Muros de Arrimo: Tipos, Pressão do Solo e Armação",
  metaDescription: "Guia técnico sobre muros de arrimo: tipos (gravidade, cantilever, contraforte), pressão ativa do solo, armação e verificações de estabilidade segundo NBR 11682.",
  keyword: "muros de arrimo tipos armação",
  date: "21 Mai 2026",
  summary: "Tipos de muros de arrimo, cálculo da pressão ativa do solo, armação do fuste e base, drenagem e verificações de estabilidade.",
  content: `## O que é um Muro de Arrimo?

Muro de arrimo (ou muro de contenção) é a estrutura que retém um maciço de terra, impedindo seu deslizamento. A função é resistir à **pressão lateral do solo** — chamada de pressão ativa — que age horizontalmente contra a face interna.

## Tipos de Muro de Arrimo

### 1. Muro de Gravidade
Retém o solo pela própria massa — concreto simples ou pedra argamassada, sem armação. Econômico para alturas ≤ 1,5 m.

### 2. Muro Cantilever (Muro em L ou T invertido)
Tipo mais comum em concreto armado. Composto por:
- **Fuste:** parede vertical que retém o solo
- **Base (sapata):** laje horizontal que garante estabilidade por peso e fricção

O fuste funciona como viga em balanço engastada na base. **Indicado para alturas de 2,0 a 7,0 m.**

### 3. Muro com Contrafortes
Cantilever com nervuras verticais (contrafortes) na face posterior. Reduz esforços no fuste para alturas superiores a 5–6 m.

### 4. Muro de Gabião
Caixas de tela metálica preenchidas com pedra. Drenante e flexível. Não é concreto armado.

## Pressão Ativa do Solo

### Coeficiente de Rankine (solo sem coesão)
Ka = tg²(45° − φ/2)

| Tipo de solo | φ (graus) | Ka |
|-------------|-----------|-----|
| Areia fofa | 25° | 0,41 |
| Areia compacta | 35° | 0,27 |
| Argila mole | 15° | 0,59 |
| Argila firme | 25° | 0,41 |

### Resultante da Pressão Ativa
Ea = 0,5 × Ka × γs × H²

Atuando a H/3 do fundo do muro (γs = peso específico do solo ≈ 17 a 20 kN/m³).

## Verificações de Estabilidade (NBR 11682)

| Verificação | FS mínimo |
|-------------|-----------|
| Deslizamento na base | ≥ 1,5 |
| Tombamento (ponta da base) | ≥ 2,0 |
| Resultante no terço médio da base | e ≤ B/6 |
| Estabilidade global (talude) | ≥ 1,5 |

## Armação do Muro Cantilever

### Fuste (Parede Vertical)
Trabalha como viga em balanço. A pressão do solo gera momento máximo na base.

- **Armadura principal:** na face oposta ao solo (onde há tração no balanço)
- **Armadura horizontal mínima:** ρs,min = 0,15% × espessura × 1 m
- **Cobrimento nominal:** Classe III (solo úmido) = 45 mm; Classe IV (solo agressivo) = 65 mm

### Base (Sapata)

| Região | Comportamento | Armadura |
|--------|--------------|----------|
| Aba ativa (sob o aterro) | Balanço com tração superior | Armadura superior |
| Aba passiva (sem aterro) | Tração inferior | Armadura inferior |

### Pré-dimensionamento Orientativo (solo φ = 30°)

| Altura (H) | Espessura do fuste | Largura da base | Espessura da base |
|------------|--------------------|-----------------|-------------------|
| 2,0 m | 20 cm | 1,0 m | 25 cm |
| 3,0 m | 25 cm | 1,5 m | 30 cm |
| 4,0 m | 30 cm | 2,2 m | 35 cm |
| 5,0 m | 35 cm | 3,0 m | 40 cm |
| 6,0 m | 40 cm | 3,6 m | 45 cm |

*Confirmar em projeto estrutural.*

## Drenagem — Imperativo

Todo muro de arrimo **deve ter sistema de drenagem** por trás do fuste: dreno francês, manta drenante + tubos de PVC para saída d'água. Sem drenagem, a pressão da água subterrânea pode triplicar a força sobre o muro.

## Erros Comuns

1. Falta de dreno → sobrecarga hidrostática
2. Concreto inadequado → mínimo C25 com cobrimento 45 mm (solo úmido)
3. Base muito curta → tombamento por falta de comprimento resistente
4. Sem armadura horizontal → fissuração vertical por retração
5. Aterro compactado com rolo pesado diretamente contra o fuste → impacto dinâmico não previsto`,
};

export default post;
