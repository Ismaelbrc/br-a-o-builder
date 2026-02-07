import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

interface BlogPost {
  category: string;
  title: string;
  summary: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    category: 'Corte e Dobra',
    title: 'Vantagens do Corte e Dobra na construção civil',
    summary: 'Descubra como o serviço de corte e dobra pode reduzir custos e acelerar sua obra de forma significativa.',
    date: '15 Jan 2026',
  },
  {
    category: 'Dicas Técnicas',
    title: 'Como calcular a quantidade de aço para sua obra',
    summary: 'Guia prático para calcular vergalhões, malhas e treliças de forma eficiente e sem desperdício.',
    date: '10 Jan 2026',
  },
  {
    category: 'Normas',
    title: 'Normas ABNT para vergalhões: o que você precisa saber',
    summary: 'Entenda os requisitos da NBR 7480 e como garantir segurança estrutural na sua construção.',
    date: '05 Jan 2026',
  },
];

const BlogPreviewSection = () => {
  return (
    <section className="py-20 md:py-24 bg-brand-gray-light">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          title="Conteúdo para sua Obra"
          subtitle="Dicas técnicas e novidades do setor da construção civil"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Image Placeholder */}
              <div 
                className="h-48"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--brand-navy)) 0%, hsl(var(--brand-orange) / 0.8) 100%)'
                }}
              />

              {/* Content */}
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

                {/* Footer */}
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                  <span className="text-xs text-brand-gray-medium">
                    {post.date}
                  </span>
                  <span className="text-sm text-brand-orange font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Ler mais
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white rounded-full px-8 py-4 font-semibold transition-colors"
          >
            Ver todos os artigos
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
