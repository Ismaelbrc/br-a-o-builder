// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 125,
  slug: "tabela-referencia-nbr-6118-completa",
  category: "Normas Técnicas",
  title: "Tabela de Referência NBR 6118: Cobrimento, Emendas, Ganchos e Estribos",
  metaDescription: "Tabela de referência rápida da NBR 6118: cobrimento por classe de agressividade, ancoragem, transpasse e ganchos.",
  keyword: "tabela NBR 6118 cobrimento ancoragem emenda",
  date: "21 Mai 2026",
  summary: "Referência rápida da NBR 6118:2014: cobrimento nominal, ancoragem, transpasse e ganchos — todos os valores em uma única página.",
  content: `## Cobrimento Nominal por Classe de Agressividade (NBR 6118, Tabela 7.2)

O cobrimento nominal (c_nom) é a distância entre a face da armadura mais externa (estribo) e a superfície do concreto. Esse é o parâmetro que a BR Aço segue rigorosamente em todo fornecimento de armadura em Goiânia e no restante de Goiás.

**c_nom = c_min + Δc** (onde Δc = 10 mm — tolerância de execução para estruturas convencionais)

| Classe de agressividade | Ambiente típico | c_nom — Lajes e paredes | c_nom — Vigas e pilares |
|------------------------|-----------------|------------------------|------------------------|
| I — Fraca | Interior seco, rural não agressivo | 20 mm | 25 mm |
| II — Moderada | Urbano, submerso em água doce | 25 mm | 35 mm |
| III — Forte | Marinho, industrial, respingos | 35 mm | 45 mm |
| IV — Muito forte | Imersão em água do mar, agressividade química | 45 mm | 65 mm |

**Observação:** para elementos em contato com o solo, usar no mínimo 45 mm. Para concreto projetado, adicionar 10 mm.

## fck Mínimo por Classe de Agressividade (NBR 6118, Tabela 7.1)

| Classe de agressividade | fck mínimo | Relação a/c máxima |
|------------------------|-----------|-------------------|
| I | 20 MPa | 0,65 |
| II | 25 MPa | 0,60 |
| III | 30 MPa | 0,55 |
| IV | 35 MPa | 0,45 |

## Comprimento Básico de Ancoragem — CA-50 (lb = φ × σs / 4τbd)

Valores para posição **boa de concretagem** (barra horizontal com ≤ 30 cm de concreto abaixo — NBR 6118, tabela 9.1):

| fck | Barra reta em tração (lb) | Com gancho 90° (lb,ef) | Compressão (lb,comp) |
|-----|--------------------------|----------------------|----------------------|
| C20 | 63 × φ | 38 × φ | 44 × φ |
| C25 | 54 × φ | 33 × φ | 38 × φ |
| C30 | 47 × φ | 28 × φ | 33 × φ |
| C35 | 43 × φ | 26 × φ | 30 × φ |
| C40 | 40 × φ | 24 × φ | 28 × φ |

Para posição **ruim de concretagem** (barra horizontal com > 30 cm de concreto abaixo): multiplicar lb por **1,4**.

**Exemplo:** barra CA-50 φ 12,5 mm em concreto C25, posição boa:
- Barra reta em tração: lb = 54 × 12,5 = 675 mm ≈ 68 cm
- Com gancho 90°: lb,ef = 33 × 12,5 = 413 mm ≈ 42 cm

## Comprimento Básico de Ancoragem — CA-60

| fck | Barra reta em tração (lb) | Com gancho 90° (lb,ef) |
|-----|--------------------------|----------------------|
| C20 | 76 × φ | 46 × φ |
| C25 | 65 × φ | 39 × φ |
| C30 | 57 × φ | 34 × φ |
| C35 | 52 × φ | 31 × φ |

## Comprimento de Transpasse por Emenda (NBR 6118, item 9.4.2)

lt = α1 × lb,ef (mínimo: 0,3 × lb, nunca inferior a 15 × φ ou 20 cm)

| % de barras emendadas na mesma seção (em comprimento ≤ 1,3 × lt) | α1 |
|------------------------------------------------------------------|-----|
| ≤ 25% | 1,0 |
| 26 a 50% | 1,4 |
| > 50% | 2,0 |

## Raios Mínimos de Dobramento (NBR 6118, Tabela 9.2)

| Bitola | Raio mínimo de dobramento (r) |
|--------|-------------------------------|
| φ ≤ 20 mm | 3,5 × φ (CA-50) / 2,5 × φ (CA-25) |
| φ > 20 mm | 5,0 × φ (CA-50) |

## Ganchos Padrão

### Gancho de 180°
- Dobragem de 180° + extensão reta mínima: 4 × φ (mínimo: 60 mm)

### Gancho de 90°
- Dobragem de 90° + extensão reta mínima: 8 × φ (mínimo: 60 mm)

### Gancho de 135° (Estribos)
- Dobragem de 135° + extensão reta: 5 × φ (para estribos — NBR 6118, item 9.4.7.2)

## Espaçamento Mínimo entre Barras (NBR 6118, item 8.4)

| Situação | Espaçamento livre mínimo (horizontal) |
|----------|--------------------------------------|
| Entre barras paralelas | Maior de: φ, 1,2 × dmáx (brita), 20 mm |
| Em camadas sobrepostas | Maior de: φ, 1,2 × dmáx, 20 mm |

## Diâmetro Máximo da Barra em Lajes

| Espessura da laje (h) | Diâmetro máximo da armadura principal |
|-----------------------|--------------------------------------|
| 10 cm | 12,5 mm (h/8 = 12,5 mm) |
| 12 cm | 16 mm (limitado a 12,5 mm na prática) |
| 15 cm | 16 mm |
| 20 cm | 20 mm |

## Espaçamento Máximo da Armadura em Lajes (NBR 6118, item 17.3.3.2)

| Situação | Espaçamento máximo |
|----------|--------------------|
| Armadura principal (momentos) | 2 × h ou 20 cm (o menor) |
| Armadura secundária (distribuição) | 3 × h ou 33 cm (o menor) |

## Armadura Mínima em Lajes (NBR 6118, item 17.3.5.2.2)

| fck | Taxa mínima (ρs,min) para lajes |
|-----|--------------------------------|
| 20 MPa | 0,15% |
| 25 MPa | 0,15% |
| 30 MPa | 0,15% |
| ≥ 35 MPa | 0,15% (verificar em projeto) |

## Espaçamento Máximo de Estribos em Vigas (NBR 6118, item 18.3.3.2)

| Zona | Espaçamento máximo |
|------|-------------------|
| Região próxima ao apoio (cisalhamento alto) | d/2 ≤ 30 cm |
| Região de vão (cisalhamento baixo) | 0,8 × d ≤ 30 cm |

## Espaçamento Máximo de Estribos em Pilares (NBR 6118, item 18.4.2.3)

| Critério | Valor |
|----------|-------|
| Regra geral | menor de: b (menor dimensão), 20 × φl (barra longitudinal), 400 mm |
| Região de emenda | menor de: 12 × φl, 200 mm |
| Zona de pilar (zonas críticas sísmicas) | menor de: 10 × φl, 200 mm |`,
};

export default post;
