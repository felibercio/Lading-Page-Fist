import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronRight, Menu, X, ShieldCheck, Activity, Zap, Sun, Wind, Battery,
  Factory, TrendingUp, UserPlus, Search, Wallet, LineChart, Plus, Minus,
  Building2, Trophy, Rocket, Info, MessageCircle, CheckCircle2
} from 'lucide-react';

function BulletNavigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const sections = ['hero', 'sobre', 'investimento', 'tese', 'ecossistema', 'gerador', 'faq', 'footer'];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-3">
      {sections.map(id => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSection === id ? 'bg-fist-green scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
          aria-label={`Ir para a seção ${id}`}
        />
      ))}
    </div>
  );
}


export default BulletNavigation;
