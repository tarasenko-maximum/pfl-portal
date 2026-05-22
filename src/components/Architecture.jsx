import React from 'react';
import { motion } from 'framer-motion';

const sections = [
  { num: '01', title: 'ГЛАВНАЯ', desc: 'Hero, таймер, анонсы, Title Partner-слот' },
  { num: '02', title: 'FIGHT CENTER', desc: 'Турнир, Fight Card, билеты, LED-баннеры спонсоров' },
  { num: '03', title: 'РОСТЕР', desc: '40+ бойцов · 18 стран · профили со статистикой' },
  { num: '04', title: 'EVENTS', desc: 'Календарь турниров с быстрым переходом' },
  { num: '05', title: 'МЕДИА', desc: 'Видео, хайлайты, интервью, фотогалереи' },
  { num: '06', title: 'НОВОСТИ', desc: 'SEO-контент для органического трафика' },
  { num: '07', title: 'ПАРТНЁРЫ', desc: 'B2B-раздел с медиа-китом' },
  { num: '08', title: 'PRESS', desc: 'Пресс-киты, логотипы, материалы для СМИ' }
];

const Architecture = () => {
  return (
    <section id="architecture" className="py-24 bg-[var(--black)] border-t border-[var(--border)]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16">
          <h2 className="text-5xl md:text-[80px] font-anton text-white uppercase tracking-wider">
            АРХИТЕКТУРА ПОРТАЛА
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sections.map((sec, idx) => (
            <motion.div
              key={sec.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="relative p-6 bg-[#0a0a0a] rounded-lg border border-white/5 hover:border-[var(--pfl-orange)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,87,34,0.15)] hover:bg-[#111] transition-all duration-300 cursor-pointer group"
            >
              {/* No running border */}

              <div className="relative z-10">
                <div className="text-[var(--pfl-orange)] font-outfit font-bold text-xl mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                  {sec.num}
                </div>
                <h3 className="text-xl font-outfit font-bold text-white mb-2 uppercase tracking-wide">
                  {sec.title}
                </h3>
                <p className="text-[var(--muted)] font-outfit text-sm leading-relaxed">
                  {sec.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Architecture;
