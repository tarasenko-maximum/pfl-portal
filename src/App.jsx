import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import ContextSection from './components/ContextSection';
import Manifesto from './components/Manifesto';
import FiveTasks from './components/FiveTasks';
import Reference from './components/Reference';
import Architecture from './components/Architecture';
import Sponsors from './components/Sponsors';
import AltrpPlatform from './components/AltrpPlatform';
import AeoSection from './components/AeoSection';
import Reliability from './components/Reliability';
import Languages from './components/Languages';
import MediaEcosystem from './components/MediaEcosystem';
import Packages from './components/Packages';
import SaasTable from './components/SaasTable';
import Timeline from './components/Timeline';
import Mockups from './components/Mockups';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[var(--black)] min-h-screen text-white font-sans relative overflow-x-hidden selection:bg-[var(--pfl-orange)] selection:text-white">
      {/* Background fighters on sides */}
      <div className="fixed inset-0 z-0 pointer-events-none flex justify-between overflow-hidden opacity-5 mix-blend-screen">
         <img src="/images/292b3640-2039-46b6-a164-9b05e0fcf3b2.webp" className="w-[30vw] h-screen object-cover object-left mask-gradient-right grayscale" alt="bg" />
         <img src="/images/3118936a-6bef-45f7-916a-8509c56917f4.webp" className="w-[30vw] h-screen object-cover object-right mask-gradient-left grayscale" alt="bg" />
      </div>
      
      <div className="relative z-10">
        <Nav />
        <Hero />
        <ContextSection />
        <Manifesto />
        <FiveTasks />
        <Reference />
        <Architecture />
        <Sponsors />
        <AltrpPlatform />
        <AeoSection />
        <Reliability />
        <Languages />
        <MediaEcosystem />
        <Packages />
        <SaasTable />
        <Timeline />
        <Mockups />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
