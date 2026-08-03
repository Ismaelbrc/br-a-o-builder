"""
Gera src/data/posts/<slug>.ts (um arquivo por post) a partir de blogPosts.ts.

Por que existe: BlogPost.tsx importava blogPosts.ts inteiro (12k+ linhas,
todos os 184 posts) só para renderizar UM post — isso inflava o chunk
`BlogPost-*.js` do build pra ~770KB, carregado inteiro em qualquer visita
a um único artigo. Esse script divide o conteúdo em arquivos individuais
que o app importa sob demanda via import.meta.glob (ver postsRegistry.ts).

blogPosts.ts continua sendo a ÚNICA fonte de autoria — edite lá, não nos
arquivos gerados em src/data/posts/. Fluxo ao adicionar/editar posts:
  1. Editar src/data/blogPosts.ts
  2. python scripts/gen-blog-meta.py         (metadados, já existia)
  3. python scripts/gen-blog-posts-split.py  (conteúdo por arquivo, este script)

Execute: python scripts/gen-blog-posts-split.py
"""
import re
import os

SRC = os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'blogPosts.ts')
OUT_DIR = os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'posts')

with open(SRC, encoding='utf-8') as f:
    raw = f.read()

post_blocks = re.split(r'\n  (?=\{)', raw)

def extract_str(field, block):
    m = re.search(rf'\b{field}:\s*(["\'])((?:\\.|(?!\1).)*)\1', block, re.DOTALL)
    if m:
        return m.group(2)
    return None

def extract_int(field, block):
    m = re.search(rf'\b{field}:\s*(\d+)', block)
    return int(m.group(1)) if m else None

os.makedirs(OUT_DIR, exist_ok=True)
# Limpa arquivos órfãos de posts renomeados/removidos em execuções anteriores.
for f in os.listdir(OUT_DIR):
    if f.endswith('.ts'):
        os.remove(os.path.join(OUT_DIR, f))

count = 0
for block in post_blocks:
    if 'id:' not in block or 'slug:' not in block:
        continue

    post_id = extract_int('id', block)
    slug = extract_str('slug', block)
    if not slug:
        continue

    category = extract_str('category', block)
    title = extract_str('title', block)
    meta_desc = extract_str('metaDescription', block)
    keyword = extract_str('keyword', block)
    date = extract_str('date', block)
    summary = extract_str('summary', block)

    cm = re.search(r'content:\s*`(.*?)`\s*[,}]', block, re.DOTALL)
    content = cm.group(1) if cm else ''

    def ts_str(v):
        if v is None:
            return '""'
        # v já vem com escapes originais preservados (extraído com \1 no regex,
        # sem unescape) — reusa como literal de string dupla-aspas TS.
        return f'"{v}"'

    content_escaped = content.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')

    out = f'''// AUTO-GENERATED por scripts/gen-blog-posts-split.py — NÃO EDITE.
// Edite o post em src/data/blogPosts.ts e rode o script de novo.
import type {{ BlogPost }} from '../blogPosts';

const post: BlogPost = {{
  id: {post_id},
  slug: {ts_str(slug)},
  category: {ts_str(category)},
  title: {ts_str(title)},
  metaDescription: {ts_str(meta_desc)},
  keyword: {ts_str(keyword)},
  date: {ts_str(date)},
  summary: {ts_str(summary)},
  content: `{content_escaped}`,
}};

export default post;
'''

    with open(os.path.join(OUT_DIR, f'{slug}.ts'), 'w', encoding='utf-8') as f:
        f.write(out)
    count += 1

print(f'OK  Generated {count} post files -> {OUT_DIR}')
