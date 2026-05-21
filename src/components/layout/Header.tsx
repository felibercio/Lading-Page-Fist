import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronRight, Menu, X, ShieldCheck, Activity, Zap, Sun, Wind, Battery,
  Factory, TrendingUp, UserPlus, Search, Wallet, LineChart, Plus, Minus,
  Building2, Trophy, Rocket, Info, MessageCircle, CheckCircle2
} from 'lucide-react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-fist-dark/95 backdrop-blur-md shadow-md py-3' : 'bg-fist-dark py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/assets/logo-fist-white.png" alt="FIST Logo" className="h-8 w-auto" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-300">
          <a href="#sobre" className="hover:text-fist-green transition-colors">Sobre</a>
          <a href="#tese" className="hover:text-fist-green transition-colors">Tese de Energia</a>
          <a href="#ecossistema" className="hover:text-fist-green transition-colors">Nosso Ecossistema</a>
          <a href="#faq" className="hover:text-fist-green transition-colors">FAQ</a>
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-2 bg-fist-green text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-fist-green-hover transition-colors shadow-lg shadow-fist-green/20">
            Invista Agora <ChevronRight className="w-4 h-4" />
          </button>

          <button className="md:hidden text-gray-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-fist-dark md:hidden flex flex-col pt-6 px-6 pb-32 overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-12">
              <img src="/assets/logo-fist-white.png" alt="FIST Logo" className="h-8 w-auto" />
              <button className="text-gray-300 p-2" onClick={() => setMobileMenuOpen(false)}>
                <X className="w-8 h-8" />
              </button>
            </div>
            
            <div className="flex flex-col gap-6 flex-1">
              {[
                { href: '#sobre', label: 'Quem Somos', icon: Info },
                { href: '#tese', label: 'Tese de Energia', icon: Zap },
                { href: '#ecossistema', label: 'Nosso Ecossistema', icon: Activity },
                { href: '#faq', label: 'Perguntas Frequentes', icon: MessageCircle }
              ].map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="group flex items-center gap-5 text-2xl font-extrabold text-white hover:text-fist-green transition-colors"
                >
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-fist-green/10 group-hover:rotate-6 transition-all">
                    <link.icon className="w-7 h-7 text-fist-green" />
                  </div>
                  {link.label}
                </motion.a>
              ))}

              <motion.a
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                href="#investimento"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-6 w-full flex items-center justify-center gap-2 bg-fist-green text-white px-5 py-4 rounded-full font-bold text-lg hover:bg-fist-green-hover transition-colors shadow-lg shadow-fist-green/20"
              >
                Invista Agora <ChevronRight className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


export default Header;
