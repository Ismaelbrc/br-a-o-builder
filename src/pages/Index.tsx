import { Link } from 'react-router-dom';
import { analytics } from '@/lib/analytics';
import { Home, Zap, CheckCircle, ArrowRight, Calculator, Weight, Scissors } from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import Layout from '@/components/Layout';
import Eyebrow from '@/components/Eyebrow';
import DifferentialsSection from '@/components/home/DifferentialsSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import ProductsSection from '@/components/home/ProductsSection';
import StatsSection from '@/components/home/StatsSection';
import ComparisonSection from '@/components/home/ComparisonSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CtaBannerSection from '@/components/home/CtaBannerSection';
import BlogPreviewSection from '@/components/home/BlogPreviewSection';
import PartnersSection from '@/components/home/PartnersSection';


const WHATSAPP_URL = "https://wa.me/556296472423?text=%5Bsrc%3Asite%5D%20Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20minha%20obra.";

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
            background: 'linear-gradient(to bottom, rgba(10,14,22,0.72) 0%, rgba(10,14,22,0.52) 48%, rgba(10,14,22,0.82) 100%)'
          }}
        />

        {/* Camada 2b: Grid de blueprint sutil (motivo de engenharia, CSS puro) */}
        <div className="absolute inset-0 z-10 bg-blueprint opacity-[0.12] pointer-events-none" aria-hidden="true" />

        {/* Marca de registro no canto — detalhe de prancha técnica */}
        <div className="absolute top-24 right-6 z-20 hidden lg:flex items-center gap-2 text-white/40" aria-hidden="true">
          <span className="label-eyebrow">GO · 16°48′S 49°14′W</span>
          <span className="h-3 w-px bg-white/30" />
          <span className="h-3 w-3 border border-white/40 rounded-full relative">
            <span className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 h-1 w-1 bg-brand-orange rounded-full" />
          </span>
        </div>

        {/* Camada 3: Conteúdo */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-0 w-full">
          {/* Eyebrow */}
          <div className="animate-fade-in-up">
            <Eyebrow tone="light">O melhor corte e dobra de Goiás</Eyebrow>
          </div>

          {/* Título H1 — display editorial */}
          <h1 className="text-display-xl text-white mt-6 max-w-[18ch] animate-fade-in-up animation-delay-100">
            Aço <span className="text-primary">cortado e dobrado</span> na medida exata da sua obra.
          </h1>

          {/* Subtítulo */}
          <p className="text-base sm:text-lg md:text-xl text-white/85 max-w-2xl mt-7 leading-relaxed animate-fade-in-up animation-delay-200">
            Corte e dobra sob medida, vergalhões, treliças e malhas. Produção 100%
            automatizada de aço para construção civil — entrega em até 48h com certificação ABNT.
          </p>

          {/* Botões CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mt-9 animate-fade-in-up animation-delay-300">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold rounded-lg px-8 py-4 text-lg shadow-lg shadow-brand-orange/30 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <button
              onClick={scrollToProducts}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg px-8 py-4 text-lg backdrop-blur-sm border border-white/20 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Nossos Produtos
            </button>
          </div>

          {/* Prova social — strip de specs com hairline (não cards flutuantes) */}
          <div className="mt-12 animate-fade-in-up animation-delay-400">
            <div className="grid grid-cols-1 sm:grid-cols-3 max-w-3xl border-t border-white/15">
              <Link to="/sobre" className="group flex items-center gap-3 py-4 sm:pr-6 sm:border-r border-white/15 border-b sm:border-b-0 hover:bg-white/5 transition-colors">
                <Home className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <div className="leading-tight">
                  <span className="block text-white font-display font-bold text-lg">+10 mil</span>
                  <span className="label-eyebrow text-white/55">Casas construídas</span>
                </div>
              </Link>
              <Link to="/corte-e-dobra" className="group flex items-center gap-3 py-4 sm:px-6 sm:border-r border-white/15 border-b sm:border-b-0 hover:bg-white/5 transition-colors">
                <Zap className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <div className="leading-tight">
                  <span className="block text-white font-display font-bold text-lg">48h</span>
                  <span className="label-eyebrow text-white/55">Prazo de entrega</span>
                </div>
              </Link>
              <Link to="/produtos" className="group flex items-center gap-3 py-4 sm:pl-6 hover:bg-white/5 transition-colors">
                <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <div className="leading-tight">
                  <span className="block text-white font-display font-bold text-lg">ABNT</span>
                  <span className="label-eyebrow text-white/55">NBR 7480 certificado</span>
                </div>
              </Link>
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

      {/* Parceiros Section */}
      <PartnersSection />

      {/* CTA Banner Section */}
      <CtaBannerSection />

      {/* Calculadora Banner */}
      <section className="py-12 sm:py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative overflow-hidden bg-brand-navy rounded-2xl p-8 sm:p-10 md:p-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="absolute inset-0 bg-blueprint opacity-[0.07] pointer-events-none" aria-hidden="true" />
            <div className="relative flex-1">
              <span className="inline-flex items-center gap-2.5 label-eyebrow text-white/60">
                <span className="h-px w-6 bg-brand-orange" aria-hidden="true" />
                Ferramenta grátis
              </span>
              <h2 className="text-display-md text-white mt-4">
                Calculadora de Vergalhão
              </h2>
              <p className="text-white/70 text-sm sm:text-base mt-3 max-w-xl">
                Descubra quantos kg de aço você precisa para a sua laje ou estrutura — CA-50, CA-60, todos os diâmetros. Resultado em segundos, sem cadastro.
              </p>
            </div>
            <Link
              to="/calculadora-vergalhao"
              className="relative flex-shrink-0 inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold rounded-lg px-8 py-4 transition-colors"
            >
              <Calculator className="w-5 h-5" />
              Calcular agora
            </Link>
          </div>
        </div>
      </section>

      {/* Guias Técnicos — internal links + SEO anchor text */}
      <section className="pb-16 sm:pb-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="label-eyebrow text-brand-gray-medium mb-5">Guias técnicos mais acessados</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-hairline border border-hairline rounded-2xl overflow-hidden">
            <Link
              to="/blog/tabela-de-peso-do-ferro-pronto"
              className="flex items-center gap-4 bg-card px-6 py-5 hover:bg-secondary transition-colors group"
            >
              <Weight className="w-5 h-5 text-brand-orange flex-shrink-0" strokeWidth={1.5} />
              <div>
                <p className="font-display font-semibold text-brand-navy text-sm group-hover:text-brand-orange transition-colors">Tabela de Peso do Ferro Pronto</p>
                <p className="text-xs text-brand-gray-medium mt-0.5">CA-25, CA-50 e CA-60 — todos os diâmetros</p>
              </div>
            </Link>
            <Link
              to="/blog/o-que-e-corte-e-dobra-de-aco"
              className="flex items-center gap-4 bg-card px-6 py-5 hover:bg-secondary transition-colors group"
            >
              <Scissors className="w-5 h-5 text-brand-orange flex-shrink-0" strokeWidth={1.5} />
              <div>
                <p className="font-display font-semibold text-brand-navy text-sm group-hover:text-brand-orange transition-colors">Guia Completo de Corte e Dobra</p>
                <p className="text-xs text-brand-gray-medium mt-0.5">Como funciona, vantagens e economia na obra</p>
              </div>
            </Link>
            <Link
              to="/calculadora-vergalhao"
              className="flex items-center gap-4 bg-card px-6 py-5 hover:bg-secondary transition-colors group"
            >
              <Calculator className="w-5 h-5 text-brand-orange flex-shrink-0" strokeWidth={1.5} />
              <div>
                <p className="font-display font-semibold text-brand-navy text-sm group-hover:text-brand-orange transition-colors">Calculadora de Vergalhão Grátis</p>
                <p className="text-xs text-brand-gray-medium mt-0.5">Quantos kg você precisa? Resultado em segundos</p>
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
