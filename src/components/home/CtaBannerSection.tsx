import { MessageCircle } from 'lucide-react';
import ctaBackground from '@/assets/cta-background.jpg';
import { analytics } from '@/lib/analytics';

const CtaBannerSection = () => {
  const whatsappUrl = "https://wa.me/556291489786?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20minha%20obra.";

  return (
    <section 
      className="relative pt-12 pb-8 sm:pt-16 sm:pb-10 md:pt-20 md:pb-12 overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${ctaBackground})` }}
      />
      {/* Orange Overlay + grid blueprint sutil */}
      <div className="absolute inset-0 bg-brand-orange/90" />
      <div className="absolute inset-0 bg-blueprint opacity-[0.10] pointer-events-none" aria-hidden="true" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12 text-center">
        <span className="inline-flex items-center gap-2.5 label-eyebrow text-white/80">
          <span className="h-px w-6 bg-white/50" aria-hidden="true" />
          Orçamento em 24h
        </span>
        <h2 className="text-display-lg text-white mt-5 text-balance max-w-3xl mx-auto">
          Pronto para acelerar sua obra?
        </h2>
        <p className="text-base sm:text-lg text-white/85 mt-4 max-w-xl mx-auto">
          Fale com nossos especialistas e receba um orçamento personalizado em até 24 horas.
        </p>

        <div className="flex flex-col w-full sm:flex-row sm:w-auto gap-3 sm:gap-4 justify-center mt-8">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-brand-orange font-semibold rounded-lg px-8 py-4 hover:bg-white/90 shadow-lg transition-colors"
            onClick={() => setTimeout(() => analytics.whatsappClick('cta-banner'), 0)}
          >
            <MessageCircle className="w-5 h-5" />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaBannerSection;
