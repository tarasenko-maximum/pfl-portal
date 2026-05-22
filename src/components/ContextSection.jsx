import React from 'react';
import { motion } from 'framer-motion';

const ContextSection = () => {
  return (
    <section id="context" className="py-24 bg-[var(--black)] relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Phase 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border border-white/10 bg-[#0a0a0a] relative"
          >
            <div className="text-[var(--dim)] font-anton text-8xl absolute top-4 right-4 opacity-10">01</div>
            <div className="badge bg-white/5 text-[var(--muted)] mb-6 border border-white/10">ФАЗА 1</div>
            <h3 className="text-4xl font-anton text-[var(--muted)] mb-4">PFL.RS</h3>
            <p className="text-[var(--dim)] font-outfit text-lg">
              Лендинг, который мы сделали для вас. Презентует лигу в Сербии и собирает базовые заявки.
            </p>
          </motion.div>

          {/* Phase 2 */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border border-[var(--pfl-orange)]/50 bg-[var(--pfl-orange)]/5 relative shadow-[0_0_50px_rgba(255,87,34,0.1)]"
          >
            <div className="text-[var(--pfl-orange)] font-anton text-8xl absolute top-4 right-4 opacity-10">02</div>
            <div className="badge-orange mb-6">ФАЗА 2</div>
            <h3 className="text-4xl font-anton text-white mb-4">PFL · PORTAL</h3>
            <p className="text-white/80 font-outfit text-lg">
              Полноценный цифровой хаб лиги. Уровень UFC.com / BKFC.com. Старт разработки — 3–5 дней.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContextSection;
