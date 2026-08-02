import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Instagram, Linkedin } from 'lucide-react';
import logoImage from '@/assets/logo-footer.png';
import { analytics } from '@/lib/analytics';

const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Produtos', href: '/produtos' },
  { name: 'Corte e Dobra', href: '/corte-e-dobra' },
  { name: 'Blog', href: '/blog' },
  { name: 'Calculadora de Vergalhão', href: '/calculadora-vergalhao' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contato', href: 'https://wa.me/556299032023?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20minha%20obra.' },
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
  { name: 'Google', icon: MapPin, href: 'https://share.google/zAqVF572NlwODojXo' },
];

export default function Footer() {
  return (
    <footer className="bg-background pt-12 pb-8 sm:pt-16 border-t border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div>
            <Link to="/" className="inline-block">
              <img
                src={logoImage}
                alt="BR.AÇO - Seus projetos na velocidade máxima"
                className="h-16 w-auto"
                width="1920"
                height="440"
                loading="lazy"
              />
            </Link>
            <p className="text-sm text-muted-foreground mt-3 max-w-xs">
              A maior indústria de aço para construção civil de Goiás
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-muted hover:bg-primary rounded-full p-2.5 transition-colors group/social"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-foreground group-hover/social:text-primary-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="label-eyebrow text-brand-navy mb-5">
              Navegação
            </h3>
            <ul className="space-y-1">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('http') ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground text-sm py-1.5 block transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground text-sm py-1.5 block transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="label-eyebrow text-brand-navy mb-5">
              Produtos
            </h3>
            <ul className="space-y-1">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm py-1.5 block transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="label-eyebrow text-brand-navy mb-5">
              Contato
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/556299032023?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20minha%20obra."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-muted-foreground text-sm hover:text-foreground transition-colors"
                  onClick={() => setTimeout(() => analytics.whatsappClick('footer'), 0)}
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>WhatsApp: (62) 9903-2023</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>vendas@grupobraco.com.br</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Rua 11, Qd. 05, L7. 07 - Polo Industrial, Aparecida de Goiânia - GO, 74985-235</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Seg-Sex: 7h às 17h</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-hairline mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">
            © 2026 BR Aço — Grupo BR Aço. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
