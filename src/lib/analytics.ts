/**
 * Analytics helper — centraliza rastreamento de eventos no site BR Aço.
 * Suporta GA4 (gtag) e Meta Pixel (fbq) quando disponíveis.
 */

type WhatsAppSource =
  | 'cda-hero'
  | 'cda-premium'
  | 'cda-final'
  | 'hero'
  | 'cta-banner'
  | 'header'
  | string;

function gtagEvent(eventName: string, params: Record<string, string>) {
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', eventName, params);
  }
}

function fbqEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
    (window as any).fbq('track', eventName, params);
  }
}

export const analytics = {
  /**
   * Dispara quando o usuário clica em qualquer botão WhatsApp.
   * @param source identificador da seção/componente de origem
   */
  whatsappClick(source: WhatsAppSource) {
    gtagEvent('whatsapp_click', { source, method: 'button' });
    fbqEvent('Contact', { source });
    if (process.env.NODE_ENV === 'development') {
      console.log(`[analytics] whatsappClick — source: ${source}`);
    }
  },
};
