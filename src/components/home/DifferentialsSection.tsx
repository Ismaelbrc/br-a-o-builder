import { Truck, Cpu, ShieldCheck, Scissors, Recycle, CreditCard, ArrowUpRight, LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionIntro from '@/components/SectionIntro';
import Reveal from '@/components/Reveal';
import IndexNumber from '@/components/IndexNumber';

interface DifferentialCard {
  icon: LucideIcon;
  title: string;
  description: string;
  tag: string;
  link: string;
}

const differentials: DifferentialCard[] = [
  {
    icon: Truck,
    title: "Entrega em 2 Dias Úteis",
    description: "Produtos prontos entregues com agilidade e pontualidade em todo o estado de Goiás. Seu cronograma não pode esperar.",
    tag: "Logística própria",
    link: "/corte-e-dobra"
  },
  {
    icon: Cpu,
    title: "Produção 100% Automatizada",
    description: "Tecnologia de ponta com máquinas de última geração para qualidade e precisão milimétrica em cada peça produzida.",
    tag: "Precisão ±1mm",
    link: "/sobre"
  },
  {
    icon: ShieldCheck,
    title: "Certificação ABNT",
    description: "Todos os produtos seguem rigorosamente a norma NBR 7480/2007. Segurança e confiabilidade garantidas.",
    tag: "NBR 7480",
    link: "/produtos"
  },
  {
    icon: Scissors,
    title: "Corte e Dobra Sob Medida",
    description: "Aço cortado e dobrado na medida exata do seu projeto. Economia de até 50% em mão de obra e zero desperdício.",
    tag: "−50% mão de obra",
    link: "/corte-e-dobra"
  },
  {
    icon: Recycle,
    title: "Desperdício Zero",
    description: "Cada peça é fabricada conforme o projeto estrutural. Sem sobras, sem perdas, sem custos extras desnecessários.",
    tag: "0% de perda",
    link: "/corte-e-dobra"
  },
  {
    icon: CreditCard,
    title: "Parcele em até 10x",
    description: "Condições facilitadas de pagamento no cartão de crédito. Porque investir na sua obra não precisa pesar no bolso.",
    tag: "Até 10×",
    link: "/contato"
  }
];

const DifferentialsSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionIntro
          eyebrow="Por que a BR Aço"
          title={<>Diferenciais que mudam<br className="hidden sm:block" /> o jogo na sua obra.</>}
          description="Engenharia, logística e tecnologia trabalhando para o seu cronograma — não contra ele."
        />

        {/* Spec sheet — separadores hairline (gap-px sobre fundo hairline) */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline border border-hairline rounded-2xl overflow-hidden">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={index} delay={(index % 3) * 80}>
                <Link
                  to={item.link}
                  className="group relative flex h-full flex-col bg-background p-7 sm:p-8 transition-colors hover:bg-secondary"
                >
                  <IndexNumber value={index + 1} className="absolute top-6 right-6 text-4xl" />

                  <Icon className="w-7 h-7 text-brand-orange" strokeWidth={1.5} />

                  <h3 className="font-display text-xl font-semibold text-brand-navy mt-6 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-brand-gray-medium text-sm leading-relaxed mt-3 flex-1">
                    {item.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between rule-tick pt-4">
                    <span className="label-eyebrow text-brand-gray-medium">{item.tag}</span>
                    <ArrowUpRight className="w-4 h-4 text-brand-gray-medium transition-all group-hover:text-brand-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
