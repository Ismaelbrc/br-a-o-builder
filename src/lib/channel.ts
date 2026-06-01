// Atribuição de canal: ads vs org.
// Detecta na chegada (gclid/click-id do Google = ads; utm_medium pago = ads),
// guarda no localStorage (persiste entre páginas) e expõe a tag [ads]/[org]
// que é injetada em TODA mensagem de WhatsApp.

const KEY = 'br_channel';

function detectAdsFromUrl(): boolean {
  if (typeof window === 'undefined') return false;
  const p = new URLSearchParams(window.location.search);
  const get = (k: string) => (p.get(k) || '').trim();

  // Click-ids confiáveis (só anúncios adicionam): Google e Bing Ads.
  const adsClickId = ['gclid', 'gbraid', 'wbraid', 'msclkid'].some((k) => get(k) !== '');

  // Qualquer canal pago via utm_medium. (No Meta, setar utm_medium=cpc / paid_social no anúncio.)
  // Obs: fbclid sozinho NÃO conta — o Facebook adiciona ele também em links orgânicos.
  const med = get('utm_medium').toLowerCase();
  const paidMed = ['cpc', 'ppc', 'paid', 'paidsocial', 'paid_social', 'paid-social', 'display', 'cpm', 'social_paid'];
  const adsUtm = paidMed.some((m) => med.includes(m));

  return adsClickId || adsUtm;
}

/** Roda 1x no load. Marca 'ads' se a URL trouxer sinal de anúncio; senão garante 'org'. */
export function initChannel(): void {
  try {
    if (detectAdsFromUrl()) {
      localStorage.setItem(KEY, 'ads');
      return;
    }
    if (!localStorage.getItem(KEY)) localStorage.setItem(KEY, 'org');
  } catch {
    /* localStorage indisponível — ignora */
  }
}

/** Força o canal (usado pelas LPs de anúncio /meta e /orcamento). */
export function setChannel(c: 'ads' | 'org'): void {
  try {
    localStorage.setItem(KEY, c);
  } catch {
    /* ignora */
  }
}

/** Tag a ser prefixada na mensagem: [ads] ou [org]. */
export function channelTag(): string {
  try {
    return localStorage.getItem(KEY) === 'ads' ? '[ads]' : '[org]';
  } catch {
    return '[org]';
  }
}
