import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { ChevronRight, MessageCircle, Clock, ArrowRight } from 'lucide-react';
import { blogPosts, categories } from '@/data/blogPosts';
import { useSEO } from '@/hooks/useSEO';

function readingTime(content: string): number {
  return Math.ceil(content.split(/\s+/).length / 200);
}

const CATEGORY_ACCENT: Record<string, string> = {
  'Corte e Dobra':   '#F97316',
  'Vergalhões':      '#2563EB',
  'Dicas Técnicas':  '#16A34A',
  'Normas ABNT':     '#9333EA',
  'Normas Técnicas': '#9333EA',
  'Treliças':        '#D97706',
  'Malhas':          '#0D9488',
  'Fundação':        '#78716C',
  'BR Aço':          '#1E3A5F',
  'Produtos':        '#4F46E5',
  'Gestão de Obra':  '#DC2626',
};

function accent(category: string): string {
  return CATEGORY_ACCENT[category] ?? '#F97316';
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const whatsappUrl = "https://wa.me/5562999247285?text=%5Bsrc%3Asite%5D%20Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

  useSEO({
    title: 'Blog BR Aço | Conteúdo Técnico sobre Aço e Construção Civil',
    description: 'Artigos técnicos sobre corte e dobra de vergalhão, normas ABNT, cálculo de aço, gestão de obra e dicas para construtores e engenheiros em Goiás.',
    canonical: 'https://grupobraco.com.br/blog',
  });

  const filteredPosts = activeCategory === 'Todos'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  const [featured, ...rest] = filteredPosts;

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-brand-navy py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Blog</span>
          </nav>
          <h1 className="text-4xl font-bold text-white">Blog BR Aço</h1>
          <p className="text-gray-300 mt-3">Conteúdos técnicos, dicas e novidades para acelerar sua obra</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4">

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-brand-orange text-white'
                    : 'bg-brand-gray-light text-brand-gray-medium hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          {featured && (
            <Link
              to={`/blog/${featured.slug}`}
              className="group block bg-background rounded-2xl border border-border hover:shadow-xl transition-all duration-300 mb-10 overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                <div
                  className="w-full h-1.5 md:h-auto md:w-2 flex-shrink-0"
                  style={{ backgroundColor: accent(featured.category) }}
                />
                <div className="p-8 flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full text-white"
                      style={{ backgroundColor: accent(featured.category) }}
                    >
                      {featured.category}
                    </span>
                    <span className="text-xs text-brand-gray-medium font-medium">Destaque</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-brand-navy group-hover:text-brand-orange transition-colors leading-snug">
                    {featured.title}
                  </h2>
                  <p className="text-brand-gray-medium mt-3 leading-relaxed line-clamp-2 max-w-3xl">
                    {featured.summary}
                  </p>
                  <div className="flex items-center gap-4 mt-6 flex-wrap">
                    <span className="text-sm text-brand-gray-medium">{featured.date}</span>
                    <span className="flex items-center gap-1 text-sm text-brand-gray-medium">
                      <Clock className="w-3.5 h-3.5" />
                      {readingTime(featured.content)} min de leitura
                    </span>
                    <span className="ml-auto text-brand-orange font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Ler artigo
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group bg-background rounded-2xl border border-border hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="h-1 w-full flex-shrink-0" style={{ backgroundColor: accent(post.category) }} />
                <div className="p-6 flex flex-col flex-1">
                  <span
                    className="text-xs font-bold uppercase tracking-wider"
                    style={{ color: accent(post.category) }}
                  >
                    {post.category}
                  </span>
                  <h3 className="text-lg font-semibold text-brand-navy mt-2 line-clamp-2 group-hover:text-brand-orange transition-colors leading-snug flex-1">
                    {post.title}
                  </h3>
                  <p className="text-sm text-brand-gray-medium mt-2 line-clamp-2">
                    {post.summary}
                  </p>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-brand-gray-medium">{post.date}</span>
                      <span className="flex items-center gap-1 text-xs text-brand-gray-medium">
                        <Clock className="w-3 h-3" />
                        {readingTime(post.content)} min
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-brand-orange group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-brand-gray-light rounded-2xl p-10 text-center mt-16">
            <h3 className="text-2xl font-bold text-brand-navy">Precisa de aço para sua obra?</h3>
            <p className="text-brand-gray-medium mt-2">
              Solicite um orçamento personalizado e receba em até 24 horas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Button asChild className="bg-brand-orange hover:bg-brand-orange-hover text-white rounded-full px-8">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Solicitar Orçamento</a>
              </Button>
              <Button variant="outline" asChild className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white rounded-full px-8">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Fale no WhatsApp
                </a>
              </Button>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
}
