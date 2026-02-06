import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, ChevronDown, Star } from 'lucide-react';

const productLinks = [
  { name: 'Corte e Dobra', href: '/corte-e-dobra', highlight: true },
  { name: 'Vergalhões', href: '/produtos#vergalhoes' },
  { name: 'Treliças', href: '/produtos#trelicas' },
  { name: 'Malhas', href: '/produtos#malhas' },
  { name: 'Telas e Colunas', href: '/produtos#telas-e-colunas' },
  { name: 'Bobinas', href: '/produtos#bobinas' },
  { name: 'Sapatas', href: '/produtos#sapatas' },
  { name: 'Pregos e Arames', href: '/produtos#pregos-e-arames' },
];

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Produtos', href: '/produtos', hasDropdown: true },
  { name: 'Corte e Dobra', href: '/corte-e-dobra', highlight: true },
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
          ? 'bg-brand-navy shadow-lg'
          : 'bg-brand-navy/90 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold tracking-tight">
              <span className="text-white">BR</span>
              <span className="text-brand-orange">Aço</span>
            </span>
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
                      className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${
                        location.pathname === link.href
                          ? 'text-white'
                          : 'text-white/80 hover:text-white'
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
                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                      link.highlight
                        ? 'text-brand-orange'
                        : location.pathname === link.href
                        ? 'text-white'
                        : 'text-white/80 hover:text-white'
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
              className="flex items-center gap-2 px-3 py-2 text-white/70 hover:text-white transition-colors"
              title="Área do Cliente"
            >
              <User className="w-5 h-5" />
            </Link>
            <button
              onClick={scrollToOrcamento}
              className="bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-semibold rounded-full px-6 py-2.5 transition-colors"
            >
              Solicitar Orçamento
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-brand-navy z-40">
          <div className="flex flex-col h-full overflow-y-auto px-4 py-6">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                      className="flex items-center justify-between w-full py-3 text-lg text-white border-b border-white/10"
                    >
                      {link.name}
                      <ChevronDown className={`w-5 h-5 transition-transform ${isMobileProductsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isMobileProductsOpen && (
                      <div className="pl-4 py-2 space-y-1">
                        {productLinks.map((product) => (
                          <Link
                            key={product.name}
                            to={product.href}
                            className={`flex items-center gap-2 py-2 text-white/80 hover:text-white ${
                              product.highlight ? 'text-brand-orange' : ''
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
                    className={`block py-3 text-lg border-b border-white/10 ${
                      link.highlight ? 'text-brand-orange' : 'text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}

            <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
              <Link
                to="/cliente"
                className="flex items-center gap-3 py-3 text-white"
              >
                <User className="w-5 h-5" />
                Área do Cliente
              </Link>
              <button
                onClick={scrollToOrcamento}
                className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold rounded-full py-4 transition-colors"
              >
                Solicitar Orçamento
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
