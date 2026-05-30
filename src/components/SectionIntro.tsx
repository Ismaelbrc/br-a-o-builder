import { ReactNode } from 'react';
import Eyebrow from './Eyebrow';

interface SectionIntroProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  /** Alinhamento. Default editorial à esquerda. */
  align?: 'left' | 'center';
  tone?: 'default' | 'light';
  className?: string;
}

/**
 * SectionIntro — abertura editorial de seção.
 * Eyebrow mono + tick, título display grande, descrição opcional.
 * Assimétrico à esquerda por padrão (substitui o SectionTitle centralizado).
 */
export default function SectionIntro({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'default',
  className = '',
}: SectionIntroProps) {
  const isCenter = align === 'center';
  const titleColor = tone === 'light' ? 'text-white' : 'text-brand-navy';
  const descColor = tone === 'light' ? 'text-white/70' : 'text-brand-gray-medium';

  return (
    <div
      className={`${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'} ${className}`}
    >
      <Eyebrow tone={tone === 'light' ? 'light' : 'default'} className={isCenter ? 'justify-center' : ''}>
        {eyebrow}
      </Eyebrow>
      <h2 className={`text-display-md ${titleColor} mt-5 text-balance`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base sm:text-lg ${descColor} mt-4 leading-relaxed ${isCenter ? 'mx-auto' : ''} max-w-2xl`}>
          {description}
        </p>
      )}
    </div>
  );
}
