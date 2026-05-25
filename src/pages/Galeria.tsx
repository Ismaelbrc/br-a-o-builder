import { useState } from 'react';
import { Play, X, ExternalLink, Instagram, Youtube } from 'lucide-react';
import Layout from '@/components/Layout';
import { useSEO } from '@/hooks/useSEO';

// ── YouTube Videos ─────────────────────────────────────────────────────────
// type: 'short' = vertical 9:16 | 'video' = horizontal 16:9
const youtubeVideos = [
  { id: 'O3CO-OQ8qWY', type: 'video' as const, title: 'BR Aço – Processo Industrial' },
  { id: 'ShdfFK6ec-U', type: 'video' as const, title: 'BR Aço – Conheça nossa estrutura' },
  { id: 'dIUSTgllJ34', type: 'short' as const, title: 'Corte e Dobra em ação' },
  { id: 'J2CeekgjQCg', type: 'short' as const, title: 'Produção de vergalhão' },
  { id: '_nYe9ASDdE4', type: 'short' as const, title: 'Máquinas automáticas' },
  { id: 'Yrm6plm19wQ', type: 'short' as const, title: 'Expedição de aço' },
  { id: 'iwLjiFrGaZg', type: 'short' as const, title: 'Treliças metálicas' },
  { id: 'R6QEqVdwmEA', type: 'short' as const, title: 'Estoque e logística' },
  { id: 'k8CJLwesvi4', type: 'short' as const, title: 'BR Aço – Goiás' },
];

// ── Instagram Posts ─────────────────────────────────────────────────────────
// Para adicionar um post: copie a URL do post no Instagram e cole em href abaixo.
// Formato: https://www.instagram.com/p/XXXXXXXXX/
const instagramPosts = [
  { href: 'https://www.instagram.com/grupobraco_/', placeholder: true },
];

// ── Player Modal ────────────────────────────────────────────────────────────
function VideoModal({ videoId, title, onClose }: { videoId: string; title: string; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-white hover:text-brand-orange transition-colors z-10 bg-black/50 rounded-full p-2"
        onClick={onClose}
        aria-label="Fechar"
      >
        <X className="w-6 h-6" />
      </button>
      <div
        className="w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
        <p className="text-white text-center mt-4 font-medium">{title}</p>
      </div>
    </div>
  );
}

// ── Video Card ──────────────────────────────────────────────────────────────
function VideoCard({ video, onPlay }: { video: typeof youtubeVideos[0]; onPlay: () => void }) {
  const isShort = video.type === 'short';
  const thumbUrl = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

  return (
    <div
      className="relative group overflow-hidden rounded-xl cursor-pointer bg-black shadow-md hover:shadow-xl transition-shadow"
      onClick={onPlay}
    >
      <div className={isShort ? 'aspect-[9/16]' : 'aspect-video'}>
        <img
          src={thumbUrl}
          alt={video.title}
          className="w-full h-full object-cover opacity-90 group-hover:opacity-75 transition-opacity"
        />
      </div>

      {/* Play overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-brand-orange/90 group-hover:bg-brand-orange flex items-center justify-center transform group-hover:scale-110 transition-all shadow-lg">
          <Play className="w-6 h-6 text-white ml-1" fill="white" />
        </div>
      </div>

      {/* Badge short/video */}
      <div className="absolute top-3 left-3">
        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${isShort ? 'bg-brand-orange text-white' : 'bg-white/90 text-brand-navy'}`}>
          {isShort ? 'Short' : 'Vídeo'}
        </span>
      </div>

      {/* Title bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
        <p className="text-white text-sm font-medium line-clamp-2">{video.title}</p>
      </div>
    </div>
  );
}

// ── Main Component ──────────────────────────────────────────────────────────
const Galeria = () => {
  const [activeTab, setActiveTab] = useState<'fotos' | 'videos'>('fotos');
  const [activeVideo, setActiveVideo] = useState<typeof youtubeVideos[0] | null>(null);

  useSEO({
    title: 'Galeria | BR Aço – Fotos e Vídeos da Fábrica',
    description: 'Veja fotos e vídeos da fábrica da BR Aço: máquinas de corte e dobra, estoque de vergalhão, treliças e toda nossa estrutura industrial em Aparecida de Goiânia.',
    canonical: 'https://grupobraco.com.br/galeria',
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Galeria de <span className="text-brand-orange">Fotos e Vídeos</span>
          </h1>
          <p className="text-white/80 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
            Conheça nossa estrutura industrial, equipamentos de última geração e o processo de produção automatizado da BR Aço.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8 sm:py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Tab Navigation */}
          <div className="flex justify-center gap-3 mb-8 sm:mb-12">
            <button
              onClick={() => setActiveTab('fotos')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all text-sm ${
                activeTab === 'fotos'
                  ? 'bg-brand-orange text-white shadow-md'
                  : 'bg-secondary text-muted-foreground hover:bg-muted'
              }`}
            >
              <Instagram className="w-4 h-4" />
              Instagram
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all text-sm ${
                activeTab === 'videos'
                  ? 'bg-brand-orange text-white shadow-md'
                  : 'bg-secondary text-muted-foreground hover:bg-muted'
              }`}
            >
              <Youtube className="w-4 h-4" />
              YouTube
            </button>
          </div>

          {/* ── Instagram Tab ─────────────────────────────────────────── */}
          {activeTab === 'fotos' && (
            <div>
              {/* Header with Instagram link */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center">
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">@grupobraco_</p>
                    <p className="text-muted-foreground text-xs">Instagram oficial</p>
                  </div>
                </div>
                <a
                  href="https://www.instagram.com/grupobraco_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-brand-orange hover:underline"
                >
                  Ver perfil
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Instagram embed via official script */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Embed individual Instagram posts below.
                    Para adicionar um post: vá no Instagram → clique nos 3 pontos do post → "Incorporar"
                    e cole o <blockquote> aqui dentro de um <div> */}
                <InstagramEmbed postUrl="https://www.instagram.com/grupobraco_/" isProfile />
              </div>

              {/* CTA to Instagram */}
              <div className="mt-10 text-center">
                <a
                  href="https://www.instagram.com/grupobraco_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white font-semibold rounded-full px-8 py-3 transition-opacity hover:opacity-90"
                >
                  <Instagram className="w-5 h-5" />
                  Ver todas as fotos no Instagram
                </a>
              </div>
            </div>
          )}

          {/* ── YouTube Tab ────────────────────────────────────────────── */}
          {activeTab === 'videos' && (
            <div>
              {/* Header with YouTube link */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                    <Youtube className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Grupo BR Aço</p>
                    <p className="text-muted-foreground text-xs">Canal oficial no YouTube</p>
                  </div>
                </div>
                <a
                  href="https://www.youtube.com/@grupobraco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-red-600 hover:underline"
                >
                  Ver canal
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Videos grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {youtubeVideos.map((video) => (
                  <VideoCard
                    key={video.id}
                    video={video}
                    onPlay={() => setActiveVideo(video)}
                  />
                ))}
              </div>

              {/* CTA to channel */}
              <div className="mt-10 text-center">
                <a
                  href="https://www.youtube.com/@grupobraco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full px-8 py-3 transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                  Ver todos os vídeos no YouTube
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Video Player Modal */}
      {activeVideo && (
        <VideoModal
          videoId={activeVideo.id}
          title={activeVideo.title}
          onClose={() => setActiveVideo(null)}
        />
      )}

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-brand-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
            Quer visitar nossa fábrica?
          </h2>
          <p className="text-white/80 mt-3 max-w-xl mx-auto">
            Agende uma visita técnica e conheça de perto nossa estrutura e processos de produção.
          </p>
          <a
            href="https://wa.me/556296472423?text=%5Bsrc%3Asite%5D%20Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20visita%20%C3%A0%20f%C3%A1brica%20da%20BR%20A%C3%A7o."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold rounded-full px-8 py-4 transition-colors"
          >
            Agendar Visita
          </a>
        </div>
      </section>
    </Layout>
  );
};

// ── Instagram Embed Component ───────────────────────────────────────────────
// Exibe um card linkando ao perfil do Instagram.
// Para usar posts individuais: substitua isProfile={true} pelo embed oficial do Instagram.
// Instruções: abra o post no Instagram → menu (...) → "Incorporar" → copie o <blockquote>
// e adicione em um novo <div> dentro do grid acima.
function InstagramEmbed({ postUrl, isProfile }: { postUrl: string; isProfile?: boolean }) {
  if (isProfile) {
    return (
      <div className="col-span-full">
        <div className="rounded-2xl border border-border bg-card overflow-hidden">
          {/* Gradient banner */}
          <div className="h-24 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center">
            <Instagram className="w-12 h-12 text-white opacity-80" />
          </div>
          <div className="p-6 text-center">
            <p className="font-bold text-lg text-foreground">@grupobraco_</p>
            <p className="text-muted-foreground text-sm mt-1">
              Acompanhe nosso Instagram para ver as últimas novidades, obras atendidas e bastidores da produção.
            </p>
            <a
              href={postUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white font-semibold rounded-full px-7 py-2.5 text-sm hover:opacity-90 transition-opacity"
            >
              <Instagram className="w-4 h-4" />
              Seguir no Instagram
            </a>
          </div>
        </div>

        <p className="text-center text-muted-foreground text-xs mt-4">
          Para embedar posts individuais, acesse o Instagram → post → menu (...) → Incorporar, e adicione o código no arquivo{' '}
          <code className="font-mono bg-muted px-1 rounded">src/pages/Galeria.tsx</code>
        </p>
      </div>
    );
  }
  return null;
}

export default Galeria;
