import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import MobileCtaBar from './MobileCtaBar';
import BackToTopButton from './BackToTopButton';
import ExitIntentPopup from './ExitIntentPopup';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <MobileCtaBar />
      {/* mobile: header 64px + barra whatsapp ~42px = 106px; desktop: sem barra, mantém pt-20 original */}
      <main className="flex-1 pt-[106px] lg:pt-20">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTopButton />
      <ExitIntentPopup />
    </div>
  );
}
