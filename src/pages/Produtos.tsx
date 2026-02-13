import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { 
  Scissors, Columns3, Triangle, Grid3x3, LayoutGrid, 
  Hammer, MessageCircle, FileText,
  ChevronRight
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface Product {
  id: string;
  icon: LucideIcon;
  badge: string;
  badgeHighlight?: boolean;
  title: string;
  description: string;
  applications: string[];
  whatsappMsg: string;
  extraLink?: { text: string; href: string };
}

const products: Product[] = [
  {
    id: "corte-e-dobra-section",
    icon: Scissors,
    badge: "★ CARRO-CHEFE",
    badgeHighlight: true,
    title: "Corte e Dobra",
    description: "O aço feito sob medida para a sua obra. Com equipamentos de alta tecnologia, cortamos e dobramos vergalhões com precisão milimétrica, conforme o projeto estrutural. Reduza em até 50% o custo com mão de obra, elimine 100% do desperdício e receba tudo pronto para armar, identificado e organizado.",
    applications: ["Fundações", "Pilares", "Vigas", "Lajes", "Escadas", "Muros de Arrimo", "Pisos Armados", "Blocos"],
    whatsappMsg: "Olá! Tenho interesse no serviço de Corte e Dobra. Poderia me enviar um orçamento?",
    extraLink: { text: "Ver página completa →", href: "/corte-e-dobra" }
  },
  {
    id: "vergalhoes",
    icon: Columns3,
    badge: "ABNT NBR 7480",
    title: "Vergalhões",
    description: "Produzidos rigorosamente dentro das normas da ABNT, nossos vergalhões garantem qualidade superior e segurança estrutural em obras de todos os portes. Disponíveis nas classes CA-25, CA-50 e CA-60, com certificado de qualidade.",
    applications: ["Fundações", "Pilares", "Vigas", "Estruturas de concreto armado", "Pontes"],
    whatsappMsg: "Olá! Tenho interesse em Vergalhões. Poderia me enviar um orçamento?"
  },
  {
    id: "trelicas",
    icon: Triangle,
    badge: "REDUÇÃO DE CUSTOS",
    title: "Treliças",
    description: "Reduzem custos de escoramento e promovem maior organização no canteiro de obras. Fabricadas em aço CA-60 nervurado, garantem melhor aderência ao concreto e simplificam a montagem de armaduras.",
    applications: ["Lajes", "Pisos", "Coberturas", "Estruturas pré-moldadas"],
    whatsappMsg: "Olá! Tenho interesse em Treliças. Poderia me enviar um orçamento?"
  },
  {
    id: "telas-e-malhas-pop",
    icon: Grid3x3,
    badge: "ALTA PRODUTIVIDADE",
    title: "Telas e Malhas Pop",
    description: "Ideais para pisos industriais, estruturas pré-moldadas e lajes. Produzidas em aço CA-60 nervurado e soldado em todos os pontos de cruzamento, proporcionando distribuição uniforme de cargas.",
    applications: ["Pisos industriais", "Lajes", "Pré-moldados", "Paredes de concreto armado"],
    whatsappMsg: "Olá! Tenho interesse em Telas e Malhas Pop. Poderia me enviar um orçamento?"
  },
  {
    id: "colunas",
    icon: LayoutGrid,
    badge: "PRATICIDADE",
    title: "Colunas",
    description: "Aumentam significativamente a produtividade da obra e eliminam a necessidade de amarração manual com arames. Proporcionam estruturas mais leves e aderentes ao concreto.",
    applications: ["Lajes", "Pisos", "Muros", "Estruturas de concreto", "Reforço estrutural"],
    whatsappMsg: "Olá! Tenho interesse em Colunas. Poderia me enviar um orçamento?"
  },
  {
    id: "pregos-e-arames",
    icon: Hammer,
    badge: "ESSENCIAIS",
    title: "Pregos e Arames",
    description: "Fabricados com composição química adequada que garante resistência durante o uso. Prontos para aplicação direta em obras, disponíveis em diversos modelos e tamanhos.",
    applications: ["Fixação de formas", "Amarração de armaduras", "Acabamento", "Construção geral"],
    whatsappMsg: "Olá! Tenho interesse em Pregos e Arames. Poderia me enviar um orçamento?"
  }
];

const ProductSection = ({ product, index }: { product: Product; index: number }) => {
  const Icon = product.icon;
  const isEven = index % 2 === 0;
  const whatsappUrl = `https://wa.me/5562999247285?text=${encodeURIComponent(product.whatsappMsg)}`;
  const genericWhatsappUrl = "https://wa.me/5562999247285?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista.";

  const imageSection = (
    <div className="h-64 md:h-80 rounded-2xl bg-brand-gray-light flex items-center justify-center">
      <Icon className="w-20 h-20 text-brand-navy/20" />
    </div>
  );

  const textSection = (
    <div>
      <span className={`inline-flex items-center text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${
        product.badgeHighlight 
          ? 'bg-brand-orange text-white' 
          : 'bg-brand-orange/10 text-brand-orange'
      }`}>
        {product.badge}
      </span>
      
      <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mt-3">
        {product.title}
      </h3>
      
      <p className="text-brand-gray-medium leading-relaxed mt-4">
        {product.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mt-4">
        {product.applications.map((app, i) => (
          <span 
            key={i}
            className="bg-brand-gray-light text-brand-gray-dark text-sm px-3 py-1.5 rounded-lg"
          >
            {app}
          </span>
        ))}
      </div>
      
      <div className="flex flex-wrap gap-3 mt-6">
        <Button asChild className="bg-brand-orange hover:bg-brand-orange-hover text-white">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-4 h-4 mr-2" />
            Solicitar Orçamento
          </a>
        </Button>
        <Button variant="outline" asChild className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white">
          <a href={genericWhatsappUrl} target="_blank" rel="noopener noreferrer">
            Falar com Especialista
          </a>
        </Button>
      </div>
      
      {product.extraLink && (
        <Link 
          to={product.extraLink.href}
          className="inline-flex items-center gap-1 text-brand-orange font-medium mt-4 hover:underline"
        >
          {product.extraLink.text}
        </Link>
      )}
    </div>
  );

  return (
    <section 
      id={product.id}
      className={`py-12 ${index < products.length - 1 ? 'border-b border-border' : ''}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {isEven ? (
          <>
            {imageSection}
            {textSection}
          </>
        ) : (
          <>
            <div className="order-2 lg:order-1">{textSection}</div>
            <div className="order-1 lg:order-2">{imageSection}</div>
          </>
        )}
      </div>
    </section>
  );
};

export default function Produtos() {
  const whatsappUrl = "https://wa.me/5562999247285?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20BR%20Aço.";

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Produtos</span>
          </nav>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Nossos Produtos
          </h1>
          <p className="text-xl text-gray-300 mt-4 max-w-2xl">
            Soluções completas em aço para toda a sua obra — do projeto à entrega, com qualidade certificada
          </p>
        </div>
      </section>

      {/* Catalog */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          {products.map((product, index) => (
            <ProductSection key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-brand-gray-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-background rounded-2xl p-10 shadow-sm border border-border max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy">
              Não encontrou o que precisa?
            </h2>
            <p className="text-brand-gray-medium mt-3">
              Fale com nossos especialistas. Atendemos obras de todos os portes com soluções personalizadas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button asChild className="bg-brand-orange hover:bg-brand-orange-hover text-white">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Falar no WhatsApp
                </a>
              </Button>
              <Button variant="outline" asChild className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white">
                <Link to="/contato">
                  <FileText className="w-4 h-4 mr-2" />
                  Formulário de Contato
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
