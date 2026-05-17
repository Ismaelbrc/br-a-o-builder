import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { analytics } from '@/lib/analytics';

/**
 * Fires analytics.pageView on every SPA route change.
 * Add <usePageTracking /> inside <BrowserRouter> in App.tsx.
 */
export function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    analytics.pageView(location.pathname + location.search);
  }, [location.pathname, location.search]);
}
