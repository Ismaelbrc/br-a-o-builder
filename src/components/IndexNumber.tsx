interface IndexNumberProps {
  /** Número (1 → "01"). */
  value: number;
  tone?: 'default' | 'light';
  className?: string;
}

/**
 * IndexNumber — numeral fantasma editorial (01 / 02 / 03) em display.
 * Contornado e de baixa opacidade, evoca marcação de prancha de engenharia.
 */
export default function IndexNumber({ value, tone = 'default', className = '' }: IndexNumberProps) {
  const color = tone === 'light' ? 'text-white/15' : 'text-brand-navy/10';
  return (
    <span
      aria-hidden="true"
      className={`font-display font-bold tabular-nums leading-none select-none pointer-events-none ${color} ${className}`}
    >
      {String(value).padStart(2, '0')}
    </span>
  );
}
