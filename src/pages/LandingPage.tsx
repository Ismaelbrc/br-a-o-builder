import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { MapPin, Clock, CheckCircle, MessageCircle, ChevronRight, ArrowRight, Phone } from 'lucide-react';
import Layout from '@/components/Layout';
import { useSEO } from '@/hooks/useSEO';
import { landingProducts } from '@/data/landingProducts';
import { landingLocations, getDeliveryLabel } from '@/data/landingLocations';
import { analytics } from '@/lib/analytics';

const WA_BASE = 'https://wa.me/556296472423?text=';

export default function LandingPage() {
  const { productSlug = '', locationSlug = '' } = useParams<{ productSlug: string; locationSlug: string }>();

  const product = landingProducts[productSlug];
  const location = landingLocations[locationSlug];
  const isValid = !!product && !!location;

  // Deriva dados para o SEO — valores vazios são usados quando a combinação é inválida
  const cityName     = isValid ? location!.name  : '';
  const stateLabel   = isValid ? location!.state : '';
  const isNeighborhood = isValid && location!.type === 'neighborhood';
  const displayCity  = isNeighborhood ? `${cityName}, ${location!.city}` : cityName;
  const deliveryLabel = isValid ? getDeliveryLabel(location!.distanceKm) : '';

  // ⚠️ useSEO DEVE ficar antes de qualquer return condicional (regra de hooks)
  useSEO({
    title:       isValid ? product!.pageTitle(displayCity)               : 'BR Aço',
    description: isValid ? product!.metaDesc(displayCity, stateLabel)   : '',
    canonical:   isValid ? `https://grupobraco.com.br/${productSlug}/${locationSlug}` : undefined,
    keywords:    isValid ? `${product!.name} ${cityName}, ${product!.nameFull} ${cityName}, aço construção ${cityName}` : undefined,
  });

  // Schemas JSON-LD: FAQPage + BreadcrumbList + LocalBusiness
  useEffect(() => {
    if (!isValid) return;

    const canonicalUrl = `https://grupobraco.com.br/${productSlug}/${locationSlug}`;

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": product!.faq.map(item => ({
        "@type": "Question",
        "name": item.q(cityName),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a(cityName, deliveryLabel)
        }
      }))
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home",           "item": "https://grupobraco.com.br/" },
        { "@type": "ListItem", "position": 2, "name": product!.name,    "item": `https://grupobraco.com.br/${productSlug}/goiania` },
        { "@type": "ListItem", "position": 3, "name": displayCity,      "item": canonicalUrl }
      ]
    };

    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "HardwareStore"],
      "name": "BR Aço – Casa Brasileira de Aço",
      "description": product!.metaDesc(displayCity, stateLabel),
      "url": canonicalUrl,
      "telephone": "+55-62-99647-2423",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua 11, Qd. 05, L7. 07 - Polo Industrial",
        "addressLocality": "Aparecida de Goiânia",
        "addressRegion": "GO",
        "postalCode": "74985-235",
        "addressCountry": "BR"
      },
      "areaServed": [
        { "@type": "City", "name": cityName },
        { "@type": "State", "name": "Goiás" }
      ],
      "sameAs": [
        "https://www.instagram.com/grupobraco_",
        "https://www.facebook.com/bracogoiania/"
      ]
    };

    const inject = (id: string, data: object) => {
      let el = document.getElementById(id);
      if (!el) {
        el = document.createElement('script');
        el.id = id;
        (el as HTMLScriptElement).type = 'application/ld+json';
        document.head.appendChild(el);
      }
      el.textContent = JSON.stringify(data);
    };

    inject('lp-faq-schema', faqSchema);
    inject('lp-breadcrumb-schema', breadcrumbSchema);
    inject('lp-localbusiness-schema', localBusinessSchema);

    // Analytics — ViewContent para Meta Pixel e GA4
    analytics.viewContent(`${product!.name} - ${displayCity}`);

    return () => {
      document.getElementById('lp-faq-schema')?.remove();
      document.getElementById('lp-breadcrumb-schema')?.remove();
      document.getElementById('lp-localbusiness-schema')?.remove();
    };
  }, [isValid, productSlug, locationSlug, cityName, displayCity, stateLabel, deliveryLabel]);

  // Redireciona se combinação inválida (após todos os hooks)
  if (!isValid) return <Navigate to="/" replace />;

  const waMsg = encodeURIComponent(`[src:lp-${locationSlug}] ${product!.whatsappMsg(displayCity)}`);
  const waUrl = `${WA_BASE}${waMsg}`;

  // Posts relacionados: mesmos produtos + cidades próximas da mesma região
  const relatedProducts = product.relatedSlugs
    .filter(s => landingProducts[s])
    .slice(0, 4);

  // Cidades próximas: mesma cidade-pai (para bairros) ou mesma região (para cidades)
  const nearbyCities = Object.values(landingLocations)
    .filter(l =>
      l.slug !== locationSlug &&
      l.region === location.region &&
      l.type === 'city' &&
      Math.abs(l.distanceKm - location.distanceKm) < 80
    )
    .slice(0, 5);

  return (
    <Layout>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="bg-brand-navy pt-24 pb-14 sm:pt-28 sm:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-white/50 mb-5 flex-wrap">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to={`/${productSlug}/goiania`} className="hover:text-white transition-colors capitalize">
              {product.name}
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/80">{displayCity}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="bg-brand-orange/20 text-brand-orange text-xs font-semibold px-3 py-1 rounded-full">
              {product.shortDesc}
            </span>
            <span className="flex items-center gap-1 text-xs text-white/60">
              <MapPin className="w-3 h-3" />
              {displayCity} – {stateLabel}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            {product.h1(displayCity)}
          </h1>

          <p className="text-white/75 mt-4 text-base sm:text-lg max-w-2xl leading-relaxed">
            {product.intro(displayCity, stateLabel, deliveryLabel)}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => analytics.whatsappClick('landing-hero')}
              className="flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange/90 text-white font-bold rounded-full px-8 py-4 text-base transition-colors shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Solicitar Orçamento Grátis
            </a>
            <a
              href="tel:+556296472423"
              className="flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 rounded-full px-6 py-4 text-base transition-colors"
            >
              <Phone className="w-5 h-5" />
              (62) 99647-2423
            </a>
          </div>

          {/* Delivery badge */}
          <div className="flex items-center gap-2 mt-6 text-sm text-white/70">
            <Clock className="w-4 h-4 text-brand-orange flex-shrink-0" />
            <span>Fábrica em Aparecida de Goiânia — {deliveryLabel} para {displayCity}</span>
          </div>
        </div>
      </section>

      {/* ── Stats strip ───────────────────────────────────────────────── */}
      <section className="bg-brand-orange py-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-white text-sm font-semibold">
            <span>✓ +800 obras entregues</span>
            <span>✓ Certificação ABNT</span>
            <span>✓ Produção 100% automatizada</span>
            <span>✓ Entrega com frota própria</span>
          </div>
        </div>
      </section>

      {/* ── Diferenciais ──────────────────────────────────────────────── */}
      <section className="py-14 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-2">
            Por que escolher a BR Aço para {product.name.toLowerCase()} em {cityName}?
          </h2>
          <p className="text-brand-gray-medium mb-8 max-w-2xl">
            Maior indústria de aço para construção civil de Goiás, com entrega para {displayCity} {deliveryLabel}.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {product.features.map((f, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow">
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-brand-navy mb-1">{f.title}</h3>
                <p className="text-sm text-brand-gray-medium leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Como pedir ────────────────────────────────────────────────── */}
      <section className="py-14 bg-secondary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-2 text-center">
            Como pedir {product.name.toLowerCase()} em {cityName}
          </h2>
          <p className="text-brand-gray-medium text-center mb-10 max-w-xl mx-auto">
            Processo simples, sem burocracia — do orçamento à entrega em {cityName}.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { num: '1', title: 'Envie o projeto', desc: 'Mande a planta estrutural ou a lista de peças pelo WhatsApp.' },
              { num: '2', title: 'Receba o orçamento', desc: 'Em até 24h você recebe o quantitativo completo e o valor total.' },
              { num: '3', title: 'Entrega em ' + cityName, desc: `Aprovado o pedido, ${deliveryLabel.replace('com entrega ', '')} direto no canteiro.` },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-brand-orange text-white text-xl font-bold flex items-center justify-center mb-4 shadow-md">
                  {step.num}
                </div>
                <h3 className="font-bold text-brand-navy mb-1">{step.title}</h3>
                <p className="text-sm text-brand-gray-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => analytics.whatsappClick('landing-steps')}
              className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange/90 text-white font-bold rounded-full px-10 py-4 transition-colors shadow-lg text-base"
            >
              <MessageCircle className="w-5 h-5" />
              Solicitar Orçamento Agora
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-14 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-8">
            Perguntas frequentes sobre {product.name.toLowerCase()} em {cityName}
          </h2>
          <div className="space-y-5">
            {product.faq.map((item, i) => (
              <div key={i} className="border border-border rounded-xl overflow-hidden">
                <div className="bg-secondary px-5 py-4 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                  <h3 className="font-semibold text-brand-navy text-sm sm:text-base">
                    {item.q(cityName)}
                  </h3>
                </div>
                <div className="px-5 py-4">
                  <p className="text-brand-gray-medium text-sm leading-relaxed">
                    {item.a(cityName, deliveryLabel)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA final ─────────────────────────────────────────────────── */}
      <section className="py-14 bg-brand-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Precisa de {product.nameFull} em {displayCity}?
          </h2>
          <p className="text-white/70 mt-3 max-w-xl mx-auto">
            Fale com nossa equipe agora e receba o orçamento em até 24h. {deliveryLabel.replace('com entrega', 'Entrega').replace('em até', 'em até')} para {displayCity}.
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => analytics.whatsappClick('landing-final')}
            className="inline-flex items-center gap-2 mt-6 bg-brand-orange hover:bg-brand-orange/90 text-white font-bold rounded-full px-10 py-4 transition-colors shadow-lg text-base"
          >
            <MessageCircle className="w-5 h-5" />
            Falar no WhatsApp
          </a>
        </div>
      </section>

      {/* ── Links internos ────────────────────────────────────────────── */}
      <section className="py-10 bg-secondary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Outros produtos nesta cidade */}
            <div>
              <h3 className="font-bold text-brand-navy mb-4 text-sm uppercase tracking-wide">
                Outros produtos em {cityName}
              </h3>
              <div className="flex flex-wrap gap-2">
                {relatedProducts.map(slug => {
                  const p = landingProducts[slug];
                  return (
                    <Link
                      key={slug}
                      to={`/${slug}/${locationSlug}`}
                      className="flex items-center gap-1 text-sm text-brand-orange border border-brand-orange/30 hover:bg-brand-orange/10 rounded-full px-3 py-1.5 transition-colors"
                    >
                      <ArrowRight className="w-3 h-3" />
                      {p.name} em {cityName}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Cidades próximas */}
            {nearbyCities.length > 0 && (
              <div>
                <h3 className="font-bold text-brand-navy mb-4 text-sm uppercase tracking-wide">
                  {product.name} em outras cidades
                </h3>
                <div className="flex flex-wrap gap-2">
                  {nearbyCities.map(loc => (
                    <Link
                      key={loc.slug}
                      to={`/${productSlug}/${loc.slug}`}
                      className="flex items-center gap-1 text-sm text-muted-foreground border border-border hover:border-brand-orange/50 hover:text-brand-orange rounded-full px-3 py-1.5 transition-colors"
                    >
                      <MapPin className="w-3 h-3" />
                      {loc.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
