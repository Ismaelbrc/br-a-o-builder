/* ──────────────────────────────────────────────────────────────────────────
   Mapa categoria de post → entidade do grafo (edge `about` do Article).
   Só strings, sem import de dado — mantém BlogPost.tsx livre de puxar
   landingProducts.ts (ver banner em schema.ts).

   Cobre só as categorias com correspondência 1:1 clara. Categorias sem
   mapeamento (Projeto Estrutural, Dicas Técnicas, Normas ABNT, Gestão de
   Obra, Fundação, Concreto, Normas Técnicas) ficam sem `about` — é melhor
   omitir a propriedade do que inventar uma entidade genérica tipo
   {"@type":"Thing","name":"Concreto"}, que só recria o problema de nó
   órfão com nome bonito.
   ────────────────────────────────────────────────────────────────────────── */

import { ID } from './schema';

const CATEGORY_ABOUT: Record<string, string> = {
  'Corte e Dobra':  ID.service('corte-e-dobra'),
  'Vergalhões':     ID.product('vergalhao'),
  'Treliças':       ID.product('trelica'),
  'Malhas':         ID.product('malha'),
  'Coluna Pronta':  ID.product('coluna'),
  'Produtos':       ID.organization,
  'BR Aço':         ID.organization,
  'Cidades':        ID.localBusiness,
};

/** Overrides pontuais por slug — quando o título do post é mais específico
 *  que a categoria (ex. um post de "Cidades" que é na verdade sobre CDA). */
const SLUG_ABOUT: Record<string, string> = {};

export function aboutFor(slug: string, category: string): string | undefined {
  return SLUG_ABOUT[slug] ?? CATEGORY_ABOUT[category];
}
