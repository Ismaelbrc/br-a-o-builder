import { lazy, Suspense } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { usePageTracking } from "@/hooks/usePageTracking";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

// ── Lazy-loaded pages — each route gets its own JS chunk ──────────────────────
const Index               = lazy(() => import('./pages/Index'));
const Sobre               = lazy(() => import('./pages/Sobre'));
const Produtos            = lazy(() => import('./pages/Produtos'));
const CorteEDobra         = lazy(() => import('./pages/CorteEDobra'));
const Blog                = lazy(() => import('./pages/Blog'));
const BlogPost            = lazy(() => import('./pages/BlogPost'));
const Contato             = lazy(() => import('./pages/Contato'));
const Cliente             = lazy(() => import('./pages/Cliente'));
const Galeria             = lazy(() => import('./pages/Galeria'));
const Faq                 = lazy(() => import('./pages/Faq'));
const CalculadoraVergalhao = lazy(() => import('./pages/CalculadoraVergalhao'));
const LandingPage         = lazy(() => import('./pages/LandingPage'));
const Meta                = lazy(() => import('./pages/Meta'));
const NotFound            = lazy(() => import('./pages/NotFound'));
const TebasLanding        = lazy(() => import('./pages/Tebas/index'));
const TebasCalcular       = lazy(() => import('./pages/Tebas/Calcular'));
const TebasResultado      = lazy(() => import('./pages/Tebas/Resultado'));
// ─────────────────────────────────────────────────────────────────────────────

const queryClient = new QueryClient();

function AppRoutes() {
  usePageTracking();
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={null}>
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
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
