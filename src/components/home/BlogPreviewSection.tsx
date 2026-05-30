import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Clock } from 'lucide-react';
import SectionIntro from '@/components/SectionIntro';
import Reveal from '@/components/Reveal';
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
    <section className="py-16 sm:py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <SectionIntro
            eyebrow="Canteiro digital"
            title="Conteúdo para a sua obra."
            description="Dicas técnicas e novidades do setor da construção civil."
          />
          <Link
            to="/blog"
            className="hidden sm:inline-flex items-center gap-2 text-brand-navy hover:text-brand-orange font-semibold text-sm transition-colors flex-shrink-0 rule-tick pt-4"
          >
            Ver todos os artigos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline border border-hairline rounded-2xl overflow-hidden mt-12">
          {latestPosts.map((post, index) => (
            <Reveal key={post.id} delay={index * 80}>
              <Link
                to={`/blog/${post.slug}`}
                className="group flex h-full flex-col bg-card p-7 transition-colors hover:bg-secondary"
              >
                <span
                  className="label-eyebrow"
                  style={{ color: accent(post.category) }}
                >
                  {post.category}
                </span>
                <h3 className="font-display text-lg font-semibold text-brand-navy mt-4 line-clamp-3 group-hover:text-brand-orange transition-colors leading-snug flex-1 tracking-tight">
                  {post.title}
                </h3>
                <p className="text-sm text-brand-gray-medium mt-3 line-clamp-2">
                  {post.summary}
                </p>
                <div className="flex justify-between items-center mt-6 rule-tick pt-4">
                  <div className="flex items-center gap-3">
                    <span className="label-eyebrow text-brand-gray-medium">{post.date}</span>
                    <span className="flex items-center gap-1 label-eyebrow text-brand-gray-medium">
                      <Clock className="w-3 h-3" />
                      {post.readingTime}min
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-brand-gray-medium transition-all group-hover:text-brand-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 sm:hidden">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-brand-orange font-semibold transition-colors"
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
