export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-paper border-t-4 border-primary pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 font-mono text-sm mb-16 border-b border-paper/10 pb-16">
        <div>
          <h4 className="font-display italic text-2xl mb-4">KOONETXA</h4>
          <p className="text-paper/50">Infraestructura Brutalista para Equipos Exigentes.</p>
        </div>
        <div>
          <h5 className="font-bold text-primary mb-4 uppercase tracking-widest">Producto</h5>
          <ul className="space-y-3 text-paper/70">
            <li><a href="#" className="hover:text-primary transition-colors">BaaS</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">CRM Activo</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Integraciones IA</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-primary mb-4 uppercase tracking-widest">Recursos</h5>
          <ul className="space-y-3 text-paper/70">
            <li><a href="#" className="hover:text-primary transition-colors">Documentación</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Ejemplos</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Estado del Sistema</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-primary mb-4 uppercase tracking-widest">Empresa</h5>
          <ul className="space-y-3 text-paper/70">
            <li><a href="#" className="hover:text-primary transition-colors">Aviso Legal</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Privacidad</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between font-mono text-xs text-paper/40">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse"></span>
          <span>TODOS LOS SISTEMAS OPERATIVOS</span>
        </div>
        <p>&copy; {year} KOONETXA INC. TODOS LOS DERECHOS RESERVADOS.</p>
      </div>
    </footer>
  );
}
