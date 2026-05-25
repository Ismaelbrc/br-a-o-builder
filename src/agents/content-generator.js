// ================================================
// CONTENT GENERATOR AGENT — BR Aço
// ================================================
// Padrão: CrewAI "Landing Page Generator" +
//         "Content Personalization Agent"
// Gera variações de conteúdo localizado para as
// ~1700 landing pages programáticas do site.
//
// Uso: node src/agents/content-generator.js --localidade="Taguatinga" --servico="corte-e-dobra"
// ================================================

import Anthropic from '@anthropic-ai/sdk'
import { writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const cliente = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

// ── Serviços disponíveis ───────────────────────
const SERVICOS = {
    'corte-e-dobra': {
        nome: 'Corte e Dobra de Vergalhão',
        descricao: 'corte e dobra de vergalhão sob medida',
        keywords: ['corte e dobra', 'vergalhão', 'armação', 'CA-50'],
        beneficios: ['sem desperdício', 'prazo 24-48h', 'entrega em obra', 'sob medida']
    },
    'vergalhao': {
        nome: 'Vergalhão',
        descricao: 'vergalhão CA-50 e CA-60 por barra ou kg',
        keywords: ['vergalhão', 'CA-50', 'barra de aço', 'ferro'],
        beneficios: ['pronta entrega', 'diversas bitolas', 'preço de fábrica', 'certificado ABNT']
    },
    'coluna-pronta': {
        nome: 'Coluna Pronta',
        descricao: 'coluna pronta (gaiola de aço) fabricada sob medida',
        keywords: ['coluna pronta', 'gaiola de aço', 'pilar armado', 'armação de pilar'],
        beneficios: ['economia de mão de obra', 'precisão', 'rapidez', 'pronta para concretar']
    }
}

// ── Regiões/Estados para contextualização ─────
const CONTEXTO_REGIAO = {
    'goiania':    { estado: 'Goiás', populacao: 'metrópole', clima: 'Cerrado' },
    'brasilia':   { estado: 'DF', populacao: 'capital federal', clima: 'Cerrado' },
    'aparecida':  { estado: 'Goiás', populacao: 'grande cidade', clima: 'Cerrado' },
    'anapolis':   { estado: 'Goiás', populacao: 'polo industrial', clima: 'Cerrado' },
    'taguatinga': { estado: 'DF', populacao: 'região administrativa', clima: 'Cerrado' },
}

// ================================================
// Gera conteúdo localizado para uma landing page
// ================================================
export async function gerarConteudoLocalizado(localidade, servico) {
    const servicoInfo = SERVICOS[servico]
    if (!servicoInfo) throw new Error(`Serviço inválido: ${servico}`)

    const regiaoKey = localidade.toLowerCase().split(' ')[0]
    const contextoRegiao = CONTEXTO_REGIAO[regiaoKey] || { estado: 'Goiás/DF', populacao: 'cidade', clima: 'Cerrado' }

    console.log(`📝 Gerando conteúdo: ${servicoInfo.nome} em ${localidade}`)

    const resposta = await cliente.messages.create({
        model: process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-6',
        max_tokens: 2000,
        system: [{
            type: 'text',
            text: `Você é um especialista em SEO e copywriting para empresas de materiais de construção no Brasil.
Gere conteúdo otimizado para SEO local de alta qualidade, sem parecer gerado por IA.
Foque em intenção de compra local. Use linguagem natural, direta e persuasiva.`,
            cache_control: { type: 'ephemeral' }
        }],
        messages: [{
            role: 'user',
            content: `Empresa: BR Aço (Grupo Braco) — ${servicoInfo.descricao}
Localidade: ${localidade} (${contextoRegiao.estado})
Serviço: ${servicoInfo.nome}
Benefícios: ${servicoInfo.beneficios.join(', ')}

Gere o conteúdo da landing page em JSON:
{
  "titulo": "<H1 principal com localidade e serviço>",
  "subtitulo": "<frase de suporte ao H1>",
  "metaTitle": "<título SEO até 60 chars>",
  "metaDescription": "<descrição SEO até 155 chars com CTA>",
  "hero": {
    "headline": "<headline impactante>",
    "subheadline": "<complemento>",
    "cta": "<texto do botão CTA>"
  },
  "beneficios": [
    { "icone": "...", "titulo": "...", "descricao": "..." }
  ],
  "secaoLocalidade": {
    "titulo": "...",
    "texto": "<2-3 frases contextualizando o serviço na localidade>"
  },
  "faq": [
    { "pergunta": "...", "resposta": "..." }
  ],
  "schemaLocalBusiness": {
    "@type": "LocalBusiness",
    "name": "BR Aço - ${servicoInfo.nome} ${localidade}",
    "description": "..."
  }
}`
        }]
    })

    const texto = resposta.content[0].text.trim()
        .replace(/```json\n?/g, '').replace(/```\n?/g, '')

    return JSON.parse(texto)
}

// ================================================
// Gera lote de conteúdos para múltiplas localidades
// ================================================
export async function gerarLoteLocalidades(localidades, servico, { batchSize = 3 } = {}) {
    const resultados = []
    const erros = []

    for (let i = 0; i < localidades.length; i += batchSize) {
        const lote = localidades.slice(i, i + batchSize)
        console.log(`📦 Processando lote ${Math.floor(i/batchSize)+1}: ${lote.join(', ')}`)

        const promessas = lote.map(async (localidade) => {
            try {
                const conteudo = await gerarConteudoLocalizado(localidade, servico)
                return { localidade, servico, conteudo, ok: true }
            } catch (erro) {
                erros.push({ localidade, erro: erro.message })
                return { localidade, servico, ok: false, erro: erro.message }
            }
        })

        const loteResultados = await Promise.all(promessas)
        resultados.push(...loteResultados.filter(r => r.ok))

        // Pausa entre lotes para não saturar API
        if (i + batchSize < localidades.length) {
            await new Promise(r => setTimeout(r, 2000))
        }
    }

    return { resultados, erros }
}

// ================================================
// Gera variação A/B de headline/CTA
// ================================================
export async function gerarVariacoesAB(localidade, servico) {
    const servicoInfo = SERVICOS[servico]

    const resposta = await cliente.messages.create({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 600,
        messages: [{
            role: 'user',
            content: `Gere 3 variações de headline e CTA para teste A/B da landing page de ${servicoInfo.nome} em ${localidade} para a BR Aço.
JSON: { "variacoes": [ { "id": "A|B|C", "headline": "...", "subheadline": "...", "cta": "...", "hipotese": "por que funciona" } ] }
Retorne APENAS o JSON.`
        }]
    })

    const texto = resposta.content[0].text.trim()
        .replace(/```json\n?/g, '').replace(/```\n?/g, '')
    return JSON.parse(texto)
}

// ================================================
// CLI — executa quando chamado diretamente
// ================================================
const args = process.argv.slice(2)
const localidadeArg = args.find(a => a.startsWith('--localidade='))?.split('=')[1]
const servicoArg = args.find(a => a.startsWith('--servico='))?.split('=')[1]

if (localidadeArg && servicoArg) {
    console.log(`🚀 Gerando conteúdo: ${servicoArg} em ${localidadeArg}`)

    Promise.all([
        gerarConteudoLocalizado(localidadeArg, servicoArg),
        gerarVariacoesAB(localidadeArg, servicoArg)
    ]).then(([conteudo, variacoes]) => {
        const resultado = { localidade: localidadeArg, servico: servicoArg, conteudo, variacoes }
        const caminho = join(__dirname, `../../reports/content-${servicoArg}-${localidadeArg.toLowerCase().replace(/\s+/g, '-')}.json`)
        writeFileSync(caminho, JSON.stringify(resultado, null, 2), 'utf8')
        console.log(`\n✅ Conteúdo salvo: ${caminho}`)
        console.log(`📄 Título: ${conteudo.titulo}`)
        console.log(`🔍 Meta: ${conteudo.metaDescription}`)
    }).catch(console.error)
}
