// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 134,
  slug: "classes-do-concreto-quando-usar",
  category: "Concreto",
  title: "Classes do Concreto: Quando Usar C20, C25, C30, C35 e C40",
  metaDescription: "Classes de concreto de C20 a C50: quando especificar cada uma e requisitos da NBR 6118 por classe de agressividade.",
  keyword: "classes do concreto C20 C25 C30 quando usar",
  date: "21 Mai 2026",
  summary: "Quando usar cada classe de concreto: fck mínimo por classe de agressividade, propriedades e aplicações do C20 ao C50.",
  content: `## O que Significa a Classe do Concreto?

A classe do concreto é definida pelo seu fck (resistência característica à compressão simples) determinado a 28 dias de cura. A designação "C25" significa fck = 25 MPa — abaixo desse valor, pode-se encontrar no máximo 5% dos resultados de compressão. Aqui na BR Aço, esse é um dos pontos que mais pesam na hora de orientar clientes de Goiânia e do DF.

A NBR 6118:2014 define os requisitos mínimos por classe de agressividade ambiental, mas o engenheiro pode especificar uma classe superior quando as solicitações estruturais assim exigem.

## Propriedades Principais por Classe

| Classe | fck (MPa) | Ec (GPa) | fctm (MPa) | Cobrimento mín. (col/viga) | fck mín. por norma? |
|--------|----------|---------|-----------|---------------------------|---------------------|
| C20 | 20 | 25,1 | 2,21 | 25 mm (classe I) | Sim — CAA I |
| C25 | 25 | 28,0 | 2,56 | 35 mm (classe II) | Sim — CAA II |
| C30 | 30 | 30,7 | 2,90 | 45 mm (classe III) | Sim — CAA III |
| C35 | 35 | 33,0 | 3,21 | 65 mm (classe IV) | Sim — CAA IV |
| C40 | 40 | 35,2 | 3,51 | — | Não exigido por agressividade |
| C45 | 45 | 37,2 | 3,80 | — | Por requisitos de projeto |
| C50 | 50 | 39,1 | 4,07 | — | Por requisitos de projeto |

*Ec = módulo de elasticidade secante; fctm = resistência à tração média*

## C20 — Quando Usar

**fck = 20 MPa**

- **Uso:** estruturas em ambiente interno seco (Classe I) — residências, interiores protegidos
- **Mínimo por norma:** CAA I
- **Limitações:** não usar em ambientes úmidos, costeiros ou industriais
- **Exemplo:** vigas e pilares de residências unifamiliares em regiões secas sem agentes agressivos

Atenção: embora seja o mínimo normativo para CAA I, muitos projetistas adotam C25 mesmo para CAA I como margem de segurança e facilidade de controle.

## C25 — Quando Usar

**fck = 25 MPa**

- **Uso:** o concreto mais comum em estruturas residenciais e comerciais convencionais
- **Mínimo por norma:** CAA II (urbano)
- **Quando especificar:** a maioria dos edifícios residenciais em cidades (ambiente urbano = CAA II)
- **Vantagem:** fácil disponibilidade em toda rede de usinas de concreto
- **Aplicações:** pilares, vigas, lajes, fundações em ambiente urbano seco a moderado

C25 cobre 80% das obras residenciais e comerciais convencionais no Brasil.

## C30 — Quando Usar

**fck = 30 MPa**

- **Uso:** ambientes agressivos (CAA III), estruturas mais solicitadas, ou quando há exigência de menor permeabilidade
- **Mínimo por norma:** CAA III (marinha, industrial, respingos de cloretos)
- **Quando especificar:**
  - Obras na costa marítima ou com exposição a cloretos
  - Pilares expostos (garagens abertas, coberturas)
  - Lajes de garagem com tráfego de veículos
  - Obras com carga elevada onde C25 resultaria em seções muito grandes

**Propriedades melhores que C25:**
- Permeabilidade 30 a 40% menor
- Módulo de elasticidade maior (menos flecha)
- Melhor resistência ao desgaste

## C35 — Quando Usar

**fck = 35 MPa**

- **Uso:** CAA IV (muito forte — imersão, solos agressivos), ou por requisito de projeto
- **Mínimo por norma:** CAA IV
- **Quando especificar:**
  - Pilares de edifícios muito altos (compressão elevada)
  - Vigas de grande vão (flecha controlada)
  - Concreto protendido parcial (cabos com menor tensão)
  - Estruturas em solos com sulfatos ou alta salinidade

## C40 a C50 — Quando Usar

**fck = 40 a 50 MPa**

- **Uso:** projetos especiais — protensão, edifícios altos, obras de infraestrutura
- **Quando especificar:**
  - Concreto protendido (pós-tensão ou pré-tensão): mínimo C30 a C40
  - Lajes alveolares pré-fabricadas: geralmente C40 a C50
  - Pilares de edifícios com mais de 20 andares (seção reduzida)
  - Pontes e viadutos
  - Pisos industriais de alto tráfego

**Nota:** concretos de alta resistência exigem controle tecnológico mais rigoroso e nem sempre estão disponíveis em usinas de menor porte.

## Escolha da Classe: Guia Rápido

| Situação | Classe recomendada |
|----------|-------------------|
| Residência unifamiliar em interior seco | C20 (mínimo) ou C25 (preferível) |
| Edifício residencial urbano | C25 |
| Edifício comercial / laje de garagem | C30 |
| Estrutura costeira ou industrial | C30 a C35 |
| Concreto protendido | C30 mínimo (C35 a C40 usuais) |
| Edifício alto (> 20 pav.) | C35 a C40 |
| Laje alveolar pré-fabricada | C40 a C50 |

## Impacto da Classe no Custo

O custo do concreto cresce com o fck:

| Classe | Índice de custo relativo |
|--------|--------------------------|
| C20 | 1,00 (base) |
| C25 | 1,08 |
| C30 | 1,18 |
| C35 | 1,32 |
| C40 | 1,50 |

O custo maior de um concreto de maior fck é compensado pela possibilidade de reduzir seções transversais (menos concreto e aço), pela maior durabilidade e pela redução de manutenção ao longo da vida útil da estrutura.

## Classes de Concreto e o Consumo de Aço

Concreto de maior resistência:
- Permite seções menores nas peças estruturais
- Reduz a taxa de armadura mínima em alguns casos
- Aumenta a resistência de aderência às armaduras (menor comprimento de ancoragem necessário)

Para projetos onde o custo do aço é preponderante, aumentar a classe do concreto pode ser economicamente vantajoso mesmo que eleve o custo do concreto em si.`,
};

export default post;
