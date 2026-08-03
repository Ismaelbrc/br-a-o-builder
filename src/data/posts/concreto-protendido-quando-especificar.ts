// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
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
| Custo por m² (vão longo) | Menor | Maior |`,
};

export default post;
