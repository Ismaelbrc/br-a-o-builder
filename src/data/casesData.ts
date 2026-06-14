export type CaseCategory =
  | 'Todos'
  | 'Edificações Premium'
  | 'Obras Públicas'
  | 'Infraestrutura Urbana'
  | 'Residencial';

export interface Case {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  description: string;
  result: string;
  category: Exclude<CaseCategory, 'Todos'>;
  location: string;
  imageId: string;
  featured?: boolean;
}

export const CASES: Case[] = [
  {
    id: '01',
    title: 'Cidade Opus',
    subtitle: 'Força e Engenharia de Grande Porte',
    summary: 'Um dos maiores complexos multiuso de Goiânia conta com a precisão da BR Aço.',
    description:
      'Projetos icônicos não aceitam improvisos. O Cidade Opus é um hub urbano que integra design premium, inteligência corporativa e residências de alto padrão no Setor Oeste. Para sustentar esse gigante, a BR Aço forneceu soluções industrializadas de corte e dobra automatizados com padrão BR Aço.',
    result:
      'Agilidade extrema na montagem e precisão industrial que nenhum improviso entregaria.',
    category: 'Edificações Premium',
    location: 'Goiânia, GO',
    imageId: '/cases/01-cidade-opus.png',
    featured: true,
  },
  {
    id: '02',
    title: 'Consórcio Água Rio Verdinho',
    subtitle: 'Infraestrutura que Move o Futuro',
    summary: 'Soluções em aço garantindo a segurança hídrica e saneamento em larga escala.',
    description:
      'Lançado pelo Governo de Goiás, Saneago e Prefeitura, o novo sistema de abastecimento de Rio Verde é uma obra pública monumental. Estruturas hidráulicas exigem máxima durabilidade e resistência contra pressões severas. A BR Aço participou fornecendo aço certificado e rastreável para os grandes reservatórios e canais de captação.',
    result:
      'Agilidade extrema na montagem, eliminação de gargalos construtivos em obras públicas e certificação total de origem da matéria-prima.',
    category: 'Obras Públicas',
    location: 'Rio Verde, GO',
    imageId: '/cases/02-consorcio-agua.png',
  },
  {
    id: '03',
    title: 'Terminal Praça A',
    subtitle: 'Agilidade Urbana e Mobilidade Ampliada',
    summary: 'Reforma histórica executada com o ritmo industrial da BR Aço.',
    description:
      'A grande revitalização triplicou o tamanho do Terminal Praça A, em Campinas. Por ser uma obra localizada em uma região central de altíssimo tráfego, o tempo era o recurso mais precioso. Fornecemos as armaduras prontas e o aço cortado e dobrado sob medida para as fundações e pilares robustos do novo terminal.',
    result:
      'Execução rápida com impacto mínimo no trânsito do entorno e eficiência logística milimétrica dentro do canteiro central urbano.',
    category: 'Infraestrutura Urbana',
    location: 'Campinas, SP',
    imageId: '/cases/03-terminal-praca-a.png',
  },
  {
    id: '04',
    title: 'Cena du Valle',
    subtitle: 'Superando Desafios de Arquitetura Sofisticada',
    summary: 'Fachada curva e grandes vãos estruturais moldados com a tecnologia BR Aço.',
    description:
      'Localizado na melhor região de Itumbiara, o residencial da DSA Engenharia encanta pela varanda integrada e fachada ondulada que imita as curvas do Rio Paranaíba. Para viabilizar as lajes maciças e a silhueta complexa do prédio sem encher os apartamentos de pilares, a BR Aço entregou soluções sob medida em corte, dobra e fôrmas.',
    result:
      'Moldagem perfeita de geometrias complexas, eliminando a lentidão e o alto custo da carpintaria tradicional em madeira.',
    category: 'Residencial',
    location: 'Itumbiara, GO',
    imageId: '/cases/04-cena-du-valle.png',
  },
  {
    id: '05',
    title: 'Complexo Dubai',
    subtitle: 'Inovação e Economia Real na Fundação',
    summary:
      'O Residencial Dubai Business eliminou o corte manual de barras no canteiro com o sistema de Corte e Dobra Automatizado da BR Aço.',
    description:
      'O projeto do residencial Dubai Business foi desenhado sob os pilares da eficiência construtiva e da alta lucratividade. Para evitar os gargalos do canteiro tradicional, a engenharia do projeto eliminou o corte manual de barras retas no chão e apostou no sistema de Corte e Dobra Automatizado da BR Aço.',
    result:
      'Material chegou pronto, separado e identificado para montagem imediata — zero desperdício no canteiro.',
    category: 'Edificações Premium',
    location: 'Goiás',
    imageId: '/cases/05-complexo-dubai.png',
  },
];

export const CATEGORIES: CaseCategory[] = [
  'Todos',
  'Edificações Premium',
  'Obras Públicas',
  'Infraestrutura Urbana',
  'Residencial',
];

/** Retorna o caminho da imagem do case (servida localmente via public/cases/). */
export function driveImg(id: string): string {
  return id;
}
