import { channelTag, clickIdTag } from '@/lib/channel';

// Contato único do site: número oficial WhatsApp Cloud API (instância "Kennedy").
// Todo lead do site cai no inbox central do Nexum. A estrutura de pool/pickSeller
// é mantida por compatibilidade (com 1 elemento sempre retorna o Kennedy), caso
// se queira voltar a um rodízio no futuro.
const WA_POOL = [
  '556299032023', // Kennedy (número oficial Cloud API)
];
const PHONE = '556299032023';

/** Número do vendedor sorteado para este visitante (persistido; sempre o mesmo). */
export function pickSeller(): string {
  try {
    let p = localStorage.getItem('br_wa_seller');
    if (!p || !WA_POOL.includes(p)) {
      p = WA_POOL[Math.floor(Math.random() * WA_POOL.length)];
      localStorage.setItem('br_wa_seller', p);
    }
    return p;
  } catch {
    return PHONE;
  }
}

const DEFAULT_TEXT = 'Olá! Gostaria de solicitar um orçamento para minha obra.';

function isInAppBrowser(): boolean {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  return /Instagram|FBAN|FBAV|LinkedIn|Twitter|Line\/|MicroMessenger/.test(ua);
}

function buildUrl(customText?: string): string {
  const text = `${channelTag()} ${clickIdTag()} ${customText || DEFAULT_TEXT}`.replace(/\s+/g, ' ').trim();
  return `https://wa.me/${pickSeller()}?text=${encodeURIComponent(text)}`;
}

/**
 * Abre o WhatsApp injetando o canal de atribuição ([soc|ig|bio], [ads|g], [org], etc.)
 * no início da mensagem. Compatível com in-app browsers (Instagram/Facebook).
 */
export function openWhatsApp(customText?: string): void {
  const url = buildUrl(customText);
  if (isInAppBrowser()) {
    window.location.href = url;
  } else {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}

export const WHATSAPP_URL = `https://wa.me/${PHONE}`;
