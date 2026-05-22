import React from 'react';
import { motion } from 'framer-motion';

const Packages = () => {
  return (
    <section id="packages" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-glow-1 opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="badge-orange mb-4">Бизнес-модель</div>
          <h2 className="text-5xl md:text-7xl font-bold font-anton mb-6">ДВА ПАКЕТА. ВЫБЕРИТЕ УРОВЕНЬ.</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* STARTER */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-anton">STARTER</h3>
                <div className="px-3 py-1 bg-[var(--surface-2)] rounded-lg text-xs font-mono text-[var(--muted)] border border-[var(--border)]">
                  Базовый
                </div>
              </div>
              <div className="text-[var(--pfl-orange)] text-3xl font-bold font-mono mb-8 border-b border-[var(--border)] pb-6">
                € 7 000 <span className="text-sm text-[var(--muted)] font-outfit font-normal">setup</span> <br/>
                <span className="text-xl">+ € 150 / мес</span>
              </div>
              
              <ul className="space-y-4 mb-10 text-[var(--muted)] font-outfit">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--pfl-orange)] mt-1"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span> 
                  <span>Fight Center · ростер · события · медиа</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--pfl-orange)] mt-1"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span> 
                  <span>CMS Altrp · языки RU/EN/SR</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--pfl-orange)] mt-1"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span> 
                  <span>Базовая интеграция с соцсетями</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--pfl-orange)] mt-1"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span> 
                  <span>Автопубликации в 2 канала</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--pfl-orange)] mt-1"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span> 
                  <span>SEO · highload · 30–35 дней</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* PROFESSIONAL */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-10 relative flex flex-col justify-between border-[var(--pfl-orange)] shadow-[0_0_40px_rgba(255,87,34,0.15)] bg-[rgba(255,87,34,0.02)]"
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="badge-orange bg-[#1a0904] border-[var(--pfl-orange)] px-4 py-1 text-[var(--pfl-orange)] font-bold shadow-[0_0_15px_rgba(255,87,34,0.5)]">
                РЕКОМЕНДУЕМ
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-anton text-white">PROFESSIONAL</h3>
                <div className="px-3 py-1 bg-[var(--pfl-orange-bg)] rounded-lg text-xs font-mono text-[var(--pfl-orange)] border border-[var(--pfl-orange)]">
                  Премиум
                </div>
              </div>
              
              <div className="text-white text-3xl font-bold font-mono mb-8 border-b border-[rgba(255,87,34,0.2)] pb-6">
                € 11 000 <span className="text-sm text-[var(--muted)] font-outfit font-normal">setup</span> <br/>
                <span className="text-xl">+ € 350 / мес</span>
              </div>
              
              <ul className="space-y-4 mb-10 font-outfit text-[var(--white)] font-medium">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--pfl-orange)] mt-1"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span> 
                  <span>Всё из Starter +</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--pfl-orange)] mt-1"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span> 
                  <span>Личные кабинеты · ticketing · Web Push</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--pfl-orange)] mt-1"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span> 
                  <span>AI-агент FAQ · автопубликации везде</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--pfl-orange)] mt-1"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span> 
                  <span>Многоуровневая спонсорская модель (Сценарий 1+2)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--pfl-orange)] mt-1"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span> 
                  <span>Расширенная AEO-оптимизация + мониторинг</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--pfl-orange)] mt-1"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span> 
                  <span>SLA 99.9% · on-call 24/7 · 45–55 дней</span>
                </li>
              </ul>
            </div>
            
            <a href="mailto:tarasenko.srb@gmail.com" className="btn-primary w-full text-center">Выбрать Professional</a>
          </motion.div>
        </div>
        
        <p className="text-center mt-12 font-outfit text-[var(--muted)] max-w-2xl mx-auto bg-[var(--surface-1)] p-4 rounded-xl border border-[var(--border)]">
          💡 <strong className="text-white">Рекомендация AIMAX: Professional.</strong> Окупается за 1–2 средних турнира при активных продажах билетов через портал и работе с генеральным партнёром.
        </p>
      </div>
    </section>
  );
};

export default Packages;
