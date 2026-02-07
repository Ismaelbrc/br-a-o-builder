import { Link } from 'react-router-dom';
import { CheckCircle, MessageCircle, ArrowRight } from 'lucide-react';
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
import heroImage from '@/assets/hero-warehouse.png';

const Index = () => {
  const scrollToOrcamento = () => {
    const orcamentoSection = document.getElementById('orcamento');
    if (orcamentoSection) {
      orcamentoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = "https://wa.me/5562982858558?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20minha%20obra.";

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        {/* Dark Overlay - gradient from left */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.3) 100%)'
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-24 pb-12 sm:py-20">
          <div className="max-w-2xl">
            {/* Título H1 */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight animate-fade-in-up">
              Abasteça sua loja com aço de qualidade
              <span className="block text-brand-orange mt-2">
                Entrega rápida no Centro Oeste (até 48h)
              </span>
              <span className="block text-white mt-2">
                e condições que cabem no seu caixa
              </span>
            </h1>

            {/* Subtítulo */}
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xl mt-6 leading-relaxed animate-fade-in-up animation-delay-100">
              A BR Aço é indústria de vergalhão e produtos de aço em Goiás, atendendo o Centro Oeste com estoque garantido, prazo cumprido e parceria que faz seu negócio crescer.
            </p>

            {/* Botões CTA */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 animate-fade-in-up animation-delay-200">
              <button
                onClick={scrollToOrcamento}
                className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold rounded-lg px-6 py-4 text-base shadow-lg transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-brand-navy rounded-lg px-6 py-4 text-base transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp Agora
              </a>
            </div>

            {/* Badges de Prova Social */}
            <div className="flex flex-wrap gap-4 sm:gap-6 mt-8 sm:mt-10 animate-fade-in-up animation-delay-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-brand-orange w-5 h-5" />
                <span className="text-white/90 text-sm font-medium">Entrega em até 48h no CO</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-brand-orange w-5 h-5" />
                <span className="text-white/90 text-sm font-medium">Certificação ABNT NBR 7480</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-brand-orange w-5 h-5" />
                <span className="text-white/90 text-sm font-medium">+250 colaboradores</span>
              </div>
            </div>
          </div>
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
