import { useEffect, useRef } from 'react';
import { gsap } from '../../lib/gsap';

export default function ChartCard() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".b-bar", 
        { scaleY: 0 },
        {
          scaleY: 1,
          stagger: 0.1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: containerRef.current, start: "top 85%" }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const data = [30, 50, 45, 70, 60, 90, 100];

  return (
    <div ref={containerRef} className="card-elevate bg-offwhite border-2 border-dark p-8 col-span-1 md:col-span-2 flex flex-col justify-between">
      <div className="mb-8">
        <h3 className="font-sans font-bold text-3xl uppercase tracking-tighter mb-2">IA para Conversión</h3>
        <p className="font-mono text-dark/70">Arquitectura predictiva que adapta la UI para maximizar retención al instante.</p>
      </div>
      <div className="flex items-end gap-2 h-40 w-full border-b-2 border-dark overflow-hidden">
        {data.map((h, i) => (
          <div key={i} className="b-bar bg-primary w-full origin-bottom" style={{ height: `${h}%` }}></div>
        ))}
      </div>
    </div>
  );
}
