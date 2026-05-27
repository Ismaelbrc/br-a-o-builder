import { useEffect } from 'react';

const REDIRECT_URL = 'https://grupobraco.com.br/produtos';

export default function Orcamento() {
  useEffect(() => {
    window.location.replace(REDIRECT_URL);
  }, []);

  return null;
}
