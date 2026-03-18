import { useEffect, useRef, useState } from 'react';
import { gsap } from '../../lib/gsap';

export default function ToggleCard() {
  const [active, setActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => setActive(p => !p), 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".t-ball", { x: active ? 48 : 0, duration: 0.4, ease: "back.out(1.7)" });
    }, containerRef);
    return () => ctx.revert();
  }, [active]);

  return (
    <div ref={containerRef} className="card-elevate bg-dark text-paper border-2 border-dark p-8 col-span-1 flex flex-col justify-between">
      <div className="mb-12">
        <h3 className="font-sans font-bold text-3xl uppercase tracking-tighter mb-2">Centralizado</h3>
        <p className="font-mono text-paper/70">Un solo switch controla toda la gestión operativa.</p>
      </div>
      <div className="w-24 h-12 bg-paper/10 border-2 border-primary rounded-full p-1 flex items-center cursor-pointer">
        <div className={`t-ball w-9 h-9 border-2 border-dark rounded-full ${active ? 'bg-primary' : 'bg-paper'}`}></div>
      </div>
    </div>
  );
}
