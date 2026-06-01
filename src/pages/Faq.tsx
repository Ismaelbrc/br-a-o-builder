import { useEffect, useState, useMemo } from 'react';
import Layout from '@/components/Layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useSEO } from '@/hooks/useSEO';
import { Search, MessageCircle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { analytics } from '@/lib/analytics';

const WHATSAPP = 'https://wa.me/556296472423?text=%5Bsrc%3Afaq%5D%20Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20produtos%20da%20BR%20A%C3%A7o.';

const faqCategories = [
  {
    id: 'corte-dobra',
    title: 'Corte e Dobra',
    icon: '⚙️',
    faqs: [
      {
        question: 'Quais são as principais vantagens de utilizar Corte e Dobra na construção?',
        answer: 'Utilizar Corte e Dobra na construção traz inúmeras vantagens. Primeiramente, otimiza o tempo, já que peças prontas demandam menos mão de obra no canteiro. Além disso, melhora a precisão das medidas, gerando um encaixe perfeito e aumentando a qualidade da estrutura. Por fim, essa técnica permite reduzir o desperdício de materiais, contribuindo para a sustentabilidade da obra.',
      },
      {
        question: 'Qual é a função do Corte e Dobra na construção civil e como impacta a qualidade das estruturas?',
        answer: 'O Corte e Dobra é essencial na construção civil, principalmente na montagem de estruturas em ferro e aço. Esse processo permite a conformação do material nas dimensões exatas necessárias para cada projeto. Com ele, garantimos que as peças se encaixem perfeitamente, aumentando a resistência e durabilidade das estruturas. Um corte preciso e uma dobra adequada são fundamentais para evitar falhas e garantir a segurança das edificações.',
      },
      {
        question: 'Qual a diferença entre o corte e a dobra manual e automatizado em estruturas de aço?',
        answer: 'A principal diferença entre o corte e a dobra manual e automatizado está na precisão e eficiência. O corte e dobra manual exigem mais habilidade e tempo, sendo ideais para projetos menores ou personalizações. Já os métodos automatizados são mais rápidos e garantem cortes e dobras precisos, perfeitos para grandes quantidades e produção em série. Isso resulta em menos desperdício e maior produtividade.',
      },
      {
        question: 'Como calcular a quantidade de corte e dobra de aço por metro quadrado?',
        answer: 'Para calcular a quantidade de corte e dobra de aço por metro quadrado, é preciso considerar o tipo de estrutura e o projeto em questão. Em geral, multiplique a área total da estrutura pela quantidade de aço especificada no projeto. Depois, some a percentagem de perdas no corte e dobra, que pode variar entre 5% a 10%. Isso garantirá que você tenha o material necessário e minimize desperdícios.',
      },
      {
        question: 'Quais são as principais tendências em tecnologia para corte e dobra de aço?',
        answer: 'As tendências em tecnologia para corte e dobra de aço estão avançando rapidamente, incluindo o uso de máquinas CNC que proporcionam precisão e eficiência. Robôs e software avançado estão sendo implementados para otimizar o processo, reduzindo o desperdício de material. Além disso, a automação e a integração de dados estão se tornando essenciais para aumentar a produtividade e garantir a segurança nas operações.',
      },
    ],
  },
  {
    id: 'vergalhoes',
    title: 'Vergalhões',
    icon: '🔩',
    faqs: [
      {
        question: 'Quais são os principais tipos de vergalhões e como são aplicados na construção civil?',
        answer: 'Os vergalhões são fundamentais para a construção, e os principais tipos são o CA-50 e CA-60, usados na armadura de concreto. O CA-50 é mais utilizado em estruturas simples, enquanto o CA-60, mais resistente, é ideal para estruturas complexas e pesadas. A escolha correta do vergalhão influencia a durabilidade e segurança das edificações.',
      },
      {
        question: 'O que são vergalhões e qual a sua importância na construção civil?',
        answer: 'Vergalhões são barras de aço nervuradas utilizadas para reforçar o concreto em estruturas. Sua principal função é aumentar a resistência e garantir a durabilidade das construções, como edifícios, pontes e barragens. A nervura nos vergalhões proporciona uma melhor aderência ao concreto, evitando fissuras.',
      },
      {
        question: 'Como posso evitar a ferrugem em vergalhões e garantir a durabilidade?',
        answer: 'Para evitar ferrugem em vergalhões, aplique uma camada de pintura ou um revestimento protetor, como zincagem. Armazenar o aço em locais secos e arejados também é essencial. Utilize umidade controlada e evite contato com água e produtos corrosivos. Inspecione regularmente, e, se possível, escolha vergalhões de aço inoxidável ou com proteção anticorrosiva já aplicada.',
      },
      {
        question: 'Quais são as melhores dicas para armazenar vergalhões na obra?',
        answer: 'Para armazenar vergalhões na obra, escolha um local plano, coberto e seco. Evite o contato direto com o solo, usando pallets ou estruturas elevadas. Organize-os em pilhas, afastados uns dos outros, para prevenir danos e facilitar o acesso. Proteja-os da umidade com lonas, ajudando a preservar a qualidade do material por mais tempo.',
      },
      {
        question: 'Como calcular a quantidade de vergalhões necessária para a fundação?',
        answer: 'Para calcular a quantidade de vergalhões para a fundação, você precisa conhecer a área da base da estrutura e as especificações do projeto. O espaçamento recomendado entre os vergalhões geralmente é de 15 a 20 cm, dependendo do tipo de solo e do projeto. Após determinar a quantidade total, leve em consideração a perda e as sobras.',
      },
    ],
  },
  {
    id: 'trelicas',
    title: 'Treliças',
    icon: '🏗️',
    faqs: [
      {
        question: 'O que são treliças e qual a sua importância nas construções?',
        answer: 'Treliças são estruturas formadas por triângulos interconectados, o que proporciona alta resistência e leveza. Amplamente usadas em pontes, telhados e suportes, elas distribuem cargas de maneira eficiente, permitindo que as estruturas suportem grandes forças sem perder estabilidade. São essenciais para otimizar materiais e reduzir custos na construção civil.',
      },
      {
        question: 'Como são feitas as treliças metálicas e quais são suas principais vantagens?',
        answer: 'As treliças metálicas são confeccionadas a partir de perfis de aço que, unidos em um padrão triangular, proporcionam grande resistência e leveza. O processo começa com o corte dos perfis, seguido pela montagem em seções, que são soldadas ou parafusadas. Finalmente, as treliças são tratadas para resistir à corrosão. Elas são ideais para longas spans, ligando resistência estrutural com eficiência material.',
      },
      {
        question: 'Como as treliças podem ajudar na economia de material em uma obra?',
        answer: 'As treliças são estruturas eficientes que distribuem cargas de forma otimizada, permitindo o uso reduzido de material, como aço e ferro. Essa configuração diminui o peso total da estrutura, preservando sua resistência e estabilidade. Assim, o uso de treliças não só reduz o desperdício como também acelera o processo de construção, resultando em economia significativa.',
      },
      {
        question: 'Quais são os erros mais comuns ao instalar treliças e como evitá-los?',
        answer: 'Os erros comuns na instalação de treliças incluem má fixação, falta de alinhamento e uso de materiais inadequados. Para evitar esses problemas, é essencial seguir as orientações do fabricante, verificar a qualidade dos materiais e realizar um monitoramento constante das condições da obra. A atenção aos detalhes garante uma estrutura forte e durável.',
      },
    ],
  },
  {
    id: 'telas-malhas',
    title: 'Telas e Malhas',
    icon: '🪢',
    faqs: [
      {
        question: 'Quais são as principais dicas para garantir uma instalação eficiente de telas em obras?',
        answer: 'Para uma instalação de telas em obras, comece verificando as medidas do local e escolha a tela adequada para a função desejada. Preparar a base antes da instalação é crucial: limpa e nivelada. Use suporte resistente e siga as recomendações do fabricante para fixação. Finalmente, realize inspeções regulares nas telas após a instalação para garantir a durabilidade.',
      },
      {
        question: 'Como utilizar malhas de aço para reforço de concreto e garantir a durabilidade?',
        answer: 'Utilizar malhas de aço no reforço de concreto é fundamental para aumentar a resistência das estruturas. As malhas devem ser posicionadas nas áreas onde se espera maior tensão, como em vigas e lajes. É importante respeitar as normas técnicas, cortando e moldando as malhas adequadamente. Além disso, garantir a cobertura de concreto sobre a malha assegura proteção contra corrosão e aumenta a durabilidade.',
      },
      {
        question: 'Como calcular a quantidade de malha de aço necessária por m²?',
        answer: 'Para calcular a quantidade de malha de aço por m², você precisa conhecer a espessura e o tipo de malha que está utilizando. Em geral, malhas são fornecidas em rolos ou painéis de 2,0 x 4,0 m, e cada malha tem uma área específica. Multiplique a área da malha pelo número de camadas que você pretende utilizar e, em seguida, divida pela área do projeto para obter a quantidade necessária.',
      },
      {
        question: 'Quais são as dicas essenciais para a instalação de malhas em lajes?',
        answer: 'Para instalar malhas em lajes, comece por limpar bem a superfície, garantindo que não haja detritos. Posicione as malhas de modo que fiquem centralizadas e evitem sobreposições. Utilize espaçadores adequados para garantir distância entre as camadas e, ao concretar, certifique-se de que o concreto envolva totalmente a malha, formando uma estrutura sólida e segura.',
      },
    ],
  },
  {
    id: 'normas',
    title: 'Normas e Qualidade',
    icon: '📋',
    faqs: [
      {
        question: 'Quais são as principais normas técnicas que regem o uso de malhas estruturais?',
        answer: 'As principais normas técnicas para malhas estruturais incluem a NBR 6118, que trata do projeto de estruturas de concreto, e a NBR 7480, que especifica os requisitos para as malhas. Essas normas garantem segurança e qualidade nas construções, abordando aspectos como dimensões, resistência e execução.',
      },
      {
        question: 'Quais são os principais itens do checklist para recebimento de aço na obra?',
        answer: 'O checklist para recebimento de aço deve incluir: verificação da quantidade e qualidade do material, conferência das notas fiscais, checagem de especificações técnicas, inspeção do estado físico (ferrugem, amassados), e a conferência dos certificados de garantia. Esses passos garantem que o material atenda a todas as normas e especificações de segurança.',
      },
      {
        question: 'Qual é a diferença entre o aço virgem e o aço reciclado?',
        answer: 'O aço virgem é produzido a partir de minério de ferro, enquanto o aço reciclado é feito a partir de sucata de aço. A principal diferença está no impacto ambiental: a produção de aço virgem consome mais energia e recursos naturais, gerando mais emissões. Já o aço reciclado reduz o desperdício e é uma opção mais sustentável, mantendo qualidade e resistência semelhantes ao aço novo.',
      },
      {
        question: 'Quais são os métodos para testar a resistência do aço em uma estrutura?',
        answer: 'Para testar a resistência do aço in loco, você pode usar métodos como o ensaio de tração, que mede a força que o material suporta até romper. Outra abordagem é o teste de dureza, que avalia a resistência superficial. Além disso, o uso de ultrassom pode identificar imperfeições internas. Certifique-se de seguir as normas técnicas para resultados precisos e confiáveis.',
      },
    ],
  },
  {
    id: 'logistica',
    title: 'Entrega e Logística',
    icon: '🚚',
    faqs: [
      {
        question: 'Quais são as melhores práticas para transportar vergalhões com segurança?',
        answer: 'Transportar vergalhões com segurança exige atenção a vários fatores. Comece utilizando veículos adequados e com capacidade para o peso. Use cintas ou cordas para fixar os vergalhões, evitando movimentos indesejados. Além disso, verifique se há sinalização apropriada do carregamento, e sempre utilize Equipamentos de Proteção Individual (EPIs).',
      },
      {
        question: 'Como montar um cronograma eficiente para a entrega de aço em uma obra?',
        answer: 'Para montar um cronograma de entrega de aço, comece listando as necessidades do projeto, com datas de início e término. Depois, conecte-se com fornecedores de aço para entender seus prazos de produção e logística. Por fim, alinhe a entrega ao avanço da obra, considerando folgas para imprevistos. Isso garantirá eficiência e evitará atrasos.',
      },
      {
        question: 'Qual é a melhor maneira de armazenar bobinas em uma obra?',
        answer: 'Para armazenar bobinas em uma obra, é fundamental mantê-las em local seco e bem ventilado, longe de umidade que pode causar corrosão. Utilize suportes adequados que evitem o contato direto com o solo e possibilitem fácil acesso. Sinalize a área para evitar danos e organize-as por tipo e tamanho.',
      },
    ],
  },
];

export default function Faq() {
  useSEO({
    title: 'FAQ | Perguntas Frequentes sobre Aço para Construção | BR Aço',
    description: 'Tire todas as dúvidas sobre vergalhões, corte e dobra, treliças, normas ABNT, armazenamento e logística de aço para construção civil em Goiânia e Goiás.',
    canonical: 'https://grupobraco.com.br/faq',
    keywords: 'dúvidas vergalhão, faq corte e dobra, perguntas aço construção, abnt vergalhão',
  });

  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    const allFaqs = faqCategories.flatMap(cat => cat.faqs);
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": allFaqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
      }))
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-page-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => { document.getElementById('faq-page-schema')?.remove(); };
  }, []);

  const filteredCategories = useMemo(() => {
    const term = search.toLowerCase().trim();
    return faqCategories
      .filter(cat => !activeCategory || cat.id === activeCategory)
      .map(cat => ({
        ...cat,
        faqs: cat.faqs.filter(faq =>
          !term ||
          faq.question.toLowerCase().includes(term) ||
          faq.answer.toLowerCase().includes(term)
        ),
      }))
      .filter(cat => cat.faqs.length > 0);
  }, [search, activeCategory]);

  const totalResults = filteredCategories.reduce((sum, cat) => sum + cat.faqs.length, 0);
  const hasFilter = search.trim() !== '' || activeCategory !== null;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-brand-navy overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-24">
        {/* Background grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true"
          style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        {/* Orange accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-brand-orange" aria-hidden="true" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-flex items-center gap-2 text-brand-orange text-xs font-semibold tracking-widest uppercase mb-4">
            <span className="h-px w-6 bg-brand-orange" />
            Central de Ajuda
            <span className="h-px w-6 bg-brand-orange" />
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Perguntas Frequentes
          </h1>
          <p className="text-white/60 mt-4 text-base sm:text-lg max-w-xl mx-auto">
            Encontre respostas rápidas sobre vergalhões, corte e dobra, normas ABNT e logística de aço.
          </p>

          {/* Search */}
          <div className="relative mt-8 max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar pergunta..."
              className="w-full bg-white/10 border border-white/15 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-brand-orange focus:bg-white/15 transition-all"
              aria-label="Buscar perguntas frequentes"
            />
          </div>
        </div>
      </section>

      {/* Category Chips */}
      <div className="sticky top-16 lg:top-20 z-30 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
            <button
              onClick={() => setActiveCategory(null)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === null
                  ? 'bg-brand-navy text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Todos
            </button>
            {faqCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(prev => prev === cat.id ? null : cat.id)}
                className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-brand-orange text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span aria-hidden="true">{cat.icon}</span>
                {cat.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          {/* Results count when filtering */}
          {hasFilter && (
            <p className="text-sm text-gray-500 mb-6">
              {totalResults === 0
                ? 'Nenhuma pergunta encontrada.'
                : `${totalResults} pergunta${totalResults !== 1 ? 's' : ''} encontrada${totalResults !== 1 ? 's' : ''}`
              }
              {' '}
              <button
                onClick={() => { setSearch(''); setActiveCategory(null); }}
                className="text-brand-orange hover:underline"
              >
                Limpar filtros
              </button>
            </p>
          )}

          {totalResults === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg mb-2">Nenhuma pergunta encontrada para "{search}"</p>
              <p className="text-gray-400 text-sm">
                Tente outros termos ou{' '}
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-orange hover:underline"
                  onClick={() => setTimeout(() => analytics.whatsappClick('faq-no-results'), 0)}
                >
                  fale com a gente pelo WhatsApp
                </a>
                .
              </p>
            </div>
          )}

          <div className="space-y-8">
            {filteredCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                {/* Category header */}
                <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-100 bg-gray-50/50">
                  <span className="text-xl" aria-hidden="true">{category.icon}</span>
                  <h2 className="text-base sm:text-lg font-bold text-brand-navy">
                    {category.title}
                  </h2>
                  <span className="ml-auto text-xs text-gray-400 font-medium">
                    {category.faqs.length} pergunta{category.faqs.length !== 1 ? 's' : ''}
                  </span>
                </div>

                <div className="px-6 py-2">
                  <Accordion type="single" collapsible className="w-full">
                    {category.faqs.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`${category.id}-${index}`}
                        className="border-b border-gray-100 last:border-0"
                      >
                        <AccordionTrigger className="text-left text-sm sm:text-base font-medium text-brand-navy hover:text-brand-orange py-4 [&[data-state=open]]:text-brand-orange">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 text-sm sm:text-base leading-relaxed pb-4">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy py-14 sm:py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Não encontrou o que precisava?
          </h2>
          <p className="text-white/60 mt-3 text-sm sm:text-base">
            Nossa equipe técnica responde em minutos pelo WhatsApp.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setTimeout(() => analytics.whatsappClick('faq-cta'), 0)}
              className="inline-flex items-center justify-center gap-2 bg-brand-whatsapp hover:bg-brand-whatsapp-hover text-white font-semibold rounded-xl px-6 py-3.5 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Perguntar pelo WhatsApp
            </a>
            <Link
              to="/contato"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/80 hover:text-white hover:border-white/40 font-medium rounded-xl px-6 py-3.5 transition-colors text-sm"
            >
              Ou enviar por formulário
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
