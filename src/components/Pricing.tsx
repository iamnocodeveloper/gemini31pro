import type { PricingTier } from '../types';
import { Check } from 'lucide-react';

const TIERS: PricingTier[] = [
  { name: 'Básico', price: 19, description: 'Lanza proyectos personales rápido.', features: ['API Core', 'Gestión de 1,000 clientes', 'Soporte Comunitario'] },
  { name: 'Avanzado', price: 69, description: 'El arsenal completo para negocios.', features: ['BaaS Completo + IA', 'Clientes Ilimitados', 'Soporte Dedicado 24/7', 'Métricas Predictivas'], isPopular: true },
  { name: 'Pro', price: 39, description: 'Escala tu infraestructura.', features: ['BaaS Completo', '10,000 clientes', 'Logs Extensibles'] },
];

export default function Pricing() {
  return (
    <section id="precios" className="py-32 px-4 bg-offwhite">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display italic text-5xl md:text-7xl mb-4 text-dark">Invierte en <span className="font-sans font-bold uppercase tracking-tighter not-italic text-primary">escala</span>.</h2>
          <p className="font-mono text-dark/70 uppercase tracking-widest text-sm">Sin costes ocultos. Sin sorpresas.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {TIERS.map((tier) => (
            <div key={tier.name} className={`relative p-8 border-2 border-dark ${tier.isPopular ? 'bg-dark text-paper scale-100 md:scale-105 shadow-[8px_8px_0px_#E63B2E] z-10' : 'bg-paper text-dark card-elevate'}`}>
              {tier.isPopular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white font-mono text-xs font-bold px-4 py-1 uppercase tracking-widest border border-dark">
                  Mejor Valor
                </span>
              )}
              <h3 className={`font-sans font-bold text-2xl uppercase tracking-tighter mb-2 ${tier.isPopular ? 'text-primary' : ''}`}>{tier.name}</h3>
              <p className={`font-mono text-sm mb-6 h-10 ${tier.isPopular ? 'text-paper/70' : 'text-dark/70'}`}>{tier.description}</p>
              
              <div className="mb-8 border-b-2 border-current pb-8">
                <span className="font-display italic text-6xl">${tier.price}</span>
                <span className="font-mono text-sm uppercase">/mes</span>
              </div>
              
              <ul className="space-y-4 mb-8 font-mono text-sm">
                {tier.features.map(feat => (
                  <li key={feat} className="flex items-start gap-3">
                    <Check size={18} className={tier.isPopular ? "text-primary" : "text-dark"} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-4 font-bold font-sans uppercase tracking-widest border-2 cursor-pointer ${tier.isPopular ? 'bg-primary text-white border-dark btn-glow' : 'bg-transparent border-dark text-dark hover:bg-dark hover:text-paper transition-colors'}`}>
                Comenzar prueba
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
