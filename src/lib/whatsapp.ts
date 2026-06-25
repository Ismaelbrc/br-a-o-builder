import { channelTag, clickIdTag } from '@/lib/channel';

const PHONE = '556296472423';
const DEFAULT_TEXT = 'Olá! Gostaria de solicitar um orçamento para minha obra.';

function isInAppBrowser(): boolean {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  return /Instagram|FBAN|FBAV|LinkedIn|Twitter|Line\/|MicroMessenger/.test(ua);
}

function buildUrl(customText?: string): string {
  const text = `${channelTag()} ${clickIdTag()} ${customText || DEFAULT_TEXT}`.replace(/\s+/g, ' ').trim();
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;
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
