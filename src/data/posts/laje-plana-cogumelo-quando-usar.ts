// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 119,
  slug: "laje-plana-cogumelo-quando-usar",
  category: "Projeto Estrutural",
  title: "Laje Plana e Laje Cogumelo: Diferenças, Armação e Verificação de Punção",
  metaDescription: "O que é laje plana e laje cogumelo, diferenças, verificação de punção segundo NBR 6118, armação por faixas e quando usar em edifícios.",
  keyword: "laje plana cogumelo",
  date: "21 Mai 2026",
  summary: "Laje plana vs laje cogumelo: definições, comportamento, verificação de punção, armação por faixas e indicações de uso.",
  content: `## O que é Laje Plana?

Laje plana é o sistema em que a laje é apoiada diretamente nos pilares, sem vigas. A transferência de carga da laje para os pilares ocorre por cisalhamento — fenômeno chamado de **punção**.

A NBR 6118:2014 trata da laje plana no item 14.7 e exige verificação rigorosa da punção.

## O que é Laje Cogumelo?

Laje cogumelo é variação da laje plana com **capitel** (alargamento) ao redor do pilar. O capitel reduz as tensões de punção e dispensa vigas com mais segurança.

| Característica | Laje Plana | Laje Cogumelo |
|----------------|------------|---------------|
| Apoio nos pilares | Direto, sem capitel | Através de capitel |
| Espessura típica | 20 a 35 cm | 18 a 30 cm (corpo) |
| Verificação de punção | Crítica — exige armadura | Menos crítica |
| Fôrma | Plana, mais econômica | Requer fôrma do capitel |
| Pé-direito livre | Máximo | Reduzido pelo capitel |

## Espessura Mínima (NBR 6118, item 13.2.3)

- h ≥ L/40 (L = maior vão entre apoios)
- h mínimo absoluto = 16 cm para lajes planas sem protensão

| Vão | h mínima por fórmula | h adotado |
|-----|---------------------|-----------|
| 6,0 m | 150 mm | 16 cm |
| 7,5 m | 188 mm | 20 cm |
| 9,0 m | 225 mm | 23 cm |

## Faixas de Projeto (NBR 6118, item 14.7.8)

| Faixa | Posição | Momentos |
|-------|---------|---------|
| Faixa de pilar | Largura = vão/4 de cada lado do eixo do pilar | Maiores momentos — mais aço |
| Faixa de vão | Região entre faixas de pilar | Menores momentos — menos aço |

## Verificação de Punção (NBR 6118, item 19.5)

### Perímetro Crítico
Definido a uma distância de 2d da face do pilar (d = altura útil da laje).

### Tensão de Cisalhamento
τ = Fsd / (u × d)

- Fsd = força de projeto no pilar (kN)
- u = comprimento do perímetro crítico (mm)
- d = altura útil da laje (mm)

Se τ > τRd1, é obrigatório adicionar **armadura de punção** (studs ou estribos verticais).

## Taxa Mínima de Armadura

ρs,min = 0,15% em ambas as direções (para fck = 25 MPa).

## Quando Usar Laje Plana?

| Situação | Indicação |
|----------|-----------|
| Edifícios com vãos regulares 6–9 m | ✅ Ideal |
| Plantas comerciais ou escritório | ✅ Pé-direito livre |
| Garagens | ✅ Sem vigas facilita circulação |
| Vãos > 10 m | ⚠️ Avaliar protendido |
| Cargas > 10 kN/m² | ⚠️ Punção e flecha críticos |
| Pilares irregulares | ❌ Distribuição complexa |

## Vantagens
- Pé-direito máximo (sem vigas no teto)
- Fôrma plana simplificada
- Flexibilidade de layout das paredes
- Facilita passagem de instalações

## Limitações
- Punção crítica — verificação e armadura obrigatórias
- Flecha pode ser excessiva em vãos longos
- Exige armadura de integridade estrutural (NBR 6118, item 19.5.4)
- Não deve ser executada sem projeto estrutural específico`,
};

export default post;
