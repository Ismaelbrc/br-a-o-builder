const WHATSAPP_URL =
  "https://wa.me/556296472423?text=%5Bsrc%3Asite%5D%20Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20minha%20obra.";

function isInAppBrowser(): boolean {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  // Instagram, Facebook, LinkedIn, Twitter in-app browsers all block wa.me target=_blank
  return /Instagram|FBAN|FBAV|LinkedIn|Twitter|Line\/|MicroMessenger/.test(ua);
}

/**
 * Abre o WhatsApp de forma compatível com in-app browsers.
 *
 * Instagram/Facebook WebView bloqueia target="_blank" para links externos.
 * Navegar na mesma aba aciona o handler de deep link do sistema operacional
 * corretamente em todos os browsers.
 */
export function openWhatsApp(): void {
  if (isInAppBrowser()) {
    window.location.href = WHATSAPP_URL;
  } else {
    window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
  }
}

export { WHATSAPP_URL };
