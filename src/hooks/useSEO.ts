import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  publishedTime?: string;   // ISO 8601, ex: "2026-02-07"
  modifiedTime?: string;    // ISO 8601
  author?: string;
  keywords?: string;
}

/**
 * Hook para atualizar meta tags dinamicamente em cada página.
 * Essencial para SEO em SPAs — cada página precisa de title e description únicos.
 */
export function useSEO({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage = 'https://grupobraco.com.br/og-image.png',
  publishedTime,
  modifiedTime,
  author = 'BR Aço',
  keywords,
}: SEOProps) {
  useEffect(() => {
    // --- Title ---
    document.title = title;

    // --- Helper ---
    const setMeta = (selector: string, attr: string, value: string) => {
      let tag = document.querySelector<HTMLMetaElement>(selector);
      if (!tag) {
        tag = document.createElement('meta');
        const parts = selector.match(/\[(\w+)="([^"]+)"\]/);
        if (parts) tag.setAttribute(parts[1], parts[2]);
        document.head.appendChild(tag);
      }
      (tag as HTMLMetaElement)[attr as 'content'] = value;
    };

    const setMetaAttr = (attrName: string, attrVal: string, content: string) => {
      let tag = document.querySelector<HTMLMetaElement>(`meta[${attrName}="${attrVal}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attrName, attrVal);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    // --- Basic SEO ---
    setMetaAttr('name', 'description', description);
    if (keywords) setMetaAttr('name', 'keywords', keywords);

    // --- Canonical ---
    if (canonical) {
      let canonicalTag = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (canonicalTag) {
        canonicalTag.href = canonical;
      } else {
        const link = document.createElement('link');
        link.rel = 'canonical';
        link.href = canonical;
        document.head.appendChild(link);
      }
    }

    // --- Open Graph ---
    setMetaAttr('property', 'og:title', title);
    setMetaAttr('property', 'og:description', description);
    setMetaAttr('property', 'og:type', ogType);
    if (canonical) setMetaAttr('property', 'og:url', canonical);
    setMetaAttr('property', 'og:image', ogImage);
    setMetaAttr('property', 'og:image:width', '1200');
    setMetaAttr('property', 'og:image:height', '630');

    // --- Twitter ---
    setMetaAttr('name', 'twitter:title', title);
    setMetaAttr('name', 'twitter:description', description);
    setMetaAttr('name', 'twitter:image', ogImage);
    setMetaAttr('name', 'twitter:card', 'summary_large_image');

    // --- Article-specific ---
    if (ogType === 'article') {
      if (publishedTime) setMetaAttr('property', 'article:published_time', publishedTime);
      if (modifiedTime) setMetaAttr('property', 'article:modified_time', modifiedTime);
      setMetaAttr('property', 'article:author', author);
      setMetaAttr('property', 'article:publisher', 'https://grupobraco.com.br');
      setMetaAttr('property', 'article:section', 'Construção Civil');
    }

    // --- Robots (padrão: index,follow) ---
    setMetaAttr('name', 'robots', 'index, follow');

    return () => {
      document.title = 'BR Aço | Corte e Dobra Industrial em Goiânia e Goiás';
    };
  }, [title, description, canonical, ogType, ogImage, publishedTime, modifiedTime, author, keywords]);
}
