// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 31,
  slug: "espacamento-estribos-pilar-viga-tabela-nbr-6118",
  category: "Dicas Técnicas",
  title: "Espaçamento de Estribos em Pilares e Vigas: Tabela NBR 6118",
  metaDescription: "Tabela completa de espaçamento máximo de estribos em pilares e vigas conforme a NBR 6118:2026. Como calcular, erros comuns e o que muda na nova norma.",
  keyword: "espaçamento estribos pilar viga nbr 6118",
  date: "17 Mai 2026",
  summary: "Tabela de espaçamento máximo de estribos em pilares e vigas conforme NBR 6118, com exemplos práticos de cálculo e os principais erros de armação em obra.",
  content: `## Resposta Rápida

O espaçamento máximo de estribos conforme a **NBR 6118** é:
- **Pilares:** menor valor entre *d/2*, *20 × φ* (diâmetro da barra longitudinal) e **20 cm**
- **Vigas:** depende da solicitação de cisalhamento — em geral entre **10 cm e 30 cm** para a região crítica próxima ao apoio. Fornecido pela BR Aço em Goiânia, esse processo segue a mesma lógica em qualquer obra do estado de Goiás.

Em obras residenciais comuns (casas e sobrados), o espaçamento típico de estribos em pilares é de **10 a 15 cm** na região de emenda e **15 a 20 cm** no vão central.

## O que são Estribos e por que o Espaçamento Importa

Os estribos são as barras transversais que envolvem a armadura longitudinal de pilares e vigas. Eles têm três funções principais:

1. **Resistir ao cisalhamento** (esforço cortante) nas vigas
2. **Evitar o flambagem das barras longitudinais** nos pilares
3. **Confinar o núcleo de concreto**, aumentando a ductilidade da estrutura

Um espaçamento excessivo entre estribos compromete as três funções e pode levar ao colapso frágil do elemento — sem aviso prévio. Por isso, a NBR 6118 define valores máximos que não podem ser ultrapassados.

## Fórmula do Espaçamento Máximo de Estribos em Pilares

Conforme a NBR 6118:2023/2026, o espaçamento máximo de estribos em pilares (s_máx) deve satisfazer:

**s_máx = min (d_mín / 2; 20 × φ_l; 20 cm)**

Onde:
- **d_mín** = menor dimensão da seção transversal do pilar (cm)
- **φ_l** = diâmetro da barra longitudinal (cm)
- **20 cm** = limite absoluto

### Exemplo Prático — Pilar 14×14 cm com barras ø12,5 mm

- d_mín = 14 cm → d_mín/2 = **7 cm**
- φ_l = 1,25 cm → 20 × 1,25 = **25 cm**
- Limite absoluto = **20 cm**

**s_máx = min (7; 25; 20) = 7 cm**

Para esse pilar típico de obra residencial, o espaçamento máximo de estribos é de **7 cm**.

## Tabela de Espaçamento Máximo em Pilares (Uso Prático)

| Seção do pilar | Barra longitudinal | s_máx calculado |
|----------------|-------------------|-----------------|
| 14 × 14 cm | ø12,5 mm | 7 cm |
| 14 × 19 cm | ø12,5 mm | 7 cm |
| 19 × 19 cm | ø12,5 mm | 9,5 cm |
| 19 × 19 cm | ø16,0 mm | 9,5 cm |
| 20 × 30 cm | ø16,0 mm | 10 cm |
| 25 × 50 cm | ø20,0 mm | 12,5 cm |
| 30 × 60 cm | ø20,0 mm | 15 cm |
| 40 × 80 cm | ø25,0 mm | 20 cm |

> **Atenção:** na região de emendas de barras (junta de transpasse), a NBR 6118 exige que o espaçamento seja reduzido a **s_máx / 2** (metade do valor calculado acima) ao longo de um comprimento mínimo de 1,5 × comprimento de emenda.

## Fórmula do Espaçamento de Estribos em Vigas

Para vigas, o cálculo é mais complexo e depende da intensidade do esforço cortante (V_sd). Em termos práticos:

| Zona da viga | Espaçamento típico |
|-------------|-------------------|
| Região crítica (próxima ao apoio, ≤ 2d) | 10 – 15 cm |
| Região intermediária | 15 – 25 cm |
| Região central (baixo cisalhamento) | 25 – 30 cm |
| Limite máximo absoluto (NBR 6118) | 30 cm ou 0,6d |

O espaçamento mínimo de estribos em vigas é de **5 cm** (para permitir a passagem do vibrador de concreto).

## Diâmetro Mínimo do Estribo

A NBR 6118 exige que os estribos tenham diâmetro mínimo de **5 mm**. Na prática, os diâmetros mais usados são:

| Aplicação | Diâmetro recomendado |
|-----------|---------------------|
| Pilares residenciais | ø6,3 mm (CA-50 ou CA-60) |
| Vigas residenciais | ø6,3 mm (CA-50) |
| Pilares comerciais e industriais | ø8 mm (CA-50) |
| Vigas de grande porte | ø8 mm a ø10 mm (CA-50) |

## Erros Mais Comuns no Espaçamento de Estribos

### Erro 1: Usar o mesmo espaçamento em toda a extensão da viga
O armador coloca 15 cm do apoio até o meio da viga. O correto é reduzir o espaçamento na região próxima ao apoio (≤ 2d) onde o cisalhamento é máximo.

### Erro 2: Não reduzir o espaçamento na zona de emenda
Nas emendas de barras longitudinais, o espaçamento deve ser **a metade** do calculado. Esse detalhe é frequentemente omitido em obras de menor porte.

### Erro 3: Usar estribos abertos ("garfos")
Estribos abertos não fecham o núcleo de concreto e não confinam efetivamente as barras longitudinais. A NBR 6118 exige **ganchos com ângulo mínimo de 135°** nas pontas dos estribos.

### Erro 4: Calcular o espaçamento pela dimensão errada do pilar
Em pilares retangulares, deve-se usar a **menor dimensão** (d_mín). Usar a maior dimensão leva a espaçamentos excessivos.

## O Impacto do Espaçamento no Aço Necessário

A diferença de espaçamento impacta diretamente o consumo de aço. Para um pilar de 2,8 m de altura:

| Espaçamento de estribo | Quantidade de estribos | Aço em estribos (ø6,3 mm) |
|------------------------|------------------------|---------------------------|
| 7 cm | 40 estribos | 5,2 kg |
| 10 cm | 28 estribos | 3,6 kg |
| 15 cm | 19 estribos | 2,5 kg |

A diferença entre 7 cm e 15 cm é de **2,7 kg por pilar**. Em uma obra com 12 pilares, isso representa **32 kg de aço** a mais no caso correto vs. o subdimensionado — o que mostra que respeitar a norma não é apenas questão de segurança, mas também de precisão no orçamento.

## Corte e Dobra de Estribos: Como a BR Aço Ajuda

Os estribos são a peça mais trabalhosa de produzir manualmente — cada um exige **4 dobras precisas** e um fechamento com gancho de 135°. Com o serviço de corte e dobra da BR Aço:

- Estribos produzidos com **dobradeira industrial CNC** — precisão de ±1 mm
- Ganchos de 135° garantidos em todos os cantos
- Cada tamanho e diâmetro entregue **etiquetado por elemento** (pilar, viga)
- Elimina o tempo de dobra manual no canteiro — reduz em até 60% o tempo de armação

Envie o detalhamento estrutural pelo WhatsApp e receba o orçamento completo de estribos + barras longitudinais em até 24h.`,
};

export default post;
