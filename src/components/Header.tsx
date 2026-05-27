import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, ChevronDown, Star, Calculator } from 'lucide-react';
import logoImage from '@/assets/logo-braco.png';
import { analytics } from '@/lib/analytics';

const productLinks = [
  { name: 'Corte e Dobra', href: '/corte-e-dobra', highlight: true },
  { name: 'Vergalhões', href: '/produtos#vergalhoes' },
  { name: 'Treliças', href: '/produtos#trelicas' },
  { name: 'Telas e Malhas Pop', href: '/produtos#telas-e-malhas-pop' },
  { name: 'Colunas', href: '/produtos#colunas' },
  { name: 'Pregos e Arames', href: '/produtos#pregos-e-arames' },
];

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Corte e Dobra', href: '/corte-e-dobra', highlight: true },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Produtos', href: '/produtos', hasDropdown: true },
  { name: 'Galeria', href: '/galeria' },
  { name: 'Blog', href: '/blog' },
  { name: 'Calculadora', href: '/calculadora-vergalhao', isCalculator: true },
  { name: 'Catálogo', href: '/catalogo-braco.pdf', isExternal: true },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let rafId: number;
    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50);
      });
    };
    // passive: true → browser never waits for JS before scrolling (core INP fix)
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileProductsOpen(false);
  }, [location]);

  const scrollToOrcamento = () => {
    const orcamentoSection = document.getElementById('orcamento');
    if (orcamentoSection) {
      orcamentoSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/contato';
    }
  };

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background shadow-lg'
          : 'bg-background/95 backdrop-blur-md'
      }`}
    >
      {/* Top bar with logo and CTA - Desktop */}
      <div className="hidden lg:block border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo - larger */}
            <Link to="/" className="flex items-center">
              <img
                src={logoImage}
                alt="BR.AÇO - Seus projetos na velocidade máxima"
                className="h-16 w-auto"
                width="981"
                height="197"
                fetchPriority="high"
              />
            </Link>

            {/* Right side - user and CTA */}
            <div className="flex items-center gap-4">
              <Link
                to="/cliente"
                className="flex items-center gap-2 px-3 py-2 text-muted-foreground hover:text-accent transition-colors"
                title="Área do Cliente"
              >
                <User className="w-5 h-5" />
                <span className="text-sm">Área do Cliente</span>
              </Link>
              <a
                onClick={() => setTimeout(() => analytics.whatsappClick('header'), 0)}
                href="https://wa.me/556296472423?text=%5Bsrc%3Asite%5D%20Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20minha%20obra."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-semibold rounded-full px-8 py-3 transition-colors uppercase tracking-wide"
              >
                Fale Conosco
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation bar - Desktop */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-1 h-14">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors uppercase tracking-wide ${
                        location.pathname === link.href
                          ? 'text-primary'
                          : 'text-accent hover:text-primary'
                      }`}
                    >
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Dropdown */}
                    {isProductsOpen && (
                      <div className="absolute top-full left-0 pt-2">
                        <div className="bg-card rounded-xl shadow-xl border border-border p-2 min-w-[220px]">
                          {productLinks.map((product) => (
                            <Link
                              key={product.name}
                              to={product.href}
                              className={`flex items-center gap-2 px-4 py-3 rounded-lg text-foreground hover:bg-secondary transition-colors ${
                                product.highlight ? 'font-medium' : ''
                              }`}
                            >
                              {product.highlight && (
                                <Star className="w-4 h-4 text-primary fill-primary" />
                              )}
                              {product.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (link as any).isCalculator ? (
                  <Link
                    to={link.href}
                    className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold transition-colors rounded-full border ${
                      location.pathname === link.href
                        ? 'bg-brand-orange text-white border-brand-orange'
                        : 'text-brand-orange border-brand-orange/40 hover:bg-brand-orange hover:text-white hover:border-brand-orange'
                    }`}
                  >
                    <Calculator className="w-3.5 h-3.5" />
                    {link.name}
                  </Link>
                ) : (link as any).isExternal ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm font-medium transition-colors uppercase tracking-wide text-accent hover:text-primary"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={link.href}
                    className={`px-4 py-2 text-sm font-medium transition-colors uppercase tracking-wide ${
                      link.highlight
                        ? 'text-primary font-semibold'
                        : location.pathname === link.href
                        ? 'text-primary'
                        : 'text-accent hover:text-primary'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src={logoImage}
                alt="BR.AÇO - Seus projetos na velocidade máxima"
                className="h-10 w-auto"
                width="981"
                height="197"
                fetchPriority="high"
              />
            </Link>

            {/* Mobile Menu Button - min 44x44 touch target */}
            <button
              className="min-w-[44px] min-h-[44px] flex items-center justify-center text-accent"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

    </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-16 bg-black/50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 bottom-0 bg-background z-50 overflow-y-auto">
          <div className="flex flex-col min-h-full px-4 py-6">
            <nav className="flex-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                        className="flex items-center justify-between w-full min-h-[48px] py-3 text-base text-accent border-b border-border uppercase tracking-wide font-medium"
                      >
                        {link.name}
                        <ChevronDown className={`w-5 h-5 transition-transform ${isMobileProductsOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isMobileProductsOpen && (
                        <div className="pl-4 py-2 space-y-1 bg-secondary">
                          {productLinks.map((product) => (
                            <Link
                              key={product.name}
                              to={product.href}
                              className={`flex items-center gap-2 min-h-[44px] py-2 text-sm text-muted-foreground hover:text-accent ${
                                product.highlight ? 'text-primary font-medium' : ''
                              }`}
                            >
                              {product.highlight && (
                                <Star className="w-4 h-4 text-primary fill-primary" />
                              )}
                              {product.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (link as any).isCalculator ? (
                    <Link
                      to={link.href}
                      className={`flex items-center gap-2 min-h-[48px] py-3 border-b border-border text-base font-semibold ${
                        location.pathname === link.href
                          ? 'text-brand-orange'
                          : 'text-brand-orange'
                      }`}
                    >
                      <Calculator className="w-4 h-4" />
                      {link.name}
                    </Link>
                  ) : (link as any).isExternal ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block min-h-[48px] py-3 text-base border-b border-border uppercase tracking-wide font-medium text-accent"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className={`block min-h-[48px] py-3 text-base border-b border-border uppercase tracking-wide font-medium ${
                        link.highlight ? 'text-primary' : 'text-accent'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="mt-auto pt-6 border-t border-border space-y-3">
              <Link
                to="/cliente"
                className="flex items-center gap-3 min-h-[48px] py-3 text-accent"
              >
                <User className="w-5 h-5" />
                Área do Cliente
              </Link>
              <a
                href="https://wa.me/556296472423?text=%5Bsrc%3Asite%5D%20Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20minha%20obra."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => { setTimeout(() => analytics.whatsappClick('header'), 0); setIsMobileMenuOpen(false); }}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full min-h-[48px] py-4 transition-colors uppercase tracking-wide text-center block"
              >
                Fale Conosco
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
