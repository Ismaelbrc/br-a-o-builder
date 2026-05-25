#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Adiciona posts 126-130 ao blogPosts.ts"""

NEW_POSTS = r"""
  },
  {
    id: 126,
    slug: "selecao-sistema-estrutural",
    category: "Projeto Estrutural",
    title: "Como Escolher o Sistema Estrutural: Pórticos, Paredes e Laje Plana",
    metaDescription: "Como selecionar o sistema estrutural: pórticos (vigas e pilares), paredes estruturais, laje plana, laje plana protendida — critérios técnicos e econômicos.",
    keyword: "seleção sistema estrutural",
    date: "21 Mai 2026",
    summary: "Critérios para escolha do sistema estrutural: pórticos, paredes, laje plana e sistemas mistos — vantagens, limitações e quando usar cada um.",
    content: `## O que Determina a Escolha do Sistema Estrutural?

O sistema estrutural define como as cargas são transferidas da laje até as fundações. A escolha influencia o custo, o prazo de execução, a flexibilidade de uso e a durabilidade da edificação.

Os principais fatores a considerar são:
- Altura e número de pavimentos
- Tipo de uso (residencial, comercial, industrial)
- Planta livre vs planta rígida
- Vãos entre apoios
- Orçamento disponível
- Disponibilidade de mão de obra especializada

## Sistemas Estruturais Principais

### 1. Sistema de Pórticos (Vigas + Pilares)

O mais tradicional no Brasil. As cargas das lajes são transferidas às vigas, que as transferem aos pilares e, finalmente, às fundações.

**Características:**
- Vigas e pilares formam pórticos resistentes às cargas horizontais e verticais
- Alta flexibilidade de posicionamento de paredes (paredes não estruturais)
- Vãos de laje: 4 a 8 m
- Altura de vigas: L/10 a L/15 (L = vão)

**Indicado para:**
- Edifícios residenciais de qualquer altura
- Obras com planta variável entre pavimentos
- Mão de obra convencional (sem especialização)

**Limitação:**
- Vigas aparentes no teto limitam pé-direito útil
- Custo de fôrma relativamente alto

### 2. Paredes Estruturais

As cargas são transferidas por paredes de concreto armado (ou alvenaria estrutural), sem vigas e pilares convencionais.

**Paredes de concreto armado moldadas in loco:**
- Espessura: 12 a 20 cm
- fck ≥ 20 MPa (paredes de concreto — ABNT NBR 16055)
- Planta rígida — paredes não podem ser removidas após execução

**Paredes de alvenaria estrutural:**
- Blocos de concreto ou cerâmicos estruturais
- Altura: até 12 pavimentos (geralmente até 15 m)
- Não requer mão de obra de concreto armado especializada

**Indicado para:**
- Edifícios com planta repetida (flats, habitação social)
- Obras de alto volume e prazo curto
- Regiões com mão de obra de concreto armado escassa

**Limitação:**
- Planta rígida — dificulta mudanças de uso
- Paredes não podem ser removidas

### 3. Laje Plana (sem vigas)

Laje apoiada diretamente nos pilares. Tratado em artigo específico.

**Indicado para:**
- Edifícios comerciais e de escritórios com planta livre
- Garagens
- Vãos regulares de 6 a 9 m

### 4. Laje Plana Protendida

Laje plana com cabos de protensão — permite vãos maiores com espessura menor.

**Indicado para:**
- Escritórios, shoppings, hospitais com vãos 9 a 14 m
- Exigência de pé-direito máximo

### 5. Sistema Misto (Pórticos + Paredes)

Combinação de pilares, vigas e núcleos rígidos de concreto (caixas de elevadores, escadas). Os núcleos resistem às forças horizontais (vento).

**Indicado para:**
- Edifícios altos (> 20 pavimentos)
- Edifícios em região de ventos intensos

## Critérios de Escolha por Tipo de Obra

| Tipo de obra | Sistema recomendado |
|-------------|---------------------|
| Casa residencial 1–2 pavimentos | Pórtico simples (laje treliçada ou maciça) |
| Edifício residencial 3–15 pav. | Pórticos ou paredes estruturais |
| Edifício comercial / escritórios | Laje plana ou laje plana protendida |
| Habitação social em larga escala | Paredes de concreto (ABNT NBR 16055) |
| Galpão industrial | Pré-moldados (alveolar + vigas pré) |
| Edifício alto > 20 andares | Sistema misto com núcleos rígidos |

## Comparativo Econômico Orientativo

| Sistema | Consumo de concreto | Consumo de aço | Custo de fôrma | Prazo |
|---------|--------------------|-----------------|--------------|----|
| Pórtico convencional | Médio | Médio | Alto | Médio |
| Paredes de concreto | Alto | Médio | Baixo (fôrma sistêmica) | Rápido |
| Laje plana | Médio-alto | Médio-alto | Baixo | Médio |
| Laje plana protendida | Médio | Alto | Baixo | Rápido |

A decisão final é sempre do engenheiro calculista, que analisa a estrutura completa incluindo as cargas, os ventos e as condições do solo.`
  },
  {
    id: 127,
    slug: "cargas-em-estruturas-como-calcular",
    category: "Projeto Estrutural",
    title: "Cargas em Estruturas de Concreto Armado: Como Calcular e Combinar",
    metaDescription: "Como calcular cargas permanentes, variáveis e acidentais em estruturas de concreto armado segundo a NBR 6120:2019 e NBR 6118:2014. Tabelas de valores.",
    keyword: "cargas em estruturas concreto armado",
    date: "21 Mai 2026",
    summary: "Cargas em estruturas: permanentes (peso próprio, revestimento), variáveis (uso), acidentais (vento) — valores da NBR 6120 e combinações de projeto.",
    content: `## Por que Calcular Cargas Corretamente?

O cálculo de cargas é a entrada de todo projeto estrutural. Subestimar cargas leva a estruturas inseguras; superestimar aumenta custo desnecessariamente. As cargas são classificadas conforme a ABNT NBR 6118:2014 e quantificadas pela NBR 6120:2019.

## Classificação das Cargas

### Cargas Permanentes (g)
Atuam de forma contínua e com magnitude praticamente constante ao longo da vida útil da estrutura.

**Exemplos:** peso próprio do concreto, revestimentos, impermeabilização, paredes fixas, instalações permanentes.

### Cargas Variáveis (q)
Atuam intermitentemente ou com magnitude variável — cargas de uso, vento, temperatura.

**Exemplos:** pessoas, mobiliário, equipamentos, veículos, cargas de construção.

### Cargas Acidentais
Cargas excepcionais — impacto de veículo, explosão, sismo.

## Peso Próprio dos Materiais (NBR 6120:2019)

| Material | Peso específico (kN/m³) |
|----------|------------------------|
| Concreto armado | 25,0 |
| Concreto simples | 24,0 |
| Argamassa de cimento | 21,0 |
| Alvenaria de tijolo cerâmico | 13,0 a 19,0 |
| Alvenaria de bloco de concreto | 14,0 a 17,0 |
| Cerâmica (piso + contrapiso) | 1,0 a 1,5 kN/m² |
| Madeira | 6,0 a 11,0 |
| Aço | 78,5 |

## Cargas de Uso por Tipo de Ambiente (NBR 6120:2019, Tabela 3)

| Uso | Carga variável (kN/m²) |
|-----|----------------------|
| Dormitórios residenciais | 1,5 |
| Salas, corredores, banheiros residenciais | 2,0 |
| Escritórios sem partições pesadas | 2,0 |
| Escritórios com partições (divisórias) | 3,0 |
| Salas de reunião, auditórios | 3,0 |
| Bares, restaurantes, halls de hotel | 3,0 |
| Escadas residenciais | 2,5 |
| Escadas de uso público | 5,0 |
| Corredores de uso público | 3,0 a 5,0 |
| Garagens para carros de passeio | 2,5 |
| Garagens para veículos pesados | 5,0 |
| Cobertura com acesso de pessoas | 2,0 |
| Cobertura sem acesso (manutenção) | 0,5 |
| Biblioteca — salas de leitura | 3,0 |
| Biblioteca — depósito de livros | 6,0 a 9,0 |
| Lojas e comércio | 3,0 a 5,0 |
| Hospitais — quartos | 2,0 |
| Hospitais — corredores e salas | 3,0 |

## Como Calcular o Peso Próprio de uma Laje

**Peso próprio da laje (kN/m²) = espessura (m) × 25 kN/m³**

| Espessura | Peso próprio |
|-----------|-------------|
| 8 cm | 2,0 kN/m² |
| 10 cm | 2,5 kN/m² |
| 12 cm | 3,0 kN/m² |
| 15 cm | 3,75 kN/m² |
| 20 cm | 5,0 kN/m² |

**Exemplo de carga total em laje residencial:**
- Peso próprio (laje 10 cm): 2,5 kN/m²
- Revestimento (cerâmica + contrapiso): 1,2 kN/m²
- Paredes divisórias (NBR 6120 permite equivalente): 1,0 kN/m²
- Carga variável (uso residencial): 1,5 kN/m²
- **Total característico: 6,2 kN/m²**

## Combinações de Cargas para o ELU (NBR 6118, item 11.7)

Para o Estado Limite Último (cálculo de resistência), as cargas são combinadas com fatores de ponderação:

**Fd = γg × Fgk + γq × (Fq1k + Σψ0j × Fqjk)**

Coeficientes parciais mais usados:
- γg = 1,4 (cargas permanentes de grandes variabilidades) ou 1,25 (pequena variabilidade)
- γq = 1,4 (cargas variáveis)
- ψ0 = 0,5 a 0,7 (fator de combinação, varia pelo tipo de carga)

**Exemplo simplificado (combinação fundamental, sem vento):**

Fd = 1,4 × gk + 1,4 × qk

Para a laje residencial acima:
- gk = 2,5 + 1,2 + 1,0 = 4,7 kN/m²
- qk = 1,5 kN/m²
- **Fd = 1,4 × 4,7 + 1,4 × 1,5 = 6,58 + 2,10 = 8,68 kN/m²**

## Cargas de Vento

O vento é calculado pela ABNT NBR 6123. A velocidade básica do vento (V0) depende da região geográfica.

| Região | V0 (m/s) |
|--------|----------|
| Goiânia / Goiás interior | 35 a 40 m/s |
| Brasília / DF | 35 m/s |
| Litoral brasileiro | 40 a 50 m/s |

A pressão dinâmica do vento: q = 0,613 × V²k (N/m²), onde Vk é a velocidade de projeto.

## Cargas de Temperatura

Em estruturas expostas, variações de temperatura geram esforços internos. A NBR 6118 recomenda considerar variação de ±15°C em estruturas abrigadas e ±25°C em estruturas expostas ao sol.

## Carga nas Vigas e Pilares

A partir das cargas nas lajes, os engenheiros calculam as cargas transmitidas às vigas (em kN/m) e aos pilares (em kN), considerando as áreas de influência de cada elemento.

Para uma estimativa rápida de carga em pilar de edifício convencional:
- **N ≈ 10 a 15 kN/m² × área de influência × número de pavimentos**

*Esse valor deve ser sempre confirmado em projeto estrutural.*`
  },
  {
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
| Esforço cortante baixo | Estribos com espaçamento maior |`
  },
  {
    id: 129,
    slug: "impermeabilizacao-estruturas-concreto",
    category: "Projeto Estrutural",
    title: "Impermeabilização de Estruturas de Concreto: Tipos e Quando Aplicar",
    metaDescription: "Tipos de impermeabilização para estruturas de concreto: mantas asfálticas, argamassas, cristalização, pintura epóxi — quando usar cada um e detalhes de execução.",
    keyword: "impermeabilização estruturas concreto",
    date: "21 Mai 2026",
    summary: "Sistemas de impermeabilização para estruturas de concreto: mantas, argamassas, cristalização e pinturas — aplicação, vantagens e limitações.",
    content: `## Por que Impermeabilizar Estruturas de Concreto?

O concreto é poroso e permeável a líquidos e gases. A penetração de água e cloretos é a principal causa de corrosão das armaduras — o processo que mais deteriora estruturas de concreto no Brasil.

A impermeabilização protege a estrutura em duas frentes:
1. **Evita a penetração de água** que causa corrosão das armaduras, eflorescência e infiltrações
2. **Mantém o ambiente interno seco** (garagens subterrâneas, reservatórios, subsolos)

A ABNT NBR 9575 classifica as impermeabilizações e define os requisitos de projeto.

## Classificação Geral

### Por flexibilidade
- **Rígida:** argamassa impermeabilizante, cristalização — sem capacidade de acompanhar movimentos
- **Semi-rígida:** argamassas flexíveis com polímeros
- **Flexível:** mantas e membranas — acompanha movimentos da estrutura

### Por tipo de aplicação
- **Externa (positiva):** aplicada na face oposta à pressão d'água — mais eficiente
- **Interna (negativa):** aplicada na face de onde a água vem — menor eficiência, usada quando o externo não é acessível

## Sistemas de Impermeabilização

### 1. Manta Asfáltica
Manta pré-fabricada de asfalto modificado com armadura interna (poliéster, alumínio ou fibra de vidro).

| Tipo | Espessura | Uso |
|------|-----------|-----|
| Manta APP (polipropileno atático) | 3 a 6 mm | Coberturas expostas ao sol — alta resistência UV |
| Manta SBS (butadieno-estireno) | 3 a 4 mm | Terraços, jardineiras, lajes enterradas |
| Manta autoadesiva | 1,5 a 3 mm | Subsolos, fundações — sem chama |

**Aplicação:** maçarico (manta termofusível) ou autoadesiva. Requer primer de limpeza e imprimação betuminosa.

**Vantagem:** alta resistência mecânica e durabilidade. Cobre fissuras de até 1,5 mm.
**Limitação:** sensível a perfurações. Requer proteção mecânica em pisos transitáveis.

### 2. Argamassa Impermeabilizante Rígida
Argamassa de cimento, areia e aditivos impermeabilizantes cristalizantes ou poliméricos.

**Uso:** caixas d'água, piscinas, reservatórios, paredes de subsolos — onde a estrutura não apresenta movimentos.
**Espessura:** 1 a 3 cm em duas a três camadas.
**Vantagem:** fácil aplicação, baixo custo.
**Limitação:** não suporta movimentação — fissura facilmente se a estrutura trabalhar.

### 3. Argamassa Flexível (Bicomponente)
Argamassa com polímero líquido (componente B) que aumenta a elasticidade. Resiste a fissuras de até 0,5 mm.

**Uso:** fachadas, lajes de cobertura, varandas, piscinas com leve movimentação.
**Aplicação:** pintura com rolo ou broxa em 2 a 3 demãos.

### 4. Cristalização (Produtos Cristalizantes)
Compostos que penetram nos poros do concreto e reagem com a água formando cristais insolúveis que obstruem os capilares.

**Uso:** reservatórios, fundações, concreto aparente — ideal onde há pressão d'água positiva (interna) e a face externa não é acessível.
**Vantagem:** auto-regenerante (continua cristalizando ao longo da vida útil).
**Limitação:** eficaz apenas em concreto são, sem fissuras. Não funciona em fissuras ativas.

### 5. Pintura Epóxi
Pintura de base epóxi em duas ou mais demãos. Impermeabiliza e protege contra agentes químicos.

**Uso:** pisos de garagens, reservatórios de substâncias químicas, piscinas de fibra.
**Vantagem:** alta resistência química.
**Limitação:** requer superfície completamente seca e limpa. Sensível à umidade durante aplicação.

### 6. Membrana Poliuretânica
Membrana líquida que cura formando filme elástico contínuo.

**Uso:** coberturas com tráfego, varandas, sacadas — alta elasticidade e capacidade de acompanhar movimentos.
**Espessura final:** 1,5 a 2,5 mm.
**Vantagem:** aplicação rápida, sem emendas, excelente aderência.

## Guia de Seleção por Aplicação

| Local | Sistema recomendado |
|-------|---------------------|
| Cobertura plana exposta ao sol | Manta APP 4 mm + proteção mecânica |
| Terraço com jardim (jardineira) | Manta SBS 4 mm + manta drenante |
| Subsolo / garagem subterrânea | Manta autoadesiva (externa) ou cristalização (interna) |
| Caixa d'água de concreto | Argamassa rígida ou cristalização |
| Piscina | Argamassa rígida + pintura epóxi ou poliuretano |
| Varanda / sacada | Membrana poliuretânica 2 mm |
| Fundação radier exposta ao solo | Manta autoadesiva ou argamassa flexível |
| Banheiro / área molhada | Argamassa flexível bicomponente |

## Detalhes Críticos de Execução

1. **Rodapé impermeabilizante:** a impermeabilização deve subir na parede no mínimo 30 cm acima do nível d'água ou do piso
2. **Juntas de dilatação:** impermeabilizar com mastique flexível ou perfil de neoprene — nunca aplicar manta rígida sobre junta ativa
3. **Ralos e passantes:** pontos onde a tubulação atravessa a laje são as maiores fontes de infiltração — arrematar com reforço de manta e mangas de PVC
4. **Cantos:** reforçar com tira adicional de manta (aba de reforço) em todos os cantos reentrantes
5. **Superfície:** limpa, seca, sem pontas de aço, sem laitância — uma preparação mal-feita invalida todo o sistema`
  },
  {
    id: 130,
    slug: "faq-engenheiro-estruturas-concreto",
    category: "Normas Técnicas",
    title: "FAQ Técnico: 30 Perguntas Frequentes de Engenheiros sobre Estruturas de Concreto",
    metaDescription: "30 perguntas técnicas frequentes de engenheiros respondidas: NBR 6118, cobrimento, ancoragem, emendas, fck, lajes, pilares, estacas e patologias.",
    keyword: "perguntas frequentes engenheiros estruturas concreto",
    date: "21 Mai 2026",
    summary: "30 perguntas técnicas frequentes de engenheiros com respostas diretas: NBR 6118, armação, concreto, lajes, fundações e patologias.",
    content: `## Sobre Normas e Fundamentos

**1. Qual a diferença entre fck e fcj?**
fck é a resistência característica à compressão do concreto determinada a 28 dias de cura. fcj é a resistência na idade j dias — pode ser qualquer idade. Para liberação de fôrma ou aplicação de protensão, usa-se fcj.

**2. O que é classe de agressividade ambiental (CAA)?**
Classificação da NBR 6118 (tabela 6.1) que define o nível de agressividade do ambiente onde a estrutura está inserida: Classe I (fraca), II (moderada), III (forte), IV (muito forte). Determina o cobrimento mínimo e o fck mínimo.

**3. Qual o fck mínimo para ambiente urbano?**
Classe II (urbano): fck mínimo = 25 MPa. Relação água/cimento máxima = 0,60.

**4. Qual a diferença entre cobrimento nominal e cobrimento mínimo?**
Cobrimento mínimo (c_min) é o valor definido pela classe de agressividade. Cobrimento nominal (c_nom) = c_min + 10 mm (tolerância de execução). O projeto deve especificar c_nom; em obra, o mínimo aceitável é c_min.

**5. A NBR 6118:2014 ainda é a versão vigente?**
Sim, com algumas emendas. Uma revisão (NBR 6118:2023 ou 2024) está em elaboração, mas a versão 2014 (com erratas) segue como referência normativa vigente até nova publicação formal.

---

## Sobre Armação e Detalhamento

**6. Qual o comprimento mínimo de ancoragem para CA-50 em C25?**
Para barra reta em posição boa de concretagem: lb = 54 × φ. Para barra com gancho de 90°: lb,ef = 33 × φ.

Exemplo: φ 12,5 mm → barra reta: 54 × 12,5 = 675 mm ≈ 68 cm.

**7. Posso emendar todas as barras na mesma seção?**
Não. A NBR 6118 proíbe emendar mais de 50% das barras em uma mesma seção (definida como zona de comprimento 1,3 × lt). Recomenda-se escalonar as emendas para minimizar a concentração de esforços.

**8. Qual o diâmetro mínimo de estribo em vigas?**
5 mm (CA-60) ou 6,3 mm (CA-50). Na prática, φ 5 e φ 6,3 mm são os mais usados em vigas convencionais.

**9. Posso usar CA-60 como armadura principal em vigas?**
Sim, tecnicamente. Mas CA-60 é disponível em diâmetros pequenos (até 10 mm) e tem menor ductilidade que CA-50. Para armaduras principais de vigas (que precisam de ductilidade), CA-50 é mais indicado.

**10. Qual a armadura de distribuição mínima em lajes?**
20% da armadura principal, com taxa mínima de 0,9 cm²/m. Espaçamento máximo: 3 × h ou 33 cm (o menor).

**11. Qual o cobrimento para ferragem em contato com o solo?**
Mínimo 45 mm (equivalente à Classe III). Se o solo for agressivo (presença de sulfatos, cloretos), usar 65 mm (Classe IV).

**12. Qual a diferença entre armadura de montagem e armadura construtiva?**
Armadura de montagem garante a geometria da gaiola durante a concretagem (diâmetro mínimo: 10 mm em vigas). Armadura construtiva (ou de distribuição) controla fissuração por retração — geralmente nas faces perpendiculares à armadura principal.

---

## Sobre Lajes

**13. Qual a espessura mínima de uma laje maciça?**
Segundo NBR 6118, item 13.2.3: h ≥ L/35 (lajes com uma direção predominante) ou h ≥ L/40 (lajes em duas direções); mínimo absoluto de 7 cm para lajes não transitáveis ou 8 cm para lajes com tráfego leve.

**14. Posso usar laje com 7 cm de espessura para piso de casa?**
Não é recomendado. Para piso residencial: mínimo de 8 a 10 cm. Lajes de 7 cm são indicadas apenas para lajes de cobertura não transitáveis.

**15. Qual a diferença entre laje nervurada e laje treliçada?**
Laje treliçada usa vigotas pré-moldadas com treliças incorporadas. Laje nervurada tem nervos moldados in loco (ou com fôrma removível), sem vigotas. Ambas são subcategorias de laje nervurada conforme a NBR 6118.

**16. Quanto de aço precisa por m² de laje?**
Varia com o vão e a carga. Orientativo para lajes residenciais:
- Laje treliçada (vão 4–5 m): 8 a 12 kg/m²
- Laje maciça (vão 4–5 m): 10 a 18 kg/m²
- Laje nervurada (vão 6–8 m): 12 a 20 kg/m²

---

## Sobre Pilares e Vigas

**17. Qual a dimensão mínima de um pilar?**
NBR 6118, item 13.2.3: menor dimensão da seção transversal ≥ 19 cm. Para pilares de seção circular: diâmetro ≥ 19 cm.

**18. Qual a taxa de armadura mínima em pilares?**
ρs,min = 0,4% da área bruta do pilar. Taxa máxima: 4% (fora de emendas) ou 8% (em emendas).

**19. O pilar tem armadura nos quatro cantos, mas também precisa de barras intermediárias?**
Sim. O espaçamento máximo entre barras consecutivas do pilar na face é 20 cm (NBR 6118, item 18.4.2.2). Barras intermediárias são necessárias quando os cantos ficam a mais de 20 cm de distância.

**20. Quando é necessário usar viga de baldrame?**
Sempre que as fundações forem isoladas (sapatas ou blocos), a viga de baldrame interliga os pilares no nível do piso, distribui e equaliza os recalques diferenciais, e serve de apoio para as paredes do embasamento.

---

## Sobre Fundações

**21. Qual a diferença entre sapata isolada e sapata corrida?**
Sapata isolada recebe a carga de um único pilar. Sapata corrida recebe a carga de uma parede ou de vários pilares alinhados — funciona como viga de fundação.

**22. Quando usar fundação profunda (estacas) ao invés de fundação rasa (sapatas)?**
Quando a capacidade de suporte do solo superficial é insuficiente para suportar as cargas da estrutura. A sondagem SPT indica a necessidade: solos com NSPT < 5 nos primeiros 2–3 metros geralmente exigem fundação profunda.

**23. O que é o índice NSPT?**
Número de golpes necessários para cravar 30 cm o amostrador padrão na sondagem SPT. NSPT < 5 = solo mole; NSPT 5 a 10 = solo médio; NSPT > 20 = solo firme a muito resistente.

---

## Sobre Concreto

**24. Qual a diferença entre C25 e C30?**
fck: C25 = 25 MPa; C30 = 30 MPa. Em prática: C30 tem maior resistência, menor permeabilidade, maior custo (~10-15% mais caro). Use C30 para ambientes agressivos (Classe III) ou cargas elevadas.

**25. O que é slump e qual o valor ideal para lajes?**
Slump (abatimento) mede a consistência do concreto fresco. Para lajes bombeadas: 14 a 18 cm. Para pilares e vigas com forma adensável: 10 a 16 cm. Slump alto facilita o lançamento mas pode reduzir a resistência se não controlado.

**26. Por quanto tempo curar o concreto?**
NBR 14931: cura úmida mínima de 3 dias para cimentos CP-V; 7 dias para CP-II, CP-III, CP-IV; mais tempo para ambientes agressivos. A cura inadequada pode reduzir a resistência em até 30%.

---

## Sobre Patologias

**27. O que causa fissuras diagonais a 45° em vigas?**
Esforço cortante excessivo — cisalhamento. Indica insuficiência de estribos ou concreto de baixa resistência. É um sinal crítico que requer avaliação estrutural urgente.

**28. Manchas brancas na superfície do concreto são perigosas?**
Dependem da causa. Eflorescência (sais brancos na superfície por migração de cálcio) é estética e indica umidade, mas não compromete estruturalmente. Lixiviação (perda de cálcio do concreto por lavagem contínua) é mais séria — fragiliza o material.

**29. Como saber se a ferragem está enferrujando?**
Sinais: manchas de ferrugem no concreto, fissuras longitudinais paralelas à armadura, desplacamento do cobrimento (lascamento). Em fase inicial, pode ser detectada por termografia ou mapeamento de potencial de corrosão.

**30. O que fazer quando encontrar barra de aço exposta em uma estrutura existente?**
1. Avaliar a extensão da corrosão (martelo de borracha — concreto delamina soa oco)
2. Remover todo o concreto comprometido (demolição cirúrgica até 2 cm após a ferragem)
3. Tratar a ferragem com convertedor de ferrugem ou jato de areia
4. Reconstituir o cobrimento com argamassa de reparo polimérica
5. Avaliar necessidade de reforço estrutural se a seção da barra estiver reduzida`
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

print("Done! Posts 126-130 added.")
