import { Link } from 'react-router-dom';
import { Scissors, Columns3, Triangle, Grid3x3, LayoutGrid, CircleDot, Square, Hammer, ArrowRight, LucideIcon } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

interface Product {
  icon: LucideIcon;
  name: string;
  description: string;
  link: string;
  isHighlighted?: boolean;
}

const products: Product[] = [
  {
    icon: Scissors,
    name: "Corte e Dobra",
    description: "Aço sob medida. Reduza 50% da mão de obra e elimine desperdício.",
    link: "/corte-e-dobra",
    isHighlighted: true
  },
  {
    icon: Columns3,
    name: "Vergalhões",
    description: "Dentro da norma ABNT, qualidade superior para estruturas seguras.",
    link: "/produtos#vergalhoes"
  },
  {
    icon: Triangle,
    name: "Treliças",
    description: "Reduzem custos de escoramento e organizam o canteiro de obras.",
    link: "/produtos#trelicas"
  },
  {
    icon: Grid3x3,
    name: "Malhas",
    description: "Ideais para pisos industriais, pré-moldados e lajes.",
    link: "/produtos#malhas"
  },
  {
    icon: LayoutGrid,
    name: "Telas e Colunas",
    description: "Mais produtividade na obra, sem amarração manual com arames.",
    link: "/produtos#telas-e-colunas"
  },
  {
    icon: CircleDot,
    name: "Bobinas",
    description: "Alta resistência, aderência ao concreto e leveza estrutural.",
    link: "/produtos#bobinas"
  },
  {
    icon: Square,
    name: "Sapatas",
    description: "Fundação essencial para bases sólidas e duráveis.",
    link: "/produtos#sapatas"
  },
  {
    icon: Hammer,
    name: "Pregos e Arames",
    description: "Resistentes e prontos para aplicação direta em obras.",
    link: "/produtos#pregos-e-arames"
  }
];

const ProductsSection = () => {
  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle 
          title="Soluções Completas em Aço" 
          subtitle="Do vergalhão à sapata, tudo o que sua obra precisa com a qualidade BR Aço" 
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mt-12">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Link
                key={index}
                to={product.link}
                className={`bg-background rounded-2xl overflow-hidden hover:shadow-lg hover:border-brand-orange/20 transition-all duration-300 group cursor-pointer relative ${
                  product.isHighlighted 
                    ? 'border-2 border-brand-orange' 
                    : 'border border-border'
                }`}
              >
                {/* Highlighted badge */}
                {product.isHighlighted && (
                  <div className="absolute top-3 right-3 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    CARRO-CHEFE
                  </div>
                )}
                
                {/* Icon area */}
                <div className="h-32 bg-brand-gray-light flex items-center justify-center group-hover:bg-brand-orange/5 transition-colors">
                  <Icon className="w-12 h-12 text-brand-navy group-hover:text-brand-orange transition-colors" />
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-brand-navy">{product.name}</h3>
                  <p className="text-sm text-brand-gray-medium mt-1.5 line-clamp-2">{product.description}</p>
                  <span className="mt-3 text-brand-orange text-sm font-medium hover:underline inline-flex items-center gap-1">
                    Saiba mais <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
