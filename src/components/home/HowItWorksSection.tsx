import { FileText, Calculator, PackageCheck, LucideIcon } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: FileText,
    title: "Envie seu Projeto",
    description: "Mande a planta estrutural ou a lista de materiais para nossa equipe técnica por WhatsApp ou e-mail."
  },
  {
    icon: Calculator,
    title: "Receba o Orçamento",
    description: "Em até 24 horas, nosso time de engenheiros responde com uma proposta personalizada e detalhada."
  },
  {
    icon: PackageCheck,
    title: "Receba na Obra",
    description: "Aço pronto para uso, identificado e organizado, entregue diretamente no canteiro com pontualidade."
  }
];

const HowItWorksSection = () => {
  const scrollToOrcamento = () => {
    const orcamentoSection = document.getElementById('orcamento');
    if (orcamentoSection) {
      orcamentoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-brand-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle 
          title="Simples, Rápido e Eficiente" 
          subtitle="Veja como é fácil trabalhar com a BR Aço" 
        />
        
        <div className="max-w-5xl mx-auto mt-10 sm:mt-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex-1 text-center relative px-4 sm:px-6 mb-10 last:mb-0 md:mb-0">
                  {/* Step number watermark */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 text-5xl sm:text-6xl md:text-7xl font-bold text-brand-orange/10 select-none pointer-events-none">
                    {index + 1}
                  </div>
                  
                  {/* Icon container */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-brand-orange flex items-center justify-center mx-auto mt-4 shadow-lg shadow-orange-500/20 relative z-10">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  
                  {/* Title and description */}
                  <h3 className="text-lg sm:text-xl font-semibold text-brand-navy mt-4 sm:mt-5">{step.title}</h3>
                  <p className="text-brand-gray-medium text-sm mt-2 max-w-xs mx-auto">{step.description}</p>
                  
                  {/* Connector line (hidden on mobile, visible on desktop) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-80px)] border-t-2 border-dashed border-brand-orange/20" />
                  )}
                </div>
              );
            })}
          </div>
          
          {/* CTA Button - full width on mobile */}
          <div className="mt-10 sm:mt-12 text-center">
            <button
              onClick={scrollToOrcamento}
              className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold rounded-full px-6 sm:px-8 py-4 text-base sm:text-lg shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300"
            >
              Solicitar Orçamento Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
