/* ──────────────────────────────────────────────────────────────────────────
   Analytics — BR Aço
   Central module for Meta Pixel, GA4, Google Ads, and Clarity events.
   IDs are injected at build time via Vite env variables (VITE_*).
   ────────────────────────────────────────────────────────────────────────── */

import { channelClickId, sendLeadBeacon } from '@/lib/channel';

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

function clarityEvent(name: string, value?: string) {
  if (typeof window.clarity === 'function') window.clarity('event', name, value);
}

function clarityTag(key: string, value: string) {
  if (typeof window.clarity === 'function') window.clarity('set', key, value);
}

function clarityUpgrade(reason: string) {
  if (typeof window.clarity === 'function') window.clarity('upgrade', reason);
}

/** @deprecated use analytics.clarityEvent() */
function clarity(event: string, value?: string) { clarityEvent(event, value); }

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
    // Meta Pixel — CONTACT (intenção/clique). O "Lead" real é disparado server-side
    // (CAPI no webhook do Nexum) só quando a mensagem chega de fato. eventID = click_id
    // permite dedupe/casamento 1:1. Antes era 'Lead' aqui → inflava (clique ≠ conversa).
    fbq('track', 'Contact', {
      content_name: 'WhatsApp Click',
      content_category: source,
    }, { eventID: channelClickId() });

    // Beacon: manda fbc/fbp+click_id pro Nexum → CAPI atribui o Lead ao anúncio certo
    sendLeadBeacon();

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

      // Meta Pixel — custom event for CDA page (use as optimization event in Meta Ads)
      fbq('trackCustom', 'CDA_Lead', {
        content_name: 'Corte e Dobra',
        content_category: source,
      });
    }

    // Clarity — custom event + force priority recording for converting sessions
    clarityEvent('whatsapp_click', source);
    clarityUpgrade(`cta_${source}`);
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
    clarityEvent('calculator_use', type);
  },

  // ── Clarity low-level API ─────────────────────────────────────────────────

  /**
   * Set a custom tag for session segmentation in Clarity.
   * Shown as a filter in Clarity dashboard (Recordings, Heatmaps).
   * @example analytics.clarityTag('traffic_source', 'meta')
   * @example analytics.clarityTag('device', 'mobile')
   */
  clarityTag,

  /**
   * Fire a named custom event in Clarity.
   * Appears in Clarity's event list and can be used as a funnel step.
   * @example analytics.clarityEvent('scroll_75pct')
   * @example analytics.clarityEvent('faq_open', 'q2')
   */
  clarityEvent,

  /**
   * Upgrade the current session to priority recording.
   * Use on high-value interactions so Clarity doesn't drop them from sampling.
   * @example analytics.clarityUpgrade('reached_cta')
   */
  clarityUpgrade,
};
