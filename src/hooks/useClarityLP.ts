import { useEffect } from 'react';
import { analytics } from '@/lib/analytics';

interface ClarityLPConfig {
  /** Short name shown in Clarity tag filters. E.g. 'corte-e-dobra', 'lp-vergalhao'. */
  pageName: string;
  /**
   * Element ID of the final CTA section to observe.
   * Fires `reached_final_cta` when it enters the viewport.
   * Defaults to 'orcamento-cd'. Pass null to disable.
   */
  ctaId?: string | null;
}

/**
 * Maximizes Clarity data collection on a landing page.
 *
 * NOTE: UTM tagging + device + page_section are handled globally by
 * usePageTracking (runs on every route change). This hook adds what is
 * specific to landing pages:
 *
 *  1. Tags the page as an LP with its name (lp_name)
 *  2. Fires scroll depth milestones (25 / 50 / 75 / 90 %) → drop-off funnel
 *  3. Fires time milestones (60s / 120s) → distinguish engaged visits from bounces
 *  4. Fires `reached_final_cta` via IntersectionObserver on the configured CTA element
 *  5. Calls `clarityUpgrade` at key moments so Clarity prioritizes these recordings
 *
 * Usage: call inside the landing page component — once per mount.
 */
export function useClarityLP({ pageName, ctaId = 'orcamento-cd' }: ClarityLPConfig) {
  useEffect(() => {
    // ── 1. LP identity tag ───────────────────────────────────────────────────
    analytics.clarityTag('lp_name', pageName);

    // ── 2. Scroll depth milestones ───────────────────────────────────────────
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
          // Deep scroll = high-value session — force priority recording
          if (m >= 75) analytics.clarityUpgrade('deep_scroll');
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    // ── 4. Time milestones ───────────────────────────────────────────────────
    // 60s = engaged visitor (not a 5-second bounce)
    const t60 = setTimeout(() => {
      analytics.clarityEvent('engaged_60s');
      analytics.clarityTag('engagement', 'high');
    }, 60_000);

    // 120s = very engaged — likely a professional evaluating the service
    const t120 = setTimeout(() => {
      analytics.clarityEvent('engaged_120s');
      analytics.clarityTag('engagement', 'very_high');
      analytics.clarityUpgrade('long_session');
    }, 120_000);

    // ── 5. Final CTA reached ─────────────────────────────────────────────────
    const ctaEl = document.getElementById('orcamento-cd');
    let ctaObserver: IntersectionObserver | null = null;

    if (ctaEl) {
      ctaObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            analytics.clarityEvent('reached_final_cta');
            analytics.clarityUpgrade('reached_cta'); // ensure this session is recorded
            ctaObserver?.disconnect();
          }
        },
        { threshold: 0.3 },
      );
      ctaObserver.observe(ctaEl);
    }

    // ── Cleanup ──────────────────────────────────────────────────────────────
    return () => {
      clearTimeout(t60);
      clearTimeout(t120);
      window.removeEventListener('scroll', onScroll);
      ctaObserver?.disconnect();
    };
  // location.search may change (UTM varies per ad) but pageName is stable
  }, [pageName]);
}
