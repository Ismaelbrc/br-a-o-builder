import { useEffect } from 'react';
import { analytics } from '@/lib/analytics';

const WHATSAPP_URL =
  'https://api.whatsapp.com/send?phone=556299247285&text=' +
  encodeURIComponent('Olá, vim pelo Google e gostaria de um orçamento de aço.');

export default function Orcamento() {
  useEffect(() => {
    // Dispara conversão principal contada (WhatsApp Click — MQ4NCOCD0a4cEN3l4sU9)
    // + Meta Pixel Lead + GA4 whatsapp_click via analytics centralizado
    analytics.whatsappClick('orcamento-google-ads');

    // Dispara também a conversão específica de Orçamento (agora habilitada no Google Ads)
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        send_to: 'AW-16520884957/owp-CPWhxbAcEN3l4sU9',
      });
    }

    // Redireciona após 1.5 s (tempo suficiente para o gtag enviar os beacons)
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
