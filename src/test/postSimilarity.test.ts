import { describe, it, expect } from 'vitest';
import { getRelatedPosts } from '@/lib/postSimilarity';
import type { BlogPostMeta } from '@/data/blogPostsMeta';

function post(overrides: Partial<BlogPostMeta>): BlogPostMeta {
  return {
    id: 1,
    slug: 'slug',
    category: 'Corte e Dobra',
    title: 'Título',
    metaDescription: 'desc',
    keyword: 'keyword',
    date: '01 Jan 2026',
    summary: 'summary',
    readingTime: 3,
    ...overrides,
  };
}

describe('getRelatedPosts', () => {
  it('never returns the current post itself', () => {
    const current = post({ id: 1, slug: 'a' });
    const all = [current, post({ id: 2, slug: 'b' })];
    const related = getRelatedPosts(current, all, 4);
    expect(related.some(p => p.slug === 'a')).toBe(false);
  });

  it('prefers same-category posts with keyword overlap over unrelated ones', () => {
    const current = post({ id: 1, slug: 'a', category: 'Vergalhões', keyword: 'vergalhão CA-50', title: 'Vergalhão CA-50: tudo sobre' });
    const sameTopic = post({ id: 2, slug: 'b', category: 'Vergalhões', keyword: 'vergalhão CA-50 preço', title: 'Preço do vergalhão CA-50' });
    const unrelated = post({ id: 3, slug: 'c', category: 'Fundação', keyword: 'radier', title: 'O que é radier' });
    const related = getRelatedPosts(current, [current, sameTopic, unrelated], 1);
    expect(related[0].slug).toBe('b');
  });

  it('never leaves a singleton category empty — falls back to global recent posts', () => {
    const current = post({ id: 1, slug: 'a', category: 'Treliças', keyword: 'treliça t8', title: 'O que é treliça T8' });
    const unrelated1 = post({ id: 2, slug: 'b', category: 'Fundação', keyword: 'radier', title: 'O que é radier' });
    const unrelated2 = post({ id: 3, slug: 'c', category: 'Concreto', keyword: 'fck', title: 'O que é fck do concreto' });
    const related = getRelatedPosts(current, [current, unrelated1, unrelated2], 4);
    expect(related.length).toBeGreaterThan(0);
    expect(related.length).toBeLessThanOrEqual(2); // só existem 2 outros posts no total
  });

  it('respects the requested count when enough candidates exist', () => {
    const current = post({ id: 1, slug: 'a' });
    const others = Array.from({ length: 10 }, (_, i) => post({ id: i + 2, slug: `p${i}` }));
    const related = getRelatedPosts(current, [current, ...others], 4);
    expect(related).toHaveLength(4);
  });
});
