import { useEffect } from 'react';
import { analytics } from '@/lib/analytics';

// ─────────────────────────────────────────────────────────────────────────────
// useClarityContent
//
// Clarity instrumentation for long-form content pages (blog posts, articles).
// Distinct from useClarityLP: no CTA observer, different time thresholds,
// reader-focused events.
//
// NOTE: UTM tagging + device + page_section are already handled globally by
// usePageTracking. This hook only adds what is specific to content reading.
//
// CLARITY EVENTS fired:
//   scroll_25pct / scroll_50pct / scroll_75pct / scroll_90pct
//     → understand drop-off: if 1000 people hit 50% but only 200 hit 75%,
//       the second half of the post is losing readers.
//   reading_60s  → visitor stayed to read (not a 3-second bounce)
//   reading_120s → deep reader — very likely a professional evaluating
//
// CLARITY TAGS set:
//   content_type     = "blog_post"
//   content_category = e.g. "Corte e Dobra" | "Normas ABNT" | …
//   reader_depth     = "engaged" (60s+) | "deep" (120s+)
//
// clarityUpgrade is called at scroll_75pct and reading_120s so Clarity
// prioritizes full recordings of serious readers (your ICP).
//
// @param slug     — post slug, used to reset state when navigating posts
// @param category — post category, tagged for filtering in Clarity
// ─────────────────────────────────────────────────────────────────────────────

interface ContentConfig {
  slug:     string;
  category: string;
}

export function useClarityContent({ slug, category }: ContentConfig) {
  useEffect(() => {
    // ── Content tags ──────────────────────────────────────────────────────────
    analytics.clarityTag('content_type',     'blog_post');
    analytics.clarityTag('content_category', category);

    // ── Scroll depth milestones ───────────────────────────────────────────────
    // Fresh Set per post — prevents stale state when navigating between posts.
    const fired = new Set<number>();
    const MILESTONES = [25, 50, 75, 90];

    const onScroll = () => {
      const scrollable = document.body.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const pct = (window.scrollY / scrollable) * 100;

      for (const m of MILESTONES) {
        if (!fired.has(m) && pct >= m) {
          fired.add(m);
          analytics.clarityEvent(`scroll_${m}pct`);
          // 75%+ = deep reader — force priority recording
          if (m >= 75) analytics.clarityUpgrade('deep_reader');
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    // ── Time milestones ───────────────────────────────────────────────────────
    // 60s = stayed to read — not a bounce, not "opened by accident"
    const t60 = setTimeout(() => {
      analytics.clarityEvent('reading_60s');
      analytics.clarityTag('reader_depth', 'engaged');
    }, 60_000);

    // 120s = deep reader — most likely a professional evaluating the topic.
    // This is the session you most want to understand in Clarity recordings.
    const t120 = setTimeout(() => {
      analytics.clarityEvent('reading_120s');
      analytics.clarityTag('reader_depth', 'deep');
      analytics.clarityUpgrade('deep_reader');
    }, 120_000);

    // ── Cleanup ───────────────────────────────────────────────────────────────
    // Runs when user navigates away OR to a different post (slug changes).
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(t60);
      clearTimeout(t120);
    };
  }, [slug, category]);
}
