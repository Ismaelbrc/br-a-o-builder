/**
 * Atribuição de canal — BR Aço
 *
 * Formato da tag injetada no início de toda mensagem de WhatsApp:
 *
 *   [org]                          → orgânico / SEO / direto
 *   [ads|g]                        → Google Ads (sem UTM de campanha)
 *   [ads|g|cda-vergalhao-goiania]  → Google Ads + nome da campanha (via utm_campaign)
 *   [ads|m]                        → Meta Ads (sem UTM de campanha)
 *   [ads|m|expansao-grande-goiania]→ Meta Ads + nome da campanha (via utm_campaign)
 *
 * Parsing pro Nexum (split por "|", strip dos colchetes):
 *   partes[0] = "ads" | "org"
 *   partes[1] = "g" (Google) | "m" (Meta)   — se presente
 *   partes[2] = slug da campanha             — se utm_campaign foi configurado
 */

const KEY = 'br_channel'; // valor ex: "ads|g|cda-vergalhao" ou "org"

// ── Detecção de plataforma e campanha ────────────────────────────────────────

type Platform = 'g' | 'm' | null;

function detect(): { isAds: boolean; platform: Platform; campaign: string | null } {
  if (typeof window === 'undefined') return { isAds: false, platform: null, campaign: null };

  const p = new URLSearchParams(window.location.search);
  const get = (k: string) => (p.get(k) || '').trim();

  // Slug de campanha a partir do utm_campaign (espaços → hífen, minúsculo)
  const campaign = get('utm_campaign')
    ? get('utm_campaign').trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-_]/g, '')
    : null;

  const source = get('utm_source').toLowerCase();
  const medium = get('utm_medium').toLowerCase();

  // ── Google: click-ids exclusivos do Google Ads (auto-tagging)
  if (get('gclid') || get('gbraid') || get('wbraid')) {
    return { isAds: true, platform: 'g', campaign };
  }

  // ── Bing: click-id do Microsoft Ads
  if (get('msclkid')) {
    return { isAds: true, platform: 'g', campaign }; // agrupado em "g" (search ads)
  }

  // ── Meta: utm_source com facebook/instagram/meta
  const metaSources = ['facebook', 'instagram', 'fb', 'ig', 'meta'];
  if (metaSources.some(s => source.includes(s))) {
    return { isAds: true, platform: 'm', campaign };
  }

  // ── Google via UTM manual (sem auto-tagging)
  if (source.includes('google')) {
    return { isAds: true, platform: 'g', campaign };
  }

  // ── Qualquer utm_medium pago, plataforma desconhecida
  const paidMediums = ['cpc', 'ppc', 'paid', 'paidsocial', 'paid_social', 'paid-social', 'display', 'cpm'];
  if (paidMediums.some(m => medium.includes(m))) {
    return { isAds: true, platform: null, campaign };
  }

  return { isAds: false, platform: null, campaign: null };
}

function buildStoredValue(d: ReturnType<typeof detect>): string {
  if (!d.isAds) return 'org';
  // Constrói "ads|g|cda-vergalhao" ou "ads|m" ou apenas "ads"
  return ['ads', d.platform, d.campaign].filter(Boolean).join('|');
}

// ── API pública ───────────────────────────────────────────────────────────────

/**
 * Roda 1x ao carregar a página.
 * Marca o canal se a URL tiver sinal de anúncio; preserva o valor existente se não.
 */
export function initChannel(): void {
  try {
    const d = detect();
    if (d.isAds) {
      // Anúncio detectado → sempre sobrescreve (nova sessão de anúncio)
      localStorage.setItem(KEY, buildStoredValue(d));
    } else if (!localStorage.getItem(KEY)) {
      // Sem sinal de anúncio e sem valor anterior → orgânico
      localStorage.setItem(KEY, 'org');
    }
    // Se já existe um valor (ex: já veio de ads antes) → mantém (first-touch)
  } catch { /* localStorage indisponível — modo privado, etc. */ }
}

/**
 * Força o canal manualmente.
 * Usado pelas LPs de anúncio (/meta, /orcamento) que já sabem a plataforma.
 *
 * @param value  ex: 'ads|m', 'ads|g', 'org'
 */
export function setChannel(value: string): void {
  try { localStorage.setItem(KEY, value); } catch { /* ignora */ }
}

/**
 * Retorna a tag formatada para prefixar a mensagem.
 * Ex: "[ads|g|cda-vergalhao]" ou "[org]"
 */
export function channelTag(): string {
  try {
    return `[${localStorage.getItem(KEY) || 'org'}]`;
  } catch {
    return '[org]';
  }
}
