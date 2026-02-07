import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-[72px] right-4 sm:bottom-24 sm:right-6 z-40 w-9 h-9 sm:w-10 sm:h-10 bg-brand-navy/80 hover:bg-brand-navy rounded-full shadow-md flex items-center justify-center transition-all duration-300 hover:scale-105"
      aria-label="Voltar ao topo"
    >
      <ChevronUp className="w-5 h-5 text-white" />
    </button>
  );
}
