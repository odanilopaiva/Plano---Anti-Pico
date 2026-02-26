import React from 'react';
import { CheckListItem } from '../ui/CheckListItem';
import { ChevronRight } from 'lucide-react';

function NeonButton({ children, href = "#", className = "" }: { children: React.ReactNode, href?: string, className?: string }) {
  return (
    <a 
      href={href}
      className={`inline-flex items-center justify-center px-8 py-3 text-sm md:text-base font-bold text-brand-blue-dark transition-all duration-300 rounded-full bg-[#39FF14] hover:bg-[#32E112] shadow-[0_0_20px_rgba(57,255,20,0.4)] hover:shadow-[0_0_25px_rgba(57,255,20,0.6)] hover:-translate-y-1 tracking-wide ${className}`}
    >
      {children}
      <ChevronRight className="w-4 h-4 ml-2" />
    </a>
  );
}

export function PricingSection() {
  return (
    <section className="px-6 py-20 bg-white sm:py-28">
      <div className="max-w-4xl mx-auto">
        
        <div className="bg-brand-bg rounded-3xl shadow-sm border border-brand-blue/10 overflow-hidden">
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold font-serif text-center mb-8 text-brand-text">Faça as contas</h2>
            
            <div className="space-y-4 text-center mb-10 text-brand-text/80 text-lg">
              <p>Se você contratasse nutricionista particular + consulta com endocrinologista + planejamento alimentar estruturado, facilmente investiria entre <strong className="text-brand-text">R$1.500 e R$3.000</strong>.</p>
              <p>E ainda assim, dependeria de meses para organizar tudo.</p>
              <p className="font-medium text-brand-blue-dark">Aqui você recebe um plano focado exclusivamente em reduzir picos e trazer estabilidade imediata.</p>
            </div>

            <div className="border-t border-b border-brand-blue/10 py-8 mb-10 bg-white rounded-2xl p-8">
              <h3 className="font-serif font-bold text-xl mb-6 text-center text-brand-text">Recapitulando tudo que você vai receber:</h3>
              <ul className="space-y-4 max-w-md mx-auto">
                <CheckListItem text="Glicemia 120 em 7 Dias: Plano Anti-Pico" />
                <CheckListItem text="Mapa Anti-Pico das Refeições" />
                <CheckListItem text="Cardápio Fechado 7 Dias" />
                <CheckListItem text="Método de Correção Rápida" />
                <CheckListItem text="Sequência Pós-Prato 15 Minutos" />
                <CheckListItem text="Bônus: Guia Anti-Desespero Pós-Exame" />
                <CheckListItem text="Bônus: Lista Negra dos Falsos Saudáveis" />
                <CheckListItem text="Bônus: Protocolo 3 Movimentos Anti-Pico" />
              </ul>
            </div>

            <div className="text-center">
              <p className="text-lg mb-2 text-brand-text/80">Hoje, tudo isso por apenas</p>
              <div className="text-7xl font-bold font-serif text-brand-blue-dark mb-4">R$ 27</div>
              <p className="text-sm text-brand-text/60 mb-10 max-w-xs mx-auto">Menos do que muitos gastam por semana com alimentos que sabotam a própria glicose.</p>
              
              <NeonButton className="w-full md:w-auto">QUERO BAIXAR MINHA GLICEMIA AGORA</NeonButton>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-serif font-bold mb-6 text-brand-text">A decisão começa agora.</h3>
          <p className="mb-4 text-brand-text/80 text-lg">Isso não é sobre comprar mais um conteúdo.</p>
          <p className="mb-10 text-brand-text/80 text-lg leading-relaxed">É sobre provar para você mesmo que ainda dá tempo de assumir o controle antes que a doença avance. A primeira vitória começa em 7 dias.</p>
          <NeonButton>COMEÇAR MINHA TRANSFORMAÇÃO AGORA</NeonButton>
        </div>

      </div>
    </section>
  );
}
