import { Star } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

interface Testimonial {
  text: string;
  author: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    text: "A BR Aço transformou o cronograma da nossa obra. O corte e dobra chegou no prazo, sem nenhum erro de medida. Economia real de mão de obra.",
    author: "Carlos Mendes",
    role: "Engenheiro Civil",
    company: "CM Construtora"
  },
  {
    text: "Parceria de anos. A BR Aço entende o ritmo da obra e nunca nos deixou na mão. Qualidade do aço é impecável e o suporte técnico faz toda diferença.",
    author: "Marcos Oliveira",
    role: "Gerente de Suprimentos",
    company: "MO Engenharia"
  },
  {
    text: "Melhor custo-benefício de Goiás. Entrega rápida, aço de qualidade e parcelamento que cabe no orçamento. Parceiro de todas as nossas obras.",
    author: "Roberto Silva",
    role: "Construtor",
    company: "RS Empreendimentos"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-brand-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle 
          title="O que nossos clientes dizem"
          subtitle="A confiança de quem constrói com a BR Aço"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-100 shadow-sm"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-4 h-4 sm:w-5 sm:h-5 fill-brand-orange text-brand-orange" 
                  />
                ))}
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
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
