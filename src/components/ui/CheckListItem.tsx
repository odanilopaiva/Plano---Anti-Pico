import React from 'react';
import { Check } from 'lucide-react';

export function CheckListItem({ text }: { text: string }) {
  return (
    <li className="flex items-center">
      <Check className="w-5 h-5 mr-3 text-brand-green shrink-0" />
      <span className="font-medium text-brand-text/90">{text}</span>
    </li>
  );
}
