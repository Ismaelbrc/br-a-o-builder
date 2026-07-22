import { useEffect, useState, useMemo, lazy, Suspense, Component } from 'react';
import type { ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TebasLayout } from '@/components/tebas/TebasLayout';
import type { TebasResult } from '@/lib/tebas-types';
import { TEBAS_RESULT_KEY } from '@/lib/tebas-types';
import { calcularAco } from '@/lib/tebas-calc';

// Three.js é pesado — carregado só quando a aba 3D é aberta
const Tebas3D = lazy(() =>
  import('@/components/tebas/Tebas3D').then(m => ({ default: m.Tebas3D }))
);

// ErrorBoundary para capturar erros do componente 3D sem quebrar a página
class ErrorBoundary3D extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

// ── Paleta ────────────────────────────────────────────────────────────────────
const ORANGE = '#F47A20';
const SURFACE = '#132337';
const SURFACE2 = '#0F1E2E';
const BORDER = 'rgba(255,255,255,0.08)';
const TEXT = '#F1F5F9';
const TEXT_DIM = 'rgba(241,245,249,0.55)';
const GREEN = '#22C55E';

type TabKey = 'laje' | 'viga' | 'pilar' | 'sapata' | 'aco' | '3d';

const TABS: { key: TabKey; label: string }[] = [
  { key: 'aco',    label: 'Resumo Aço' },
  { key: '3d',     label: '3D' },
  { key: 'laje',   label: 'Laje' },
  { key: 'viga',   label: 'Viga' },
  { key: 'pilar',  label: 'Pilar' },
  { key: 'sapata', label: 'Fundação' },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function KpiCard({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div
      className="flex flex-col gap-1 p-4 rounded-xl"
      style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
    >
      <span className="text-xs uppercase tracking-wide font-semibold" style={{ color: ORANGE }}>
        {label}
      </span>
      <span className="text-xl font-bold leading-tight" style={{ color: TEXT }}>
        {value}
      </span>
      {sub && <span className="text-xs" style={{ color: TEXT_DIM }}>{sub}</span>}
    </div>
  );
}

function DataRow({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div
      className="flex items-start justify-between gap-4 py-2.5 px-3"
      style={{ borderBottom: `1px solid ${BORDER}` }}
    >
      <span className="text-sm" style={{ color: TEXT_DIM }}>{label}</span>
      <span
        className="text-sm font-medium text-right"
        style={{ color: highlight ? ORANGE : TEXT, maxWidth: '55%' }}
      >
        {value}
      </span>
    </div>
  );
}

function NormaBox({ text }: { text: string }) {
  return (
    <div
      className="mt-4 p-3 rounded-lg text-xs leading-relaxed font-mono"
      style={{ background: SURFACE2, border: `1px solid ${BORDER}`, color: TEXT_DIM }}
    >
      <span style={{ color: ORANGE }}>📋 </span>
      {text}
    </div>
  );
}

// ── Tela principal ────────────────────────────────────────────────────────────

export default function TebasResultado() {
  const navigate = useNavigate();
  const [resultado, setResultado] = useState<TebasResult | null>(null);
  const [activeTab, setActiveTab] = useState<TabKey>('aco');

  useEffect(() => {
    const raw = sessionStorage.getItem(TEBAS_RESULT_KEY);
    if (!raw) {
      navigate('/tebas/calcular', { replace: true });
      return;
    }
    try {
      setResultado(JSON.parse(raw));
    } catch {
      navigate('/tebas/calcular', { replace: true });
    }
  }, [navigate]);

  // useMemo DEVE ficar antes de qualquer early return (Rules of Hooks)
  const aco = useMemo(() => {
    if (!resultado) return null;
    try { return calcularAco(resultado); }
    catch { return null; }
  }, [resultado]);

  if (!resultado) return null;

  const { laje, viga, pilar, sapata, input, geradoEm } = resultado;

  const TIPO_LABEL: Record<string, string> = {
    terreo: 'Térrea',
    sobrado2: 'Sobrado 2 pav.',
    sobrado3: 'Sobrado 3 pav.',
  };

  // WhatsApp link
  const waMsg = encodeURIComponent(
    `Olá! Usei o Tebas (grupobraco.com.br/tebas) para pré-dimensionar uma estrutura residencial e gostaria de conversar sobre o projeto com um engenheiro.`
  );
  const waUrl = `https://wa.me/556299032023?text=${waMsg}`;

  return (
    <TebasLayout>
      <div className="max-w-2xl mx-auto px-4 py-8 flex flex-col gap-8">

        {/* Header do resultado */}
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-2xl font-bold" style={{ color: TEXT }}>
              Pré-dimensionamento Estrutural
            </h1>
            <p className="text-sm mt-1" style={{ color: TEXT_DIM }}>
              {TIPO_LABEL[input.tipo]} · {input.area} m²/pav. · Vão {input.vao} m ·{' '}
              {input.concreto} · Gerado em {geradoEm}
            </p>
          </div>
          <div
            className="px-3 py-1.5 rounded-full text-xs font-semibold"
            style={{ background: 'rgba(34,197,94,0.12)', color: GREEN, border: `1px solid rgba(34,197,94,0.3)` }}
          >
            ✓ Calculado
          </div>
        </div>

        {/* KPI cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <KpiCard
            label="Laje"
            value={`${laje.espessura} cm`}
            sub={`Vigota + tavela`}
          />
          <KpiCard
            label="Viga"
            value={`${viga.largura}×${viga.altura} cm`}
            sub={`h útil = ${viga.dUtil} cm`}
          />
          <KpiCard
            label="Pilar"
            value={`${pilar.largura}×${pilar.altura} cm`}
            sub={`ρ = ${pilar.taxaArmadura}%`}
          />
          <KpiCard
            label="Sapata"
            value={`${sapata.lado.toFixed(2)} m`}
            sub={`h = ${sapata.altura.toFixed(2)} m`}
          />
        </div>

        {/* Tabs + conteúdo */}
        <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${BORDER}` }}>

          {/* Tab bar */}
          <div className="flex" style={{ background: SURFACE2, borderBottom: `1px solid ${BORDER}` }}>
            {TABS.map(tab => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className="flex-1 py-3 text-sm font-medium transition-all"
                style={{
                  color: activeTab === tab.key ? ORANGE : TEXT_DIM,
                  borderBottom: activeTab === tab.key ? `2px solid ${ORANGE}` : '2px solid transparent',
                  background: 'transparent',
                  cursor: 'pointer',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="p-5" style={{ background: SURFACE }}>

            {/* ── LAJE ── */}
            {activeTab === 'laje' && (
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold mb-3" style={{ color: TEXT }}>
                  {laje.tipo}
                </h3>
                <DataRow label="Espessura total (h)" value={`${laje.espessura} cm`} highlight />
                <DataRow label="Composição" value={laje.descricao} />
                <DataRow label="Capeamento mínimo" value={`${laje.capeamento} cm`} />
                <DataRow label="Armadura de distribuição" value={laje.malha} />
                <DataRow label="Escoramento" value={laje.escoramento} />
                <DataRow label="Sobrecarga de projeto" value={`${laje.sobrecarga} kN/m² (NBR 6120)`} />
                <DataRow label="h_mín calculado (L/25)" value={`${laje.hMinCalc} cm → adotado ${laje.espessura} cm`} />
                <NormaBox text={laje.norma} />
              </div>
            )}

            {/* ── VIGA ── */}
            {activeTab === 'viga' && (
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold mb-3" style={{ color: TEXT }}>
                  Viga principal — seção retangular
                </h3>
                <DataRow label="Seção transversal" value={`bw = ${viga.largura} cm · h = ${viga.altura} cm`} highlight />
                <DataRow label="Altura útil (d)" value={`${viga.dUtil} cm`} />
                <DataRow label="Vão estimado (√área)" value={`${viga.vaoEstimado} m`} />
                <DataRow label="Momento de cálculo (Md)" value={`${viga.momentoCalculo} kN.m`} />
                <DataRow label="As calculado" value={`${viga.asCalculado} cm²`} />
                <DataRow label="As mínimo (NBR Tab. 17.3)" value={`${viga.armaduraMin} cm²`} />
                <DataRow label="Armadura de tração adotada" value={viga.armaduraTracao} highlight />
                <DataRow label="Armadura transversal (estribos)" value={viga.estribos} />
                <NormaBox text={viga.norma} />
              </div>
            )}

            {/* ── PILAR ── */}
            {activeTab === 'pilar' && (
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold mb-3" style={{ color: TEXT }}>
                  Pilar — compressão com flexão (pré-dim.)
                </h3>
                <DataRow label="Seção transversal" value={`${pilar.largura} × ${pilar.altura} cm`} highlight />
                <DataRow label="Área de concreto (Ac)" value={`${(pilar.largura * pilar.altura).toFixed(0)} cm²`} />
                <DataRow label="Ac mínimo calculado" value={`${pilar.acMin} cm²`} />
                <DataRow label="Carga axial de cálculo (Nd)" value={`${pilar.cargaCalculo} kN`} />
                <DataRow label="Área tributária estimada" value={`${pilar.areaTributaria} m²`} />
                <DataRow label="Taxa de armadura (ρ)" value={`${pilar.taxaArmadura}% — NBR §15.7.2: 0,4–8%`} />
                <DataRow label="Armadura longitudinal" value={pilar.armadura} highlight />
                <DataRow
                  label="Estribos (regra prática)"
                  value={`φ6,3 mm · s ≤ menor dim. da seção, 20φ barra, 30 cm`}
                />
                <NormaBox text={pilar.norma} />
              </div>
            )}

            {/* ── SAPATA ── */}
            {activeTab === 'sapata' && (
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold mb-3" style={{ color: TEXT }}>
                  Sapata isolada — fundação rasa
                </h3>
                <DataRow label="Dimensões em planta" value={`${sapata.lado.toFixed(2)} × ${sapata.lado.toFixed(2)} m (quadrada)`} highlight />
                <DataRow label="Altura mínima (h)" value={`${sapata.altura.toFixed(2)} m`} highlight />
                <DataRow label="Área necessária" value={`${sapata.areaNecess} m²`} />
                <DataRow
                  label="Tensão admissível do solo"
                  value={`${sapata.sigmaAdm} kN/m² (NSPT = ${sapata.sptUsado})`}
                />
                <DataRow label="Armadura indicativa" value={sapata.armadura} />
                {!input.temSpt && (
                  <div
                    className="mt-3 p-3 rounded-lg text-xs"
                    style={{ background: 'rgba(244,122,32,0.08)', border: `1px solid rgba(244,122,32,0.25)`, color: TEXT_DIM }}
                  >
                    <strong style={{ color: ORANGE }}>⚠ SPT não informado.</strong>{' '}
                    Foi adotado NSPT = 5 (parâmetro conservador). Para dimensionamento preciso,
                    realize sondagem SPT conforme NBR 6484.
                  </div>
                )}
                <NormaBox text={sapata.norma} />
              </div>
            )}

            {/* ── VISUALIZAÇÃO 3D ── */}
            {activeTab === '3d' && aco && (
              <div className="flex flex-col gap-3">
                <p className="text-xs" style={{ color: TEXT_DIM }}>
                  Modelo esquemático gerado a partir dos dados de pré-dimensionamento.
                  Ative <strong style={{ color: TEXT }}>Concreto</strong> e/ou{' '}
                  <strong style={{ color: ORANGE }}>Aço</strong> para alternar as camadas.
                  Arraste para girar · scroll para zoom.
                </p>
                <ErrorBoundary3D
                  fallback={
                    <div
                      className="flex items-center justify-center rounded-xl flex-col gap-3"
                      style={{ height: 480, background: SURFACE2, color: TEXT_DIM, fontSize: 14 }}
                    >
                      <span style={{ fontSize: 32 }}>🏗</span>
                      <span>Visualização 3D indisponível neste dispositivo.</span>
                      <span style={{ fontSize: 12, color: 'rgba(241,245,249,0.3)' }}>
                        Consulte os dados nas demais abas.
                      </span>
                    </div>
                  }
                >
                  <Suspense
                    fallback={
                      <div
                        className="flex items-center justify-center rounded-xl"
                        style={{ height: 480, background: SURFACE2, color: TEXT_DIM, fontSize: 14 }}
                      >
                        Carregando visualizador 3D…
                      </div>
                    }
                  >
                    <Tebas3D resultado={resultado} aco={aco} />
                  </Suspense>
                </ErrorBoundary3D>
                <p className="text-xs" style={{ color: TEXT_DIM }}>
                  ⚠ Geometria simplificada para fins ilustrativos. Espaçamento de barras e
                  quantidade de estribos são aproximações do dimensionamento calculado.
                </p>
              </div>
            )}

            {/* ── RESUMO AÇO ── */}
            {activeTab === 'aco' && aco && (
              <div className="flex flex-col gap-5">
                <h3 className="font-semibold" style={{ color: TEXT }}>
                  Estimativa de aço — orçamento preliminar
                </h3>

                {/* KPIs: total + custo orientativo */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl" style={{ background: SURFACE2, border: `1px solid ${BORDER}` }}>
                    <span className="text-xs uppercase tracking-wide font-semibold" style={{ color: ORANGE }}>
                      Total estimado
                    </span>
                    <p className="text-xl font-bold mt-1" style={{ color: TEXT }}>
                      {aco.totalKg.toLocaleString('pt-BR')} kg
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: TEXT_DIM }}>
                      {aco.nPilares} pilares · {aco.nPavimentos} pav.
                    </p>
                  </div>
                  <div className="p-3 rounded-xl" style={{ background: SURFACE2, border: `1px solid ${BORDER}` }}>
                    <span className="text-xs uppercase tracking-wide font-semibold" style={{ color: ORANGE }}>
                      Custo orientativo
                    </span>
                    <p className="text-xl font-bold mt-1" style={{ color: TEXT }}>
                      R${' '}
                      {(aco.totalKg * 7).toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
                      {' – '}
                      {(aco.totalKg * 10).toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: TEXT_DIM }}>R$7–10/kg (mercado 2025)</p>
                  </div>
                </div>

                {/* Tabela por elemento × bitola */}
                <div>
                  <p className="text-xs uppercase tracking-wide mb-2 font-semibold" style={{ color: TEXT_DIM }}>
                    Por elemento
                  </p>
                  <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${BORDER}` }}>
                    <div className="flex items-center px-3 py-2 text-xs font-semibold gap-2"
                      style={{ background: SURFACE2, color: TEXT_DIM }}>
                      <span className="flex-1">Elemento / Bitola</span>
                      <span className="w-14 text-right">Comp. (m)</span>
                      <span className="w-14 text-right">Peso (kg)</span>
                    </div>
                    {aco.linhas.map((l, i) => (
                      <div key={i} className="flex items-start px-3 py-2 gap-2"
                        style={{
                          background: i % 2 === 0 ? SURFACE : 'rgba(255,255,255,0.02)',
                          borderTop: `1px solid ${BORDER}`,
                        }}>
                        <div className="flex-1 min-w-0">
                          <span className="text-xs font-medium block" style={{ color: TEXT }}>{l.elemento}</span>
                          <span className="text-xs font-semibold" style={{ color: ORANGE }}>{l.bitola}</span>
                          <span className="text-xs block mt-0.5" style={{ color: TEXT_DIM }}>{l.descricao}</span>
                        </div>
                        <span className="text-xs w-14 text-right pt-0.5" style={{ color: TEXT_DIM }}>
                          {l.comprimentoTotal.toLocaleString('pt-BR')}
                        </span>
                        <span className="text-xs font-semibold w-14 text-right pt-0.5" style={{ color: TEXT }}>
                          {l.pesoKg.toLocaleString('pt-BR')}
                        </span>
                      </div>
                    ))}
                    <div className="flex items-center px-3 py-2 gap-2 text-sm font-bold"
                      style={{ background: 'rgba(244,122,32,0.08)', borderTop: `1px solid ${BORDER}` }}>
                      <span className="flex-1" style={{ color: ORANGE }}>TOTAL</span>
                      <span className="w-14" />
                      <span className="w-14 text-right" style={{ color: ORANGE }}>
                        {aco.totalKg.toLocaleString('pt-BR')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Por bitola com barra de progresso */}
                <div>
                  <p className="text-xs uppercase tracking-wide mb-2 font-semibold" style={{ color: TEXT_DIM }}>
                    Por bitola
                  </p>
                  <div className="flex flex-col gap-3">
                    {aco.porBitola.map(b => (
                      <div key={b.bitola}>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="font-semibold" style={{ color: TEXT }}>{b.bitola}</span>
                          <span style={{ color: TEXT_DIM }}>
                            {b.pesoKg.toLocaleString('pt-BR')} kg · {b.percentual}%
                          </span>
                        </div>
                        <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: SURFACE2 }}>
                          <div className="h-full rounded-full transition-all duration-500"
                            style={{ width: `${b.percentual}%`, background: ORANGE }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Disclaimer aço */}
                <div className="p-3 rounded-lg text-xs leading-relaxed"
                  style={{ background: SURFACE2, border: `1px solid ${BORDER}`, color: TEXT_DIM }}>
                  ⚠ Estimativa para <strong style={{ color: TEXT }}>orçamento preliminar</strong>{' '}
                  com tolerância de ±30–40%. Assume {aco.nPilares} pilares, piso-a-piso 3,0 m,
                  malha de vigas simplificada (6×√área/pav.) e uma sapata por pilar.
                  Quantitativos reais dependem do projeto estrutural definitivo.
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Disclaimer */}
        <div
          className="p-4 rounded-xl text-sm leading-relaxed"
          style={{ background: 'rgba(244,122,32,0.06)', border: `1px solid rgba(244,122,32,0.15)`, color: TEXT_DIM }}
        >
          <strong style={{ color: ORANGE }}>⚠ Pré-dimensionamento para anteprojeto.</strong>{' '}
          Os valores acima são estimativas baseadas em fórmulas simplificadas das NBR 6118:2023,
          NBR 6122:2019 e NBR 6120:2019. Não substituem o projeto estrutural definitivo com
          ART assinada por engenheiro habilitado no CREA.
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            disabled
            className="flex-1 py-3 rounded-xl text-sm font-semibold"
            style={{
              background: SURFACE,
              border: `1px solid ${BORDER}`,
              color: 'rgba(241,245,249,0.3)',
              cursor: 'not-allowed',
            }}
            title="Em breve"
          >
            📥 Baixar PDF — em breve
          </button>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 rounded-xl text-sm font-semibold text-center transition-all no-underline"
            style={{ background: '#22C55E', color: '#fff' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#16a34a')}
            onMouseLeave={e => (e.currentTarget.style.background = '#22C55E')}
          >
            💬 Falar com engenheiro
          </a>

          <Link
            to="/tebas/calcular"
            className="flex-1 py-3 rounded-xl text-sm font-semibold text-center transition-all no-underline"
            style={{ background: SURFACE, border: `1px solid ${BORDER}`, color: TEXT_DIM }}
            onClick={() => sessionStorage.removeItem(TEBAS_RESULT_KEY)}
            onMouseEnter={e => (e.currentTarget.style.color = TEXT)}
            onMouseLeave={e => (e.currentTarget.style.color = TEXT_DIM)}
          >
            🔄 Novo cálculo
          </Link>
        </div>
      </div>
    </TebasLayout>
  );
}
