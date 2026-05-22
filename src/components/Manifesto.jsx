import React from 'react';
import { motion } from 'framer-motion';

const Manifesto = () => {
  return (
    <section id="manifesto" className="py-32 relative bg-[var(--black-deep)] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-glow-1 opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-[120px] md:text-[280px] font-anton leading-none tracking-tight text-white mb-4">
            150M+
          </div>
          <div className="text-3xl md:text-5xl font-anton text-[var(--pfl-orange)] mb-12 uppercase">
            ПРОСМОТРОВ В ГОД.
          </div>
          
          <p className="text-xl md:text-2xl font-outfit text-[var(--muted)] max-w-3xl mx-auto leading-relaxed mb-8">
            У лиги есть бренд, ростер, стадионные турниры, охват. Не хватает единой точки сборки.
          </p>
          
          <div className="inline-block border-b-2 border-[var(--pfl-orange)] pb-2 text-2xl md:text-4xl font-anton text-white uppercase tracking-wider">
            ПОРТАЛ — НЕДОСТАЮЩЕЕ ЗВЕНО.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Manifesto;
