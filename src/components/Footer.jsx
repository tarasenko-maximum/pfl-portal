import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-[#050505] border-t border-[var(--border)] text-center text-[var(--dim)] font-mono text-xs uppercase tracking-widest leading-relaxed">
      <div className="container mx-auto px-6">
        <p className="mb-2 text-white/40">AIMAX · AI-powered web solutions</p>
        <p>EVGENII KRIVOV PR NOVI SAD · Zeleznicka 20, Novi Sad 21101</p>
        <p className="mb-4">Reg. broj: 67616715 · PIB: 114488648</p>
        <p className="text-[10px]">&copy; {new Date().getFullYear()} AIMAX</p>
      </div>
    </footer>
  );
};

export default Footer;
