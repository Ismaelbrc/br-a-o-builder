import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, ChevronDown, Star } from 'lucide-react';
import logoImage from '@/assets/logo-braco.png';

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
  { name: 'Sobre', href: '/sobre' },
  { name: 'Produtos', href: '/produtos', hasDropdown: true },
  { name: 'Corte e Dobra', href: '/corte-e-dobra', highlight: true },
  { name: 'Galeria', href: '/galeria' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contato', href: '/contato' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-white/95 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logoImage} 
              alt="BR.AÇO - Seus projetos na velocidade máxima" 
              className="h-10 lg:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
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
                          ? 'text-brand-orange'
                          : 'text-brand-navy hover:text-brand-orange'
                      }`}
                    >
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Dropdown */}
                    {isProductsOpen && (
                      <div className="absolute top-full left-0 pt-2">
                        <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 min-w-[220px]">
                          {productLinks.map((product) => (
                            <Link
                              key={product.name}
                              to={product.href}
                              className={`flex items-center gap-2 px-4 py-3 rounded-lg text-brand-gray-dark hover:bg-brand-gray-light transition-colors ${
                                product.highlight ? 'font-medium' : ''
                              }`}
                            >
                              {product.highlight && (
                                <Star className="w-4 h-4 text-brand-orange fill-brand-orange" />
                              )}
                              {product.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    className={`px-4 py-2 text-sm font-medium transition-colors uppercase tracking-wide ${
                      link.highlight
                        ? 'text-brand-orange'
                        : location.pathname === link.href
                        ? 'text-brand-orange'
                        : 'text-brand-navy hover:text-brand-orange'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/cliente"
              className="flex items-center gap-2 px-3 py-2 text-brand-gray-medium hover:text-brand-navy transition-colors"
              title="Área do Cliente"
            >
              <User className="w-5 h-5" />
            </Link>
            <button
              onClick={scrollToOrcamento}
              className="bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-semibold rounded-full px-6 py-2.5 transition-colors uppercase tracking-wide"
            >
              Fale Conosco
            </button>
          </div>

          {/* Mobile Menu Button - min 44x44 touch target */}
          <button
            className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center text-brand-navy"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 top-16 bg-black/50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 bottom-0 bg-white z-50 overflow-y-auto">
          <div className="flex flex-col min-h-full px-4 py-6">
            <nav className="flex-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                        className="flex items-center justify-between w-full min-h-[48px] py-3 text-base text-brand-navy border-b border-gray-100 uppercase tracking-wide font-medium"
                      >
                        {link.name}
                        <ChevronDown className={`w-5 h-5 transition-transform ${isMobileProductsOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isMobileProductsOpen && (
                        <div className="pl-4 py-2 space-y-1 bg-gray-50">
                          {productLinks.map((product) => (
                            <Link
                              key={product.name}
                              to={product.href}
                              className={`flex items-center gap-2 min-h-[44px] py-2 text-sm text-brand-gray-medium hover:text-brand-navy ${
                                product.highlight ? 'text-brand-orange font-medium' : ''
                              }`}
                            >
                              {product.highlight && (
                                <Star className="w-4 h-4 text-brand-orange fill-brand-orange" />
                              )}
                              {product.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      className={`block min-h-[48px] py-3 text-base border-b border-gray-100 uppercase tracking-wide font-medium ${
                        link.highlight ? 'text-brand-orange' : 'text-brand-navy'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="mt-auto pt-6 border-t border-gray-200 space-y-3">
              <Link
                to="/cliente"
                className="flex items-center gap-3 min-h-[48px] py-3 text-brand-navy"
              >
                <User className="w-5 h-5" />
                Área do Cliente
              </Link>
              <button
                onClick={() => {
                  scrollToOrcamento();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold rounded-full min-h-[48px] py-4 transition-colors uppercase tracking-wide"
              >
                Fale Conosco
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
