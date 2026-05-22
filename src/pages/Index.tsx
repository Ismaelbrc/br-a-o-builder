import { Link } from 'react-router-dom';
import { analytics } from '@/lib/analytics';
import { Trophy, Home, Zap, CheckCircle, ChevronDown, ArrowRight, Calculator, BookOpen, Weight, Scissors } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import Layout from '@/components/Layout';
import DifferentialsSection from '@/components/home/DifferentialsSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import ProductsSection from '@/components/home/ProductsSection';
import StatsSection from '@/components/home/StatsSection';
import ComparisonSection from '@/components/home/ComparisonSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CtaBannerSection from '@/components/home/CtaBannerSection';
import BlogPreviewSection from '@/components/home/BlogPreviewSection';
import PartnersSection from '@/components/home/PartnersSection';


const WHATSAPP_URL = "https://wa.me/5562999247285?text=%5Bsrc%3Asite%5D%20Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20minha%20obra.";

const Index = () => {
  useSEO({
    title: 'BR Aço | Corte e Dobra Industrial em Goiânia e Goiás',
    description: 'O melhor corte e dobra industrial de Goiás. Vergalhões CA-25, CA-50, CA-60, treliças, telas e malhas. Entrega em até 48h com certificação ABNT NBR 7480. Solicite orçamento.',
    canonical: 'https://grupobraco.com.br/',
    keywords: 'corte e dobra goiânia, vergalhão goiás, aço construção civil goiânia, ca-50 goiânia, treliça metálica goiás',
  });

  const scrollToProducts = () => {
    const productsSection = document.getElementById('produtos');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      {/* Hero Section with Video Background */}
      <section
        className="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden"
      >
        {/* Camada 1: Vídeo de Fundo */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/hero-video.webm" type="video/webm" />
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Camada 2: Overlay Escuro com Gradiente */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.75) 100%)'
          }}
        />

        {/* Camada 3: Conteúdo */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-0 w-full">
          {/* Badge Topo */}
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 bg-brand-orange/20 text-brand-orange px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-brand-orange/30">
              <Trophy className="w-4 h-4" />
              O melhor corte e dobra de Goiás
            </span>
          </div>

          {/* Título H1 */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mt-6 max-w-4xl">
            BR Aço —{' '}
            <span className="text-primary">corte e dobra industrial</span>{' '}
            em Goiás. Entregue na sua obra.
          </h1>

          {/* Subtítulo */}
          <p className="text-base sm:text-lg md:text-xl text-white font-bold max-w-2xl mt-6 leading-relaxed animate-fade-in-up animation-delay-200">
            Corte e dobra sob medida, vergalhões, treliças e malhas.
            <br />
            Produção 100% automatizada de aço para construção civil.
            <br />
            Entrega em até 48h com certificação ABNT.
          </p>

          {/* Botões CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in-up animation-delay-300">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold rounded-lg px-8 py-4 text-lg shadow-lg shadow-brand-orange/30 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Solicitar Orçamento
            </a>
            <button
              onClick={scrollToProducts}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg px-8 py-4 text-lg backdrop-blur-sm border border-white/20 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Nossos Produtos
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Badges de Prova Social */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-10 animate-fade-in-up animation-delay-400">
            <Link to="/sobre" className="flex items-center gap-3 bg-white/5 hover:bg-white/15 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10 hover:border-brand-orange/50 transition-all cursor-pointer">
              <div className="w-10 h-10 bg-brand-orange/20 rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-brand-orange" />
              </div>
              <span className="text-white/90 text-sm font-medium">+10 mil casas construídas</span>
            </Link>
            <Link to="/corte-e-dobra" className="flex items-center gap-3 bg-white/5 hover:bg-white/15 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10 hover:border-brand-orange/50 transition-all cursor-pointer">
              <div className="w-10 h-10 bg-brand-orange/20 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-brand-orange" />
              </div>
              <span className="text-white/90 text-sm font-medium">Entrega em até 2 dias</span>
            </Link>
            <Link to="/produtos" className="flex items-center gap-3 bg-white/5 hover:bg-white/15 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10 hover:border-brand-orange/50 transition-all cursor-pointer">
              <div className="w-10 h-10 bg-brand-orange/20 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-brand-orange" />
              </div>
              <span className="text-white/90 text-sm font-medium">Certificação ABNT</span>
            </Link>
          </div>
        </div>

        {/* Indicador de Scroll - apenas desktop */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2 text-white/60">
          <span className="text-sm">Role para baixo</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </section>

      {/* Diferenciais Section */}
      <DifferentialsSection />

      {/* Como Funciona Section */}
      <HowItWorksSection />

      {/* Produtos Section */}
      <ProductsSection />

      {/* Números Section */}
      <StatsSection />

      {/* Comparativo Section */}
      <ComparisonSection />

      {/* Depoimentos Section */}
      <TestimonialsSection />

      {/* Parceiros Section */}
      <PartnersSection />

      {/* CTA Banner Section */}
      <CtaBannerSection />

      {/* Calculadora Banner */}
      <section className="py-12 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-card border border-border rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
            <div className="flex-shrink-0 bg-brand-orange/10 rounded-2xl p-5">
              <Calculator className="w-10 h-10 text-brand-orange" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                Calculadora de Vergalhão Grátis
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Descubra quantos kg de aço você precisa para a sua laje ou estrutura — CA-50, CA-60, todos os diâmetros. Resultado em segundos, sem cadastro.
              </p>
            </div>
            <Link
              to="/calculadora-vergalhao"
              className="flex-shrink-0 bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold rounded-full px-8 py-3 transition-colors uppercase tracking-wide text-sm whitespace-nowrap"
            >
              Calcular agora
            </Link>
          </div>
        </div>
      </section>

      {/* Guias Técnicos — internal links + SEO anchor text */}
      <section className="py-10 bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Guias técnicos mais acessados</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              to="/blog/tabela-de-peso-do-ferro-pronto"
              className="flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-4 hover:border-brand-orange/40 hover:bg-brand-orange/5 transition-all group"
            >
              <Weight className="w-5 h-5 text-brand-orange flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground text-sm group-hover:text-brand-orange transition-colors">Tabela de Peso do Ferro Pronto</p>
                <p className="text-xs text-muted-foreground mt-0.5">CA-25, CA-50 e CA-60 — todos os diâmetros</p>
              </div>
            </Link>
            <Link
              to="/blog/o-que-e-corte-e-dobra-de-aco"
              className="flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-4 hover:border-brand-orange/40 hover:bg-brand-orange/5 transition-all group"
            >
              <Scissors className="w-5 h-5 text-brand-orange flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground text-sm group-hover:text-brand-orange transition-colors">Guia Completo de Corte e Dobra</p>
                <p className="text-xs text-muted-foreground mt-0.5">Como funciona, vantagens e economia na obra</p>
              </div>
            </Link>
            <Link
              to="/calculadora-vergalhao"
              className="flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-4 hover:border-brand-orange/40 hover:bg-brand-orange/5 transition-all group"
            >
              <Calculator className="w-5 h-5 text-brand-orange flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground text-sm group-hover:text-brand-orange transition-colors">Calculadora de Vergalhão Grátis</p>
                <p className="text-xs text-muted-foreground mt-0.5">Quantos kg você precisa? Resultado em segundos</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <BlogPreviewSection />
    </Layout>
  );
};

export default Index;
