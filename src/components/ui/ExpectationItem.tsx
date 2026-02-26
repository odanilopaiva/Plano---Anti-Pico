import React from 'react';

export function ExpectationItem({ number, text }: { number: string, text: string }) {
  return (
    <div className="flex items-start p-5 bg-brand-bg rounded-xl border border-brand-blue/10">
      <div className="flex items-center justify-center w-8 h-8 mr-4 font-bold rounded-full bg-brand-blue text-white shrink-0 font-serif">
        {number}
      </div>
      <p className="text-brand-text/80 pt-1">{text}</p>
    </div>
  );
}
