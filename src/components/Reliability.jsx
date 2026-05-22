import React from 'react';
import { motion } from 'framer-motion';

const Reliability = () => {
  return (
    <section id="reliability" className="py-24 bg-[var(--black)] text-center overflow-hidden border-t border-[var(--border)]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="text-[120px] md:text-[280px] font-anton leading-none tracking-tight text-white mb-4 drop-shadow-2xl">
            99.9%
          </div>
          <div className="text-2xl md:text-5xl font-anton text-[var(--pfl-orange)] uppercase tracking-widest mb-4">
            SLA · ON-CALL 24/7 В ДНИ СОБЫТИЙ.
          </div>
          <p className="text-[var(--muted)] font-outfit text-sm max-w-2xl mx-auto mb-16">
            Мы гарантируем бесперебойную работу портала. В дни турниров наша команда дежурит 24/7 для мгновенной реакции на пиковые нагрузки (наплыв зрителей) и моментального решения любых технических вопросов, чтобы ни один фанат не пропустил трансляцию, а лига не потеряла деньги на билетах.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {['HIGHLOAD · CDN', 'DAY×5 STRESS TEST', 'SCHEMA.ORG SEO', 'CORE WEB VITALS'].map((item, idx) => (
              <div key={idx} className="bg-[#111] border border-white/10 px-6 py-3 rounded-full text-[var(--muted)] font-mono text-sm tracking-widest uppercase hover:bg-white/5 hover:text-white transition-colors cursor-default">
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reliability;
