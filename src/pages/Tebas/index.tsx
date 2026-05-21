import { Link } from 'react-router-dom';
import { TebasLayout } from '@/components/tebas/TebasLayout';

const ORANGE = '#F47A20';
const SURFACE = '#132337';
const BORDER = 'rgba(255,255,255,0.08)';
const TEXT_DIM = 'rgba(241,245,249,0.55)';

const features = [
  {
    icon: '⬜',
    title: 'Laje',
    desc: 'Espessura mínima, tipo (vigota+tavela), capeamento e malha de distribuição',
  },
  {
    icon: '🔲',
    title: 'Viga principal',
    desc: 'Seção bw × h, altura útil, armadura de tração e estribos indicativos',
  },
  {
    icon: '▮',
    title: 'Pilar',
    desc: 'Seção transversal mínima, taxa de armadura e carga axial de cálculo',
  },
  {
    icon: '⬡',
    title: 'Sapata',
    desc: 'Dimensões planta (L × L), altura mínima e tensão admissível do solo',
  },
];

const steps = [
  { n: 1, label: 'Descreva a edificação', desc: 'Tipo, área e vão da laje' },
  { n: 2, label: 'Tebas calcula pelas NBRs', desc: '6118 · 6120 · 6122' },
  { n: 3, label: 'Veja o pré-dimensionamento', desc: 'Com memória de cálculo' },
];

export default function TebasLanding() {
  return (
    <TebasLayout>
      {/* Hero */}
      <section className="flex flex-col items-center text-center px-6 pt-20 pb-16 gap-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-5xl font-bold tracking-tight" style={{ color: ORANGE }}>
            Tebas
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold leading-tight max-w-xl" style={{ color: '#F1F5F9' }}>
          Pré-dimensionamento estrutural em minutos
        </h1>

        <p className="text-lg max-w-lg" style={{ color: TEXT_DIM }}>
          Para casas e sobrados até 3 pavimentos. Do vão da laje ao tamanho da sapata —
          com base nas normas ABNT.
        </p>

        <div
          className="flex items-center gap-2 text-xs px-3 py-1.5 rounded-full"
          style={{ background: SURFACE, border: `1px solid ${BORDER}`, color: TEXT_DIM }}
        >
          <span style={{ color: ORANGE }}>●</span>
          NBR 6118:2023 · NBR 6120:2019 · NBR 6122:2019
        </div>

        <Link
          to="/tebas/calcular"
          className="mt-2 inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all no-underline"
          style={{ background: ORANGE, color: '#fff' }}
          onMouseEnter={e => (e.currentTarget.style.background = '#d96a10')}
          onMouseLeave={e => (e.currentTarget.style.background = ORANGE)}
        >
          Iniciar cálculo
          <span aria-hidden>→</span>
        </Link>

        <p className="text-xs" style={{ color: 'rgba(241,245,249,0.3)' }}>
          Gratuito · Sem cadastro · Resultado instantâneo
        </p>
      </section>

      {/* Como funciona */}
      <section className="px-6 py-14" style={{ borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-center text-sm font-semibold uppercase tracking-widest mb-10" style={{ color: TEXT_DIM }}>
            Como funciona
          </h2>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-0">
            {steps.map((s, i) => (
              <div key={s.n} className="flex sm:flex-1 items-center gap-4 sm:gap-0 sm:flex-col sm:text-center">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0"
                  style={{ background: ORANGE, color: '#fff' }}
                >
                  {s.n}
                </div>
                <div className="sm:mt-3">
                  <p className="font-semibold text-sm" style={{ color: '#F1F5F9' }}>{s.label}</p>
                  <p className="text-xs mt-0.5" style={{ color: TEXT_DIM }}>{s.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div
                    className="hidden sm:block sm:flex-1 h-px mx-4"
                    style={{ background: BORDER }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O que calcula */}
      <section className="px-6 py-14" style={{ borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center text-sm font-semibold uppercase tracking-widest mb-10" style={{ color: TEXT_DIM }}>
            O que Tebas calcula
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map(f => (
              <div
                key={f.title}
                className="p-5 rounded-xl"
                style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{f.icon}</span>
                  <span className="font-semibold" style={{ color: ORANGE }}>{f.title}</span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: TEXT_DIM }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer + CTA final */}
      <section className="px-6 py-14" style={{ borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-6 text-center">
          <div
            className="w-full p-4 rounded-xl text-sm leading-relaxed"
            style={{ background: 'rgba(244,122,32,0.08)', border: `1px solid rgba(244,122,32,0.2)`, color: TEXT_DIM }}
          >
            <strong style={{ color: '#F47A20' }}>⚠ Aviso técnico:</strong>{' '}
            Os resultados do Tebas são estimativas de pré-dimensionamento para fase de anteprojeto,
            com base nas NBR 6118:2023, NBR 6122:2019 e NBR 6120:2019. Não substituem
            o projeto estrutural definitivo com ART de engenheiro habilitado.
          </div>

          <Link
            to="/tebas/calcular"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all no-underline"
            style={{ background: ORANGE, color: '#fff' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#d96a10')}
            onMouseLeave={e => (e.currentTarget.style.background = ORANGE)}
          >
            Começar agora — é gratuito →
          </Link>
        </div>
      </section>
    </TebasLayout>
  );
}
