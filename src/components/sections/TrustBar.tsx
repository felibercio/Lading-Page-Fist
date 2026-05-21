import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronRight, Menu, X, ShieldCheck, Activity, Zap, Sun, Wind, Battery,
  Factory, TrendingUp, UserPlus, Search, Wallet, LineChart, Plus, Minus,
  Building2, Trophy, Rocket, Info, MessageCircle, CheckCircle2
} from 'lucide-react';

function TrustBar() {
  const logos = [
    <div key="1" className="text-2xl font-bold font-serif px-8 lg:px-16 whitespace-nowrap">CVM</div>,
    <div key="2" className="text-2xl font-bold tracking-tighter px-8 lg:px-16 whitespace-nowrap">ANBIMA</div>,
    <div key="3" className="text-2xl font-black italic px-8 lg:px-16 whitespace-nowrap">B3</div>,
    <div key="4" className="text-2xl font-bold tracking-wide px-8 lg:px-16 whitespace-nowrap">DREX</div>,
    <div key="5" className="text-2xl font-bold px-8 lg:px-16 whitespace-nowrap">ANEEL</div>
  ];

  return (
    <section className="py-4 border-y border-gray-100 overflow-hidden shrink-0 w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-[10px] font-bold tracking-widest uppercase text-fist-gray mb-4">Ecossistema Regulatório e de Mercado</p>
      </div>
      <div className="relative flex overflow-hidden group">
        {/* Gradients that fade the edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 max-w-[150px] bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 max-w-[150px] bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* Animated Carousel Track */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center justify-around shrink-0">
            {logos}
          </div>
          <div className="flex items-center justify-around shrink-0" aria-hidden="true">
            {logos}
          </div>
        </div>
      </div>
    </section>
  );
}


export default TrustBar;
