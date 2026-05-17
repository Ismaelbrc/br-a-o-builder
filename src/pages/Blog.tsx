import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { ChevronRight, MessageCircle } from 'lucide-react';
import { blogPosts, categories } from '@/data/blogPosts';
import { useSEO } from '@/hooks/useSEO';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const whatsappUrl = "https://wa.me/5562999247285?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.";

  useSEO({
    title: 'Blog BR Aço | Conteúdo Técnico sobre Aço e Construção Civil',
    description: 'Artigos técnicos sobre corte e dobra de vergalhão, normas ABNT, cálculo de aço, gestão de obra e dicas para construtores e engenheiros em Goiás.',
    canonical: 'https://grupobraco.com.br/blog',
  });

  const filteredPosts = activeCategory === 'Todos' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

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
          <div className="flex flex-wrap gap-2 mb-8">
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

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-background rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 group"
              >
                <div 
                  className="h-48"
                  style={{ background: 'linear-gradient(135deg, hsl(var(--brand-navy)) 0%, hsl(var(--brand-orange) / 0.6) 100%)' }}
                />
                <div className="p-6">
                  <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-semibold text-brand-navy mt-2 line-clamp-2 group-hover:text-brand-orange transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-brand-gray-medium mt-2 line-clamp-2">
                    {post.summary}
                  </p>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-border">
                    <span className="text-xs text-brand-gray-medium">{post.date}</span>
                    <Link to={`/blog/${post.slug}`} className="text-sm text-brand-orange font-medium hover:underline">
                      Ler mais →
                    </Link>
                  </div>
                </div>
              </article>
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
