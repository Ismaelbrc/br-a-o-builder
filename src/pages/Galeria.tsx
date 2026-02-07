import { useState } from 'react';
import { Play, X, Image as ImageIcon, Film } from 'lucide-react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';

// Import images
import ctaBackground from '@/assets/cta-background.jpg';
import productsBackground from '@/assets/products-background.jpg';
import heroWarehouse from '@/assets/hero-warehouse.png';

const photos = [
  { id: 1, src: productsBackground, alt: 'Vista geral do galpão industrial', category: 'Estrutura' },
  { id: 2, src: ctaBackground, alt: 'Operador na máquina de corte e dobra', category: 'Produção' },
  { id: 3, src: heroWarehouse, alt: 'Área de armazenamento de vergalhões', category: 'Estoque' },
  { id: 4, src: productsBackground, alt: 'Ponte rolante em operação', category: 'Equipamentos' },
  { id: 5, src: ctaBackground, alt: 'Máquina de corte automático', category: 'Produção' },
  { id: 6, src: heroWarehouse, alt: 'Expedição de materiais', category: 'Logística' },
];

const videos = [
  { 
    id: 1, 
    thumbnail: productsBackground, 
    title: 'Processo de Corte e Dobra', 
    duration: '2:30',
    videoSrc: '/hero-video.mp4'
  },
  { 
    id: 2, 
    thumbnail: ctaBackground, 
    title: 'Tour pela Fábrica BR.AÇO', 
    duration: '5:15',
    videoSrc: '/hero-video.mp4'
  },
  { 
    id: 3, 
    thumbnail: heroWarehouse, 
    title: 'Produção de Treliças', 
    duration: '1:45',
    videoSrc: '/hero-video.mp4'
  },
];

const Galeria = () => {
  const [activeTab, setActiveTab] = useState<'fotos' | 'videos'>('fotos');
  const [selectedMedia, setSelectedMedia] = useState<{ type: 'photo' | 'video'; src: string; title?: string } | null>(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Galeria de <span className="text-brand-orange">Fotos e Vídeos</span>
            </h1>
            <p className="text-white/80 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
              Conheça nossa estrutura industrial, equipamentos de última geração e processos de produção automatizados.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8 sm:py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Tab Navigation */}
          <div className="flex justify-center gap-4 mb-8 sm:mb-12">
            <button
              onClick={() => setActiveTab('fotos')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === 'fotos'
                  ? 'bg-brand-orange text-white'
                  : 'bg-gray-100 text-brand-gray-medium hover:bg-gray-200'
              }`}
            >
              <ImageIcon className="w-5 h-5" />
              Fotos
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === 'videos'
                  ? 'bg-brand-orange text-white'
                  : 'bg-gray-100 text-brand-gray-medium hover:bg-gray-200'
              }`}
            >
              <Film className="w-5 h-5" />
              Vídeos
            </button>
          </div>

          {/* Photos Grid */}
          {activeTab === 'fotos' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {photos.map((photo) => (
                <div
                  key={photo.id}
                  className="relative group overflow-hidden rounded-xl cursor-pointer"
                  onClick={() => setSelectedMedia({ type: 'photo', src: photo.src, title: photo.alt })}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="text-xs text-brand-orange font-medium uppercase tracking-wide">{photo.category}</span>
                      <p className="text-white text-sm mt-1">{photo.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Videos Grid */}
          {activeTab === 'videos' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="relative group overflow-hidden rounded-xl cursor-pointer"
                  onClick={() => setSelectedMedia({ type: 'video', src: video.videoSrc, title: video.title })}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-brand-orange flex items-center justify-center transform group-hover:scale-110 transition-transform">
                      <Play className="w-7 h-7 text-white ml-1" fill="white" />
                    </div>
                  </div>
                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded">
                    {video.duration}
                  </div>
                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white font-medium">{video.title}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedMedia && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-brand-orange transition-colors z-10"
            onClick={() => setSelectedMedia(null)}
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            {selectedMedia.type === 'photo' ? (
              <img
                src={selectedMedia.src}
                alt={selectedMedia.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            ) : (
              <video
                src={selectedMedia.src}
                controls
                autoPlay
                className="w-full h-auto max-h-[80vh] rounded-lg"
              />
            )}
            {selectedMedia.title && (
              <p className="text-white text-center mt-4 text-lg">{selectedMedia.title}</p>
            )}
          </div>
        </div>
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
            href="https://wa.me/5562982858558?text=Olá!%20Gostaria%20de%20agendar%20uma%20visita%20à%20fábrica."
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

export default Galeria;
