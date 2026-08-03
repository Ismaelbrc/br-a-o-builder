// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 98,
  slug: "sapata-isolada-corrida-associada",
  category: "Fundação",
  title: "Sapata Isolada, Corrida e Associada: Diferenças, Usos e Dimensionamento Básico",
  metaDescription: "Diferenças entre sapata isolada, corrida e associada: quando usar cada tipo e como dimensionar a área de base.",
  keyword: "sapata isolada corrida associada fundação",
  date: "04 Abr 2026",
  summary: "Diferenças entre sapata isolada, corrida e associada — quando usar cada tipo e como dimensionar a área de base da fundação.",
  content: `## O que é uma Sapata?

Sapata é um elemento de fundação rasa que amplia a área de contato da estrutura com o solo, reduzindo a pressão transmitida ao terreno a um valor que o solo suporta sem recalque excessivo.

É feita em concreto armado e trabalha predominantemente à flexão — ao contrário do bloco de fundação, que trabalha à compressão.

## Sapata Isolada

Serve um único pilar. É a solução mais simples e mais utilizada em edificações convencionais quando os pilares estão bem espaçados.

**Geometria:** quadrada, retangular ou trapezoidal em planta; a altura cresce do bordo para o centro (forma escalonada ou piramidal). A espessura mínima da sapata é de 20 cm (NBR 6118).

**Dimensionamento da área:**

> A = N / σadm

Onde:
- A = área da base (m²)
- N = carga do pilar (kN)
- σadm = tensão admissível do solo (kPa = kN/m²)

Exemplo: pilar com N = 500 kN em solo com σadm = 150 kPa → A = 500/150 = 3,33 m² → adotar sapata de 1,85 × 1,85 m (≈ 3,42 m²)

**Armação:** malha bidirecional na face inferior, com cobrimento mínimo de 40–50 mm (classe de agressividade II–III para fundação).

## Sapata Corrida

Serve uma parede ou fileira de pilares alinhados. A largura é dimensionada pela pressão admissível e o comprimento acompanha o elemento.

**Quando usar:**
- Alvenaria estrutural (carga distribuída linear)
- Muros de contenção com base de fundação
- Fundações de paredes de subsolo

**Dimensionamento:** largura = carga linear (kN/m) ÷ σadm (kPa)

## Sapata Associada

Liga dois ou mais pilares numa única sapata quando os pilares estão muito próximos (sapatas individuais se sobreporiam) ou quando um pilar está na divisa do terreno e não pode ser excêntrico.

**Quando usar:**
- Pilar de divisa: a sapata isolada seria excêntrica, gerando momento de tombamento no solo
- Pilares próximos: distância entre eixos < 2× largura da sapata

**Particularidade:** a sapata associada desenvolve um diagrama de pressão não uniforme no solo, exigindo cálculo cuidadoso da armação para evitar fissuração excessiva.

## Profundidade Mínima de Fundação

A NBR 6122 exige que sapatas estejam:
- A pelo menos 0,50 m abaixo da superfície
- Abaixo da camada de solo vegetal (húmus) e aterros
- No mínimo a 0,50 m abaixo do nível d'água (ou com proteção especial)

Em Goiás, a camada de solo vegetal (latossolo vermelho) costuma ter 0,5 a 1,2 m — portanto a profundidade mínima prática é 1,0 a 1,5 m.

## Sapata vs Bloco: Qual a Diferença?

| Sapata | Bloco |
|---|---|
| Concreto armado | Concreto simples ou ciclópico |
| Trabalha à flexão | Trabalha à compressão |
| Altura menor, mais econômica em aço | Altura maior, mais econômica em concreto |
| Usada quando N é grande | Usada quando N é pequeno e σadm é alta |`,
};

export default post;
