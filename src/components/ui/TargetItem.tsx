import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export function TargetItem({ text }: { text: string }) {
  return (
    <li className="flex items-start">
      <CheckCircle2 className="w-6 h-6 mr-3 text-brand-green shrink-0 mt-0.5" />
      <span className="text-brand-text/80">{text}</span>
    </li>
  );
}
