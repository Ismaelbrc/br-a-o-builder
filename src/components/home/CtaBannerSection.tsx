import { MessageCircle } from 'lucide-react';
import ctaBackground from '@/assets/cta-background.jpg';
import { analytics } from '@/lib/analytics';

const CtaBannerSection = () => {
  const whatsappUrl = "https://wa.me/5562999247285?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20minha%20obra.";

  return (
    <section 
      className="relative pt-12 pb-8 sm:pt-16 sm:pb-10 md:pt-20 md:pb-12 overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${ctaBackground})` }}
      />
      {/* Orange Overlay */}
      <div className="absolute inset-0 bg-brand-orange/85" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
          Pronto para acelerar sua obra?
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-white/80 mt-2 sm:mt-3 max-w-xl mx-auto">
          Fale com nossos especialistas e receba um orçamento personalizado em até 24 horas
        </p>

        <div className="flex flex-col w-full sm:flex-row sm:w-auto gap-3 sm:gap-4 justify-center mt-6 sm:mt-8">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-brand-orange font-semibold rounded-full px-6 sm:px-8 py-4 hover:bg-gray-100 shadow-lg transition-colors"
            onClick={() => analytics.whatsappClick('cta-banner')}
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
