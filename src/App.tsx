import { lazy, Suspense } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation, useParams } from "react-router-dom";
import { usePageTracking } from "@/hooks/usePageTracking";
import { useEffect } from "react";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { PageLoader } from "@/components/PageLoader";
import { initChannel, channelTag, geoTag, fetchGeo } from "@/lib/channel";
import { analytics } from "@/lib/analytics";

// Redirect /conteudo/:slug → /blog/:slug (legacy WordPress URLs)
const ConteudoRedirect = () => {
  const { slug } = useParams<{ slug: string }>();
  return <Navigate to={`/blog/${slug}`} replace />;
};

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

// Recupera automaticamente de "chunk desatualizado" após um novo deploy:
// se um import dinâmico falhar (o arquivo antigo sumiu do servidor), recarrega
// a página 1x para buscar o index.html novo + os chunks válidos.
// Guarda de 10s evita loop infinito se o chunk realmente não existir.
function lazyWithRetry<T extends React.ComponentType<unknown>>(importer: () => Promise<{ default: T }>) {
  return lazy(async () => {
    try {
      return await importer();
    } catch (err) {
      const now = Date.now();
      const last = Number(sessionStorage.getItem('chunkReloadAt') || '0');
      if (now - last > 10000) {
        sessionStorage.setItem('chunkReloadAt', String(now));
        window.location.reload();
        return await new Promise<{ default: T }>(() => {}); // segura até recarregar
      }
      throw err;
    }
  });
}

// ── Lazy-loaded pages — each route gets its own JS chunk ──────────────────────
const Index               = lazyWithRetry(() => import('./pages/Index'));
const Sobre               = lazyWithRetry(() => import('./pages/Sobre'));
const Produtos            = lazyWithRetry(() => import('./pages/Produtos'));
const CorteEDobra         = lazyWithRetry(() => import('./pages/CorteEDobra'));
const Blog                = lazyWithRetry(() => import('./pages/Blog'));
const BlogPost            = lazyWithRetry(() => import('./pages/BlogPost'));
const Contato             = lazyWithRetry(() => import('./pages/Contato'));
const Cliente             = lazyWithRetry(() => import('./pages/Cliente'));
const Galeria             = lazyWithRetry(() => import('./pages/Galeria'));
const Faq                 = lazyWithRetry(() => import('./pages/Faq'));
const CalculadoraVergalhao = lazyWithRetry(() => import('./pages/CalculadoraVergalhao'));
const LandingPage         = lazyWithRetry(() => import('./pages/LandingPage'));
const Meta                = lazyWithRetry(() => import('./pages/Meta'));
const Orcamento           = lazyWithRetry(() => import('./pages/Orcamento'));
const NotFound            = lazyWithRetry(() => import('./pages/NotFound'));
const TebasLanding        = lazyWithRetry(() => import('./pages/Tebas/index'));
const TebasCalcular       = lazyWithRetry(() => import('./pages/Tebas/Calcular'));
const TebasResultado      = lazyWithRetry(() => import('./pages/Tebas/Resultado'));
// ─────────────────────────────────────────────────────────────────────────────

const queryClient = new QueryClient();

function AppRoutes() {
  usePageTracking();

  // Clarity: tag Instagram in-app browser para segmentação no dashboard
  useEffect(() => {
    if (/Instagram|FBAN|FBAV|FB_IAB/.test(navigator.userAgent)) {
      analytics.clarityTag('traffic_source', 'instagram_app');
      analytics.clarityUpgrade('instagram_session'); // força gravação (não cai em sampling)
    }
  }, []);

  // Atribuição de canal: injeta [ads]/[org] no início de TODA mensagem de WhatsApp,
  // reescrevendo o href no momento do clique (cobre todos os links, atuais e futuros).
  useEffect(() => {
    initChannel();
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement | null)?.closest?.('a') as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute('href') || '';
      if (!/wa\.me\/|api\.whatsapp\.com\/send/i.test(href)) return;
      try {
        const url = new URL(href, window.location.origin);
        const text = url.searchParams.get('text') || '';
        if (/^\s*\[(ads|org)\]/.test(text)) return; // já marcado
        url.searchParams.set('text', `${channelTag()} ${text}`.trim());
        anchor.setAttribute('href', url.toString());
      } catch {
        /* href não parseável — ignora */
      }
    };
    document.addEventListener('click', onClick, true); // capture: roda antes da navegação
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/corte-e-dobra" element={<CorteEDobra />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/cliente" element={<Cliente />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/calculadora-vergalhao" element={<CalculadoraVergalhao />} />
          {/* Tracking / redirect pages */}
          <Route path="/meta" element={<Meta />} />
          <Route path="/orcamento" element={<Orcamento />} />
          {/* Legacy WordPress blog URLs → new SPA blog */}
          <Route path="/conteudo/:slug" element={<ConteudoRedirect />} />
          {/* Tebas — deve vir antes do catch-all /:productSlug/:locationSlug */}
          <Route path="/tebas" element={<TebasLanding />} />
          <Route path="/tebas/calcular" element={<TebasCalcular />} />
          <Route path="/tebas/resultado" element={<TebasResultado />} />
          {/* Landing pages: /:productSlug/:locationSlug */}
          <Route path="/:productSlug/:locationSlug" element={<LandingPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
