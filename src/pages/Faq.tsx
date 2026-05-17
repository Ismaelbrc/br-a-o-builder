import { useEffect } from 'react';
import Layout from '@/components/Layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useSEO } from '@/hooks/useSEO';

const faqCategories = [
  {
    title: 'Corte e Dobra',
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
    title: 'Vergalhões',
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
    title: 'Treliças',
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
    title: 'Telas e Malhas',
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
    title: 'Pregos e Arames',
    faqs: [
      {
        question: 'O que são os pregos e arames utilizados na construção e qual a sua importância?',
        answer: 'Os pregos e arames são elementos fundamentais na construção civil. Os pregos são usados para fixação rápida de materiais, como madeira e chapas. Já os arames, geralmente de aço, são utilizados para amarração, ligando estruturas e reforçando instalações. Ambos garantem a estabilidade e segurança das construções, facilitando o processo de montagem.',
      },
      {
        question: 'Qual a diferença entre o arame recozido e o arame galvanizado?',
        answer: 'O arame recozido é tratado para ser flexível, ideal para aplicações que exigem curvaturas, como construção e cercas. Já o galvanizado é revestido com zinco, proporcionando resistência à corrosão, tornando-o perfeito para ambientes expostos a umidade. Em resumo, escolha o recozido para flexibilidade e o galvanizado para durabilidade.',
      },
      {
        question: 'Quais são algumas dicas eficazes para armazenar pregos e arames, evitando a oxidação?',
        answer: 'Para armazenar pregos e arames sem oxidação, mantenha-os em local fresco e seco, longe da umidade. Utilize recipientes hermeticamente fechados, como caixas plásticas ou latas. Aplique uma leve camada de óleo protetivo nos metais. Se possível, adicione dessecantes, como sílica gel, para absorver a umidade do ambiente.',
      },
    ],
  },
  {
    title: 'Fundações e Sapatas',
    faqs: [
      {
        question: 'Qual a diferença entre sapatas e blocos de fundação?',
        answer: 'As sapatas são elementos de fundação que distribuem as cargas das estruturas para o solo, podendo ser isoladas ou contínuas. São indicadas para edifícios de um ou dois andares. Já os blocos de fundação são estruturas de concreto que suportam cargas de lajes, distribuindo-as na base do alicerce. Ambos são essenciais, mas têm funções específicas no suporte da construção.',
      },
      {
        question: 'Quais são as melhores dicas para evitar recalques em sapatas?',
        answer: 'Para evitar recalques em sapatas, comece realizando um bom estudo do solo, garantindo que as fundações estejam adequadas às suas características. Utilize materiais de qualidade e faça uma drenagem eficiente para evitar acúmulo de água. Distribua as cargas de maneira uniforme para evitar tensões excessivas. Considere a compactação do solo e o dimensionamento correto das sapatas.',
      },
      {
        question: 'Quais são os erros mais comuns na construção de sapatas de fundação?',
        answer: 'Os erros comuns nas sapatas de fundação incluem subdimensionamento, falta de drenagem adequada, escolha errada de materiais e má execução da concretagem. Para evitar esses problemas, é fundamental realizar um estudo do solo, dimensionar corretamente as sapatas, garantir um sistema de drenagem eficiente e seguir as boas práticas de execução.',
      },
    ],
  },
  {
    title: 'Normas Técnicas e Qualidade',
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
    title: 'Transporte e Armazenamento',
    faqs: [
      {
        question: 'Quais são as melhores práticas para transportar vergalhões com segurança?',
        answer: 'Transportar vergalhões com segurança exige atenção a vários fatores. Comece utilizando veículos adequados e com capacidade para o peso. Use cintas ou cordas para fixar os vergalhões, evitando movimentos indesejados. Além disso, verifique se há sinalização apropriada do carregamento, e sempre utilize Equipamentos de Proteção Individual (EPIs).',
      },
      {
        question: 'Quais cuidados ao transportar telas e colunas de aço?',
        answer: 'Ao transportar telas e colunas de aço, é fundamental utilizar suportes adequados que estabilizem as estruturas, evitando que se dobrem ou se danifiquem. Proteja os cantos e arestas com almofadas ou outros materiais macios. Mantenha as colunas na posição vertical e as telas planas, evitando sobrecargas que possam comprometer a integridade dos materiais.',
      },
      {
        question: 'Qual é a melhor maneira de armazenar bobinas em uma obra?',
        answer: 'Para armazenar bobinas em uma obra, é fundamental mantê-las em local seco e bem ventilado, longe de umidade que pode causar corrosão. Utilize suportes adequados que evitem o contato direto com o solo e possibilitem fácil acesso. Sinalize a área para evitar danos e organize-as por tipo e tamanho.',
      },
      {
        question: 'Como montar um cronograma eficiente para a entrega de aço em uma obra?',
        answer: 'Para montar um cronograma de entrega de aço, comece listando as necessidades do projeto, com datas de início e término. Depois, conecte-se com fornecedores de aço para entender seus prazos de produção e logística. Por fim, alinhe a entrega ao avanço da obra, considerando folgas para imprevistos. Isso garantirá eficiência e evitará atrasos.',
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

  useEffect(() => {
    // Flat list of all FAQs for FAQPage schema
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

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-brand-navy pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Perguntas Frequentes
          </h1>
          <p className="text-brand-gray-light mt-4 text-base sm:text-lg max-w-2xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre nossos produtos e serviços
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-10">
            {faqCategories.map((category) => (
              <div key={category.title}>
                <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mb-4">
                  {category.title}
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`${category.title}-${index}`}>
                      <AccordionTrigger className="text-left text-sm sm:text-base">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
