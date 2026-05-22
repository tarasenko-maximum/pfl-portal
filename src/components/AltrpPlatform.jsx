import React from 'react';
import { motion } from 'framer-motion';

const features = [
  { title: 'СКОРОСТЬ', desc: 'Новый боец, результат боя — за минуты. Без разработчика.' },
  { title: 'ГИБКОСТЬ', desc: 'Структуры данных под логику кулачных боёв, не под шаблон.' },
  { title: 'КОНТРОЛЬ', desc: 'Все данные у лиги. Vendor lock отсутствует.' },
  { title: 'МАСШТАБ', desc: 'Растёт с лигой: PPV, приложение, мобайл, букмекерская интеграция.' }
];

const AltrpPlatform = () => {
  return (
    <section id="altrp" className="py-24 bg-[var(--black)] border-t border-white/5 relative">
      <div className="container mx-auto px-6 max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-[100px] md:text-[200px] font-anton text-[var(--pfl-orange)] leading-none tracking-tight mb-4 drop-shadow-[0_0_60px_rgba(255,87,34,0.3)]">
            ALTRP
          </div>
          <div className="text-2xl md:text-4xl font-anton text-white uppercase tracking-wider mb-16">
            НАША ПЛАТФОРМА. НАШЕ ПРЕИМУЩЕСТВО.
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            {features.map((f, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#0a0a0a] border border-white/10 p-8 rounded-xl hover:border-[var(--pfl-orange)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,87,34,0.15)] hover:bg-[#111] transition-all duration-300 cursor-pointer group"
              >
                <h3 className="text-2xl font-anton text-white mb-3 uppercase tracking-wide group-hover:text-[var(--pfl-orange)] transition-colors">{f.title}</h3>
                <p className="text-[var(--muted)] font-outfit text-lg group-hover:text-white/90 transition-colors">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AltrpPlatform;
