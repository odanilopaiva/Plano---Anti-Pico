import React from 'react';

export function FeatureCard({ icon, title, description, imageUrl }: { icon: React.ReactNode, title: string, description: string, imageUrl: string }) {
  return (
    <div className="transition-all duration-300 bg-white rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 border border-transparent hover:border-brand-blue/20 overflow-hidden flex flex-col">
      <div className="h-48 w-full relative">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        <div className="absolute -bottom-6 left-6 flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md text-brand-blue border border-brand-blue/10">
          {icon}
        </div>
      </div>
      <div className="p-8 pt-10 flex-1">
        <h3 className="mb-4 text-xl font-bold font-serif text-brand-text">{title}</h3>
        <p className="text-brand-text/70 leading-relaxed text-sm">{description}</p>
      </div>
    </div>
  );
}
