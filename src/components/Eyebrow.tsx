interface EyebrowProps {
  children: React.ReactNode;
  /** Cor do texto. Default herda (foreground sutil). Use "light" sobre fundos escuros. */
  tone?: 'default' | 'light' | 'orange';
  className?: string;
}

/**
 * Eyebrow — label técnica em monoespaçada com tick de medição.
 * Substitui o subtítulo genérico por um marcador editorial de engenharia.
 */
export default function Eyebrow({ children, tone = 'default', className = '' }: EyebrowProps) {
  const toneClass =
    tone === 'light'
      ? 'text-white/70'
      : tone === 'orange'
      ? 'text-brand-orange'
      : 'text-brand-gray-medium';

  const tickClass = tone === 'light' ? 'bg-white/40' : 'bg-brand-orange';

  return (
    <span className={`inline-flex items-center gap-2.5 label-eyebrow ${toneClass} ${className}`}>
      <span className={`h-px w-6 ${tickClass}`} aria-hidden="true" />
      {children}
    </span>
  );
}
