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

const GADS_ID         = 'AW-16520884957';
const GADS_LABEL      = 'MQ4NCOCD0a4cEN3l4sU9'; // WhatsApp Click (generic)
const GADS_LABEL_CDA  = '13r7CLvf7bQcEN3l4sU9'; // Clique WhatsApp - Corte e Dobra

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
   * WhatsApp CTA click — primary engagement event.
   * Fires its own GA4 event (whatsapp_click) separate from generate_lead.
   * @param source  Identifies which button was clicked (e.g. 'header', 'cta-banner', 'floating', 'footer')
   */
  whatsappClick(source: string) {
    // Meta Pixel
    fbq('track', 'Lead', {
      content_name: 'WhatsApp Click',
      content_category: source,
    });

    // GA4 — dedicated event (mark as Key Event in GA4 Admin)
    gtag('event', 'whatsapp_click', {
      event_category: 'engagement',
      event_label: `whatsapp_${source}`,
      source,
    });

    // Google Ads conversion — generic
    gtag('event', 'conversion', {
      send_to: `${GADS_ID}/${GADS_LABEL}`,
    });

    // Google Ads conversion — page-specific (Corte e Dobra)
    if (source.startsWith('cda-')) {
      gtag('event', 'conversion', {
        send_to: `${GADS_ID}/${GADS_LABEL_CDA}`,
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

    gtag('event', 'conversion', {
      send_to: `${GADS_ID}/${GADS_LABEL}`,
    });

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

  /**
   * Vergalhão calculator used — tracks engagement with the interactive tool.
   * @param type  Calculator type (e.g. 'vergalhao', 'laje')
   */
  calculatorUse(type: string) {
    gtag('event', 'calculator_use', {
      event_category: 'engagement',
      calculator_type: type,
    });
    clarity('calculator_use', type);
  },
};
