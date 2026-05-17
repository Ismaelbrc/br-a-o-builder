import { Link } from 'react-router-dom';
import { Ruler, CircleDot, Pyramid, Grid2x2, Box, Wrench, ArrowRight, LucideIcon } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import productsBackground from '@/assets/products-background.jpg';

interface Product {
  icon: LucideIcon;
  name: string;
  description: string;
  link: string;
  isHighlighted?: boolean;
}

const products: Product[] = [
  {
    icon: Ruler,
    name: "Corte e Dobra",
    description: "Aço sob medida. Reduza 50% da mão de obra e elimine desperdício.",
    link: "/corte-e-dobra",
    isHighlighted: true
  },
  {
    icon: CircleDot,
    name: "Vergalhões",
    description: "CA-50 e CA-60 dentro da norma ABNT para estruturas seguras.",
    link: "/produtos#vergalhoes"
  },
  {
    icon: Pyramid,
    name: "Treliças",
    description: "TR08 a TR30. Reduzem escoramento e agilizam a montagem de lajes.",
    link: "/produtos#trelicas"
  },
  {
    icon: Grid2x2,
    name: "Telas e Malhas Pop",
    description: "Malhas soldadas para pisos, lajes e contenções com aplicação rápida.",
    link: "/produtos#telas-e-malhas-pop"
  },
  {
    icon: Box,
    name: "Colunas Prontas",
    description: "Armação pronta para pilares. Zero amarração manual em obra.",
    link: "/produtos#colunas"
  },
  {
    icon: Wrench,
    name: "Pregos e Arames",
    description: "Arame recozido e pregos para formas e amarrações diversas.",
    link: "/produtos#pregos-e-arames"
  }
];

const ProductsSection = () => {
  return (
    <section id="produtos" className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${productsBackground})` }}
      />
      {/* Light Overlay */}
      <div className="absolute inset-0 bg-background/95" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle 
          title="Soluções Completas em Aço" 
          subtitle="Do vergalhão à sapata, tudo o que sua obra precisa com a qualidade BR Aço" 
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mt-8 sm:mt-12">
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
                <div className="h-28 sm:h-32 bg-brand-gray-light flex items-center justify-center group-hover:bg-brand-orange/5 transition-colors">
                  <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-brand-navy group-hover:text-brand-orange transition-colors" />
                </div>
                
                {/* Content */}
                <div className="p-4 sm:p-5">
                  <h3 className="text-base sm:text-lg font-semibold text-brand-navy">{product.name}</h3>
                  <p className="text-sm text-brand-gray-medium mt-1 sm:mt-1.5 line-clamp-2">{product.description}</p>
                  <span className="mt-2 sm:mt-3 text-brand-orange text-sm font-medium hover:underline inline-flex items-center gap-1">
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
