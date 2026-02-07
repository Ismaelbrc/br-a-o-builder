import { Link } from 'react-router-dom';
import { 
  Flame, 
  Truck, 
  Cpu, 
  TrendingUp, 
  Award, 
  Home,
  ShieldCheck,
  Headphones,
  PiggyBank,
  Target,
  CreditCard
} from 'lucide-react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import StatsSection from '@/components/home/StatsSection';

// Timeline data
const timelineItems = [
  {
    icon: Flame,
    title: "Fundação na Pandemia",
    description: "Em um dos momentos mais desafiadores da história, sócios jovens e inovadores fundaram a BR Aço com a missão de transformar a construção civil de Goiás."
  },
  {
    icon: Truck,
    title: "Primeiras Entregas",
    description: "Os primeiros pedidos foram entregues, construindo uma reputação de agilidade e qualidade que se tornaria a marca registrada da empresa."
  },
  {
    icon: Cpu,
    title: "Automação Total da Produção",
    description: "Investimento massivo em máquinas de última geração, tornando a produção 100% automatizada com precisão milimétrica."
  },
  {
    icon: TrendingUp,
    title: "Scale-UP 2022",
    description: "Reconhecida como uma das empresas mais promissoras e inovadoras do estado de Goiás no programa Scale-UP."
  },
  {
    icon: Award,
    title: "Maior de Goiás",
    description: "Consolidação como a maior e melhor indústria de aço para construção civil do estado, com centenas de colaboradores."
  },
  {
    icon: Home,
    title: "+10 Mil Casas Construídas",
    description: "Marco histórico: mais de 10 mil casas em Goiás foram construídas com aço BR Aço, transformando o sonho da casa própria em realidade para milhares de famílias."
  }
];

// Differentials data
const differentials = [
  {
    icon: Truck,
    title: "Entrega Garantida",
    description: "Produtos prontos entregues em até 2 dias úteis. Para o serviço de Corte e Dobra, o prazo é de até 7 dias úteis. Pontualidade é compromisso."
  },
  {
    icon: Cpu,
    title: "Produção Automatizada",
    description: "Máquinas de ponta operando com automação total, garantindo uniformidade, rastreabilidade e padrão de qualidade em cada peça produzida."
  },
  {
    icon: ShieldCheck,
    title: "Certificação ABNT NBR 7480/2007",
    description: "Todos os nossos produtos são fabricados em conformidade com as normas técnicas brasileiras, assegurando segurança estrutural."
  },
  {
    icon: Headphones,
    title: "Atendimento Técnico Personalizado",
    description: "Engenheiros e técnicos especializados acompanham cada etapa da sua obra, desde o projeto até a entrega final."
  },
  {
    icon: PiggyBank,
    title: "Economia Real",
    description: "O serviço de Corte e Dobra pode reduzir em até 50% os custos com mão de obra, além de eliminar desperdício de material."
  },
  {
    icon: Target,
    title: "Desperdício Zero",
    description: "Cada peça é fabricada sob medida, conforme o projeto estrutural. Eliminação total de sobras e custos extras."
  },
  {
    icon: CreditCard,
    title: "Parcelamento Facilitado",
    description: "Aceitamos pagamento em até 10x no cartão de crédito. Investir na sua obra com condições que cabem no seu planejamento."
  }
];

export default function Sobre() {
  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="py-16 md:py-20"
        style={{ backgroundColor: 'hsl(var(--brand-navy))' }}
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Sobre</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Sobre a BR Aço
          </h1>
          <p className="text-xl text-gray-300 mt-4 max-w-2xl">
            Construindo casas e vidas com simplicidade e energia
          </p>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-xl md:text-2xl text-brand-gray-dark leading-relaxed font-light">
            "Nós nascemos do aço — mas o que nos move é o progresso."
          </p>

          <p className="text-lg text-brand-gray-medium leading-relaxed mt-6">
            Não somos apenas uma indústria: somos uma força que transforma o concreto 
            em conquista, a estrutura em segurança, o projeto em realização.
          </p>

          <p className="text-lg text-brand-gray-medium leading-relaxed mt-6">
            Fomos forjados na crise, lapidados na adversidade e hoje nos posicionamos 
            como a maior indústria de aço para construção civil em Goiás. Porque não 
            basta crescer — é preciso erguer juntos.
          </p>

          <p className="text-lg text-brand-gray-medium leading-relaxed mt-6">
            Aceleramos obras. Eliminamos desperdícios. Otimizamos mão de obra. 
            Democratizamos o acesso à alta performance na construção. E fazemos tudo 
            isso com engenharia, automação, rastreabilidade e alma.
          </p>

          <p className="mt-10 text-3xl md:text-4xl font-bold text-brand-orange leading-tight">
            "Entregamos confiança, velocidade e inovação."
          </p>

          <div className="w-20 h-1 bg-brand-orange mx-auto mt-6 rounded-full" />
        </div>
      </section>

      {/* Stats Section (reutilizado da Home) */}
      <StatsSection />

      {/* Timeline Section */}
      <section className="py-20 md:py-24 bg-brand-gray-light">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            title="Nossa Trajetória"
            subtitle="De uma ideia ousada à maior indústria de aço de Goiás"
          />

          <div className="max-w-4xl mx-auto mt-12 relative">
            {/* Vertical Line - Desktop: center, Mobile: left */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-brand-orange/20" />

            {/* Timeline Items */}
            <div className="space-y-8 md:space-y-12">
              {timelineItems.map((item, index) => {
                const isEven = index % 2 === 0;
                const Icon = item.icon;

                return (
                  <div 
                    key={index}
                    className={`relative flex items-start md:items-center ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Dot on line */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-orange border-4 border-brand-gray-light z-10" />

                    {/* Spacer for mobile */}
                    <div className="w-12 md:hidden" />

                    {/* Card */}
                    <div className={`flex-1 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <div className={`bg-white rounded-xl p-6 shadow-sm border border-gray-100 max-w-md ${
                        isEven ? 'md:ml-auto' : ''
                      }`}>
                        <div className={`w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center mb-3 ${
                          isEven ? 'md:ml-auto' : ''
                        }`}>
                          <Icon className="w-5 h-5 text-brand-orange" />
                        </div>
                        <h3 className="text-lg font-semibold text-brand-navy">
                          {item.title}
                        </h3>
                        <p className="text-sm text-brand-gray-medium mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Spacer for desktop */}
                    <div className="hidden md:block flex-1" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle
            title="Nossos Diferenciais"
            subtitle="O que nos torna a escolha certa para a sua obra"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
            {differentials.map((diff, index) => {
              const Icon = diff.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-brand-orange/20 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-5 group-hover:bg-brand-orange transition-colors">
                    <Icon className="w-7 h-7 text-brand-orange group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-navy mb-3">
                    {diff.title}
                  </h3>
                  <p className="text-brand-gray-medium text-sm leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-orange">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white">
            Conheça nossas soluções
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              to="/produtos"
              className="bg-white text-brand-orange font-semibold rounded-full px-8 py-4 hover:bg-gray-100 transition-colors text-center"
            >
              Ver Produtos
            </Link>
            <Link
              to="/contato"
              className="border-2 border-white text-white font-semibold rounded-full px-8 py-4 hover:bg-white hover:text-brand-orange transition-colors text-center"
            >
              Solicitar Orçamento
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
