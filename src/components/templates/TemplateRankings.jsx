import React from 'react';

const TemplateRankings = () => {
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
          <span className="text-red-600 cursor-pointer">Rankings</span>
          <span className="hover:text-red-600 cursor-pointer transition-colors">News</span>
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
      <div className="relative h-[300px] bg-[#111] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src="/images/action.png" alt="Hero Background" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white uppercase tracking-wider mb-2">RANKINGS</h1>
          <div className="text-xs text-white/50 uppercase tracking-widest font-bold">Home / Rankings</div>
        </div>
      </div>

      {/* Rankings Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-6">
          
          {[
            { cat: 'LIGHTWEIGHT', champ: 'JANGO', img: '/images/jango.png', flag: '🇮🇪' },
            { cat: 'WELTERWEIGHT', champ: 'MAGOMED', img: '/images/magomed.png', flag: '🇷🇺' },
            { cat: 'MIDDLEWEIGHT', champ: 'SILVA', img: '/images/action.png', flag: '🇧🇷' },
            { cat: 'HEAVYWEIGHT', champ: 'JACKSON', img: '/images/mokap2.webp', flag: '🇺🇸' }
          ].map((div, i) => (
             <div key={i} className="flex flex-col bg-white">
               {/* Champion Header */}
               <div className="bg-red-600 pt-6 px-4 relative overflow-hidden h-[300px] flex flex-col justify-end items-center">
                 <div className="absolute top-4 left-4 bg-white text-red-600 text-[9px] font-bold px-2 py-1 uppercase">{div.cat} DIVISION</div>
                 <div className="absolute top-10 left-4 bg-black text-white text-[9px] font-bold px-2 py-1 uppercase">TITLE HOLDER</div>
                 <div className="absolute top-4 right-4 text-2xl">{div.flag}</div>
                 <img src={div.img} className="w-full max-h-[250px] object-cover object-top mask-image-gradient-bottom" alt={div.champ} />
                 
                 <div className="absolute bottom-0 left-0 w-full bg-black text-white text-center py-3">
                   <h3 className="font-black uppercase tracking-wider">{div.champ}</h3>
                 </div>
               </div>
               
               {/* Champion Title */}
               <div className="text-center py-4 border-b border-gray-200">
                 <span className="text-xs font-bold uppercase">{div.cat} <span className="text-red-600">CHAMPION</span></span>
               </div>

               {/* Rankings List */}
               <div className="flex flex-col text-sm font-outfit">
                 {[1, 2, 3, 4, 5, 6, 7, 8].map(rank => (
                   <div key={rank} className="flex justify-between items-center py-3 px-4 border-b border-gray-100 hover:bg-gray-50">
                     <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-500">{rank}</div>
                     <div className="font-bold text-gray-700 uppercase text-xs">FIGHTER NAME</div>
                   </div>
                 ))}
               </div>
             </div>
          ))}

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

export default TemplateRankings;
