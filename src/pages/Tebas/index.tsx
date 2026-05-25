import { Link } from 'react-router-dom';
import { useSEO } from '@/hooks/useSEO';
import { TebasLayout } from '@/components/tebas/TebasLayout';

const ORANGE  = '#F47A20';
const SURFACE = '#132337';
const BORDER  = 'rgba(255,255,255,0.08)';
const DIM     = 'rgba(241,245,249,0.55)';
const WA_URL  =
  'https://wa.me/5562996472423?text=%5Bsrc%3Atebas%5D%20Ol%C3%A1!%20Finalizei%20o%20pr%C3%A9-dimensionamento%20no%20Tebas%20e%20gostaria%20de%20cotar%20o%20a%C3%A7o%20da%20obra.';

// ── Elementos que o Tebas calcula ─────────────────────────────────────────────
const elementos = [
  {
    icon: '⬜',
    title: 'Laje',
    color: '#6ab0d8',
    desc: 'Espessura mínima (série comercial), tipo vigota + tavela, capeamento e malha de distribuição CA-60.',
  },
  {
    icon: '🔲',
    title: 'Viga',
    color: '#c8a84a',
    desc: 'Seção bw × h, altura útil, momento de cálculo, armadura de tração e espaçamento de estribos.',
  },
  {
    icon: '▮',
    title: 'Pilar',
    color: '#b0ccd6',
    desc: 'Seção transversal mínima conforme carga axial e classe do concreto, taxa e bitola da armadura longitudinal.',
  },
  {
    icon: '⬡',
    title: 'Sapata',
    color: '#7a94a8',
    desc: 'Dimensões planta (L × L), altura mínima e tensão admissível do solo a partir do NSPT informado.',
  },
];

// ── Passos ────────────────────────────────────────────────────────────────────
const steps = [
  {
    n: 1,
    label: 'Descreva a edificação',
    desc: 'Tipo (térrea / sobrado), área por pavimento, vão da laje, classe do concreto, uso e sondagem SPT.',
  },
  {
    n: 2,
    label: 'Tebas calcula pelas NBRs',
    desc: 'Motor de cálculo conforme NBR 6118:2023, NBR 6120:2019 e NBR 6122:2019 — nenhuma IA envolvida.',
  },
  {
    n: 3,
    label: 'Resultado com memória de cálculo',
    desc: 'Cada elemento vem com as fórmulas e normas usadas. Exportável para PDF.',
  },
];

// ── Diferenciais ──────────────────────────────────────────────────────────────
const diferenciais = [
  { emoji: '📐', titulo: '100% NBR', texto: 'Cálculos auditados conforme NBR 6118:2023, 6120:2019 e 6122:2019.' },
  { emoji: '⚡', titulo: 'Resultado em segundos', texto: 'Sem espera, sem cadastro, sem dados pessoais.' },
  { emoji: '🏗️', titulo: 'Visualização 3D', texto: 'Veja a estrutura em três dimensões com as armaduras destacadas.' },
  { emoji: '💰', titulo: 'Estimativa de aço', texto: 'Projeção de kg por bitola para subsidiar o orçamento de materiais.' },
];

// ── FAQ ───────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'O que é o Tebas?',
    a: 'Tebas é uma ferramenta de pré-dimensionamento estrutural online desenvolvida pela BR Aço. O nome homenageia a antiga cidade grega de Tebas — símbolo de conhecimento e engenharia da Antiguidade. A ferramenta calcula laje, viga, pilar e sapata para edificações residenciais de até 3 pavimentos, com base nas normas ABNT vigentes.',
  },
  {
    q: 'Para que serve o pré-dimensionamento?',
    a: 'O pré-dimensionamento é a primeira estimativa estrutural de um projeto. Ele define as ordens de grandeza dos elementos (seções, armaduras, fundações) antes de contratar um engenheiro estrutural. É essencial para fazer orçamentos iniciais, comparar sistemas construtivos e dimensionar o investimento em aço e concreto.',
  },
  {
    q: 'O Tebas substitui o projeto estrutural com ART?',
    a: 'Não. O Tebas gera estimativas de anteprojeto. O projeto estrutural definitivo — necessário para execução da obra e aprovação junto à prefeitura — deve ser elaborado por engenheiro habilitado com emissão de ART no CREA. O Tebas é uma ferramenta auxiliar, não um substituto.',
  },
  {
    q: 'Que normas o Tebas aplica?',
    a: 'NBR 6118:2023 (projeto de estruturas de concreto armado), NBR 6120:2019 (ações para o cálculo de estruturas) e NBR 6122:2019 (projeto e execução de fundações). Cada resultado vem acompanhado da memória de cálculo com as referências normativas utilizadas.',
  },
  {
    q: 'Como é feito o cálculo? Usa inteligência artificial?',
    a: 'Não. O motor de cálculo do Tebas é determinístico — usa as fórmulas e tabelas das normas NBR, sem modelos de IA ou inferência estatística. Isso garante que o mesmo conjunto de dados sempre produz o mesmo resultado, rastreável e auditável.',
  },
  {
    q: 'Funciona para qualquer tipo de edificação?',
    a: 'O Tebas foi desenvolvido para edificações residenciais simples de até 3 pavimentos (térrea, sobrado 2 ou 3 andares), com estrutura convencional de concreto armado. Edificações comerciais, industriais ou com geometrias irregulares requerem análise estrutural específica.',
  },
];

// ═════════════════════════════════════════════════════════════════════════════

export default function TebasLanding() {
  useSEO({
    title: 'Tebas — Pré-dimensionamento Estrutural Online Grátis | BR Aço',
    description:
      'Calcule laje, viga, pilar e sapata grátis conforme NBR 6118:2023. Pré-dimensionamento estrutural para casas e sobrados até 3 pavimentos. Resultado em segundos, sem cadastro. BR Aço Goiânia.',
    canonical: 'https://grupobraco.com.br/tebas',
    keywords:
      'pré-dimensionamento estrutural, calculadora estrutural, dimensionamento laje viga pilar sapata, NBR 6118, estrutura concreto armado, anteprojeto estrutural, calcular laje, calcular pilar, calcular sapata, BR Aço Goiânia',
  });

  return (
    <TebasLayout>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="flex flex-col items-center text-center px-6 pt-20 pb-16 gap-6">
        {/* Badge de normas */}
        <div
          className="flex items-center gap-2 text-xs px-3 py-1.5 rounded-full"
          style={{ background: SURFACE, border: `1px solid ${BORDER}`, color: DIM }}
        >
          <span style={{ color: ORANGE }}>●</span>
          NBR 6118:2023 · NBR 6120:2019 · NBR 6122:2019
        </div>

        {/* Headline */}
        <h1
          className="text-3xl sm:text-4xl font-bold leading-tight max-w-2xl"
          style={{ color: '#F1F5F9' }}
        >
          Pré-dimensionamento estrutural —{' '}
          <span style={{ color: ORANGE }}>laje, viga, pilar e sapata</span>{' '}
          em segundos
        </h1>

        <p className="text-lg max-w-lg" style={{ color: DIM }}>
          Para casas e sobrados até 3 pavimentos. Resultado com memória de cálculo
          conforme as normas ABNT. Gratuito, sem cadastro.
        </p>

        <Link
          to="/tebas/calcular"
          className="mt-2 inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all no-underline"
          style={{ background: ORANGE, color: '#fff' }}
          onMouseEnter={e => (e.currentTarget.style.background = '#d96a10')}
          onMouseLeave={e => (e.currentTarget.style.background = ORANGE)}
        >
          Iniciar pré-dimensionamento gratuito
          <span aria-hidden>→</span>
        </Link>

        <p className="text-xs" style={{ color: 'rgba(241,245,249,0.3)' }}>
          Gratuito · Sem cadastro · Resultado instantâneo
        </p>
      </section>

      {/* ── O que o Tebas calcula ─────────────────────────────────────────── */}
      <section className="px-6 py-14" style={{ borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-3xl mx-auto">
          <p
            className="text-center text-xs font-semibold uppercase tracking-widest mb-8"
            style={{ color: DIM }}
          >
            O que o Tebas calcula
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {elementos.map(el => (
              <div
                key={el.title}
                className="p-5 rounded-xl"
                style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl">{el.icon}</span>
                  <span className="font-semibold" style={{ color: el.color }}>
                    {el.title}
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: DIM }}>
                  {el.desc}
                </p>
              </div>
            ))}
          </div>

          {/* resumo de aço */}
          <div
            className="mt-4 p-5 rounded-xl flex items-start gap-4"
            style={{ background: SURFACE, border: `1px solid rgba(244,122,32,0.25)` }}
          >
            <span className="text-xl shrink-0">📊</span>
            <div>
              <p className="font-semibold mb-1" style={{ color: ORANGE }}>
                + Estimativa de aço por bitola
              </p>
              <p className="text-sm leading-relaxed" style={{ color: DIM }}>
                Ao final, o Tebas gera uma tabela com os quilogramas estimados de cada bitola
                (φ4,2 · φ6,3 · φ10 · φ12,5 · φ16 etc.) para subsidiar o orçamento de materiais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA principal ────────────────────────────────────────────────── */}
      <section className="px-6 py-14" style={{ borderTop: `1px solid ${BORDER}` }}>
        <div
          className="max-w-3xl mx-auto rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6"
          style={{ background: SURFACE, border: `1px solid rgba(244,122,32,0.2)` }}
        >
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-xl font-bold mb-2" style={{ color: '#F1F5F9' }}>
              Pronto para estimar sua estrutura?
            </h2>
            <p className="text-sm" style={{ color: DIM }}>
              Informe o tipo, a área e o vão da edificação. O Tebas calcula tudo conforme
              as normas e mostra cada passo do dimensionamento.
            </p>
          </div>
          <Link
            to="/tebas/calcular"
            className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold transition-all no-underline whitespace-nowrap"
            style={{ background: ORANGE, color: '#fff' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#d96a10')}
            onMouseLeave={e => (e.currentTarget.style.background = ORANGE)}
          >
            Calcular agora →
          </Link>
        </div>
      </section>

      {/* ── Como funciona ─────────────────────────────────────────────────── */}
      <section className="px-6 py-14" style={{ borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-2xl mx-auto">
          <p
            className="text-center text-xs font-semibold uppercase tracking-widest mb-10"
            style={{ color: DIM }}
          >
            Como funciona
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-start gap-8 sm:gap-0">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className="flex sm:flex-1 items-start gap-4 sm:gap-0 sm:flex-col sm:text-center"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0"
                  style={{ background: ORANGE, color: '#fff' }}
                >
                  {s.n}
                </div>
                <div className="sm:mt-3 sm:px-4">
                  <p className="font-semibold text-sm" style={{ color: '#F1F5F9' }}>
                    {s.label}
                  </p>
                  <p className="text-xs mt-1 leading-relaxed" style={{ color: DIM }}>
                    {s.desc}
                  </p>
                </div>
                {i < steps.length - 1 && (
                  <div
                    className="hidden sm:block sm:absolute h-px"
                    style={{ background: BORDER }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Diferenciais ──────────────────────────────────────────────────── */}
      <section className="px-6 py-14" style={{ borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-3xl mx-auto">
          <p
            className="text-center text-xs font-semibold uppercase tracking-widest mb-8"
            style={{ color: DIM }}
          >
            Por que usar o Tebas
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {diferenciais.map(d => (
              <div
                key={d.titulo}
                className="p-5 rounded-xl flex items-start gap-4"
                style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
              >
                <span className="text-2xl shrink-0">{d.emoji}</span>
                <div>
                  <p className="font-semibold mb-1" style={{ color: '#F1F5F9' }}>
                    {d.titulo}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: DIM }}>
                    {d.texto}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sobre o nome Tebas ────────────────────────────────────────────── */}
      <section className="px-6 py-14" style={{ borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-6"
            style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
          >
            {/* coluna ícone */}
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl shrink-0"
              style={{ background: 'rgba(244,122,32,0.12)', border: `1px solid rgba(244,122,32,0.25)` }}
            >
              🏛️
            </div>
            {/* coluna texto */}
            <div>
              <h2 className="text-lg font-bold mb-2" style={{ color: '#F1F5F9' }}>
                Por que "Tebas"?
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: DIM }}>
                Tebas (em grego, Θῆβαι) foi uma das maiores cidades da Grécia Antiga — conhecida
                pela arquitetura monumental, pela organização urbana e pelo legado em engenharia e
                filosofia. O nome foi escolhido como homenagem à tradição de construir com rigor
                e método, valores que guiam a ferramenta: cálculo estrutural baseado em normas,
                com memória de cálculo completa e rastreável.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="px-6 py-14" style={{ borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8" style={{ color: '#F1F5F9' }}>
            Perguntas frequentes
          </h2>
          <div className="flex flex-col gap-4">
            {faqs.map(faq => (
              <div
                key={faq.q}
                className="p-5 rounded-xl"
                style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
              >
                <h3 className="font-semibold mb-2" style={{ color: '#F1F5F9' }}>
                  {faq.q}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: DIM }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA WhatsApp — BR Aço ─────────────────────────────────────────── */}
      <section className="px-6 py-14" style={{ borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-4 text-center">
          <h2 className="text-xl font-bold" style={{ color: '#F1F5F9' }}>
            Já tem o pré-dimensionamento? Cote o aço com a BR Aço.
          </h2>
          <p className="text-sm max-w-md" style={{ color: DIM }}>
            Vergalhões CA-50 e CA-60 cortados e dobrados sob medida, treliças e telas soldadas.
            Entrega em Goiânia e em todo o Goiás a partir de 7 dias úteis.
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all no-underline"
            style={{ background: '#25D366', color: '#fff' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#1ebe5a')}
            onMouseLeave={e => (e.currentTarget.style.background = '#25D366')}
          >
            Solicitar orçamento de aço →
          </a>
        </div>
      </section>

      {/* ── Aviso técnico ────────────────────────────────────────────────── */}
      <section className="px-6 py-10" style={{ borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-2xl mx-auto">
          <div
            className="p-4 rounded-xl text-sm leading-relaxed text-center"
            style={{
              background: 'rgba(244,122,32,0.08)',
              border: `1px solid rgba(244,122,32,0.2)`,
              color: DIM,
            }}
          >
            <strong style={{ color: ORANGE }}>⚠ Aviso técnico:</strong>{' '}
            Os resultados do Tebas são estimativas de pré-dimensionamento para anteprojeto,
            elaboradas com base nas NBR 6118:2023, NBR 6122:2019 e NBR 6120:2019.
            Não substituem o projeto estrutural definitivo com ART de engenheiro habilitado.
          </div>
        </div>
      </section>

    </TebasLayout>
  );
}
