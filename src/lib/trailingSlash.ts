// Barra final obrigatória nas rotas de página (exceto home e arquivos como .pdf):
// GitHub Pages serve /path/ a partir de /path/index.html e 301-redireciona /path,
// e canonical + sitemap usam a versão com barra. Manter a URL visível, o GA4 e o
// Clarity na mesma forma evita duas variantes da mesma página.
export function withTrailingSlash(pathname: string): string {
  if (pathname.length <= 1 || pathname.endsWith('/')) return pathname;
  const last = pathname.split('/').pop() ?? '';
  return last.includes('.') ? pathname : pathname + '/';
}
