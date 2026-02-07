interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div className="text-center px-4 sm:px-0">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brand-navy">{title}</h2>
      <p className="text-sm sm:text-base md:text-lg text-brand-gray-medium mt-2 sm:mt-3 max-w-2xl mx-auto">{subtitle}</p>
      <div className="w-12 sm:w-16 h-1 bg-brand-orange mx-auto mt-3 sm:mt-4 rounded-full" />
    </div>
  );
};

export default SectionTitle;
