import { Truck, Cpu, ShieldCheck, Scissors, Recycle, CreditCard, LucideIcon } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

interface DifferentialCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

const differentials: DifferentialCard[] = [
  {
    icon: Truck,
    title: "Entrega em 2 Dias Úteis",
    description: "Produtos prontos entregues com agilidade e pontualidade em todo o estado de Goiás. Seu cronograma não pode esperar."
  },
  {
    icon: Cpu,
    title: "Produção 100% Automatizada",
    description: "Tecnologia de ponta com máquinas de última geração para qualidade e precisão milimétrica em cada peça produzida."
  },
  {
    icon: ShieldCheck,
    title: "Certificação ABNT",
    description: "Todos os produtos seguem rigorosamente a norma NBR 7480/2007. Segurança e confiabilidade garantidas."
  },
  {
    icon: Scissors,
    title: "Corte e Dobra Sob Medida",
    description: "Aço cortado e dobrado na medida exata do seu projeto. Economia de até 50% em mão de obra e zero desperdício."
  },
  {
    icon: Recycle,
    title: "Desperdício Zero",
    description: "Cada peça é fabricada conforme o projeto estrutural. Sem sobras, sem perdas, sem custos extras desnecessários."
  },
  {
    icon: CreditCard,
    title: "Parcele em até 10x",
    description: "Condições facilitadas de pagamento no cartão de crédito. Porque investir na sua obra não precisa pesar no bolso."
  }
];

const DifferentialsSection = () => {
  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle 
          title="Por que a BR Aço?" 
          subtitle="Diferenciais que fazem a diferença na sua obra" 
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="bg-background rounded-2xl p-8 border border-border hover:border-brand-orange/20 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-5 group-hover:bg-brand-orange transition-colors">
                  <Icon className="w-7 h-7 text-brand-orange group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-brand-navy mb-3">{item.title}</h3>
                <p className="text-brand-gray-medium text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
