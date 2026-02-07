interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">{title}</h2>
      <p className="text-lg text-brand-gray-medium mt-3 max-w-2xl mx-auto">{subtitle}</p>
      <div className="w-16 h-1 bg-brand-orange mx-auto mt-4 rounded-full" />
    </div>
  );
};

export default SectionTitle;
