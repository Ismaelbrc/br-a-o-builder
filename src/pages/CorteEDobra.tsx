import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import {
  Scissors, MessageCircle, Upload, FileCheck, PackageCheck,
  TrendingDown, Recycle, Target, Truck, Wallet, ClipboardCheck,
  Tag, HardHat, ChevronDown, CheckCircle, Send, ChevronRight,
  LucideIcon
} from 'lucide-react';

// ═══ HERO SECTION ═══
const HeroSection = () => {
  const whatsappUrl = "https://wa.me/5562999247285?text=Olá!%20Tenho%20interesse%20no%20serviço%20de%20Corte%20e%20Dobra.%20Poderia%20me%20enviar%20um%20orçamento?";
  
  const scrollToForm = () => {
    document.getElementById('orcamento-cd')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="min-h-[70vh] flex items-center py-16 md:py-20"
      style={{ background: 'linear-gradient(135deg, hsl(var(--brand-navy)) 0%, hsl(218 48% 8%) 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 w-full">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/produtos" className="hover:text-white transition-colors">Produtos</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">Corte e Dobra</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div>
            <span className="inline-flex items-center gap-2 bg-brand-orange text-white text-sm font-semibold px-4 py-1.5 rounded-full">
              ★ Serviço Mais Procurado
            </span>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mt-6">
              Corte e Dobra: Reduza{' '}
              <span className="text-brand-orange">50%</span> da Mão de Obra na Sua Obra
            </h1>
            
            <p className="text-lg text-gray-300 mt-6 leading-relaxed">
              Aço cortado e dobrado sob medida, com equipamentos de alta tecnologia. 
              Entrega em até 7 dias úteis, precisão milimétrica e zero desperdício de material.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button 
                onClick={scrollToForm}
                size="lg"
                className="bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold rounded-full px-8 py-6 text-lg shadow-lg shadow-orange-500/25"
              >
                Solicitar Orçamento
              </Button>
              <Button
                variant="ghost"
                size="lg"
                asChild
                className="text-white border border-white/30 hover:bg-white hover:text-brand-navy rounded-full px-8 py-6"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-8">
              {['50% economia', 'Zero desperdício', '7 dias entrega'].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                  <CheckCircle className="w-4 h-4 text-brand-orange" />
                  <span className="text-white/80 text-sm font-medium">{badge}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right - Visual */}
          <div className="hidden lg:flex h-80 rounded-2xl bg-white/5 border border-white/10 items-center justify-center">
            <Scissors className="w-32 h-32 text-white/10" />
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
    { icon: PackageCheck, title: "Receba na Obra", description: "Aço cortado e dobrado com precisão, identificado por peça e etapa, entregue diretamente no canteiro em até 7 dias úteis." },
  ];

  return (
    <section className="py-20 md:py-24 bg-brand-gray-light">
      <div className="max-w-5xl mx-auto px-4">
        <SectionTitle 
          title="Como Funciona" 
          subtitle="Do seu projeto ao aço pronto na obra em 3 passos simples" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 relative">
          {/* Connector lines (desktop only) */}
          <div className="hidden md:block absolute top-16 left-1/3 right-1/3 border-t-2 border-dashed border-brand-orange/20" />
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center relative px-4">
                <div className="text-6xl md:text-7xl font-bold text-brand-orange/10 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 select-none">
                  {index + 1}
                </div>
                <div className="w-16 h-16 rounded-2xl bg-brand-orange flex items-center justify-center mx-auto relative z-10 shadow-lg shadow-orange-500/20">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mt-5">{step.title}</h3>
                <p className="text-brand-gray-medium text-sm mt-2 max-w-xs mx-auto">{step.description}</p>
              </div>
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
}

const advantages: Advantage[] = [
  { icon: TrendingDown, title: "50% de Economia em Mão de Obra", description: "Elimine a equipe de corte e dobra no canteiro. Receba o aço pronto para armar." },
  { icon: Recycle, title: "Zero Desperdício", description: "Cada peça é cortada na medida exata. Sem sobras, sem pontas, sem perdas." },
  { icon: Target, title: "Precisão Milimétrica", description: "Máquinas automatizadas garantem cortes e dobras com tolerância mínima." },
  { icon: Truck, title: "Entrega em até 7 Dias", description: "Produção ágil com entrega programada conforme o cronograma da sua obra." },
  { icon: Wallet, title: "Reduz Capital de Giro", description: "Elimina a necessidade de estocar grandes volumes. Entregas programadas por etapa." },
  { icon: ClipboardCheck, title: "Análise Técnica", description: "Engenheiros avaliam seu projeto para otimizar o uso do aço e identificar economias." },
  { icon: Tag, title: "Peças Identificadas", description: "Cada peça é etiquetada por tipo e etapa da obra, facilitando a montagem." },
  { icon: HardHat, title: "Canteiro Organizado", description: "Sem bancadas de corte, sem entulho de aço. Obra mais limpa, segura e produtiva." },
];

const AdvantagesSection = () => {
  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle 
          title="8 Vantagens do Corte e Dobra BR Aço" 
          subtitle="Por que as maiores construtoras de Goiás escolhem nosso serviço" 
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {advantages.map((adv, index) => {
            const Icon = adv.icon;
            return (
              <div 
                key={index}
                className="bg-background rounded-2xl p-8 border border-border hover:border-brand-orange/20 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-5 group-hover:bg-brand-orange transition-colors">
                  <Icon className="w-7 h-7 text-brand-orange group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-brand-navy mb-2">{adv.title}</h3>
                <p className="text-brand-gray-medium text-sm leading-relaxed">{adv.description}</p>
              </div>
            );
          })}
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
    <section className="py-16 bg-brand-gray-light">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-brand-navy">
          Onde Aplicar o Corte e Dobra
        </h2>
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {applications.map((app, i) => (
            <span 
              key={i}
              className="bg-background border border-border rounded-full px-5 py-2.5 text-sm font-medium text-brand-navy hover:border-brand-orange hover:text-brand-orange transition-colors cursor-default"
            >
              {app}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

// ═══ INTERMEDIATE CTA ═══
const CtaMidSection = () => {
  const scrollToForm = () => {
    document.getElementById('orcamento-cd')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 bg-brand-orange">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Sua obra não pode esperar. Peça um orçamento agora.
        </h2>
        <Button 
          onClick={scrollToForm}
          size="lg"
          className="mt-6 bg-white text-brand-orange hover:bg-gray-100 font-semibold rounded-full px-8 py-6"
        >
          Solicitar Orçamento
        </Button>
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
    <section ref={sectionRef} className="py-16 md:py-20 bg-brand-navy">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`text-center ${index < stats.length - 1 ? 'lg:border-r lg:border-white/10' : ''}`}
            >
              <div className="text-4xl md:text-5xl font-bold text-brand-orange">
                {stat.prefix !== undefined ? stat.prefix : ''}{counts[index]}{stat.suffix}
              </div>
              <div className="text-sm md:text-base text-gray-400 uppercase tracking-wider mt-2 font-medium">
                {stat.label}
              </div>
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
    answer: "O prazo padrão é de até 7 dias úteis após a aprovação do orçamento. Para obras com urgência, consulte nossa equipe sobre possibilidade de entregas expressas."
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

  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle 
          title="Perguntas Frequentes" 
          subtitle="Tire suas dúvidas sobre o serviço de Corte e Dobra" 
        />
        
        <div className="max-w-3xl mx-auto mt-12">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center py-5 text-left"
              >
                <span className="text-lg font-medium text-brand-navy pr-4">{item.question}</span>
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
                <p className="text-brand-gray-medium text-sm leading-relaxed">
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

// ═══ FINAL CTA FORM ═══
const FinalCtaForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    cidade: '',
    tipoObra: '',
    mensagem: '',
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Record<string, boolean> = {};
    if (!formData.nome.trim()) newErrors.nome = true;
    if (!formData.whatsapp.trim()) newErrors.whatsapp = true;
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    toast({
      title: "✓ Orçamento enviado com sucesso!",
      description: "Entraremos em contato em breve.",
      duration: 5000,
    });

    setFormData({ nome: '', whatsapp: '', cidade: '', tipoObra: '', mensagem: '' });
    setErrors({});
  };

  const benefits = [
    "Orçamento em até 24h",
    "Sem compromisso",
    "Atendimento técnico especializado",
    "Parcelamento em até 10x",
  ];

  return (
    <section id="orcamento-cd" className="py-20 md:py-24 bg-brand-navy">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Motivational */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Não perca mais tempo e dinheiro na obra
            </h2>
            <p className="text-gray-300 mt-4 text-lg">
              Solicite agora um orçamento de Corte e Dobra e descubra quanto você pode economizar na sua próxima obra.
            </p>
            <div className="flex flex-col gap-3 mt-6">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  <span className="text-white text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right - Form */}
          <div className="bg-background rounded-2xl p-8 shadow-xl">
            <h3 className="text-xl font-bold text-brand-navy mb-6">Orçamento Rápido</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Nome completo *"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className={`rounded-xl py-3 ${errors.nome ? 'border-red-500' : ''}`}
                />
              </div>
              <div>
                <Input
                  placeholder="WhatsApp *"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className={`rounded-xl py-3 ${errors.whatsapp ? 'border-red-500' : ''}`}
                />
              </div>
              <div>
                <Input
                  placeholder="Cidade"
                  value={formData.cidade}
                  onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                  className="rounded-xl py-3"
                />
              </div>
              <div>
                <Select value={formData.tipoObra} onValueChange={(value) => setFormData({ ...formData, tipoObra: value })}>
                  <SelectTrigger className="rounded-xl py-3">
                    <SelectValue placeholder="Tipo de obra" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="residencial">Residencial</SelectItem>
                    <SelectItem value="comercial">Comercial</SelectItem>
                    <SelectItem value="industrial">Industrial</SelectItem>
                    <SelectItem value="loteamento">Loteamento</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Textarea
                  placeholder="Descreva brevemente sua obra..."
                  rows={3}
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  className="rounded-xl"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold rounded-xl py-4 text-lg"
              >
                <Send className="w-5 h-5 mr-2" />
                Solicitar Orçamento de Corte e Dobra
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-3">
                Seus dados estão seguros. Não compartilhamos suas informações.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// ═══ MAIN PAGE ═══
export default function CorteEDobra() {
  return (
    <Layout>
      <HeroSection />
      <HowItWorksCD />
      <AdvantagesSection />
      <ApplicationsSection />
      <CtaMidSection />
      <StatsCD />
      <FaqSection />
      <FinalCtaForm />
    </Layout>
  );
}
