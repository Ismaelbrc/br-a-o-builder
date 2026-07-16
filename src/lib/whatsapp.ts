import { channelTag, clickIdTag } from '@/lib/channel';

// Rodízio de vendedores (round-robin STICKY): o visitante é sorteado 1x para um
// vendedor do pool e fica grudado nele (localStorage) — a conversa não se parte.
// Divisão par entre os números. Pool = instância WhatsApp viva de cada vendedor
// do teste de efetividade (medido no funil pelo instance_id que recebe o contato).
const WA_POOL = [
  '556291489786', // Aline
  '556299247285', // Henrique
  '556298667249', // Tati
  '556296472423', // Geordio
];
const PHONE = WA_POOL[0]; // fallback estático (WHATSAPP_URL)

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
