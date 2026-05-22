import React from 'react';
import { motion } from 'framer-motion';

const tableData = [
  { p: 'Хостинг', s: 'Cloudflare Pages / Vercel', pro: 'Cloudflare Enterprise' },
  { p: 'База данных', s: 'Supabase (базовая)', pro: 'Supabase (выделенная)' },
  { p: 'CMS Altrp', s: 'Включено', pro: 'Включено' },
  { p: 'Мониторинг', s: 'Базовый', pro: '24/7 On-call' },
  { p: 'SLA', s: '99.0%', pro: '99.9%' },
  { p: 'Резервное копирование', s: 'Еженедельно', pro: 'Ежедневно' },
  { p: 'Поддержка языков', s: 'RU, EN, SR', pro: '+3 языка в квартал' },
  { p: 'AI-агент', s: '—', pro: 'Включено' },
  { p: 'Билетная система', s: 'Интеграция', pro: 'Нативная (без %)' },
  { p: 'SEO / AEO', s: 'Базовое', pro: 'Продвинутое' },
  { p: 'Спонсорская система', s: 'Уровень 1', pro: 'Многоуровневая' },
  { p: 'Push-уведомления', s: '—', pro: 'Web Push' }
];

const SaasTable = () => {
  return (
    <section id="saas" className="py-24 bg-[var(--black-deep)]">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-[60px] font-anton text-white uppercase tracking-wider leading-tight">
            ОБСЛУЖИВАНИЕ. <br className="hidden md:block" /> ПОРТАЛ КАК ЖИВАЯ СИСТЕМА.
          </h2>
        </div>

        <div className="overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full text-left font-outfit min-w-[600px]">
            <thead>
              <tr className="bg-[#111] border-b border-[var(--border)]">
                <th className="p-5 font-anton text-[var(--muted)] text-xl uppercase tracking-wider w-1/3">Параметр</th>
                <th className="p-5 font-anton text-[var(--muted)] text-xl uppercase tracking-wider w-1/3">STARTER</th>
                <th className="p-5 font-anton text-[var(--pfl-orange)] text-xl uppercase tracking-wider w-1/3">PROFESSIONAL</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, idx) => (
                <tr key={idx} className={`border-b border-[var(--border)] ${idx % 2 === 0 ? 'bg-[#050505]' : 'bg-[#0a0a0a]'}`}>
                  <td className="p-4 text-white/80 font-medium">{row.p}</td>
                  <td className="p-4 text-[var(--muted)]">{row.s}</td>
                  <td className="p-4 text-white font-bold">{row.pro}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default SaasTable;
