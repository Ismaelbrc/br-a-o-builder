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
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between relative gap-8 md:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex-1 text-center relative px-4 sm:px-6">
                  {/* Step number - visible badge on mobile, watermark on desktop */}
                  <div className="md:hidden flex items-center justify-center gap-3 mb-4">
                    <span className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-xl flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>
                  
                  {/* Step number watermark - desktop only */}
                  <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 text-7xl font-bold text-primary/10 select-none pointer-events-none">
                    {index + 1}
                  </div>
                  
                  {/* Icon container */}
                  <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto shadow-lg shadow-primary/20 relative z-10">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Title and description */}
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mt-4 sm:mt-5">{step.title}</h3>
                  <p className="text-muted-foreground text-sm mt-2 max-w-xs mx-auto">{step.description}</p>
                  
                  {/* Connector line (hidden on mobile, visible on desktop) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-80px)] border-t-2 border-dashed border-primary/20" />
                  )}
                </div>
              );
            })}
          </div>
          
          {/* CTA Button - full width on mobile */}
          <div className="mt-10 sm:mt-12 text-center">
            <button
              onClick={scrollToOrcamento}
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-6 sm:px-8 py-4 text-base sm:text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
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
