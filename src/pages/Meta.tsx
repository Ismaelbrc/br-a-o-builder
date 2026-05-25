import { useEffect } from 'react';

const WHATSAPP_URL =
  'https://api.whatsapp.com/send?phone=556296472423&text=' +
  encodeURIComponent('Olá, quero saber mais da BR Aço');

export default function Meta() {
  useEffect(() => {
    // Meta Pixel — o init já ocorreu no index.html global
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Lead', {
        content_name: 'WhatsApp Click',
        content_category: 'meta-ads',
      });
    }

    // GA4 — cross-attribution
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'generate_lead', {
        event_category: 'meta-ads',
        event_label: 'whatsapp_meta',
      });
    }

    // Redireciona após 1.5 s (tempo para o pixel enviar o evento)
    const timer = setTimeout(() => {
      window.location.href = WHATSAPP_URL;
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{
      margin: 0,
      padding: 0,
      background: '#111',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      textAlign: 'center',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    }}>
      <div style={{ padding: '2rem', maxWidth: 360 }}>
        <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#F97316', letterSpacing: 1, marginBottom: '2rem' }}>
          BR AÇO
        </div>

        {/* Spinner */}
        <style>{`
          @keyframes _spin { to { transform: rotate(360deg); } }
          ._spinner {
            width: 44px; height: 44px;
            border: 3px solid #333;
            border-top-color: #25d366;
            border-radius: 50%;
            animation: _spin 0.75s linear infinite;
            margin: 0 auto 1.5rem;
          }
        `}</style>
        <div className="_spinner" />

        <h2 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.6rem' }}>
          Redirecionando para o WhatsApp...
        </h2>
        <p style={{ color: '#888', fontSize: '0.875rem', lineHeight: 1.5 }}>
          Aguarde um momento.<br />
          Caso não seja redirecionado,{' '}
          <a href={WHATSAPP_URL} style={{ color: '#25d366', fontWeight: 600 }}>
            clique aqui
          </a>.
        </p>
      </div>
    </div>
  );
}
