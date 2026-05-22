import { useEffect } from 'react';

const WHATSAPP_URL =
  'https://api.whatsapp.com/send?phone=556299247285&text=' +
  encodeURIComponent('Olá, vim pelo Google e gostaria de um orçamento de aço.');

export default function Orcamento() {
  useEffect(() => {
    // Google Ads — conversion "Clique WhatsApp via Orçamento"
    // gtag já está inicializado globalmente no index.html (AW-16520884957)
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        send_to: 'AW-16520884957/owp-CPWhxbAcEN3l4sU9',
      });
    }

    // GA4 — cross-attribution
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'generate_lead', {
        event_category: 'google-ads',
        event_label: 'whatsapp_orcamento',
      });
    }

    // Meta Pixel — cross-attribution (opcional)
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Lead', {
        content_name: 'WhatsApp Click',
        content_category: 'google-ads',
      });
    }

    // Redireciona após 1.5 s (tempo suficiente para o gtag enviar o beacon)
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
        <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#e63232', letterSpacing: 1, marginBottom: '2rem' }}>
          BR AÇO
        </div>

        {/* Spinner */}
        <style>{`
          @keyframes _spin_orc { to { transform: rotate(360deg); } }
          ._spinner_orc {
            width: 44px; height: 44px;
            border: 3px solid #333;
            border-top-color: #25d366;
            border-radius: 50%;
            animation: _spin_orc 0.75s linear infinite;
            margin: 0 auto 1.5rem;
          }
        `}</style>
        <div className="_spinner_orc" />

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
