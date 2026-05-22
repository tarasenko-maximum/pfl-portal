import React from 'react';
import { motion } from 'framer-motion';

const TemplateHome = () => {
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
          <span className="text-red-600 cursor-pointer">Home</span>
          <span className="hover:text-red-600 cursor-pointer transition-colors">About</span>
          <span className="hover:text-red-600 cursor-pointer transition-colors">Events</span>
          <span className="hover:text-red-600 cursor-pointer transition-colors">Rankings</span>
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
      <div className="relative h-[600px] bg-[#111] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src="/images/action.png" alt="Hero Background" className="w-full h-full object-cover opacity-60" />
        </div>

        {/* Diagonal Red Overlay */}
        <div className="absolute top-0 left-0 w-full h-full z-10 flex">
          <div className="w-[60%] h-full bg-red-600/90 transform -skew-x-12 origin-top-left -ml-20 flex flex-col justify-center px-32 relative">
             <div className="transform skew-x-12">
                <div className="text-white/80 font-bold text-sm tracking-widest uppercase mb-4 flex items-center gap-2">
                  <span className="w-4 h-4 bg-white inline-block"></span> DECEMBER 24, 2026
                </div>
                <h2 className="text-6xl md:text-8xl font-black text-white italic uppercase leading-[0.9]">
                  JANGO IS TRAINING WITH TOP FIGHTERS
                </h2>
                <div className="flex gap-2 mt-8">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  <div className="w-3 h-3 rounded-full bg-white/30"></div>
                </div>
             </div>
          </div>
        </div>

        {/* Right Side News Overlay */}
        <div className="absolute top-0 right-12 w-[350px] z-20 h-full flex flex-col justify-center gap-4 hidden lg:flex">
          <div className="bg-white p-4 flex justify-between items-center shadow-lg">
            <span className="font-bold text-sm uppercase">News</span>
            <span className="text-xs text-gray-500 uppercase">News Details</span>
          </div>
          {[1, 2, 3].map((item) => (
             <div key={item} className={`flex gap-4 p-2 bg-black/40 backdrop-blur-sm border ${item === 2 ? 'border-red-500 bg-black/60' : 'border-white/10'}`}>
                <img src={`/images/${item === 1 ? 'mokap2.webp' : item === 2 ? 'jango.png' : 'action.png'}`} className="w-24 h-16 object-cover" alt="News Thumb" />
                <div className="flex flex-col justify-center">
                  <div className="text-[10px] text-red-500 font-bold mb-1 uppercase">29 DEC</div>
                  <div className="text-white text-xs font-bold leading-tight uppercase">ELITE FIGHTS FULL FIGHTCARD</div>
                </div>
             </div>
          ))}
        </div>
      </div>

      {/* Upcoming Fights */}
      <div className="max-w-6xl mx-auto px-6 py-16 -mt-20 relative z-30">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white shadow-2xl p-8 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>
            <div className="flex justify-between items-end mb-8 relative z-10">
              <img src="/images/jango.png" className="w-40 h-40 object-cover object-top mask-image-gradient-bottom" alt="Fighter 1" />
              <div className="flex flex-col items-center mb-6 z-20">
                <div className="text-4xl font-black italic mb-3">VS</div>
                <div className="bg-[var(--liga-green)] px-4 py-2 rounded shadow-[0_0_20px_rgba(0,255,102,0.4)] transform scale-125">
                   <img src="/images/ls_logo_white.png" className="h-6" alt="Liga Stavok" />
                </div>
              </div>
              <img src="/images/magomed.png" className="w-40 h-40 object-cover object-top mask-image-gradient-bottom" alt="Fighter 2" />
            </div>
            <div className="text-center relative z-10">
              <div className="text-[10px] text-gray-500 font-bold tracking-widest uppercase mb-2">DECEMBER 24, 2026</div>
              <h3 className="text-2xl font-black uppercase mb-1">JANGO <span className="text-red-600">VS</span> MAGOMED</h3>
              <p className="text-sm text-gray-500 uppercase tracking-widest mb-6">BELGRADE ARENA</p>
              <div className="flex justify-center gap-4">
                <button className="bg-black text-white px-6 py-2 text-xs font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors">Detail</button>
                <button className="bg-red-600 text-white px-6 py-2 text-xs font-bold uppercase tracking-wider hover:bg-red-700 transition-colors">Tickets</button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-2xl p-8 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gray-300 group-hover:bg-red-600 transition-colors"></div>
            <div className="flex justify-between items-end mb-8 relative z-10">
              <img src="/images/action.png" className="w-40 h-40 object-cover object-top mask-image-gradient-bottom grayscale group-hover:grayscale-0 transition-all" alt="Fighter 1" />
              <div className="flex flex-col items-center mb-6 z-20">
                <div className="text-4xl font-black italic mb-3">VS</div>
                <div className="bg-[var(--liga-green)] px-4 py-2 rounded shadow-[0_0_20px_rgba(0,255,102,0.4)] transform scale-125">
                   <img src="/images/ls_logo_white.png" className="h-6" alt="Liga Stavok" />
                </div>
              </div>
              <img src="/images/mokap2.webp" className="w-40 h-40 object-cover object-top mask-image-gradient-bottom grayscale group-hover:grayscale-0 transition-all" alt="Fighter 2" />
            </div>
            <div className="text-center relative z-10">
              <div className="text-[10px] text-gray-500 font-bold tracking-widest uppercase mb-2">DECEMBER 24, 2026</div>
              <h3 className="text-2xl font-black uppercase mb-1">SILVA <span className="text-red-600">VS</span> GARCIA</h3>
              <p className="text-sm text-gray-500 uppercase tracking-widest mb-6">BELGRADE ARENA</p>
              <div className="flex justify-center gap-4">
                <button className="bg-black text-white px-6 py-2 text-xs font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors">Detail</button>
                <button className="bg-red-600 text-white px-6 py-2 text-xs font-bold uppercase tracking-wider hover:bg-red-700 transition-colors">Tickets</button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Sponsor / Federation Strip */}
      <div className="bg-[#0a0a0a] border-y border-white/10 py-12 overflow-hidden mt-12">
        <div className="container mx-auto px-6">
           <div className="flex justify-between items-center opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
             <div className="text-white font-anton text-2xl tracking-widest">WBC BOXING</div>
             <div className="text-white font-anton text-2xl tracking-widest">IBF FEDERATION</div>
             <div className="bg-[var(--liga-green)] px-10 py-6 rounded-xl shadow-[0_0_40px_rgba(0,255,102,0.3)] mx-4 transform scale-110">
                <img src="/images/ls_logo_white.png" alt="Liga Stavok" className="h-14 object-contain" />
             </div>
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-2xl">VK</div>
                <div className="text-white font-bold text-2xl">Видео</div>
             </div>
             <div className="text-white font-anton text-2xl tracking-widest">WBO</div>
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
        <div className="container mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center text-white/30 text-xs font-outfit">
          © 2026 PFL. All rights reserved.
        </div>
      </footer>

    </div>
  );
};

export default TemplateHome;
