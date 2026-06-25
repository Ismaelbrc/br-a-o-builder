/**
 * Atribuição de canal — BR Aço
 *
 * Formato da tag injetada no início de toda mensagem de WhatsApp:
 *
 *   [org]                          → orgânico / SEO / direto
 *   [soc|ig|bio]                   → Instagram orgânico (bio link)
 *   [soc|ig|stories]               → Instagram Stories (link sticker)
 *   [soc|ig|post]                  → Instagram post/reels
 *   [ads|g]                        → Google Ads (sem UTM de campanha)
 *   [ads|g|cda-vergalhao-goiania]  → Google Ads + nome da campanha
 *   [ads|m]                        → Meta Ads (sem UTM de campanha)
 *   [ads|m|expansao-grande-goiania]→ Meta Ads + nome da campanha
 *
 * Parsing pro CRM (split por "|", strip dos colchetes):
 *   partes[0] = "ads" | "org" | "soc"
 *   partes[1] = "g" | "m" | "ig"    — plataforma
 *   partes[2] = slug da campanha     — se presente
 */

const KEY = 'br_channel2';          // v2: tag agora inclui adset (utm_content)
const KEY_CLICK = 'br_click_id2';   // id único por visita-de-anúncio (auditoria 1:1)

/** Gera um id curto, url-safe, sem dependências. */
function genClickId(): string {
  const r = (typeof crypto !== 'undefined' && 'randomUUID' in crypto)
    ? crypto.randomUUID().replace(/-/g, '')
    : Math.random().toString(36).slice(2);
  return (r + Date.now().toString(36)).slice(0, 16);
}

type ChannelResult =
  | { type: 'ads'; platform: 'g' | 'm' | null; campaign: string | null; adset: string | null }
  | { type: 'soc'; platform: 'ig'; medium: string | null }
  | { type: 'org' };

function detect(): ChannelResult {
  if (typeof window === 'undefined') return { type: 'org' };

  const p = new URLSearchParams(window.location.search);
  const get = (k: string) => (p.get(k) || '').trim();

  const source   = get('utm_source').toLowerCase();
  const medium   = get('utm_medium').toLowerCase();
  const slug = (k: string) => get(k)
    ? get(k).trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-_]/g, '')
    : null;
  const campaign = slug('utm_campaign');
  const adset    = slug('utm_content');   // conjunto/região do Meta (ex.: anapolis, aparecida)

  // ── Google Ads: click-ids de auto-tagging
  if (get('gclid') || get('gbraid') || get('wbraid')) {
    return { type: 'ads', platform: 'g', campaign, adset };
  }

  // ── Bing Ads
  if (get('msclkid')) {
    return { type: 'ads', platform: 'g', campaign, adset };
  }

  // ── Instagram / Facebook — distingue pago vs orgânico pelo utm_medium
  const igSources = ['instagram', 'ig'];
  const fbSources = ['facebook', 'fb', 'meta'];
  const isInstagram = igSources.some(s => source.includes(s));
  const isMeta      = fbSources.some(s => source.includes(s));

  const paidMediums = ['cpc', 'ppc', 'paid', 'paidsocial', 'paid_social', 'paid-social', 'display', 'cpm'];
  const isPaid      = paidMediums.some(m => medium.includes(m));

  if (isInstagram) {
    if (isPaid) return { type: 'ads', platform: 'm', campaign, adset };
    // Orgânico Instagram — preserva o medium para rastrear bio/stories/post
    const igMedium = medium || null;
    return { type: 'soc', platform: 'ig', medium: igMedium };
  }

  if (isMeta) {
    return { type: 'ads', platform: 'm', campaign, adset };
  }

  // ── Google via UTM manual
  if (source.includes('google')) {
    return { type: 'ads', platform: 'g', campaign, adset };
  }

  // ── Qualquer medium pago sem plataforma identificada
  if (isPaid) {
    return { type: 'ads', platform: null, campaign, adset };
  }

  return { type: 'org' };
}

function buildStoredValue(d: ChannelResult): string {
  if (d.type === 'org') return 'org';
  if (d.type === 'soc') {
    return ['soc', d.platform, d.medium].filter(Boolean).join('|');
  }
  // adset só entra quando há campanha (mantém posição: ads|plat|campanha|adset)
  const parts = ['ads', d.platform, d.campaign];
  if (d.campaign && d.adset) parts.push(d.adset);
  return parts.filter(Boolean).join('|');
}

// ── API pública ───────────────────────────────────────────────────────────────

export function initChannel(): void {
  try {
    const d = detect();
    if (d.type !== 'org') {
      localStorage.setItem(KEY, buildStoredValue(d));
    } else if (!localStorage.getItem(KEY)) {
      localStorage.setItem(KEY, 'org');
    }
  } catch { /* localStorage indisponível */ }
}

export function setChannel(value: string): void {
  try { localStorage.setItem(KEY, value); } catch { /* ignora */ }
}

export function channelTag(): string {
  try {
    return `[${localStorage.getItem(KEY) || 'org'}]`;
  } catch {
    return '[org]';
  }
}

/**
 * id único da visita-de-anúncio (gerado lazy só p/ canal 'ads').
 * Vai no Pixel (eventID) e na mensagem ([cid:...]) → casamento 1:1 no Nexum.
 */
export function channelClickId(): string {
  try {
    if (!(localStorage.getItem(KEY) || 'org').startsWith('ads')) return '';
    let id = localStorage.getItem(KEY_CLICK) || '';
    if (!id) { id = genClickId(); localStorage.setItem(KEY_CLICK, id); }
    return id;
  } catch { return ''; }
}

/** Bracket separado com o click_id, p/ anexar à mensagem. Vazio fora de 'ads'. */
export function clickIdTag(): string {
  const id = channelClickId();
  return id ? `[cid:${id}]` : '';
}

// Stubs — reservados para geolocalização futura (importados no App.tsx)
export function geoTag(): string { return ''; }
export async function fetchGeo(): Promise<void> { return; }
