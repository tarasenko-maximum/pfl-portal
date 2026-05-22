import React from 'react';

const TemplateNews = () => {
  return (
    <div className="w-full bg-white font-sans text-black relative">
      {/* Top Bar */}
      <div className="bg-[#111] text-white/70 text-xs py-2 px-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="bg-red-600 text-white font-bold px-2 py-0.5 text-[10px] uppercase">Live</span>
          <span className="hidden md:inline font-outfit">'PFL 14: A night that will amaze everyone'</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="uppercase text-[10px] tracking-widest font-bold">Follow Us</span>
          <div className="flex gap-3">
            <span>fb</span>
            <span>tw</span>
            <span>ig</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white px-6 py-4 flex justify-between items-center shadow-md relative z-20">
        <div className="font-anton text-4xl italic tracking-tighter text-black flex items-center gap-2">
          PFL <span className="text-red-600">.</span>
        </div>
        <nav className="hidden lg:flex gap-8 text-xs font-bold uppercase tracking-widest text-black/80">
          <span className="hover:text-red-600 cursor-pointer transition-colors">Home</span>
          <span className="hover:text-red-600 cursor-pointer transition-colors">About</span>
          <span className="hover:text-red-600 cursor-pointer transition-colors">Events</span>
          <span className="hover:text-red-600 cursor-pointer transition-colors">Rankings</span>
          <span className="text-red-600 cursor-pointer">News</span>
          <span className="hover:text-red-600 cursor-pointer transition-colors">Athletes</span>
          <span className="hover:text-red-600 cursor-pointer transition-colors">Contact</span>
        </nav>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-3 bg-[var(--liga-green)] px-4 py-2 rounded shadow-[0_0_15px_rgba(0,255,102,0.3)]">
             <span className="text-[10px] uppercase font-bold text-black tracking-widest">Title Partner</span>
             <img src="/images/ls_logo_white.png" className="h-5" alt="Liga Stavok" />
          </div>
          <button className="bg-red-600 text-white px-6 py-3 font-bold text-xs uppercase tracking-widest hover:bg-black transition-colors">
            Buy Ticket
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative h-[400px] bg-[#111] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src="/images/action.png" alt="Hero Background" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="relative z-10 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-wider mb-2">SINGLE NEWS</h2>
          <div className="text-xs text-white/50 uppercase tracking-widest font-bold">Home / Single News</div>
        </div>
      </div>

      {/* News Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        {/* Main Article */}
        <div className="md:col-span-2">
           <img src="/images/jango.png" className="w-full h-[500px] object-cover mb-6 grayscale hover:grayscale-0 transition-all duration-500" alt="News Article" />
           <div className="flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-widest mb-4">
             <span className="w-2 h-2 bg-red-600 inline-block"></span> DECEMBER 24, 2026
           </div>
           <h2 className="text-4xl md:text-5xl font-black uppercase leading-none mb-6">
             BOUTS THAT COULD STEAL THE SHOW AT PFL 14
           </h2>
             <p>Предстоящий турнир PFL 14 обещает стать самым масштабным событием в истории европейских кулачных боёв. Впервые на арене в Белграде сойдутся лучшие бойцы из 12 стран, а главный бой вечера решит судьбу чемпионского пояса в лёгком весе.</p>
             <p>Организаторы уже подтвердили, что билеты на VIP-места были распроданы в течение первых 48 часов после анонса. Трансляция турнира будет вестись на 3 языках, а благодаря новому партнерству с «Лигой Ставок» зрители получат доступ к уникальной интерактивной статистике прямо во время поединков.</p>
             
             <blockquote className="border-l-4 border-red-600 pl-6 py-2 my-8 italic text-xl font-bold text-black">
               "Этот вечер навсегда изменит то, как мы смотрим на кулачные бои в Европе. Ставки высоки как никогда, и никто не захочет уступить."
             </blockquote>
             
             <p>Особое внимание фанатов приковано к возвращению в ринг сербского тяжеловеса. Его предыдущий бой завершился блестящим нокаутом на 40-й секунде. Сможет ли он повторить свой успех перед родной публикой? Узнаем уже 24 декабря. Prime Fighting League выводит стандарты спортивных трансляций на совершенно новый уровень.</p>
           </div>
        </div>

        {/* Sidebar */}
        <div>
           {/* Search Box */}
           <div className="bg-gray-100 p-6 mb-10">
             <div className="flex border border-gray-300 bg-white">
               <input type="text" placeholder="Type Here" className="w-full px-4 py-3 outline-none text-sm" />
               <button className="px-4 text-gray-500">🔍</button>
             </div>
           </div>

           {/* Recent News */}
           <div className="mb-10">
             <h3 className="font-black text-xl uppercase tracking-wider mb-6">RECENT NEWS</h3>
             <div className="space-y-4">
               {[
                 { title: 'FULL CARD REVEALED FOR FRIDAY FIGHTS', img: '/images/action.png' },
                 { title: 'MAGOMED PREPARES FOR TITLE DEFENSE', img: '/images/magomed.png' },
                 { title: 'NEW SPONSORSHIP DEAL ANNOUNCED', img: '/images/mokap1.webp' }
               ].map((news, i) => (
                 <div key={i} className="flex gap-4 p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                   <img src={news.img} className="w-20 h-20 object-cover" alt="Thumb" />
                   <div>
                     <div className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-1">DECEMBER 24, 2026</div>
                     <div className="font-bold text-sm uppercase leading-tight">{news.title}</div>
                   </div>
                 </div>
               ))}
             </div>
           </div>

           {/* Upcoming Match Widget */}
           <div>
             <h3 className="font-black text-xl uppercase tracking-wider mb-6">UPCOMING MATCH</h3>
             <div className="bg-[#111] p-6 text-white text-center">
               <div className="text-red-500 font-bold text-[10px] uppercase tracking-widest mb-2">TITLE BOUT</div>
               <div className="flex justify-between items-center mb-6 relative">
                 <img src="/images/jango.png" className="w-16 h-16 object-cover rounded-full border-2 border-white/20" alt="J" />
                 <div className="flex flex-col items-center relative z-10 scale-125">
                    <div className="text-xl font-black italic text-red-500 mb-2">VS</div>
                    <div className="bg-[var(--liga-green)] px-3 py-1.5 rounded shadow-[0_0_10px_rgba(0,255,102,0.4)]">
                       <img src="/images/ls_logo_white.png" className="h-4" alt="Liga Stavok" />
                    </div>
                 </div>
                 <img src="/images/magomed.png" className="w-16 h-16 object-cover rounded-full border-2 border-white/20" alt="M" />
               </div>
               <div className="font-bold uppercase text-sm mb-1">JANGO VS MAGOMED</div>
               <div className="text-gray-400 text-xs font-outfit mb-6">Lightweight Championship</div>
               <button className="w-full bg-red-600 py-3 font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors">View Details</button>
             </div>
           </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div>
            <div className="font-anton text-4xl italic tracking-tighter text-white flex items-center gap-2 mb-6">
              PFL <span className="text-red-600">.</span>
            </div>
            <p className="text-white/50 text-sm font-outfit mb-6">
              The premier bare-knuckle and mixed martial arts organization in the region.
            </p>
            <div className="flex items-center gap-4 bg-[var(--liga-green)] px-6 py-3 rounded-lg w-max shadow-[0_0_20px_rgba(0,255,102,0.2)]">
               <span className="text-[12px] uppercase font-bold text-black tracking-widest">General Partner</span>
               <img src="/images/ls_logo_white.png" className="h-6" alt="Liga Stavok" />
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg uppercase mb-6">Explore</h4>
            <ul className="space-y-3 text-white/50 text-sm font-outfit">
              <li className="hover:text-red-500 cursor-pointer">Athletes</li>
              <li className="hover:text-red-500 cursor-pointer">Rankings</li>
              <li className="hover:text-red-500 cursor-pointer">Events</li>
              <li className="hover:text-red-500 cursor-pointer">News</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg uppercase mb-6">Legal</h4>
            <ul className="space-y-3 text-white/50 text-sm font-outfit">
              <li className="hover:text-red-500 cursor-pointer">Privacy Policy</li>
              <li className="hover:text-red-500 cursor-pointer">Terms of Service</li>
              <li className="hover:text-red-500 cursor-pointer">Cookie Policy</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg uppercase mb-6">Newsletter</h4>
            <div className="flex border border-white/20 rounded overflow-hidden">
              <input type="email" placeholder="Your Email" className="bg-transparent px-4 py-2 text-sm w-full outline-none" />
              <button className="bg-red-600 px-4 py-2 font-bold uppercase text-xs">Join</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TemplateNews;
