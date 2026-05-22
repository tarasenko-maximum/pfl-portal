import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[var(--black)] relative border-t border-[var(--border)] overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-glow-1 opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <h2 className="text-5xl md:text-[100px] font-anton text-white uppercase mb-6 leading-none">
          ФАЗА 2 НАЧИНАЕТСЯ ЗДЕСЬ.
        </h2>
        <p className="text-xl font-outfit text-[var(--muted)] mb-12">
          Мы готовы создать портал мирового уровня для вашей лиги.
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card border-[var(--pfl-orange)] p-10 md:p-16 max-w-2xl mx-auto text-left relative overflow-hidden group hover:border-[var(--pfl-orange)]/80 transition-colors"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="var(--pfl-orange)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          </div>

          <h3 className="text-4xl md:text-5xl font-anton text-white mb-2 uppercase tracking-wide">МАКСИМ ТАРАСЕНКО</h3>
          <div className="text-[var(--pfl-orange)] font-anton text-xl tracking-widest uppercase mb-8">CBDO · AIMAX</div>

          <div className="space-y-4 font-outfit text-lg">
            <div className="flex items-center gap-4">
              <span className="text-[var(--muted)] w-24">Email</span>
              <a href="mailto:tarasenko.srb@gmail.com" className="text-white hover:text-[var(--pfl-orange)] transition-colors border-b border-white/20 pb-0.5">tarasenko.srb@gmail.com</a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[var(--muted)] w-24">Phone</span>
              <a href="tel:+381631741396" className="text-white hover:text-[var(--pfl-orange)] transition-colors border-b border-white/20 pb-0.5">+381 63 174 13 96</a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[var(--muted)] w-24">Telegram</span>
              <a href="https://t.me/MaximRuSrb" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[var(--pfl-orange)] transition-colors border-b border-white/20 pb-0.5">@MaximRuSrb</a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[var(--muted)] w-24">Website</span>
              <a href="https://aimax.rs" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[var(--pfl-orange)] transition-colors border-b border-white/20 pb-0.5">aimax.rs</a>
            </div>
          </div>

          <div className="mt-12">
            <a href="https://t.me/MaximRuSrb" target="_blank" rel="noopener noreferrer" className="inline-block bg-[var(--pfl-orange)] text-white px-8 py-4 rounded font-anton text-xl uppercase tracking-wider hover:bg-white hover:text-black transition-colors w-full md:w-auto text-center">
              НАПИСАТЬ В TELEGRAM
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
