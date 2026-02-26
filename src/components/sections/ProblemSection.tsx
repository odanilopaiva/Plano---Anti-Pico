import React from 'react';
import { AlertCircle } from 'lucide-react';

export function ProblemSection() {
  return (
    <section className="px-6 py-20 bg-white sm:py-28">
      <div className="max-w-5xl mx-auto">
        <h2 className="mb-16 text-3xl font-bold text-center md:text-4xl font-serif text-brand-text">
          O problema nunca foi força de vontade.<br/>
          <span className="italic text-brand-blue">Foi falta de estratégia.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <div className="flex items-start space-x-3 p-4 bg-brand-bg rounded-xl">
              <AlertCircle className="w-6 h-6 text-brand-red shrink-0 mt-0.5" />
              <p className="text-lg text-brand-text/90">Você já tentou reduzir carboidrato.</p>
            </div>
            <div className="flex items-start space-x-3 p-4 bg-brand-bg rounded-xl">
              <AlertCircle className="w-6 h-6 text-brand-red shrink-0 mt-0.5" />
              <p className="text-lg text-brand-text/90">Já evitou doce.</p>
            </div>
            <div className="flex items-start space-x-3 p-4 bg-brand-bg rounded-xl">
              <AlertCircle className="w-6 h-6 text-brand-red shrink-0 mt-0.5" />
              <p className="text-lg text-brand-text/90">Já diminuiu porções.</p>
            </div>
            <div className="flex items-start space-x-3 p-4 bg-brand-bg rounded-xl">
              <AlertCircle className="w-6 h-6 text-brand-red shrink-0 mt-0.5" />
              <p className="text-lg text-brand-text/90">Talvez até tenha passado fome.</p>
            </div>
            <div className="p-5 mt-6 border-l-4 bg-brand-red/5 border-brand-red rounded-r-xl">
              <p className="font-medium text-brand-text text-lg">E mesmo assim, a glicose sobe.</p>
            </div>
          </div>

          <div className="space-y-6 text-brand-text/80 leading-relaxed text-lg">
            <p>
              Isso gera frustração. Porque você sente que está fazendo sua parte. Só que o resultado não acompanha o esforço.
            </p>
            <p>
              O que ninguém explica é que controle glicêmico não depende apenas de cortar alimentos. Depende de como seu corpo responde à combination, à ordem e à distribuição ao longo do dia. Dois pratos com os mesmos alimentos podem gerar respostas completamente diferentes dependendo da estrutura.
            </p>
            <p className="font-medium text-brand-text">
              Quando você não entende o mecanismo, vive refém do aparelho. Mede com medo. Come com medo. Espera o exame com medo.
            </p>
          </div>
        </div>

        <div className="mt-20 p-8 md:p-12 bg-brand-bg rounded-3xl text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue-light via-brand-blue to-brand-blue-dark"></div>
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-brand-blue-dark">O Glicemia 120 em 7 Dias foi criado para mudar essa dinâmica.</h3>
          <p className="mb-6 text-lg text-brand-text/90 max-w-2xl mx-auto">
            Em vez de reagir ao número, você passa a antecipar o resultado.<br/>
            Em vez de torcer para dar certo, você executa uma estratégia que aumenta drasticamente as chances de estabilidade.
          </p>
          <p className="mb-10 text-brand-text/80 max-w-3xl mx-auto">
            O objetivo não é apenas reduzir a glicose por uma semana. É provar para você que seu corpo responde quando a organização é correta. Essa primeira vitória muda sua mentalidade. E quando a mentalidade muda, a consistência vem.
          </p>
          <div className="inline-block text-center bg-white p-8 rounded-2xl shadow-sm border border-brand-blue/10">
            <p className="font-serif text-2xl italic text-brand-blue-dark mb-2">Controle gera confiança.</p>
            <p className="font-serif text-2xl italic text-brand-blue-dark mb-2">Confiança gera constância.</p>
            <p className="font-serif text-2xl italic text-brand-blue-dark font-bold">Constância gera saúde.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
