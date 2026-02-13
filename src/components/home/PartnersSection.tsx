import SectionTitle from '@/components/SectionTitle';

const partners = [
  'Opus',
  'FGR',
  'Direcional',
  'Terral',
  'Base',
  'DSA Engenharia',
  'EBM',
  'New Inc',
  'Elmo',
  'A.B.V',
  'Áurea Engenharia',
  'Loft',
  'Yutá Inc',
  'MCA Construtora',
  'EA Urbanismo',
  'Lotus',
];

const PartnersSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle
          title="Confiam em Nós"
          subtitle="Construtoras e incorporadoras que escolhem a BR Aço como parceira"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-8 sm:mt-12">
          {partners.map((partner) => (
            <div
              key={partner}
              className="bg-background border border-border rounded-xl px-4 py-6 flex items-center justify-center hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              <span className="text-sm sm:text-base font-bold text-foreground text-center leading-tight">
                {partner}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-8">
          E muitos outros parceiros que confiam na qualidade BR Aço para suas obras.
        </p>
      </div>
    </section>
  );
};

export default PartnersSection;
