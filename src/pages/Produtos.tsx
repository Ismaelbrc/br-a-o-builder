import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { analytics } from '@/lib/analytics';
import { useSEO } from '@/hooks/useSEO';
import Layout from '@/components/Layout';
import Eyebrow from '@/components/Eyebrow';
import Reveal from '@/components/Reveal';
import ProductBlueprint, { BlueprintKey } from '@/components/ProductBlueprint';
import { Button } from '@/components/ui/button';
import { MessageCircle, ArrowRight, ChevronRight } from 'lucide-react';

interface Product {
  id: string;
  code: string;
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
    code: "01",
    badge: "Carro-chefe",
    badgeHighlight: true,
    title: "Corte e Dobra",
    description: "O aço feito sob medida para a sua obra. Com equipamentos de alta tecnologia, cortamos e dobramos vergalhões com precisão milimétrica, conforme o projeto estrutural. Reduza em até 50% o custo com mão de obra, elimine 100% do desperdício e receba tudo pronto para armar, identificado e organizado.",
    applications: ["Fundações", "Pilares", "Vigas", "Lajes", "Escadas", "Muros de Arrimo", "Pisos Armados", "Blocos"],
    whatsappMsg: "Olá! Tenho interesse no serviço de Corte e Dobra. Poderia me enviar um orçamento?",
    extraLink: { text: "Ver página completa", href: "/corte-e-dobra" }
  },
  {
    id: "vergalhoes",
    code: "02",
    badge: "ABNT NBR 7480",
    title: "Vergalhões",
    description: "Produzidos rigorosamente dentro das normas da ABNT, nossos vergalhões garantem qualidade superior e segurança estrutural em obras de todos os portes. Disponíveis nas classes CA-25, CA-50 e CA-60, com certificado de qualidade.",
    applications: ["Fundações", "Pilares", "Vigas", "Estruturas de concreto armado", "Pontes"],
    whatsappMsg: "Olá! Tenho interesse em Vergalhões. Poderia me enviar um orçamento?"
  },
  {
    id: "trelicas",
    code: "03",
    badge: "Redução de custos",
    title: "Treliças",
    description: "Reduzem custos de escoramento e promovem maior organização no canteiro de obras. Fabricadas em aço CA-60 nervurado, garantem melhor aderência ao concreto e simplificam a montagem de armaduras.",
    applications: ["Lajes", "Pisos", "Coberturas", "Estruturas pré-moldadas"],
    whatsappMsg: "Olá! Tenho interesse em Treliças. Poderia me enviar um orçamento?"
  },
  {
    id: "telas-e-malhas-pop",
    code: "04",
    badge: "Alta produtividade",
    title: "Telas e Malhas Pop",
    description: "Ideais para pisos industriais, estruturas pré-moldadas e lajes. Produzidas em aço CA-60 nervurado e soldado em todos os pontos de cruzamento, proporcionando distribuição uniforme de cargas.",
    applications: ["Pisos industriais", "Lajes", "Pré-moldados", "Paredes de concreto armado"],
    whatsappMsg: "Olá! Tenho interesse em Telas e Malhas Pop. Poderia me enviar um orçamento?"
  },
  {
    id: "colunas",
    code: "05",
    badge: "Praticidade",
    title: "Colunas",
    description: "Aumentam significativamente a produtividade da obra e eliminam a necessidade de amarração manual com arames. Proporcionam estruturas mais leves e aderentes ao concreto.",
    applications: ["Lajes", "Pisos", "Muros", "Estruturas de concreto", "Reforço estrutural"],
    whatsappMsg: "Olá! Tenho interesse em Colunas. Poderia me enviar um orçamento?"
  },
  {
    id: "pregos-e-arames",
    code: "06",
    badge: "Essenciais",
    title: "Pregos e Arames",
    description: "Fabricados com composição química adequada que garante resistência durante o uso. Prontos para aplicação direta em obras, disponíveis em diversos modelos e tamanhos.",
    applications: ["Fixação de formas", "Amarração de armaduras", "Acabamento", "Construção geral"],
    whatsappMsg: "Olá! Tenho interesse em Pregos e Arames. Poderia me enviar um orçamento?"
  }
];

const ProductSection = ({ product, index }: { product: Product; index: number }) => {
  const isEven = index % 2 === 0;
  const whatsappUrl = `https://wa.me/556296472423?text=${encodeURIComponent(product.whatsappMsg)}`;
  const genericWhatsappUrl = "https://wa.me/556296472423?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20especialista.";

  const bpKey: BlueprintKey = product.id === 'corte-e-dobra-section' ? 'corte-e-dobra' : (product.id as BlueprintKey);
  const blueprint = (
    <Reveal className="group">
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-hairline">
        <ProductBlueprint id={bpKey} />
      </div>
    </Reveal>
  );

  const textSection = (
    <div>
      <div className="flex items-center gap-4">
        <span className="font-display text-4xl font-bold text-brand-navy/15 tabular-nums leading-none">{product.code}</span>
        <span className={`label-eyebrow ${product.badgeHighlight ? 'text-brand-orange' : 'text-brand-gray-medium'}`}>
          {product.badge}
        </span>
      </div>

      <h3 className="font-display text-2xl md:text-3xl font-bold text-brand-navy mt-4 tracking-tight">
        {product.title}
      </h3>

      <p className="text-brand-gray-medium leading-relaxed mt-4">
        {product.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-6">
        {product.applications.map((app, i) => (
          <span
            key={i}
            className="border border-hairline text-brand-navy text-sm px-3 py-1.5 rounded-full"
          >
            {app}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 mt-7">
        <Button asChild className="bg-brand-orange hover:bg-brand-orange-hover text-white rounded-lg">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-4 h-4 mr-2" />
            Solicitar Orçamento
          </a>
        </Button>
        <Button variant="outline" asChild className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white rounded-lg">
          <a href={genericWhatsappUrl} target="_blank" rel="noopener noreferrer">
            Falar com Especialista
          </a>
        </Button>
      </div>

      {product.extraLink && (
        <Link
          to={product.extraLink.href}
          className="group inline-flex items-center gap-1.5 text-brand-orange font-semibold mt-5"
        >
          {product.extraLink.text}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );

  return (
    <section
      id={product.id}
      className={`py-12 md:py-16 ${index < products.length - 1 ? 'border-b border-hairline' : ''}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {isEven ? (
          <>
            {blueprint}
            {textSection}
          </>
        ) : (
          <>
            <div className="order-2 lg:order-1">{textSection}</div>
            <div className="order-1 lg:order-2">{blueprint}</div>
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

  const whatsappUrl = "https://wa.me/556296472423?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20BR%20A%C3%A7o.";

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-metal overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-[0.10] pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <nav className="flex items-center gap-2 label-eyebrow text-white/40 mb-10" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Produtos</span>
          </nav>

          <Eyebrow tone="light">Linha completa</Eyebrow>
          <h1 className="text-display-xl text-white mt-6 max-w-[16ch]">
            Tudo o que a sua obra precisa em aço.
          </h1>
          <p className="text-lg text-white/75 mt-6 max-w-2xl">
            Soluções completas — do projeto à entrega, com qualidade certificada ABNT e logística própria.
          </p>
        </div>
      </section>

      {/* Catalog */}
      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {products.map((product, index) => (
            <ProductSection key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative overflow-hidden bg-brand-navy rounded-2xl p-10 md:p-14 text-center">
            <div className="absolute inset-0 bg-blueprint opacity-[0.07] pointer-events-none" aria-hidden="true" />
            <div className="relative">
              <Eyebrow tone="light" className="justify-center">Atendimento técnico</Eyebrow>
              <h2 className="text-display-md text-white mt-5">
                Não encontrou o que precisa?
              </h2>
              <p className="text-white/70 mt-4 max-w-xl mx-auto">
                Fale com nossos especialistas. Atendemos obras de todos os portes com soluções personalizadas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button asChild className="bg-brand-orange hover:bg-brand-orange-hover text-white rounded-lg px-8 py-6 text-base">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Falar no WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
