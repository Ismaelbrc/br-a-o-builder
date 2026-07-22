import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import Eyebrow from '@/components/Eyebrow';
import Reveal from '@/components/Reveal';
import SectionIntro from '@/components/SectionIntro';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useSEO } from '@/hooks/useSEO';
import { CASES, driveImg } from '@/data/casesData';
import { blogPostsMeta } from '@/data/blogPostsMeta';
import {
  ChevronRight,
  MessageCircle,
  Truck,
  ShieldCheck,
  Cpu,
  Clock,
  ArrowRight,
  ArrowUpRight,
} from 'lucide-react';

const WHATSAPP_MSG =
  'Olá! Recebi a proposta da BR Aço para a Rede da Construção e gostaria de conversar sobre os próximos passos.';
const whatsappUrl = `https://wa.me/556299032023?text=${encodeURIComponent(WHATSAPP_MSG)}`;

// ── Tabela de preços — Até 250km / Acima 250km ──────────────────────────────
interface PriceRow {
  desc: string;
  ate250: string;
  acima250: string;
}
interface PriceGroup {
  category: string;
  rows: PriceRow[];
}

const PRICE_GROUPS: PriceGroup[] = [
  {
    category: 'Vergalhões',
    rows: [
      { desc: 'VERG CA-60 4.2mm DOB 12m — 25/BR', ate250: 'R$7,70', acima250: 'R$7,85' },
      { desc: 'VERG CA-60 5.0mm DOB 12m — 25/BR', ate250: 'R$10,85', acima250: 'R$11,05' },
      { desc: 'VERG CA-50 6.3mm (1/4") DOB 12m — 15/BR', ate250: 'R$16,95', acima250: 'R$17,30' },
      { desc: 'VERG CA-50 8.0mm (5/16") DOB 12m — 10/BR', ate250: 'R$26,90', acima250: 'R$27,45' },
      { desc: 'VERG CA-50 10.0mm (3/8") DOB 12m — 5/BR', ate250: 'R$39,85', acima250: 'R$40,65' },
      { desc: 'VERG CA-50 12.5mm (1/2") DOB 12m — 4/BR', ate250: 'R$63,20', acima250: 'R$64,45' },
      { desc: 'VERG CA-50 16.0mm (5/8") DOB 12m — 2/BR', ate250: 'R$103,60', acima250: 'R$105,65' },
      { desc: 'VERG CA-50 20.0mm (3/4") DOB 12m — 2/BR', ate250: 'R$160,13', acima250: 'R$160,13' },
    ],
  },
  {
    category: 'Treliças',
    rows: [
      { desc: 'Treliça TG8L Reforçada 6/4.2/3.4 6m', ate250: 'R$26,64', acima250: 'R$27,19' },
      { desc: 'Treliça TG8SL Leve 5/3.4/3.4 6m', ate250: 'R$20,72', acima250: 'R$21,11' },
    ],
  },
  {
    category: 'Colunas',
    rows: [
      { desc: 'Coluna CA-50 6.3mm (7x14) 6m — 28 estribos', ate250: 'R$43,74', acima250: 'R$44,60' },
      { desc: 'Coluna CA-60 8.0mm (7x14) 6m — 28 estribos', ate250: 'R$57,63', acima250: 'R$58,70' },
      { desc: 'Coluna CA-50 8.0mm (7x14) 6m — 28 estribos', ate250: 'R$60,69', acima250: 'R$61,91' },
      { desc: 'Coluna CA-50 10.0mm (7x14) 6m — 28 estribos', ate250: 'R$87,62', acima250: 'R$89,35' },
      { desc: 'Coluna CA-50 10.0mm (7x20) 6m — 28 estribos/35', ate250: 'R$90,68', acima250: 'R$92,51' },
    ],
  },
  {
    category: 'Telas e Malhas Pop',
    rows: [
      { desc: '(EQ45) Malha Pop Leve 3.4x20x20 2x3m', ate250: 'R$28,40', acima250: 'R$28,95' },
      { desc: '(EQ92) Malha Pop Reforçada 4.2x15x15 2x3m', ate250: 'R$59,40', acima250: 'R$60,60' },
    ],
  },
  {
    category: 'Pregos e Arames',
    rows: [
      { desc: 'Pregos linha 17/18/19', ate250: 'R$10,90', acima250: 'R$10,90' },
      { desc: 'Arames recozidos', ate250: 'R$10,50', acima250: 'R$10,50' },
    ],
  },
];

const PITCH_POINTS = [
  {
    icon: Truck,
    title: 'Entrega em 2 dias úteis',
    description:
      'Frota própria e logística dedicada: o pedido da Rede da Construção sai do nosso pátio e chega na obra do seu cliente sem depender de terceiros — pontualidade que vira reputação pra vocês.',
  },
  {
    icon: Cpu,
    title: 'Produção 100% automatizada',
    description:
      'Corte e dobra em máquinas CNC com tolerância de ±1mm. Cada peça sai padronizada, identificada e pronta pra montagem — zero variação de lote a lote.',
  },
  {
    icon: ShieldCheck,
    title: 'Certificação ABNT NBR 7480',
    description:
      'Rastreabilidade total de origem, do vergalhão à malha soldada. Todo produto revendido pela rede carrega a garantia de qualidade que protege a marca de vocês na ponta.',
  },
  {
    icon: Clock,
    title: 'Prazo é compromisso, não promessa',
    description:
      'Cronograma de obra não espera. Nosso histórico de entrega no prazo é o motivo pelo qual construtoras voltam a comprar — e é isso que vocês repassam pro cliente final.',
  },
];

export default function PropostaRedeConstrucao() {
  useSEO({
    title: 'Proposta Comercial BR Aço | Rede da Construção',
    description:
      'Proposta comercial da BR Aço para a Rede da Construção: tabela de preços, cases de obras reais e por que a BR Aço é a fornecedora certa em qualidade e prazo de entrega.',
    noindex: true,
  });

  const featuredCases = CASES.slice(0, 3);
  const latestPosts = [...blogPostsMeta].sort((a, b) => b.id - a.id).slice(0, 3);

  return (
    <Layout>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative bg-brand-navy overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-[0.10] pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <nav className="flex items-center gap-2 label-eyebrow text-white/40 mb-10" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white/70">Proposta Comercial</span>
          </nav>

          <Eyebrow tone="light">Proposta comercial — Rede da Construção</Eyebrow>
          <h1 className="text-display-xl text-white mt-6 max-w-[22ch]">
            Um fornecedor de aço à altura do nome da sua rede.
          </h1>
          <p className="text-lg text-white/75 mt-6 max-w-2xl leading-relaxed">
            A BR Aço propõe uma parceria de fornecimento com o que uma rede de lojas de material de
            construção mais precisa de um fornecedor de aço: <strong className="text-white">preço competitivo,
            qualidade certificada e prazo de entrega que você pode prometer ao seu cliente sem medo.</strong>
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <Button asChild className="bg-brand-orange hover:bg-brand-orange-hover text-white rounded-lg px-8 py-6 text-base">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Conversar sobre a parceria
              </a>
            </Button>
            <a
              href="#tabela-de-precos"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white font-semibold text-sm transition-colors"
            >
              Ver tabela de preços <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── PITCH: por que a BR Aço ──────────────────────────────────────── */}
      <section className="py-16 sm:py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionIntro
            eyebrow="Por que fechar com a BR Aço"
            title={<>Qualidade e prazo não são<br className="hidden sm:block" /> promessa de vendedor — são processo.</>}
            description="Toda rede de material de construção vive do que promete na ponta. A BR Aço garante que essa promessa nunca vire dor de cabeça: entrega no dia certo, aço com certificação real e um padrão de corte que não varia."
          />

          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-px bg-hairline border border-hairline rounded-2xl overflow-hidden">
            {PITCH_POINTS.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={index} delay={(index % 2) * 80}>
                  <div className="group relative flex h-full flex-col bg-background p-7 sm:p-8">
                    <Icon className="w-7 h-7 text-brand-orange" strokeWidth={1.5} />
                    <h3 className="font-display text-xl font-semibold text-brand-navy mt-6 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-brand-gray-medium text-sm leading-relaxed mt-3">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TABELA DE PREÇOS ──────────────────────────────────────────────── */}
      <section id="tabela-de-precos" className="py-16 sm:py-20 md:py-28 bg-secondary scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <SectionIntro
            eyebrow="Condições comerciais"
            title="Tabela de preços para a Rede da Construção"
            description="Valores por peça/barra, com faixa de frete até 250km e acima de 250km do nosso pátio de produção."
          />

          <Reveal className="mt-12 sm:mt-16">
            <div className="bg-background border border-hairline rounded-2xl overflow-hidden">
              {PRICE_GROUPS.map((group) => (
                <div key={group.category} className="border-b border-hairline last:border-b-0">
                  <div className="px-6 pt-6 pb-2">
                    <span className="label-eyebrow text-brand-orange">{group.category}</span>
                  </div>
                  <Table>
                    <TableHeader>
                      <TableRow className="border-hairline hover:bg-transparent">
                        <TableHead className="text-brand-navy font-semibold">Produto</TableHead>
                        <TableHead className="text-brand-navy font-semibold text-right">Até 250km</TableHead>
                        <TableHead className="text-brand-navy font-semibold text-right">Acima 250km</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {group.rows.map((row) => (
                        <TableRow key={row.desc} className="border-hairline">
                          <TableCell className="text-brand-gray-medium">{row.desc}</TableCell>
                          <TableCell className="text-right font-semibold text-brand-navy tabular-nums">
                            {row.ate250}
                          </TableCell>
                          <TableCell className="text-right font-semibold text-brand-navy tabular-nums">
                            {row.acima250}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              ))}
            </div>
          </Reveal>

          <p className="text-xs text-brand-gray-medium mt-6 max-w-2xl">
            Valores de referência sujeitos a atualização conforme volume e condição de pagamento
            acordados. Pedido mínimo e prazos de entrega definidos na formalização da parceria.
          </p>
        </div>
      </section>

      {/* ── CASES ─────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <SectionIntro
              eyebrow="Prova real"
              title="Obras que confiaram no nosso prazo."
              description="Do complexo multiuso ao terminal urbano — projetos onde atraso não era opção."
            />
            <Link
              to="/cases"
              className="hidden sm:inline-flex items-center gap-2 text-brand-navy hover:text-brand-orange font-semibold text-sm transition-colors flex-shrink-0 rule-tick pt-4"
            >
              Ver todos os cases <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            {featuredCases.map((c, i) => (
              <Reveal key={c.id} delay={i * 80}>
                <div className="group relative rounded-2xl overflow-hidden border border-hairline">
                  <img
                    src={driveImg(c.imageId)}
                    alt={c.title}
                    className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
                <div className="mt-3">
                  <p className="label-eyebrow text-brand-orange">{c.category} · {c.location}</p>
                  <h3 className="font-display text-base font-semibold text-brand-navy mt-1">
                    {c.title}: {c.subtitle}
                  </h3>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 sm:hidden">
            <Link to="/cases" className="inline-flex items-center gap-2 text-brand-orange font-semibold transition-colors">
              Ver todos os cases <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── BLOG ──────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 md:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <SectionIntro
              eyebrow="Autoridade técnica"
              title="Conteúdo que vende junto com o produto."
              description="Material técnico que ajuda o vendedor da rede a responder qualquer dúvida do cliente na hora da venda."
            />
            <Link
              to="/blog"
              className="hidden sm:inline-flex items-center gap-2 text-brand-navy hover:text-brand-orange font-semibold text-sm transition-colors flex-shrink-0 rule-tick pt-4"
            >
              Ver todos os artigos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline border border-hairline rounded-2xl overflow-hidden mt-12">
            {latestPosts.map((post, index) => (
              <Reveal key={post.id} delay={index * 80}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group flex h-full flex-col bg-background p-7 transition-colors hover:bg-card"
                >
                  <span className="label-eyebrow text-brand-orange">{post.category}</span>
                  <h3 className="font-display text-lg font-semibold text-brand-navy mt-4 line-clamp-3 group-hover:text-brand-orange transition-colors leading-snug flex-1 tracking-tight">
                    {post.title}
                  </h3>
                  <p className="text-sm text-brand-gray-medium mt-3 line-clamp-2">{post.summary}</p>
                  <div className="flex justify-between items-center mt-6 rule-tick pt-4">
                    <span className="label-eyebrow text-brand-gray-medium">{post.readingTime}min de leitura</span>
                    <ArrowUpRight className="w-4 h-4 text-brand-gray-medium transition-all group-hover:text-brand-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────────────────────── */}
      <section className="relative py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative overflow-hidden bg-brand-navy rounded-2xl p-10 md:p-14 text-center">
            <div className="absolute inset-0 bg-blueprint opacity-[0.07] pointer-events-none" aria-hidden="true" />
            <div className="relative">
              <Eyebrow tone="light" className="justify-center">Próximo passo</Eyebrow>
              <h2 className="text-display-md text-white mt-5">
                Vamos fechar a parceria com a Rede da Construção?
              </h2>
              <p className="text-white/70 mt-4 max-w-xl mx-auto leading-relaxed">
                Qualidade certificada, prazo de entrega que vira vantagem competitiva pra rede e uma
                equipe pronta pra atender o volume de vocês. Bora conversar sobre os próximos passos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button asChild className="bg-brand-orange hover:bg-brand-orange-hover text-white rounded-lg px-8 py-6 text-base">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Falar no WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
