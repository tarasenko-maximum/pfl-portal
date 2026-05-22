import React from 'react';
import { motion } from 'framer-motion';
import TemplateHome from './templates/TemplateHome';
import TemplateRankings from './templates/TemplateRankings';
import TemplateNews from './templates/TemplateNews';
import TemplateEvent from './templates/TemplateEvent';

const Mockups = () => {
  return (
    <section id="mockups" className="py-24 bg-[var(--black-deep)] border-t border-[var(--border)] overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-[80px] font-anton text-white uppercase tracking-wider leading-none mb-6">
            ПРИМЕРЫ ИНТЕРФЕЙСА
          </h2>
          <p className="text-[var(--muted)] font-outfit text-xl max-w-3xl mx-auto">
            Макеты портала и интеграции генерального партнёра в высоком разрешении.
          </p>
        </div>

        <div className="space-y-32">
          {/* Template 1: Главная Страница */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="text-2xl font-anton text-[var(--pfl-orange)] mb-6 tracking-widest uppercase">01 / Home Page Template</div>
            
            <div className="bg-[#1a1a1a] p-4 rounded-t-2xl border border-white/10 border-b-0 flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="bg-[#111] px-4 py-2 rounded text-xs text-white/50 tracking-wider">
                pfl.rs
              </div>
            </div>

            <div className="border border-white/10 rounded-b-2xl overflow-hidden bg-white relative">
               <TemplateHome />
            </div>
          </motion.div>

          {/* Template 2: Rankings */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="text-2xl font-anton text-[var(--pfl-orange)] mb-6 tracking-widest uppercase">02 / Rankings Page Template</div>
            
            <div className="bg-[#1a1a1a] p-4 rounded-t-2xl border border-white/10 border-b-0 flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="bg-[#111] px-4 py-2 rounded text-xs text-white/50 tracking-wider">
                pfl.rs/rankings
              </div>
            </div>

            <div className="border border-white/10 rounded-b-2xl overflow-hidden bg-white relative">
               <TemplateRankings />
            </div>
          </motion.div>

          {/* Template 3: Single News */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="text-2xl font-anton text-[var(--pfl-orange)] mb-6 tracking-widest uppercase">03 / Single News Template</div>
            
            <div className="bg-[#1a1a1a] p-4 rounded-t-2xl border border-white/10 border-b-0 flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="bg-[#111] px-4 py-2 rounded text-xs text-white/50 tracking-wider">
                pfl.rs/news/stealing-the-show
              </div>
            </div>

            <div className="border border-white/10 rounded-b-2xl overflow-hidden bg-white relative">
               <TemplateNews />
            </div>
          </motion.div>

          {/* Template 4: Event / Roster */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="text-2xl font-anton text-[var(--pfl-orange)] mb-6 tracking-widest uppercase">04 / Event Highlights Template</div>
            
            <div className="bg-[#1a1a1a] p-4 rounded-t-2xl border border-white/10 border-b-0 flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="bg-[#111] px-4 py-2 rounded text-xs text-white/50 tracking-wider">
                pfl.rs/events/superstars-2026
              </div>
            </div>

            <div className="border border-white/10 rounded-b-2xl overflow-hidden bg-white relative">
               <TemplateEvent />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Mockups;
