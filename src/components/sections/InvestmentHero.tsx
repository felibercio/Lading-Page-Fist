import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronRight, Menu, X, ShieldCheck, Activity, Zap, Sun, Wind, Battery,
  Factory, TrendingUp, UserPlus, Search, Wallet, LineChart, Plus, Minus,
  Building2, Trophy, Rocket, Info, MessageCircle, CheckCircle2
} from 'lucide-react';

function InvestmentHero() {
  return (
    <section className="py-8 lg:py-12 px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 w-full">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex-1 text-center lg:text-left z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-fist-gray mb-6 shadow-sm">
          <ShieldCheck className="w-4 h-4 text-fist-green" />
          <span>Fist Crowdfunding — Autorizada pela CVM (Resolução 88)</span>
        </div>

        <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-fist-graphite leading-[1.1] mb-6">
          Invista em projetos reais: <br className="hidden lg:block" />
          <span className="text-fist-green">energia, imóveis, esportes e mais.</span>
        </h1>

        <p className="text-lg text-fist-gray mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
          Você escolhe onde investir e acompanha retornos previsíveis em operações digitais regulamentadas.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
          <a href="#tese" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-fist-graphite text-white px-8 py-3.5 rounded-full font-semibold hover:bg-black transition-all hover:scale-105 active:scale-95 text-base shadow-xl">
            Investir <ChevronRight className="w-4 h-4" />
          </a>
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-fist-graphite border border-gray-200 px-8 py-3.5 rounded-full font-semibold hover:bg-gray-50 transition-all text-base">
            Como Funciona
          </button>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8 border-t border-gray-200 pt-8 text-center sm:text-left">
          <div>
            <p className="font-bold text-fist-graphite">Blockchain</p>
            <p className="text-[10px] sm:text-xs text-fist-gray font-medium uppercase tracking-widest mt-1">Infraestrutura</p>
          </div>
          <div>
            <p className="font-bold text-fist-graphite">Energia</p>
            <p className="text-[10px] sm:text-xs text-fist-gray font-medium uppercase tracking-widest mt-1">Tese Principal</p>
          </div>
          <div>
            <p className="font-bold text-fist-graphite leading-tight">Renda Fixa Digital</p>
            <p className="text-[10px] sm:text-xs text-fist-gray font-medium uppercase tracking-widest mt-1">Retornos previsíveis</p>
          </div>
          <div>
            <p className="font-bold text-fist-graphite">CVM 88</p>
            <p className="text-[10px] sm:text-xs text-fist-gray font-medium uppercase tracking-widest mt-1">Regulamentação</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 relative w-full h-[400px] lg:h-[600px]"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-green-50/50 rounded-[40px] transform rotate-3 scale-95 opacity-50"></div>

        <motion.div
          className="relative z-10 w-full h-full cursor-pointer group"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Usando imagem fallback abstrata premium já que a quota excedeu */}
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030289072/h5tigukZUBaktzJyg3XPZX/investment-abstract-FLc5ooALdYwX9XNCmJeNsh.webp"
            alt="3D Abstract Energy Block"
            className="w-full h-full object-contain p-4 lg:p-8 drop-shadow-2xl mix-blend-multiply group-hover:scale-[1.02] transition-transform duration-700"
          />

          {/* Floating elements */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="absolute bottom-8 left-4 lg:bottom-16 lg:left-4 z-20 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-2xl flex items-center gap-4 transition-all duration-300 border border-white/50"
          >
            <div className="bg-green-50 flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl text-fist-green shadow-inner">
              <Activity className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-fist-graphite">Renda Fixa Digital</p>
              <p className="text-xs text-gray-500 font-medium mt-0.5">Retornos previsíveis</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="absolute top-8 right-4 lg:top-16 lg:right-4 z-20 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-2xl flex items-center gap-4 transition-all duration-300 border border-white/50"
          >
            <div className="bg-green-50 flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl text-fist-green shadow-inner">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-fist-graphite">Setor Energético</p>
              <p className="text-xs text-gray-500 font-medium mt-0.5">Tese principal</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}


export default InvestmentHero;
