// Imagem representativa por categoria de blog — não é 1 foto única por post
// (184+ posts, escopo irreal numa sessão), é 1 foto por categoria (16 no
// total), reaproveitando fotos de produto já existentes no site onde fazem
// sentido e complementando com fotos verificadas (Pexels, licença livre)
// para as categorias sem produto correspondente. Cobre 100% das categorias.
import corteEDobra from '@/assets/products/corte-e-dobra.jpg';
import vergalhoes from '@/assets/products/vergalhoes.jpg';
import trelicas from '@/assets/products/trelicas.jpg';
import telasMalhas from '@/assets/products/telas-malhas.jpg';
import colunas from '@/assets/products/colunas.jpg';
import pregosArames from '@/assets/products/pregos-arames.jpg';
import frotaPropria from '@/assets/frota-propria.jpg';
import projetoEstrutural from '@/assets/blog-categories/projeto-estrutural.jpg';
import concreto from '@/assets/blog-categories/concreto.jpg';
import fundacao from '@/assets/blog-categories/fundacao.jpg';
import cidades from '@/assets/blog-categories/cidades.jpg';
import normasAbnt from '@/assets/blog-categories/normas-abnt.jpg';
import gestaoDeObra from '@/assets/blog-categories/gestao-de-obra.jpg';

const CATEGORY_IMAGES: Record<string, string> = {
  'Corte e Dobra': corteEDobra,
  'Vergalhões': vergalhoes,
  'Treliças': trelicas,
  'Malhas': telasMalhas,
  'Coluna Pronta': colunas,
  'Projeto Estrutural': projetoEstrutural,
  'Concreto': concreto,
  'Fundação': fundacao,
  'Cidades': cidades,
  'Normas ABNT': normasAbnt,
  'Normas Técnicas': normasAbnt,
  'Gestão de Obra': gestaoDeObra,
  'Dicas Técnicas': projetoEstrutural,
  'Produtos': pregosArames,
  'BR Aço': frotaPropria,
};

const FALLBACK = frotaPropria;

export function getCategoryImage(category: string): string {
  return CATEGORY_IMAGES[category] ?? FALLBACK;
}
