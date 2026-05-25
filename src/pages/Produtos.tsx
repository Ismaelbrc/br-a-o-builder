import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { analytics } from '@/lib/analytics';
import { useSEO } from '@/hooks/useSEO';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import {
  Scissors, Columns3, Triangle, Grid3x3, LayoutGrid,
  Hammer, MessageCircle, FileText,
  ChevronRight
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import imgCorteEDobra from '@/assets/products/corte-e-dobra.jpg';
import imgVergalhoes from '@/assets/products/vergalhoes.jpg';
import imgTrelicas from '@/assets/products/trelicas.jpg';
import imgTelasMalhas from '@/assets/products/telas-malhas.jpg';
import imgColunas from '@/assets/products/colunas.jpg';
import imgPregosArames from '@/assets/products/pregos-arames.jpg';

interface Product {
  id: string;
  icon: LucideIcon;
  image: string;
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
    image: imgCorteEDobra,
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
    image: imgVergalhoes,
    badge: "ABNT NBR 7480",
    title: "Vergalhões",
    description: "Produzidos rigorosamente dentro das normas da ABNT, nossos vergalhões garantem qualidade superior e segurança estrutural em obras de todos os portes. Disponíveis nas classes CA-25, CA-50 e CA-60, com certificado de qualidade.",
    applications: ["Fundações", "Pilares", "Vigas", "Estruturas de concreto armado", "Pontes"],
    whatsappMsg: "Olá! Tenho interesse em Vergalhões. Poderia me enviar um orçamento?"
  },
  {
    id: "trelicas",
    icon: Triangle,
    image: imgTrelicas,
    badge: "REDUÇÃO DE CUSTOS",
    title: "Treliças",
    description: "Reduzem custos de escoramento e promovem maior organização no canteiro de obras. Fabricadas em aço CA-60 nervurado, garantem melhor aderência ao concreto e simplificam a montagem de armaduras.",
    applications: ["Lajes", "Pisos", "Coberturas", "Estruturas pré-moldadas"],
    whatsappMsg: "Olá! Tenho interesse em Treliças. Poderia me enviar um orçamento?"
  },
  {
    id: "telas-e-malhas-pop",
    icon: Grid3x3,
    image: imgTelasMalhas,
    badge: "ALTA PRODUTIVIDADE",
    title: "Telas e Malhas Pop",
    description: "Ideais para pisos industriais, estruturas pré-moldadas e lajes. Produzidas em aço CA-60 nervurado e soldado em todos os pontos de cruzamento, proporcionando distribuição uniforme de cargas.",
    applications: ["Pisos industriais", "Lajes", "Pré-moldados", "Paredes de concreto armado"],
    whatsappMsg: "Olá! Tenho interesse em Telas e Malhas Pop. Poderia me enviar um orçamento?"
  },
  {
    id: "colunas",
    icon: LayoutGrid,
    image: imgColunas,
    badge: "PRATICIDADE",
    title: "Colunas",
    description: "Aumentam significativamente a produtividade da obra e eliminam a necessidade de amarração manual com arames. Proporcionam estruturas mais leves e aderentes ao concreto.",
    applications: ["Lajes", "Pisos", "Muros", "Estruturas de concreto", "Reforço estrutural"],
    whatsappMsg: "Olá! Tenho interesse em Colunas. Poderia me enviar um orçamento?"
  },
  {
    id: "pregos-e-arames",
    icon: Hammer,
    image: imgPregosArames,
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
  const whatsappUrl = `https://wa.me/556299247285?text=${encodeURIComponent('[src:site] ' + product.whatsappMsg)}`;
  const genericWhatsappUrl = "https://wa.me/556299247285?text=%5Bsrc%3Asite%5D%20Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20especialista.";

  const imageSection = (
    <div className="h-64 md:h-80 rounded-2xl overflow-hidden">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-full object-cover"
      />
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
  useSEO({
    title: 'Produtos | Vergalhões, Treliças, Corte e Dobra em Goiânia | BR Aço',
    description: 'Catálogo completo: vergalhões CA-25, CA-50, CA-60, treliças metálicas, telas soldadas, malha pop, colunas armadas e pregos. Entrega em até 48h em Goiás.',
    canonical: 'https://grupobraco.com.br/produtos',
    keywords: 'vergalhão goiânia, ca-50 goiânia, ca-60 goiânia, treliça metálica, tela soldada, malha pop, produtos aço construção',
  });

  const { hash } = useLocation();

  // Scroll to product section when navigating with hash (#vergalhoes, #trelicas etc.)
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const attempt = (tries: number) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top, behavior: 'smooth' });
        } else if (tries > 0) {
          setTimeout(() => attempt(tries - 1), 150);
        }
      };
      setTimeout(() => attempt(5), 100);
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [hash]);

  useEffect(() => { analytics.viewContent('Produtos'); }, []);

  const whatsappUrl = "https://wa.me/556299247285?text=%5Bsrc%3Asite%5D%20Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20BR%20A%C3%A7o.";

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
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
