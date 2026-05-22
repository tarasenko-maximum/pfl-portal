import React from 'react';

const TemplateEvent = () => {
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
      <header className="bg-[#111] border-b border-white/10 px-6 py-4 flex justify-between items-center relative z-20">
        <div className="font-anton text-4xl italic tracking-tighter text-white flex items-center gap-2">
          PFL <span className="text-red-600">.</span>
        </div>
        <nav className="hidden lg:flex gap-8 text-xs font-bold uppercase tracking-widest text-white/80">
          <span className="hover:text-red-600 cursor-pointer transition-colors">Home</span>
          <span className="hover:text-red-600 cursor-pointer transition-colors">About</span>
          <span className="text-red-600 cursor-pointer">Events</span>
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
          <button className="bg-red-600 text-white px-6 py-3 font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
            Buy Ticket
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative h-[700px] bg-[#111] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/jango.png" alt="Hero Background" className="w-full h-full object-cover opacity-50 mix-blend-screen" />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>

        <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-widest mb-4">
              <span className="w-2 h-2 bg-red-600 inline-block"></span> DECEMBER 24, 2026
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white italic uppercase leading-[0.9] mb-8">
              ONE-SPORT <br/> SUPERSTARS <br/> WHO SHINED IN 2026
            </h1>
            <button className="bg-red-600 text-white px-8 py-3 font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
              Read More
            </button>
          </div>
        </div>

        {/* Thumbnail Slider Over Hero */}
        <div className="absolute bottom-12 left-0 w-full z-30">
          <div className="container mx-auto px-6 flex justify-between items-end">
            <div className="flex gap-4">
              <div className="w-[300px] bg-black/60 backdrop-blur-md border border-red-600 p-4 flex gap-4 cursor-pointer">
                <img src="/images/action.png" className="w-16 h-16 rounded-full object-cover border border-white/20" alt="Thumb" />
                <div className="flex items-center text-xs font-bold text-white uppercase leading-tight">JANGO IS TRAINING WITH TOP FIGHTERS TO PREPARE</div>
              </div>
              <div className="w-[300px] bg-black/40 backdrop-blur-md border border-white/10 p-4 flex gap-4 cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
                <img src="/images/magomed.png" className="w-16 h-16 rounded-full object-cover border border-white/20" alt="Thumb" />
                <div className="flex items-center text-xs font-bold text-white uppercase leading-tight">MAGOMED SECURES ANOTHER KNOCKOUT</div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="w-12 h-12 bg-white text-black flex justify-center items-center font-bold">←</button>
              <button className="w-12 h-12 bg-white text-red-600 flex justify-center items-center font-bold">→</button>
            </div>
          </div>
        </div>
      </div>

      {/* Sponsor / Federation Strip (Black Background) */}
      <div className="bg-[#111] border-b border-white/5 py-12">
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

      {/* Highlights Section */}
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
           {[1, 2, 3].map((item) => (
             <div key={item} className="bg-white flex h-48 shadow-lg overflow-hidden group cursor-pointer">
               <div className="w-1/2 p-6 flex flex-col justify-center relative">
                 <div className="absolute top-6 left-6 bg-red-600 text-white text-[8px] font-bold px-2 py-0.5 uppercase tracking-wider">Highlights</div>
                 <h3 className="font-black text-lg uppercase leading-tight mt-6 mb-2 group-hover:text-red-600 transition-colors">I WILL BRING EVERY BARE KNUCKLE WEAPON TO THE RING</h3>
                 <p className="text-[10px] text-gray-500 font-outfit">It is a long established fact that a reader will be distracted.</p>
               </div>
               <div className="w-1/2 overflow-hidden">
                 <img src={`/images/${item === 1 ? 'action.png' : item === 2 ? 'magomed.png' : 'jango.png'}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Highlight" />
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

export default TemplateEvent;
