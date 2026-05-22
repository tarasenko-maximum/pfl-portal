import React from 'react';
import { motion } from 'framer-motion';

const Reference = () => {
  return (
    <section id="reference" className="py-24 bg-[var(--black-deep)] relative">
      <div className="container mx-auto px-6 max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-6xl md:text-[120px] font-anton uppercase leading-none tracking-wider">
            <span className="text-white opacity-50">UFC.COM</span>
            <span className="text-[var(--pfl-orange)] text-3xl md:text-5xl">ЭТАЛОН.</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-6xl md:text-[120px] font-anton uppercase leading-none tracking-wider">
            <span className="text-white opacity-50">BKFC.COM</span>
            <span className="text-[var(--pfl-orange)] text-3xl md:text-5xl">ОРИЕНТИР.</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-5xl md:text-[120px] font-anton uppercase leading-none tracking-wider">
            <span className="text-white">PRIME FL</span>
            <span className="text-[var(--pfl-orange)] text-2xl md:text-5xl">СЛЕДУЮЩИЙ ШАГ.</span>
          </div>
          
          <p className="mt-12 text-[var(--muted)] font-outfit text-lg max-w-2xl mx-auto border-t border-white/10 pt-8">
            Берём лучшие мировые практики подачи спортивного контента и адаптируем под европейский и СНГ рынок кулачных боёв.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Reference;
