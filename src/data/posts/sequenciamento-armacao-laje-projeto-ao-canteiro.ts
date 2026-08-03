// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type { BlogPost } from '../blogPosts';

const post: BlogPost = {
  id: 161,
  slug: "sequenciamento-armacao-laje-projeto-ao-canteiro",
  category: "Gestão de Obra",
  title: "Sequenciamento de Armação de Laje: Do Projeto Estrutural ao Primeiro Vergalhão Montado",
  metaDescription: "Sequenciamento correto de armação de laje: ordem de montagem, pontos de inspeção e como o aço pré-cortado ajuda.",
  keyword: "sequenciamento armação laje",
  date: "28 Mai 2026",
  summary: "Guia prático completo de sequenciamento de armação de laje: etapas da preparação ao fechamento da armadura, verificações normativas em cada fase e vantagens do aço pré-cortado.",
  content: `## A Armação de Laje em 7 Etapas — e Onde Cada uma Pode Falhar

A armação de laje é frequentemente vista como uma tarefa simples. Na prática, é uma operação com 7 etapas distintas, cada uma com pontos de falha que podem comprometer a integridade estrutural ou criar retrabalho caro.

## Etapa 1: Preparação da Área e Verificação do Projeto

- [ ] Projeto estrutural na versão final (não usar esboço ou versão preliminar)
- [ ] Planilha de ferro impressa ou em dispositivo digital no canteiro
- [ ] Cotas dos painéis de laje verificadas no local
- [ ] Altura da laje marcada nos pilares e vigas de borda
- [ ] Fôrma verificada: nivelamento, estanqueidade, escoramento calculado

## Etapa 2: Recebimento e Separação do Aço

**Com barra reta (sem CDA):** verificar diâmetros, separar por diâmetro, identificar cortes necessários para cada posição da planilha — 1 a 2 dias de trabalho para 500 m².

**Com aço pré-cortado e dobrado:** conferir romaneio de entrega vs planilha — 15 a 30 minutos. Cada pacote vem identificado por posição.

## Etapa 3: Posicionamento dos Espaçadores (Etapa Mais Negligenciada)

- [ ] Espaçadores do tipo correto para o cobrimento nominal (cobrimento mín. + 10 mm)
- [ ] Mínimo de 4 espaçadores/m² nas lajes (espaçamento ≤ 50 cm)
- [ ] Espaçadores nas bordas para cobrimento lateral

## Etapa 4: Armadura Positiva (Inferior)

Ordem de montagem para laje bidirecional:
1. Barras na direção de maior vão (Lx) — ficam mais baixo, maior braço de alavanca
2. Barras na direção de menor vão (Ly) — sobre as primeiras

**Espaçamentos máximos (NBR 6118 item 17.3.7):**
- Armadura principal: ≤ 2h ou 20 cm (o menor)
- Distribuição: ≤ 3h ou 30 cm (o menor)

## Etapa 5: Armadura Negativa (Superior)

A armadura negativa sobre os apoios é colocada sobre cadeirinhas metálicas. Altura da cadeirinha = h_laje − cobrimento inferior − φ_inf − φ_sup − cobrimento superior. Cadeirinhas mal calculadas resultam em armadura negativa sem cobrimento.

- [ ] Cadeirinhas na quantidade e altura corretas
- [ ] Comprimento de ancoragem no vão verificado
- [ ] Posição das emendas por traspasse fora do ponto de momento máximo

## Etapa 6: Instalações e Revisão Final

- [ ] Eletrodutos com diâmetro ≤ h_laje/3 (NBR 6118 item 13.2.4.1)
- [ ] Cruzamento de tubulações com reforço de armadura
- [ ] Revisão geral: espaçadores presentes, nivelamento verificado

## Etapa 7: Liberação para Concretagem

Documentar a inspeção com fotos e lista de verificação assinada pelo responsável técnico.

## O Impacto do Aço Pré-Cortado em Cada Etapa

| Etapa | Com barra reta | Com CDA |
|-------|---------------|---------|
| Etapa 2 | 1–2 dias de corte + 20–30% desperdício | 30 min de conferência + 0% desperdício |
| Etapa 4 | Armador mede e posiciona — variação ±3 cm | Barra no comprimento exato — variação ±3 mm |
| Etapa 5 | Emendas improvisadas por barra curta | Comprimentos calculados chegam corretos |
| Geral | 3–5 armadores + encarregado | 2–3 armadores para montagem pura |

O corte e dobra industrial não elimina a necessidade de armadores experientes — mas elimina as tarefas de corte, dobra e medição que consomem 40%–60% do tempo de armação. O armador passa a fazer o que tem valor: montar, posicionar e garantir o projeto.

Para obras em Goiânia e Brasília com prazo crítico, a BR Aço entrega o aço identificado por posição, com romaneio conferível e certificado de qualidade da corrida — pronto para montar no mesmo dia de chegada ao canteiro.`,
};

export default post;
