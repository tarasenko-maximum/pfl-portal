import React from 'react';
import { motion } from 'framer-motion';

const MediaEcosystem = () => {
  return (
    <section id="media" className="py-24 bg-[var(--black)] border-t border-[var(--border)]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-7xl font-anton text-white uppercase tracking-wider mb-6">
            ПОРТАЛ × СОЦСЕТИ = СИНЕРГИЯ.
          </h2>
          <div className="text-[var(--muted)] font-mono text-sm tracking-widest uppercase md:text-lg mb-8">
            YouTube · YT Shorts · Instagram · Telegram · VK · TikTok
          </div>
          <div className="text-3xl sm:text-5xl md:text-7xl font-anton text-[var(--pfl-orange)] leading-none mb-16 drop-shadow-[0_0_30px_rgba(255,87,34,0.3)] whitespace-normal break-words">
            150M+ ПРОСМОТРОВ / ГОД
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { t: 'АВТОПУБЛИКАЦИЯ', d: 'Анонсы, результаты — в 5+ каналов одним кликом' },
            { t: 'ПРИВЯЗКА К БОЙЦАМ', d: 'Карточка бойца ↔ его соцсети' },
            { t: 'UTM + АНАЛИТИКА', d: 'Конверсия по каждому каналу. Язык спонсоров.' }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#111] border border-[var(--border)] p-8 rounded-xl text-center hover:-translate-y-2 hover:bg-[#151515] hover:border-[var(--pfl-orange)]/50 hover:shadow-[0_10px_30px_rgba(255,87,34,0.15)] transition-all duration-300 cursor-pointer group"
            >
              <h3 className="text-2xl font-anton text-white mb-3 uppercase tracking-wide group-hover:text-[var(--pfl-orange)] transition-colors">{item.t}</h3>
              <p className="text-[var(--muted)] font-outfit text-sm group-hover:text-white/80 transition-colors">{item.d}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center text-xl md:text-3xl font-anton text-[var(--muted)] uppercase tracking-widest border-t border-white/10 pt-12 max-w-4xl mx-auto">
          ЗАДАЧА ПОРТАЛА — ПРЕВРАТИТЬ 150M ОХВАТА В ИЗМЕРИМЫЕ МЕТРИКИ.
        </div>
      </div>
    </section>
  );
};

export default MediaEcosystem;
