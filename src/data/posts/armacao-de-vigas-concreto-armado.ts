// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
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

A BR Aço fornece todas as bitolas CA-50 para vigas, com corte e dobra conforme planilha de ferro do projeto estrutural.`,
};

export default post;
