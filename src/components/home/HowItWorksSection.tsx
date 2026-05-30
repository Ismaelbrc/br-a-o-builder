import { FileText, Calculator, PackageCheck, ArrowRight, LucideIcon } from 'lucide-react';
import SectionIntro from '@/components/SectionIntro';
import Reveal from '@/components/Reveal';

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
    } else {
      window.location.href = '/contato';
    }
  };

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionIntro
          eyebrow="Como funciona"
          title="Do projeto ao canteiro em três passos."
          description="Simples, rápido e sem retrabalho. Veja como é trabalhar com a BR Aço."
        />

        <div className="mt-14 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal key={index} delay={index * 120}>
                <div className="relative">
                  {/* Linha de medição com tick — conecta os passos no desktop */}
                  <div className="rule-tick pt-5">
                    <div className="flex items-baseline justify-between">
                      <span className="font-display text-5xl sm:text-6xl font-bold text-brand-navy tabular-nums leading-none">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <Icon className="w-7 h-7 text-brand-orange" strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-semibold text-brand-navy mt-6 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-brand-gray-medium text-sm leading-relaxed mt-2 max-w-xs">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-14 sm:mt-16">
          <button
            onClick={scrollToOrcamento}
            className="group inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold rounded-lg px-8 py-4 text-base sm:text-lg shadow-lg shadow-brand-orange/25 transition-all duration-300"
          >
            Solicitar Orçamento Agora
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
