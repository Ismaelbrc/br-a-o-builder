import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappLink = "https://wa.me/5562982858558?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20minha%20obra.";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Fale conosco no WhatsApp"
    >
      {/* Pulse ring animation */}
      <span className="absolute inset-0 rounded-full bg-brand-whatsapp animate-pulse-ring" />
      
      {/* Button */}
      <div className="relative w-14 h-14 md:w-14 md:h-14 bg-brand-whatsapp hover:bg-brand-whatsapp-hover rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105">
        <MessageCircle className="w-7 h-7 text-white" />
      </div>

      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-brand-gray-dark text-sm font-medium px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Fale conosco no WhatsApp
      </div>
    </a>
  );
}
