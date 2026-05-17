import { Link } from 'react-router-dom';
import { Trophy, Home, Zap, CheckCircle, ChevronDown, ArrowRight } from 'lucide-react';
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
import heroFallback from '@/assets/hero-warehouse.png';

const WHATSAPP_URL = "https://wa.me/5562999247285?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20minha%20obra.";

const Index = () => {
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
        style={{ backgroundImage: `url(${heroFallback})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Camada 1: Vídeo de Fundo */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mt-6 max-w-4xl animate-fade-in-up animation-delay-100">
            O melhor{' '}
            <span className="text-primary">corte e dobra industrial</span>{' '}
            de Goiás. Entregue na sua obra.
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
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10">
              <div className="w-10 h-10 bg-brand-orange/20 rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-brand-orange" />
              </div>
              <span className="text-white/90 text-sm font-medium">+10 mil casas construídas</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10">
              <div className="w-10 h-10 bg-brand-orange/20 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-brand-orange" />
              </div>
              <span className="text-white/90 text-sm font-medium">Entrega em até 2 dias</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10">
              <div className="w-10 h-10 bg-brand-orange/20 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-brand-orange" />
              </div>
              <span className="text-white/90 text-sm font-medium">Certificação ABNT</span>
            </div>
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

      {/* Blog Preview Section */}
      <BlogPreviewSection />
    </Layout>
  );
};

export default Index;
