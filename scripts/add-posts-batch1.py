#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Adiciona posts 116-120 ao blogPosts.ts"""

NEW_POSTS = r"""
  },
  {
    id: 116,
    slug: "laje-nervurada-guia-completo",
    category: "Projeto Estrutural",
    title: "Laje Nervurada: Guia Completo para Engenheiros",
    metaDescription: "Tudo sobre laje nervurada: tipos, vigotas, nervos, espaçamentos, armação, vantagens e quando usar segundo a NBR 6118. Tabelas técnicas e detalhamento.",
    keyword: "laje nervurada",
    date: "21 Mai 2026",
    summary: "Guia técnico completo sobre laje nervurada: tipos (unidirecional e bidirecional), vigotas, nervos, armação, cobrimento e comparativo com outros sistemas.",
    content: `## O que é Laje Nervurada?

Laje nervurada é o sistema estrutural composto por nervuras (nervos) espaçadas regularmente, preenchidas com elementos de enchimento — blocos cerâmicos, EPS ou lajotas de concreto — que não contribuem estruturalmente. A zona de compressão é garantida pela mesa (capa) de concreto sobre os enchimentos.

A NBR 6118:2014, item 13.2.4, define laje nervurada como aquela com espaçamento entre eixos de nervuras não superior a 65 cm e altura total inferior a 30 cm.

## Tipos de Laje Nervurada

### Laje Nervurada Unidirecional
Nervuras em uma única direção. Indicada para vãos retangulares com relação comprimento/largura ≥ 2:1. Comporta-se como conjunto de vigas T paralelas.

### Laje Nervurada Bidirecional
Nervuras cruzadas nas duas direções, formando grelha. Indicada para painéis próximos do quadrado (relação < 2:1). Maior rigidez e melhor distribuição de cargas.

### Laje Treliçada
Subcategoria com vigotas pré-moldadas de concreto e treliças de aço incorporadas. Detalhada em artigo específico.

## Geometria: Dimensões Usuais

| Parâmetro | Valor usual | Limite NBR 6118 |
|-----------|-------------|-----------------|
| Espessura da mesa (capa) | 5 a 7 cm | ≥ 4 cm (sem tráfego) / ≥ 5 cm (com tráfego) |
| Largura do nervo (bw) | 8 a 15 cm | ≥ 5 cm |
| Altura total | 12 a 25 cm | — |
| Espaçamento entre eixos dos nervos | 40 a 65 cm | ≤ 65 cm |

## Elementos de Enchimento

| Tipo | Material | Observação |
|------|----------|------------|
| Bloco cerâmico | Cerâmica | Mais comum em GO — fôrma permanente |
| Bloco de EPS | Poliestireno expandido | Mais leve, menor absorção de água |
| Lajota de concreto | Concreto simples | Alta durabilidade, maior peso |
| Fôrma removível | Plástico/borracha | Nervos moldados in loco sem enchimento permanente |

Os blocos cerâmicos e de EPS não são computados na resistência estrutural — servem apenas de fôrma e reduzem o peso próprio da laje.

## Armação da Laje Nervurada

### Armação dos Nervos (armadura principal)
Cada nervo comporta-se como viga T. A armação positiva (parte inferior, região de tração em vão) é colocada dentro da seção do nervo. Diâmetro mínimo: 6,3 mm (CA-60) ou 8 mm (CA-50).

### Armação da Mesa (capa)
Armadura construtiva para controle de fissuração por retração e distribuição de cargas concentradas.

**Taxa mínima da mesa (NBR 6118):**
- ≥ 0,9 cm²/m em ambas as direções
- Espaçamento máximo: 33 cm

### Cobrimento Nominal nos Nervos

| Classe de agressividade | Cobrimento nominal (vigas/lajes) |
|------------------------|----------------------------------|
| I — Fraca (interior seco) | 25 mm |
| II — Moderada (urbano) | 35 mm |
| III — Forte (marinha/respingos) | 45 mm |
| IV — Muito forte (imersão) | 65 mm |

## Quando Usar Laje Nervurada?

| Situação | Indicação |
|----------|-----------|
| Vãos de 5 a 9 m | ✅ Ideal — otimiza peso e materiais |
| Carga distribuída ≤ 5 kN/m² | ✅ Padrão residencial e comercial |
| Vãos > 9 m | ⚠️ Avaliar protendido ou outros sistemas |
| Cargas concentradas pesadas | ❌ Prefer laje maciça + vigas de distribuição |
| Piso industrial com tráfego de veículos | ❌ Não recomendado |

## Comparativo: Laje Nervurada vs Laje Maciça

| Critério | Nervurada | Maciça |
|----------|-----------|--------|
| Peso próprio | Menor | Maior |
| Consumo de concreto | Menor | Maior |
| Execução | Mais demorada (blocos) | Mais simples |
| Cargas concentradas | Menos adequada | Mais adequada |
| Vãos longos (> 6 m) | Mais econômica | Menos econômica |

A escolha entre sistemas deve ser definida pelo engenheiro calculista após análise do vão, cargas e condições de execução da obra.`
  },
  {
    id: 117,
    slug: "armacao-de-vigas-concreto-armado",
    category: "Projeto Estrutural",
    title: "Armação de Vigas em Concreto Armado: Guia Técnico Completo",
    metaDescription: "Detalhamento da armação de vigas: armadura longitudinal positiva e negativa, estribos, ancoragem, comprimentos de transpasse e tabelas NBR 6118.",
    keyword: "armação de vigas concreto armado",
    date: "21 Mai 2026",
    summary: "Guia técnico para armação de vigas: armadura positiva, negativa, estribos, ancoragem e comprimentos de transpasse conforme NBR 6118.",
    content: `## Comportamento Estrutural da Viga

Uma viga em concreto armado trabalha à flexão. Na região de vão, a fibra inferior fica em tração e a superior em compressão. Nos apoios, o diagrama de momentos se inverte: a face superior fica em tração.

**Regra fundamental:** o aço resiste à tração; o concreto resiste à compressão. A armadura vai sempre onde a tração ocorre.

## Tipos de Armadura em Vigas

### Armadura Longitudinal Principal (positiva)
Vergalhões CA-50 ou CA-60 na face inferior da viga, resistindo ao momento fletor positivo.

### Armadura Longitudinal Negativa
Vergalhões na face superior, sobre os apoios. Em vigas contínuas, estende-se além do apoio pelo comprimento calculado.

### Armadura de Montagem (construtiva)
Vergalhões que mantêm a geometria da gaiola. Diâmetro mínimo: 10 mm (NBR 6118, item 17.3.5.2.1).

### Estribos (armadura transversal)
Alças fechadas de CA-60 ou CA-50 que resistem ao esforço cortante e à torção.

## Taxa de Armadura (NBR 6118, item 17.3.5)

| Limite | Valor |
|--------|-------|
| Taxa mínima (ρs,min) | 0,15% de bw × d |
| Taxa máxima (ρs,max) | 4% de bw × d |

*bw = largura da alma; d = altura útil (total menos cobrimento e raio do estribo)*

## Diâmetros Usuais (CA-50)

| Elemento | Bitolas comuns | Observação |
|----------|---------------|------------|
| Viga residencial (vão ≤ 5 m) | 10, 12,5 mm | Armadura principal |
| Viga residencial (vão 5–8 m) | 12,5, 16 mm | Armadura principal |
| Viga de grande porte | 16, 20, 25 mm | Definido em projeto |
| Armadura de montagem | 10, 12,5 mm | Mínimo 10 mm por norma |

## Detalhamento dos Estribos

### Diâmetros Mínimos

| Situação | Diâmetro mínimo |
|----------|----------------|
| Vigas em geral | 5 mm (CA-60) ou 6,3 mm (CA-50) |
| Vigas de grande porte | 8 ou 10 mm |

### Espaçamento Máximo (NBR 6118, item 18.3.3.2)

| Zona da viga | Espaçamento máximo |
|--------------|-------------------|
| Apoio (zona crítica) com torção | 0,6 × d ≤ 20 cm |
| Apoio sem torção | d/2 ≤ 30 cm |
| Vão (cisalhamento baixo) | 0,8 × d ≤ 30 cm |

## Comprimento Básico de Ancoragem — CA-50

| fck | Barra reta (lb) | Com gancho (lb,ef) |
|-----|----------------|-------------------|
| C20 | 63 × φ | 38 × φ |
| C25 | 54 × φ | 33 × φ |
| C30 | 47 × φ | 28 × φ |
| C35 | 43 × φ | 26 × φ |

*φ = diâmetro da barra em mm. Posição boa de concretagem (barra horizontal com ≤ 30 cm de concreto abaixo).*

**Exemplo:** barra 12,5 mm em C25 → lb = 54 × 12,5 = 675 mm ≈ 70 cm

## Comprimento de Transpasse

lt = α1 × lb,ef

| % de barras emendadas na mesma seção | α1 |
|-------------------------------------|-----|
| ≤ 25% | 1,0 |
| ≤ 50% | 1,4 |
| 100% | 2,0 |

**Boas práticas:** nunca emendar todas as barras na mesma seção. Escalonar as emendas ao longo do comprimento.

## Armadura Negativa — Comprimento além do Apoio

A armadura negativa deve se estender:
- Pelo menos o comprimento de ancoragem (lb,ef) além da face do pilar
- Ou até o ponto onde o momento negativo se anula, mais lb/3

**Regra prática:** armadura negativa costuma se estender 1/4 do vão além da face do apoio.

## Verificações Obrigatórias em Projeto

1. **Momento fletor** positivo e negativo → armaduras longitudinais
2. **Esforço cortante** → estribos
3. **Torção** (quando presente) → estribos adicionais + barras longitudinais de torção
4. **Flecha** → estado limite de serviço
5. **Fissuração** → cobrimento adequado e taxa de armadura controlada

A BR Aço fornece todas as bitolas CA-50 para vigas, com corte e dobra conforme planilha de ferro do projeto estrutural.`
  },
  {
    id: 118,
    slug: "armacao-de-escadas-concreto-armado",
    category: "Projeto Estrutural",
    title: "Armação de Escadas em Concreto Armado: Tipos e Detalhamento",
    metaDescription: "Como armar escadas de concreto armado: tipos estruturais, lances, patamares, armadura principal e de distribuição, ancoragem e junta reentrante.",
    keyword: "armação de escadas concreto armado",
    date: "21 Mai 2026",
    summary: "Detalhamento completo da armação de escadas: tipos estruturais, armadura de lance e patamar, distribuição, ancoragem e junta reentrante.",
    content: `## Tipos Estruturais de Escadas

### 1. Escada em Lance Simples (Laje Inclinada)
Lance como laje inclinada apoiada nos dois extremos — na viga do piso inferior e na viga do patamar ou piso superior. Tipo mais comum em edifícios residenciais.

**Comportamento:** laje inclinada como laje simplesmente apoiada ou com continuidade. Tração principal na face inferior.

### 2. Escada com Patamar Intermediário
Dois lances com patamar entre eles, apoiado nas paredes laterais ou em viga específica.

### 3. Escada em Balanço (Engastada)
Cada degrau engastado na viga ou parede lateral. Estruturalmente mais complexa — requer projeto específico.

### 4. Escada com Viga de Bordo
Lajes dos degraus apoiadas em vigas inclinadas laterais. Comum em escadas externas.

## Geometria dos Degraus

**Fórmula de Blondel:** 2h + b = 63 a 65 cm

| Uso | Altura do espelho (h) | Largura do piso (b) |
|-----|----------------------|---------------------|
| Residencial | 17 a 18 cm | 28 a 29 cm |
| Comercial/público | 16 a 17 cm | 30 a 32 cm |
| Emergência (NBR 9077) | ≤ 18 cm | ≥ 25 cm |

## Cargas de Projeto (NBR 6120:2019)

| Uso | Carga acidental |
|-----|----------------|
| Escadas residenciais | 2,5 kN/m² |
| Escadas de uso público | 5,0 kN/m² |

Peso próprio da escada (concreto + degraus): 4 a 6 kN/m² na projeção horizontal.

## Armação do Lance

### Armadura Principal
Na face inferior da laje inclinada, paralela ao comprimento do lance.

### Armadura de Distribuição
Perpendicular à principal, face inferior. Taxa mínima: 20% da armadura principal, ≥ 0,9 cm²/m.

### Cobrimento Nominal
Ambiente interno (classe I): 25 mm.

### Tabela Orientativa — Lance Residencial (CA-50)

| Vão (m) | Espessura | Armadura principal | Espaçamento |
|---------|-----------|--------------------|-------------|
| 2,5 m | 10 cm | φ 8 | 15 cm |
| 3,0 m | 12 cm | φ 10 | 15 cm |
| 3,5 m | 13 cm | φ 10 | 12,5 cm |
| 4,0 m | 15 cm | φ 12,5 | 15 cm |

*Valores orientativos para cargas residenciais. Confirmar com calculista.*

## Armação do Patamar

Laje horizontal apoiada ou contínua. Para patamares residenciais de até 1,5 m de vão: φ 8 a 10 mm CA-50, espaçamento 15 cm.

## Ancoragem nos Apoios

- **Apoio inferior (viga de piso):** ancoragem com lb,ef ≥ 20 × φ ou gancho
- **Apoio superior:** mesmo critério

## Junta Lance-Patamar — Detalhe Crítico

A ligação entre a laje inclinada e a laje horizontal cria canto reentrante. É obrigatório dispor **armadura diagonal no vértice interno** para evitar fissuração diagonal.

**Detalhe:**
- 2 a 3 barras diagonais de φ 10 ou 12,5 mm a 45°
- Comprimento de cada barra: 50 cm de cada lado do vértice

## Verificações Finais

1. Cobrimento nominal em todas as faces expostas
2. Armadura principal no sentido do vão
3. Distribuição transversal ≥ 20% da principal
4. Ancoragem nos apoios ≥ lb,ef
5. Barras diagonais nas juntas reentrantes
6. Diâmetro máximo das barras ≤ h/8`
  },
  {
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
- Não deve ser executada sem projeto estrutural específico`
  },
  {
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
5. Aterro compactado com rolo pesado diretamente contra o fuste → impacto dinâmico não previsto`
  }"""

TARGET_FILE = r'C:\Users\ismae\.claude\br-aco-builder\src\data\blogPosts.ts'

with open(TARGET_FILE, 'r', encoding='utf-8') as f:
    content = f.read()

insert_pos = content.rfind('  }\n];\n\nexport const categories')
if insert_pos == -1:
    print("ERROR: insert position not found")
    exit(1)

new_content = content[:insert_pos] + NEW_POSTS + '\n' + content[insert_pos + 4:]  # skip '  }' at start

with open(TARGET_FILE, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Done! Posts 116-120 added.")
