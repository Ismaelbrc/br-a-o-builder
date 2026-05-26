import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { useSEO } from '@/hooks/useSEO';
import { Calculator, MessageCircle, ChevronRight, CheckCircle2 } from 'lucide-react';
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

// ── Telas Soldadas / Malha Pop — Gerdau ──
const telasSoldadas = [
  {
    tipo: 'LEVE',
    malha: '20 × 20',
    diametro: 3.4,
    largura: 2,
    comprimento: 3,
    areaPainel: 6,
    pesoKgPainel: 4.3,
    indicacao: 'Piso residencial leve, calçadas e pisos de garagem',
    cor: 'bg-green-50 border-green-300',
    badge: 'text-green-700 bg-green-100',
  },
  {
    tipo: 'MÉDIO',
    malha: '15 × 15',
    diametro: 3.4,
    largura: 2,
    comprimento: 3,
    areaPainel: 6,
    pesoKgPainel: 6.0,
    indicacao: 'Laje residencial, contrapisos e lajes de cobertura leve',
    cor: 'bg-blue-50 border-blue-300',
    badge: 'text-blue-700 bg-blue-100',
  },
  {
    tipo: 'REFORÇADO',
    malha: '15 × 15',
    diametro: 4.2,
    largura: 2,
    comprimento: 3,
    areaPainel: 6,
    pesoKgPainel: 9.0,
    indicacao: 'Laje comercial, pavimentos com maior carga e lajes de piso',
    cor: 'bg-orange-50 border-orange-300',
    badge: 'text-orange-700 bg-orange-100',
  },
  {
    tipo: 'PESADO',
    malha: '10 × 10',
    diametro: 4.2,
    largura: 2,
    comprimento: 3,
    areaPainel: 6,
    pesoKgPainel: 13.2,
    indicacao: 'Laje industrial, galpões, pisos de alto tráfego e cargas pesadas',
    cor: 'bg-red-50 border-red-300',
    badge: 'text-red-700 bg-red-100',
  },
] as const;

type TipoUso = 'leve' | 'residencial' | 'comercial' | 'industrial';

const indicacaoPorUso: Record<TipoUso, number> = {
  leve:        0, // LEVE
  residencial: 1, // MÉDIO
  comercial:   2, // REFORÇADO
  industrial:  3, // PESADO
};

interface ResultadoTela {
  area: number;
  areaComTranspasse: number;
  tipoIdx: number;
  paineis: number;
  pesoTotal: number;
}

// CA-60 (vergalhão liso ou tela soldada)
const diametrosCA60 = [
  { mm: 3.4, kgm: 0.071, label: '3,4 mm' },
  { mm: 4.2, kgm: 0.109, label: '4,2 mm' },
  { mm: 5.0, kgm: 0.154, label: '5,0 mm' },
  { mm: 6.0, kgm: 0.222, label: '6,0 mm' },
  { mm: 7.0, kgm: 0.302, label: '7,0 mm' },
  { mm: 8.0, kgm: 0.395, label: '8,0 mm' },
  { mm: 10.0, kgm: 0.617, label: '10,0 mm' },
  { mm: 12.5, kgm: 0.963, label: '12,5 mm' },
];

interface ResultadoPeso {
  quantidade: number;
  comprimento: number;
  diametro: string;
  kgm: number;
  pesoTotal: number;
}

export default function CalculadoraVergalhao() {
  useSEO({
    title: 'Calculadora de Vergalhão Online | Calcule Peso e Quantidade | BR Aço',
    description: 'Calcule a quantidade e o peso de vergalhão para laje, pilar ou viga gratuitamente. Calculadora online para CA-50 e CA-60 com tabela ABNT NBR 7480. Goiânia e Goiás.',
    canonical: 'https://grupobraco.com.br/calculadora-vergalhao',
    keywords: 'calculadora vergalhão, calcular vergalhão laje, calculadora aço construção, quanto vergalhão para laje, peso vergalhão por metro',
  });

  // Inject Calculator schema
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
      "provider": {
        "@type": "Organization",
        "name": "BR Aço – Casa Brasileira de Aço",
        "url": "https://grupobraco.com.br"
      }
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'calc-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => { document.getElementById('calc-schema')?.remove(); };
  }, []);

  // ── Calculadora 1: Tela Soldada / Malha Pop ──
  const [larguraTela, setLarguraTela] = useState('');
  const [comprimentoTela, setComprimentoTela] = useState('');
  const [tipoUso, setTipoUso] = useState<TipoUso>('residencial');
  const [resultadoTela, setResultadoTela] = useState<ResultadoTela | null>(null);

  // ── Calculadora 2: Peso por quantidade ──
  const [qtdBarras, setQtdBarras] = useState('');
  const [compBarra, setCompBarra] = useState('12');
  const [diametroPeso, setDiametroPeso] = useState('10.0');
  const [grauPeso, setGrauPeso] = useState<'CA-50' | 'CA-60'>('CA-50');
  const [resultadoPeso, setResultadoPeso] = useState<ResultadoPeso | null>(null);

  // ── Calculadora 3: Quantidade por peso ──
  const [pesoEntrada, setPesoEntrada] = useState('');
  const [diametroQtd, setDiametroQtd] = useState('10.0');
  const [grauQtd, setGrauQtd] = useState<'CA-50' | 'CA-60'>('CA-50');
  const [resultadoQtd, setResultadoQtd] = useState<{ barras: number; metrosLineares: number; diametro: string; kgm: number; kgBarra: number } | null>(null);

  const tabelaPeso = grauPeso === 'CA-50' ? diametros : diametrosCA60;
  const tabelaQtd  = grauQtd  === 'CA-50' ? diametros : diametrosCA60;

  const calcularTela = () => {
    const L = parseFloat(larguraTela);
    const C = parseFloat(comprimentoTela);
    if (!L || !C) return;

    const area = L * C;
    const areaComTranspasse = area * 1.10; // +10% para transpasse
    const tipoIdx = indicacaoPorUso[tipoUso];
    const tela = telasSoldadas[tipoIdx];
    const paineis = Math.ceil(areaComTranspasse / tela.areaPainel);
    const pesoTotal = Math.round(paineis * tela.pesoKgPainel * 10) / 10;

    setResultadoTela({
      area: Math.round(area * 100) / 100,
      areaComTranspasse: Math.round(areaComTranspasse * 100) / 100,
      tipoIdx,
      paineis,
      pesoTotal,
    });
    analytics.calculatorUse('tela_soldada');
  };

  const calcularPeso = () => {
    const qtd = parseFloat(qtdBarras);
    const comp = parseFloat(compBarra);
    const d = parseFloat(diametroPeso);
    if (!qtd || !comp || !d) return;

    const diam = tabelaPeso.find(x => x.mm === d);
    const kgm = diam?.kgm ?? 0;
    const pesoTotal = qtd * comp * kgm;

    setResultadoPeso({
      quantidade: qtd,
      comprimento: comp,
      diametro: diam?.label ?? '',
      kgm,
      pesoTotal: Math.round(pesoTotal * 100) / 100,
    });
    analytics.calculatorUse('peso_vergalhao');
  };

  const calcularQtd = () => {
    const peso = parseFloat(pesoEntrada);
    const d = parseFloat(diametroQtd);
    if (!peso || !d) return;

    const diam = tabelaQtd.find(x => x.mm === d);
    const kgm = diam?.kgm ?? 0;
    if (!kgm) return;

    const kgBarra = kgm * 12; // peso de 1 barra de 12 m
    const barras = Math.ceil(peso / kgBarra);
    const metrosLineares = Math.ceil(peso / kgm);

    setResultadoQtd({ barras, metrosLineares, diametro: diam?.label ?? '', kgm, kgBarra: Math.round(kgBarra * 1000) / 1000 });
    analytics.calculatorUse('quantidade_barras');
  };

  const whatsappMsgTela = resultadoTela
    ? encodeURIComponent(
        `[src:calculadora] Olá! Calculei a necessidade de tela soldada para uma laje/piso de ${resultadoTela.area} m².\n` +
        `Malha sugerida: ${telasSoldadas[resultadoTela.tipoIdx].tipo} (${telasSoldadas[resultadoTela.tipoIdx].malha} cm — ø${telasSoldadas[resultadoTela.tipoIdx].diametro} mm)\n` +
        `Quantidade: ${resultadoTela.paineis} painéis — ${resultadoTela.pesoTotal} kg\n` +
        `Gostaria de solicitar um orçamento.`
      )
    : encodeURIComponent(`[src:calculadora] Olá! Gostaria de solicitar um orçamento de tela soldada / malha pop.`);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-brand-navy py-16">
        <div className="max-w-4xl mx-auto px-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Calculadora de Vergalhão</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-brand-orange/20 flex items-center justify-center">
              <Calculator className="w-6 h-6 text-brand-orange" />
            </div>
            <span className="inline-block bg-brand-orange/20 text-brand-orange px-3 py-1 rounded-full text-sm font-medium">
              Gratuito
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Calculadora de Vergalhão Online
          </h1>
          <p className="text-gray-300 mt-4 text-lg max-w-2xl">
            Calcule o peso e a quantidade de vergalhão CA-50 ou CA-60 para laje, pilar, viga ou qualquer elemento estrutural. Grátis, sem cadastro.
          </p>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4 space-y-10">

          {/* ══ CALCULADORA 1: TELA SOLDADA / MALHA POP ══ */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="bg-brand-navy/5 border-b border-gray-100 px-6 py-4">
              <h2 className="text-xl font-bold text-brand-navy">
                📐 Calculadora de Tela Soldada para Laje e Piso
              </h2>
              <p className="text-sm text-brand-gray-medium mt-1">
                Informe as dimensões e o uso — calculamos a malha ideal e a quantidade de painéis com 10% de transpasse
              </p>
            </div>

            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-brand-navy mb-1">
                    Largura (m)
                  </label>
                  <input
                    type="number"
                    min="0.1"
                    step="0.1"
                    placeholder="Ex: 5"
                    value={larguraTela}
                    onChange={e => setLarguraTela(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-navy mb-1">
                    Comprimento (m)
                  </label>
                  <input
                    type="number"
                    min="0.1"
                    step="0.1"
                    placeholder="Ex: 8"
                    value={comprimentoTela}
                    onChange={e => setComprimentoTela(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-navy mb-1">
                    Tipo de uso
                  </label>
                  <select
                    value={tipoUso}
                    onChange={e => setTipoUso(e.target.value as TipoUso)}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30"
                  >
                    <option value="leve">Piso leve / garagem / calçada</option>
                    <option value="residencial">Laje residencial</option>
                    <option value="comercial">Laje comercial / semi-pesada</option>
                    <option value="industrial">Laje industrial / pesada</option>
                  </select>
                </div>
              </div>

              <Button
                onClick={calcularTela}
                className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white rounded-lg"
              >
                <Calculator className="w-4 h-4 mr-2" />
                Calcular Tela Soldada
              </Button>

              {resultadoTela && (() => {
                const telaSugerida = telasSoldadas[resultadoTela.tipoIdx];
                return (
                  <div className="mt-2 space-y-4">
                    {/* Cabeçalho do resultado */}
                    <div className="bg-brand-navy rounded-xl p-5 text-white">
                      <p className="text-sm text-gray-300 mb-3">
                        Área da laje: <strong>{resultadoTela.area} m²</strong>
                        &nbsp;→ com 10% de transpasse: <strong>{resultadoTela.areaComTranspasse} m²</strong>
                      </p>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="bg-white/10 rounded-lg p-3 text-center">
                          <p className="text-2xl font-bold text-brand-orange">{resultadoTela.paineis}</p>
                          <p className="text-xs text-gray-300 mt-1">painéis</p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3 text-center">
                          <p className="text-2xl font-bold text-brand-orange">{resultadoTela.pesoTotal}</p>
                          <p className="text-xs text-gray-300 mt-1">kg total</p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3 text-center">
                          <p className="text-2xl font-bold text-brand-orange">ø{telaSugerida.diametro}</p>
                          <p className="text-xs text-gray-300 mt-1">mm</p>
                        </div>
                      </div>
                    </div>

                    {/* Card da malha sugerida */}
                    <div className={`rounded-xl border-2 p-4 ${telaSugerida.cor}`}>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 text-brand-orange flex-shrink-0" />
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-bold text-brand-navy text-lg">{telaSugerida.tipo}</span>
                            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${telaSugerida.badge}`}>
                              Sugerido para este uso
                            </span>
                          </div>
                          <p className="text-sm text-brand-navy mt-1">
                            Malha <strong>{telaSugerida.malha} cm</strong> · Diâmetro <strong>ø{telaSugerida.diametro} mm</strong> · Painel {telaSugerida.largura} × {telaSugerida.comprimento} m ({telaSugerida.areaPainel} m²) · {telaSugerida.pesoKgPainel} kg/painel
                          </p>
                          <p className="text-xs text-brand-gray-medium mt-1">{telaSugerida.indicacao}</p>
                        </div>
                      </div>
                    </div>

                    {/* Comparativo de todas as opções */}
                    <div>
                      <p className="text-xs font-semibold text-brand-gray-medium uppercase tracking-wide mb-2">
                        Comparativo — todas as opções para {resultadoTela.area} m²
                      </p>
                      <div className="overflow-x-auto rounded-xl border border-gray-100">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="bg-brand-navy text-white">
                              <th className="px-3 py-2 text-left font-semibold">Tipo</th>
                              <th className="px-3 py-2 text-left font-semibold">Malha (cm)</th>
                              <th className="px-3 py-2 text-left font-semibold">Ø (mm)</th>
                              <th className="px-3 py-2 text-right font-semibold">Painéis</th>
                              <th className="px-3 py-2 text-right font-semibold">Peso total (kg)</th>
                            </tr>
                          </thead>
                          <tbody>
                            {telasSoldadas.map((t, i) => {
                              const p = Math.ceil(resultadoTela.areaComTranspasse / t.areaPainel);
                              const kg = Math.round(p * t.pesoKgPainel * 10) / 10;
                              const isSugerida = i === resultadoTela.tipoIdx;
                              return (
                                <tr
                                  key={t.tipo}
                                  className={isSugerida ? 'bg-brand-orange/10 font-semibold' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                                >
                                  <td className="px-3 py-2 text-brand-navy">
                                    {t.tipo}
                                    {isSugerida && <span className="ml-2 text-xs text-brand-orange">✓</span>}
                                  </td>
                                  <td className="px-3 py-2 text-brand-gray-medium">{t.malha}</td>
                                  <td className="px-3 py-2 text-brand-gray-medium">{t.diametro}</td>
                                  <td className="px-3 py-2 text-right font-mono">{p}</td>
                                  <td className="px-3 py-2 text-right font-mono">{kg}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* CTA WhatsApp */}
                    <a
                      href={`https://wa.me/556296472423?text=${whatsappMsgTela}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg px-4 py-3 transition-colors text-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Solicitar Orçamento — {resultadoTela.paineis} painéis {telaSugerida.tipo}
                    </a>
                  </div>
                );
              })()}
            </div>
          </div>

          {/* ══ CALCULADORA 2: PESO POR QUANTIDADE ══ */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="bg-brand-navy/5 border-b border-gray-100 px-6 py-4">
              <h2 className="text-xl font-bold text-brand-navy">
                ⚖️ Calculadora de Peso — Quantidade × Comprimento
              </h2>
              <p className="text-sm text-brand-gray-medium mt-1">
                Calcule o peso total de um lote de barras pelo diâmetro e comprimento
              </p>
            </div>

            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-brand-navy mb-1">
                    Quantidade de barras
                  </label>
                  <input
                    type="number"
                    min="1"
                    step="1"
                    placeholder="Ex: 50"
                    value={qtdBarras}
                    onChange={e => setQtdBarras(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-navy mb-1">
                    Comprimento de cada barra (m)
                  </label>
                  <input
                    type="number"
                    min="0.1"
                    step="0.1"
                    placeholder="Ex: 12"
                    value={compBarra}
                    onChange={e => setCompBarra(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-navy mb-1">Grau do aço</label>
                  <select
                    value={grauPeso}
                    onChange={e => setGrauPeso(e.target.value as 'CA-50' | 'CA-60')}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30"
                  >
                    <option value="CA-50">CA-50</option>
                    <option value="CA-60">CA-60</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-navy mb-1">Diâmetro</label>
                  <select
                    value={diametroPeso}
                    onChange={e => setDiametroPeso(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30"
                  >
                    {tabelaPeso.map(d => (
                      <option key={d.mm} value={d.mm}>
                        {d.label} — {d.kgm} kg/m
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <Button
                onClick={calcularPeso}
                className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white rounded-lg"
              >
                <Calculator className="w-4 h-4 mr-2" />
                Calcular Peso Total
              </Button>

              {resultadoPeso && (
                <div className="mt-4 bg-brand-navy rounded-xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-4">Resultado</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <p className="text-2xl font-bold text-brand-orange">{resultadoPeso.pesoTotal}</p>
                      <p className="text-xs text-gray-300 mt-1">kg total</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <p className="text-2xl font-bold text-brand-orange">{resultadoPeso.kgm}</p>
                      <p className="text-xs text-gray-300 mt-1">kg por metro</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mt-4">
                    {resultadoPeso.quantidade} barras × {resultadoPeso.comprimento} m × {resultadoPeso.kgm} kg/m = {resultadoPeso.pesoTotal} kg
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* ══ CALCULADORA 3: QUANTIDADE POR PESO ══ */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="bg-brand-navy/5 border-b border-gray-100 px-6 py-4">
              <h2 className="text-xl font-bold text-brand-navy">
                🔢 Calculadora de Quantidade — Peso → Barras de 12 m
              </h2>
              <p className="text-sm text-brand-gray-medium mt-1">
                Informe o peso total em kg e o diâmetro — calculamos quantas barras de 12 m você precisa
              </p>
            </div>

            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-brand-navy mb-1">
                    Peso total (kg)
                  </label>
                  <input
                    type="number"
                    min="0.1"
                    step="0.1"
                    placeholder="Ex: 500"
                    value={pesoEntrada}
                    onChange={e => setPesoEntrada(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-navy mb-1">Grau do aço</label>
                  <select
                    value={grauQtd}
                    onChange={e => { setGrauQtd(e.target.value as 'CA-50' | 'CA-60'); setDiametroQtd(e.target.value === 'CA-50' ? '10.0' : '4.2'); }}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30"
                  >
                    <option value="CA-50">CA-50</option>
                    <option value="CA-60">CA-60</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-navy mb-1">Diâmetro</label>
                  <select
                    value={diametroQtd}
                    onChange={e => setDiametroQtd(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30"
                  >
                    {tabelaQtd.map(d => (
                      <option key={d.mm} value={d.mm}>
                        {d.label} — {d.kgm} kg/m
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <Button
                onClick={calcularQtd}
                className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white rounded-lg"
              >
                <Calculator className="w-4 h-4 mr-2" />
                Calcular Quantidade de Barras
              </Button>

              {resultadoQtd && (
                <div className="mt-4 bg-brand-navy rounded-xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-4">Resultado — {pesoEntrada} kg de {resultadoQtd.diametro}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <p className="text-3xl font-bold text-brand-orange">{resultadoQtd.barras}</p>
                      <p className="text-sm text-gray-300 mt-1">barras de 12 m</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <p className="text-3xl font-bold text-brand-orange">{resultadoQtd.metrosLineares}</p>
                      <p className="text-sm text-gray-300 mt-1">metros lineares</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mt-4">
                    {pesoEntrada} kg ÷ {resultadoQtd.kgBarra} kg/barra = {resultadoQtd.barras} barras (arredondado para cima)
                    &nbsp;·&nbsp;{resultadoQtd.kgm} kg/m
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* ══ TABELA TELAS SOLDADAS ══ */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="bg-brand-navy/5 border-b border-gray-100 px-6 py-4">
              <h2 className="text-xl font-bold text-brand-navy">
                📊 Tabela de Telas Soldadas — Especificações Gerdau
              </h2>
              <p className="text-sm text-brand-gray-medium mt-1">Painel padrão: 2,0 × 3,0 m (6 m²)</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-brand-navy text-white">
                    <th className="px-4 py-3 text-left font-semibold">Tipo</th>
                    <th className="px-4 py-3 text-center font-semibold">Malha (cm)</th>
                    <th className="px-4 py-3 text-center font-semibold">Diâm. (mm)</th>
                    <th className="px-4 py-3 text-center font-semibold">Largura (m)</th>
                    <th className="px-4 py-3 text-center font-semibold">Comp. (m)</th>
                    <th className="px-4 py-3 text-right font-semibold">Peso (kg/painel)</th>
                  </tr>
                </thead>
                <tbody>
                  {telasSoldadas.map((t, i) => (
                    <tr key={t.tipo} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-2.5 font-semibold text-brand-navy">{t.tipo}</td>
                      <td className="px-4 py-2.5 text-center text-brand-gray-medium">{t.malha}</td>
                      <td className="px-4 py-2.5 text-center font-mono">{t.diametro}</td>
                      <td className="px-4 py-2.5 text-center font-mono">{t.largura}</td>
                      <td className="px-4 py-2.5 text-center font-mono">{t.comprimento}</td>
                      <td className="px-4 py-2.5 text-right font-mono font-semibold">{t.pesoKgPainel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ══ TABELA DE REFERÊNCIA ══ */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="bg-brand-navy/5 border-b border-gray-100 px-6 py-4">
              <h2 className="text-xl font-bold text-brand-navy">
                📊 Tabela de Peso do Vergalhão — CA-50 (ABNT NBR 7480)
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-brand-navy text-white">
                    <th className="px-4 py-3 text-left font-semibold">Bitola</th>
                    <th className="px-4 py-3 text-left font-semibold">Fração</th>
                    <th className="px-4 py-3 text-right font-semibold">Peso (kg/m)</th>
                    <th className="px-4 py-3 text-right font-semibold">Barra 12 m (kg)</th>
                    <th className="px-4 py-3 text-right font-semibold">Barras / tonelada</th>
                  </tr>
                </thead>
                <tbody>
                  {diametros.map((d, i) => (
                    <tr key={d.mm} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-2.5 font-medium text-brand-navy">{d.mm} mm</td>
                      <td className="px-4 py-2.5 text-brand-gray-medium">{d.fracao}</td>
                      <td className="px-4 py-2.5 text-right font-mono">{d.kgm.toFixed(3)}</td>
                      <td className="px-4 py-2.5 text-right font-mono">{(d.kgm * 12).toFixed(2)}</td>
                      <td className="px-4 py-2.5 text-right font-mono">{Math.round(1000 / (d.kgm * 12))}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ══ CTA ══ */}
          <div className="bg-brand-orange rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white">Já calculou? Peça seu orçamento.</h2>
            <p className="text-white/90 mt-2">
              Envie o resultado da calculadora ou o projeto estrutural e receba o orçamento em até 2 horas.
            </p>
            <a
              href="https://wa.me/556296472423?text=%5Bsrc%3Acalculadora%5D%20Ol%C3%A1!%20Usei%20a%20calculadora%20do%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20vergalh%C3%A3o."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-white text-brand-orange font-bold rounded-full px-8 py-4 hover:bg-gray-100 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Solicitar Orçamento no WhatsApp
            </a>
          </div>

          {/* ══ CONTEÚDO SEO ══ */}
          <div className="prose prose-sm max-w-none text-brand-gray-medium">
            <h2 className="text-xl font-bold text-brand-navy">Como Usar a Calculadora de Vergalhão</h2>
            <p>
              Nossa calculadora de vergalhão gratuita foi desenvolvida para engenheiros, mestres de obras e construtores de Goiânia e Goiás que precisam estimar rapidamente o peso e a quantidade de aço para seus projetos.
            </p>
            <h3 className="text-lg font-semibold text-brand-navy">Calculadora de Laje</h3>
            <p>
              Insira as dimensões da laje (largura e comprimento em metros), o espaçamento entre barras (em centímetros) e o diâmetro do vergalhão. A calculadora retorna os metros lineares totais, o peso em kg e o número de barras de 12 m necessárias, já incluindo 5% de margem para perdas no corte.
            </p>
            <h3 className="text-lg font-semibold text-brand-navy">Calculadora de Peso</h3>
            <p>
              Ideal para conferir o peso de um pedido específico. Informe a quantidade de barras, o comprimento de cada uma e o diâmetro. O resultado é baseado nos pesos por metro da <strong>ABNT NBR 7480</strong>.
            </p>
            <h3 className="text-lg font-semibold text-brand-navy">Importante</h3>
            <p>
              Esta calculadora fornece uma estimativa para planejamento. O quantitativo definitivo para compra deve sempre ser extraído do projeto estrutural assinado por engenheiro responsável. A BR Aço faz o quantitativo completo gratuitamente a partir do projeto.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
