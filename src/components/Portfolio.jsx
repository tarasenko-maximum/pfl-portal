import React from 'react';
import { motion } from 'framer-motion';

const portfolioItems = [
  { url: 'pfl.rs', cat: 'Спорт / Лига кулачных боёв', desc: 'Лендинг Prime Fighting League — Сербия (Фаза 1)' },
  { url: 'eventor.space', cat: 'Events / SaaS', desc: 'Платформа управления мероприятиями' },
  { url: 'vmaevdubae.ru', cat: 'Travel / Event, ОАЭ', desc: 'Авторский тур #ВМаевДубае' },
  { url: 'travelsunday.ru', cat: 'Travel', desc: 'Туристический сервис SunDay' },
  { url: 'unrip.eu', cat: 'B2B / AI / SaaS', desc: 'Европейская AI-платформа для бизнеса' },
  { url: 'cesavo.de', cat: 'Корпоративный, Германия', desc: 'B2B-сайт мультиязычный (DE/EN)' },
  { url: 'thefour.pro', cat: 'Premium / Luxury', desc: 'Премиум-проект, визуальная подача' },
  { url: 'finurcons.ru', cat: 'Финансовый консалтинг', desc: 'Сайт консалтинговой компании' },
  { url: 'aimax-invest.vercel.app', cat: 'SaaS / Pitch', desc: 'Инвестиционная витрина AIMAX' },
  { url: 'cogniservice.com', cat: 'AI / SaaS', desc: 'AI-диспетчер для бизнеса (на Altrp)' },
  { url: 'timestud.ru', cat: 'EdTech / AI', desc: 'AI-планировщик для студентов' },
  { url: 'youkeeps.com', cat: 'SaaS', desc: 'Продуктовая разработка' },
  { url: 'denotary.pages.dev', cat: 'LegalTech', desc: 'Цифровая нотариальная платформа' },
  { url: 'crypto.maximumns.rs', cat: 'FinTech / Crypto', desc: 'Крипто-платежи для бизнеса (Сербия)' },
  { url: 'maximum-327.pages.dev', cat: 'Lifestyle / Portal', desc: 'Мультиязычный портал MAXIMUM Group' },
  { url: 'smirnovacouture.ru', cat: 'Fashion / Couture', desc: 'Сайт модного бренда' },
  { url: 'gastrobaradler.ru', cat: 'HoReCa / Ресторан', desc: 'Сайт гастро-бара' },
  { url: 'happywomans.ru', cat: 'Lifestyle / Wellness', desc: 'Женский lifestyle-проект' },
  { url: 'neetka.ru', cat: 'Community / Networking', desc: '«Нить» — нетворкинг' },
  { url: 'ai.sashatoxic.com', cat: 'Music / Artist', desc: 'Музыкальный проект Sasha Toxic' },
  { url: 'zandat-musik.com', cat: 'Music / Artist, Германия', desc: 'Музыкальный проект' }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-[var(--black-deep)] relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16">
          <h2 className="text-4xl md:text-[60px] font-anton text-white uppercase tracking-wider mb-4 leading-tight">
            21 ПРОЕКТ. 7 СТРАН. <br className="hidden md:block"/>
            ОТ ЛЕНДИНГА ДО AI-СЕРВИСА.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolioItems.map((item, idx) => (
            <motion.a
              key={idx}
              href={`https://${item.url}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.1 }}
              className="group block p-6 bg-[#111] border border-white/5 rounded-xl hover:border-[var(--pfl-orange)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="font-mono text-white text-lg font-bold group-hover:text-[var(--pfl-orange)] transition-colors">{item.url}</div>
                <div className="text-[var(--dim)] group-hover:text-[var(--pfl-orange)] transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </div>
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[var(--pfl-orange)] mb-2">{item.cat}</div>
              <p className="text-[var(--muted)] font-outfit text-sm leading-relaxed">{item.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
