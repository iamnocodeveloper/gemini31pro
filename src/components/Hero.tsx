import { useEffect, useRef } from 'react';
import { gsap } from '../lib/gsap';
import { ArrowRight, Box } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger de entrada
      gsap.from(".hero-elem", {
        y: 60,
        opacity: 0,
        duration: 1.4,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2
      });

      // Animación 3D del Dashboard al hacer scroll
      if (dashboardRef.current) {
        gsap.to(dashboardRef.current, {
          rotateX: 0,
          y: -40,
          scale: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom center",
            scrub: 1.5,
          }
        });
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="pt-40 pb-20 px-4 min-h-screen flex flex-col items-center justify-center brutal-radial overflow-hidden">
      <div className="max-w-5xl mx-auto text-center z-10 mb-16">
        <div className="hero-elem inline-flex items-center gap-2 border border-dark px-4 py-2 bg-offwhite text-sm font-mono mb-8 font-bold">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          SISTEMA BAAS V2.1 ONLINE
        </div>
        <h1 className="hero-elem font-display italic text-6xl md:text-8xl leading-none text-dark mb-6">
          Acelera el despliegue. <br />
          <span className="text-primary not-italic font-sans font-bold uppercase tracking-tighter">Multiplica la conversión.</span>
        </h1>
        <p className="hero-elem font-mono text-lg md:text-xl text-dark/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          La sala de control definitiva para negocios y creadores. Despliega infraestructura backend y gestiona clientes en una sola arquitectura de alto rendimiento.
        </p>
        <div className="hero-elem flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto cursor-pointer bg-primary text-paper px-8 py-4 font-bold font-sans text-lg uppercase tracking-wider border-2 border-dark btn-glow flex items-center justify-center gap-2">
            Comenzar prueba gratuita
            <ArrowRight size={20} />
          </button>
          <button className="w-full sm:w-auto cursor-pointer bg-transparent text-dark px-8 py-4 font-bold font-mono border-2 border-dark hover:bg-dark hover:text-paper transition-colors flex items-center justify-center gap-2">
            <Box size={20} />
            Ver arquitectura
          </button>
        </div>
      </div>

      {/* Mockup 3D */}
      <div className="w-full max-w-6xl mx-auto perspective-[2000px] z-20">
        <div 
          ref={dashboardRef} 
          className="hero-elem border-4 border-dark bg-dark text-paper p-2 shadow-2xl origin-top"
          style={{ transform: "rotateX(12deg) scale(0.95)" }}
        >
          <div className="w-full h-8 border-b border-paper/20 flex items-center gap-2 px-4 mb-4">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <div className="w-3 h-3 rounded-full bg-paper/30"></div>
            <div className="w-3 h-3 rounded-full bg-paper/30"></div>
            <div className="ml-auto font-mono text-xs text-paper/50">ADMIN / KOONETXA_CORE</div>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=85&auto=format&fit=crop" 
            alt="Dashboard representation" 
            className="w-full h-[300px] md:h-[600px] object-cover opacity-80"
            loading="lazy" decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
