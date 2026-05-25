#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Adiciona posts 121-125 ao blogPosts.ts"""

NEW_POSTS = r"""
  },
  {
    id: 121,
    slug: "concreto-protendido-quando-especificar",
    category: "Projeto Estrutural",
    title: "Concreto Protendido: O que É, Quando Usar e Diferenças para Concreto Armado",
    metaDescription: "O que é concreto protendido, tipos (pré-tensão e pós-tensão), quando especificar, vantagens, limitações e comparativo com concreto armado convencional.",
    keyword: "concreto protendido quando usar",
    date: "21 Mai 2026",
    summary: "Concreto protendido: conceito, tipos (pré e pós-tensão), vantagens, quando especificar e comparativo com concreto armado convencional.",
    content: `## O que é Concreto Protendido?

Concreto protendido é o concreto armado no qual as armaduras ativas (cabos de aço de alta resistência) são tensionadas antes ou após a concretagem, introduzindo compressão prévia no elemento estrutural. Essa compressão prévia compensa (parcial ou totalmente) as trações causadas pelas cargas de serviço.

**Princípio:** o concreto é um material que resiste bem à compressão mas mal à tração. Ao pré-comprimir o elemento, compensa-se a tração que as cargas irão gerar, permitindo vãos maiores e seções menores.

## Tipos de Protensão

### Pré-tensão (Pré-moldados)
Os cabos são tensionados **antes** da concretagem, ancorados em pórticos de protensão. Após a cura, os cabos são liberados e transferem a compressão para o concreto por aderência.

- Executada em fábrica (pré-moldados)
- Produção em série (lajes alveolares, vigas duplo T)
- Cabos de aço CA-190 ou CP-190 (fios ou cordoalhas)

### Pós-tensão (In loco)
Os cabos são colocados em bainhas (conduítes) dentro das fôrmas e tensionados **após** a cura do concreto, com macaco hidráulico. Ancoragem nas extremidades por placas e cunhas.

- Executada no canteiro
- Vigas e lajes moldadas no local
- Permite traçados curvos dos cabos (cabos parabólicos)

## Armaduras Ativas vs Passivas

| Armadura | Função | Material | Resistência |
|----------|--------|----------|-------------|
| Ativa (cabos de protensão) | Compressão prévia | Cordoalhas CP-190 ou CP-170 | fpu ≥ 1700 MPa |
| Passiva (vergalhões) | Controle de fissuração e esforços secundários | CA-50, CA-60 | fy = 500 ou 600 MPa |

## Quando Especificar Concreto Protendido?

| Situação | Indicação |
|----------|-----------|
| Vãos ≥ 12 m (vigas) | ✅ Protensão viabiliza estrutura |
| Vãos ≥ 9 m (lajes) | ✅ Reduz espessura e flecha |
| Flecha crítica (hospitais, laboratórios) | ✅ Controla deformação |
| Construção com concreto aparente liso | ✅ Evita fissuração visível |
| Vãos < 8 m e cargas convencionais | ❌ Concreto armado é mais econômico |
| Obras sem mão de obra especializada | ❌ Exige equipe técnica específica |

## Vantagens do Concreto Protendido

- **Maior vão livre** com seção menor — lajes mais esbeltas (h ≈ L/35 a L/45)
- **Controle de fissuração** — estrutura praticamente sem fissuras em serviço
- **Menor peso próprio** — menos concreto = menos carga nos pilares e fundações
- **Melhor durabilidade** — menor permeabilidade do concreto comprimido

## Limitações e Cuidados

- **Mão de obra especializada** obrigatória — protensão requer equipe treinada e equipamento específico
- **Concreto de alta resistência** — mínimo C30; frequentemente C35 a C45
- **Perdas de protensão** — atrito nos cabos, acomodação das ancoragens, fluência e retração do concreto devem ser calculadas
- **Custo inicial mais alto** — compensado em vãos longos ou exigências de serviço rígidas
- **Não improvisa** — qualquer modificação pós-execução é muito complexa

## Relação fck e Protensão

| fck mínimo | Aplicação |
|-----------|-----------|
| C30 | Protensão parcial — fissuras controladas |
| C35 | Protensão plena — sem fissuras |
| C40 ou mais | Lajes alveolares, vigas de grande vão |

## Exemplos de Aplicação

| Estrutura | Sistema usual |
|-----------|--------------|
| Lajes de edifícios altos (vão > 8 m) | Pós-tensão com cabos engraxados |
| Vigas de garagem (vão > 12 m) | Pós-tensão |
| Lajes alveolares pré-fabricadas | Pré-tensão em fábrica |
| Pontes e viadutos | Pós-tensão ou pré-tensão |
| Reservatórios circulares | Pré-tensão circunferencial |

## Comparativo: Protendido vs Armado Convencional

| Critério | Protendido | Armado Convencional |
|----------|------------|---------------------|
| Vão econômico | > 9 m (lajes) / > 12 m (vigas) | 4 a 8 m (lajes) / 4 a 10 m (vigas) |
| Altura da laje (L/h) | L/35 a L/45 | L/25 a L/35 |
| Fissuração | Controlada ou nula | Fissuras admissíveis (w ≤ 0,3 mm) |
| Durabilidade | Superior | Boa com cobrimento correto |
| Custo por m² (vão curto) | Maior | Menor |
| Custo por m² (vão longo) | Menor | Maior |`
  },
  {
    id: 122,
    slug: "laje-alveolar-pre-fabricada",
    category: "Projeto Estrutural",
    title: "Laje Alveolar (Painel Pré-moldado): Características, Vantagens e Limitações",
    metaDescription: "O que é laje alveolar, como funciona, dimensões comerciais, capacidade de carga, vantagens sobre outros sistemas e limitações técnicas.",
    keyword: "laje alveolar pré-fabricada",
    date: "21 Mai 2026",
    summary: "Laje alveolar pré-moldada: princípio estrutural, dimensões, capacidade de carga, vantagens e quando usar.",
    content: `## O que é Laje Alveolar?

Laje alveolar (também chamada painel alveolar ou hollow-core slab) é um elemento pré-moldado de concreto protendido com seção transversal perfurada por alvéolos (furos longitudinais). Os alvéolos reduzem o peso próprio sem comprometer significativamente a resistência à flexão.

É produzida em fábrica por extrusão ou pré-tensão em pistas longas (30 a 150 m), depois cortada nos comprimentos de projeto.

## Composição

- **Concreto:** fck ≥ 40 MPa (alta resistência para protensão)
- **Armadura:** cordoalhas de aço CP-190 pré-tensionadas, distribuídas ao longo da peça
- **Alvéolos:** furos circulares ou ovais que percorrem toda a extensão — reduzem o peso em 30 a 50%

## Dimensões Comerciais Típicas

| Espessura | Largura padrão | Vão máximo usual | Carga máxima (kN/m²) |
|-----------|---------------|-----------------|----------------------|
| 12 cm | 120 cm | 5 a 6 m | 5 a 7 |
| 16 cm | 120 cm | 6 a 8 m | 7 a 10 |
| 20 cm | 120 cm | 7 a 10 m | 8 a 12 |
| 25 cm | 120 cm | 9 a 12 m | 10 a 15 |
| 32 cm | 120 cm | 12 a 16 m | 12 a 18 |

*Capacidades orientativas — variam por fabricante e classe do concreto.*

## Capa de Concreto Complementar

Sobre os painéis alveolares é comum aplicar capa de concreto in loco (5 a 7 cm) para:
- Solidarizar os painéis transversalmente
- Nivelar a superfície
- Receber instalações embutidas
- Melhorar a distribuição de cargas concentradas

Com a capa, o conjunto forma uma seção mista com maior rigidez.

## Vantagens

- **Velocidade de execução:** painéis montados em horas, sem fôrmas e escoramento
- **Vãos longos sem vigas intermediárias** (até 16 m com painéis de 32 cm)
- **Peso próprio reduzido** pelos alvéolos — menor carga nas fundações
- **Controle de qualidade elevado** (produção industrial em fábrica)
- **Passagem de instalações:** instalações passam pelos alvéolos sem furar a estrutura

## Limitações

| Limitação | Detalhamento |
|-----------|-------------|
| Sem flexibilidade de corte | Furos na laje exigem planejamento prévio — corte em obra é difícil |
| Apoio mínimo exigido | ≥ 5 cm sobre viga ou parede (verificar com fabricante) |
| Cargas concentradas | Distribuição transversal limitada sem capa — requer análise |
| Sem continuidade estrutural | Simplesmente apoiada — comportamento diferente de laje moldada in loco |
| Logística de transporte | Painéis grandes exigem caminhões longos e guindaste |
| Projeto de lajes especiais | Aberturas grandes, pilares intermediários — requerem detalhamento especial |

## Quando Usar Laje Alveolar?

| Situação | Indicação |
|----------|-----------|
| Galpões industriais (vão ≥ 8 m) | ✅ Sistema quase padrão |
| Edifícios comerciais/residenciais com planta livre | ✅ Elimina vigas intermediárias |
| Obras com prazo curto | ✅ Montagem rápida |
| Plantas com muitas aberturas irregulares | ⚠️ Planejar com antecedência |
| Estruturas com grandes cargas concentradas | ⚠️ Verificar com fabricante |
| Lajes com vãos < 5 m e cargas normais | ❌ Laje treliçada pode ser mais econômica |

## Comparativo com Outros Sistemas

| Critério | Alveolar | Treliçada | Maciça in loco |
|----------|----------|-----------|----------------|
| Vão máximo sem vigas | Até 16 m | 4 a 7 m | 5 a 8 m |
| Velocidade | Alta | Média | Baixa |
| Flexibilidade de projeto | Baixa | Alta | Alta |
| Controle de qualidade | Alto (fábrica) | Médio | Depende da execução |
| Custo (vão curto) | Maior | Menor | Médio |
| Custo (vão longo) | Menor | Maior | Maior |`
  },
  {
    id: 123,
    slug: "consolos-balancos-detalhamento",
    category: "Projeto Estrutural",
    title: "Consolos e Balanços em Concreto Armado: Detalhamento e Armação",
    metaDescription: "Detalhamento técnico de consolos e lajes em balanço: comportamento estrutural, armação principal e de suspensão, verificações de cisalhamento e ancoragem.",
    keyword: "consolo balanço concreto armado",
    date: "21 Mai 2026",
    summary: "Consolos e lajes em balanço: comportamento estrutural, armação principal, armadura de suspensão, cisalhamento e ancoragem.",
    content: `## O que é um Consolo?

Consolo (ou console) é um elemento em balanço engastado em um pilar ou parede, com comprimento pequeno em relação à altura. Recebe cargas verticais (geralmente de vigas pré-moldadas, guarda-corpos ou coberturas metálicas).

**Classificação pela relação a/d:**
- **Consolo curto:** a/d ≤ 1,0 (comportamento de treliça — biela-tirante)
- **Consolo longo:** a/d > 1,0 (comportamento de viga em balanço)

*a = distância da carga à face do pilar; d = altura útil do consolo*

## Comportamento Estrutural do Consolo Curto

No consolo curto, as tensões não seguem a teoria de Bernoulli (seção plana). O comportamento é melhor descrito pelo **modelo de biela-tirante:**
- **Biela comprimida:** concreto transmite carga em diagonal da força aplicada até o engaste
- **Tirante tracionado:** armadura horizontal superior resiste à tração gerada pela carga vertical

## Armação do Consolo Curto

### Armadura Principal (Tirante)
Armadura horizontal posicionada na face superior (zona de tração), ancorada com gancho de 90° dentro do pilar.

**Comprimento mínimo de ancoragem no pilar:** 15 × φ (fora da dobra do gancho) ou conforme cálculo.

### Armadura de Suspensão (Estribos Fechados)
Estribos fechados ou grampos distribuídos ao longo do consolo. Segundo a NBR 6118, a área de armadura de suspensão deve ser ≥ 0,5 × As (onde As = área do tirante principal).

### Armadura Longitudinal de Compressão (face inferior)
Armadura mínima construtiva na face inferior para controle de fissuração por retração.

### Cobrimento
Consolidar o cobrimento lateral, superior e inferior conforme classe de agressividade (mínimo 35 mm em ambiente urbano — classe II).

## Verificações no Consolo Curto (NBR 6118, item 22.4)

| Verificação | Critério |
|-------------|----------|
| Biela comprimida | σc ≤ 0,72 × fcd |
| Tirante (armadura superior) | Ancorada corretamente no pilar |
| Cisalhamento na face de apoio | τ ≤ τRd (definido em norma) |
| Força horizontal (frenagem, temperatura) | Armadura adicional de suspensão |

## Laje em Balanço

Laje em balanço (ou laje em consolo) é o elemento de laje que se projeta além do apoio sem suporte na extremidade livre. Exemplos: varanda, platibanda, aba de cobertura.

### Comportamento
Momento negativo (tração na face superior) ao longo de todo o comprimento do balanço. O momento máximo ocorre no engaste (apoio).

### Armação da Laje em Balanço

| Armadura | Posição | Observação |
|----------|---------|------------|
| Principal | Face superior, paralela ao comprimento do balanço | Dimensionada pelo momento no engaste |
| Distribuição | Face superior, perpendicular ao balanço | ≥ 20% da principal, espaç. ≤ 33 cm |
| Construtiva inferior | Face inferior | ≥ 0,9 cm²/m, controle de retração |

### Comprimento da Armadura Principal além do Apoio
A armadura superior deve se estender **para dentro da laje de apoio** pelo comprimento de ancoragem mais o comprimento onde o momento negativo está presente.

**Regra prática:** estender a armadura negativa pelo menos:
- Comprimento de ancoragem lb,ef dentro da laje de apoio
- Mais 1/4 do vão da laje adjacente (se existir)

### Espessura Mínima da Laje em Balanço (NBR 6118, item 13.2.3)
- h ≥ L/10 (para lajes em balanço)
- h mínimo = 7 cm

**Exemplos:**
- Balanço de 1,0 m: h ≥ 10 cm
- Balanço de 1,5 m: h ≥ 15 cm

### Verificação de Flecha em Balanços
A flecha em balanços é amplificada em relação a lajes apoiadas. Verificar estado limite de serviço — flecha máxima = L/250 (NBR 6118).

## Erros Comuns em Balanços

1. **Armadura na face errada:** posicionar aço na face inferior (como em laje convencional) é erro grave — a tração está na face superior
2. **Ancoragem insuficiente:** armadura não entra suficientemente na laje de apoio
3. **Espessura insuficiente:** varanda muito fina → flecha excessiva + fissuração
4. **Sobrecarga no final do balanço:** grades pesadas, mureta alta → recalcular`
  },
  {
    id: 124,
    slug: "glossario-tecnico-concreto-armado",
    category: "Normas Técnicas",
    title: "Glossário Técnico de Concreto Armado e Estruturas: 60 Termos Definidos",
    metaDescription: "Glossário completo com 60 termos técnicos de concreto armado, estruturas e NBR 6118: definições precisas para engenheiros, calculistas e construtores.",
    keyword: "glossário concreto armado termos técnicos",
    date: "21 Mai 2026",
    summary: "60 termos técnicos definidos com precisão: concreto armado, estruturas, armação, normas NBR, fundações e patologias.",
    content: `## Por que um Glossário Técnico?

A terminologia técnica precisa é fundamental para evitar erros em projeto e obra. Termos usados de forma incorreta causam desde retrabalho até falhas estruturais. Este glossário reúne os 60 termos mais importantes do domínio de estruturas de concreto armado, com definições baseadas na NBR 6118:2014 e na prática de projeto.

## A

**Altura útil (d):** distância entre a face comprimida do elemento e o centroide da armadura de tração. Difere da altura total (h) pelo cobrimento e diâmetro das barras.

**Ancoragem:** dispositivo ou comprimento de barra que garante a transferência de esforços entre a armadura e o concreto, impedindo o deslizamento da barra. Pode ser por aderência (comprimento reto) ou mecânica (gancho, placa de ancoragem).

**Armadura de distribuição:** armadura secundária perpendicular à principal, que distribui esforços e controla a fissuração por retração. Taxa mínima: 20% da armadura principal.

**Armadura de montagem:** barras de aço dispostas para manter a geometria da gaiola de armação durante a concretagem. Não dimensionadas por esforços estruturais, mas com diâmetro mínimo de 10 mm em vigas (NBR 6118).

**Armadura passiva:** vergalhões convencionais (CA-50, CA-60) sem pré-tensionamento. Resiste a esforços após fissuração do concreto.

**Armadura ativa:** cabos de aço de alta resistência (CP-190, CP-170) tensionados para introduzir compressão prévia no elemento — usada no concreto protendido.

## B

**Balanço (consolo):** elemento estrutural com apoio em apenas uma extremidade (engastado), sem apoio na extremidade livre. Momento máximo no engaste; tração sempre na face superior.

**Biela comprimida:** elemento virtual de concreto comprimido em diagonal, no modelo de biela-tirante. Resiste às forças de compressão no concreto.

**Bloco de coroamento:** elemento de fundação que conecta as estacas ao pilar ou parede estrutural, distribuindo e transferindo os esforços do pilar para as estacas.

**Britas:** agregado graúdo (pedra britada) usado na composição do concreto. A granulometria máxima (dmáx) influencia o cobrimento mínimo exigido.

## C

**CA-50:** aço para armadura com limite de escoamento característico fyk = 500 MPa. O mais usado em vigas, pilares e lajes dimensionadas pelo calculista.

**CA-60:** aço para armadura com fyk = 600 MPa. Usado em diâmetros menores (4,2 a 10 mm) — estribos, malhas soldadas, treliças.

**Capeamento:** camada de concreto moldado in loco sobre lajes pré-fabricadas (treliçadas ou alveolares) para solidarizar os elementos e nivelar a superfície.

**Carbonatação:** processo de neutralização do concreto pela reação do CO₂ atmosférico com o Ca(OH)₂ do cimento, reduzindo o pH do concreto de ~13 para ~8,5. Quando a frente de carbonatação atinge a armadura, o aço perde a proteção passiva e inicia a corrosão.

**Classe de agressividade ambiental (CAA):** classificação do ambiente de exposição da estrutura conforme a NBR 6118, tabela 6.1. Define o cobrimento mínimo e o fck mínimo do concreto. Classes I (fraca) a IV (muito forte).

**Cobrimento nominal (c_nom):** distância entre a face da armadura (ou do estribo mais externo) e a superfície do concreto. c_nom = c_min + Δc, onde Δc = 10 mm (tolerância de execução).

**Concreto armado:** concreto com armadura passiva projetada e dimensionada para resistir aos esforços de tração e cisalhamento que o concreto simples não suporta.

**Corpo de prova (CP):** cilindro de concreto (10 × 20 cm ou 15 × 30 cm) moldado durante a concretagem para ensaios de compressão e verificação do fck. NBR 5738 regula a moldagem; NBR 5739 o ensaio de compressão.

**Cortina:** parede de concreto armado ou de estacas contíguas usada para contenção vertical de taludes ou escavações profundas.

## D

**Detalhe estrutural:** representação gráfica no projeto que especifica a geometria, posição e dimensionamento das armaduras em determinado ponto ou elemento da estrutura.

**Diâmetro nominal (φ):** diâmetro nominal da barra de aço, expresso em mm. Usado em todo o Brasil como referência de identificação (φ 8, φ 10, φ 12,5, φ 16, φ 20, φ 25, φ 32 mm).

**Dobramento:** operação de curvar a barra de aço a frio para formar ganchos, estribos, ancoragens e formas curvas. Os raios mínimos de dobramento são definidos pela NBR 6118, tabela 9.2.

## E

**Emenda por transpasse (sobreposição):** união de duas barras por sobreposição paralela por comprimento lt mínimo. A NBR 6118 proíbe emendar mais de 50% das barras na mesma seção transversal.

**Estribo:** armadura transversal fechada (laço) de aço CA-50 ou CA-60, disposta perpendicularmente ao eixo do elemento, que resiste ao esforço cortante, à torção e confina o concreto.

**Esforço cortante (V):** força interna perpendicular ao eixo do elemento, gerada pelas cargas transversais. Combate à "tesoura" na seção transversal.

**Estado limite último (ELU):** estado em que a estrutura atinge sua capacidade resistente máxima — colapso. Verificação de resistência.

**Estado limite de serviço (ELS):** estado em que a estrutura não atinge a capacidade resistente, mas apresenta deformação, fissuração ou vibração excessiva. Verificação de funcionalidade.

## F

**fck:** resistência característica à compressão do concreto, determinada a 28 dias de cura. Valor abaixo do qual se espera no máximo 5% dos resultados. Expresso em MPa.

**fcj:** resistência do concreto à compressão na idade j dias (qualquer idade, não necessariamente 28 dias). Usado para verificações em idades diferentes de 28 dias (desforma, protensão).

**Fissuração:** abertura de fissuras no concreto armado. A NBR 6118 limita a abertura máxima de fissuras (wk) em estado de serviço: 0,2 mm (classe III e IV) ou 0,3 mm (classes I e II).

**Flecha:** deformação vertical de um elemento estrutural sob carga. A NBR 6118 limita a flecha total a L/250 e a flecha adicional (pós-revestimento) a L/350 ou 20 mm (o que for menor).

**Fôrma:** molde temporário de madeira, aço, alumínio ou plástico que define a geometria do elemento de concreto durante a concretagem.

## G

**Gaiola de armação:** conjunto de vergalhões pré-montados formando a armação completa de pilares, vigas ou outros elementos, antes de ser posicionado na fôrma.

**Gancho:** dobramento de 90°, 135° ou 180° na extremidade de uma barra, que aumenta a ancoragem por ação mecânica, além da aderência.

**Graute:** concreto ou argamassa de alta resistência, de consistência fluida, usado para preencher juntas, fixar chumbadores ou solidarizar pré-moldados.

## L

**Laje nervurada:** sistema de laje com nervuras (vigotas) espaçadas, preenchidas com blocos de enchimento. Espaçamento ≤ 65 cm e altura total < 30 cm (NBR 6118, item 13.2.4).

**Laje plana:** laje apoiada diretamente nos pilares, sem vigas. Sujeita à verificação de punção (NBR 6118, item 19.5).

**Laje treliçada:** laje com vigotas pré-moldadas que incorporam treliças de aço. A capa de concreto e os blocos de enchimento completam o sistema.

## M

**Mesa colaborante:** aba de laje que, em vigas T, contribui com a resistência à compressão. A largura efetiva da mesa é limitada pela NBR 6118, item 14.6.2.

**Momento fletor (M):** esforço interno que tende a curvar o elemento. Gera compressão em uma face e tração na outra.

## N

**Nó estrutural:** ponto de ligação entre dois ou mais elementos estruturais (viga-pilar, viga-viga). Região de concentração de esforços, que exige detalhamento específico.

**NBR 6118:** norma brasileira que rege o projeto de estruturas de concreto — Procedimento. Versão vigente: NBR 6118:2014 (com erratas e emendas).

## P

**Parede estrutural:** elemento de concreto armado com espessura reduzida (≤ 1/10 da altura) que resiste a cargas verticais e/ou horizontais.

**Pilar-parede:** pilar com seção muito alongada (relação b1/b2 > 5), que se comporta parcialmente como parede estrutural.

**Punção:** ruptura por cisalhamento ao redor do pilar em lajes planas, formando um cone de concreto que "fura" a laje. Verificação obrigatória em lajes sem vigas.

## R

**Recalque:** deslocamento vertical de uma fundação sob carga. Recalque diferencial é a diferença de recalque entre dois pontos da estrutura — causa fissuração e distorção da estrutura.

**Retração:** redução de volume do concreto durante a secagem e hidratação. Gera trações internas que podem fissurar o concreto antes de qualquer carga externa.

## S

**Slump (abatimento):** medida da consistência do concreto fresco. Determinado pelo ensaio de abatimento com tronco de cone (NBR NM 67). Slump alto = concreto mais fluido. Slump padrão para estruturas convencionais: 10 a 16 cm.

**Sondagem SPT (Standard Penetration Test):** ensaio de penetração padrão que quantifica a resistência do solo ao longo da profundidade. O NSPT (número de golpes por 30 cm de penetração) orienta o tipo e a profundidade da fundação.

## T

**Taxa de armadura (ρs):** relação entre a área de aço e a área de concreto da seção transversal. Expressa em %, define se o elemento está dentro dos limites normalizados.

**Tirante:** barra de aço ou cabo sob tração que transfere força de tração de um elemento para outro, ou ancora uma estrutura no solo.

**Transpasse:** ver "Emenda por transpasse".

## V

**Vão livre:** distância entre as faces internas dos apoios de um elemento.

**Vão teórico (l):** distância entre os centros dos apoios. Usado no cálculo de momentos fletores.

**Vergalhão:** denominação popular do aço para concreto armado (CA-25, CA-50, CA-60) em formato de barras longas. Produzido em bitolas de 4,2 a 40 mm de diâmetro.

**Vigota:** viga pré-moldada de pequena seção usada como nervura em lajes treliçadas ou como viga de distribuição.`
  },
  {
    id: 125,
    slug: "tabela-referencia-nbr-6118-completa",
    category: "Normas Técnicas",
    title: "Tabela de Referência NBR 6118: Cobrimento, Emendas, Ganchos e Estribos",
    metaDescription: "Tabela unificada de referência rápida da NBR 6118:2014 — cobrimento nominal por classe de agressividade, comprimentos de ancoragem, emendas por transpasse e ganchos.",
    keyword: "tabela NBR 6118 cobrimento ancoragem emenda",
    date: "21 Mai 2026",
    summary: "Referência rápida da NBR 6118:2014: cobrimento nominal, ancoragem, transpasse e ganchos — todos os valores em uma única página.",
    content: `## Cobrimento Nominal por Classe de Agressividade (NBR 6118, Tabela 7.2)

O cobrimento nominal (c_nom) é a distância entre a face da armadura mais externa (estribo) e a superfície do concreto.

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
| Zona de pilar (zonas críticas sísmicas) | menor de: 10 × φl, 200 mm |`
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

print("Done! Posts 121-125 added.")
