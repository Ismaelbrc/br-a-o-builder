import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SectionIntro from '@/components/SectionIntro';
import Reveal from '@/components/Reveal';
import ProductBlueprint, { BlueprintKey } from '@/components/ProductBlueprint';

interface Product {
  blueprint: BlueprintKey;
  code: string;
  name: string;
  description: string;
  link: string;
  isHighlighted?: boolean;
}

const products: Product[] = [
  {
    blueprint: "corte-e-dobra",
    code: "01",
    name: "Corte e Dobra",
    description: "Aço sob medida. Reduza 50% da mão de obra e elimine desperdício.",
    link: "/corte-e-dobra",
    isHighlighted: true
  },
  {
    blueprint: "vergalhoes",
    code: "02",
    name: "Vergalhões",
    description: "CA-50 e CA-60 dentro da norma ABNT para estruturas seguras.",
    link: "/produtos#vergalhoes"
  },
  {
    blueprint: "trelicas",
    code: "03",
    name: "Treliças",
    description: "TR08 a TR30. Reduzem escoramento e agilizam a montagem de lajes.",
    link: "/produtos#trelicas"
  },
  {
    blueprint: "telas-e-malhas-pop",
    code: "04",
    name: "Telas e Malhas Pop",
    description: "Malhas soldadas para pisos, lajes e contenções com aplicação rápida.",
    link: "/produtos#telas-e-malhas-pop"
  },
  {
    blueprint: "colunas",
    code: "05",
    name: "Colunas Prontas",
    description: "Armação pronta para pilares. Zero amarração manual em obra.",
    link: "/produtos#colunas"
  },
  {
    blueprint: "pregos-e-arames",
    code: "06",
    name: "Pregos e Arames",
    description: "Arame recozido e pregos para formas e amarrações diversas.",
    link: "/produtos#pregos-e-arames"
  }
];

const ProductsSection = () => {
  return (
    <section id="produtos" className="py-16 sm:py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionIntro
          eyebrow="Linha completa"
          title="Soluções completas em aço."
          description="Do vergalhão à coluna pronta — tudo o que a sua obra precisa, com a qualidade BR Aço."
        />

        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {products.map((product, index) => (
            <Reveal key={index} delay={(index % 3) * 80}>
              <Link
                to={product.link}
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:-translate-y-1 ${
                  product.isHighlighted
                    ? 'border-brand-orange'
                    : 'border-hairline hover:border-brand-orange/40'
                }`}
              >
                {/* Blueprint técnico (sem foto estática) */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ProductBlueprint id={product.blueprint} />
                  <span className="absolute top-4 left-4 label-eyebrow text-white/60 text-spec z-10">{product.code}</span>
                  {product.isHighlighted && (
                    <span className="absolute top-4 right-4 bg-brand-orange text-white label-eyebrow px-3 py-1.5 rounded-full z-10">
                      Carro-chefe
                    </span>
                  )}
                </div>

                {/* Conteúdo */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-semibold text-brand-navy tracking-tight">{product.name}</h3>
                  <p className="text-sm text-brand-gray-medium mt-2 flex-1">{product.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-brand-orange text-sm font-semibold">
                    Saiba mais
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
