import { ArrowRight } from 'lucide-react';

export default function CtaFinal() {
  return (
    <section className="py-24 px-4 brutal-radial">
      <div className="max-w-5xl mx-auto bg-primary text-paper border-4 border-dark p-12 md:p-24 text-center card-elevate relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1549479367-8f8303e33b5c?w=1920&q=85&auto=format&fit=crop')] mix-blend-overlay opacity-10 pointer-events-none"></div>
        <div className="relative z-10">
          <h2 className="font-display italic text-5xl md:text-8xl mb-6">Activa tu base.</h2>
          <p className="font-mono text-lg md:text-xl text-paper/90 max-w-2xl mx-auto mb-10">
            Únete a la nueva clase de creadores que no pierden tiempo configurando servidores.
          </p>
          <button className="bg-dark text-paper px-10 py-5 font-bold font-sans text-xl uppercase tracking-wider border-2 border-paper hover:bg-paper hover:text-dark transition-colors flex items-center justify-center gap-3 mx-auto cursor-pointer">
            Comenzar prueba gratuita
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
