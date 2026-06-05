// Pré-renderiza (snapshot) cada rota indexável de scripts/seo-routes.ts.
// Sobe um servidor estático sobre dist/ com fallback SPA (sirv --single),
// navega com Puppeteer, espera o React montar + os useEffect injetarem
// title/canonical/robots/JSON-LD, e grava dist/<route>/index.html.
//
// Rodar APÓS `vite build`:  tsx scripts/prerender.ts
//
// O snapshot captura as mutações de <head> feitas por useSEO + os JSON-LD
// injetados por LandingPage/BlogPost — sem duplicar nenhuma lógica de SEO.

import { createServer } from 'http';
import { mkdirSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import sirv from 'sirv';
import puppeteer from 'puppeteer';
import { getSeoRoutes } from './seo-routes';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const distDir = join(root, 'dist');

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function main() {
  const routes = getSeoRoutes();

  // ── Servidor estático sobre dist/ com fallback SPA ──────────────────────
  const assets = sirv(distDir, { single: true, dev: false, etag: true });
  const server = createServer((req, res) => assets(req, res, () => { res.statusCode = 404; res.end(); }));
  await new Promise<void>((resolve) => server.listen(0, resolve));
  const addr = server.address();
  const port = typeof addr === 'object' && addr ? addr.port : 0;
  const origin = `http://127.0.0.1:${port}`;
  console.log(`▶ servindo dist/ em ${origin} (${routes.length} rotas a pré-renderizar)`);

  // ── Puppeteer — serial com reciclagem de página a cada RECYCLE rotas ────
  // Chrome em Windows trava por OOM com páginas longas ou múltiplas abas.
  // Solução: processar em série reciclando a aba a cada RECYCLE rotas.
  const RECYCLE_EVERY = 40;

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  async function makePage() {
    const page = await browser.newPage();
    await page.setRequestInterception(true);
    page.on('request', (req) => {
      const t = req.resourceType();
      // Bloqueia apenas mídia/imagem — não scripts/fetch externos para não crashar o renderer.
      // networkidle é substituído por waitForFunction no canonical.
      if (t === 'image' || t === 'media') { req.abort(); return; }
      req.continue();
    });
    return page;
  }

  let ok = 0;
  let fail = 0;
  let page = await makePage();

  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];
    const url = `${origin}${route.path}`;
    try {
      // Recicla a página a cada RECYCLE_EVERY rotas para liberar memória
      if (i > 0 && i % RECYCLE_EVERY === 0) {
        await page.close().catch(() => {});
        page = await makePage();
        console.log(`  ♻ página reciclada em rota ${i}`);
      }

      // 'load' dispara logo após o HTML+bundle inicial carregar.
      // waitForFunction com timeout CURTO (5s): captura se useSEO disparar, segue se não disparar.
      // O canonical é corrigido por pós-processamento abaixo.
      await page.goto(url, { waitUntil: 'load', timeout: 20000 }).catch(() => {});
      await page
        .waitForFunction(
          () => {
            const r = document.getElementById('root');
            return !!r && r.children.length > 0;
          },
          { timeout: 5000 },
        )
        .catch(() => {});
      await sleep(400); // tempo para useEffect (useSEO, JSON-LD) disparar após render

      const raw = await page.content();
      let html = '<!DOCTYPE html>\n' + raw.replace(/^<!DOCTYPE[^>]*>/i, '').trimStart();

      // Garante canonical correto independente do timing do useSEO.
      const correctCanonical = `https://grupobraco.com.br${route.path === '/' ? '/' : route.path}`;
      html = html.replace(
        /<link rel="canonical"[^>]*>/,
        `<link rel="canonical" href="${correctCanonical}" />`,
      );
      const outDir = route.path === '/' ? distDir : join(distDir, route.path);
      mkdirSync(outDir, { recursive: true });
      writeFileSync(join(outDir, 'index.html'), html, 'utf8');
      ok++;
      if (ok % 25 === 0) console.log(`  …${ok}/${routes.length}`);
    } catch (err) {
      fail++;
      console.warn(`  ✗ falha em ${route.path}: ${(err as Error).message.slice(0, 80)}`);
    }
  }

  await page.close().catch(() => {});
  await browser.close();
  await new Promise<void>((resolve) => server.close(() => resolve()));
  console.log(`✅ pré-renderização concluída: ${ok} ok, ${fail} falhas`);
  if (fail > 0) process.exitCode = 1;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
