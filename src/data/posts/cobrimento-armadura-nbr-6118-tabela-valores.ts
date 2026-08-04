// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 160,
  slug: "cobrimento-armadura-nbr-6118-tabela-valores",
  category: "Normas ABNT",
  title: "Cobrimento de Armadura pela NBR 6118: Tabela de Valores e Consequências de Erros de Execução",
  metaDescription: "Tabela de cobrimento mínimo de armadura pela NBR 6118 por classe de agressividade, e como controlar isso em campo.",
  keyword: "cobrimento armadura NBR 6118 tabela",
  date: "28 Mai 2026",
  summary: "Tabela de cobrimentos mínimos por classe de agressividade (NBR 6118 Tabela 7.2), consequências estruturais da redução do cobrimento e métodos de controle em canteiro.",
  content: `## O Cobrimento é a Primeira Linha de Defesa da Armadura

O cobrimento nominal de concreto é a camada entre a face externa da estrutura e a face mais próxima da armadura. Ele cumpre duas funções simultâneas:

1. **Proteção contra corrosão**: o concreto cria um ambiente alcalino (pH ≈ 12,5) ao redor do aço — passivando a superfície da barra e impedindo a corrosão. Quando o cobrimento é insuficiente, agentes externos (CO₂, cloretos) atingem o aço e quebram essa camada passivante.

2. **Transmissão de esforços (aderência)**: menor cobrimento significa menos confinamento, menor aderência efetiva e comprimentos de ancoragem necessários maiores.

Vale lembrar que esse critério vale tanto para obras em Goiânia quanto para obras no Distrito Federal, onde a BR Aço também atende.

## Tabela de Cobrimento Mínimo — NBR 6118 Tabela 7.2

### Classes de Agressividade Ambiental

| Classe | Ambiente | Risco |
|--------|---------|-------|
| I | Rural, submerso | Insignificante |
| II | Urbano | Pequeno |
| III | Marinha, industrial | Grande |
| IV | Industrial severo | Muito grande |

### Cobrimentos Mínimos em Milímetros

| Elemento | Classe I | Classe II | Classe III | Classe IV |
|----------|---------|----------|-----------|----------|
| Laje | 20 mm | 25 mm | 35 mm | 45 mm |
| Viga e pilar | 25 mm | 30 mm | 40 mm | 50 mm |
| Fundação | 30 mm | 40 mm | 50 mm | 65 mm |
| Pré-moldado (fábrica) | 15 mm | 20 mm | 25 mm | 35 mm |

**Cobrimento nominal = cobrimento mínimo + 10 mm (tolerância de execução)**

Exemplo: Viga em ambiente urbano (Classe II) → cobrimento mínimo = 30 mm → cobrimento nominal = **40 mm**

### Goiânia e Brasília: Qual Classe?

| Local | Classe | Justificativa |
|-------|--------|---------------|
| Goiânia (residencial) | II | Ambiente urbano |
| Goiânia (setor industrial) | III | Agentes agressivos |
| Brasília/DF (residencial) | II | Ambiente urbano |
| Estruturas em contato com solo | III | Verificar sulfatos |

## Consequências da Redução do Cobrimento

**Curto prazo (0–5 anos):** fissuração paralela às barras, manchas de óxido na superfície, desplacamento do cobrimento.

**Médio prazo (5–20 anos):** corrosão progressiva com redução da seção de até 30%, redução da resistência à flexão, comprometimento dos estribos.

**Longo prazo (> 20 anos):** colapso estrutural localizado por ruptura de estribo oxidado, custo de recuperação de 3x a 8x o custo da estrutura original.

**Dado de referência (IBRACON):** edificações com cobrimento médio inferior a 15 mm apresentam primeira manifestação de corrosão em 5–8 anos. Com cobrimento nominal de 40 mm (Classe II), a vida útil de projeto é de 50 anos.

## Como Controlar o Cobrimento em Campo

**Espaçadores certificados:** único método normativo. A NBR 14931:2004 exige espaçadores com resistência ≥ 0,25 × fck e distribuição mínima de 4 unidades/m² em lajes.

**Verificação por pachômetro:** instrumento que detecta posição e profundidade das barras por indução eletromagnética. Usado em controle de qualidade e perícias.

## Cobrimento e o Corte e Dobra Industrial

A geometria precisa das barras do CDA impacta diretamente o cobrimento:

- **Estribos com dimensões corretas**: estribo com largura interna calculada para cobrimento + barra longitudinal. No corte manual, estribos "ligeiramente maiores" para facilitar a amarração resultam em cobrimento reduzido.
- **Ganchos de estribo no comprimento correto**: gancho com extensão insuficiente compromete o confinamento e o cobrimento na região de dobra.
- **Dobras de 135° nos estribos**: a máquina CNC garante ângulo exato; a dobra manual frequentemente resulta em 120°–140°, alterando a distribuição do estribo na seção.`,
};

export default post;
