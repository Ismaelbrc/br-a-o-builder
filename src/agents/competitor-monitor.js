// ================================================
// COMPETITOR MONITOR AGENT — BR Aço
// ================================================
// Padrão: AutoGen "Web Search Agent" + CrewAI
// "Marketing Strategy Generator"
// Monitora concorrentes: preços, keywords, conteúdo.
// Execute como script ou integre em cron job.
//
// Uso: node src/agents/competitor-monitor.js
// ================================================

import Anthropic from '@anthropic-ai/sdk'
import { writeFileSync, readFileSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const cliente = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

// ── Concorrentes a monitorar ──────────────────────
const CONCORRENTES = [
    { nome: 'Corte e Dobra Goiânia (genérico)',       keywords: ['corte e dobra vergalhão goiânia', 'vergalhão goiânia preço'] },
    { nome: 'Distribuidora de Aço Goiânia (genérico)', keywords: ['distribuidora aço goiânia', 'aço vergalhão goiás'] },
    { nome: 'Coluna pronta Goiânia (genérico)',         keywords: ['coluna pronta goiânia', 'gaiola aço goiânia'] },
    { nome: 'Vergalhão Brasília (genérico)',            keywords: ['vergalhão brasília df', 'corte dobra df brasília'] },
]

// ── Dados BR Aço (para comparação) ───────────────
const BR_ACO_PERFIL = `
Empresa: BR Aço (Grupo Braco)
Serviços: Corte e dobra de vergalhão, coluna pronta, tela soldada
Diferenciais: prazo 24-48h, entrega em obra, CA-25/CA-50/CA-60, atende Goiás e DF
Site: grupobraco.com.br
Landing pages: /corte-e-dobra, /vergalhao, /coluna — com ~1700 páginas localizadas
`

// ================================================
// Agente de análise competitiva via IA
// ================================================
async function analisarConcorrencia(dadosColetados) {
    const resposta = await cliente.messages.create({
        model: process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-6',
        max_tokens: 2000,
        system: [{
            type: 'text',
            text: `Você é um analista de inteligência competitiva especializado no mercado de aço e construção civil no Brasil.
Analise os dados de concorrência e gere insights acionáveis para a BR Aço.
Retorne JSON estruturado conforme solicitado.`,
            cache_control: { type: 'ephemeral' }
        }],
        messages: [{
            role: 'user',
            content: `Perfil BR Aço:\n${BR_ACO_PERFIL}\n\nDados de mercado coletados:\n${dadosColetados}\n\nGere um relatório JSON com:
{
  "dataAnalise": "${new Date().toISOString()}",
  "resumoExecutivo": "<2-3 frases sobre o cenário competitivo atual>",
  "oportunidades": [
    { "titulo": "...", "descricao": "...", "prioridade": "alta|media|baixa", "acao": "..." }
  ],
  "ameacas": [
    { "titulo": "...", "descricao": "...", "mitigacao": "..." }
  ],
  "keywordsOportunidade": [
    { "keyword": "...", "volume": "alto|medio|baixo", "competicao": "alta|media|baixa", "sugestaoConteudo": "..." }
  ],
  "sugestoesConteudo": [
    { "titulo": "...", "tipo": "landing_page|blog|whatsapp", "localidade": "...", "palavrasChave": [...] }
  ],
  "proximosPassos": ["<ação 1>", "<ação 2>", "<ação 3>"]
}`
        }]
    })

    const texto = resposta.content[0].text.trim()
        .replace(/```json\n?/g, '').replace(/```\n?/g, '')

    return JSON.parse(texto)
}

// ================================================
// Coleta dados de mercado (simulado — pode integrar
// com web scraping real via Bright Data/Apify)
// ================================================
async function coletarDadosMercado() {
    // Monta briefing de mercado com dados conhecidos
    // Em produção: substituir por chamadas reais a APIs de scraping
    return `
Keywords monitoradas e estimativas de volume de busca (dados estimados):
- "corte e dobra vergalhão goiânia": alto volume, alta competição
- "vergalhão CA-50 preço goiânia": médio volume, média competição
- "coluna pronta vergalhão goiânia": baixo volume, baixa competição
- "corte dobra df brasília": médio volume, crescente
- "vergalhão aparecida de goiânia": baixo volume, baixíssima competição

Tendências observadas no mercado:
- Construção civil em expansão no DF e entorno (2025-2026)
- Demanda crescente por coluna pronta (redução de mão de obra)
- Construtoras buscando parceiros de aço com entrega programada
- Aumento de obras residenciais em cidades satélite do DF

Lacunas de conteúdo identificadas:
- Poucos sites concorrentes com calculadoras de aço online
- Conteúdo técnico sobre NBR 6118 e CA-60 escasso
- Páginas localizadas para cidades do DF quase inexistentes nos concorrentes

Oportunidades de keywords de cauda longa:
- "corte e dobra vergalhão [bairro goiânia]": >40 bairros sem cobertura
- "vergalhão CA-50 [cidade df]": >30 RAs do DF sem cobertura
- "quanto custa coluna pronta [cidade]": perguntas sem resposta no Google
`
}

// ================================================
// Gerador de sugestões de landing pages
// ================================================
async function gerarSugestoesLandingPages(relatorio) {
    const oportunidades = relatorio.sugestoesConteudo || []

    const resposta = await cliente.messages.create({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1000,
        messages: [{
            role: 'user',
            content: `Com base nas oportunidades identificadas para a BR Aço, gere uma lista de 10 novas landing pages programáticas a criar.
Formato: { "paginas": [ { "rota": "/corte-e-dobra/nova-localidade", "localidade": "...", "titulo": "...", "h1": "...", "metaDescription": "..." } ] }
Foque em localidades do DF (Regiões Administrativas) ainda não cobertas.
Retorne APENAS o JSON.`
        }]
    })

    const texto = resposta.content[0].text.trim()
        .replace(/```json\n?/g, '').replace(/```\n?/g, '')
    return JSON.parse(texto)
}

// ================================================
// Executa o agente e salva relatório
// ================================================
async function executar() {
    console.log('🔍 Competitor Monitor Agent iniciado...')

    try {
        const dadosMercado = await coletarDadosMercado()
        console.log('✅ Dados de mercado coletados')

        const relatorio = await analisarConcorrencia(dadosMercado)
        console.log('✅ Análise competitiva gerada')

        const sugestoesLP = await gerarSugestoesLandingPages(relatorio)
        console.log('✅ Sugestões de landing pages geradas')

        const resultado = {
            ...relatorio,
            novasLandingPages: sugestoesLP.paginas || []
        }

        // Salva relatório
        const caminhoRelatorio = join(__dirname, '../../reports/competitor-monitor.json')
        writeFileSync(caminhoRelatorio, JSON.stringify(resultado, null, 2), 'utf8')
        console.log(`✅ Relatório salvo: ${caminhoRelatorio}`)

        // Exibe resumo no terminal
        console.log('\n📊 RESUMO EXECUTIVO:')
        console.log(resultado.resumoExecutivo)
        console.log('\n🎯 PRÓXIMOS PASSOS:')
        resultado.proximosPassos?.forEach((p, i) => console.log(`  ${i + 1}. ${p}`))
        console.log('\n📄 NOVAS LANDING PAGES SUGERIDAS:')
        resultado.novasLandingPages?.slice(0, 5).forEach(p => console.log(`  → ${p.rota}: ${p.titulo}`))

        return resultado

    } catch (erro) {
        console.error('❌ Erro no Competitor Monitor:', erro.message)
        throw erro
    }
}

// Executa se chamado diretamente
executar().catch(console.error)

export { executar as executarCompetitorMonitor }
