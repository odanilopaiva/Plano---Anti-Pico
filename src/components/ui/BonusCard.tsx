import React from 'react';

export function BonusCard({ number, title, description, imageUrl }: { number: string, title: string, description: string, imageUrl: string }) {
  return (
    <div className="border border-white/20 rounded-2xl bg-white/5 relative overflow-hidden transition-all duration-300 hover:bg-white/10 flex flex-col">
      <div className="absolute top-0 right-0 px-4 py-1 text-xs font-bold tracking-wider uppercase bg-brand-blue-light text-white rounded-bl-lg z-10">
        Bônus #{number}
      </div>
      <div className="h-48 w-full">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      </div>
      <div className="p-8 flex-1">
        <h3 className="mb-4 text-xl font-bold font-serif">{title}</h3>
        <p className="text-white/70 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
