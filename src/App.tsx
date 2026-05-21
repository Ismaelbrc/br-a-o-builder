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
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Produtos from "./pages/Produtos";
import CorteEDobra from "./pages/CorteEDobra";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contato from "./pages/Contato";
import Cliente from "./pages/Cliente";
import Galeria from "./pages/Galeria";
import Faq from "./pages/Faq";
import CalculadoraVergalhao from "./pages/CalculadoraVergalhao";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Inner component so it can use router hooks
function AppRoutes() {
  usePageTracking();
  return (
    <>
      <ScrollToTop />
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
          {/* Landing pages: /:productSlug/:locationSlug */}
          <Route path="/:productSlug/:locationSlug" element={<LandingPage />} />
          <Route path="*" element={<NotFound />} />
    </Routes>
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
