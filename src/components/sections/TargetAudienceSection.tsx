import React from 'react';
import { TargetItem } from '../ui/TargetItem';
import { ExpectationItem } from '../ui/ExpectationItem';

export function TargetAudienceSection() {
  return (
    <section className="px-6 py-20 bg-brand-bg sm:py-28">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
        
        {/* Para quem é */}
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-brand-blue/5">
          <h2 className="text-3xl font-bold font-serif mb-8 text-brand-text">Para quem é esse plano</h2>
          <ul className="space-y-5">
            <TargetItem text="Pessoas com pré-diabetes que querem impedir progressão." />
            <TargetItem text="Diabéticos tipo 2 que vivem com picos acima de 140 ou 160 após refeições." />
            <TargetItem text="Quem acabou de receber diagnóstico e está assustado." />
            <TargetItem text="Quem sente que “faz tudo certo” e mesmo assim não vê estabilidade." />
            <TargetItem text="Quem quer resultado rápido para recuperar motivação." />
          </ul>
          <div className="mt-8 p-5 bg-brand-bg rounded-xl border border-brand-blue/20">
            <p className="text-sm leading-relaxed text-brand-text/80">
              <span className="font-semibold text-brand-blue-dark">Perfil emocional:</span> preocupado com o futuro, cansado de informações contraditórias, mas ainda disposto a agir antes que o problema avance.
            </p>
          </div>
        </div>

        {/* O que esperar */}
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-brand-blue/5">
          <h2 className="text-3xl font-bold font-serif mb-8 text-brand-text">O que você pode esperar em 7 dias</h2>
          <div className="space-y-6">
            <ExpectationItem number="1" text="Redução visível nos picos pós-refeição — números mais próximos ou abaixo de 120." />
            <ExpectationItem number="2" text="Diminuição da ansiedade alimentar — você sabe o que comer e por quê." />
            <ExpectationItem number="3" text="Sensação real de controle sobre seu próprio corpo." />
            <ExpectationItem number="4" text="Base estruturada para continuar evoluindo após os 7 dias." />
          </div>
        </div>

      </div>
    </section>
  );
}
