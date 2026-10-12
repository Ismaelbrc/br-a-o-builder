import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { analytics } from '@/lib/analytics';
import { openWhatsApp } from '@/lib/whatsapp';

/**
 * "Do céu à sapata" — narrativa controlada pela rolagem com imagens reais da obra
 * do Hotel Nacional (Brasília, jul/2026): drone → içamento → vala → pronto.
 *
 * Como funciona: a tela fica presa (sticky) e a rolagem avança um MP4 curto
 * codificado só com quadros-chave (-g 1), o que deixa o seek instantâneo e usa
 * um único decodificador (sequência de imagens estourava a memória no celular).
 * Fontes e geração: public/home/ceu/ (seq-m 540x960, seq-d 1280x720 + 1 pôster por capítulo).
 *
 * Peso: nada de vídeo no carregamento inicial. O MP4 só é baixado quando a seção
 * chega perto da tela; com Save-Data ou no robô do prerender (navigator.webdriver)
 * ficam só os pôsteres, para o HTML estático não gravar src de vídeo.
 *
 * Cores: marca da LP /instagram (verde #006B3C, ouro #F2B705, azul #002B5C).
 */

const ASSETS = '/home/ceu';
const TOTAL_FRAMES = 150;

const CHAPTERS = [
  { id: 'ceu', start: 0, kicker: 'Obra do Hotel Nacional', title: <>Hotel Nacional, <em>Brasília</em>.</>, text: 'Um símbolo da capital sendo reconstruído. A fundação leva aço BR Aço.' },
  { id: 'desce', start: 30, kicker: 'A fundação', title: <>Lá embaixo, dezenas de sapatas.</>, text: 'Cada uma esperando a armadura certa, na medida do projeto.' },
  { id: 'icamento', start: 74, kicker: 'Entrega', title: <>O aço chega <em>pronto</em>.</>, text: 'Cortado, dobrado e montado na fábrica. Içado direto do caminhão.' },
  { id: 'vala', start: 104, kicker: 'Na vala', title: <>Desce direto pra fundação.</>, text: 'Sem armar no canteiro. Sem sobra de material.' },
  { id: 'pronto', start: 134, kicker: 'Pronto', title: <>Só posicionar e <em>amarrar</em>.</>, text: 'Orçamento em até 24h. Vergalhão e treliça em 48h.' },
] as const;

const RANGES = CHAPTERS.map((c, i) => ({
  from: c.start / (TOTAL_FRAMES - 1),
  to: i === CHAPTERS.length - 1 ? 1.01 : CHAPTERS[i + 1].start / (TOTAL_FRAMES - 1),
}));

const handleWhatsApp = () => {
  setTimeout(() => analytics.whatsappClick('ceu-a-sapata'), 0);
  openWhatsApp('Olá! Vi a obra do Hotel Nacional no site e quero um orçamento de corte e dobra.');
};

const CeuASapataSection = () => {
  const storyRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const railRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [format, setFormat] = useState<'m' | 'd'>('m');
  const [videoReady, setVideoReady] = useState(false);
  const [loadPct, setLoadPct] = useState(0);
  const [started, setStarted] = useState(false);

  // formato pela proporção da tela (vertical no celular, horizontal no desktop)
  useEffect(() => {
    const pick = () => setFormat(window.innerWidth / window.innerHeight < 1 ? 'm' : 'd');
    pick();
    window.addEventListener('resize', pick);
    return () => window.removeEventListener('resize', pick);
  }, []);

  // baixa o vídeo só quando a seção se aproxima da tela
  useEffect(() => {
    const story = storyRef.current;
    if (!story) return;
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (navigator.webdriver || conn?.saveData) return;
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) { setStarted(true); io.disconnect(); }
    }, { rootMargin: '800px 0px' });
    io.observe(story);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!started || !video) return;
    let cancelled = false;
    let objectUrl = '';
    setVideoReady(false);
    setLoadPct(0);
    const url = `${ASSETS}/seq-${format}.mp4`;
    // blob inteiro na memória: o seek pela rolagem fica liso também no iPhone
    (async () => {
      try {
        const res = await fetch(url);
        if (!res.ok || !res.body) throw new Error(String(res.status));
        const total = Number(res.headers.get('Content-Length')) || 0;
        const reader = res.body.getReader();
        const parts: BlobPart[] = [];
        let got = 0;
        for (;;) {
          const { done, value } = await reader.read();
          if (done || cancelled) break;
          parts.push(value);
          got += value.length;
          if (total) setLoadPct(Math.round((got / total) * 100));
        }
        if (cancelled) return;
        objectUrl = URL.createObjectURL(new Blob(parts, { type: 'video/mp4' }));
        video.src = objectUrl;
      } catch {
        if (cancelled) return;
        video.src = url;
      }
      video.addEventListener('loadeddata', () => { if (!cancelled) setVideoReady(true); }, { once: true });
      video.load();
    })();
    return () => {
      cancelled = true;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [started, format]);

  // rolagem → capítulo ativo, trilho de progresso e tempo do vídeo
  useEffect(() => {
    const story = storyRef.current;
    const video = videoRef.current;
    if (!story) return;
    let queued = false;
    let target = 0;

    const frame = () => {
      queued = false;
      const r = story.getBoundingClientRect();
      const span = story.offsetHeight - window.innerHeight;
      const p = Math.min(1, Math.max(0, -r.top / span));
      const idx = RANGES.findIndex((c) => p >= c.from && p < c.to);
      setActive(idx < 0 ? 0 : idx);
      RANGES.forEach((c, k) => {
        const el = railRefs.current[k];
        if (el) el.style.height = `${Math.min(100, Math.max(0, ((p - c.from) / (c.to - c.from)) * 100))}%`;
      });
      if (video && video.duration) {
        // alvo sempre atualizado; o seek só sai quando o anterior terminou (onSeeked retoma)
        target = p * (video.duration - 0.05);
        if (!video.seeking && Math.abs(video.currentTime - target) > 0.01) video.currentTime = target;
      }
    };
    const tick = () => { if (!queued) { queued = true; requestAnimationFrame(frame); } };
    const onSeeked = () => { if (video && Math.abs(video.currentTime - target) > 0.02) tick(); };

    window.addEventListener('scroll', tick, { passive: true });
    window.addEventListener('resize', tick);
    video?.addEventListener('seeked', onSeeked);
    tick();
    return () => {
      window.removeEventListener('scroll', tick);
      window.removeEventListener('resize', tick);
      video?.removeEventListener('seeked', onSeeked);
    };
  }, [videoReady]);

  return (
    <section
      ref={storyRef}
      aria-labelledby="ceu-a-sapata-titulo"
      className="relative bg-[#00214A]"
      style={{ height: '520vh' }}
    >
      <div className="sticky top-0 h-svh overflow-hidden" style={{ height: '100svh' }}>
        {/* pôsteres por capítulo: aparecem na hora e cobrem Save-Data / vídeo ainda baixando */}
        {CHAPTERS.map((c, i) => (
          <img
            key={c.id}
            src={`${ASSETS}/${c.id}-${format}.webp`}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
            style={{ opacity: !videoReady && active === i ? 1 : 0 }}
          />
        ))}
        <video
          ref={videoRef}
          muted
          playsInline
          preload="none"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          style={{ opacity: videoReady ? 1 : 0 }}
        />

        <div
          className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,rgba(0,33,74,.55)_0%,rgba(0,33,74,0)_22%,rgba(0,33,74,0)_45%,rgba(0,33,74,.9)_100%)] lg:bg-[linear-gradient(90deg,rgba(0,33,74,.86)_0%,rgba(0,33,74,.35)_42%,rgba(0,33,74,0)_65%)]"
          aria-hidden="true"
        />

        <span className="absolute z-[2] top-[116px] lg:top-[150px] left-5 lg:left-[max(40px,calc((100vw-80rem)/2+24px))] text-white text-xs font-semibold tracking-wide rounded-full border border-white/20 bg-[#00142D]/50 backdrop-blur px-3 py-1.5">
          Obra do Hotel Nacional · Brasília
        </span>

        <h2 id="ceu-a-sapata-titulo" className="sr-only">
          Do céu à sapata: o aço da BR Aço na fundação do Hotel Nacional, em Brasília
        </h2>

        {CHAPTERS.map((c, i) => (
          <div
            key={c.id}
            className={`absolute inset-x-0 bottom-0 z-[2] pl-[22px] pr-[76px] pb-12 lg:pr-0 lg:pb-0 lg:top-0 lg:right-auto lg:flex lg:flex-col lg:justify-center lg:max-w-[640px] lg:pl-[max(40px,calc((100vw-80rem)/2+24px))] text-white transition-all duration-500 ${active === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
          >
            <span className="inline-flex items-center gap-2 text-[#F2B705] font-extrabold text-[12.5px] tracking-[.12em] uppercase mb-2.5">
              <b className="grid place-items-center w-6 h-6 rounded-full bg-[#F2B705] text-[#14161C] font-display text-xs tracking-normal">{i + 1}</b>
              {c.kicker}
            </span>
            <h3 className="font-display font-bold tracking-tight text-[clamp(32px,9vw,64px)] leading-[1.02] max-w-[12em] [&_em]:not-italic [&_em]:text-[#F2B705]">
              {c.title}
            </h3>
            <p className="mt-2.5 text-[16.5px] lg:text-lg text-white/85 max-w-[30em]">{c.text}</p>
            {i === CHAPTERS.length - 1 && (
              <button
                type="button"
                onClick={handleWhatsApp}
                tabIndex={active === i ? 0 : -1}
                className="mt-6 inline-flex items-center gap-2 self-start rounded-[14px] bg-[#F2B705] hover:brightness-105 text-[#14161C] font-bold text-[17px] px-6 py-4 shadow-[0_10px_24px_-10px_rgba(242,183,5,.7)] transition"
              >
                Enviar minha planta no WhatsApp
                <ArrowRight className="w-5 h-5" />
              </button>
            )}
          </div>
        ))}

        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-[2] grid gap-2.5" aria-hidden="true">
          {CHAPTERS.map((c, i) => (
            <i key={c.id} className="relative block w-1 h-[26px] rounded-sm bg-white/30 overflow-hidden">
              <span ref={(el) => { railRefs.current[i] = el; }} className="absolute inset-x-0 top-0 h-0 bg-[#F2B705]" />
            </i>
          ))}
        </div>

        {started && !videoReady && loadPct > 0 && (
          <div className="absolute left-0 bottom-0 z-[3] h-[3px] bg-[#F2B705] transition-[width] duration-200" style={{ width: `${loadPct}%` }} aria-hidden="true" />
        )}
      </div>
    </section>
  );
};

export default CeuASapataSection;
