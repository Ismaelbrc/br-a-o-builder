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

Sempre que adicionar novos posts em `src/data/blogPosts.ts`, **obrigatoriamente** rodar:

```bash
python scripts/gen-blog-meta.py
```

Isso regenera `src/data/blogPostsMeta.ts` com os metadados + `readingTime` pré-calculado de todos os posts.

**Por que é crítico:**
- A home page e a listagem do blog importam `blogPostsMeta` (sem content) para manter o bundle leve
- Se o script não rodar, posts novos não aparecem na home e na busca do blog
- O BlogPost individual ainda usa `blogPosts.ts` (com content completo), esse não precisa do script

**Fluxo completo ao adicionar posts:**
1. Adicionar entradas em `src/data/blogPosts.ts` (via Python ou Edit)
2. `python scripts/gen-blog-meta.py` ← NUNCA pular esse passo
3. Atualizar `public/sitemap.xml` com as novas URLs
4. `git add . && git commit -m "feat(blog): ..."` + `git push`

---

## Arquitetura de Performance (Core Web Vitals)

| Arquivo | Propósito | Tamanho gzip |
|---------|-----------|-------------|
| `src/data/blogPostsMeta.ts` | Metadados de 134+ posts SEM content | ~19 KB |
| `src/data/blogPosts.ts` | Posts completos COM content | ~163 KB (lazy) |
| Bundle inicial (`index.js`) | React + vendor + App shell | ~102 KB |

- **React.lazy()** em todas as rotas — cada página é um chunk separado
- `BlogPreviewSection` e `Blog.tsx` usam apenas `blogPostsMeta` (sem content)
- `BlogPost.tsx` usa `blogPosts` com content completo (carrega só ao abrir um artigo)
- Blog lista **12 posts por página** (paginação) — nunca renderizar todos os 134+ de uma vez

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
