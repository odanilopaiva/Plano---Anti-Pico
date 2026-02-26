import React from 'react';
import { BonusCard } from '../ui/BonusCard';

export function BonusesSection() {
  return (
    <section className="px-6 py-20 bg-brand-blue-dark text-white sm:py-28">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Bônus Exclusivos</h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">Aceleradores de resultado que você recebe gratuitamente ao garantir seu plano hoje.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <BonusCard 
            number="1"
            title="Guia Anti-Desespero Pós-Exame"
            description="Recebeu um resultado alto? Em vez de entrar em espiral emocional, você aplica um plano de 24h para estabilizar e retomar o controle. Clareza emocional + ação prática."
            imageUrl="https://lh3.googleusercontent.com/d/1O7vj368jgLWVjA_oUifhqeDL626njGpc"
          />
          <BonusCard 
            number="2"
            title="Lista Negra dos Falsos Saudáveis"
            description="Alimentos vendidos como “fit” ou “naturais” que sabotam discretamente sua glicose. Você vai identificar e substituir de forma inteligente."
            imageUrl="https://lh3.googleusercontent.com/d/1SJz-EOzwrAM5y8o11eBB7nODfOFP34PK"
          />
          <BonusCard 
            number="3"
            title="Protocolo 3 Movimentos Anti-Pico"
            description="Movimentos simples que melhoram a resposta glicêmica após a refeição. Aplicável em casa, sem equipamento, em poucos minutos."
            imageUrl="https://lh3.googleusercontent.com/d/13fv77w033R4gjgVzuTEbNm-w1gYRlxlu"
          />
        </div>
      </div>
    </section>
  );
}
