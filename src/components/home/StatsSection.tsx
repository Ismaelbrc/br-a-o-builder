import { useEffect, useRef, useState } from 'react';

interface StatItem {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

const stats: StatItem[] = [
  { value: 10000, prefix: '+', label: 'Casas Construídas' },
  { value: 2, suffix: ' dias', label: 'Prazo de Entrega' },
  { value: 50, suffix: '%', label: 'Economia em Mão de Obra' },
  { value: 100, suffix: '%', label: 'Produção Automatizada' },
];

const formatNumber = (num: number): string => {
  return num.toLocaleString('pt-BR');
};

const AnimatedCounter = ({ stat, isVisible }: { stat: StatItem; isVisible: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const startTime = performance.now();
    const endValue = stat.value;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease-out function
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(easeOut * endValue);
      
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, stat.value]);

  return (
    <span>
      {stat.prefix}{formatNumber(count)}{stat.suffix}
    </span>
  );
};

const StatsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-20"
      style={{ backgroundColor: 'hsl(var(--brand-navy))' }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`text-center ${index < stats.length - 1 ? 'lg:border-r lg:border-white/10' : ''}`}
            >
              <div className="text-4xl md:text-5xl font-bold text-brand-orange">
                <AnimatedCounter stat={stat} isVisible={isVisible} />
              </div>
              <p className="text-sm md:text-base text-gray-400 uppercase tracking-wider mt-2 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
