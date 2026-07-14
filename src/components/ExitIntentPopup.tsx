import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { X, MessageCircle, Calculator } from 'lucide-react';
import { analytics } from '@/lib/analytics';

const WHATSAPP =
  'https://wa.me/556291489786?text=%5Bsrc%3Aexit%5D%20Ol%C3%A1!%20Vi%20o%20site%20da%20BR%20A%C3%A7o%20e%20gostaria%20de%20um%20or%C3%A7amento%20para%20a%20minha%20obra.';

/**
 * Exit-intent popup — detecta o cursor saindo pelo topo (indo fechar a aba)
 * e mostra uma última oferta. Dispara 1x por sessão. Desktop (mouseleave).
 * Leve: só renderiza quando aberto.
 */
export default function ExitIntentPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const seen = () => { try { return !!sessionStorage.getItem('exitShown'); } catch { return false; } };
    const markSeen = () => { try { sessionStorage.setItem('exitShown', '1'); } catch { /* storage bloqueado */ } };
    if (seen()) return;

    const isMobile = () => window.innerWidth < 1024 || ('ontouchstart' in window);

    if (isMobile()) {
      // Mobile / Instagram App: 94% do tráfego.
      // Timer de 35s — aparece quando o usuário está lendo mas ainda não converteu.
      const timer = setTimeout(() => {
        if (!seen()) { markSeen(); setOpen(true); analytics.clarityEvent('exit_intent_shown'); }
      }, 35000);
      return () => clearTimeout(timer);
    } else {
      // Desktop: cursor saindo pelo topo (exit-intent clássico), mín 4s na página.
      const mountedAt = Date.now();
      const onLeave = (e: MouseEvent) => {
        if (e.clientY <= 0 && Date.now() - mountedAt > 4000 && !seen()) {
          markSeen(); setOpen(true); analytics.clarityEvent('exit_intent_shown');
        }
      };
      document.addEventListener('mouseleave', onLeave);
      return () => document.removeEventListener('mouseleave', onLeave);
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[120] bg-brand-navy-dark/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in-up"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Antes de ir"
    >
      <div
        className="relative w-full max-w-md bg-metal rounded-2xl border border-hairline overflow-hidden p-8 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute inset-0 bg-blueprint opacity-[0.10]" aria-hidden="true" />
        <button
          onClick={() => setOpen(false)}
          aria-label="Fechar"
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative">
          <span className="inline-flex items-center gap-2.5 label-eyebrow text-brand-orange">
            <span className="h-px w-6 bg-brand-orange" aria-hidden="true" />
            Antes de ir
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-4 tracking-tight">
            Leva o orçamento da sua obra?
          </h2>
          <p className="text-white/70 text-sm mt-3 leading-relaxed">
            Resposta em até 2h, sem compromisso. Mande a planta ou a lista de material no WhatsApp —
            a BR Aço faz o quantitativo completo de graça.
          </p>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => { setTimeout(() => analytics.whatsappClick('exit-intent'), 0); setOpen(false); }}
            className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-brand-whatsapp hover:bg-brand-whatsapp-hover text-white font-semibold rounded-lg px-6 py-4 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Falar no WhatsApp
          </a>
          <Link
            to="/calculadora-vergalhao"
            onClick={() => setOpen(false)}
            className="mt-3 w-full inline-flex items-center justify-center gap-2 border border-white/20 text-white/80 hover:text-white hover:border-white/40 font-medium rounded-lg px-6 py-3 text-sm transition-colors"
          >
            <Calculator className="w-4 h-4" />
            Ou calcule o aço da obra grátis
          </Link>
        </div>
      </div>
    </div>
  );
}
