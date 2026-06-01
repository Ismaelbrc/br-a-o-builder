import { useEffect } from 'react';
import { setChannel } from '@/lib/channel';

const REDIRECT_URL = 'https://grupobraco.com.br/corte-e-dobra';

export default function Orcamento() {
  useEffect(() => {
    // LP do Google Ads: marca o visitante como 'ads' (persiste no localStorage),
    // assim qualquer WhatsApp que ele clicar depois sai com [ads]. Depois redireciona.
    setChannel('ads');
    window.location.replace(REDIRECT_URL);
  }, []);

  return null;
}
