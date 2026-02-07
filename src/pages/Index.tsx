import { Link } from 'react-router-dom';
import { CheckCircle, ChevronDown } from 'lucide-react';
import Layout from '@/components/Layout';
import DifferentialsSection from '@/components/home/DifferentialsSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import ProductsSection from '@/components/home/ProductsSection';
import StatsSection from '@/components/home/StatsSection';
import ComparisonSection from '@/components/home/ComparisonSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CtaBannerSection from '@/components/home/CtaBannerSection';
import QuoteFormSection from '@/components/home/QuoteFormSection';
import BlogPreviewSection from '@/components/home/BlogPreviewSection';

const Index = () => {
  const scrollToOrcamento = () => {
    const orcamentoSection = document.getElementById('orcamento');
    if (orcamentoSection) {
      orcamentoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, hsl(var(--brand-navy)) 0%, hsl(218 48% 10%) 100%)'
          }}
        />
        
        {/* Dot pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 pt-24 pb-12 sm:py-20 md:py-0">
          {/* Badge de Credibilidade */}
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange border border-brand-orange/20 rounded-full px-3 py-1 text-xs sm:text-sm font-medium">
              🏆 Maior indústria de aço de Goiás
            </span>
          </div>

          {/* Título H1 - Mobile first typography */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mt-6 animate-fade-in-up animation-delay-100">
            Seus projetos na{' '}
            <span className="text-brand-orange">velocidade</span> máxima
          </h1>

          {/* Subtítulo */}
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto mt-4 sm:mt-6 leading-relaxed animate-fade-in-up animation-delay-200">
            A maior indústria de aço para construção civil de Goiás. Entrega em até 2 dias úteis, produção 100% automatizada e qualidade certificada ABNT.
          </p>

          {/* Botões CTA - Stack on mobile */}
          <div className="flex flex-col w-full sm:flex-row sm:w-auto gap-3 sm:gap-4 justify-center mt-8 sm:mt-10 animate-fade-in-up animation-delay-300">
            <button
              onClick={scrollToOrcamento}
              className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold rounded-full px-6 sm:px-8 py-4 text-base sm:text-lg shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300"
            >
              Solicitar Orçamento
            </button>
            <Link
              to="/produtos"
              className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white hover:text-brand-navy rounded-full px-6 sm:px-8 py-4 text-base sm:text-lg transition-all duration-300 text-center"
            >
              Nossos Produtos →
            </Link>
          </div>

          {/* Badges de Prova Social - Stack on mobile */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center mt-8 sm:mt-12 animate-fade-in-up animation-delay-400">
            <div className="flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
              <CheckCircle className="text-brand-orange w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-white/80 text-xs sm:text-sm font-medium">+10 mil casas construídas</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
              <CheckCircle className="text-brand-orange w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-white/80 text-xs sm:text-sm font-medium">Entrega em 2 dias úteis</span>
            </div>
            <div className="flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
              <CheckCircle className="text-brand-orange w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-white/80 text-xs sm:text-sm font-medium">Certificação ABNT</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - hidden on mobile */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
          <ChevronDown className="w-6 h-6 text-white/40 animate-bounce-subtle" />
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

      {/* CTA Banner Section */}
      <CtaBannerSection />

      {/* Formulário de Orçamento Section */}
      <QuoteFormSection />

      {/* Blog Preview Section */}
      <BlogPreviewSection />
    </Layout>
  );
};

export default Index;
