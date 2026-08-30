import { useState } from 'react';
import { X, MapPin, ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';
import { useSEO } from '@/hooks/useSEO';
import Reveal from '@/components/Reveal';
import { CASES, CATEGORIES, driveImg, type Case, type CaseCategory } from '@/data/casesData';

const STATS = [
  { number: '10.000+', label: 'Obras atendidas' },
  { number: '6+', label: 'Anos de mercado' },
  // nbsp dentro de cada par (GO·DF / MT·TO) + espaço quebrável só entre os pares:
  // fica em 1 linha quando cabe, ou 2 linhas equilibradas — nunca "TO" sozinho.
  { number: 'GO · DF MT · TO', label: 'Estados atendidos', compact: true },
  { number: '100%', label: 'Aço rastreável' },
];

function CaseModal({ c, onClose }: { c: Case; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 z-10 w-11 h-11 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
        onClick={onClose}
        aria-label="Fechar"
      >
        <X className="w-5 h-5" />
      </button>

      <div
        className="relative w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={driveImg(c.imageId)}
          alt={`${c.title}: ${c.subtitle}`}
          className="w-full rounded-2xl shadow-2xl"
        />

        {/* CTA bar sobreposta */}
        <div className="absolute bottom-0 left-0 right-0 rounded-b-2xl bg-gradient-to-t from-black/90 to-transparent p-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3">
          <div>
            <p className="text-[10px] font-bold tracking-[2px] uppercase text-primary mb-0.5">
              {c.category} · {c.location}
            </p>
            <h3 className="text-lg font-black text-white leading-tight">
              {c.title}: {c.subtitle}
            </h3>
          </div>
          <a
            href={`https://wa.me/556299032023?text=Ol%C3%A1!%20Vi%20o%20case%20${encodeURIComponent(c.title)}%20e%20quero%20um%20resultado%20igual%20na%20minha%20obra.`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex-shrink-0 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm px-6 py-3 rounded-full transition-colors whitespace-nowrap"
          >
            Quero igual na minha obra
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Cases() {
  useSEO({
    title: 'Cases de Sucesso | BR Aço',
    description:
      'Projetos reais de engenharia que marcam cidades — do complexo multiuso ao terminal urbano, a BR Aço está na fundação de quem constrói para durar.',
    canonical: 'https://grupobraco.com.br/cases/',
    keywords:
      'cases de sucesso, obras com BR Aço, corte e dobra de vergalhão, engenharia Goiás, projetos construção civil',
  });

  const [activeCategory, setActiveCategory] = useState<CaseCategory>('Todos');
  const [openCase, setOpenCase] = useState<Case | null>(null);

  const filtered =
    activeCategory === 'Todos' ? CASES : CASES.filter((c) => c.category === activeCategory);

  const featured = filtered.find((c) => c.featured) ?? filtered[0];
  const rest = filtered.filter((c) => c !== featured);

  return (
    <Layout>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="bg-background pt-32 pb-16 border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[2px] uppercase text-primary mb-4">
              <span className="w-8 h-px bg-primary inline-block" />
              Portfólio de Obras
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-foreground leading-tight mb-4">
              Cases de <span className="text-primary">Sucesso</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed mb-12">
              Projetos icônicos que marcam cidades. Da engenharia de grande porte à arquitetura
              sofisticada — a BR Aço está na fundação de quem constrói para durar.
            </p>
          </Reveal>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-hairline pt-12">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div>
                  <div className={`font-black text-primary mb-1 ${(s as { compact?: boolean }).compact ? 'text-2xl md:text-3xl leading-tight text-balance' : 'text-3xl md:text-4xl'}`}>{s.number}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASES GRID ────────────────────────────────────────────────────── */}
      <section className="bg-background py-16">
        <div className="max-w-7xl mx-auto px-4">

          {/* Filter chips */}
          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-semibold tracking-wide px-4 py-2 rounded-full border transition-colors ${
                  activeCategory === cat
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'border-border text-muted-foreground hover:border-primary hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured card — imagem completa em aspect ratio nativo */}
          {featured && (
            <Reveal>
              <button
                className="group relative w-full rounded-2xl overflow-hidden cursor-pointer mb-4 text-left block"
                onClick={() => setOpenCase(featured)}
                aria-label={`Abrir case ${featured.title}`}
              >
                <img
                  src={driveImg(featured.imageId)}
                  alt={featured.title}
                  className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="eager"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 bg-primary text-primary-foreground font-bold text-sm px-6 py-3 rounded-full shadow-xl">
                    Ver case completo <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
                {/* Badge */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-xs font-black text-primary backdrop-blur-sm">
                  {featured.id}
                </div>
                {/* Sem badge de categoria: a imagem já traz categoria + título
                    desenhados; o overlay HTML sobrepunha o título no mobile. */}
              </button>
            </Reveal>
          )}

          {/* Grid 2×2 */}
          {rest.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {rest.map((c, i) => (
                <Reveal key={c.id} delay={i * 60}>
                  <button
                    className="group relative w-full rounded-2xl overflow-hidden cursor-pointer text-left block"
                    onClick={() => setOpenCase(c)}
                    aria-label={`Abrir case ${c.title}`}
                  >
                    <img
                      src={driveImg(c.imageId)}
                      alt={c.title}
                      className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 bg-primary text-primary-foreground font-bold text-sm px-5 py-2.5 rounded-full shadow-xl">
                        Abrir case <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                    {/* Badge */}
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-[10px] font-black text-primary backdrop-blur-sm">
                      {c.id}
                    </div>
                    {/* Sem badge de categoria: imagem já traz categoria + título. */}
                  </button>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-card border-t border-hairline py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Reveal>
            <span className="text-xs font-bold tracking-[2px] uppercase text-primary mb-4 block">
              Próximo passo
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight mb-4">
              Seu projeto pode ser o{' '}
              <span className="text-primary">próximo case</span> da BR Aço.
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Do residencial ao complexo multiuso — entregamos aço industrial com precisão,
              velocidade e rastreabilidade total.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="https://wa.me/556299032023?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20minha%20obra."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm rounded-full px-8 py-4 transition-colors uppercase tracking-widest"
              >
                Solicitar Orçamento
              </a>
              <a
                href="/produtos"
                className="border border-border text-foreground hover:border-primary hover:text-primary font-semibold text-sm rounded-full px-8 py-4 transition-colors uppercase tracking-widest"
              >
                Ver Produtos
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── LIGHTBOX ──────────────────────────────────────────────────────── */}
      {openCase && <CaseModal c={openCase} onClose={() => setOpenCase(null)} />}
    </Layout>
  );
}
