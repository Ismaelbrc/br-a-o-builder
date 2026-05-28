import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { analytics } from '@/lib/analytics';

/**
 * Fires analytics.pageView on every SPA route change.
 * Also notifies Microsoft Clarity about the new "page" so per-route
 * heatmaps and session recordings work correctly on a React SPA.
 * Add <usePageTracking /> inside <BrowserRouter> in App.tsx.
 */
export function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname + location.search;

    // GA4 + Meta Pixel page view
    analytics.pageView(path);

    // Microsoft Clarity — SPA route change notification
    // Without this, Clarity treats the entire session as a single page
    // and heatmaps for individual routes (e.g. /corte-e-dobra) show no data.
    if (typeof window.clarity === 'function') {
      // Tag the current "page" so heatmaps bucket correctly
      window.clarity('set', 'page', location.pathname);
      // Upgrade forces a new recording segment for this route
      window.clarity('upgrade', location.pathname);
    }
  }, [location.pathname, location.search]);
}
