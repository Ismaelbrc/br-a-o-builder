import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Instagram, Linkedin, Facebook } from 'lucide-react';
import logoImage from '@/assets/logo-braco.png';

const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Produtos', href: '/produtos' },
  { name: 'Corte e Dobra', href: '/corte-e-dobra' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contato', href: '/contato' },
  { name: 'Área do Cliente', href: '/cliente' },
];

const productLinks = [
  { name: 'Corte e Dobra', href: '/corte-e-dobra' },
  { name: 'Vergalhões', href: '/produtos#vergalhoes' },
  { name: 'Treliças', href: '/produtos#trelicas' },
  { name: 'Telas e Malhas Pop', href: '/produtos#telas-e-malhas-pop' },
  { name: 'Colunas', href: '/produtos#colunas' },
  { name: 'Pregos e Arames', href: '/produtos#pregos-e-arames' },
];

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/grupobraco_/' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://br.linkedin.com/company/grupobraco' },
  { name: 'Facebook', icon: Facebook, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-accent pt-12 pb-8 sm:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div>
            <Link to="/" className="inline-block">
              <img 
                src={logoImage} 
                alt="BR.AÇO - Seus projetos na velocidade máxima" 
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-accent-foreground/60 mt-3 max-w-xs">
              A maior indústria de aço para construção civil de Goiás
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-brand-orange rounded-full p-2.5 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Navegação
            </h3>
            <ul className="space-y-1">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white text-sm py-1.5 block transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Produtos
            </h3>
            <ul className="space-y-1">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white text-sm py-1.5 block transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contato
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/5562982858558?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20minha%20obra."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-400 text-sm hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>WhatsApp: (62) 98285-8558</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>contato@grupobraco.com.br</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Via Primária Oito, DAIAG, Aparecida de Goiânia - GO, 74900-000</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Seg-Sex: 7h às 17h | Sáb: 7h às 11h</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © 2026 BR Aço — Grupo BR Aço. Todos os direitos reservados.
          </p>
          <a
            href="#"
            className="text-gray-500 text-xs hover:text-white transition-colors"
          >
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}
