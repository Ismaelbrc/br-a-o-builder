// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 87,
  slug: "ganchos-dobramentos-armaduras-nbr-6118",
  category: "Normas ABNT",
  title: "Ganchos e Dobramentos em Armaduras: O que Diz a NBR 6118",
  metaDescription: "Tipos de gancho em barra de aço, comprimento mínimo e diâmetro de dobramento exigidos pela NBR 6118 para armadura.",
  keyword: "ganchos dobramentos armaduras NBR 6118",
  date: "22 Mar 2026",
  summary: "Tipos de ganchos em barras de aço, comprimentos mínimos, diâmetros de dobramento e o que exige a NBR 6118 para estribos e barras longitudinais.",
  content: `## Por que Ganchos São Necessários?

Ganchos são dobras nas extremidades das barras de aço que aumentam o comprimento de ancoragem dentro do concreto sem aumentar o comprimento físico da barra. Eles são necessários quando o comprimento disponível de ancoragem reta é insuficiente — situação comum em apoios extremos de vigas, extremidades de pilares e estribos. Esse padrão técnico é seguido pela BR Aço em fornecimentos por toda a Grande Goiânia e o DF.

## Tipos de Gancho (NBR 6118)

### Gancho de 180° (semicircular)
A barra é dobrada em semicírculo e tem um trecho reto adicional. O mais eficiente em termos de ancoragem, mas ocupa mais espaço.

- Ângulo de dobramento: 180°
- Trecho reto após o gancho: ≥ 4φ (mínimo 6 cm)
- Usado em: estribos, ganchos de ancoragem em apoios extremos

### Gancho de 135°
Dobramento a 135° com trecho reto de ≥ 10φ após o gancho.

- Usado em: estribos de pilares (sismo ou confinamento), especialmente onde a extremidade do estribo fica no interior da seção
- Mais difícil de executar que o de 90° mas mais eficiente

### Gancho de 90°
O mais comum em campo. Barra dobrada a 90° com trecho reto de ≥ 12φ.

- Menos eficiente que o de 180° para ancoragem longitudinal
- Facilmente confeccionado em dobradeira manual

## Diâmetro Mínimo de Dobramento (Mandril)

A NBR 6118 Tabela 9.1 define o diâmetro interno mínimo do dobramento (diâmetro do mandril da dobradeira):

| Diâmetro da barra | Barras retas (dobrada 1x) | Estribos |
|---|---|---|
| φ ≤ 20 mm | 4φ | 3φ (CA-50), 2φ (CA-60) |
| φ > 20 mm | 7φ | não aplicável |

> Dobrar barras com mandril menor que o mínimo provoca microfissuras no aço e reduz a resistência da barra.

## Comprimento de Ancoragem com Gancho

O gancho de 180° reduz o comprimento de ancoragem necessário. A NBR 6118 permite:

- Gancho de 180° com trecho reto ≥ 4φ: ld reduzido em 30%
- Gancho de 90° com trecho reto ≥ 12φ: ld reduzido em 20%

Exemplo: se ld = 60 cm sem gancho, com gancho de 180° → ld efetivo = 42 cm de comprimento reto + gancho.

## Estribos: Ganchos Obrigatórios

Todo estribo deve ter gancho nas duas extremidades. A NBR 6118 aceita:

- Dois ganchos de 90° em lados opostos (mais comum)
- Dois ganchos de 135° (recomendado em zonas sísmicas ou confinamento)

Os ganchos dos estribos devem ficar alternados (não todos do mesmo lado) para distribuir melhor a ancoragem no interior do concreto.

## Dobramento a Frio vs a Quente

O CA-50 é dobrado **a frio** na obra, com dobradeira mecânica ou manual. Nunca aplique calor para dobrar barras CA-50 — o aquecimento altera a microestrutura do aço e reduz a resistência de forma imprevisível. Barras emendadas por solda exigem aço soldável especificado e procedimento qualificado.`,
};

export default post;
