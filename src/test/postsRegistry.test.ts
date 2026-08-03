import { describe, it, expect } from 'vitest';
import { loadPostBySlug } from '@/data/postsRegistry';

describe('loadPostBySlug', () => {
  it('resolves a known slug with the correct post data', async () => {
    const post = await loadPostBySlug('o-que-e-corte-e-dobra-de-aco');
    expect(post).not.toBeNull();
    expect(post?.slug).toBe('o-que-e-corte-e-dobra-de-aco');
    expect(post?.category).toBe('Corte e Dobra');
    expect(post?.content.length).toBeGreaterThan(100);
  });

  it('returns null for an unknown slug', async () => {
    const post = await loadPostBySlug('slug-que-nao-existe-123');
    expect(post).toBeNull();
  });
});
