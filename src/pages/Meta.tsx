import { useEffect, useState } from 'react';
import { initChannel, setChannel, channelTag, clickIdTag, channelClickId, sendLeadBeacon } from '@/lib/channel';

const PHONE = '556299032023';
const MSG = 'Olá! Quero saber mais sobre o corte e dobra da BR Aço.';

export default function Meta() {
  const [waUrl, setWaUrl] = useState(`https://api.whatsapp.com/send?phone=${PHONE}`);

  useEffect(() => {
    initChannel();                                      // detecta UTMs primeiro (campanha/adset)
    if (channelTag() === '[org]') setChannel('ads|m');  // fallback só se /meta veio sem UTM (não clobber)
    // monta a mensagem com a tag de canal + click_id ([cid:...]) → casamento 1:1 no Nexum
    const text = `${channelTag()} ${clickIdTag()} ${MSG}`.replace(/\s+/g, ' ').trim();
    const url = `https://api.whatsapp.com/send?phone=${PHONE}&text=${encodeURIComponent(text)}`;
    setWaUrl(url);

    const timer = setTimeout(() => {
      // CONTACT (intenção), NÃO Lead. O "Lead" real é disparado server-side (CAPI no
      // webhook do Nexum) quando a mensagem chega de fato. eventID = click_id p/ dedupe.
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'Contact',
          { content_name: 'WhatsApp Click', content_category: 'meta-ads' },
          { eventID: channelClickId() });
      }
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'generate_lead', {
          event_category: 'meta-ads',
          event_label: 'whatsapp_meta',
        });
      }
      sendLeadBeacon(); // fbc/fbp+click_id → Nexum (CAPI atribui o Lead)
      window.location.href = url;
    }, 1400);

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
          <a href={waUrl} style={{ color: '#25d366', fontWeight: 600 }}>
            clique aqui
          </a>.
        </p>
      </div>
    </div>
  );
}
