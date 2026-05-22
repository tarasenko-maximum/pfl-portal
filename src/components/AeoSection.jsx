import React from 'react';
import { motion } from 'framer-motion';

const AeoSection = () => {
  return (
    <section id="aeo" className="py-24 bg-[var(--black-deep)] border-t border-[var(--border)]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16">
          <h2 className="text-5xl md:text-[80px] font-anton text-white uppercase tracking-wider mb-4 leading-[1.1]">
            <span className="block">GOOGLE ИЗМЕНИЛСЯ</span>
            <span className="block">19 МАЯ 2026.</span>
          </h2>
          <p className="text-[var(--muted)] font-outfit text-sm max-w-4xl leading-relaxed mt-4">
            На конференции Google I/O Google анонсировал самое крупное обновление поиска за 25 лет. Новый "Intelligent Search box" на базе Gemini 3.5 Flash переводит поиск из формата ранжированных ссылок в AI-агентов и синтезированные ответы. TechCrunch: "конец эпохи десяти синих ссылок".
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-6xl md:text-[100px] font-anton text-[var(--pfl-orange)] mb-6 drop-shadow-[0_0_30px_rgba(255,87,34,0.4)]">
              AEO ≠ SEO.
            </div>
            <p className="text-[var(--muted)] font-outfit text-lg leading-relaxed mb-8">
              AEO (Answer Engine Optimization) — оптимизация под выдачу LLM-системами и AI-агентами (Gemini, ChatGPT, Perplexity, Claude). AIMAX — одна из немногих студий в регионе, которая работает в этом направлении уже несколько месяцев и закладывает принципы AEO в архитектуру сайтов на этапе разработки.
            </p>
            <div className="p-4 rounded-lg bg-[var(--pfl-orange)]/10 border border-[var(--pfl-orange)]/30 text-white font-outfit text-sm">
              <span className="text-[var(--pfl-orange)] font-bold uppercase tracking-wider">Окно возможности 6–18 месяцев.</span> Конкуренты — региональные MMA и bare-knuckle проекты — только начинают перестраиваться.
            </div>
          </div>

          <div className="space-y-4">
            {[
              { t: 'Структурированный контент', d: 'машиночитаемая база знаний о лиге' },
              { t: 'Schema.org SportsEvent', d: 'стандарт, понятный всем LLM' },
              { t: 'Факт-первая подача', d: 'ответы в начале документа' },
              { t: 'Разговорные запросы', d: '«когда следующий бой Никархо?»' },
              { t: 'Agent-ready feed', d: 'JSON-LD, sitemap для AI-агентов' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-4 bg-[#111] p-4 rounded-lg border border-white/5"
              >
                <div className="text-[var(--liga-green)] flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <div className="text-white font-bold font-outfit text-sm">{item.t}</div>
                  <div className="text-[var(--dim)] text-xs">{item.d}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-16 p-8 bg-[var(--black)] border border-white/10 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-glow-1 opacity-20 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          <h3 className="text-2xl font-anton text-white mb-4 uppercase">Зачем это нужно порталу лиги?</h3>
          <p className="text-[var(--muted)] font-outfit text-lg leading-relaxed max-w-4xl relative z-10">
            Новые форматы поиска (AI Overviews) означают, что часть пользователей будет получать ответы на свои вопросы прямо в поисковой выдаче, не переходя по синим ссылкам. Оптимизируя архитектуру портала под эти алгоритмы (AEO) с первого дня, PFL гарантирует, что искусственный интеллект Google и других систем будет ссылаться именно на официальный первоисточник лиги. Это сохраняет видимость бренда, формирует доверие и привлекает новую аудиторию, которая ищет статистику, даты боев и новости через общение с ИИ.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AeoSection;
