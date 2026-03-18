import { useEffect, useRef } from 'react';
import { gsap } from '../lib/gsap';
import { Terminal } from 'lucide-react';
import type { NavItem } from '../types';

const NAV_LINKS: NavItem[] = [
  { label: 'Producto', href: '#producto' },
  { label: 'Precios', href: '#precios' },
  { label: 'Documentación', href: '#docs' },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, { y: -100, opacity: 0, duration: 1, ease: 'power3.out' });
    }, navRef);
    return () => ctx.revert();
  }, []);

  return (
    <nav ref={navRef} className="fixed top-0 inset-x-0 z-50 p-4">
      <div className="max-w-7xl mx-auto glass-panel rounded-none border-2 border-dark flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2 text-dark">
          <Terminal size={24} strokeWidth={2.5} />
          <span className="font-display italic text-2xl font-black tracking-tight mt-1">KOONETXA</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-mono text-sm uppercase tracking-wider font-bold">
          {NAV_LINKS.map(link => (
            <a key={link.label} href={link.href} className="hover:text-primary transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block font-mono text-sm uppercase tracking-wider font-bold hover:text-primary transition-colors cursor-pointer">
            Iniciar sesión
          </button>
          <button className="bg-primary text-paper px-6 py-2.5 font-bold font-sans uppercase tracking-wide border border-dark btn-glow cursor-pointer">
            Empezar gratis
          </button>
        </div>
      </div>
    </nav>
  );
}
