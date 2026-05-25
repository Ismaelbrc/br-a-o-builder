#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Adiciona posts 131-135 ao blogPosts.ts"""

NEW_POSTS = r"""
  },
  {
    id: 131,
    slug: "como-especificar-corte-e-dobra-projeto",
    category: "Corte e Dobra",
    title: "Como Especificar Corte e Dobra no Projeto Estrutural e na Planilha de Ferro",
    metaDescription: "Guia para engenheiros sobre como especificar corte e dobra no memorial descritivo e na planilha de ferro, com os dados necessários para orçamento e fabricação.",
    keyword: "como especificar corte e dobra projeto",
    date: "21 Mai 2026",
    summary: "O que o engenheiro precisa especificar para contratar corte e dobra: planilha de ferro, memorial descritivo, tolerâncias e dados para orçamento.",
    content: `## Por que a Especificação Correta de Corte e Dobra Importa?

A qualidade do serviço de corte e dobra depende diretamente das informações fornecidas pelo engenheiro calculista ou pelo responsável pela obra. Uma planilha de ferro incompleta resulta em peças erradas, retrabalho, atraso na entrega e custo adicional.

Este guia é direcionado a engenheiros calculistas, arquitetos com projeto estrutural e gestores de obra que querem garantir que a indústria de corte e dobra produza exatamente o que o projeto especifica.

## O que é a Planilha de Ferro (Mapa de Armação)?

A planilha de ferro (também chamada mapa de armação ou boletim de aço) é o documento que relaciona todas as barras de aço de uma obra, organizadas por:
- Elemento estrutural (pilar P1, viga V1, laje L1, etc.)
- Posição dentro do elemento (armadura longitudinal, estribo, armadura negativa)
- Bitola (diâmetro)
- Comprimento das barras
- Número de barras
- Forma das dobras (se houver)

É a base de fabricação do serviço de corte e dobra.

## Dados Mínimos para a Planilha de Ferro

| Campo | Descrição | Exemplo |
|-------|-----------|---------|
| Elemento | Identificação do elemento estrutural | P1, V-102, L3 |
| Posição | Designação da barra no detalhe | 1, 2, 3... |
| Material | Classe do aço | CA-50, CA-60 |
| Diâmetro (φ) | Bitola em mm | 8, 10, 12,5, 16 mm |
| Comprimento total | Comprimento desenvolvido da barra | 1,50 m, 2,35 m |
| Quantidade | Número de barras iguais | 8 barras |
| Forma de dobramento | Tipo de dobra (reta, com gancho, estribo) | Gancho 180° em ambas as extremidades |
| Raio de dobramento | Raio da dobra em mm | 3,5 × φ (padrão CA-50) |

## Como Montar a Planilha de Ferro: Passo a Passo

### 1. Extrair as barras do projeto estrutural
Analisar cada detalhe de armação (pilares, vigas, lajes, fundações) e listar cada barra com suas características.

### 2. Calcular o comprimento desenvolvido
O comprimento desenvolvido é o comprimento real do aço, incluindo os trechos retos e os arcos de dobra.

**Para gancho de 90°:** acrescentar 8 × φ ao comprimento reto.
**Para gancho de 180°:** acrescentar 4,5 × φ.
**Para estribo fechado com ganchos de 135°:** comprimento = (2 × altura + 2 × largura) + 2 × 5 × φ (extensão do gancho).

### 3. Multiplicar pela quantidade
Quantidade × comprimento desenvolvido = comprimento total de cada bitola/tipo.

### 4. Calcular o peso
Peso (kg) = comprimento total (m) × peso linear (kg/m)

| Bitola | Peso linear (kg/m) |
|--------|-------------------|
| φ 4,2 mm | 0,109 |
| φ 5,0 mm | 0,154 |
| φ 6,3 mm | 0,245 |
| φ 8,0 mm | 0,395 |
| φ 10,0 mm | 0,617 |
| φ 12,5 mm | 0,963 |
| φ 16,0 mm | 1,578 |
| φ 20,0 mm | 2,466 |
| φ 25,0 mm | 3,853 |
| φ 32,0 mm | 6,313 |

## O que Incluir no Memorial Descritivo Estrutural

O memorial descritivo é o documento que acompanha o projeto e define as especificações técnicas. Para corte e dobra, deve conter:

1. **Normas de referência:** NBR 6118:2014, NBR 7480 (aço)
2. **Classes de aço:** CA-50 para armaduras principais; CA-60 para estribos e malhas; especificar claramente onde cada classe é usada
3. **Dimensões das barras:** comprimentos mínimos e máximos aceitáveis (tolerância ± 5 mm é padrão industrial)
4. **Raios de dobramento:** conforme NBR 7480 e NBR 6118 (mínimo 3,5 × φ para CA-50 com φ ≤ 20 mm)
5. **Identificação:** cada peça deve vir etiquetada com o elemento estrutural e a posição (ex.: "P1 - pos.2")
6. **Prazo de entrega:** alinhado com o cronograma de concretagem da obra

## Comunicação com a Indústria de Corte e Dobra

### O que enviar para solicitar orçamento
- Planilha de ferro (Excel ou PDF) com todos os campos acima
- Ou: projeto estrutural (PDF) com detalhes de armação claramente legíveis
- Endereço da obra e prazo desejado de entrega

### O que esperar receber
- Orçamento por kg de aço, por bitola ou por pacote/lote
- Prazo de produção e entrega
- Método de identificação das peças

### Tolerâncias de Fabricação (NBR 7480)
| Dimensão | Tolerância |
|----------|------------|
| Comprimento das barras ≤ 6 m | ± 5 mm |
| Comprimento das barras > 6 m | ± 10 mm |
| Ângulo de dobra | ± 2° |
| Diâmetro | ± 4% do nominal |

## Erros Comuns ao Especificar Corte e Dobra

1. **Esquecer o comprimento de ancoragem:** especificar apenas o comprimento do elemento estrutural sem incluir os ganchos ou comprimentos de transpasse
2. **Não indicar a classe do aço:** "vergalhão 10 mm" sem especificar CA-50 ou CA-60
3. **Dobras sem dimensões:** detalhar a forma das dobras sem indicar as dimensões dos tramos retos
4. **Planilha de ferro sem a posição:** números de posição não vinculados ao detalhe do projeto — dificulta conferência em obra

A BR Aço aceita projetos estruturais em PDF e planilhas de ferro em Excel ou AutoCAD. Nossa equipe técnica confere cada detalhe antes da produção para evitar erros e retrabalho.`
  },
  {
    id: 132,
    slug: "nbr-8800-estrutura-metalica-vs-concreto",
    category: "Projeto Estrutural",
    title: "NBR 8800: Estrutura Metálica vs Concreto Armado — Quando Usar Cada Uma",
    metaDescription: "Diferenças entre estrutura metálica (NBR 8800) e concreto armado (NBR 6118): quando usar cada sistema, comparativo técnico e econômico.",
    keyword: "estrutura metálica vs concreto armado quando usar",
    date: "21 Mai 2026",
    summary: "Comparativo técnico e econômico entre estrutura metálica (NBR 8800) e concreto armado (NBR 6118): peso, prazo, custo, durabilidade e manutenção.",
    content: `## Dois Sistemas Estruturais, Um Objetivo

Estrutura metálica e concreto armado são os dois grandes sistemas de construção civil para edificações. Cada um tem vantagens em situações específicas. A escolha correta afeta custo, prazo, durabilidade e flexibilidade da obra.

## Estrutura Metálica — NBR 8800

A NBR 8800:2008 rege o projeto de estruturas de aço para edificações. Usa perfis de aço estrutural (aço ASTM A36, A572 ou equivalentes brasileiros — MR250, MR350, ASTM A572 Gr50) ligados por parafusos, pinos ou solda.

### Tipos de perfis estruturais
- **Perfis laminados:** I, H, U, L, T (produzidos por laminação a quente)
- **Perfis soldados:** montados em fábrica por soldagem de chapas
- **Perfis formados a frio:** fios e chapas conformados a frio — telhas, painéis, montantes de drywall

### Módulo de elasticidade do aço estrutural
E_aço = 200.000 MPa — 7 vezes maior que o concreto (E_concreto ≈ 28.000 MPa para C25).

Isso significa que a estrutura metálica é muito mais rígida com a mesma quantidade de material.

## Comparativo Técnico: Aço Estrutural vs Concreto Armado

| Critério | Estrutura Metálica | Concreto Armado |
|----------|-------------------|-----------------|
| Resistência à tração | ✅ Excelente (peça inteira trabalha à tração) | ❌ Depende do aço (concreto não resiste à tração) |
| Resistência à compressão | ✅ Boa (verificar flambagem) | ✅ Excelente |
| Peso próprio | ✅ Muito leve (peso 1/3 do concreto equivalente) | ❌ Pesado — concreto: 25 kN/m³ |
| Resistência ao fogo | ❌ Perde 50% da resistência a 550°C sem proteção | ✅ Melhor resistência natural ao fogo |
| Resistência à corrosão | ❌ Requer proteção (pintura, galvanização) | ✅ Melhor (armadura protegida pelo concreto) |
| Velocidade de execução | ✅ Rápida — montagem a seco | ❌ Mais lenta — cura do concreto, fôrmas |
| Flexibilidade de redesign | ✅ Alta — parafusos podem ser removidos | ❌ Baixa — concreto é permanente |
| Manutenção | ❌ Pintura periódica necessária | ✅ Menor manutenção em condições normais |
| Custo de material (por kg) | ❌ Maior | ✅ Menor |
| Custo total em vãos curtos | ❌ Geralmente maior | ✅ Geralmente menor |
| Custo total em vãos longos | ✅ Pode ser menor | ❌ Geralmente maior |

## Quando Usar Estrutura Metálica?

| Situação | Motivo |
|----------|--------|
| Galpões industriais com vãos > 15 m | Perfis metálicos cobrem grandes vãos com baixo peso próprio |
| Obras com prazo muito curto | Montagem a seco — sem esperar cura do concreto |
| Edifícios de escritórios com planta livre | Vãos longos e leveza |
| Towers de telecomunicação | Leveza e facilidade de transporte e montagem |
| Estruturas provisórias | Facilidade de desmontagem e reaproveitamento |
| Reformas e ampliações | Menos carga sobre estrutura existente |

## Quando Usar Concreto Armado?

| Situação | Motivo |
|----------|--------|
| Edifícios residenciais até 20 pavimentos | Custo otimizado, tradição construtiva, mão de obra disponível |
| Fundações | Concreto é o material padrão para fundações |
| Estruturas expostas a umidade e corrosão | Durabilidade superior sem manutenção intensiva |
| Reservatórios, piscinas, silos | Impermeabilidade natural |
| Regiões sem mão de obra metálica especializada | Concreto armado tem mão de obra mais disponível no Brasil |

## Estruturas Mistas (Aço + Concreto)

O sistema misto combina o melhor dos dois mundos: perfis de aço como viga (que resiste à tração) e laje de concreto como mesa de compressão. A laje e a viga são solidarizadas por conectores de cisalhamento (studs).

Muito usado em edifícios de escritórios e galpões de médio porte.

## Normas Brasileiras Relevantes

| Norma | Assunto |
|-------|---------|
| NBR 8800:2008 | Projeto de estruturas de aço para edificações |
| NBR 6118:2014 | Projeto de estruturas de concreto armado |
| NBR 14323 | Estruturas de aço em situação de incêndio |
| NBR 7190 | Projeto de estruturas de madeira |
| NBR 6120:2019 | Ações para o cálculo de estruturas |

## O Papel do Aço de Construção Civil (CA-50, CA-60)

O aço CA-50 e CA-60 — os vergalhões usados no concreto armado — são um produto completamente diferente dos perfis de aço estrutural da NBR 8800. Vergalhão é aço para armação de concreto; aço estrutural (perfis I, H, U) é para estruturas metálicas independentes.

A BR Aço fornece vergalhões CA-50 e CA-60 para concreto armado, com serviço de corte e dobra conforme projeto estrutural.`
  },
  {
    id: 133,
    slug: "armacao-de-lajes-detalhamento-completo",
    category: "Projeto Estrutural",
    title: "Armação de Lajes: Detalhamento Completo das Armaduras Conforme NBR 6118",
    metaDescription: "Detalhamento completo da armação de lajes maciças: armadura positiva e negativa, bordas, distribuição, construtiva, ancoragem e comprimentos mínimos segundo NBR 6118.",
    keyword: "armação de lajes detalhamento",
    date: "21 Mai 2026",
    summary: "Detalhamento da armação de lajes maciças: positiva, negativa, distribuição, bordas livres, ancoragem e tabelas de comprimentos mínimos.",
    content: `## Tipos de Armadura em Lajes Maciças

Uma laje maciça pode ter até 5 tipos de armadura, cada uma com função específica:

### 1. Armadura Positiva (principal de flexão)
Posicionada na face inferior da laje, na direção do menor vão (Lx). Resiste ao momento fletor positivo (tração na parte inferior, típico do vão central).

### 2. Armadura Negativa (sobre apoios)
Posicionada na face superior da laje, sobre as vigas ou paredes de apoio. Resiste ao momento fletor negativo (tração na parte superior, gerado pelo engastamento no apoio).

### 3. Armadura de Distribuição (construtiva transversal)
Posicionada na mesma face que a armadura principal, mas na direção perpendicular. Taxa mínima: 20% da armadura principal, com mínimo de 0,9 cm²/m.

### 4. Armadura de Borda Livre
Lajes com borda não apoiada (balanços, aberturas) recebem armaduras adicionais de borda.

### 5. Armadura Construtiva (face comprimida)
Na face oposta à principal (face superior no vão), armadura mínima para controle de retração: ≥ 0,9 cm²/m.

## Espessura Mínima por Situação (NBR 6118, item 13.2.3)

| Situação | h mínima |
|----------|---------|
| Laje de cobertura não transitável | 7 cm |
| Laje com tráfego leve de pedestres | 8 cm |
| Laje com tráfego de veículos leves | 10 cm |
| Laje plana (sem vigas) | 16 cm |
| Laje nervurada — espessura da capa | 4 cm (sem tráfego) / 5 cm (com tráfego) |

## Direção Preferencial do Momento

Para laje com quatro apoios (bidirecional), o menor vão (Lx) recebe maior momento. A armadura principal segue o menor vão.

Para laje com dois apoios opostos (unidirecional): toda a armadura principal segue a direção do vão.

**Regra:** se Ly/Lx > 2, a laje funciona praticamente em uma direção (unidirecional).

## Dimensionamento Orientativo — Lajes Residenciais (CA-50)

### Laje Maciça Unidirecional — Simplesmente Apoiada

| Vão (m) | Carga total (kN/m²) | Espessura (cm) | Armadura positiva | Espaçamento |
|---------|--------------------|--------------|--------------------|-------------|
| 3,0 | 6 a 8 | 10 | φ 8 | 20 cm |
| 4,0 | 6 a 8 | 12 | φ 8 | 15 cm |
| 4,5 | 6 a 8 | 13 | φ 10 | 20 cm |
| 5,0 | 6 a 8 | 15 | φ 10 | 17,5 cm |
| 5,5 | 6 a 8 | 16 | φ 10 | 15 cm |

*Valores orientativos para lajes de cobertura/piso residencial. Verificar com calculista.*

## Comprimento da Armadura Positiva além dos Apoios

As barras da armadura positiva devem se estender além da face do apoio (viga ou parede) por:

**Comprimento mínimo além da face do apoio:**
- Para apoio de extremidade (borda): ≥ lb,ef (comprimento de ancoragem com gancho)
- Para apoio intermediário (laje contínua): ≥ lb,ef ou até o ponto de inflexão + lb/3

**Regra prática:** barras de fundo devem entrar no apoio pelo menos 12 cm além da face do apoio (mínimo absoluto para boas condições de ancoragem).

## Comprimento da Armadura Negativa

A armadura negativa sobre o apoio deve se estender para dentro dos vãos adjacentes até o ponto onde o momento negativo se anula. Na ausência de cálculo preciso:

**Extensão mínima além da face do apoio:** L/4 (onde L é o vão adjacente)

Para lajes com diferença de vão entre tramos adjacentes, usar o maior vão para determinar o comprimento da armadura negativa.

## Espaçamento Máximo da Armadura (NBR 6118, item 17.3.3.2)

| Armadura | Espaçamento máximo |
|----------|-------------------|
| Armadura principal (momentos) | 2 × h ≤ 20 cm |
| Armadura de distribuição | 3 × h ≤ 33 cm |

*h = espessura total da laje*

## Detalhamento das Bordas Livres (NBR 6118, item 14.6.8)

Bordas livres (não apoiadas) de lajes devem receber armadura especial:
- Uma barra de borda ao longo da borda, com cobrimento normal
- Ou armadura em U (laço) circundando a borda

A NBR 6118 exige armadura de borda em todas as bordas de lajes não apoiadas.

## Aberturas em Lajes

Aberturas (para escadas, dutos, poços de elevador) interrompem as armaduras. Ao redor da abertura, adicionar:
- Barras paralelas à abertura em quantidade equivalente às barras interrompidas
- Barras diagonais nos cantos da abertura (φ 10 ou 12,5 mm, comprimento ≥ 1 m de cada lado)

**Regra:** pequenas aberturas (< h × h) podem ser executadas sem reforço estrutural. Aberturas maiores exigem avaliação do calculista.

## Checklist de Verificação antes da Concretagem

- [ ] Cobrimento verificado com espaçadores em todas as faces
- [ ] Armadura positiva na face correta (inferior)
- [ ] Armadura negativa posicionada sobre os apoios (face superior)
- [ ] Diâmetro máximo das barras ≤ h/8
- [ ] Espaçamento das barras dentro dos limites normativos
- [ ] Barras de borda nas bordas livres
- [ ] Reforço nas aberturas
- [ ] Comprimentos de ancoragem nos apoios`
  },
  {
    id: 134,
    slug: "classes-do-concreto-quando-usar",
    category: "Concreto",
    title: "Classes do Concreto: Quando Usar C20, C25, C30, C35 e C40",
    metaDescription: "Guia completo sobre as classes de concreto: fck de C20 a C50, quando especificar cada classe, requisitos mínimos da NBR 6118 por classe de agressividade e aplicações.",
    keyword: "classes do concreto C20 C25 C30 quando usar",
    date: "21 Mai 2026",
    summary: "Quando usar cada classe de concreto: fck mínimo por classe de agressividade, propriedades e aplicações do C20 ao C50.",
    content: `## O que Significa a Classe do Concreto?

A classe do concreto é definida pelo seu fck (resistência característica à compressão simples) determinado a 28 dias de cura. A designação "C25" significa fck = 25 MPa — abaixo desse valor, pode-se encontrar no máximo 5% dos resultados de compressão.

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

Para projetos onde o custo do aço é preponderante, aumentar a classe do concreto pode ser economicamente vantajoso mesmo que eleve o custo do concreto em si.`
  },
  {
    id: 135,
    slug: "viga-t-secao-composta-comportamento",
    category: "Projeto Estrutural",
    title: "Viga T em Concreto Armado: Comportamento, Largura Efetiva e Armação",
    metaDescription: "O que é viga T, como a laje colabora com a viga, largura efetiva da mesa segundo NBR 6118 e implicações para dimensionamento e armação.",
    keyword: "viga T concreto armado largura efetiva",
    date: "21 Mai 2026",
    summary: "Viga T: colaboração da laje como mesa de compressão, largura efetiva pela NBR 6118 e implicações para dimensionamento da armação.",
    content: `## O que é uma Viga T?

Em edifícios de concreto armado, as vigas raramente funcionam isoladas. Quando a laje é concretada solidariamente com a viga, parte da laje passa a colaborar com a resistência à compressão da viga. O conjunto viga + aba de laje forma uma **seção T** (ou seção em forma de T).

A colaboração da mesa de laje é vantajosa: aumenta a área de compressão e reduz a quantidade de aço necessária na viga.

## Quando a Seção T é Reconhecida?

A NBR 6118:2014, item 14.6.2, permite considerar a colaboração da mesa (laje) quando:
- A laje é solidária com a viga (concretagem monolítica ou conectores adequados)
- A espessura da mesa (laje) é adequada
- A largura efetiva definida na norma é respeitada

Para vigas simplesmente armadas (tração na parte inferior): a mesa de compressão é a laje — o benefício é máximo.

Para vigas contínuas sobre apoios: na zona de momentos negativos, a tração passa para a face superior. Nessa zona, a mesa de laje fica em tração e **não colabora** com a compressão — a seção comporta-se como viga retangular.

## Largura Efetiva da Mesa (NBR 6118, item 14.6.2)

A largura efetiva bf é a largura de mesa que pode ser considerada no cálculo. Depende do vão, da geometria e da posição da viga.

### Viga com mesa em ambos os lados (viga interna)

bf = bw + 2 × bi (de cada lado)

Onde bi é o menor dos seguintes valores:
- L/10 (L = vão teórico da viga)
- 0,5 × distância livre entre vigas adjacentes
- 8 × espessura da laje (t_f)

### Viga com mesa em um só lado (viga de borda)

bf = bw + bi (de apenas um lado)

bi = menor de: L/20, 0,5 × distância à viga adjacente, 6 × t_f

### Exemplo de cálculo

Dados:
- Viga com bw = 25 cm, vão L = 6,0 m
- Laje com espessura tf = 12 cm
- Distância entre vigas: 3,5 m → distância livre = 3,5 − 0,25 = 3,25 m → 0,5 × 3,25 = 1,625 m

Calculando bi (de cada lado, viga interna):
- L/10 = 6,0/10 = 0,60 m
- 0,5 × distância livre = 1,625 m
- 8 × tf = 8 × 0,12 = 0,96 m

bi = min(0,60; 1,625; 0,96) = **0,60 m**

bf = 0,25 + 2 × 0,60 = **1,45 m**

## Implicações para o Dimensionamento

### No Vão (momento positivo — mesa em compressão)

Com mesa de 1,45 m de largura, a linha neutra muito provavelmente está dentro da espessura da laje. Nesse caso:

- A seção T comporta-se como uma seção retangular de largura bf = 1,45 m
- O braço de momento interno (d − tf/2 ≈ d − 6 cm) é grande
- **Resultado:** a armação de tração (face inferior) é significativamente menor do que em viga retangular com a mesma seção bw × h

### No Apoio (momento negativo — mesa em tração)

Na região de momento negativo (sobre o pilar), a laje está na zona de tração — não colabora. A seção resiste como retângulo com largura bw.

- Armadura negativa (face superior) calculada para seção retangular bw × h
- Maior consumo de aço por unidade de momento

## Armação em Vigas T

### Armadura de Vão (positiva)
Vergalhões CA-50 posicionados na face inferior, dentro da alma (bw). A seção T reduz a quantidade necessária, mas as barras ficam apenas dentro da alma, não na mesa.

### Armadura de Apoio (negativa)
Vergalhões posicionados na face superior. Podem se espalhar pela mesa (largura bf) para melhor controle de fissuração.

**Distribuição da armadura negativa pela mesa:**
- Concentrar 2/3 da armadura dentro de largura bw + 0,6 × bf
- Restante distribuir pela largura total bf

### Estribos
Os estribos envolvem apenas a alma (bw) da viga T — não precisam envolver a mesa.

## Armação da Interface Mesa-Alma (Cisalhamento Longitudinal)

A força de cisalhamento horizontal na interface laje-viga deve ser verificada (NBR 6118, item 14.6.2.4). Em geral, para obras convencionais com concretagem monolítica, essa verificação é satisfeita com a armadura transversal existente na laje.

## Viga T Pré-moldada (Vigota + Laje)

Nas lajes treliçadas, a vigota pré-moldada e a capa de concreto formam uma viga T invertida. O princípio de colaboração da mesa é o mesmo — a capa (laje) colabora com a compressão da vigota.

A largura efetiva da mesa nesse caso é definida pelo espaçamento entre vigotas e pela espessura da capa.`
  }"""

TARGET_FILE = r'C:\Users\ismae\.claude\br-aco-builder\src\data\blogPosts.ts'

with open(TARGET_FILE, 'r', encoding='utf-8') as f:
    content = f.read()

insert_pos = content.rfind('  }\n];\n\nexport const categories')
if insert_pos == -1:
    print("ERROR: insert position not found")
    exit(1)

new_content = content[:insert_pos] + NEW_POSTS + '\n' + content[insert_pos + 4:]

with open(TARGET_FILE, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Done! Posts 131-135 added.")
