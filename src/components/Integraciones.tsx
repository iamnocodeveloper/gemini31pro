import { useEffect, useRef } from 'react';
import { gsap } from '../lib/gsap';
import { Database, Server, Webhook } from 'lucide-react';

export default function Integraciones() {
  const containerRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".dash-line", 
        { strokeDashoffset: 1000 },
        {
          strokeDashoffset: 0,
          duration: 3,
          ease: "none",
          repeat: -1,
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 px-4 bg-dark text-paper border-y-2 border-dark">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display italic text-5xl mb-6">Conexión Universal.</h2>
        <p className="font-mono text-paper/60 mb-16 max-w-xl mx-auto">Una arquitectura conectada de forma nativa. Sin intermediarios, latencia mínima.</p>
        
        <div className="relative h-64 flex items-center justify-between w-full max-w-2xl mx-auto">
          {/* Nodos */}
          <div className="z-10 bg-primary p-6 border-2 border-paper rounded-none relative"><Database size={32} /></div>
          <div className="z-10 bg-paper text-dark p-8 border-2 border-primary rotate-45"><Server size={40} className="-rotate-45" /></div>
          <div className="z-10 bg-dark p-6 border-2 border-paper"><Webhook size={32} /></div>

          {/* Animación SVG Vectorial pura, sin dependencias extra */}
          <svg ref={containerRef} className="absolute inset-0 w-full h-full -z-0 pointer-events-none" preserveAspectRatio="none">
            <path d="M 50 128 L 300 128 L 600 128" className="dash-line" stroke="#E63B2E" strokeWidth="4" strokeDasharray="10 20" fill="none" />
          </svg>
        </div>
      </div>
    </section>
  );
}
