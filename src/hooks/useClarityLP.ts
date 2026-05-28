import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { analytics } from '@/lib/analytics';

/**
 * Maximizes Clarity data collection on a landing page.
 *
 * What it does:
 *  1. Tags the session with UTM source/medium/campaign → filter recordings by ad campaign
 *  2. Tags device type → separate mobile vs desktop heatmaps
 *  3. Fires scroll depth milestones (25 / 50 / 75 / 90 %) → drop-off funnel
 *  4. Fires time milestones (60s / 120s) → distinguish engaged visits from bounces
 *  5. Fires `reached_final_cta` via IntersectionObserver on `#orcamento-cd`
 *  6. Calls `clarityUpgrade` at key moments so Clarity prioritizes these recordings
 *
 * Usage: call inside the landing page component — once per mount.
 */
export function useClarityLP(pageName: string) {
  const location = useLocation();

  useEffect(() => {
    // ── 1. UTM / traffic source tagging ─────────────────────────────────────
    const params = new URLSearchParams(location.search);
    const source   = params.get('utm_source')   || 'direct';
    const medium   = params.get('utm_medium')   || 'none';
    const campaign = params.get('utm_campaign') || 'none';

    analytics.clarityTag('lp_name',       pageName);
    analytics.clarityTag('utm_source',    source);
    analytics.clarityTag('utm_medium',    medium);
    analytics.clarityTag('utm_campaign',  campaign);

    // Simplified traffic bucket for easy filtering
    const trafficType =
      source === 'direct'                       ? 'direct'  :
      source === 'meta' || medium === 'paid'    ? 'meta_ads':
      source === 'google'                       ? 'google'  :
      medium === 'organic' || source === 'none' ? 'organic' : source;
    analytics.clarityTag('traffic_type', trafficType);

    // ── 2. Device type ───────────────────────────────────────────────────────
    analytics.clarityTag('device', window.innerWidth < 768 ? 'mobile' : 'desktop');

    // ── 3. Scroll depth milestones ───────────────────────────────────────────
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageName]);
}
