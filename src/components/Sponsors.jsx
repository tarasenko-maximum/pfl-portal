import React from 'react';
import { motion } from 'framer-motion';

const sponsorSlots = [
  { title: 'Title Partner', desc: 'ротация логотипов на первом экране главной и Fight Center' },
  { title: 'Прайм-слоты', desc: 'динамические места рядом с контентом, учёт показов' },
  { title: 'Тематические интеграции', desc: 'на страницах конкретных бойцов / весовых категорий' },
  { title: 'Раздел "Партнёры"', desc: 'витрина с медиа-китом и формой заявки' },
  { title: 'Отчётность', desc: 'ежемесячный отчёт, дашборд в реальном времени (Professional)' }
];

const Sponsors = () => {
  return (
    <section id="sponsors" className="py-24 bg-[var(--black-deep)] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-glow-2 opacity-20"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="badge-orange mb-4">ИНТЕГРАЦИИ</div>
          <h2 className="text-4xl md:text-[80px] font-anton text-white uppercase tracking-wider leading-[1.1] md:leading-none break-words">
            СПОНСОРСКАЯ МОДЕЛЬ. БЕЗ ЭМОЦИЙ.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* Секция А */}
          <div className="flex flex-col h-full bg-[#0a0a0a] rounded-2xl p-8 border border-white/5">
            <h3 className="text-xl md:text-2xl font-anton text-[var(--pfl-orange)] mb-6 md:mb-8 uppercase tracking-wider break-words">
              Архитектура спонсорских мест
            </h3>
            <div className="flex-1 flex flex-col justify-between space-y-4">
              {sponsorSlots.map((slot, idx) => (
                <div key={idx} className="flex gap-3 md:gap-4 p-4 md:p-5 rounded-lg bg-[#111] border border-white/5 hover:-translate-y-1 hover:bg-[#151515] hover:border-[var(--pfl-orange)]/50 hover:shadow-[0_15px_30px_rgba(255,87,34,0.15)] hover:z-10 relative transition-all duration-300 cursor-pointer group flex-1">
                  <div className="text-[var(--pfl-orange)] font-anton text-lg md:text-xl group-hover:scale-110 transition-transform">{idx + 1}</div>
                  <div>
                    <h4 className="font-outfit font-bold text-white mb-1 group-hover:text-[var(--pfl-orange)] transition-colors">{slot.title}</h4>
                    <p className="text-[var(--muted)] text-xs md:text-sm group-hover:text-white/80 transition-colors leading-tight break-words">{slot.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Секция Б */}
          <div className="glass-card p-8 md:p-10 border-[var(--pfl-orange)]/30 relative flex flex-col h-full justify-between">
            <div>
              <h3 className="text-xl md:text-2xl font-anton text-white mb-6 md:mb-8 uppercase tracking-wider break-words">
                Многоуровневая модель
              </h3>
              
              <div className="bg-[#050505] rounded-xl p-3 md:p-6 mb-8 font-mono text-[8px] sm:text-[10px] md:text-sm border border-white/10 overflow-x-auto">
                <pre className="text-[var(--dim)] whitespace-pre">
                  {`        ┌─ РОССИЯ ──── `}<span className="text-[var(--liga-green)]">Лига Ставок (Title Partner)</span>{`\n`}
                  {`PFL ────┼─ СЕРБИЯ ──── MaxBet (локальный партнёр)\n`}
                  {`        ├─ УЗБЕКИСТАН ─ локальный букмекер\n`}
                  {`        └─ ОАЭ ──────── локальный партнёр`}
                </pre>
              </div>

              <p className="text-[var(--muted)] font-outfit text-sm leading-relaxed mb-8">
                Реальная ситуация PFL: разные страны — разные регуляторы — разные сильные спонсоры. Стандартный сайт с одним блоком «генеральный партнёр» эту реальность не отражает и недоиспользует потенциал.
              </p>

              <div className="space-y-6 mb-10">
                <div className="border-l-2 border-[var(--dim)] pl-4">
                  <h4 className="text-white font-bold text-sm mb-2">Сценарий 1 — Региональная сегментация.</h4>
                  <p className="text-[var(--muted)] text-sm">Один сайт, разные наборы спонсоров на разных языковых версиях.</p>
                </div>
                <div className="border-l-2 border-[var(--pfl-orange)] pl-4">
                  <h4 className="text-white font-bold text-sm mb-2">Сценарий 2 — Отдельный бренд-сайт.</h4>
                  <p className="text-[var(--muted)] text-sm">Поддомен с палитрой локального спонсора (например, sr.pfl.com под MaxBet).</p>
                </div>
              </div>
            </div>

            <div className="text-xl md:text-3xl font-anton text-[var(--pfl-orange)] uppercase tracking-wider leading-tight whitespace-normal break-words mt-10 md:mt-0">
              Это не "баннеры на сайте". Это управляемое медиа-пространство.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
