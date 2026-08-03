# CLAUDE.md — br-aco-builder (grupobraco.com.br)

> Leia este arquivo antes de qualquer tarefa neste projeto.

---

## Visão Geral

Site institucional da BR Aço hospedado no GitHub Pages.
- **Stack:** React + Vite + TypeScript + Tailwind CSS + shadcn/ui
- **Repositório:** https://github.com/Ismaelbrc/br-a-o-builder
- **URL produção:** https://grupobraco.com.br
- **Deploy:** push para `main` → GitHub Actions → `npm run build` → `dist/` → Pages (~2 min)

---

## ⚠ REGRA OBRIGATÓRIA — Ao adicionar posts no blog

`src/data/blogPosts.ts` é a **única fonte de autoria** — sempre edite ali. Depois de adicionar/editar posts, rode **os dois scripts, nesta ordem**:

```bash
python scripts/gen-blog-meta.py         # 1. metadados (blogPostsMeta.ts)
python scripts/gen-blog-posts-split.py  # 2. content por post (src/data/posts/*.ts)
```

**Por que os dois são críticos:**
- `gen-blog-meta.py` regenera `blogPostsMeta.ts` (metadados + `readingTime`, sem content) — a home e a listagem do blog usam só isso
- `gen-blog-posts-split.py` regenera `src/data/posts/<slug>.ts` (um arquivo por post, com content completo) — `BlogPost.tsx` carrega **sob demanda** (`import.meta.glob` via `postsRegistry.ts`), não importa `blogPosts.ts` inteiro
- Pular qualquer um dos dois deixa post novo invisível na home/busca (sem o 1º) ou com 404 ao abrir o artigo (sem o 2º)
- **Nunca edite `src/data/posts/*.ts` diretamente** — são gerados, sobrescritos a cada rodada do script

**Fluxo completo ao adicionar posts:**
1. Adicionar entradas em `src/data/blogPosts.ts` (via Python ou Edit)
2. `python scripts/gen-blog-meta.py` ← NUNCA pular
3. `python scripts/gen-blog-posts-split.py` ← NUNCA pular
4. Sitemap: `npm run sitemap` (gera automaticamente a partir de `blogPostsMeta`, não editar `public/sitemap.xml` à mão)
5. `git add . && git commit -m "feat(blog): ..."` + `git push`

---

## Arquitetura de Performance (Core Web Vitals)

| Arquivo | Propósito | Tamanho |
|---------|-----------|-------------|
| `src/data/blogPostsMeta.ts` | Metadados de 184 posts SEM content | ~26 KB gzip |
| `src/data/blogPosts.ts` | Posts completos COM content — só a autoria lê isso direto | ~163 KB (nunca importado inteiro em runtime) |
| `src/data/posts/<slug>.ts` | Um arquivo por post (gerado), ~2-10 KB cada | carregado sob demanda |
| `dist/assets/BlogPost-*.js` | Chunk da página de artigo, sem content embutido | ~118 KB (era ~770 KB antes do split, 02/08/2026) |
| Bundle inicial (`index.js`) | React + vendor + App shell | ~104 KB |

- **React.lazy()** em todas as rotas — cada página é um chunk separado
- `BlogPreviewSection` e `Blog.tsx` usam apenas `blogPostsMeta` (sem content)
- `BlogPost.tsx` carrega o content de UM post via `loadPostBySlug()` (`postsRegistry.ts`, `import.meta.glob` lazy) — não importa `blogPosts.ts`. Mostra skeleton (`BlogPostSkeleton`) enquanto carrega; `scripts/prerender.ts` já espera o `<main>` ter >200 chars de texto antes de capturar, então isso funciona sem mudança no pipeline de prerender
- Blog lista **12 posts por página** (paginação) — nunca renderizar todos os 184 de uma vez

---

## Páginas de Tracking / Redirect

| URL | Destino | Conversão |
|-----|---------|-----------|
| `/orcamento` | WhatsApp "Vim pelo Google…" | Google Ads `AW-16520884957` |
| `/meta` | WhatsApp "Olá, quero saber mais da BR Aço" | Meta Pixel `Lead` (Pixel 1952720385143373) |

Ambas são **rotas React** (não arquivos estáticos) para funcionar com o SPA no GitHub Pages.

---

## Pixels e Analytics

Inicializados globalmente em `index.html`:
- **Meta Pixel:** `1952720385143373`
- **GA4:** `G-YENBSKZW0K`
- **Google Ads:** `AW-16520884957`
- **Clarity:** `wsgoux7wqw`

Eventos centralizados em `src/lib/analytics.ts`.

---

## Sitemap

`public/sitemap.xml` — arquivo estático, manutenção manual.
Ao adicionar posts, inserir antes do comentário `<!-- Landing Pages LP -->`:
```xml
<url>
  <loc>https://grupobraco.com.br/blog/SLUG-DO-POST</loc>
  <lastmod>YYYY-MM-DD</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.9</priority>
</url>
```

---

## Scripts úteis

```bash
# Regenerar metadados do blog (OBRIGATÓRIO após adicionar posts)
python scripts/gen-blog-meta.py

# Build local para testar
npm run build && npm run preview
```
