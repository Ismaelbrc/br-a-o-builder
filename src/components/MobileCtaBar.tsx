import { MessageCircle } from 'lucide-react';
import { analytics } from '@/lib/analytics';
import { openWhatsApp } from '@/lib/whatsapp';

/**
 * Barra CTA fixa logo abaixo do header — visível ANTES de qualquer scroll.
 * Só aparece em mobile (lg:hidden). Corrige o problema de 93% bounce no
 * Instagram in-app browser onde o botão laranja do hero não abre o WhatsApp.
 */
export default function MobileCtaBar() {
  const handleClick = () => {
    setTimeout(() => analytics.whatsappClick('mobile-bar'), 0);
    openWhatsApp();
  };

  return (
    <div className="lg:hidden fixed top-16 left-0 right-0 z-40">
      <button
        onClick={handleClick}
        className="w-full bg-brand-whatsapp hover:bg-brand-whatsapp-hover text-white text-sm font-semibold flex items-center justify-center gap-2 py-2.5 transition-colors touch-manipulation"
        aria-label="Pedir orçamento no WhatsApp"
      >
        <MessageCircle className="w-4 h-4 flex-shrink-0" />
        Pedir orçamento no WhatsApp — gratuito
      </button>
    </div>
  );
}
