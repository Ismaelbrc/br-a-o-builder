import { useEffect, useRef, useState, ReactNode, ElementType } from 'react';

interface RevealProps {
  children: ReactNode;
  /** Atraso de stagger em ms. */
  delay?: number;
  /** Tag a renderizar (default: div). */
  as?: ElementType;
  className?: string;
}

/**
 * Reveal — wrapper de scroll-reveal usando IntersectionObserver.
 * Easing refinado + stagger via prop delay. Respeita prefers-reduced-motion
 * (a regra CSS em index.css força visibilidade nesse caso).
 */
export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '' }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
