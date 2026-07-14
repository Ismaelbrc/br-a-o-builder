import { useState, useEffect, useMemo, useRef, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import Eyebrow from '@/components/Eyebrow';
import SectionIntro from '@/components/SectionIntro';
import { useSEO } from '@/hooks/useSEO';
import { Calculator, MessageCircle, ChevronRight, Ruler, Weight, Boxes, GraduationCap } from 'lucide-react';
import { analytics } from '@/lib/analytics';

// Tabela de pesos CA-50 por diâmetro (kg/m) — ABNT NBR 7480
const diametros = [
  { mm: 6.3, fracao: '1/4"', kgm: 0.245, label: '6,3 mm (1/4")' },
  { mm: 8.0, fracao: '5/16"', kgm: 0.395, label: '8,0 mm (5/16")' },
  { mm: 10.0, fracao: '3/8"', kgm: 0.617, label: '10,0 mm (3/8")' },
  { mm: 12.5, fracao: '1/2"', kgm: 0.963, label: '12,5 mm (1/2")' },
  { mm: 16.0, fracao: '5/8"', kgm: 1.578, label: '16,0 mm (5/8")' },
  { mm: 20.0, fracao: '3/4"', kgm: 2.466, label: '20,0 mm (3/4")' },
  { mm: 25.0, fracao: '1"', kgm: 3.853, label: '25,0 mm (1")' },
  { mm: 32.0, fracao: '1.1/4"', kgm: 6.313, label: '32,0 mm (1.1/4")' },
  { mm: 40.0, fracao: '1.1/2"', kgm: 9.865, label: '40,0 mm (1.1/2")' },
];

const diametrosCA60 = [
  { mm: 3.4, fracao: '—', kgm: 0.071, label: '3,4 mm' },
  { mm: 4.2, fracao: '—', kgm: 0.109, label: '4,2 mm' },
  { mm: 5.0, fracao: '—', kgm: 0.154, label: '5,0 mm' },
  { mm: 6.0, fracao: '—', kgm: 0.222, label: '6,0 mm' },
  { mm: 7.0, fracao: '—', kgm: 0.302, label: '7,0 mm' },
  { mm: 8.0, fracao: '—', kgm: 0.395, label: '8,0 mm' },
  { mm: 10.0, fracao: '—', kgm: 0.617, label: '10,0 mm' },
  { mm: 12.5, fracao: '—', kgm: 0.963, label: '12,5 mm' },
];

const telasSoldadas = [
  { tipo: 'LEVE', malha: '20 × 20', diametro: 3.4, largura: 2, comprimento: 3, areaPainel: 6, pesoKgPainel: 4.3, indicacao: 'Piso residencial leve, calçadas e pisos de garagem' },
  { tipo: 'MÉDIO', malha: '15 × 15', diametro: 3.4, largura: 2, comprimento: 3, areaPainel: 6, pesoKgPainel: 6.0, indicacao: 'Laje residencial, contrapisos e lajes de cobertura leve' },
  { tipo: 'REFORÇADO', malha: '15 × 15', diametro: 4.2, largura: 2, comprimento: 3, areaPainel: 6, pesoKgPainel: 9.0, indicacao: 'Laje comercial, pavimentos com maior carga e lajes de piso' },
  { tipo: 'PESADO', malha: '10 × 10', diametro: 4.2, largura: 2, comprimento: 3, areaPainel: 6, pesoKgPainel: 13.2, indicacao: 'Laje industrial, galpões, pisos de alto tráfego e cargas pesadas' },
] as const;

type TipoUso = 'leve' | 'residencial' | 'comercial' | 'industrial';
const indicacaoPorUso: Record<TipoUso, number> = { leve: 0, residencial: 1, comercial: 2, industrial: 3 };

// ── Helpers ──────────────────────────────────────────────────────────────────
const nf = (n: number, d = 2) => n.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: d });

const inputCls =
  'w-full border border-hairline rounded-lg px-3 py-2.5 text-sm bg-card text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange transition';
const labelCls = 'label-eyebrow text-brand-gray-medium mb-2 block';

// Chip de termo da fórmula (o "momento professor")
function Term({ value, unit, label, accent }: { value: ReactNode; unit?: string; label: string; accent?: boolean }) {
  return (
    <span className={`inline-flex flex-col items-center rounded-lg border px-3 py-1.5 min-w-[64px] ${accent ? 'border-brand-orange bg-brand-orange/5' : 'border-hairline bg-card'}`}>
      <span className={`font-display font-bold tabular-nums leading-none ${accent ? 'text-brand-orange text-lg' : 'text-brand-navy'}`}>
        {value}<span className="text-xs font-normal text-brand-gray-medium ml-0.5">{unit}</span>
      </span>
      <span className="label-eyebrow text-brand-gray-medium mt-1 text-[0.6rem]">{label}</span>
    </span>
  );
}

function Op({ children }: { children: ReactNode }) {
  return <span className="font-display text-xl text-brand-gray-medium px-0.5">{children}</span>;
}

// Card de conceito (modo professor)
function ConceptCard({ icon: Icon, term, children }: { icon: typeof Ruler; term: string; children: ReactNode }) {
  return (
    <div className="bg-card p-7 flex flex-col">
      <Icon className="w-7 h-7 text-brand-orange" strokeWidth={1.5} />
      <h3 className="font-display text-lg font-semibold text-brand-navy mt-5 tracking-tight">{term}</h3>
      <p className="text-brand-gray-medium text-sm leading-relaxed mt-2">{children}</p>
    </div>
  );
}

export default function CalculadoraVergalhao() {
  useSEO({
    title: 'Tabela de Peso do Vergalhão CA-50/CA-60 + Calculadora Grátis | BR Aço',
    description: 'Tabela completa de peso do vergalhão CA-50 e CA-60 por bitola (ABNT NBR 7480) + calculadora grátis de peso, quantidade de barras e tela soldada. Goiânia e Goiás.',
    canonical: 'https://grupobraco.com.br/calculadora-vergalhao',
    keywords: 'tabela de peso do vergalhão, calculadora vergalhão, peso vergalhão CA-50, calcular vergalhão laje, vergalhão kg por metro, ABNT NBR 7480',
  });

  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Calculadora de Vergalhão BR Aço",
      "url": "https://grupobraco.com.br/calculadora-vergalhao",
      "description": "Calcule a quantidade e o peso de vergalhão para laje, pilar ou viga. Calculadora gratuita para CA-50 e CA-60.",
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "Web",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "BRL" },
      "provider": { "@type": "Organization", "name": "BR Aço – Casa Brasileira de Aço", "url": "https://grupobraco.com.br" }
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'calc-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => { document.getElementById('calc-schema')?.remove(); };
  }, []);

  // ── Calc 1: Peso por quantidade ──
  const [qtdBarras, setQtdBarras] = useState('50');
  const [compBarra, setCompBarra] = useState('12');
  const [grauPeso, setGrauPeso] = useState<'CA-50' | 'CA-60'>('CA-50');
  const [diametroPeso, setDiametroPeso] = useState('10');
  const tabelaPeso = grauPeso === 'CA-50' ? diametros : diametrosCA60;

  // ── Calc 2: Quantidade por peso ──
  const [pesoEntrada, setPesoEntrada] = useState('1000');
  const [grauQtd, setGrauQtd] = useState<'CA-50' | 'CA-60'>('CA-50');
  const [diametroQtd, setDiametroQtd] = useState('10');
  const tabelaQtd = grauQtd === 'CA-50' ? diametros : diametrosCA60;

  // ── Calc 3: Tela soldada ──
  const [larguraTela, setLarguraTela] = useState('5');
  const [comprimentoTela, setComprimentoTela] = useState('8');
  const [tipoUso, setTipoUso] = useState<TipoUso>('residencial');

  // ── Resultados ao vivo ──
  const resultadoPeso = useMemo(() => {
    const qtd = parseFloat(qtdBarras), comp = parseFloat(compBarra), d = parseFloat(diametroPeso);
    if (!qtd || !comp || !d) return null;
    const diam = tabelaPeso.find(x => x.mm === d); const kgm = diam?.kgm ?? 0;
    if (!kgm) return null;
    return { quantidade: qtd, comprimento: comp, diametro: diam?.label ?? '', kgm, pesoTotal: Math.round(qtd * comp * kgm * 100) / 100 };
  }, [qtdBarras, compBarra, diametroPeso, grauPeso]);

  const resultadoQtd = useMemo(() => {
    const peso = parseFloat(pesoEntrada), d = parseFloat(diametroQtd);
    if (!peso || !d) return null;
    const diam = tabelaQtd.find(x => x.mm === d); const kgm = diam?.kgm ?? 0;
    if (!kgm) return null;
    const kgBarra = kgm * 12;
    return { barras: Math.ceil(peso / kgBarra), metrosLineares: Math.ceil(peso / kgm), diametro: diam?.label ?? '', kgm, kgBarra: Math.round(kgBarra * 1000) / 1000 };
  }, [pesoEntrada, diametroQtd, grauQtd]);

  const resultadoTela = useMemo(() => {
    const L = parseFloat(larguraTela), C = parseFloat(comprimentoTela);
    if (!L || !C) return null;
    const area = L * C, areaComTranspasse = area * 1.10, tipoIdx = indicacaoPorUso[tipoUso];
    const tela = telasSoldadas[tipoIdx]; const paineis = Math.ceil(areaComTranspasse / tela.areaPainel);
    return { area: Math.round(area * 100) / 100, areaComTranspasse: Math.round(areaComTranspasse * 100) / 100, tipoIdx, paineis, pesoTotal: Math.round(paineis * tela.pesoKgPainel * 10) / 10, L, C };
  }, [larguraTela, comprimentoTela, tipoUso]);

  // ── Analytics: dispara calculatorUse uma vez por calculadora ao gerar resultado válido ──
  const firedPeso = useRef(false), firedQtd = useRef(false), firedTela = useRef(false);
  useEffect(() => { if (resultadoPeso && !firedPeso.current) { firedPeso.current = true; analytics.calculatorUse('peso_vergalhao'); } }, [resultadoPeso]);
  useEffect(() => { if (resultadoQtd && !firedQtd.current) { firedQtd.current = true; analytics.calculatorUse('quantidade_barras'); } }, [resultadoQtd]);
  useEffect(() => { if (resultadoTela && !firedTela.current) { firedTela.current = true; analytics.calculatorUse('tela_soldada'); } }, [resultadoTela]);

  const setGrau = (which: 'peso' | 'qtd', value: 'CA-50' | 'CA-60') => {
    const firstMm = String((value === 'CA-50' ? diametros : diametrosCA60)[value === 'CA-50' ? 2 : 6].mm);
    if (which === 'peso') { setGrauPeso(value); setDiametroPeso(firstMm); }
    else { setGrauQtd(value); setDiametroQtd(firstMm); }
  };

  const telaSel = resultadoTela ? telasSoldadas[resultadoTela.tipoIdx] : null;
  const whatsappMsgTela = resultadoTela && telaSel
    ? encodeURIComponent(
        `Olá! Calculei a necessidade de tela soldada para uma laje/piso de ${resultadoTela.area} m².\n` +
        `Malha sugerida: ${telaSel.tipo} (${telaSel.malha} cm — ø${telaSel.diametro} mm)\n` +
        `Quantidade: ${resultadoTela.paineis} painéis — ${resultadoTela.pesoTotal} kg\nGostaria de solicitar um orçamento.`)
    : encodeURIComponent('Olá! Gostaria de solicitar um orçamento de tela soldada / malha pop.');

  // Espessura visual da barra ∝ diâmetro selecionado
  const dPeso = parseFloat(diametroPeso) || 10;
  const barH = Math.max(8, Math.min(46, dPeso * 1.15));

  return (
    <Layout>
      {/* ══ HERO ══ */}
      <section className="relative bg-metal overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-[0.10] pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <nav className="flex items-center gap-2 label-eyebrow text-white/40 mb-10" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Calculadora de Vergalhão</span>
          </nav>
          <Eyebrow tone="light">Ferramenta grátis + guia</Eyebrow>
          <h1 className="text-display-xl text-white mt-6 max-w-[18ch]">
            Calcule o aço da sua obra — e <span className="text-primary">entenda cada número.</span>
          </h1>
          <p className="text-lg text-white/75 mt-6 max-w-2xl">
            Cálculo ao vivo de peso, quantidade de barras e tela soldada — com a fórmula montada na sua frente,
            passo a passo. Para CA-50 e CA-60, conforme a ABNT NBR 7480.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {[['#calc-peso', 'Peso do aço'], ['#calc-qtd', 'Quantidade de barras'], ['#calc-tela', 'Tela / laje'], ['#tabela', 'Tabela de peso']].map(([href, txt]) => (
              <a key={href} href={href} className="label-eyebrow text-white/70 border border-white/20 rounded-full px-4 py-2 hover:border-brand-orange hover:text-white transition-colors">
                {txt}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ENTENDA (modo professor) ══ */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionIntro
            eyebrow="Antes de calcular"
            title="Três conceitos que todo cálculo de aço usa."
            description="Domine isto e nenhum orçamento de vergalhão vai te surpreender de novo."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline border border-hairline rounded-2xl overflow-hidden">
            <ConceptCard icon={Ruler} term="Bitola (ø)">
              É o diâmetro da barra, em milímetros. Quanto maior a bitola, mais resistente e mais pesada a barra.
              A norma define bitolas padrão: 6,3 · 8,0 · 10,0 · 12,5 · 16,0 mm…
            </ConceptCard>
            <ConceptCard icon={Weight} term="Massa linear (kg/m)">
              Cada bitola pesa um valor fixo por metro, definido pela <strong className="text-brand-navy">ABNT NBR 7480</strong>.
              Ex.: uma barra de 10,0 mm pesa <strong className="text-brand-navy">0,617 kg</strong> a cada metro. É o coração de todo cálculo.
            </ConceptCard>
            <ConceptCard icon={Boxes} term="Barra de 12 m">
              O vergalhão é vendido em barras padrão de <strong className="text-brand-navy">12 metros</strong>. Por isso, no fim,
              convertemos metros e peso em "quantas barras de 12 m" você precisa comprar.
            </ConceptCard>
          </div>
        </div>
      </section>

      {/* ══ CALCULADORAS ══ */}
      <section className="pb-16 sm:pb-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">

          {/* ── CALC 1: PESO ── */}
          <div id="calc-peso" className="scroll-mt-24 rounded-2xl border border-hairline overflow-hidden">
            <div className="bg-secondary border-b border-hairline px-6 sm:px-8 py-5">
              <Eyebrow tone="orange">Cálculo 01</Eyebrow>
              <h2 className="font-display text-2xl font-bold text-brand-navy mt-2">Peso do aço</h2>
              <p className="text-sm text-brand-gray-medium mt-1">Quanto pesa um lote de barras? Informe quantidade, comprimento e bitola.</p>
            </div>

            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className={labelCls}>Quantidade</label>
                  <input type="number" min="1" step="1" value={qtdBarras} onChange={e => setQtdBarras(e.target.value)} className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Comprimento (m)</label>
                  <input type="number" min="0.1" step="0.1" value={compBarra} onChange={e => setCompBarra(e.target.value)} className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Grau</label>
                  <select value={grauPeso} onChange={e => setGrau('peso', e.target.value as 'CA-50' | 'CA-60')} className={inputCls}>
                    <option value="CA-50">CA-50</option>
                    <option value="CA-60">CA-60</option>
                  </select>
                </div>
                <div>
                  <label className={labelCls}>Bitola (ø)</label>
                  <select value={diametroPeso} onChange={e => setDiametroPeso(e.target.value)} className={inputCls}>
                    {tabelaPeso.map(d => <option key={d.mm} value={d.mm}>{d.label} — {d.kgm} kg/m</option>)}
                  </select>
                </div>
              </div>

              {/* Visual reativo: barra cuja espessura escala com a bitola */}
              <div className="relative mt-6 rounded-xl bg-metal overflow-hidden h-28 flex items-center px-8">
                <div className="absolute inset-0 bg-blueprint opacity-[0.12]" aria-hidden="true" />
                <div className="relative w-full flex items-center gap-1">
                  <div className="flex-1 rounded-full bg-brand-orange transition-all duration-300" style={{ height: `${barH}px` }} />
                </div>
                <span className="absolute left-8 top-3 label-eyebrow text-white/55">ø {nf(dPeso, 1)} mm · {resultadoPeso ? nf(resultadoPeso.kgm, 3) : '—'} kg/m</span>
              </div>

              {/* Resultado ao vivo + fórmula montada (momento professor) */}
              {resultadoPeso ? (
                <div className="mt-6 rounded-xl bg-brand-navy p-6">
                  <div className="flex flex-wrap items-end gap-x-8 gap-y-4">
                    <div>
                      <p className="font-display text-5xl font-bold text-brand-orange tabular-nums leading-none">{nf(resultadoPeso.pesoTotal)}<span className="text-2xl ml-1">kg</span></p>
                      <p className="label-eyebrow text-white/50 mt-2">Peso total</p>
                    </div>
                    <div className="flex-1 min-w-[260px]">
                      <p className="label-eyebrow text-white/40 mb-3">A conta, passo a passo</p>
                      <div className="flex flex-wrap items-center gap-2">
                        <Term value={nf(resultadoPeso.quantidade, 0)} label="barras" />
                        <Op>×</Op>
                        <Term value={nf(resultadoPeso.comprimento, 1)} unit="m" label="compr." />
                        <Op>×</Op>
                        <Term value={nf(resultadoPeso.kgm, 3)} unit="kg/m" label="massa" />
                        <Op>=</Op>
                        <Term value={nf(resultadoPeso.pesoTotal)} unit="kg" label="total" accent />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="mt-6 text-sm text-brand-gray-medium">Preencha os campos para ver o resultado ao vivo.</p>
              )}
            </div>
          </div>

          {/* ── CALC 2: QUANTIDADE ── */}
          <div id="calc-qtd" className="scroll-mt-24 rounded-2xl border border-hairline overflow-hidden">
            <div className="bg-secondary border-b border-hairline px-6 sm:px-8 py-5">
              <Eyebrow tone="orange">Cálculo 02</Eyebrow>
              <h2 className="font-display text-2xl font-bold text-brand-navy mt-2">Quantidade de barras</h2>
              <p className="text-sm text-brand-gray-medium mt-1">Tem o peso total em kg? Descubra quantas barras de 12 m comprar.</p>
            </div>

            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className={labelCls}>Peso total (kg)</label>
                  <input type="number" min="0.1" step="1" value={pesoEntrada} onChange={e => setPesoEntrada(e.target.value)} className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Grau</label>
                  <select value={grauQtd} onChange={e => setGrau('qtd', e.target.value as 'CA-50' | 'CA-60')} className={inputCls}>
                    <option value="CA-50">CA-50</option>
                    <option value="CA-60">CA-60</option>
                  </select>
                </div>
                <div>
                  <label className={labelCls}>Bitola (ø)</label>
                  <select value={diametroQtd} onChange={e => setDiametroQtd(e.target.value)} className={inputCls}>
                    {tabelaQtd.map(d => <option key={d.mm} value={d.mm}>{d.label} — {d.kgm} kg/m</option>)}
                  </select>
                </div>
              </div>

              {resultadoQtd ? (
                <div className="mt-6 rounded-xl bg-brand-navy p-6">
                  <div className="flex flex-wrap items-end gap-x-8 gap-y-4">
                    <div className="flex gap-8">
                      <div>
                        <p className="font-display text-5xl font-bold text-brand-orange tabular-nums leading-none">{nf(resultadoQtd.barras, 0)}</p>
                        <p className="label-eyebrow text-white/50 mt-2">barras de 12 m</p>
                      </div>
                      <div>
                        <p className="font-display text-5xl font-bold text-white tabular-nums leading-none">{nf(resultadoQtd.metrosLineares, 0)}</p>
                        <p className="label-eyebrow text-white/50 mt-2">metros lineares</p>
                      </div>
                    </div>
                    <div className="flex-1 min-w-[260px]">
                      <p className="label-eyebrow text-white/40 mb-3">A conta, passo a passo</p>
                      <div className="flex flex-wrap items-center gap-2">
                        <Term value={nf(parseFloat(pesoEntrada))} unit="kg" label="peso" />
                        <Op>÷</Op>
                        <Term value={nf(resultadoQtd.kgBarra)} unit="kg" label="por barra" />
                        <Op>=</Op>
                        <Term value={nf(resultadoQtd.barras, 0)} label="barras" accent />
                      </div>
                      <p className="label-eyebrow text-white/35 mt-3 text-[0.6rem]">arredondado para cima · 1 barra = 12 m × {nf(resultadoQtd.kgm, 3)} kg/m</p>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="mt-6 text-sm text-brand-gray-medium">Preencha os campos para ver o resultado ao vivo.</p>
              )}
            </div>
          </div>

          {/* ── CALC 3: TELA SOLDADA ── */}
          <div id="calc-tela" className="scroll-mt-24 rounded-2xl border border-hairline overflow-hidden">
            <div className="bg-secondary border-b border-hairline px-6 sm:px-8 py-5">
              <Eyebrow tone="orange">Cálculo 03</Eyebrow>
              <h2 className="font-display text-2xl font-bold text-brand-navy mt-2">Tela soldada para laje e piso</h2>
              <p className="text-sm text-brand-gray-medium mt-1">Informe as dimensões e o uso — sugerimos a malha ideal e os painéis (com 10% de transpasse).</p>
            </div>

            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className={labelCls}>Largura (m)</label>
                  <input type="number" min="0.1" step="0.1" value={larguraTela} onChange={e => setLarguraTela(e.target.value)} className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Comprimento (m)</label>
                  <input type="number" min="0.1" step="0.1" value={comprimentoTela} onChange={e => setComprimentoTela(e.target.value)} className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Tipo de uso</label>
                  <select value={tipoUso} onChange={e => setTipoUso(e.target.value as TipoUso)} className={inputCls}>
                    <option value="leve">Piso leve / garagem</option>
                    <option value="residencial">Laje residencial</option>
                    <option value="comercial">Laje comercial</option>
                    <option value="industrial">Laje industrial</option>
                  </select>
                </div>
              </div>

              {resultadoTela && telaSel && (
                <>
                  {/* Visual reativo: retângulo da laje proporcional */}
                  <div className="relative mt-6 rounded-xl bg-metal overflow-hidden p-6 flex items-center justify-center min-h-[180px]">
                    <div className="absolute inset-0 bg-blueprint opacity-[0.12]" aria-hidden="true" />
                    <div className="relative">
                      <div
                        className="border-2 border-brand-orange bg-brand-orange/10 transition-all duration-300"
                        style={{
                          width: `${Math.min(320, Math.max(60, resultadoTela.L * 26))}px`,
                          height: `${Math.min(150, Math.max(40, resultadoTela.C * 26))}px`,
                          backgroundImage: 'linear-gradient(to right, rgba(242,116,15,.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(242,116,15,.35) 1px, transparent 1px)',
                          backgroundSize: '14px 14px',
                        }}
                      />
                      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 label-eyebrow text-white/55 whitespace-nowrap">{nf(resultadoTela.L, 1)} × {nf(resultadoTela.C, 1)} m = {nf(resultadoTela.area)} m²</span>
                    </div>
                  </div>

                  <div className="mt-8 rounded-xl bg-brand-navy p-6">
                    <div className="flex flex-wrap items-end gap-x-8 gap-y-4">
                      <div className="flex gap-8">
                        <div>
                          <p className="font-display text-5xl font-bold text-brand-orange tabular-nums leading-none">{resultadoTela.paineis}</p>
                          <p className="label-eyebrow text-white/50 mt-2">painéis {telaSel.tipo}</p>
                        </div>
                        <div>
                          <p className="font-display text-5xl font-bold text-white tabular-nums leading-none">{nf(resultadoTela.pesoTotal, 1)}<span className="text-2xl ml-1">kg</span></p>
                          <p className="label-eyebrow text-white/50 mt-2">peso total</p>
                        </div>
                      </div>
                      <div className="flex-1 min-w-[260px]">
                        <p className="label-eyebrow text-white/40 mb-3">A conta, passo a passo</p>
                        <div className="flex flex-wrap items-center gap-2">
                          <Term value={nf(resultadoTela.area)} unit="m²" label="área" />
                          <Op>×</Op>
                          <Term value="1,10" label="transpasse" />
                          <Op>÷</Op>
                          <Term value="6" unit="m²" label="painel" />
                          <Op>=</Op>
                          <Term value={resultadoTela.paineis} label="painéis" accent />
                        </div>
                        <p className="label-eyebrow text-white/35 mt-3 text-[0.6rem]">malha {telaSel.malha} cm · ø{telaSel.diametro} mm — {telaSel.indicacao}</p>
                      </div>
                    </div>
                    <a
                      href={`https://wa.me/556291489786?text=${whatsappMsgTela}`}
                      target="_blank" rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 bg-brand-whatsapp hover:bg-brand-whatsapp-hover text-white font-semibold rounded-lg px-6 py-3 text-sm transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Orçar {resultadoTela.paineis} painéis {telaSel.tipo}
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══ TABELA ABNT (interativa) ══ */}
      <section id="tabela" className="scroll-mt-24 py-16 sm:py-20 bg-secondary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <SectionIntro
            eyebrow="Referência · ABNT NBR 7480"
            title="Tabela de peso do vergalhão CA-50."
            description="Clique em qualquer bitola para jogá-la direto na calculadora de peso acima."
          />
          <div className="mt-10 rounded-2xl border border-hairline overflow-hidden bg-card">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-brand-navy">
                    <th className="px-5 py-4 text-left label-eyebrow text-white/90">Bitola</th>
                    <th className="px-5 py-4 text-left label-eyebrow text-white/60">Fração</th>
                    <th className="px-5 py-4 text-right label-eyebrow text-white/60">kg/m</th>
                    <th className="px-5 py-4 text-right label-eyebrow text-white/60">Barra 12 m</th>
                    <th className="px-5 py-4 text-right label-eyebrow text-white/60">Barras/ton</th>
                  </tr>
                </thead>
                <tbody>
                  {diametros.map((d) => {
                    const ativo = grauPeso === 'CA-50' && parseFloat(diametroPeso) === d.mm;
                    return (
                      <tr
                        key={d.mm}
                        onClick={() => { setGrau('peso', 'CA-50'); setDiametroPeso(String(d.mm)); document.getElementById('calc-peso')?.scrollIntoView({ behavior: 'smooth' }); }}
                        className={`border-b border-hairline last:border-b-0 cursor-pointer transition-colors ${ativo ? 'bg-brand-orange/10' : 'hover:bg-secondary'}`}
                      >
                        <td className="px-5 py-3 font-display font-semibold text-brand-navy">{nf(d.mm, 1)} mm</td>
                        <td className="px-5 py-3 text-brand-gray-medium text-spec">{d.fracao}</td>
                        <td className="px-5 py-3 text-right text-spec text-brand-navy">{d.kgm.toFixed(3)}</td>
                        <td className="px-5 py-3 text-right text-spec text-brand-navy">{(d.kgm * 12).toFixed(2)}</td>
                        <td className="px-5 py-3 text-right text-spec text-brand-gray-medium">{Math.round(1000 / (d.kgm * 12))}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Tabela de telas */}
          <div className="mt-8 rounded-2xl border border-hairline overflow-hidden bg-card">
            <div className="px-5 py-4 border-b border-hairline">
              <span className="label-eyebrow text-brand-gray-medium">Telas soldadas — painel padrão 2,0 × 3,0 m (6 m²)</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-brand-navy">
                    <th className="px-5 py-4 text-left label-eyebrow text-white/90">Tipo</th>
                    <th className="px-5 py-4 text-center label-eyebrow text-white/60">Malha (cm)</th>
                    <th className="px-5 py-4 text-center label-eyebrow text-white/60">ø (mm)</th>
                    <th className="px-5 py-4 text-right label-eyebrow text-white/60">kg/painel</th>
                  </tr>
                </thead>
                <tbody>
                  {telasSoldadas.map((t, i) => (
                    <tr key={t.tipo} className="border-b border-hairline last:border-b-0">
                      <td className="px-5 py-3 font-display font-semibold text-brand-navy">{t.tipo}</td>
                      <td className="px-5 py-3 text-center text-spec text-brand-gray-medium">{t.malha}</td>
                      <td className="px-5 py-3 text-center text-spec text-brand-navy">{t.diametro}</td>
                      <td className="px-5 py-3 text-right text-spec font-semibold text-brand-navy">{t.pesoKgPainel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative overflow-hidden bg-brand-orange rounded-2xl p-10 md:p-14 text-center">
            <div className="absolute inset-0 bg-blueprint opacity-[0.10] pointer-events-none" aria-hidden="true" />
            <div className="relative">
              <span className="inline-flex items-center gap-2.5 label-eyebrow text-white/80">
                <span className="h-px w-6 bg-white/50" aria-hidden="true" />
                Resposta em até 2h
              </span>
              <h2 className="text-display-md text-white mt-5">Já calculou? Peça seu orçamento.</h2>
              <p className="text-white/85 mt-4 max-w-xl mx-auto">
                Envie o resultado da calculadora ou o projeto estrutural e receba o orçamento certinho — a BR Aço faz o quantitativo completo de graça.
              </p>
              <a
                href="https://wa.me/556291489786?text=Ol%C3%A1!%20Usei%20a%20calculadora%20do%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20vergalh%C3%A3o."
                target="_blank" rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 bg-white text-brand-orange font-semibold rounded-lg px-8 py-4 hover:bg-white/90 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Solicitar Orçamento no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CONTEÚDO / PROFESSOR ══ */}
      <section className="pb-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-6 h-6 text-brand-orange" strokeWidth={1.5} />
            <h2 className="font-display text-2xl font-bold text-brand-navy tracking-tight">Como usar (e por que funciona)</h2>
          </div>
          <div className="mt-6 space-y-5 text-brand-gray-medium leading-relaxed">
            <p>
              Esta calculadora foi feita para engenheiros, mestres de obra e construtores de Goiânia e Goiás estimarem
              rapidamente o aço de um projeto — e, de quebra, <strong className="text-brand-navy">entenderem a conta por trás</strong>.
              Tudo é calculado ao vivo: mexa nos campos e veja a fórmula se montar.
            </p>
            <p>
              <strong className="text-brand-navy">Peso do aço:</strong> multiplica a quantidade de barras pelo comprimento e pela
              massa linear (kg/m) da bitola, conforme a ABNT NBR 7480. <strong className="text-brand-navy">Quantidade de barras:</strong> divide
              o peso total pelo peso de uma barra de 12 m. <strong className="text-brand-navy">Tela soldada:</strong> usa a área da laje + 10%
              de transpasse, dividida pela área do painel (6 m²).
            </p>
            <p>
              <strong className="text-brand-navy">Importante:</strong> é uma estimativa para planejamento. O quantitativo definitivo de compra
              deve sair do projeto estrutural assinado pelo engenheiro responsável — e a BR Aço faz esse quantitativo completo gratuitamente.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
