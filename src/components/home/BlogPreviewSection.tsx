import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
// ⚠  Importa só metadados (sem content) — mantem a home page leve
import { blogPostsMeta } from '@/data/blogPostsMeta';

// 3 posts mais recentes para exibir na home
const latestPosts = [...blogPostsMeta].sort((a, b) => b.id - a.id).slice(0, 3);

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
  'Concreto':        '#6B7280',
  'Projeto Estrutural': '#0891B2',
};

function accent(category: string): string {
  return CATEGORY_ACCENT[category] ?? '#F97316';
}

const BlogPreviewSection = () => {
  return (
    <section className="py-20 md:py-24 bg-brand-gray-light">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          title="Conteúdo para sua Obra"
          subtitle="Dicas técnicas e novidades do setor da construção civil"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {latestPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col"
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
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-brand-gray-medium">{post.date}</span>
                    <span className="flex items-center gap-1 text-xs text-brand-gray-medium">
                      <Clock className="w-3 h-3" />
                      {post.readingTime} min
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-brand-orange group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

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
