import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { analytics } from '@/lib/analytics';

// ─────────────────────────────────────────────────────────────────────────────
// usePageTracking
//
// Fires on every SPA route change. Responsibilities:
//   1. GA4 + Meta Pixel page view
//   2. Microsoft Clarity SPA notification (heatmaps per route)
//   3. UTM persistence + Clarity session tagging (traffic source, device, section)
//
// UTM PERSISTENCE
// ---------------
// When a user lands from ?utm_source=meta on /corte-e-dobra and then navigates
// to /blog/post, the new URL has no UTMs. Without persistence, Clarity would
// see that blog visit as "direct". We store UTMs in sessionStorage on first
// arrival and re-apply them on every route change, so the entire session stays
// tagged with the original traffic source.
//
// CLARITY SESSION TAGS (filterable in Clarity dashboard)
// -------------------------------------------------------
//   traffic_type  → meta_ads | google | organic | email | direct | <source>
//   utm_source    → meta, google, <newsletter>, direct, …
//   utm_medium    → paid, cpc, organic, email, none, …
//   utm_campaign  → campaign name or "none"
//   device        → mobile | desktop
//   page_section  → home | blog | corte-e-dobra | vergalhao | coluna | …
// ─────────────────────────────────────────────────────────────────────────────

const SESSION_UTM_KEY = 'br_aco_utm';

interface UtmData {
  source:   string;
  medium:   string;
  campaign: string;
}

function saveUtm(data: UtmData) {
  try { sessionStorage.setItem(SESSION_UTM_KEY, JSON.stringify(data)); } catch { /* private browsing */ }
}

function loadUtm(): UtmData | null {
  try {
    const raw = sessionStorage.getItem(SESSION_UTM_KEY);
    return raw ? (JSON.parse(raw) as UtmData) : null;
  } catch {
    return null;
  }
}

/**
 * Maps raw utm_source / utm_medium to a simplified traffic bucket.
 * This is the value you'll filter on most often in Clarity.
 */
function resolveTrafficType(source: string, medium: string): string {
  const s = source.toLowerCase();
  const m = medium.toLowerCase();

  if (s === 'direct' || (!s && !m)) return 'direct';
  if (['meta', 'fb', 'facebook', 'instagram'].includes(s) || m === 'paid') return 'meta_ads';
  if (['google', 'google-ads', 'googleads', 'adwords'].includes(s) || m === 'cpc') return 'google';
  if (m === 'organic' || m === 'seo') return 'organic';
  if (m === 'email' || m === 'newsletter' || s === 'newsletter') return 'email';
  return s || 'other';
}

/**
 * Extracts the top-level section from a pathname.
 *   /                     → 'home'
 *   /corte-e-dobra        → 'corte-e-dobra'
 *   /blog/meu-post-slug   → 'blog'
 *   /vergalhao/goiania    → 'vergalhao'
 */
function resolveSection(pathname: string): string {
  if (pathname === '/') return 'home';
  return pathname.split('/').filter(Boolean)[0] ?? 'other';
}

export function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    // Trailing slash normalizado: /corte-e-dobra/ e /corte-e-dobra são a MESMA
    // página no GA4/Clarity (main.tsx já corrige a URL no load inicial; aqui
    // cobrimos navegações SPA vindas de links com barra final).
    const cleanPathname =
      location.pathname.length > 1 ? location.pathname.replace(/\/+$/, '') : '/';
    const path = cleanPathname + location.search;

    // ── 1. GA4 + Meta Pixel page view ──────────────────────────────────────
    analytics.pageView(path);

    // ── 2. Clarity SPA route notification ──────────────────────────────────
    // Without this, Clarity treats the entire session as one page and
    // heatmaps for individual routes show no data.
    if (typeof window.clarity === 'function') {
      window.clarity('set', 'page', cleanPathname);
      window.clarity('upgrade', cleanPathname);
    }

    // ── 3. UTM persistence ─────────────────────────────────────────────────
    const params = new URLSearchParams(location.search);
    const incomingSource = params.get('utm_source');

    if (incomingSource) {
      // New UTMs in the URL — save/refresh for this session
      saveUtm({
        source:   incomingSource,
        medium:   params.get('utm_medium')   ?? 'none',
        campaign: params.get('utm_campaign') ?? 'none',
      });
    }

    const utm: UtmData = loadUtm() ?? {
      source:   'direct',
      medium:   'none',
      campaign: 'none',
    };

    // ── 4. Clarity session tags ─────────────────────────────────────────────
    // Applied on every route change so Clarity always has fresh context.
    analytics.clarityTag('utm_source',   utm.source);
    analytics.clarityTag('utm_medium',   utm.medium);
    analytics.clarityTag('utm_campaign', utm.campaign);
    analytics.clarityTag('traffic_type', resolveTrafficType(utm.source, utm.medium));
    analytics.clarityTag('device',       window.innerWidth < 768 ? 'mobile' : 'desktop');
    analytics.clarityTag('page_section', resolveSection(location.pathname));

  }, [location.pathname, location.search]);
}
