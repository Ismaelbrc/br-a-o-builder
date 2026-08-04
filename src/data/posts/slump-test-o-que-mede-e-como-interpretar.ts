// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 95,
  slug: "slump-test-o-que-mede-e-como-interpretar",
  category: "Concreto",
  title: "Slump Test: O que Mede, Como Fazer e Como Interpretar o Resultado",
  metaDescription: "O que é o slump test, o que ele mede, como realizá-lo conforme a NBR NM 67 e o que fazer se o concreto sair fora do padrão.",
  keyword: "slump test concreto abatimento",
  date: "01 Abr 2026",
  summary: "O que é o slump test, o que ele mede, como realizar corretamente conforme NBR NM 67 e o que fazer quando o concreto está fora do especificado.",
  content: `## O que é o Slump Test?

O slump test (ensaio de abatimento do tronco de cone) é o método mais simples e rápido para avaliar a consistência (trabalhabilidade) do concreto fresco. Ele indica a fluidez do concreto — ou seja, quão fácil é de lançar, adulterar e vibrar. É a mesma régua usada pela BR Aço em obras espalhadas por Goiânia, Goiás e o Distrito Federal.

O ensaio é regulamentado pela **NBR NM 67:1998** (método de ensaio) e pela **ASTM C143** (norma americana equivalente).

## Equipamento Necessário

- Cone de Abrams: molde troncocônico de chapa metálica (base inferior Ø20 cm, base superior Ø10 cm, altura 30 cm)
- Haste de socamento: barra de aço φ16 mm, ponta esférica, 60 cm de comprimento
- Placa metálica de base (≥ 50 × 50 cm)
- Régua metálica ou trena

## Como Realizar o Ensaio (NBR NM 67)

1. Umedeça o cone e a placa de base
2. Fixe o cone pisando nas abas da base e segure as alças laterais
3. Preencha em 3 camadas iguais (~10 cm cada), socando cada camada **25 vezes** com a haste
4. Após a terceira camada, raspe o excesso rente à borda superior
5. Retire o cone verticalmente e com movimento uniforme em ≈ 5 segundos
6. Meça a diferença de altura entre o topo do cone e o ponto mais alto do concreto abatido

Esse valor em cm ou mm é o **abatimento** (slump).

## Valores de Referência

| Consistência | Slump | Aplicação |
|---|---|---|
| Seca | 0 a 2 cm | Concreto compactado a soco (pré-moldados) |
| Plástica | 4 a 7 cm | Pilares e vigas com vibrador |
| Fluida | 8 a 12 cm | Peças densamente armadas, bombeamento |
| Muito fluida | 14 a 22 cm | Concreto autoadensável (CAA) |

O memorial descritivo especifica o slump aceito para cada elemento. Valores típicos:
- **Pilares e vigas** convencionais: 8 ± 2 cm
- **Lajes** com bomba: 10 ± 2 cm
- **CAA**: medido por espalhamento (flow table), não por slump

## O que Fazer Quando o Slump Está Fora do Especificado?

**Slump abaixo do mínimo (concreto seco demais):**
- Risco de adensamento insuficiente, ninhos de concreto, concretagem deficiente
- **Não adicione água ao caminhão sem autorização** — isso altera a relação a/c e reduz a resistência
- Consulte o projetista; a solução correta é adicionar superplastificante, não água

**Slump acima do máximo (concreto fluido demais):**
- Risco de segregação e perda de resistência
- Se a água foi adicionada em excesso no canteiro, o caminhão deve retornar
- Se o concreto chegou dentro do slump e o responsável da obra adicionou água, há responsabilidade civil pelo serviço

## Slump vs Resistência

Maior slump ≠ menor resistência, necessariamente — desde que a fluidez seja obtida com superplastificante e não com excesso de água. Um concreto C30 com slump 16 cm (usando plastificante) pode ter a mesma resistência que um C30 com slump 8 cm. O que reduz resistência é a relação a/c elevada — não o slump em si.`,
};

export default post;
