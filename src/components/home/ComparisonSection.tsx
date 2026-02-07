import { useEffect, useRef, useState } from 'react';
import { 
  Truck, Package, CreditCard, Headphones, ShieldCheck, 
  UserCheck, Recycle, Cpu, X, CheckCircle, MessageCircle,
  LucideIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ComparisonRow {
  icon: LucideIcon;
  criterion: string;
  others: string;
  braco: string;
}

const comparisonData: ComparisonRow[] = [
  { icon: Truck, criterion: "Prazo de Entrega", others: "5 a 7 dias úteis", braco: "48 horas (prontos) · 7 dias (Corte e Dobra)" },
  { icon: Package, criterion: "Variedade de Produtos", others: "Limitada", braco: "Linha completa — 8 categorias" },
  { icon: CreditCard, criterion: "Condições de Pagamento", others: "Rígidas", braco: "Flexíveis · Até 10x no cartão" },
  { icon: Headphones, criterion: "Suporte Técnico", others: "Básico", braco: "Consultivo · Engenheiros dedicados" },
  { icon: ShieldCheck, criterion: "Certificação", others: "Nem sempre", braco: "ABNT NBR 7480/2007" },
  { icon: UserCheck, criterion: "Relacionamento", others: "Impessoal", braco: "Gerente de conta dedicado" },
  { icon: Recycle, criterion: "Desperdício", others: "3% a 8% de perda", braco: "Zero — peças sob medida" },
  { icon: Cpu, criterion: "Tecnologia de Produção", others: "Semi-manual", braco: "100% automatizada" },
];

const ComparisonSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToOrcamento = () => {
    const element = document.getElementById('orcamento');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = "https://wa.me/5562982858558?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20minha%20obra.";

  return (
    <section id="comparativo" className="py-20 md:py-24 bg-background" ref={sectionRef}>
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center">
          <span className="inline-block bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
            COMPARATIVO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy text-center mt-4">
            Por que as maiores construtoras escolhem a BR Aço?
          </h2>
          <p className="text-lg text-brand-gray-medium text-center mt-3 max-w-2xl mx-auto">
            Veja lado a lado como nos comparamos com outros fornecedores do mercado
          </p>
          <div className="w-16 h-1 bg-brand-orange mx-auto mt-5 rounded-full" />
        </div>

        {/* Desktop Table */}
        <div 
          className={`hidden md:block mt-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-brand-gray-light rounded-2xl overflow-hidden border border-border shadow-sm">
            {/* Header Row */}
            <div className="grid grid-cols-[2fr_1.5fr_1.5fr]">
              <div className="bg-brand-navy text-white font-semibold text-sm uppercase tracking-wider py-4 px-6 rounded-tl-2xl">
                Critério
              </div>
              <div className="bg-brand-gray-dark text-white/80 font-semibold text-sm uppercase tracking-wider py-4 px-6 text-center">
                Outros Fornecedores
              </div>
              <div className="bg-brand-orange text-white font-bold text-sm uppercase tracking-wider py-4 px-6 text-center rounded-tr-2xl">
                BR Aço ✓
              </div>
            </div>

            {/* Data Rows */}
            {comparisonData.map((row, index) => {
              const Icon = row.icon;
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={index}
                  className={`grid grid-cols-[2fr_1.5fr_1.5fr] border-b border-border last:border-b-0 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ 
                    transitionDelay: isVisible ? `${index * 50}ms` : '0ms',
                    backgroundColor: isEven ? 'white' : 'hsl(var(--brand-gray-light))'
                  }}
                >
                  <div className="py-4 md:py-5 px-6 flex items-center">
                    <Icon className="w-5 h-5 text-brand-gray-medium mr-3 flex-shrink-0" />
                    <span className="text-brand-navy text-sm md:text-base font-medium">
                      {row.criterion}
                    </span>
                  </div>
                  <div className="py-4 md:py-5 px-6 flex items-center justify-center text-center">
                    <X className="w-5 h-5 text-red-400 mr-2 flex-shrink-0" />
                    <span className="text-brand-gray-medium text-sm md:text-base">
                      {row.others}
                    </span>
                  </div>
                  <div className="py-4 md:py-5 px-6 flex items-center justify-center text-center bg-brand-orange/[0.03]">
                    <CheckCircle className="w-5 h-5 text-brand-green mr-2 flex-shrink-0" />
                    <span className="text-brand-navy text-sm md:text-base font-semibold">
                      {row.braco}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Footer Row */}
            <div className="grid grid-cols-[2fr_1.5fr_1.5fr] bg-brand-navy rounded-b-2xl">
              <div className="py-4 px-6" />
              <div className="py-4 px-6" />
              <div className="py-4 px-6 text-center">
                <span className="inline-block bg-brand-orange text-white text-xs font-bold px-4 py-1.5 rounded-full">
                  A ESCOLHA CERTA
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden mt-10 space-y-3">
          {comparisonData.map((row, index) => {
            const Icon = row.icon;
            return (
              <div 
                key={index}
                className={`bg-background rounded-xl p-5 border border-border transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: isVisible ? `${index * 50}ms` : '0ms' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="w-5 h-5 text-brand-orange" />
                  <span className="font-semibold text-brand-navy">{row.criterion}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-sm text-brand-gray-medium">
                    <X className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                    <span>Outros: {row.others}</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm font-semibold text-brand-navy bg-brand-orange/5 rounded-lg px-3 py-2">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                    <span>BR Aço: {row.braco}</span>
                  </div>
                </div>
              </div>
            );
          })}
          
          {/* Mobile Footer Badge */}
          <div className="bg-brand-navy rounded-xl p-4 text-center">
            <span className="inline-block bg-brand-orange text-white text-xs font-bold px-4 py-1.5 rounded-full">
              A ESCOLHA CERTA
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-lg text-brand-gray-medium max-w-lg mx-auto">
            Chega de arriscar com fornecedores que atrasam e comprometem sua obra.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <Button 
              onClick={scrollToOrcamento}
              className="bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold rounded-full px-8 py-4 shadow-lg shadow-orange-500/20"
            >
              Solicitar Orçamento
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white rounded-full px-8 py-4"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
