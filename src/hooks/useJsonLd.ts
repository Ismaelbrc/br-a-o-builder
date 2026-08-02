import { useEffect } from 'react';
import { graph } from '@/lib/schema';

/**
 * Injeta um único bloco <script type="application/ld+json"> com um @graph.
 * Cria o elemento se não existir; reusa (create-if-absent) se já existir —
 * evita duplicar nós em transições rápidas de rota. Remove no unmount.
 *
 * @param id     id do elemento <script> — único por página (ex. 'blogpost-schema')
 * @param nodes  lista de nós do grafo; null/undefined/[] não injeta nada
 */
export function useJsonLd(id: string, nodes: object[] | null | undefined) {
  const payload = nodes && nodes.length ? JSON.stringify(graph(nodes)) : null;

  useEffect(() => {
    if (!payload) return;

    let el = document.getElementById(id) as HTMLScriptElement | null;
    if (!el) {
      el = document.createElement('script');
      el.id = id;
      el.type = 'application/ld+json';
      document.head.appendChild(el);
    }
    el.textContent = payload;

    return () => {
      document.getElementById(id)?.remove();
    };
  }, [id, payload]);
}
