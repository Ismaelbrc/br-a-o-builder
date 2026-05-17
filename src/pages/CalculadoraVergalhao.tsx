import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { useSEO } from '@/hooks/useSEO';
import { Calculator, MessageCircle, ChevronRight, RefreshCw, Download } from 'lucide-react';

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

interface ResultadoLaje {
  metrosLineares: number;
  pesoKg: number;
  barras12m: number;
  area: number;
  diametro: string;
  espacamento: number;
}

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

  // ── Calculadora 1: Laje / Grid ──
  const [largura, setLargura] = useState('');
  const [comprimento, setComprimento] = useState('');
  const [espacamento, setEspacamento] = useState('20');
  const [diametroLaje, setDiametroLaje] = useState('8.0');
  const [grauLaje, setGrauLaje] = useState<'CA-50' | 'CA-60'>('CA-50');
  const [resultadoLaje, setResultadoLaje] = useState<ResultadoLaje | null>(null);

  // ── Calculadora 2: Peso por quantidade ──
  const [qtdBarras, setQtdBarras] = useState('');
  const [compBarra, setCompBarra] = useState('12');
  const [diametroPeso, setDiametroPeso] = useState('10.0');
  const [grauPeso, setGrauPeso] = useState<'CA-50' | 'CA-60'>('CA-50');
  const [resultadoPeso, setResultadoPeso] = useState<ResultadoPeso | null>(null);

  const tabela = grauLaje === 'CA-50' ? diametros : diametrosCA60;
  const tabelaPeso = grauPeso === 'CA-50' ? diametros : diametrosCA60;

  const calcularLaje = () => {
    const L = parseFloat(largura);
    const C = parseFloat(comprimento);
    const E = parseFloat(espacamento);
    const d = parseFloat(diametroLaje);
    if (!L || !C || !E || !d) return;

    const barras_dir1 = Math.ceil(C / (E / 100)) + 1;
    const barras_dir2 = Math.ceil(L / (E / 100)) + 1;
    const metros_dir1 = barras_dir1 * L;
    const metros_dir2 = barras_dir2 * C;
    const metrosTotal = metros_dir1 + metros_dir2;

    const diam = tabela.find(x => x.mm === d);
    const kgm = diam?.kgm ?? 0;
    const pesoTotal = metrosTotal * kgm * 1.05; // 5% de perda
    const barras12m = Math.ceil(metrosTotal / 12 * 1.05);

    setResultadoLaje({
      metrosLineares: Math.round(metrosTotal * 10) / 10,
      pesoKg: Math.round(pesoTotal * 10) / 10,
      barras12m,
      area: L * C,
      diametro: diam?.label ?? '',
      espacamento: E,
    });
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
  };

  const whatsappMsg = encodeURIComponent(
    resultadoLaje
      ? `Olá! Calculei ${resultadoLaje.pesoKg} kg de vergalhão ${resultadoLaje.diametro} para uma laje de ${resultadoLaje.area} m². Gostaria de solicitar um orçamento.`
      : `Olá! Gostaria de solicitar um orçamento de vergalhão.`
  );

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

          {/* ══ CALCULADORA 1: LAJE ══ */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="bg-brand-navy/5 border-b border-gray-100 px-6 py-4">
              <h2 className="text-xl font-bold text-brand-navy">
                📐 Calculadora de Vergalhão para Laje
              </h2>
              <p className="text-sm text-brand-gray-medium mt-1">
                Calcula a malha bidirecional (duas direções) com 5% de folga para perdas
              </p>
            </div>

            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-brand-navy mb-1">
                    Largura da laje (m)
                  </label>
                  <input
                    type="number"
                    min="0.1"
                    step="0.1"
                    placeholder="Ex: 5.0"
                    value={largura}
                    onChange={e => setLargura(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-navy mb-1">
                    Comprimento da laje (m)
                  </label>
                  <input
                    type="number"
                    min="0.1"
                    step="0.1"
                    placeholder="Ex: 8.0"
                    value={comprimento}
                    onChange={e => setComprimento(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-navy mb-1">
                    Espaçamento entre barras (cm)
                  </label>
                  <select
                    value={espacamento}
                    onChange={e => setEspacamento(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30"
                  >
                    <option value="10">10 cm</option>
                    <option value="12.5">12,5 cm</option>
                    <option value="15">15 cm</option>
                    <option value="20">20 cm (padrão)</option>
                    <option value="25">25 cm</option>
                    <option value="30">30 cm</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-navy mb-1">
                    Grau do aço
                  </label>
                  <select
                    value={grauLaje}
                    onChange={e => setGrauLaje(e.target.value as 'CA-50' | 'CA-60')}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30"
                  >
                    <option value="CA-50">CA-50 (vergalhão)</option>
                    <option value="CA-60">CA-60 (tela / liso)</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-brand-navy mb-1">
                    Diâmetro do vergalhão
                  </label>
                  <select
                    value={diametroLaje}
                    onChange={e => setDiametroLaje(e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30"
                  >
                    {tabela.map(d => (
                      <option key={d.mm} value={d.mm}>
                        {d.label} — {d.kgm} kg/m
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <Button
                onClick={calcularLaje}
                className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white rounded-lg"
              >
                <Calculator className="w-4 h-4 mr-2" />
                Calcular Vergalhão para Laje
              </Button>

              {resultadoLaje && (
                <div className="mt-4 bg-brand-navy rounded-xl p-6 text-white">
                  <h3 className="font-bold text-lg mb-4">
                    Resultado — Laje de {resultadoLaje.area} m²
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <p className="text-2xl font-bold text-brand-orange">{resultadoLaje.metrosLineares}</p>
                      <p className="text-xs text-gray-300 mt-1">metros lineares</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <p className="text-2xl font-bold text-brand-orange">{resultadoLaje.pesoKg}</p>
                      <p className="text-xs text-gray-300 mt-1">kg de vergalhão</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 text-center col-span-2 sm:col-span-1">
                      <p className="text-2xl font-bold text-brand-orange">{resultadoLaje.barras12m}</p>
                      <p className="text-xs text-gray-300 mt-1">barras de 12 m</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mt-4">
                    Diâmetro: {resultadoLaje.diametro} · Espaçamento: {resultadoLaje.espacamento} cm · Inclui 5% de margem para perdas
                  </p>
                  <a
                    href={`https://wa.me/5562999247285?text=${whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg px-4 py-3 transition-colors text-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Solicitar Orçamento para {resultadoLaje.pesoKg} kg
                  </a>
                </div>
              )}
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
              href="https://wa.me/5562999247285?text=Olá!%20Usei%20a%20calculadora%20do%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento%20de%20vergalhão."
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
