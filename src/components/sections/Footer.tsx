import React from 'react';

export function Footer() {
  return (
    <footer className="py-8 text-center bg-brand-bg border-t border-brand-blue/10">
      <p className="text-sm text-brand-text/60">
        © {new Date().getFullYear()} Glicemia 120 em 7 Dias. Todos os direitos reservados.
      </p>
    </footer>
  );
}
