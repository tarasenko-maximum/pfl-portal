import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
  return (
    <section id="timeline" className="py-24 bg-[var(--black)] border-t border-[var(--border)]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16">
          <h2 className="text-5xl md:text-[80px] font-anton text-white uppercase tracking-wider leading-none">
            СРОКИ И ОПЛАТА.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 border border-[var(--border)] rounded-xl relative bg-[#0a0a0a]"
          >
            <div className="text-5xl font-anton text-[var(--pfl-orange)] mb-4">40%</div>
            <div className="font-anton text-white text-xl uppercase mb-2">АВАНС</div>
            <p className="text-[var(--muted)] font-outfit">Подписание договора · старт работ</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 border border-[var(--border)] rounded-xl relative bg-[#0a0a0a]"
          >
            <div className="text-5xl font-anton text-[var(--pfl-orange)] mb-4">40%</div>
            <div className="font-anton text-white text-xl uppercase mb-2">ПРОТОТИП</div>
            <p className="text-[var(--muted)] font-outfit">Утверждение дизайна · демо</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 border border-[var(--pfl-orange)]/50 rounded-xl relative bg-[var(--pfl-orange)]/10"
          >
            <div className="text-5xl font-anton text-[var(--pfl-orange)] mb-4">20%</div>
            <div className="font-anton text-white text-xl uppercase mb-2">РЕЛИЗ</div>
            <p className="text-white/80 font-outfit">Перенос на домен лиги · приёмка</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
