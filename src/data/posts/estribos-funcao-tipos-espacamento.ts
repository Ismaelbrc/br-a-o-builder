// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 101,
  slug: "estribos-funcao-tipos-espacamento",
  category: "Normas ABNT",
  title: "Estribos em Concreto Armado: Função, Tipos e Espaçamento Conforme NBR 6118",
  metaDescription: "Função dos estribos em viga e pilar: tipos (simples, duplo, múltiplo), cálculo de espaçamento pela NBR 6118.",
  keyword: "estribos concreto armado espaçamento NBR 6118",
  date: "08 Abr 2026",
  summary: "Função dos estribos, tipos simples/duplo/múltiplo, cálculo de espaçamento e detalhamento conforme NBR 6118 para vigas e pilares.",
  content: `## O que São Estribos?

Estribos são barras de aço dobradas em forma de laço (retangular, circular ou poligonal) que envolvem as barras longitudinais dos elementos estruturais. Eles são a armadura transversal dos pilares e vigas.

## Funções dos Estribos

### Em Vigas
1. **Resistência ao cisalhamento (força cortante)**: principal função. O concreto sozinho não suporta esforço cortante acima de um determinado limiar — os estribos complementam essa resistência
2. **Confinamento das barras longitudinais**: impede o flambamento lateral das barras comprimidas
3. **Manutenção da geometria**: mantém a gaiola de armação no posicionamento correto durante a montagem e a concretagem

### Em Pilares
1. **Confinamento do concreto**: aumenta a ductilidade e a resistência do concreto comprimido (efeito de triaxialidade)
2. **Prevenção de flambagem das barras longitudinais**
3. **Resistência ao cisalhamento** em pilares sujeitos a forças horizontais (vento, sismo)

## Tipos de Estribo

### Simples (1 ramo)
Estribo com dois ramos verticais e dois horizontais, formando um retângulo. Adequado para seções menores com poucas barras.

### Duplo (2 ramos)
Dois estribos simples sobrepostos, ou um estribo + garfo central. Usado quando o número de barras longitudinais ou a largura da seção exigem suporte intermediário.

### Múltiplo
3 ou mais ramos. Para seções largas ou com muitas barras.

A regra da NBR 6118 é que **nenhuma barra longitudinal fique sem suporte de um canto de estribo ou de um grampo** a menos de 15 cm de um suporte.

## Cálculo do Espaçamento em Vigas

A NBR 6118 define o espaçamento máximo de estribos em vigas como:

- **Em zona com cortante elevado (próximo ao apoio)**: espaçamento ≤ d/2 (d = altura útil da viga)
- **Em zona de cortante baixo (meio do vão)**: espaçamento ≤ d

E em nenhum caso: **> 30 cm** (valor absoluto máximo)

**Região de confinamento em vigas (zona nodal):** estribos adicionais a cada d/4, no comprimento ≥ 2d a partir da face do pilar.

## Exemplo Prático

Viga 14×50 cm (h=50, d=44 cm), CA-50, fck=25 MPa:

- Espaçamento junto ao apoio: máximo d/2 = 22 cm → adotar **c/15**
- Espaçamento no vão: máximo d = 44 cm → adotar **c/20** ou **c/25**

Para pilares com φl ≤ 12,5 mm e seção ≤ 20 cm: usar φt = 5,0 ou 6,3 mm para estribos.

## Gancho dos Estribos

Todo estribo precisa de gancho nas extremidades:
- Ganchos de **135°** com trecho reto ≥ 10φt (recomendado para pilares)
- Ganchos de **90°** com trecho reto ≥ 12φt (aceito para vigas)

Os ganchos dos estribos consecutivos devem ser alternados em lados opostos do elemento.`,
};

export default post;
