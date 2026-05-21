import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronRight, Menu, X, ShieldCheck, Activity, Zap, Sun, Wind, Battery,
  Factory, TrendingUp, UserPlus, Search, Wallet, LineChart, Plus, Minus,
  Building2, Trophy, Rocket, Info, MessageCircle, CheckCircle2
} from 'lucide-react';

function MarketData() {
  return (
    <section className="py-8 lg:py-10 shrink-0 w-full relative overflow-hidden flex flex-col justify-center min-h-screen">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-fist-green/10 to-transparent blur-3xl pointer-events-none rounded-bl-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        
        {/* Cabeçalho */}
        <div className="mb-8 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-fist-green font-bold tracking-widest text-xs uppercase mb-2"
          >
            Quem Somos
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-fist-graphite mb-3 leading-tight"
          >
            A Fist conecta pessoas e empresas à <span className="text-fist-green">economia gerada por energia solar</span>, de forma digital, segura e regulamentada.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-base md:text-lg leading-relaxed"
          >
            Além da economia na conta de luz, também desenvolvemos oportunidades de investimento em projetos reais de energia e outros ativos.
          </motion.p>
        </div>

        {/* Grid de Ações */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          
          {/* Card Economia */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-fist-green">
                  <Sun className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-fist-graphite">Economia Solar</h3>
              </div>
              
              <p className="text-gray-600 text-base mb-6 leading-relaxed">
                Receba créditos de energia solar e economize todos os meses. Sem instalação. Sem obra.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-full text-xs font-semibold text-gray-700 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-fist-green" /> Aneel 14.300
                </span>
                <span className="px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-full text-xs font-semibold text-gray-700 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-fist-green" /> Crédito solar
                </span>
              </div>
            </div>

            <a href="#gerador" className="w-full flex items-center justify-center gap-2 bg-fist-graphite text-white py-3 rounded-xl font-bold hover:bg-black transition-all active:scale-95 shadow-md">
              Quero economizar <ChevronRight className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Card Investimento */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-fist-dark border border-gray-800 rounded-3xl p-6 shadow-xl text-white relative overflow-hidden flex flex-col justify-between group hover:border-fist-green/30 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-fist-green/10 rounded-full blur-3xl group-hover:bg-fist-green/20 transition-all"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-fist-green border border-white/5">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Fist Crowdfunding</h3>
                </div>
              </div>
              
              <h4 className="text-lg font-bold text-fist-green mb-2">
                Invista e tenha retorno financeiro
              </h4>
              
              <p className="text-gray-400 text-base mb-6 leading-relaxed">
                Além de economizar, você pode investir nos projetos de energia que geram esses créditos e receber retorno financeiro sobre isso. Projetos reais com renda variável digital regulada pela CVM.
              </p>
            </div>

            <a href="#tese" className="relative z-10 w-full flex items-center justify-center gap-2 bg-fist-green text-white py-3 rounded-xl font-bold hover:bg-fist-green-hover transition-all active:scale-95 shadow-lg shadow-fist-green/20">
              Ver oportunidades <ChevronRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Segurança e Regulação */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm flex flex-col md:flex-row items-center gap-6 justify-between"
        >
          <div className="flex-1">
            <h4 className="text-lg font-extrabold text-fist-graphite mb-2 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-fist-green" />
              Digital • Seguro • Regulado
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mt-4 text-sm font-semibold text-gray-600">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-fist-green shrink-0" /> Operações digitais e transparentes</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-fist-green shrink-0" /> Modelo regulamentado</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-fist-green shrink-0" /> Estrutura auditável</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-fist-green shrink-0" /> Plataforma CVM 88</span>
            </div>
          </div>
          
          <div className="hidden md:block w-px h-16 bg-gray-200"></div>
          
          <div className="flex-1 md:text-right">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Ecossistema Regulatório</p>
            <div className="flex flex-wrap gap-4 items-center md:justify-end text-sm font-black text-fist-graphite">
              <span>CVM</span>
              <span className="w-1 h-1 rounded-full bg-gray-300"></span>
              <span>ANBIMA</span>
              <span className="w-1 h-1 rounded-full bg-gray-300"></span>
              <span>B3</span>
              <span className="w-1 h-1 rounded-full bg-gray-300"></span>
              <span>DREX</span>
              <span className="w-1 h-1 rounded-full bg-gray-300"></span>
              <span>ANEEL</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}


export default MarketData;
