import React from 'react';
import { ChevronRight } from 'lucide-react';

export function CTAButton({ children, href = "#", className = "" }: { children: React.ReactNode, href?: string, className?: string }) {
  return (
    <a 
      href={href}
      className={`inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 rounded-full shadow-lg bg-brand-green hover:bg-brand-green-dark hover:shadow-xl hover:-translate-y-1 ${className}`}
    >
      {children}
      <ChevronRight className="w-5 h-5 ml-2" />
    </a>
  );
}
