import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronRight, Menu, X, ShieldCheck, Activity, Zap, Sun, Wind, Battery,
  Factory, TrendingUp, UserPlus, Search, Wallet, LineChart, Plus, Minus,
  Building2, Trophy, Rocket, Info, MessageCircle, CheckCircle2
} from 'lucide-react';

function SavingsHero() {
  return (
    <section className="py-8 lg:py-12 px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 w-full mt-16 lg:mt-0">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 text-center lg:text-left z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-fist-gray mb-6 shadow-sm">
          <Sun className="w-4 h-4 text-fist-green" />
          <span>Energia Limpa e Sustentável</span>
        </div>

        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-fist-graphite leading-[1.1] mb-6">
          Economize até 20% na <br className="hidden lg:block" />
          <span className="text-fist-green">sua conta de luz.</span>
        </h1>

        <p className="text-lg text-fist-gray mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
          <strong className="text-fist-graphite font-extrabold text-xl block mb-2">Sem custo. Sem obra. Sem instalação.</strong>
          Receba créditos de energia solar no seu consumo e pague menos todos os meses.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
          <a href="#gerador" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-fist-graphite text-white px-8 py-4 rounded-full font-bold hover:bg-black transition-all hover:scale-105 active:scale-95 text-lg shadow-xl">
            Quero ver minha economia <ChevronRight className="w-5 h-5" />
          </a>
        </div>

        <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 border-t border-gray-200 pt-8">
          <div>
            <p className="font-bold text-fist-graphite text-sm">Sem investimento</p>
            <p className="text-xs text-fist-gray font-medium uppercase tracking-widest mt-1">Custo Zero</p>
          </div>
          <div>
            <p className="font-bold text-fist-graphite text-sm">Desconto de até 20%</p>
            <p className="text-xs text-fist-gray font-medium uppercase tracking-widest mt-1">Garantido</p>
          </div>
          <div>
            <p className="font-bold text-fist-graphite text-sm">Pessoa física e jurídica</p>
            <p className="text-xs text-fist-gray font-medium uppercase tracking-widest mt-1">Para todos</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 relative w-full lg:ml-8 mt-12 lg:mt-0"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-green-50/50 rounded-[40px] transform rotate-3 scale-105 opacity-50"></div>

        <motion.div
          className="relative z-10 w-full cursor-pointer group"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="rounded-[40px] shadow-2xl bg-white overflow-hidden flex flex-col border border-gray-100 border-b-4">
            {/* Foto principal */}
            <div className="w-full h-[280px] lg:h-[420px] overflow-hidden relative">
              <img
                src="/assets/casal-conta.jpg"
                alt="Casal feliz analisando fatura de energia"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>

            {/* Painel de Badges Unificados na Base (Não sobreposto) */}
            <div className="w-full bg-white p-5 sm:p-6 lg:p-8 flex items-center justify-between sm:justify-around gap-2 sm:gap-4 relative z-20">
              <div className="flex items-center gap-3 lg:gap-4">
                <div className="bg-green-50 flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-xl text-fist-green shadow-inner">
                  <Sun className="w-5 h-5 lg:w-6 lg:h-6" />
                </div>
                <div>
                  <p className="text-xs lg:text-sm font-bold text-fist-graphite">Energia Solar</p>
                  <p className="text-[10px] lg:text-xs text-gray-500 font-medium mt-0.5">Sustentabilidade</p>
                </div>
              </div>

              <div className="w-px h-12 bg-gray-100"></div>

              <div className="flex items-center gap-3 lg:gap-4">
                <div className="bg-green-50 flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-xl text-fist-green shadow-inner">
                  <Zap className="w-5 h-5 lg:w-6 lg:h-6" />
                </div>
                <div>
                  <p className="text-xs lg:text-sm font-bold text-fist-graphite">Conta Menor</p>
                  <p className="text-[10px] lg:text-xs text-gray-500 font-medium mt-0.5">Todos os meses</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}


export default SavingsHero;
