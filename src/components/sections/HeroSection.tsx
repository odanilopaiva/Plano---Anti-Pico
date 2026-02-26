import React from 'react';
import { CTAButton } from '../ui/CTAButton';

export function HeroSection() {
  return (
    <section className="relative px-6 pt-32 pb-20 text-white bg-brand-blue-dark sm:pt-40 sm:pb-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://picsum.photos/seed/health/1920/1080?blur=4')] bg-cover bg-center mix-blend-overlay" referrerPolicy="no-referrer"></div>
      <div className="relative max-w-4xl mx-auto text-center z-10">
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider uppercase rounded-full bg-brand-blue-light/50 border border-brand-blue-light">
          Plano Anti-Pico: Glicemia 120 em 7 Dias
        </span>
        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl font-serif">
          Reduza sua glicemia para <span className="text-brand-green-light italic">abaixo de 120</span> em até 7 dias
        </h1>
        <p className="mb-8 text-xl md:text-2xl text-white/90 font-serif max-w-3xl mx-auto">
          Com cardápio fechado, estratégia metabólica aplicada e resultado visível já nas primeiras 72 horas.
        </p>
        <p className="mb-10 text-base md:text-lg text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
          Sem cortar tudo que você ama, sem viver com fome, sem contar carboidrato manualmente. Apenas combinações inteligentes, ordem correta dos alimentos e ajustes estratégicos — mesmo que sua glicada esteja alta.
        </p>
        <CTAButton>QUERO BAIXAR MINHA GLICEMIA AGORA</CTAButton>
      </div>
    </section>
  );
}
