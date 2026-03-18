import { useEffect, useRef } from 'react';
import { gsap } from '../lib/gsap';

const LOGOS = ["ACME_CORP", "GLOBEX", "SOYLENT", "INITECH", "UMBRELLA", "STARK_IND"];

export default function SocialProof() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".marquee-inner", {
        xPercent: -50,
        ease: "none",
        duration: 15,
        repeat: -1
      });
    }, scrollRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-12 border-y-2 border-dark bg-offwhite overflow-hidden" ref={scrollRef}>
      <p className="text-center font-mono text-xs font-bold text-dark/50 uppercase tracking-widest mb-6 border-dark">
        Sistemas operando en producción
      </p>
      <div className="flex w-[200%] marquee-inner">
        {[...LOGOS, ...LOGOS].map((logo, i) => (
          <div key={i} className="flex-1 flex justify-center items-center">
            <span className="font-display italic text-4xl text-dark opacity-30 whitespace-nowrap px-8">
              {logo}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
