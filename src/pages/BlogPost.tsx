import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { ChevronRight, MessageCircle, ArrowLeft, Calendar, Tag } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';
import { useSEO } from '@/hooks/useSEO';

// ─── Markdown content renderer ────────────────────────────────────────────────

type Block =
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; html: string }
  | { type: 'blockquote'; html: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'blank' };

function inlineHtml(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`(.*?)`/g, '<code class="bg-gray-100 px-1 rounded text-sm font-mono">$1</code>');
}

function parseBlocks(content: string): Block[] {
  const lines = content.split('\n');
  const blocks: Block[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // H2
    if (line.startsWith('## ')) {
      blocks.push({ type: 'h2', text: line.slice(3) });
      i++; continue;
    }
    // H3
    if (line.startsWith('### ')) {
      blocks.push({ type: 'h3', text: line.slice(4) });
      i++; continue;
    }
    // Blockquote
    if (line.startsWith('> ')) {
      blocks.push({ type: 'blockquote', html: inlineHtml(line.slice(2)) });
      i++; continue;
    }
    // Table: collect all consecutive pipe lines
    if (line.startsWith('|')) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].startsWith('|')) {
        tableLines.push(lines[i]);
        i++;
      }
      const parseRow = (l: string) =>
        l.split('|').map(c => c.trim()).filter((_, idx, arr) => idx > 0 && idx < arr.length - 1);
      const [headerLine, , ...dataLines] = tableLines; // index 1 is separator
      const headers = parseRow(headerLine);
      const rows = dataLines.map(parseRow);
      blocks.push({ type: 'table', headers, rows });
      continue;
    }
    // Unordered list: collect consecutive - lines
    if (line.startsWith('- ')) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith('- ')) {
        items.push(inlineHtml(lines[i].slice(2)));
        i++;
      }
      blocks.push({ type: 'ul', items });
      continue;
    }
    // Ordered list: collect consecutive "N. " lines
    if (/^\d+\. /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\. /.test(lines[i])) {
        items.push(inlineHtml(lines[i].replace(/^\d+\. /, '')));
        i++;
      }
      blocks.push({ type: 'ol', items });
      continue;
    }
    // Blank line
    if (line.trim() === '') {
      blocks.push({ type: 'blank' });
      i++; continue;
    }
    // Paragraph
    blocks.push({ type: 'p', html: inlineHtml(line) });
    i++;
  }
  return blocks;
}

function renderContent(content: string) {
  const blocks = parseBlocks(content);
  return blocks.map((block, idx) => {
    switch (block.type) {
      case 'h2':
        return (
          <h2 key={idx} className="text-2xl font-bold text-brand-navy mt-10 mb-4 leading-tight border-b border-gray-200 pb-2">
            {block.text}
          </h2>
        );
      case 'h3':
        return (
          <h3 key={idx} className="text-lg font-bold text-brand-navy mt-6 mb-3">
            {block.text}
          </h3>
        );
      case 'p':
        return (
          <p key={idx} className="text-brand-gray-medium leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: block.html }} />
        );
      case 'blockquote':
        return (
          <blockquote key={idx} className="border-l-4 border-brand-orange bg-orange-50 px-5 py-3 my-5 rounded-r-lg text-brand-gray-medium italic"
            dangerouslySetInnerHTML={{ __html: block.html }} />
        );
      case 'ul':
        return (
          <ul key={idx} className="my-4 space-y-2 pl-1">
            {block.items.map((item, ii) => (
              <li key={ii} className="flex items-start gap-2 text-brand-gray-medium leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0" />
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
        );
      case 'ol':
        return (
          <ol key={idx} className="my-4 space-y-2 pl-1">
            {block.items.map((item, ii) => (
              <li key={ii} className="flex items-start gap-3 text-brand-gray-medium leading-relaxed">
                <span className="mt-0.5 w-6 h-6 rounded-full bg-brand-navy text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {ii + 1}
                </span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ol>
        );
      case 'table':
        return (
          <div key={idx} className="my-6 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  {block.headers.map((h, hi) => (
                    <th key={hi} className="bg-brand-navy text-white font-semibold px-4 py-3 text-left whitespace-nowrap">
                      <span dangerouslySetInnerHTML={{ __html: inlineHtml(h) }} />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, ri) => (
                  <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    {row.map((cell, ci) => (
                      <td key={ci} className="px-4 py-3 border-t border-gray-200 text-brand-gray-medium leading-relaxed">
                        <span dangerouslySetInnerHTML={{ __html: inlineHtml(cell) }} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'blank':
        return null;
      default:
        return null;
    }
  });
}

// ──────────────────────────────────────────────────────────────────────────────

// Converte "07 Fev 2026" → "2026-02-07"
function parseDateISO(dateStr: string): string {
  const months: Record<string, string> = {
    'Jan': '01', 'Fev': '02', 'Mar': '03', 'Abr': '04',
    'Mai': '05', 'Jun': '06', 'Jul': '07', 'Ago': '08',
    'Set': '09', 'Out': '10', 'Nov': '11', 'Dez': '12',
  };
  const parts = dateStr.trim().split(' ');
  if (parts.length === 3) {
    const [day, mon, year] = parts;
    return `${year}-${months[mon] ?? '01'}-${day.padStart(2, '0')}`;
  }
  return new Date().toISOString().split('T')[0];
}

function BlogPostContent({ slug }: { slug: string }) {
  const post = blogPosts.find(p => p.slug === slug)!;
  const whatsappUrl = "https://wa.me/556296472423?text=%5Bsrc%3Asite%5D%20Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.";
  const publishedTime = parseDateISO(post.date);
  const canonicalUrl = `https://grupobraco.com.br/blog/${post.slug}`;

  useSEO({
    title: `${post.title} | BR Aço`,
    description: post.metaDescription,
    canonical: canonicalUrl,
    ogType: 'article',
    publishedTime,
    author: 'Equipe Técnica BR Aço',
    keywords: post.keyword,
  });

  // Article + BreadcrumbList JSON-LD
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": post.title,
      "description": post.metaDescription,
      "author": {
        "@type": "Organization",
        "name": "BR Aço – Casa Brasileira de Aço",
        "url": "https://grupobraco.com.br"
      },
      "publisher": {
        "@type": "Organization",
        "name": "BR Aço – Casa Brasileira de Aço",
        "url": "https://grupobraco.com.br",
        "logo": {
          "@type": "ImageObject",
          "url": "https://grupobraco.com.br/favicon.png"
        }
      },
      "datePublished": publishedTime,
      "dateModified": publishedTime,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": canonicalUrl
      },
      "keywords": post.keyword,
      "articleSection": post.category,
      "inLanguage": "pt-BR"
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://grupobraco.com.br/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://grupobraco.com.br/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": post.title,
          "item": canonicalUrl
        }
      ]
    };

    const articleScript = document.createElement('script');
    articleScript.type = 'application/ld+json';
    articleScript.id = 'article-schema';
    articleScript.textContent = JSON.stringify(articleSchema);
    document.head.appendChild(articleScript);

    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.id = 'breadcrumb-schema';
    breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(breadcrumbScript);

    return () => {
      document.getElementById('article-schema')?.remove();
      document.getElementById('breadcrumb-schema')?.remove();
    };
  }, [post.slug]);

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-brand-navy py-16">
        <div className="max-w-4xl mx-auto px-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-400 mb-6">
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
              <time dateTime={publishedTime}>{post.date}</time>
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
          <article className="max-w-none">
            {renderContent(post.content)}
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
