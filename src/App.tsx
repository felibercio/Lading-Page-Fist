import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight } from 'lucide-react';

import BulletNavigation from './components/layout/BulletNavigation';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import SavingsHero from './components/sections/SavingsHero';
import InvestmentHero from './components/sections/InvestmentHero';
import TrustBar from './components/sections/TrustBar';
import MarketData from './components/sections/MarketData';
import InvestmentThesis from './components/sections/InvestmentThesis';
import Ecosystem from './components/sections/Ecosystem';
import FAQ from './components/sections/FAQ';
import { ProposalGenerator } from './components/ProposalGenerator';

export default function App() {
  return (
    <div className="w-full bg-fist-offwhite text-fist-graphite font-sans overflow-hidden relative">
      <Header />

      <main>
        <div id="hero" className="min-h-screen flex flex-col justify-center relative w-full bg-fist-offwhite">
          <SavingsHero />
          <TrustBar />
        </div>
        <div id="sobre" className="min-h-screen flex flex-col justify-center relative w-full bg-[#F6F5F3]">
          <MarketData />
        </div>
        <div id="investimento" className="min-h-screen flex flex-col justify-center relative w-full bg-fist-offwhite">
          <InvestmentHero />
        </div>
        <div id="tese" className="min-h-screen flex flex-col justify-center relative w-full bg-white">
          <InvestmentThesis />
        </div>
        <div id="ecossistema" className="min-h-screen flex flex-col justify-center relative w-full bg-white">
          <Ecosystem />
        </div>
        <div id="gerador" className="min-h-screen flex flex-col justify-center relative w-full bg-white">
          <ProposalGenerator />
        </div>
        <div id="faq" className="min-h-screen flex flex-col justify-center relative w-full bg-white">
          <FAQ />
        </div>
        <div id="footer" className="flex flex-col justify-end relative w-full bg-fist-dark">
          <Footer />
        </div>
      </main>

      <BulletNavigation />

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-white/90 backdrop-blur-xl border-t border-gray-100 p-4 pb-safe shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
        <button className="w-full flex items-center justify-center gap-2 bg-fist-green text-white py-3.5 rounded-full font-extrabold text-lg shadow-lg shadow-fist-green/20 active:scale-95 transition-transform">
          Invista Agora <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

