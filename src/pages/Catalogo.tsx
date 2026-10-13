import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ArrowDown, Download, X, Truck, ShieldCheck, Ruler, Recycle, Wrench, Tag, Users, Clock,
  CircleDollarSign, CalendarCheck, Award, Trash2, HardHat, MapPin, Check, Calculator, Info,
} from 'lucide-react';
import Layout from '@/components/Layout';
import Reveal from '@/components/Reveal';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Drawer, DrawerContent, DrawerTitle, DrawerDescription } from '@/components/ui/drawer';
import { useSEO } from '@/hooks/useSEO';
import { useJsonLd } from '@/hooks/useJsonLd';
import { webPageNode, breadcrumbNode } from '@/lib/schema';
import { analytics } from '@/lib/analytics';
import { openWhatsApp } from '@/lib/whatsapp';

/**
 * /catalogo — versão interativa do catálogo em PDF (public/catalogo-braco.pdf, 15 páginas).
 * Conteúdo transcrito do PDF; visual na marca 2026 (ouro #F2B705, azul #002B5C, verde #006B3C).
 * Fotos dos produtos recortadas do próprio catálogo em public/catalogo/*.webp.
 */

const CANONICAL = 'https://grupobraco.com.br/catalogo';
const PDF = '/catalogo-braco.pdf';
const IMG = '/catalogo';

type Uso = 'fundacao' | 'estrutura' | 'lajes' | 'fixacao';

const USOS: { id: 'todos' | Uso; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'fundacao', label: 'Fundação' },
  { id: 'estrutura', label: 'Estrutura' },
  { id: 'lajes', label: 'Lajes e pisos' },
  { id: 'fixacao', label: 'Fixação' },
];

interface Produto {
  id: string;
  nome: string;
  uso: Uso;
  resumo: string;
  texto: string;
  destaque?: string;
  rotulo: 'Aplicação' | 'Tipos';
  aplicacao: string;
  servicos?: string[];
  nota?: string;
}

const PRODUTOS: Produto[] = [
  {
    id: 'radier', nome: 'Radier', uso: 'fundacao',
    resumo: 'Fundação que funciona como uma laje sobre o terreno.',
    texto: 'O radier é uma fundação semelhante a uma laje de concreto armado, ficando em contato direto com o terreno, recebendo as cargas provenientes das estruturas e sobrecargas, distribuindo-as sobre uma grande área do terreno, além de abranger toda a área da construção.',
    rotulo: 'Aplicação', aplicacao: 'Lajes.',
    servicos: ['CD — serviço de corte e dobra'],
  },
  {
    id: 'estacas', nome: 'Estacas', uso: 'fundacao',
    resumo: 'Para fundações profundas, com alta resistência a tração e flexão.',
    texto: 'Elas são aplicadas em obras que requerem grande profundidade de fundação e se caracterizam por grande resistência a esforços elevados de tração e de flexão, além de serem uma alternativa equivalente ao concreto.',
    rotulo: 'Aplicação', aplicacao: 'Nas fundações de obras.',
    servicos: ['CD — serviço de corte e dobra', 'CDA — serviço de corte e dobra armado'],
  },
  {
    id: 'colunas', nome: 'Telas e colunas', uso: 'estrutura',
    resumo: 'Colunas prontas em CA50 e CA60, de 3,5 m a 6 m, com 28 estribos.',
    texto: 'As colunas proporcionam ao processo de edificação maior rapidez e praticidade. São constituídas da combinação de vergalhões CA50 e CA60 soldados entre si e espaçados a cada 200 mm, com o comprimento total de 3,5 m, 4 m e 6 m. Já as telas são uma estrutura de aço que, quando dobradas, transformam-se em colunas prontas. Elas podem ser vendidas planas, sem a dobra, ou já prontas, em forma de colunas.',
    destaque: 'Diâmetro entre 6 mm e 12 mm · todas com 28 estribos',
    rotulo: 'Aplicação', aplicacao: 'Pilares, vigas, muros, cintas, baldrames, travamento de paredes e vergas.',
    nota: 'Pergunte também pela nossa coluna especial.',
  },
  {
    id: 'vergalhoes', nome: 'Vergalhões', uso: 'estrutura',
    resumo: 'Superfície soldável em qualquer bitola, também cortados e dobrados.',
    texto: 'Apresentam uma superfície soldável em quaisquer bitolas e apresentações. São comercializados nas formas que melhor atendem ao projeto, de maneira que podem ser cortados e dobrados (serviço de corte e dobra), proporcionando a otimização do tempo e a economia de custos para a construção.',
    rotulo: 'Aplicação', aplicacao: 'Estruturas pré-moldadas e estruturas de concreto armado, como pontes, casas e viadutos.',
  },
  {
    id: 'malhas', nome: 'Malhas', uso: 'lajes',
    resumo: 'Mais segurança para lajes e pisos, de 3,4 mm a 6 mm.',
    texto: 'São responsáveis por garantir maior segurança para as lajes e pisos, diminuindo a ocorrência de fissuras, embarrigamentos e trincas.',
    destaque: 'Diâmetros de 3,4 mm até 6 mm',
    rotulo: 'Aplicação', aplicacao: 'Lajes (maciças, nervuradas, pré-moldadas, cogumelos, protendidas), pisos industriais, pavimentos de concreto armado, pré-moldados, vigas, pilares, pontes, viadutos, piscinas e fundações em geral.',
    nota: 'Consulte o time BR Aço para outras medidas.',
  },
  {
    id: 'trelicas', nome: 'Treliças', uso: 'lajes',
    resumo: 'Armadura pronta e eletrossoldada para lajes treliçadas.',
    texto: 'As treliças são formadas por uma armadura de aço pronta e pré-fabricada, que pode ser usada em algumas estruturas da construção civil, além de atuar como espaçadores de armadura. São formadas por um fio longitudinal superior e dois fios longitudinais inferiores, eletrossoldados nos dois lados da estrutura em todos os seus pontos de encontro, formando uma estrutura espacial de nós não articulados. O uso de treliça nervurada é uma ótima solução para pré-fabricar elementos de concreto esbeltos, leves e fáceis de manejar, garantindo perfeita aderência ao concreto.',
    rotulo: 'Aplicação', aplicacao: 'Mini painéis e lajes treliçadas.',
  },
  {
    id: 'pregos', nome: 'Pregos', uso: 'fixacao',
    resumo: 'Aço que não entorta no uso, com dimensões controladas.',
    texto: 'São fabricados em aço com composição química adequada, que não permite que eles entortem durante o uso. Possuem dimensões controladas, garantindo produtividade na sua aplicação.',
    rotulo: 'Tipos', aplicacao: 'Pregos comuns (com cabeça), galvanizados (com cabeça), adrox, anelado, para telhas galvanizadas e pregos com cabeça dupla.',
  },
  {
    id: 'arames', nome: 'Arames', uso: 'fixacao',
    resumo: 'Recozidos, maleáveis e fáceis de dobrar e torcer.',
    texto: 'Os arames recozidos são fabricados com aço de baixo teor de carbono, sendo muito maleáveis e fáceis de usar em aplicações que exigem dobras e/ou torções.',
    rotulo: 'Aplicação', aplicacao: 'Fixação de armaduras das ferragens dos concretos armados e, na indústria, amarração de peças.',
  },
];

const TAMBEM = ['Estribos', 'Sapatas (gaiolas)'];

const MODOS = {
  cd: {
    titulo: 'Corte e dobra',
    sigla: 'CD',
    texto: 'O corte e dobra é o aço feito sob medida para a sua obra. Nossos equipamentos de alta tecnologia garantem a qualidade e precisão das peças. O aumento de produtividade e a zero perda de material são alguns dos benefícios que uma obra pode obter com o corte e dobra.',
    itens: [
      { icon: CircleDollarSign, t: 'Sem custo com equipamento', d: 'Nada de máquina para cortar e dobrar na obra. Preços competitivos e pagamento facilitado, parcelando em até 4x no cartão.' },
      { icon: Clock, t: 'Até 80% mais ágil', d: 'Na execução da fundação e da estrutura, a etapa mais demorada da obra.' },
      { icon: Award, t: 'Maquinário próprio', d: 'Automatizado e de alta tecnologia, com estrutura para atender obras de todos os portes, incluindo projetos customizados.' },
      { icon: CalendarCheck, t: 'Entregas programadas', d: 'As entregas de cortes e dobras são programadas, reduzindo a necessidade de capital de giro.' },
    ],
  },
  cda: {
    titulo: 'Corte, dobra e armado',
    sigla: 'CDA',
    texto: 'Com o armado, a praticidade é ainda maior. Nós cortamos, dobramos e armamos as peças da sua construção. Assim, a equipe de obra fica responsável apenas por colocar as peças na caixaria para a concretagem.',
    itens: [
      { icon: Trash2, t: 'Desperdício zero', d: 'Eliminação total de desperdício e sobras: fabricação de acordo com o projeto.' },
      { icon: Wrench, t: 'Otimização de mão de obra', d: 'Mão de obra qualificada com o objetivo principal de entregar o melhor serviço para o cliente.' },
      { icon: HardHat, t: 'Atendimento personalizado', d: 'Engenheiros e engenheiras acompanham todo o processo, do planejamento detalhado à produção e entrega. Depois da entrega, a mesma equipe fica à disposição para visitar a obra, caso o cliente tenha dúvidas.' },
    ],
  },
} as const;

const VANTAGENS = [
  { icon: Wrench, t: 'Produção de aço armado, amarrado e soldado conforme o projeto' },
  { icon: Truck, t: 'Frota própria e entregas rápidas, inclusive para o interior de Goiás' },
  { icon: Clock, t: 'Economia de tempo na obra e redução de mão de obra' },
  { icon: Recycle, t: 'Zero desperdício de material com corte e dobra sob medida' },
  { icon: Users, t: 'Suporte técnico com time de engenharia especializado' },
  { icon: Tag, t: 'Material etiquetado de acordo com o projeto' },
  { icon: ShieldCheck, t: 'Aço certificado, 100% nacional e dentro da norma NBR 7480' },
];

const REGIOES = ['Goiânia', 'Interior de Goiás', 'Distrito Federal', 'Tocantins', 'Oeste da Bahia', 'Triângulo Mineiro', 'Mato Grosso', 'Mato Grosso do Sul'];

const CLIENTES = ['Opus', 'FGR Incorporações', 'Direcional', 'Terral', 'Base Incorporações', 'DSA Engenharia', 'EBM', 'NewInc', 'Elmo', 'A.B.V', 'Áurea Engenharia', 'Loft', 'Yutá Inc', 'MCA Construtora', 'EA Urbanismo', 'Lotus'];

function useIsDesktop() {
  const [d, setD] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const on = () => setD(mq.matches);
    on();
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);
  return d;
}

const orcar = (source: string, produto?: string) => {
  setTimeout(() => analytics.whatsappClick(source), 0);
  openWhatsApp(produto
    ? `Olá! Vi o catálogo no site e quero um orçamento de ${produto}.`
    : 'Olá! Vi o catálogo no site e quero um orçamento.');
};

const baixarPdf = () => {
  if (typeof window.gtag === 'function') window.gtag('event', 'file_download', { file_name: 'catalogo-braco.pdf', link_url: PDF });
};

function Listras({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-[3px] ${className}`} aria-hidden="true">
      <i className="block h-[6px] bg-[#006B3C]" />
      <i className="block h-[6px] bg-[#F2B705]" />
      <i className="block h-[6px] bg-[#002B5C]" />
    </div>
  );
}

function FichaProduto({ p }: { p: Produto }) {
  return (
    <div className="grid md:grid-cols-[1fr_1.1fr] gap-0">
      <div className="relative bg-white flex items-center justify-center p-6 md:p-8 md:min-h-[460px]">
        <img src={`${IMG}/${p.id}.webp`} alt={p.nome} width={720} height={720} className="w-full max-w-[340px] md:max-w-none h-auto" />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-[#002B5C] text-white text-[11px] font-semibold px-2.5 py-1">
          <ShieldCheck className="w-3.5 h-3.5 text-[#F2B705]" /> ABNT NBR 7480
        </span>
      </div>
      <div className="p-6 pb-8 md:p-8 md:pr-14 flex flex-col">
        <p className="text-[#006B3C] font-extrabold text-xs tracking-[.14em] uppercase">{USOS.find((u) => u.id === p.uso)?.label}</p>
        <h3 className="font-display font-bold text-3xl md:text-4xl text-[#002B5C] mt-1">{p.nome}</h3>
        {p.destaque && (
          <p className="mt-3 inline-flex self-start items-center gap-2 rounded-lg bg-[#F2B705]/15 text-[#5c4500] font-semibold text-sm px-3 py-1.5">
            <Ruler className="w-4 h-4" /> {p.destaque}
          </p>
        )}
        <p className="mt-4 text-[15px] leading-relaxed text-foreground/80">{p.texto}</p>
        <div className="mt-5 rounded-xl border border-hairline bg-secondary/60 p-4">
          <p className="text-xs font-extrabold tracking-[.12em] uppercase text-[#002B5C]">{p.rotulo}</p>
          <p className="mt-1 text-sm text-foreground/80">{p.aplicacao}</p>
        </div>
        {p.servicos && (
          <ul className="mt-3 flex flex-wrap gap-2">
            {p.servicos.map((s) => (
              <li key={s} className="text-xs font-semibold rounded-full border border-[#006B3C]/30 text-[#006B3C] px-3 py-1">{s}</li>
            ))}
          </ul>
        )}
        {p.nota && <p className="mt-3 text-sm font-semibold text-[#006B3C]">{p.nota}</p>}
        {p.uso !== 'fixacao' && (
          <Link to="/calculadora-vergalhao" className="mt-4 inline-flex items-center gap-2 self-start text-sm font-semibold text-[#002B5C] underline decoration-[#F2B705] decoration-2 underline-offset-4 hover:text-[#006B3C]">
            <Calculator className="w-4 h-4" /> Estimar o quantitativo na calculadora
          </Link>
        )}
        <button
          type="button"
          onClick={() => orcar(`catalogo-${p.id}`, p.nome.toLowerCase())}
          className="mt-6 shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-[#F2B705] hover:brightness-105 text-[#14161C] font-bold px-6 py-4 shadow-[0_10px_24px_-12px_rgba(242,183,5,.8)] transition"
        >
          Orçar {p.nome.toLowerCase()} no WhatsApp <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

const Catalogo = () => {
  useSEO({
    title: 'Catálogo BR Aço | Corte e dobra, vergalhões, colunas, malhas e treliças',
    description: 'Catálogo de produtos da BR Aço: corte e dobra (CD e CDA), radier, estacas, telas e colunas, vergalhões, malhas, treliças, pregos e arames. Aço ABNT NBR 7480, frota própria em GO, DF e região.',
    canonical: CANONICAL,
    keywords: 'catálogo br aço, corte e dobra, radier, estacas, colunas prontas, vergalhão, malha pop, treliça, arame recozido, pregos',
  });

  useJsonLd('catalogo-schema', [
    webPageNode({ canonical: CANONICAL, name: 'Catálogo BR Aço', description: 'Catálogo interativo de produtos e serviços da BR Aço.' }),
    breadcrumbNode(CANONICAL, [
      { name: 'Home', item: 'https://grupobraco.com.br/' },
      { name: 'Catálogo', item: CANONICAL },
    ]),
  ]);

  const isDesktop = useIsDesktop();
  const [modo, setModo] = useState<keyof typeof MODOS>('cd');
  const [uso, setUso] = useState<'todos' | Uso>('todos');
  const [aberto, setAberto] = useState<Produto | null>(null);

  const lista = useMemo(() => (uso === 'todos' ? PRODUTOS : PRODUTOS.filter((p) => p.uso === uso)), [uso]);
  const m = MODOS[modo];

  return (
    <Layout>
      <style>{`
        @keyframes cat-float { 0%,100% { transform: translateY(0) rotate(var(--r,0deg)); } 50% { transform: translateY(-14px) rotate(var(--r,0deg)); } }
        @keyframes cat-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes cat-sweep { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .cat-float { animation: cat-float 6s ease-in-out infinite; }
        @keyframes cat-float-sm { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        .cat-float-sm { animation: cat-float-sm 5s ease-in-out infinite; }
        .cat-marquee { animation: cat-marquee 38s linear infinite; }
        .cat-marquee:hover { animation-play-state: paused; }
        .cat-sweep i { transform-origin: left; animation: cat-sweep .9s cubic-bezier(.22,1,.36,1) both; }
        .cat-sweep i:nth-child(2) { animation-delay: .12s; } .cat-sweep i:nth-child(3) { animation-delay: .24s; }
        .cat-card:hover .cat-img { transform: scale(1.06) rotate(-1deg); }
        @media (prefers-reduced-motion: reduce) { .cat-float, .cat-float-sm, .cat-marquee, .cat-sweep i { animation: none !important; } }
      `}</style>

      {/* ── Abertura ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#00214A] text-white pt-28 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(70%_60%_at_75%_40%,rgba(30,95,176,.55),transparent_70%)]" aria-hidden="true" />
        <div className="absolute inset-0 bg-blueprint opacity-[0.06] pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 grid lg:grid-cols-[1.05fr_1fr] gap-10 items-center">
          <div>
            <nav className="text-xs text-white/60 mb-6" aria-label="Trilha">
              <Link to="/" className="hover:text-white">Home</Link> <span className="mx-1.5">/</span> Catálogo
            </nav>
            <p className="inline-flex items-center gap-2 text-[#F2B705] font-extrabold text-xs tracking-[.18em] uppercase">
              <span className="h-px w-8 bg-[#F2B705]" /> Catálogo 2026
            </p>
            <h1 className="font-display font-bold tracking-tight text-[clamp(40px,7vw,76px)] leading-[0.98] mt-4">
              Aço sob medida, <span className="text-[#F2B705]">do projeto à obra.</span>
            </h1>
            <p className="text-white/80 text-lg mt-6 max-w-xl">
              Conheça nossos produtos e serviços: corte e dobra com redução de até 50% no custo, sem mão de obra de armação no canteiro.
            </p>
            <Listras className="cat-sweep w-40 mt-8" />
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <a href="#produtos" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F2B705] hover:brightness-105 text-[#14161C] font-bold px-6 py-4 transition">
                Ver produtos <ArrowDown className="w-5 h-5" />
              </a>
              <a href={PDF} download onClick={baixarPdf} className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 hover:bg-white/10 text-white font-semibold px-6 py-4 transition">
                <Download className="w-5 h-5" /> Baixar PDF
              </a>
            </div>
          </div>

          {/* celular e tablet: grade 2x2 organizada (a colagem solta se sobrepunha em telas estreitas) */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-md mx-auto lg:hidden" aria-hidden="true">
            {[
              { id: 'colunas', nome: 'Colunas' },
              { id: 'vergalhoes', nome: 'Vergalhões' },
              { id: 'estacas', nome: 'Estacas' },
              { id: 'trelicas', nome: 'Treliças' },
            ].map((f, i) => (
              <div key={f.id} className="cat-float-sm" style={{ animationDelay: `${-i * 1.3}s` }}>
                <div className="rounded-2xl bg-white p-2 shadow-[0_20px_40px_-18px_rgba(0,0,0,.6)] ring-1 ring-white/20">
                  <img src={`${IMG}/${f.id}.webp`} alt="" width={720} height={720} className="w-full aspect-square object-contain rounded-xl" />
                  <p className="text-center text-[13px] font-bold text-[#002B5C] pt-1.5 pb-0.5">{f.nome}</p>
                </div>
              </div>
            ))}
          </div>

          {/* desktop: grade 2x2 inclinada, sem sobreposição */}
          <div className="hidden lg:grid grid-cols-2 gap-6 xl:gap-8 max-w-[520px] ml-auto" aria-hidden="true">
            {[
              { id: 'colunas', nome: 'Colunas', r: '-3deg', d: '0s', y: '0px' },
              { id: 'vergalhoes', nome: 'Vergalhões', r: '3deg', d: '-2s', y: '48px' },
              { id: 'estacas', nome: 'Estacas', r: '2deg', d: '-4s', y: '0px' },
              { id: 'trelicas', nome: 'Treliças', r: '-3deg', d: '-1s', y: '48px' },
            ].map((f) => (
              <div key={f.id} style={{ marginTop: f.y }}>
                <div className="cat-float" style={{ ['--r' as string]: f.r, animationDelay: f.d }}>
                  <div className="rounded-2xl bg-white p-2.5 shadow-[0_30px_60px_-22px_rgba(0,0,0,.6)] ring-1 ring-white/20">
                    <img src={`${IMG}/${f.id}.webp`} alt="" width={720} height={720} className="w-full aspect-square object-contain rounded-xl" />
                    <p className="text-center text-sm font-bold text-[#002B5C] pt-2 pb-1">{f.nome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Corte e dobra: CD x CDA ──────────────────────────────── */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <Reveal>
            <p className="text-[#006B3C] font-extrabold text-xs tracking-[.16em] uppercase">Serviço principal</p>
            <h2 className="font-display font-bold text-[clamp(30px,4.6vw,52px)] leading-[1.02] text-[#002B5C] mt-2 max-w-3xl">
              Redução de até 50%, <span className="text-[#006B3C]">sem custo com mão de obra.</span>
            </h2>
            <p className="mt-3 font-display font-semibold text-lg text-[#002B5C]/70">− custo&nbsp;&nbsp;+ eficiência</p>
          </Reveal>

          <div className="mt-10 inline-flex rounded-2xl bg-secondary p-1.5 border border-hairline" role="tablist" aria-label="Tipo de serviço">
            {(Object.keys(MODOS) as (keyof typeof MODOS)[]).map((k) => (
              <button
                key={k}
                role="tab"
                aria-selected={modo === k}
                onClick={() => setModo(k)}
                className={`rounded-xl px-4 sm:px-6 py-3 text-sm sm:text-base font-bold transition-all ${modo === k ? 'bg-[#002B5C] text-white shadow-lg' : 'text-[#002B5C]/70 hover:text-[#002B5C]'}`}
              >
                {MODOS[k].titulo} <span className={`ml-1 text-xs ${modo === k ? 'text-[#F2B705]' : 'opacity-60'}`}>{MODOS[k].sigla}</span>
              </button>
            ))}
          </div>

          <div key={modo} className="grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-14 mt-8 animate-fade-in-up">
            <div>
              <p className="text-lg leading-relaxed text-foreground/80">{m.texto}</p>
              <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#002B5C]">
                <ShieldCheck className="w-5 h-5 text-[#006B3C]" /> Nossos produtos seguem a ABNT NBR 7480/2007
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {m.itens.map((it, i) => (
                <div key={it.t} className={`group rounded-2xl border border-hairline bg-card p-5 transition hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(0,43,92,.45)] ${m.itens.length === 3 && i === 2 ? 'sm:col-span-2' : ''}`}>
                  <span className="grid place-items-center w-11 h-11 rounded-xl bg-[#002B5C] text-[#F2B705] transition group-hover:bg-[#F2B705] group-hover:text-[#002B5C]">
                    <it.icon className="w-5 h-5" />
                  </span>
                  <h3 className="font-display font-bold text-lg text-[#002B5C] mt-4">{it.t}</h3>
                  <p className="text-sm text-foreground/75 mt-1.5 leading-relaxed">{it.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Vantagens ────────────────────────────────────────────── */}
      <section className="relative py-16 md:py-24 bg-[#002B5C] text-white overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-[0.06] pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 grid lg:grid-cols-[.8fr_1.2fr] gap-10">
          <Reveal>
            <p className="text-[#F2B705] font-extrabold text-xs tracking-[.16em] uppercase">Por que a BR Aço</p>
            <h2 className="font-display font-bold text-[clamp(30px,4.6vw,52px)] leading-[1.02] mt-2">
              Principais <span className="text-[#F2B705]">vantagens</span>
            </h2>
            <Listras className="w-32 mt-6" />
          </Reveal>
          <ol className="grid gap-3">
            {VANTAGENS.map((v, i) => (
              <Reveal key={v.t} delay={i * 70} as="li">
                <div className="group flex items-center gap-4 rounded-2xl bg-white/[.06] hover:bg-white/[.1] border border-white/10 px-4 py-4 transition">
                  <span className="font-display font-bold text-[#F2B705] text-sm w-6 tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                  <v.icon className="w-5 h-5 text-white/70 group-hover:text-[#F2B705] transition shrink-0" />
                  <span className="text-[15px] sm:text-base text-white/90">{v.t}</span>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Produtos ─────────────────────────────────────────────── */}
      <section id="produtos" className="py-16 md:py-24 bg-secondary scroll-mt-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <Reveal>
              <p className="text-[#006B3C] font-extrabold text-xs tracking-[.16em] uppercase">Produtos construção civil</p>
              <h2 className="font-display font-bold text-[clamp(30px,4.6vw,52px)] leading-[1.02] text-[#002B5C] mt-2">Escolha pelo uso na obra</h2>
              <p className="text-foreground/70 mt-3">Toque em um produto para ver a ficha completa.</p>
            </Reveal>
            <div className="flex gap-2 overflow-x-auto pb-1 -mx-5 px-5 md:mx-0 md:px-0 [scrollbar-width:none]" role="tablist" aria-label="Filtrar produtos">
              {USOS.map((u) => (
                <button
                  key={u.id}
                  role="tab"
                  aria-selected={uso === u.id}
                  onClick={() => setUso(u.id)}
                  className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold border transition ${uso === u.id ? 'bg-[#002B5C] border-[#002B5C] text-white' : 'bg-card border-hairline text-[#002B5C] hover:border-[#002B5C]/40'}`}
                >
                  {u.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mt-10">
            {lista.map((p, i) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setAberto(p)}
                className="cat-card group text-left rounded-2xl bg-card border border-hairline overflow-hidden transition hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(0,43,92,.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#002B5C] animate-fade-in-up"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="relative bg-white aspect-square overflow-hidden">
                  <img src={`${IMG}/${p.id}.webp`} alt={p.nome} width={720} height={720} loading="lazy" className="cat-img w-full h-full object-contain transition duration-500" />
                  <span className="absolute right-3 top-3 grid place-items-center w-8 h-8 rounded-full bg-[#002B5C] text-[#F2B705] opacity-0 group-hover:opacity-100 transition">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
                <div className="p-4 sm:p-5 border-t border-hairline">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-[#002B5C]">{p.nome}</h3>
                  <p className="text-xs sm:text-sm text-foreground/70 mt-1 leading-snug line-clamp-2">{p.resumo}</p>
                </div>
              </button>
            ))}
          </div>

          <p className="mt-8 text-sm text-foreground/70 flex flex-wrap items-center gap-2">
            Também fabricamos:
            {TAMBEM.map((t) => (
              <span key={t} className="inline-flex items-center gap-1 rounded-full bg-card border border-hairline px-3 py-1 font-semibold text-[#002B5C]">
                <Check className="w-3.5 h-3.5 text-[#006B3C]" /> {t}
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* ── Calculadora (apoio ao quantitativo) ─────────────────── */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
            <div className="relative overflow-hidden rounded-3xl bg-[#002B5C] text-white p-6 sm:p-10 grid md:grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-center">
              <div className="absolute inset-0 bg-blueprint opacity-[0.07] pointer-events-none" aria-hidden="true" />
              <span className="relative grid place-items-center w-16 h-16 rounded-2xl bg-[#F2B705] text-[#002B5C] shadow-lg">
                <Calculator className="w-8 h-8" />
              </span>
              <div className="relative">
                <p className="text-[#F2B705] font-extrabold text-xs tracking-[.16em] uppercase">Ferramenta grátis</p>
                <h2 className="font-display font-bold text-[clamp(24px,3.4vw,36px)] leading-[1.05] mt-1.5">Calculadora de vergalhão</h2>
                <p className="text-white/80 mt-2 max-w-2xl">
                  Ajuda a estimar o quantitativo de aço da sua obra: peso por bitola, quantidade de barras e tela soldada para laje, pilar ou viga, em CA-50 e CA-60.
                </p>
                <p className="mt-4 flex items-start gap-2 rounded-xl bg-white/[.08] border border-white/15 px-4 py-3 text-sm text-white/85 max-w-2xl">
                  <Info className="w-4 h-4 mt-0.5 shrink-0 text-[#F2B705]" />
                  <span>
                    <strong className="text-white">É uma estimativa para planejamento.</strong> O quantitativo definitivo é responsabilidade do engenheiro responsável pelo projeto estrutural. Com o projeto em mãos, a BR Aço faz o levantamento completo gratuitamente.
                  </span>
                </p>
              </div>
              <Link to="/calculadora-vergalhao" className="relative inline-flex items-center justify-center gap-2 rounded-xl bg-[#F2B705] hover:brightness-105 text-[#14161C] font-bold px-6 py-4 transition whitespace-nowrap">
                Abrir calculadora <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
        </div>
      </section>

      {/* ── Frota própria ────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-h-[620px] shadow-[0_40px_80px_-40px_rgba(0,43,92,.6)]">
              <img src={`${IMG}/frota.webp`} alt="Caminhão da BR Aço com armaduras prontas para entrega" loading="lazy" width={900} height={1350} className="w-full h-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-[#00183A]/90 to-transparent">
                <p className="text-white font-semibold text-sm">Entrega real: obra do Hotel Nacional, Brasília</p>
              </div>
            </div>
            <div className="absolute -right-2 sm:-right-6 -top-4 rounded-2xl bg-[#F2B705] text-[#14161C] px-5 py-4 shadow-xl">
              <p className="font-display font-bold text-3xl leading-none">48h</p>
              <p className="text-xs font-semibold mt-1">vergalhão e treliça</p>
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="text-[#006B3C] font-extrabold text-xs tracking-[.16em] uppercase">Logística</p>
              <h2 className="font-display font-bold text-[clamp(30px,4.6vw,52px)] leading-[1.02] text-[#002B5C] mt-2">Frota própria</h2>
              <p className="text-lg text-foreground/80 mt-5 leading-relaxed">
                Levamos eficiência até o seu canteiro. Com frota própria, garantimos mais agilidade, controle e pontualidade nas entregas. Nossos veículos são preparados para transportar todos os produtos com segurança, seguindo normas técnicas e atendendo às necessidades da sua obra.
              </p>
            </Reveal>
            <p className="mt-8 text-xs font-extrabold tracking-[.14em] uppercase text-[#002B5C]">Entregamos com rapidez em</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {REGIOES.map((r, i) => (
                <Reveal key={r} delay={i * 50} as="li">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-card px-3.5 py-2 text-sm font-semibold text-[#002B5C] hover:border-[#006B3C] hover:text-[#006B3C] transition">
                    <MapPin className="w-4 h-4" /> {r}
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Confiam em nós ───────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-[#00214A] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h2 className="font-display font-bold text-[clamp(28px,4vw,46px)] leading-none">Confiam em <span className="text-[#F2B705]">nós</span></h2>
          <p className="text-white/70 max-w-md">Construtoras e incorporadoras que constroem com a BR Aço. E você e seus amigos também.</p>
        </div>
        <div className="mt-10 relative [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <div className="cat-marquee flex w-max gap-3">
            {[...CLIENTES, ...CLIENTES].map((c, i) => (
              <span key={i} className="shrink-0 rounded-2xl border border-white/15 bg-white/[.04] px-6 py-4 font-display font-semibold text-lg text-white/85">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Chamada final ────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <div className="relative rounded-3xl bg-[#F2B705] px-6 py-12 sm:px-12 sm:py-16 overflow-hidden text-center">
            <Listras className="absolute inset-x-0 top-0" />
            <h2 className="font-display font-bold text-[clamp(30px,5vw,56px)] leading-[1.02] text-[#14161C]">Solicite um orçamento</h2>
            <p className="text-[#14161C]/80 text-lg mt-4 max-w-xl mx-auto">Mande a planta ou a lista de ferros. Nosso time técnico responde com proposta e prazo.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
              <button type="button" onClick={() => orcar('catalogo-final')} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#002B5C] hover:bg-[#00214A] text-white font-bold px-7 py-4 transition">
                Pedir orçamento no WhatsApp <ArrowRight className="w-5 h-5" />
              </button>
              <a href={PDF} download onClick={baixarPdf} className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#14161C]/20 hover:border-[#14161C]/50 text-[#14161C] font-bold px-7 py-4 transition">
                <Download className="w-5 h-5" /> Baixar catálogo em PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ficha do produto: diálogo no desktop, gaveta no celular ── */}
      {isDesktop ? (
        <Dialog open={!!aberto} onOpenChange={(o) => !o && setAberto(null)}>
          <DialogContent className="max-w-5xl p-0 gap-0 max-h-[90vh] overflow-y-auto [&>button]:hidden">
            {aberto && (
              <>
                <DialogTitle className="sr-only">{aberto.nome}</DialogTitle>
                <DialogDescription className="sr-only">{aberto.resumo}</DialogDescription>
                <button type="button" onClick={() => setAberto(null)} aria-label="Fechar" className="absolute right-4 top-4 z-10 grid place-items-center w-9 h-9 rounded-full bg-[#002B5C] text-white hover:bg-[#00214A]">
                  <X className="w-5 h-5" />
                </button>
                <FichaProduto p={aberto} />
              </>
            )}
          </DialogContent>
        </Dialog>
      ) : (
        <Drawer open={!!aberto} onOpenChange={(o) => !o && setAberto(null)}>
          <DrawerContent className="max-h-[92vh]">
            {aberto && (
              <div className="overflow-y-auto">
                <DrawerTitle className="sr-only">{aberto.nome}</DrawerTitle>
                <DrawerDescription className="sr-only">{aberto.resumo}</DrawerDescription>
                <FichaProduto p={aberto} />
              </div>
            )}
          </DrawerContent>
        </Drawer>
      )}
    </Layout>
  );
};

export default Catalogo;
