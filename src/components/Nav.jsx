import React, { useState, useEffect } from 'react';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#050505]/80 backdrop-blur-xl border-b border-[var(--border)] py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold font-anton tracking-wider text-white">
          <span className="opacity-90">AIMAX</span> <span className="text-[var(--pfl-orange)] mx-1">×</span> <span className="opacity-90">PFL</span>
        </div>
        <div className="hidden lg:flex gap-8 text-sm font-outfit font-medium text-[var(--muted)]">
          <a href="#hero" className="hover:text-white hover:text-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all">Старт</a>
          <a href="#manifesto" className="hover:text-white transition-all">Метрики</a>
          <a href="#sponsors" className="hover:text-white transition-all">Спонсоры</a>
          <a href="#packages" className="hover:text-white transition-all">Пакеты</a>
          <a href="#mockups" className="hover:text-white transition-all">Мокапы</a>
          <a href="#portfolio" className="hover:text-white transition-all">Кейсы</a>
        </div>
        <a href="mailto:tarasenko.srb@gmail.com" className="btn-primary px-6 py-2.5 text-sm">
          Связаться
        </a>
      </div>
    </nav>
  );
};

export default Nav;
