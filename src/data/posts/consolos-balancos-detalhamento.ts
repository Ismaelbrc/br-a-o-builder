// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 123,
  slug: "consolos-balancos-detalhamento",
  category: "Projeto Estrutural",
  title: "Consolos e Balanços em Concreto Armado: Detalhamento e Armação",
  metaDescription: "Detalhamento técnico de consolos e lajes em balanço: comportamento estrutural, armação principal e de suspensão, verificações de cisalhamento e ancoragem.",
  keyword: "consolo balanço concreto armado",
  date: "21 Mai 2026",
  summary: "Consolos e lajes em balanço: comportamento estrutural, armação principal, armadura de suspensão, cisalhamento e ancoragem.",
  content: `## O que é um Consolo?

Consolo (ou console) é um elemento em balanço engastado em um pilar ou parede, com comprimento pequeno em relação à altura. Recebe cargas verticais (geralmente de vigas pré-moldadas, guarda-corpos ou coberturas metálicas). Esse cuidado técnico faz parte do padrão de atendimento da BR Aço em Goiânia e no Distrito Federal.

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
4. **Sobrecarga no final do balanço:** grades pesadas, mureta alta → recalcular`,
};

export default post;
