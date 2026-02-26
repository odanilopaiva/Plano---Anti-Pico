import React from 'react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-blue/10 shadow-sm transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 h-20 md:h-24 flex items-center justify-center sm:justify-end relative">
        
        {/* Logo Centralizada e Maior */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <img 
            src="https://lh3.googleusercontent.com/d/1OGNr4pdUrxe_7U41LZnYVBcP5VIpqHYQ" 
            alt="Plano Anti-Pico: Glicemia 120 em 7 Dias" 
            className="h-16 md:h-20 object-contain drop-shadow-sm"
            referrerPolicy="no-referrer"
          />
        </div>
        
        {/* CTA Button (Alinhado à direita, oculto no mobile) */}
        <div className="hidden sm:block z-10">
          <a 
            href="#"
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white transition-all duration-300 rounded-full bg-brand-green hover:bg-brand-green-dark hover:shadow-md hover:-translate-y-0.5"
          >
            GARANTIR MEU PLANO
          </a>
        </div>
        
      </div>
    </header>
  );
}
