import { useParams, Link, Navigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { ChevronRight, MessageCircle, ArrowLeft, Calendar, Tag } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';
import { useSEO } from '@/hooks/useSEO';

function BlogPostContent({ slug }: { slug: string }) {
  const post = blogPosts.find(p => p.slug === slug)!;
  const whatsappUrl = "https://wa.me/5562999247285?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.";

  useSEO({
    title: `${post.title} | BR Aço`,
    description: post.metaDescription,
    canonical: `https://grupobraco.com.br/blog/${post.slug}`,
    ogType: 'article',
  });

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-brand-navy py-16">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white line-clamp-1">{post.title}</span>
          </nav>
          
          <span className="inline-block bg-brand-orange/20 text-brand-orange px-3 py-1 rounded-full text-sm font-medium mb-4">
            {post.category}
          </span>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 mt-6 text-gray-300 text-sm">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              {post.keyword}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-brand-orange hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para o Blog
          </Link>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none prose-headings:text-brand-navy prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-brand-gray-medium prose-p:leading-relaxed prose-li:text-brand-gray-medium prose-strong:text-brand-navy prose-ul:my-4 prose-li:my-1">
            {post.content.split('\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return <h2 key={index}>{paragraph.replace('## ', '')}</h2>;
              }
              if (paragraph.startsWith('### ')) {
                return <h3 key={index}>{paragraph.replace('### ', '')}</h3>;
              }
              if (paragraph.startsWith('- **')) {
                const content = paragraph.replace('- **', '').replace('**', ': ');
                return <li key={index} className="ml-4"><strong>{content.split(': ')[0]}</strong>{content.includes(': ') ? ': ' + content.split(': ').slice(1).join(': ') : ''}</li>;
              }
              if (paragraph.startsWith('- ')) {
                return <li key={index} className="ml-4">{paragraph.replace('- ', '')}</li>;
              }
              if (paragraph.match(/^\d\. /)) {
                return <li key={index} className="ml-4">{paragraph.replace(/^\d\. /, '')}</li>;
              }
              if (paragraph.trim() === '') {
                return null;
              }
              // Handle bold text within paragraphs
              const formattedText = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
              return <p key={index} dangerouslySetInnerHTML={{ __html: formattedText }} />;
            })}
          </article>

          {/* CTA Box */}
          <div className="bg-brand-gray-light rounded-2xl p-8 mt-12">
            <h3 className="text-xl font-bold text-brand-navy">Precisa de aço para sua obra?</h3>
            <p className="text-brand-gray-medium mt-2">
              Solicite um orçamento personalizado e receba em até 24 horas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
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

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-brand-navy mb-6">Artigos Relacionados</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="bg-background rounded-xl border border-border p-5 hover:shadow-lg transition-all group"
                  >
                    <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider">
                      {relatedPost.category}
                    </span>
                    <h4 className="text-base font-semibold text-brand-navy mt-2 line-clamp-2 group-hover:text-brand-orange transition-colors">
                      {relatedPost.title}
                    </h4>
                    <p className="text-sm text-brand-gray-medium mt-2">{relatedPost.date}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;
  return <BlogPostContent slug={slug!} />;
}
