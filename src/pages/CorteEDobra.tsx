import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import Eyebrow from '@/components/Eyebrow';
import SectionIntro from '@/components/SectionIntro';
import Reveal from '@/components/Reveal';
import IndexNumber from '@/components/IndexNumber';
import { Button } from '@/components/ui/button';
import {
  Scissors, MessageCircle, Upload, FileCheck, PackageCheck,
  TrendingDown, Recycle, Target, Truck, Wallet, ClipboardCheck,
  Tag, HardHat, ChevronDown, CheckCircle, ChevronRight, ArrowRight,
  ArrowUpRight, LucideIcon, Wrench, ShieldCheck, Layers, Zap
} from 'lucide-react';
import frotaImage from '@/assets/frota-propria.jpg';
import { analytics } from '@/lib/analytics';
import { useClarityLP } from '@/hooks/useClarityLP';

// ═══ HERO SECTION ═══
const HeroSection = () => {
  const whatsappUrl = "https://wa.me/556291489786?text=Olá!%20Tenho%20interesse%20no%20serviço%20de%20Corte%20e%20Dobra.%20Poderia%20me%20enviar%20um%20orçamento?";

  const scrollToForm = () => {
    document.getElementById('orcamento-cd')?.scrollIntoView({ behavior: 'smooth' });
  };

  const specs = [
    { value: 'Automatizada', label: 'Produção 100%' },
    { value: '+7 estados', label: 'Cobertura de entrega' },
    { value: 'NBR 7480', label: 'Certificação ABNT' },
    { value: '48h', label: 'Projetos expressos' },
  ];

  return (
    <section className="relative bg-metal overflow-hidden">
      {/* Grid de blueprint */}
      <div className="absolute inset-0 bg-blueprint opacity-[0.10] pointer-events-none" aria-hidden="true" />
      {/* Numeral fantasma gigante — marca de prancha técnica */}
      <span
        aria-hidden="true"
        className="absolute -right-6 top-1/2 -translate-y-1/2 font-display font-bold text-white/[0.04] leading-none select-none pointer-events-none hidden lg:block"
        style={{ fontSize: 'clamp(16rem, 30vw, 34rem)' }}
      >
        50
      </span>

      <div className="relative max-w-7xl mx-auto px-4 w-full py-20 md:py-28">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 label-eyebrow text-white/40 mb-10" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/produtos" className="hover:text-white transition-colors">Produtos</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-white/70">Corte e Dobra</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left - Text */}
          <div className="lg:col-span-7">
            <Eyebrow tone="light">Serviço mais procurado</Eyebrow>

            <h1 className="text-display-xl text-white mt-6">
              Reduza <span className="text-primary">50%</span> da mão de obra da sua obra.
            </h1>

            <p className="text-lg text-white/75 mt-7 leading-relaxed max-w-xl">
              Aço cortado e dobrado sob medida, com equipamentos de alta tecnologia.
              Entrega a partir de 7 dias úteis, precisão milimétrica e zero desperdício de material.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-9">
              <Button
                onClick={scrollToForm}
                size="lg"
                className="group bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold rounded-lg px-8 py-6 text-lg shadow-lg shadow-brand-orange/25"
              >
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                asChild
                className="text-white border border-white/25 hover:bg-white hover:text-brand-navy rounded-lg px-8 py-6"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => setTimeout(() => analytics.whatsappClick('cda-hero'), 0)}>
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Falar no WhatsApp
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3 mt-10 border-t border-white/15 pt-6">
              {['50% economia', 'Zero desperdício', 'A partir de 7 dias'].map((badge, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-orange" />
                  <span className="label-eyebrow text-white/70">{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Spec sheet panel */}
          <div className="lg:col-span-5">
            <div className="border border-white/15 rounded-2xl overflow-hidden bg-white/[0.03] backdrop-blur-sm">
              <div className="px-6 py-5 border-b border-white/15 flex items-center justify-between">
                <span className="label-eyebrow text-white/50">Ficha técnica</span>
                <Scissors className="w-5 h-5 text-brand-orange" strokeWidth={1.5} />
              </div>
              <div className="grid grid-cols-2">
                {specs.map((s, i) => (
                  <div
                    key={i}
                    className={`p-6 ${i % 2 === 0 ? 'border-r border-white/15' : ''} ${i < 2 ? 'border-b border-white/15' : ''}`}
                  >
                    <p className="font-display text-xl font-bold text-white leading-tight">{s.value}</p>
                    <p className="label-eyebrow text-white/45 mt-1.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ═══ HOW IT WORKS ═══
const HowItWorksCD = () => {
  const steps = [
    { icon: Upload, title: "Envie seu Projeto", description: "Mande a planta estrutural ou a lista de materiais para nossos engenheiros analisarem por WhatsApp ou e-mail." },
    { icon: FileCheck, title: "Receba o Orçamento", description: "Em até 24 horas, nosso time técnico responde com uma proposta detalhada, incluindo quantidades, preços e prazo de entrega." },
    { icon: PackageCheck, title: "Receba na Obra", description: "Aço cortado e dobrado com precisão, identificado por peça e etapa, entregue diretamente no canteiro a partir de 7 dias úteis." },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionIntro
          eyebrow="Como funciona"
          title="Do projeto ao aço pronto na obra."
          description="Em três passos simples — sem retrabalho, sem surpresa."
        />

        <div className="mt-14 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal key={index} delay={index * 120}>
                <div className="rule-tick pt-5">
                  <div className="flex items-baseline justify-between">
                    <span className="font-display text-5xl sm:text-6xl font-bold text-brand-navy tabular-nums leading-none">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <Icon className="w-7 h-7 text-brand-orange" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-brand-navy mt-6 tracking-tight">{step.title}</h3>
                  <p className="text-brand-gray-medium text-sm leading-relaxed mt-2">{step.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ═══ ADVANTAGES ═══
interface Advantage {
  icon: LucideIcon;
  title: string;
  description: string;
  tag: string;
}

const advantages: Advantage[] = [
  { icon: TrendingDown, title: "50% de Economia em Mão de Obra", description: "Elimine a equipe de corte e dobra no canteiro. Receba o aço pronto para armar.", tag: "−50% custo" },
  { icon: Recycle, title: "Zero Desperdício", description: "Cada peça é cortada na medida exata. Sem sobras, sem pontas, sem perdas.", tag: "0% perda" },
  { icon: Target, title: "Precisão Milimétrica", description: "Máquinas automatizadas garantem cortes e dobras com tolerância mínima.", tag: "±1mm" },
  { icon: Truck, title: "Entrega em até 7 Dias", description: "Produção ágil com entrega programada conforme o cronograma da sua obra.", tag: "7 dias" },
  { icon: Wallet, title: "Reduz Capital de Giro", description: "Elimina a necessidade de estocar grandes volumes. Entregas programadas por etapa.", tag: "Sob demanda" },
  { icon: ClipboardCheck, title: "Análise Técnica", description: "Engenheiros avaliam seu projeto para otimizar o uso do aço e identificar economias.", tag: "Engenharia" },
  { icon: Tag, title: "Peças Identificadas", description: "Cada peça é etiquetada por tipo e etapa da obra, facilitando a montagem.", tag: "Rastreável" },
  { icon: HardHat, title: "Canteiro Organizado", description: "Sem bancadas de corte, sem entulho de aço. Obra mais limpa, segura e produtiva.", tag: "Obra limpa" },
];

const AdvantagesSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionIntro
          eyebrow="8 vantagens"
          title={<>Por que as maiores construtoras<br className="hidden sm:block" /> escolhem nosso corte e dobra.</>}
          description="Engenharia, precisão e logística que protegem o seu cronograma e a sua margem."
        />

        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-hairline border border-hairline rounded-2xl overflow-hidden">
          {advantages.map((adv, index) => {
            const Icon = adv.icon;
            return (
              <Reveal key={index} delay={(index % 4) * 70}>
                <div className="group relative flex h-full flex-col bg-background p-7 transition-colors hover:bg-secondary">
                  <IndexNumber value={index + 1} className="absolute top-5 right-5 text-3xl" />
                  <Icon className="w-7 h-7 text-brand-orange" strokeWidth={1.5} />
                  <h3 className="font-display text-base font-semibold text-brand-navy mt-5 tracking-tight">{adv.title}</h3>
                  <p className="text-brand-gray-medium text-sm leading-relaxed mt-2 flex-1">{adv.description}</p>
                  <span className="label-eyebrow text-brand-gray-medium mt-5 rule-tick pt-3">{adv.tag}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ═══ CDA SECTION ═══
const CdaSection = () => {
  const whatsappCda = "https://wa.me/556291489786?text=Olá!%20Tenho%20interesse%20no%20serviço%20de%20Corte%2C%20Dobra%20e%20Armação%20(CDA).%20Poderia%20me%20enviar%20um%20orçamento?";

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text */}
          <div>
            <Eyebrow tone="orange">Serviço premium</Eyebrow>
            <h2 className="text-display-md text-brand-navy mt-5">
              Corte, Dobra e <span className="text-primary">Armação</span>
            </h2>
            <p className="text-lg text-brand-gray-medium mt-4 leading-relaxed">
              Vai além do corte e dobra simples: as peças chegam na sua obra <strong className="text-brand-navy">amarradas ou soldadas, prontas para concretar</strong>. O elemento estrutural é montado inteiro na fábrica — pilares, vigas, sapatas — e entregue pronto para ser colocado na forma.
            </p>

            <div className="mt-8 space-y-px bg-hairline border border-hairline rounded-2xl overflow-hidden">
              {[
                { icon: Layers, title: "Peças 100% montadas", desc: "Elementos estruturais completos: armados, amarrados e soldados conforme projeto." },
                { icon: ShieldCheck, title: "Pronto para concretar", desc: "Sua equipe só precisa posicionar na forma. Zero amarração manual em obra." },
                { icon: Wrench, title: "Acompanhamento técnico", desc: "Engenheiros acompanham todo o processo: planilhamento, produção e entrega." },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-4 bg-background p-5">
                    <Icon className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <div>
                      <h4 className="font-display font-semibold text-brand-navy">{item.title}</h4>
                      <p className="text-sm text-brand-gray-medium mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Button asChild size="lg" className="group mt-8 bg-primary hover:bg-brand-orange-hover text-primary-foreground rounded-lg px-8 py-6">
              <a href={whatsappCda} target="_blank" rel="noopener noreferrer" onClick={() => setTimeout(() => analytics.whatsappClick('cda-premium'), 0)}>
                <MessageCircle className="w-5 h-5 mr-2" />
                Solicitar Orçamento CDA
              </a>
            </Button>
          </div>

          {/* Right - Comparison */}
          <div className="space-y-4">
            <div className="bg-card rounded-2xl p-8 border border-hairline">
              <span className="label-eyebrow text-brand-gray-medium">CD — Corte e Dobra</span>
              <ul className="space-y-3 mt-5">
                {["Peças cortadas e dobradas sob medida", "Identificadas por etapa e tipo", "Equipe de obra faz a amarração"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-brand-gray-medium text-sm">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative bg-metal rounded-2xl p-8 border border-primary/40 overflow-hidden">
              <div className="absolute inset-0 bg-blueprint opacity-[0.08] pointer-events-none" aria-hidden="true" />
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground label-eyebrow px-3 py-1.5 rounded-full">
                Recomendado
              </div>
              <span className="relative label-eyebrow text-white/50">CDA — Corte, Dobra e Armação</span>
              <ul className="relative space-y-3 mt-5">
                {[
                  "Tudo do CD +",
                  "Peças amarradas ou soldadas",
                  "Elementos prontos para concretar",
                  "Zero mão de obra de armação na obra",
                  "Acompanhamento técnico da fábrica à obra"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ═══ APPLICATIONS ═══
const applications = [
  "Fundações", "Pilares", "Vigas", "Lajes", "Escadas", "Muros de Arrimo",
  "Pisos Armados", "Blocos", "Estacas", "Radiers", "Contenções", "Reservatórios"
];

const ApplicationsSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionIntro
          eyebrow="Aplicações"
          title="Onde aplicar o corte e dobra."
        />
        {/* Índice de aplicações — folha de specs */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-hairline border border-hairline rounded-2xl overflow-hidden">
          {applications.map((app, i) => (
            <div
              key={i}
              className="group flex items-center gap-3 bg-card px-5 py-4 transition-colors hover:bg-secondary"
            >
              <span className="label-eyebrow text-brand-orange tabular-nums">{String(i + 1).padStart(2, '0')}</span>
              <span className="font-display font-semibold text-brand-navy text-sm">{app}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ═══ INTERMEDIATE CTA ═══
const CtaMidSection = () => {
  const scrollToForm = () => {
    analytics.clarityEvent('cta_mid_click');
    analytics.clarityUpgrade('cta_mid');
    document.getElementById('orcamento-cd')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-14 sm:py-20 bg-brand-orange overflow-hidden">
      <div className="absolute inset-0 bg-blueprint opacity-[0.10] pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <span className="inline-flex items-center gap-2.5 label-eyebrow text-white/80">
          <span className="h-px w-6 bg-white/50" aria-hidden="true" />
          Cronograma não espera
        </span>
        <h2 className="text-display-md text-white mt-5 text-balance">
          Sua obra não pode esperar. Peça um orçamento agora.
        </h2>
        <Button
          onClick={scrollToForm}
          size="lg"
          className="group mt-8 bg-white text-brand-orange hover:bg-white/90 font-semibold rounded-lg px-8 py-6"
        >
          Solicitar Orçamento
          <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  );
};

// ═══ FROTA PRÓPRIA SECTION ═══
const FrotaSection = () => {
  const regions = [
    "Goiânia e Região Metropolitana",
    "Interior de Goiás",
    "Tocantins",
    "Distrito Federal",
    "Mato Grosso",
    "Mato Grosso do Sul",
    "Oeste do Triângulo Mineiro",
  ];

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative rounded-2xl overflow-hidden border border-hairline">
            <img
              src={frotaImage}
              alt="Frota própria BR Aço - caminhões para entrega de aço"
              className="w-full h-auto object-cover"
              loading="lazy"
              decoding="async"
            />
            <span className="absolute top-4 left-4 label-eyebrow text-white/80 bg-brand-navy-dark/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
              Logística própria
            </span>
          </div>

          {/* Right - Text */}
          <div>
            <SectionIntro
              eyebrow="Frota própria"
              title="Entregamos no seu canteiro, sem terceiros."
              description="Agilidade, pontualidade e segurança — com controle total da logística."
            />

            <p className="text-brand-gray-medium mt-5 leading-relaxed">
              Nossos veículos são preparados para transportar todos os produtos com segurança,
              atendendo as necessidades técnicas da sua obra. Controle total da logística —
              sem depender de terceiros.
            </p>

            <div className="mt-8">
              <p className="label-eyebrow text-brand-gray-medium mb-4">Regiões de entrega</p>
              <div className="flex flex-wrap gap-2">
                {regions.map((region) => (
                  <span
                    key={region}
                    className="border border-hairline text-brand-navy text-sm font-medium px-4 py-2 rounded-full hover:border-brand-orange/40 transition-colors"
                  >
                    {region}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 mt-8 border border-hairline rounded-xl p-5">
              <Truck className="w-9 h-9 text-primary flex-shrink-0" strokeWidth={1.5} />
              <div>
                <p className="font-display font-semibold text-brand-navy">Entrega programada</p>
                <p className="text-sm text-brand-gray-medium">Conforme o cronograma da sua obra, sem atrasos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ═══ STATS ═══
const StatsCD = () => {
  const stats = [
    { value: 50, suffix: "%", label: "Economia Mão de Obra" },
    { value: 7, suffix: " dias", label: "Prazo de Entrega" },
    { value: 0, suffix: "%", label: "Desperdício", prefix: "" },
    { value: 100, suffix: "%", label: "Produção Automatizada" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCounts(stats.map(stat => Math.floor(stat.value * easeOut)));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="relative py-14 sm:py-20 md:py-24 bg-metal overflow-hidden">
      <div className="absolute inset-0 bg-blueprint opacity-[0.06] pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center sm:text-left ${index < stats.length - 1 ? 'lg:border-r lg:border-white/10 lg:pr-8' : ''}`}
            >
              <div className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-brand-orange tabular-nums tracking-tight">
                {stat.prefix !== undefined ? stat.prefix : ''}{counts[index]}{stat.suffix}
              </div>
              <p className="label-eyebrow text-white/55 mt-3">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ═══ FAQ ═══
const faqData = [
  {
    question: "Como funciona o serviço de Corte e Dobra?",
    answer: "Você nos envia a planta estrutural ou lista de materiais. Nossa equipe técnica analisa, quantifica e faz o orçamento. Após aprovação, cortamos e dobramos o aço com máquinas automatizadas, identificamos cada peça e entregamos na sua obra pronto para armar."
  },
  {
    question: "Qual o prazo de entrega?",
    answer: "O prazo padrão é a partir de 7 dias úteis após a aprovação do orçamento. Para obras com urgência, consulte nossa equipe sobre possibilidade de entregas expressas."
  },
  {
    question: "Qual a economia real com Corte e Dobra?",
    answer: "Em média, nossos clientes economizam até 50% nos custos com mão de obra de armação. Além disso, a eliminação de desperdício de material gera economia adicional de 3% a 8% no consumo total de aço da obra."
  },
  {
    question: "Atendem obras de todos os portes?",
    answer: "Sim. Atendemos desde uma casa residencial simples até grandes empreendimentos com milhares de toneladas. Cada projeto recebe atenção personalizada."
  },
  {
    question: "Quais as formas de pagamento?",
    answer: "Aceitamos boleto, transferência bancária, PIX e cartão de crédito em até 10x. Consulte nossa equipe comercial para condições especiais em grandes volumes."
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleFaqToggle = useCallback((index: number) => {
    const isOpening = openIndex !== index;
    setOpenIndex(isOpening ? index : null);
    if (isOpening) {
      // Track which objection the user checked — key insight for copy optimization
      analytics.clarityEvent('faq_open', `q${index}`);
    }
  }, [openIndex]);

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionIntro
          eyebrow="Dúvidas frequentes"
          title="Perguntas frequentes."
          description="Tire suas dúvidas sobre o serviço de Corte e Dobra."
        />

        <div className="max-w-3xl mt-12 border-t border-hairline">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-hairline">
              <button
                onClick={() => handleFaqToggle(index)}
                className="w-full flex justify-between items-center gap-4 py-5 text-left"
              >
                <span className="flex items-baseline gap-4">
                  <span className="label-eyebrow text-brand-orange tabular-nums">{String(index + 1).padStart(2, '0')}</span>
                  <span className="font-display text-lg font-medium text-brand-navy">{item.question}</span>
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-brand-orange flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-48 pb-5' : 'max-h-0'
                }`}
              >
                <p className="text-brand-gray-medium text-sm leading-relaxed pl-10">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ═══ FINAL CTA WHATSAPP ═══
const FinalCtaSection = () => {
  const whatsappUrl = "https://wa.me/556291489786?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20de%20Corte%20e%20Dobra.";

  return (
    <section id="orcamento-cd" className="relative py-20 md:py-28 bg-metal overflow-hidden">
      <div className="absolute inset-0 bg-blueprint opacity-[0.10] pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-3xl mx-auto px-4 text-center">
        <Eyebrow tone="light" className="justify-center">Orçamento grátis</Eyebrow>
        <h2 className="text-display-lg text-white mt-5">
          Solicite seu orçamento agora.
        </h2>
        <p className="text-white/70 mt-4 text-lg">
          Resposta em até 24h&nbsp;•&nbsp;Sem compromisso&nbsp;•&nbsp;Atendimento técnico
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setTimeout(() => analytics.whatsappClick('cda-final'), 0)}
          className="mt-8 inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20b858] text-white font-semibold rounded-lg px-12 py-6 text-xl shadow-lg shadow-green-500/25 transition-colors"
        >
          <MessageCircle className="w-6 h-6" />
          Falar no WhatsApp — Orçamento Grátis
        </a>

        <div className="flex justify-center gap-8 md:gap-16 mt-12 border-t border-white/15 pt-8">
          {[
            { icon: Upload, label: 'Mande a planta' },
            { icon: Zap, label: 'Orçamento em 24h' },
            { icon: Truck, label: 'Entrega programada' },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex flex-col items-center gap-2">
                <Icon className="w-6 h-6 text-brand-orange" strokeWidth={1.5} />
                <span className="label-eyebrow text-white/60 text-center">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ═══ MAIN PAGE ═══
export default function CorteEDobra() {
  useClarityLP({ pageName: 'corte-e-dobra' });
  useEffect(() => { analytics.viewContent('Corte e Dobra'); }, []);

  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqData.map(({ question, answer }) => ({
        "@type": "Question",
        "name": question,
        "acceptedAnswer": { "@type": "Answer", "text": answer },
      })),
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-cda-schema';
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    return () => { document.getElementById('faq-cda-schema')?.remove(); };
  }, []);

  return (
    <Layout>
      <HeroSection />
      <HowItWorksCD />
      <AdvantagesSection />
      <CdaSection />
      <ApplicationsSection />
      <CtaMidSection />
      <FrotaSection />
      <StatsCD />
      <FaqSection />
      <FinalCtaSection />
    </Layout>
  );
}
