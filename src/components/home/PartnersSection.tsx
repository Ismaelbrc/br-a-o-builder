import SectionIntro from '@/components/SectionIntro';

const partners = [
  'Opus',
  'FGR',
  'Direcional',
  'Terral',
  'Base',
  'DSA Engenharia',
  'EBM',
  'GPL',
  'Elmo',
  'Top Construtora',
  'Áurea Engenharia',
  'Loft',
  'Yutá Inc',
  'MCA Construtora',
  'EA Urbanismo',
  'Lotus',
];

const PartnersSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionIntro
          eyebrow="Parceiros"
          title="Construtoras que constroem com a BR Aço."
        />

        {/* Logo-wall em folha hairline */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-px bg-hairline border border-hairline rounded-2xl overflow-hidden">
          {partners.map((partner) => (
            <div
              key={partner}
              className="bg-card px-4 py-8 flex items-center justify-center transition-colors hover:bg-secondary"
            >
              <span className="font-display text-base sm:text-lg font-semibold text-brand-navy/70 text-center leading-tight">
                {partner}
              </span>
            </div>
          ))}
        </div>

        <p className="label-eyebrow text-brand-gray-medium mt-8">
          E muitos outros parceiros que confiam na qualidade BR Aço
        </p>
      </div>
    </section>
  );
};

export default PartnersSection;
