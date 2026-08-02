import type { BlogPostMeta } from '@/data/blogPostsMeta';

/**
 * Related-posts scoring — cross-category topic matching.
 *
 * O widget anterior era same-category-only (max 3), o que deixava categorias
 * pequenas (Treliças, Malhas, BR Aço, Coluna Pronta — 1 a 2 posts cada) sem
 * nenhum post relacionado de verdade. Aqui a categoria pesa como UM sinal de
 * similaridade entre vários, não como filtro obrigatório — um post de
 * "Treliças" pode aparecer como relacionado a um post de "Corte e Dobra" se
 * o keyword/título tiverem sobreposição temática real.
 */

function normalize(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');
}

function tokenize(str: string): string[] {
  return normalize(str)
    .split(/[^a-z0-9]+/)
    .filter((t) => t.length > 2);
}

function scoreSimilarity(a: BlogPostMeta, b: BlogPostMeta): number {
  if (a.slug === b.slug) return -1;

  let score = 0;
  if (a.category === b.category) score += 6;

  const tokensA = new Set([...tokenize(a.keyword), ...tokenize(a.title)]);
  const fieldsB = [
    { text: b.title, weight: 4 },
    { text: b.keyword, weight: 3 },
    { text: b.summary, weight: 1 },
  ];
  for (const token of tokensA) {
    for (const { text, weight } of fieldsB) {
      if (normalize(text).includes(token)) score += weight;
    }
  }
  return score;
}

/**
 * Retorna até `count` posts relacionados, ordenados por similaridade.
 * Nunca retorna vazio nem quase-vazio: se poucos posts tiverem score > 0
 * (categorias com 1-2 posts), completa com os mais recentes da mesma
 * categoria e, por último, os mais recentes do site — evitando o "beco
 * sem saída" que categorias pequenas tinham antes.
 */
export function getRelatedPosts(
  current: BlogPostMeta,
  allPosts: BlogPostMeta[],
  count = 4
): BlogPostMeta[] {
  const scored = allPosts
    .filter((p) => p.slug !== current.slug)
    .map((p) => ({ post: p, score: scoreSimilarity(current, p) }))
    .sort((x, y) => y.score - x.score || y.post.id - x.post.id);

  const picked: BlogPostMeta[] = [];
  const usedSlugs = new Set<string>();

  for (const { post, score } of scored) {
    if (picked.length >= count) break;
    if (score <= 0) break;
    picked.push(post);
    usedSlugs.add(post.slug);
  }

  if (picked.length < count) {
    for (const p of allPosts) {
      if (picked.length >= count) break;
      if (p.slug === current.slug || usedSlugs.has(p.slug)) continue;
      if (p.category !== current.category) continue;
      picked.push(p);
      usedSlugs.add(p.slug);
    }
  }

  if (picked.length < count) {
    const byRecent = [...allPosts].sort((a, b) => b.id - a.id);
    for (const p of byRecent) {
      if (picked.length >= count) break;
      if (p.slug === current.slug || usedSlugs.has(p.slug)) continue;
      picked.push(p);
      usedSlugs.add(p.slug);
    }
  }

  return picked;
}
