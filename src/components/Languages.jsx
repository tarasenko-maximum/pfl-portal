import React from 'react';
import { motion } from 'framer-motion';

const Languages = () => {
  return (
    <section id="languages" className="py-24 bg-[var(--black-deep)] relative">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <h2 className="text-3xl md:text-5xl font-anton text-white uppercase tracking-wider mb-8">
          СЕРБИЯ СЕГОДНЯ. МИР ЗАВТРА.
        </h2>
        
        <div className="text-[100px] md:text-[180px] font-anton text-[var(--dim)] leading-none tracking-tight mb-16 opacity-30 select-none">
          RU · EN · SR
        </div>

        <div className="grid md:grid-cols-2 gap-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#111] border border-white/10 p-8 rounded-xl"
          >
            <h3 className="font-anton text-2xl text-white mb-2 uppercase tracking-wide">STARTER</h3>
            <p className="text-[var(--muted)] font-outfit">+1 язык / квартал + доп. по запросу</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[var(--pfl-orange)] text-black p-8 rounded-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
            <h3 className="font-anton text-2xl mb-2 uppercase tracking-wide">PROFESSIONAL</h3>
            <p className="font-outfit font-medium opacity-90">+3 языка / квартал + приоритет</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Languages;
