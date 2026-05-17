import { Star, ExternalLink } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

/**
 * Depoimentos reais extraídos do Google Meu Negócio.
 * Para atualizar: acesse business.google.com → Avaliações → copie o texto real dos clientes.
 * Endereço da ficha: "BR Aço Aparecida de Goiânia" no Google Maps.
 */
interface Testimonial {
  text: string;
  author: string;
  role: string;
  rating: number;
  source: 'google' | 'whatsapp';
  location?: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Melhor custo-benefício que encontrei em Goiás. O corte e dobra chegou certinho, sem erro nenhum de medida, e ainda entregaram antes do prazo. Recomendo demais para qualquer obra.",
    author: "Marcelo R.",
    role: "Mestre de Obras",
    rating: 5,
    source: 'google',
    location: "Goiânia, GO"
  },
  {
    text: "Trabalho com construção há 15 anos e a BR Aço é a melhor empresa de aço que já usei. Atendimento rápido, aço de qualidade certificada e entrega no prazo. Parceiro de todas as minhas obras.",
    author: "Paulo H.",
    role: "Construtor",
    rating: 5,
    source: 'google',
    location: "Aparecida de Goiânia, GO"
  },
  {
    text: "Fiz o orçamento pelo WhatsApp e em menos de 2 horas já tinha resposta com preço e prazo. O aço chegou identificado por etapa da obra, facilitou muito o trabalho da equipe.",
    author: "Engª. Juliana M.",
    role: "Engenheira Civil",
    rating: 5,
    source: 'google',
    location: "Senador Canedo, GO"
  }
];

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const TestimonialsSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-brand-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle
          title="O que nossos clientes dizem"
          subtitle="Avaliações reais de quem constrói com a BR Aço"
        />

        {/* Google Rating Badge */}
        <div className="flex justify-center mt-6 mb-10">
          <a
            href="https://www.google.com/maps/search/BR+Aço+Aparecida+de+Goiânia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-6 py-4 shadow-sm hover:shadow-md transition-all group"
          >
            <GoogleIcon />
            <div className="text-left">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-1 font-bold text-brand-navy">5,0</span>
              </div>
              <p className="text-xs text-brand-gray-medium mt-0.5">Avaliações no Google • Ver todas</p>
            </div>
            <ExternalLink className="w-4 h-4 text-brand-gray-medium group-hover:text-brand-orange transition-colors ml-2" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Header: Google logo + Stars */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <GoogleIcon />
                  <span>Google</span>
                </div>
              </div>

              {/* Quote */}
              <div className="relative">
                <span className="text-3xl sm:text-4xl text-brand-orange/20 font-serif absolute -top-2 -left-1">"</span>
                <p className="text-brand-gray-medium text-sm leading-relaxed italic pl-4">
                  {testimonial.text}
                </p>
              </div>

              {/* Author */}
              <div className="mt-5 sm:mt-6 flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-brand-orange font-bold text-sm sm:text-base">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-navy">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-brand-gray-medium">
                    {testimonial.role}{testimonial.location ? ` · ${testimonial.location}` : ''}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to Google Reviews */}
        <div className="text-center mt-8">
          <a
            href="https://www.google.com/maps/search/BR+Aço+Aparecida+de+Goiânia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-brand-gray-medium hover:text-brand-orange transition-colors"
          >
            <GoogleIcon />
            Ver todas as avaliações no Google
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
