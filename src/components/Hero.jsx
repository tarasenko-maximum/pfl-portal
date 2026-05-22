import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background glow effects */}
      <div className="bg-glow-1"></div>
      <div className="bg-glow-2"></div>
      <div className="absolute inset-0 bg-grid-modern opacity-40"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-[110px] leading-[0.95] font-anton mb-6 uppercase"
          >
            PFL <span className="text-gradient-orange">PORTAL</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl font-outfit text-[var(--muted)] max-w-2xl mx-auto mb-12 font-light leading-relaxed"
          >
            Коммерческое предложение — глобальный медиа-хаб Prime Fighting League. Полностью функциональная экосистема уровня мировых промоутерских организаций.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a href="#packages" className="btn-primary w-full sm:w-auto">
              Изучить предложение
            </a>
            <a href="#mockups" className="btn-outline w-full sm:w-auto">
              Посмотреть мокапы
            </a>
          </motion.div>
        </div>

        {/* Hero Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid md:grid-cols-3 gap-6 mt-20 max-w-5xl mx-auto"
        >
          <div className="glass-card p-6 flex flex-col items-center text-center">
            <span className="text-[var(--muted)] font-outfit text-sm uppercase tracking-wider mb-2">Охват аудитории</span>
            <span className="text-4xl font-anton text-white mb-2">150M+</span>
            <span className="text-xs text-[var(--dim)] font-outfit">Просмотров в год по всем каналам</span>
          </div>
          <div className="glass-card p-6 flex flex-col items-center text-center border-t border-[var(--pfl-orange)] relative overflow-hidden">
            <div className="absolute inset-0 bg-[var(--pfl-orange-bg)] opacity-50"></div>
            <span className="text-[var(--pfl-orange)] font-outfit text-sm uppercase tracking-wider mb-2 relative z-10">Срок запуска</span>
            <span className="text-4xl font-anton text-white mb-2 relative z-10">35 ДНЕЙ</span>
            <span className="text-xs text-[var(--dim)] font-outfit relative z-10">MVP портала с монетизацией</span>
          </div>
          <div className="glass-card p-6 flex flex-col items-center text-center">
            <span className="text-[var(--muted)] font-outfit text-sm uppercase tracking-wider mb-2">Экосистема</span>
            <span className="text-4xl font-anton text-white mb-2">3 ЯЗЫКА</span>
            <span className="text-xs text-[var(--dim)] font-outfit">RU · EN · SR (из коробки)</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
