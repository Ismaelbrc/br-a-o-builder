/**
 * Notifica o Bing (e outros motores que suportam IndexNow — inclusive o
 * índice que o ChatGPT usa no modo de busca, que é o Bing, não o Google)
 * sempre que o sitemap é regenerado. Sem isso, conteúdo novo pode levar
 * semanas para ser rastreado pelo Bing — o Google Search Console não
 * cobre esse motor.
 *
 * Roda depois de `npm run sitemap` (ver package.json). Falha silenciosa
 * por design: IndexNow é um "aviso", não uma dependência de build — se a
 * API estiver fora do ar, isso NUNCA deve derrubar o deploy.
 */
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { getSeoRoutes } from './seo-routes';

const __dirname = dirname(fileURLToPath(import.meta.url));
const HOST = 'grupobraco.com.br';
const KEY = '6e65156894ac498990e14e58adbbe0a2';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

async function main() {
  const keyFile = join(__dirname, '..', 'public', `${KEY}.txt`);
  if (!readFileSync(keyFile, 'utf8').trim()) {
    console.warn('⚠ notify-indexnow: arquivo de chave vazio, abortando');
    return;
  }

  // getSeoRoutes() já é a lista de rotas indexáveis (única fonte de verdade,
  // ver seo-routes.ts) — não precisa filtrar de novo aqui.
  const urlList = getSeoRoutes().map((r) => `https://${HOST}${r.path === '/' ? '' : r.path}`);

  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: HOST,
        key: KEY,
        keyLocation: KEY_LOCATION,
        urlList,
      }),
    });
    if (res.ok) {
      console.log(`✅ IndexNow: ${urlList.length} URLs notificadas (status ${res.status})`);
    } else {
      console.warn(`⚠ IndexNow retornou status ${res.status} — não bloqueia o build`);
    }
  } catch (err) {
    console.warn('⚠ IndexNow falhou (rede/API fora do ar) — não bloqueia o build:', (err as Error).message);
  }
}

main();
