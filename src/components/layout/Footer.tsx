import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronRight, Menu, X, ShieldCheck, Activity, Zap, Sun, Wind, Battery,
  Factory, TrendingUp, UserPlus, Search, Wallet, LineChart, Plus, Minus,
  Building2, Trophy, Rocket, Info, MessageCircle, CheckCircle2
} from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-fist-dark text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030289072/h5tigukZUBaktzJyg3XPZX/fist-logo_91487e65.png" alt="FIST" className="h-8 w-auto" />
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Infraestrutura de mercado de capitais para o futuro da energia. Tokenização e renda fixa digital acessível.
            </p>
            <div className="flex items-center gap-4 text-fist-green font-bold">
              <ShieldCheck className="w-5 h-5" /> Autorizada CVM 88
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Plataforma</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Marketplace</a></li>
              <li><a href="#ecossistema" className="hover:text-white transition-colors">Nosso Ecossistema</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tese de Investimento</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Avisos de Risco</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ouvidoria</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contato</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li>Mídias e Imprensa</li>
              <li>Suporte ao Investidor</li>
              <li><a href="mailto:contato@fist.com.br" className="text-fist-green hover:underline">contato@fist.com.br</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 text-xs text-gray-500 leading-relaxed text-center">
          <p className="mb-4">
            A FIST é uma plataforma digital de investimentos, atuando como correspondente bancário e operando em conformidade com a Resolução CVM nº 88/2022. Investimentos envolvem riscos, incluindo possibilidade de perda do capital investido.
          </p>
          <p>© {new Date().getFullYear()} Fist. Todos os direitos reservados. CNPJ: XX.XXX.XXX/0001-XX</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
