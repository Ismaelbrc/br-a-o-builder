// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 89,
  slug: "armadura-montagem-vs-armadura-principal",
  category: "Dicas Técnicas",
  title: "Armadura de Montagem vs Armadura Principal: Diferenças e Função Estrutural",
  metaDescription: "Entenda a diferença entre armadura de montagem (ou construtiva) e armadura principal de cálculo em vigas, pilares e lajes conforme a NBR 6118.",
  keyword: "armadura de montagem vs armadura principal",
  date: "25 Mar 2026",
  summary: "Diferença entre armadura de montagem e armadura principal em vigas, pilares e lajes — função estrutural, dimensionamento mínimo e aplicação prática.",
  content: `## Armadura Principal (de Cálculo)

A armadura principal é a armadura dimensionada para resistir aos esforços internos da estrutura: momento fletor, força normal e esforço cortante. Ela é calculada pelo engenheiro estrutural com base nas solicitações do modelo de cálculo. Do ponto de vista prático, é assim que a BR Aço orienta obras em Goiânia e no entorno do DF.

Em vigas, a armadura principal de flexão fica na face tracionada (inferior no meio do vão, superior nos apoios). Em pilares, as barras longitudinais resistem à compressão e ao momento fletor.

## Armadura de Montagem (Construtiva)

A armadura de montagem — também chamada armadura construtiva, armadura de distribuição ou armadura mínima — não é dimensionada por cálculo: ela serve para:

1. **Fixar e manter o posicionamento** da armadura principal durante a montagem e a concretagem
2. **Distribuir esforços de retração** e temperatura uniformemente no elemento
3. **Complementar os estribos** na formação da gaiola de vigas e pilares
4. **Controlar fissuração** em regiões de baixos esforços

## Na Prática: Como Distinguir no Projeto

Em vigas, o projeto indica tipicamente:
- **2φ10 (A')**: duas barras de 10 mm no **topo** do vão → armadura de montagem (região comprimida)
- **3φ16 (A)**: três barras de 16 mm no **fundo** → armadura principal de tração

Em lajes, a norma exige armadura mínima de distribuição perpendicular à armadura principal:
> Amin = 0,0015 × b × d (para CA-50 em lajes com vão dominante numa direção)

## Armadura Mínima por Elemento (NBR 6118)

| Elemento | Armadura mínima |
|---|---|
| Viga (seção retangular) | 0,15% × bw × d (CA-50) |
| Pilar | 0,4% × Ac (seção de concreto) |
| Laje (armadura principal) | 0,15% × bw × d |
| Laje (armadura de distribuição) | 20% da principal, mínimo 0,0015 × b × h |

Esses mínimos existem mesmo quando o cálculo indicaria menos aço, para garantir ductilidade e controle de fissuração.

## Armadura de Montagem no Pilar

Em pilares, costuma-se usar barras de φ6.3 ou φ8.0 mm como armadura de montagem intermediária (entre barras de canto) para:
- Manter os estribos no espaçamento correto durante a montagem
- Reduzir o espaçamento livre entre barras longitudinais (que não deve exceder 20 cm conforme NBR 6118)
- Facilitar o adensamento do concreto (vibrador precisa de espaço para entrar)

## Erro Frequente em Campo

Um erro comum é confundir as barras superiores de montagem de vigas com a armadura negativa (de apoio). As barras de montagem têm diâmetro e comprimento reduzidos e **não** são contínuas sobre os apoios. Se o projeto indicar "2φ10 montagem" no topo de uma viga, colocar essas barras em toda a extensão não substitui a armadura negativa sobre o pilar — que é calculada separadamente.`,
};

export default post;
