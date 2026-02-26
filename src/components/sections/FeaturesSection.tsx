import React from 'react';
import { Utensils, Clock, ShoppingCart, ShieldAlert, BookOpen } from 'lucide-react';
import { FeatureCard } from '../ui/FeatureCard';

export function FeaturesSection() {
  return (
    <section className="px-6 py-20 bg-brand-bg sm:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold md:text-4xl font-serif text-brand-text mb-4">
            O que você vai desbloquear dentro do <br className="hidden md:block" />
            <span className="italic text-brand-blue">Glicemia 120 em 7 Dias</span>
          </h2>
          <div className="w-24 h-1 mx-auto bg-brand-blue/30 rounded-full"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard 
            icon={<Utensils className="w-6 h-6" />}
            title="Mapa Anti-Pico das Refeições"
            description="Você vai aprender exatamente como montar cada refeição para impedir que sua glicose ultrapasse 120. Não é só “o que comer”, é a ordem, a proporção e o timing que reduzem o impacto glicêmico. Isso elimina o medo de sentar à mesa e transforma insegurança em previsibilidade."
            imageUrl="https://lh3.googleusercontent.com/d/1uoq-yASJa01gDDLKuVECKQN_ENq_X91R"
          />
          <FeatureCard 
            icon={<BookOpen className="w-6 h-6" />}
            title="Cardápio Fechado de 7 Dias"
            description="Nada de improviso. Você recebe um plano estruturado, com combinações já testadas para estabilidade glicêmica. Você acorda sabendo o que comer. Almoça sabendo que não vai ter pico. Janta sem ansiedade. A clareza reduz o estresse — e o estresse também influencia sua glicose."
            imageUrl="https://lh3.googleusercontent.com/d/1p6D7hKo1ptL0LBTSbA490v2zOFZDjU6x"
          />
          <FeatureCard 
            icon={<Clock className="w-6 h-6" />}
            title="Sequência Pós-Prato 15 Minutos"
            description="Uma rotina simples aplicada após as refeições que ajuda seu corpo a processar a glicose com mais eficiência. Mesmo que você tenha exagerado levemente, essa sequência reduz o impacto e evita que o número exploda duas horas depois."
            imageUrl="https://lh3.googleusercontent.com/d/1GyuNTTDHgm4UAdFfSFJ2LDf8YiMPb_q8"
          />
          <FeatureCard 
            icon={<ShoppingCart className="w-6 h-6" />}
            title="Lista Inteligente de Mercado"
            description="Você vai saber exatamente o que comprar, o que substituir e o que evitar — sem radicalismo e sem alimentos caros. Isso evita sabotagem invisível e reduz desperdício."
            imageUrl="https://lh3.googleusercontent.com/d/1-SH29JQY5HPhcJkUdlycWyTmw4DFxC6A"
          />
          <FeatureCard 
            icon={<ShieldAlert className="w-6 h-6" />}
            title="Método de Correção Rápida"
            description="Se o número subir, você não entra em pânico. Você aplica um protocolo objetivo que ajuda a estabilizar de forma estratégica. Controle substitui medo."
            imageUrl="https://lh3.googleusercontent.com/d/1Qx5QSkymYL_ml7bVHs6jlY82FGKvsBYf"
          />
        </div>
      </div>
    </section>
  );
}
