import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
}

/**
 * Hook para atualizar meta tags dinamicamente em cada página.
 * Essencial para SEO em SPAs — cada página precisa de title e description únicos.
 */
export function useSEO({ title, description, canonical, ogType = 'website' }: SEOProps) {
  useEffect(() => {
    // Title
    document.title = title;

    // Meta description
    let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (metaDesc) metaDesc.content = description;

    // Canonical
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

    // Open Graph
    const setOg = (property: string, content: string) => {
      let tag = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
      if (tag) tag.content = content;
    };
    setOg('og:title', title);
    setOg('og:description', description);
    setOg('og:type', ogType);
    if (canonical) setOg('og:url', canonical);

    // Restaurar defaults ao desmontar (opcional mas boa prática)
    return () => {
      document.title = 'BR Aço | Corte e Dobra Industrial em Goiânia e Goiás';
    };
  }, [title, description, canonical, ogType]);
}
