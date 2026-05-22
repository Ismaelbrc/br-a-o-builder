import { Link } from 'react-router-dom';
import { useSEO } from '@/hooks/useSEO';
import { TebasLayout } from '@/components/tebas/TebasLayout';

const ORANGE = '#F47A20';
const SURFACE = '#132337';
const BORDER = 'rgba(255,255,255,0.08)';
const TEXT_DIM = 'rgba(241,245,249,0.55)';
const WHATSAPP_URL =
  'https://wa.me/5562999247285?text=%5Bsrc%3Atebas%5D%20Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20teba%20(treliça%20metálica).';

const tebaTypes = [
  { tipo: 'Teba 7', altura: '7 cm', vao: 'até 3,5 m', uso: 'Lajes leves — residencial padrão' },
  { tipo: 'Teba 8', altura: '8 cm', vao: 'até 4,0 m', uso: 'Residencial e comercial leve' },
  { tipo: 'Teba 12', altura: '12 cm', vao: 'até 4,5 m', uso: 'Vãos médios — sobrado e comércio' },
  { tipo: 'Teba 14', altura: '14 cm', vao: 'até 5,0 m', uso: 'Vãos maiores e cargas elevadas' },
];

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

const faqs = [
  {
    q: 'O que é teba na construção civil?',
    a: 'Teba é o nome popular da treliça metálica, uma peça de aço usada como armação em lajes nervuradas (vigota + tavela). Ela compõe parte da armadura da laje, reduz mão de obra e minimiza o desperdício de concreto. O nome virou sinônimo genérico do produto, como "xerox" para fotocópia.',
  },
  {
    q: 'Como calcular a teba correta para minha laje?',
    a: 'A escolha depende do vão livre da laje (distância entre vigas de apoio) e da carga prevista. Use a calculadora acima para obter um pré-dimensionamento indicativo conforme NBR 6118:2023. Para o projeto definitivo com ART, consulte um engenheiro estrutural.',
  },
  {
    q: 'Qual a diferença entre teba 7 e teba 8?',
    a: 'A numeração (teba 7, teba 8, teba 12 etc.) se refere à altura do perfil da treliça em centímetros. Quanto maior o número, maior a altura e, portanto, maior a capacidade de vão e carga. A teba 8 suporta vãos um pouco maiores que a teba 7 com a mesma espessura de capeamento.',
  },
  {
    q: 'A BR Aço fornece teba (treliça metálica)?',
    a: 'Sim. A BR Aço produz e entrega treliças metálicas e todos os elementos de aço para lajes e estruturas em Goiânia e em todo o Goiás, com entrega em até 2 dias úteis. Solicite orçamento pelo WhatsApp.',
  },
  {
    q: 'O resultado do Tebas substitui o projeto estrutural?',
    a: 'Não. O Tebas gera um pré-dimensionamento indicativo para anteprojeto e orçamento. O projeto estrutural definitivo deve ser elaborado por engenheiro habilitado com emissão de ART.',
  },
];

export default function TebasLanding() {
  useSEO({
    title: 'Calculadora de Teba Grátis Online | BR Aço Goiânia',
    description:
      'Calcule teba e pré-dimensionamento estrutural grátis: laje, viga, pilar e sapata conforme NBR 6118:2023. Teba 7, teba 8, teba 12 — resultado instantâneo, sem cadastro. BR Aço Goiânia.',
    canonical: 'https://grupobraco.com.br/tebas',
    keywords:
      'calculadora teba, calcular teba, teba laje, teba 7, teba 8, teba 12, treliça metálica, pré-dimensionamento estrutural, dimensionamento teba, teba goiânia',
  });

  return (
    <TebasLayout>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="flex flex-col items-center text-center px-6 pt-20 pb-16 gap-6">
        <div
          className="flex items-center gap-2 text-xs px-3 py-1.5 rounded-full"
          style={{ background: SURFACE, border: `1px solid ${BORDER}`, color: TEXT_DIM }}
        >
          <span style={{ color: ORANGE }}>●</span>
          NBR 6118:2023 · NBR 6120:2019 · NBR 6122:2019
        </div>

        <h1
          className="text-3xl sm:text-4xl font-bold leading-tight max-w-2xl"
          style={{ color: '#F1F5F9' }}
        >
          Calculadora de Teba Gratuita —{' '}
          <span style={{ color: ORANGE }}>Pré-dimensionamento Estrutural Online</span>
        </h1>

        <p className="text-lg max-w-lg" style={{ color: TEXT_DIM }}>
          Para casas e sobrados até 3 pavimentos. Do vão da laje ao tamanho da sapata, com base
          nas normas ABNT. Resultado em segundos, sem cadastro.
        </p>

        <Link
          to="/tebas/calcular"
          className="mt-2 inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all no-underline"
          style={{ background: ORANGE, color: '#fff' }}
          onMouseEnter={e => (e.currentTarget.style.background = '#d96a10')}
          onMouseLeave={e => (e.currentTarget.style.background = ORANGE)}
        >
          Iniciar cálculo gratuito
          <span aria-hidden>→</span>
        </Link>

        <p className="text-xs" style={{ color: 'rgba(241,245,249,0.3)' }}>
          Gratuito · Sem cadastro · Resultado instantâneo
        </p>
      </section>

      {/* ── O que é Teba ─────────────────────────────────────── */}
      <section className="px-6 py-14" style={{ borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#F1F5F9' }}>
            O que é teba na construção civil?
          </h2>
          <p className="text-base leading-relaxed mb-4" style={{ color: TEXT_DIM }}>
            <strong style={{ color: '#F1F5F9' }}>Teba</strong> é o nome popular da{' '}
            <strong style={{ color: '#F1F5F9' }}>treliça metálica para laje</strong>, uma armação
            de aço pré-fabricada usada em lajes nervuradas (lajes de vigota com tavela cerâmica ou
            EPS). A peça combina dois arames diagonais soldados a uma barra superior e outra inferior,
            formando uma treliça que garante resistência à flexão e ao cisalhamento.
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: TEXT_DIM }}>
            O nome "teba" virou genérico no Brasil — como "xerox" para fotocópia — e hoje é usado
            para designar qualquer treliça metálica, independentemente do fabricante. Ela reduz
            significativamente a mão de obra na armação, elimina o uso de espaçadores manuais e
            diminui o consumo de concreto em comparação com lajes maciças.
          </p>
          <p className="text-base leading-relaxed" style={{ color: TEXT_DIM }}>
            A escolha do <strong style={{ color: '#F1F5F9' }}>tipo de teba correto</strong> (teba 7,
            teba 8, teba 12 etc.) depende do vão livre da laje, da carga de projeto e da espessura
            total do elemento. Nossa calculadora abaixo ajuda a identificar o pré-dimensionamento
            adequado para cada situação.
          </p>
        </div>
      </section>

      {/* ── Tipos de Teba ────────────────────────────────────── */}
      <section className="px-6 py-14" style={{ borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-2" style={{ color: '#F1F5F9' }}>
            Tipos de teba — teba 7, teba 8, teba 12 e teba 14
          </h2>
          <p className="text-sm mb-8" style={{ color: TEXT_DIM }}>
            A numeração indica a altura do perfil da treliça em centímetros. Quanto maior o número,
            maior a capacidade de vão e carga.
          </p>

          <div className="overflow-x-auto rounded-xl" style={{ border: `1px solid ${BORDER}` }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: SURFACE }}>
                  {['Tipo', 'Altura do perfil', 'Vão indicativo', 'Aplicação típica'].map(h => (
                    <th
                      key={h}
                      className="text-left px-4 py-3 font-semibold"
                      style={{ color: ORANGE, borderBottom: `1px solid ${BORDER}` }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tebaTypes.map((row, i) => (
                  <tr
                    key={row.tipo}
                    style={{
                      background: i % 2 === 0 ? 'transparent' : 'rgba(19,35,55,0.6)',
                      borderBottom: `1px solid ${BORDER}`,
                    }}
                  >
                    <td className="px-4 py-3 font-semibold" style={{ color: '#F1F5F9' }}>
                      {row.tipo}
                    </td>
                    <td className="px-4 py-3" style={{ color: TEXT_DIM }}>
                      {row.altura}
                    </td>
                    <td className="px-4 py-3" style={{ color: TEXT_DIM }}>
                      {row.vao}
                    </td>
                    <td className="px-4 py-3" style={{ color: TEXT_DIM }}>
                      {row.uso}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs mt-3" style={{ color: 'rgba(241,245,249,0.3)' }}>
            Valores indicativos para lajes residenciais com carga de 200 kg/m². Projetos com cargas
            maiores exigem verificação com engenheiro estrutural.
          </p>
        </div>
      </section>

      {/* ── CTA Calculadora ──────────────────────────────────── */}
      <section className="px-6 py-14" style={{ borderTop: `1px solid ${BORDER}` }}>
        <div
          className="max-w-3xl mx-auto rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6"
          style={{ background: SURFACE, border: `1px solid rgba(244,122,32,0.2)` }}
        >
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-xl font-bold mb-2" style={{ color: '#F1F5F9' }}>
              Calcule o pré-dimensionamento da sua estrutura
            </h2>
            <p className="text-sm" style={{ color: TEXT_DIM }}>
              Descreva o tipo de edificação, a área e o vão da laje. O Tebas usa IA com base nas
              normas NBR para gerar laje, viga, pilar e sapata em segundos.
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

      {/* ── Como funciona ────────────────────────────────────── */}
      <section className="px-6 py-14" style={{ borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-center text-sm font-semibold uppercase tracking-widest mb-10"
            style={{ color: TEXT_DIM }}
          >
            Como funciona
          </h2>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-0">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className="flex sm:flex-1 items-center gap-4 sm:gap-0 sm:flex-col sm:text-center"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0"
                  style={{ background: ORANGE, color: '#fff' }}
                >
                  {s.n}
                </div>
                <div className="sm:mt-3">
                  <p className="font-semibold text-sm" style={{ color: '#F1F5F9' }}>
                    {s.label}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: TEXT_DIM }}>
                    {s.desc}
                  </p>
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

      {/* ── O que calcula ────────────────────────────────────── */}
      <section className="px-6 py-14" style={{ borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-center text-sm font-semibold uppercase tracking-widest mb-10"
            style={{ color: TEXT_DIM }}
          >
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
                  <span className="font-semibold" style={{ color: ORANGE }}>
                    {f.title}
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: TEXT_DIM }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="px-6 py-14" style={{ borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8" style={{ color: '#F1F5F9' }}>
            Perguntas frequentes sobre teba
          </h2>
          <div className="flex flex-col gap-5">
            {faqs.map(faq => (
              <div
                key={faq.q}
                className="p-5 rounded-xl"
                style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
              >
                <h3 className="font-semibold mb-2" style={{ color: '#F1F5F9' }}>
                  {faq.q}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: TEXT_DIM }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA WhatsApp ─────────────────────────────────────── */}
      <section className="px-6 py-14" style={{ borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-4 text-center">
          <h2 className="text-xl font-bold" style={{ color: '#F1F5F9' }}>
            Precisa de teba (treliça metálica) para sua obra?
          </h2>
          <p className="text-sm max-w-md" style={{ color: TEXT_DIM }}>
            A BR Aço fornece treliças metálicas e vergalhões cortados e dobrados sob medida.
            Entrega em até 2 dias úteis em Goiânia e todo o Goiás.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all no-underline"
            style={{ background: '#25D366', color: '#fff' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#1ebe5a')}
            onMouseLeave={e => (e.currentTarget.style.background = '#25D366')}
          >
            Solicitar orçamento de teba →
          </a>
        </div>
      </section>

      {/* ── Disclaimer ───────────────────────────────────────── */}
      <section className="px-6 py-10" style={{ borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-6 text-center">
          <div
            className="w-full p-4 rounded-xl text-sm leading-relaxed"
            style={{
              background: 'rgba(244,122,32,0.08)',
              border: `1px solid rgba(244,122,32,0.2)`,
              color: TEXT_DIM,
            }}
          >
            <strong style={{ color: ORANGE }}>⚠ Aviso técnico:</strong>{' '}
            Os resultados do Tebas são estimativas de pré-dimensionamento para fase de anteprojeto,
            com base nas NBR 6118:2023, NBR 6122:2019 e NBR 6120:2019. Não substituem o projeto
            estrutural definitivo com ART de engenheiro habilitado.
          </div>
        </div>
      </section>
    </TebasLayout>
  );
}
