import { MessageCircle } from 'lucide-react';
import { analytics } from '@/lib/analytics';
import { openWhatsApp } from '@/lib/whatsapp';

export default function WhatsAppButton() {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setTimeout(() => analytics.whatsappClick('floating'), 0);
    openWhatsApp();
  };

  return (
    <a
      href="https://wa.me/556296472423?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20minha%20obra."
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 group"
      aria-label="Fale conosco no WhatsApp"
      onClick={handleClick}
    >
      {/* Pulse ring animation */}
      <span className="absolute inset-0 rounded-full bg-brand-whatsapp animate-pulse-ring" />

      {/* Button - 48px mobile, 56px desktop */}
      <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-brand-whatsapp hover:bg-brand-whatsapp-hover rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105">
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
      </div>

      {/* Tooltip - hidden on mobile */}
      <div className="hidden sm:block absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-brand-gray-dark text-sm font-medium px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Fale conosco no WhatsApp
      </div>
    </a>
  );
}
