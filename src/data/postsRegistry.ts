import type { BlogPost } from './blogPosts';

/**
 * Carrega o content de UM post sob demanda, em vez de importar
 * blogPosts.ts inteiro (184 posts, ~770KB) toda vez que alguém abre um
 * único artigo. Os arquivos em ./posts/*.ts são gerados por
 * scripts/gen-blog-posts-split.py a partir de blogPosts.ts — não editar
 * ali diretamente.
 */
const modules = import.meta.glob<{ default: BlogPost }>('./posts/*.ts');

export async function loadPostBySlug(slug: string): Promise<BlogPost | null> {
  const loader = modules[`./posts/${slug}.ts`];
  if (!loader) return null;
  const mod = await loader();
  return mod.default;
}
