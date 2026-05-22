import React from 'react';
import { motion } from 'framer-motion';

const tasks = [
  {
    num: '01',
    title: 'СПОНСОРЫ',
    desc: 'Превращаем кейс Лиги Ставок в систему. Премиальные слоты, отчёты в реальном времени, локальные партнёры по странам.'
  },
  {
    num: '02',
    title: 'БРЕНД',
    desc: 'Уровень UFC, BKFC и ONE Championship. Сигнал спонсорам и СМИ — PFL играет в высшей лиге.'
  },
  {
    num: '03',
    title: 'МОНЕТИЗАЦИЯ',
    desc: 'Билеты, мерч, подписки, PPV. Каждый фанат — измеримая бизнес-единица.'
  },
  {
    num: '04',
    title: 'МЕДИА-ЭКОСИСТЕМА',
    desc: '150M+ просмотров из 7 каналов → одна точка сборки и измерения.'
  },
  {
    num: '05',
    title: 'ЭКСПАНСИЯ',
    desc: 'Мультиязык с первого дня. Узбекистан, Германия, ОАЭ — без отдельного договора.'
  }
];

const FiveTasks = () => {
  return (
    <section id="tasks" className="py-24 bg-[var(--black)]">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-[80px] font-anton uppercase text-white leading-none">
            5 ЦЕЛЕЙ. ОДИН ИНСТРУМЕНТ.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {tasks.map((task, idx) => (
            <motion.div
              key={task.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#111111] p-6 rounded-xl border-t-2 border-[var(--pfl-orange)] hover:bg-[#151515] transition-colors relative"
            >
              <div className="text-[var(--dim)] font-anton text-4xl mb-4 opacity-50">
                {task.num}
              </div>
              <h3 className="font-anton text-2xl mb-3 text-white uppercase tracking-wider">
                {task.title}
              </h3>
              <p className="font-outfit text-[var(--muted)] text-sm leading-relaxed">
                {task.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FiveTasks;
