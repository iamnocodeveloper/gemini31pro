import { useEffect, useRef } from 'react';
import { gsap } from '../../lib/gsap';

export default function ProgressCard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef({ val: 0 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".p-bar", 
        { width: "0%" },
        {
          width: "100%",
          duration: 2.5,
          ease: "power2.out",
          scrollTrigger: { trigger: containerRef.current, start: "top 80%" }
        }
      );
      
      gsap.to(percentRef.current, {
        val: 100,
        duration: 2.5,
        ease: "power2.out",
        onUpdate: function() {
          const el = document.querySelector('.p-text');
          if (el) el.textContent = Math.round(percentRef.current.val).toString();
        },
        scrollTrigger: { trigger: containerRef.current, start: "top 80%" }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="card-elevate bg-primary text-paper border-2 border-dark p-8 col-span-1 md:col-span-3">
      <div className="md:flex justify-between items-end mb-8">
        <div>
          <h3 className="font-sans font-bold text-3xl uppercase tracking-tighter mb-2">Velocidad Radical</h3>
          <p className="font-mono text-paper/90 max-w-xl">Desde el prototipo hasta producción con 10x menos fricción en el código.</p>
        </div>
        <div className="font-display text-6xl italic mt-6 md:mt-0"><span className="p-text">0</span>%</div>
      </div>
      <div className="w-full h-8 border-2 border-dark bg-dark/20 p-1">
        <div className="p-bar h-full bg-paper w-0"></div>
      </div>
    </div>
  );
}
