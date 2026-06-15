// Pré-renderiza (snapshot) cada rota indexável de scripts/seo-routes.ts.
// Sobe um servidor estático sobre dist/ com fallback SPA (sirv --single),
// navega com Puppeteer, espera o React montar O CONTEÚDO DA PÁGINA (não só o
// shell/Layout) + os useEffect injetarem title/canonical/robots/JSON-LD, e
// grava dist/<route>/index.html.
//
// Rodar APÓS `vite build`:  tsx scripts/prerender.ts
//
// ── Por que esperar conteúdo e não "root tem filhos" ────────────────────────
// O Layout (Header/Footer/<main>) é eager; cada página é um chunk lazy atrás de
// <Suspense fallback={<PageLoader/>}>. Esperar só por `#root.children > 0`
// resolve assim que o PageLoader/Layout monta — o corpo da página e o useSEO
// ainda não rodaram, gerando snapshots com <head> default e <main> vazio.
// Agora esperamos o <main> ter conteúdo real e o fallback "Carregando…" sumir.
//
// ── Resiliência a crash ─────────────────────────────────────────────────────
// Chunks pesados (BlogPost ~628KB) estouram a memória da aba e crasham o
// renderer ("detached Frame" / "Connection closed"), o que antes derrubava
// TODAS as rotas seguintes. Agora cada rota é retentada e o browser é
// relançado quando a conexão morre.

import { createServer } from 'http';
import { mkdirSync, writeFileSync, readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import sirv from 'sirv';
import puppeteer, { type Browser, type Page } from 'puppeteer';
import { getSeoRoutes } from './seo-routes';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const distDir = join(root, 'dist');

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const LAUNCH_ARGS = [
  '--no-sandbox',
  '--disable-setuid-sandbox',
  '--disable-dev-shm-usage',
  '--disable-gpu',
];

// Recicla a aba a cada N rotas para limitar o crescimento de memória.
const RECYCLE_EVERY = 8;
// Tentativas por rota SÓ para erros fatais (crash do browser → relança).
// Timeout de conteúdo NÃO é retentado: se não renderizou em CONTENT_TIMEOUT,
// retentar custa o mesmo e só arrasta o build (era a causa do CI levar 20min+).
const MAX_ATTEMPTS = 3;
// Generoso: no CI (disco frio) o chunk do BlogPost (~628KB) leva alguns
// segundos para baixar+parsear+montar. 12s falhava as ~150 rotas de blog.
const CONTENT_TIMEOUT = 25000;
const GOTO_TIMEOUT = 25000;

// Erros que indicam que a aba/browser morreu — exigem relançar o Chrome.
function isFatal(err: unknown): boolean {
  const m = String((err as Error)?.message ?? err);
  return /detached Frame|Connection closed|Target closed|Session closed|Protocol error|browser has disconnected|Navigating frame was detached/i.test(
    m,
  );
}

async function launchBrowser(): Promise<Browser> {
  return puppeteer.launch({ headless: true, args: LAUNCH_ARGS });
}

// Domínios de analytics/tracking — bloqueados no snapshot. Os stubs inline do
// index.html (fbq/gtag/clarity) absorvem as chamadas sem erro. Carregar o
// fbevents.js real aqui causava crash ("__fbeventsModules[e] is not a function")
// que abortava o mount do React em /corte-e-dobra e /calculadora-vergalhao.
const BLOCKED_HOSTS = [
  'connect.facebook.net',
  'facebook.com/tr',
  'googletagmanager.com',
  'google-analytics.com',
  'analytics.google.com',
  'googleadservices.com',
  'clarity.ms',
];

async function makePage(browser: Browser): Promise<Page> {
  const page = await browser.newPage();
  await page.setRequestInterception(true);
  page.on('request', (req) => {
    const t = req.resourceType();
    const url = req.url();
    // Bloqueia mídia/fonte (não afetam o HTML) e todo analytics/tracking.
    if (t === 'image' || t === 'media' || t === 'font' || BLOCKED_HOSTS.some((h) => url.includes(h))) {
      req.abort().catch(() => {});
      return;
    }
    req.continue().catch(() => {});
  });
  return page;
}

// Espera o CONTEÚDO da página (não o shell): <main> preenchido e sem o
// fallback "Carregando…" do PageLoader. Garante que o chunk lazy montou e,
// portanto, que o useEffect do useSEO já rodou.
async function waitForContent(page: Page): Promise<void> {
  await page.waitForFunction(
    () => {
      // <main> só existe depois que o chunk lazy da página monta (o fallback
      // PageLoader do Suspense não tem <main>). Escopar a <main> evita falso
      // positivo do texto de Header/Footer (que existem sempre).
      const main = document.querySelector('main');
      if (!main) return false;
      // Fallback "Carregando…" ainda dentro do main?
      const loading = Array.from(main.querySelectorAll('span')).some(
        (s) => s.textContent?.trim() === 'Carregando…',
      );
      if (loading) return false;
      // textContent (não innerText): conta o texto no DOM mesmo quando o
      // componente Reveal o mantém com visibility/opacity de animação.
      const text = (main.textContent || '').replace(/\s+/g, ' ').trim();
      return text.length > 200;
    },
    { timeout: CONTENT_TIMEOUT, polling: 200 },
  );
}

async function main() {
  const routes = getSeoRoutes();

  // ── Servidor: shell limpa CONGELADA para rotas + assets do disco ────────
  // Lê a shell UMA vez, antes de qualquer rota sobrescrever dist/index.html.
  // Serve essa shell para TODA rota de navegação (qualquer path sem extensão
  // de asset), assim cada rota monta do zero — sem herdar o conteúdo de uma
  // rota já pré-renderizada (a contaminação que o `single:true` causava ao
  // servir os arquivos recém-gerados como fallback).
  const shellHtml = readFileSync(join(distDir, 'index.html'), 'utf8');
  const ASSET_RE = /\.(?:js|mjs|css|map|svg|png|jpe?g|webp|gif|ico|woff2?|ttf|eot|json|xml|txt|webmanifest)$/i;
  const assets = sirv(distDir, { dev: false, etag: true });
  const server = createServer((req, res) => {
    const path = (req.url || '/').split('?')[0];
    if (ASSET_RE.test(path)) {
      assets(req, res, () => { res.statusCode = 404; res.end(); });
    } else {
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.end(shellHtml);
    }
  });
  await new Promise<void>((resolve) => server.listen(0, resolve));
  const addr = server.address();
  const port = typeof addr === 'object' && addr ? addr.port : 0;
  const origin = `http://127.0.0.1:${port}`;
  console.log(`▶ servindo dist/ em ${origin} (${routes.length} rotas a pré-renderizar)`);

  let browser = await launchBrowser();
  let page = await makePage(browser);
  let sinceRecycle = 0;

  let ok = 0;
  let fail = 0;

  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];
    const url = `${origin}${route.path}`;
    let captured = false;

    for (let attempt = 1; attempt <= MAX_ATTEMPTS && !captured; attempt++) {
      try {
        // Relança o browser se a conexão tiver morrido.
        if (!browser.connected) {
          try { await browser.close(); } catch { /* já morto */ }
          browser = await launchBrowser();
          page = await makePage(browser);
          sinceRecycle = 0;
        }

        // Recicla a aba periodicamente para liberar memória.
        if (sinceRecycle >= RECYCLE_EVERY) {
          await page.close().catch(() => {});
          page = await makePage(browser);
          sinceRecycle = 0;
        }

        await page.goto(url, { waitUntil: 'domcontentloaded', timeout: GOTO_TIMEOUT });
        await waitForContent(page);
        await sleep(400); // margem para useSEO + JSON-LD (useEffect) assentarem
        sinceRecycle++;

        const raw = await page.content();
        let html = '<!DOCTYPE html>\n' + raw.replace(/^<!DOCTYPE[^>]*>/i, '').trimStart();

        // Garante canonical correto independente do timing do useSEO.
        const correctCanonical = `https://grupobraco.com.br${route.path === '/' ? '/' : route.path}`;
        html = html.replace(
          /<link rel="canonical"[^>]*>/,
          `<link rel="canonical" href="${correctCanonical}" />`,
        );

        // Restaura media="print" da fonte (não-bloqueante no HTML servido;
        // o onload refaz a troca print→all no cliente).
        html = html.replace(
          /(<link rel="stylesheet" href="https:\/\/fonts\.googleapis[^>]*media=")all("[^>]*onload=)/,
          '$1print$2',
        );

        const outDir = route.path === '/' ? distDir : join(distDir, route.path);
        mkdirSync(outDir, { recursive: true });
        writeFileSync(join(outDir, 'index.html'), html, 'utf8');
        ok++;
        captured = true;
        if (ok % 25 === 0) console.log(`  …${ok}/${routes.length}`);
      } catch (err) {
        const msg = (err as Error).message?.slice(0, 80) ?? String(err);
        if (isFatal(err)) {
          // Aba/browser morreram: relança e retenta (até MAX_ATTEMPTS).
          try { await browser.close(); } catch { /* já morto */ }
          browser = await launchBrowser();
          page = await makePage(browser);
          sinceRecycle = 0;
          if (attempt >= MAX_ATTEMPTS) {
            fail++;
            console.warn(`  ✗ falha em ${route.path} (crash, ${attempt} tentativas): ${msg}`);
          }
        } else {
          // Não-fatal (timeout de conteúdo): retentar não ajuda — desiste já.
          fail++;
          console.warn(`  ✗ falha em ${route.path} (timeout): ${msg}`);
          break;
        }
      }
    }
  }

  await page.close().catch(() => {});
  await browser.close().catch(() => {});
  await new Promise<void>((resolve) => server.close(() => resolve()));
  const failRate = routes.length ? fail / routes.length : 0;
  console.log(`✅ pré-renderização concluída: ${ok} ok, ${fail} falhas (${(failRate * 100).toFixed(1)}%)`);
  // NÃO falha o build por rotas que não pré-renderizaram: elas caem no shell
  // SPA (index.html da fonte, com o snippet do Pixel íntegro), que monta no
  // cliente sem tela branca. Falhar aqui só bloquearia o deploy e manteria os
  // arquivos antigos (corrompidos) no ar. Quem precisa falhar é o catch global
  // de main() (erro catastrófico: build/servidor/browser não sobem).
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
