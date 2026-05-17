/* ──────────────────────────────────────────────────────────────────────────
   Analytics — BR Aço
   Central module for Meta Pixel, GA4, Google Ads, and Clarity events.
   IDs are injected at build time via Vite env variables (VITE_*).
   ────────────────────────────────────────────────────────────────────────── */

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    clarity?: (...args: unknown[]) => void;
  }
}

const GADS_ID    = import.meta.env.VITE_GADS_ID as string | undefined;
const GADS_LABEL = import.meta.env.VITE_GADS_LABEL as string | undefined;

// ── Safe callers (no-op if script not loaded yet) ──────────────────────────

function fbq(...args: unknown[]) {
  if (typeof window.fbq === 'function') window.fbq(...args);
}

function gtag(...args: unknown[]) {
  if (typeof window.gtag === 'function') window.gtag(...args);
}

function clarity(event: string, value?: string) {
  if (typeof window.clarity === 'function') window.clarity('event', event, value);
}

// ── Public API ─────────────────────────────────────────────────────────────

export const analytics = {
  /**
   * SPA page view — call on every route change.
   */
  pageView(path: string) {
    fbq('track', 'PageView');
    gtag('event', 'page_view', { page_path: path });
  },

  /**
   * WhatsApp CTA click — primary conversion event.
   * @param source  Identifies which button was clicked (e.g. 'header', 'cta-banner', 'floating', 'footer')
   */
  whatsappClick(source: string) {
    // Meta Pixel
    fbq('track', 'Lead', {
      content_name: 'WhatsApp Click',
      content_category: source,
    });

    // GA4
    gtag('event', 'generate_lead', {
      event_category: 'engagement',
      event_label: `whatsapp_${source}`,
    });

    // Google Ads conversion
    if (GADS_ID && GADS_LABEL) {
      gtag('event', 'conversion', {
        send_to: `${GADS_ID}/${GADS_LABEL}`,
      });
    }

    // Clarity
    clarity('whatsapp_click', source);
  },

  /**
   * Quote form submitted.
   */
  formSubmit() {
    fbq('track', 'Lead', {
      content_name: 'Quote Form',
      content_category: 'form',
    });

    gtag('event', 'generate_lead', {
      event_category: 'form',
      event_label: 'quote_form',
    });

    if (GADS_ID && GADS_LABEL) {
      gtag('event', 'conversion', {
        send_to: `${GADS_ID}/${GADS_LABEL}`,
      });
    }

    clarity('form_submit');
  },

  /**
   * User viewed a product/service page.
   */
  viewContent(contentName: string) {
    fbq('track', 'ViewContent', { content_name: contentName });
    gtag('event', 'view_item', { item_name: contentName });
    clarity('view_content', contentName);
  },
};
