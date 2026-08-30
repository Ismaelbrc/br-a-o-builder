import { Link } from 'react-router-dom';
import { analytics } from '@/lib/analytics';
import {
  Flame, Truck, Cpu, TrendingUp, Award, Home, ShieldCheck,
  Headphones, PiggyBank, Target, CreditCard, ChevronRight, ArrowRight, Linkedin, LucideIcon
} from 'lucide-react';
import Layout from '@/components/Layout';
import Eyebrow from '@/components/Eyebrow';
import SectionIntro from '@/components/SectionIntro';
import Reveal from '@/components/Reveal';
import StatsSection from '@/components/home/StatsSection';
import { useSEO } from '@/hooks/useSEO';

interface TimelineItem { icon: LucideIcon; marco: string; title: string; description: string; }
const timelineItems: TimelineItem[] = [
  { icon: Flame, marco: '2020 · Origem', title: "Fundação na Pandemia", description: "Em um dos momentos mais desafiadores da história, sócios jovens e inovadores fundaram a BR Aço com a missão de transformar a construção civil de Goiás." },
  { icon: Truck, marco: 'Primeiros pedidos', title: "Primeiras Entregas", description: "Os primeiros pedidos foram entregues, construindo uma reputação de agilidade e qualidade que se tornaria a marca registrada da empresa." },
  { icon: Cpu, marco: 'Tecnologia', title: "Automação Total da Produção", description: "Investimento massivo em máquinas de última geração, tornando a produção 100% automatizada com precisão milimétrica." },
  { icon: TrendingUp, marco: '2022 · Scale-UP', title: "Reconhecimento estadual", description: "Reconhecida como uma das empresas mais promissoras e inovadoras do estado de Goiás no programa Scale-UP." },
  { icon: Award, marco: 'Liderança', title: "Maior de Goiás", description: "Consolidação como a maior e melhor indústria de aço para construção civil do estado, com centenas de colaboradores." },
  { icon: Home, marco: 'Hoje', title: "+10 Mil Casas Construídas", description: "Mais de 10 mil casas em Goiás foram construídas com aço BR Aço, transformando o sonho da casa própria em realidade para milhares de famílias." },
];

interface Diff { icon: LucideIcon; title: string; description: string; tag: string; }
const differentials: Diff[] = [
  { icon: Truck, title: "Entrega Garantida", description: "Produtos prontos em até 2 dias úteis. Para Corte e Dobra, até 7 dias úteis. Pontualidade é compromisso.", tag: "2 dias" },
  { icon: Cpu, title: "Produção Automatizada", description: "Máquinas de ponta com automação total, garantindo uniformidade, rastreabilidade e padrão em cada peça.", tag: "100% auto" },
  { icon: ShieldCheck, title: "Certificação ABNT", description: "Todos os produtos fabricados conforme a NBR 7480/2007, assegurando segurança estrutural.", tag: "NBR 7480" },
  { icon: Headphones, title: "Atendimento Técnico", description: "Engenheiros e técnicos especializados acompanham cada etapa da obra, do projeto à entrega.", tag: "Consultivo" },
  { icon: PiggyBank, title: "Economia Real", description: "O Corte e Dobra reduz em até 50% os custos com mão de obra e elimina desperdício de material.", tag: "−50%" },
  { icon: Target, title: "Desperdício Zero", description: "Cada peça é fabricada sob medida, conforme o projeto. Eliminação total de sobras e custos extras.", tag: "0% perda" },
  { icon: CreditCard, title: "Parcelamento Facilitado", description: "Pagamento em até 10x no cartão de crédito. Investir na obra com condições que cabem no planejamento.", tag: "Até 10×" },
];

const WHATSAPP = "https://wa.me/556299032023?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20minha%20obra.";

// ── Sócios / Liderança ───────────────────────────────────────────────────────
interface Socio { name: string; role: string; bio: string; id: string; linkedin: string; }
const socios: Socio[] = [
  {
    name: 'Ismael Cavalcante',
    role: 'CEO · Diretor Comercial',
    bio: 'Graduado em Finanças pela FGV, foi analista sênior de Private Equity no Santander e Diretor de Operações da SOMOS Educação (P&L de US$ 42M, times de +50 pessoas). Desde 2020, CEO e Diretor Comercial da BR Aço — maior indústria de corte e dobra de vergalhão de Goiás. Desenvolve expertise em mercado de aço para construção civil (normas ABNT NBR 7480 e NBR 6118), operações industriais de processamento de armaduras e expansão comercial B2B para construtoras e incorporadoras em GO e DF.',
    id: 'ismael-cavalcante',
    linkedin: 'https://www.linkedin.com/in/ismael-cavalcante-a2359211/',
  },
  {
    name: 'Daniel Mortoni',
    role: 'CFO · Diretor de Tecnologia',
    bio: 'Administração pela USP, com passagem por bancos de investimento (Haitong, BESI) e mercado de capitais no Nubank. Cofundou a Sua Oficina Online — maior marketplace automotivo do Brasil, adquirido pela Mobiauto. Na BR Aço, CFO e Diretor de Tecnologia.',
    id: 'daniel',
    linkedin: 'https://www.linkedin.com/in/danielmortoni/',
  },
  {
    name: 'Felipe Rodrigues Ferreira',
    role: 'COO · Diretor de Pessoas',
    bio: 'Formado em Administração pela FGV, passou por revenue management e inteligência de negócios na LATAM Airlines e pelo empreendedorismo antes de cofundar a BR Aço. Como COO, comanda operações, logística e a gestão de pessoas.',
    id: 'felipe',
    linkedin: 'https://www.linkedin.com/in/felipe-rodrigues-ferreira-71458120/',
  },
];

function SocioCard({ s, index }: { s: Socio; index: number }) {
  const initials = s.name.split(' ').filter(Boolean).map(w => w[0]).slice(0, 2).join('');
  return (
    <Reveal delay={index * 80}>
      <div id={s.id} className="group h-full bg-card rounded-2xl border border-hairline p-6 sm:p-7 hover:border-brand-orange/40 transition-colors">
        <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-metal border border-hairline flex items-center justify-center">
          <div className="absolute inset-0 bg-blueprint opacity-[0.15]" aria-hidden="true" />
          <span className="relative font-display text-xl font-bold text-brand-orange">{initials}</span>
        </div>
        <span className="label-eyebrow text-brand-orange mt-5 block">{s.role}</span>
        <h3 className="font-display text-xl font-semibold text-brand-navy mt-1.5 tracking-tight">{s.name}</h3>
        <p className="text-brand-gray-medium text-sm leading-relaxed mt-3">{s.bio}</p>
        <a
          href={s.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-5 label-eyebrow text-brand-gray-medium hover:text-brand-orange transition-colors rule-tick pt-3"
        >
          <Linkedin className="w-4 h-4" />
          Ver no LinkedIn
        </a>
      </div>
    </Reveal>
  );
}

export default function Sobre() {
  useSEO({
    title: 'Sobre a BR Aço | Maior Indústria de Aço de Goiás',
    description: 'Conheça a BR Aço, fundada na pandemia e consolidada como a maior indústria de corte e dobra de vergalhão de Goiás. Mais de 10 mil casas construídas com nosso aço.',
    canonical: 'https://grupobraco.com.br/sobre/',
    keywords: 'br aço goiânia, grupo braco, indústria de aço goiás, sobre br aço',
  });

  return (
    <Layout>
      {/* ══ HERO ══ */}
      <section className="relative bg-metal overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-[0.10] pointer-events-none" aria-hidden="true" />
        <span className="absolute top-24 right-6 z-10 hidden lg:flex items-center gap-2 text-white/40" aria-hidden="true">
          <span className="label-eyebrow">EST. 2020 · GO</span>
          <span className="h-3 w-3 border border-white/40 rounded-full relative">
            <span className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 h-1 w-1 bg-brand-orange rounded-full" />
          </span>
        </span>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <nav className="flex items-center gap-2 label-eyebrow text-white/40 mb-10" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Sobre</span>
          </nav>
          <Eyebrow tone="light">Sobre a BR Aço</Eyebrow>
          <h1 className="text-display-xl text-white mt-6 max-w-[20ch]">
            Nascemos do aço.<br />
            <span className="text-primary">O progresso nos move.</span>
          </h1>
          <p className="text-lg text-white/75 mt-6 max-w-2xl">
            Construindo casas e vidas com simplicidade e energia — da crise de 2020 à maior indústria de
            corte e dobra de vergalhão de Goiás.
          </p>
        </div>
      </section>

      {/* ══ MANIFESTO ══ */}
      <section className="py-16 sm:py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Eyebrow>Manifesto</Eyebrow>
              <p className="text-display-md text-brand-navy mt-5 text-balance">
                Não somos só uma indústria — somos uma força que transforma concreto em conquista.
              </p>
              <div className="mt-6 space-y-4 text-brand-gray-medium leading-relaxed">
                <p>
                  Fomos forjados na crise, lapidados na adversidade e hoje nos posicionamos como a maior
                  indústria de aço para construção civil em Goiás. Porque não basta crescer — é preciso erguer juntos.
                </p>
                <p>
                  Aceleramos obras. Eliminamos desperdícios. Otimizamos mão de obra. Democratizamos o acesso à alta
                  performance na construção. E fazemos tudo isso com engenharia, automação, rastreabilidade e alma.
                </p>
              </div>
            </div>

            {/* Painel metal+blueprint com a frase-âncora (substitui imagem de 2,5MB) */}
            <div className="relative rounded-2xl bg-metal overflow-hidden p-8 md:p-12 flex flex-col justify-center min-h-[320px] border border-hairline">
              <div className="absolute inset-0 bg-blueprint opacity-[0.10]" aria-hidden="true" />
              <span className="absolute top-5 left-5 h-3 w-3 border-l-2 border-t-2 border-white/30" aria-hidden="true" />
              <span className="absolute bottom-5 right-5 h-3 w-3 border-r-2 border-b-2 border-white/30" aria-hidden="true" />
              <p className="relative font-display text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
                Entregamos <span className="text-brand-orange">confiança, velocidade e inovação.</span>
              </p>
              <span className="relative label-eyebrow text-white/45 mt-6">BR Aço · Goiás · desde 2020</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══ STATS (metal — reutilizado) ══ */}
      <StatsSection />

      {/* ══ LIDERANÇA / SÓCIOS ══ */}
      <section className="py-16 sm:py-20 md:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionIntro
            eyebrow="Liderança"
            title="Os sócios que tocam a BR Aço."
            description="Três sócios, uma obsessão: transformar a construção civil de Goiás com engenharia, tecnologia e gente."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {socios.map((s, i) => <SocioCard key={s.name} s={s} index={i} />)}
          </div>
        </div>
      </section>

      {/* ══ TRAJETÓRIA (timeline editorial) ══ */}
      <section className="py-16 sm:py-20 md:py-28 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <SectionIntro
            eyebrow="Nossa trajetória"
            title="De uma ideia ousada à maior indústria de aço de Goiás."
          />
          <div className="mt-12 sm:mt-16">
            {timelineItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={index} delay={(index % 2) * 80}>
                  <div className="grid grid-cols-[auto_1fr] gap-5 sm:gap-10 border-t border-hairline first:border-t-0 py-7 sm:py-9 rule-tick group">
                    <span className="font-display text-4xl sm:text-6xl font-bold text-brand-navy/12 tabular-nums leading-none w-[1.6em]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-brand-orange" strokeWidth={1.5} />
                        <span className="label-eyebrow text-brand-gray-medium">{item.marco}</span>
                      </div>
                      <h3 className="font-display text-xl sm:text-2xl font-semibold text-brand-navy mt-3 tracking-tight">{item.title}</h3>
                      <p className="text-brand-gray-medium text-sm sm:text-base leading-relaxed mt-2 max-w-2xl">{item.description}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ DIFERENCIAIS ══ */}
      <section className="py-16 sm:py-20 md:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionIntro
            eyebrow="Diferenciais"
            title="O que nos torna a escolha certa para a sua obra."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {differentials.map((diff, index) => {
              const Icon = diff.icon;
              return (
                <Reveal key={index} delay={(index % 3) * 70}>
                  <div className="group relative h-full bg-card rounded-2xl border border-hairline p-7 hover:border-brand-orange/40 transition-colors">
                    <span className="absolute top-5 right-6 font-display text-3xl font-bold text-brand-navy/10 tabular-nums">{String(index + 1).padStart(2, '0')}</span>
                    <Icon className="w-7 h-7 text-brand-orange" strokeWidth={1.5} />
                    <h3 className="font-display text-lg font-semibold text-brand-navy mt-5 tracking-tight">{diff.title}</h3>
                    <p className="text-brand-gray-medium text-sm leading-relaxed mt-2">{diff.description}</p>
                    <span className="label-eyebrow text-brand-gray-medium mt-5 inline-block rule-tick pt-3">{diff.tag}</span>
                  </div>
                </Reveal>
              );
            })}
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
                Vamos construir juntos
              </span>
              <h2 className="text-display-md text-white mt-5">Conheça nossas soluções.</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Link
                  to="/produtos"
                  className="group inline-flex items-center justify-center gap-2 bg-white text-brand-orange font-semibold rounded-lg px-8 py-4 hover:bg-white/90 transition-colors"
                >
                  Ver Produtos
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={WHATSAPP}
                  target="_blank" rel="noopener noreferrer"
                  onClick={() => setTimeout(() => analytics.whatsappClick('sobre'), 0)}
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold rounded-lg px-8 py-4 hover:bg-white hover:text-brand-orange transition-colors"
                >
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
