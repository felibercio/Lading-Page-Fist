import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronRight, Menu, X, ShieldCheck, Activity, Zap, Sun, Wind, Battery,
  Factory, TrendingUp, UserPlus, Search, Wallet, LineChart, Plus, Minus,
  Building2, Trophy, Rocket, Info, MessageCircle, CheckCircle2
} from 'lucide-react';

function Ecosystem() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const pillars = {
    parceiros: {
      id: 'parceiros',
      title: "Parceiros",
      icon: <UserPlus strokeWidth={1.5} className="w-6 h-6" />,
      items: ["Agentes Autônomos", "Clubes e Federações", "Consultorias Estratégicas"],
      position: "col-start-2 row-start-1"
    },
    investidores: {
      id: 'investidores',
      title: "Investidores",
      icon: <Wallet strokeWidth={1.5} className="w-6 h-6" />,
      items: ["Diversificação Institucional", "Acesso CVM 88", "Alta Performance"],
      position: "col-start-1 row-start-2"
    },
    consumidores: {
      id: 'consumidores',
      title: "Consumidores",
      icon: <Zap strokeWidth={1.5} className="w-6 h-6" />,
      items: ["Comunidades de Energia", "Torcedores", "Locatários"],
      position: "col-start-3 row-start-2"
    },
    empreendedores: {
      id: 'empreendedores',
      title: "Empreendedores",
      icon: <Factory strokeWidth={1.5} className="w-6 h-6" />,
      items: ["Real Estate", "Infraestrutura Renovável", "Startups High-Growth"],
      position: "col-start-2 row-start-3"
    }
  };

  return (
    <section className="py-8 lg:py-12 text-fist-graphite relative overflow-hidden shrink-0 w-full">
      {/* Background Animated Gradient */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-fist-green/10 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-fist-green font-bold tracking-widest text-sm uppercase mb-2">Nosso Ecossistema</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-4 tracking-tight">
            Conectamos capital inteligente aos <span className="text-fist-green">ativos reais</span> que movem a economia.
          </h2>
          <p className="text-fist-gray text-lg leading-relaxed">
            Através da tecnologia blockchain, criamos uma infraestrutura global para investimentos fracionados em Energia, Real Estate, Esportes e Startups. Segurança regulatória e liquidez para um novo mercado de capitais.
          </p>
        </div>

        {/* Mobile Layout (Vertical Venn Bubble Flow) */}
        <div className="flex flex-col lg:hidden relative w-full pt-6">

          {/* Overlapping Circles on Y-axis */}
          <div className="relative w-full h-[320px] flex flex-col items-center justify-center pointer-events-none mb-4">
            {/* FIST CWF Circle */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-0 z-10 w-[190px] h-[190px] rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center p-6 shadow-2xl"
            >
              <div className="absolute inset-0 rounded-full border-[1px] border-white/30 mix-blend-overlay"></div>
              <span className="text-white font-extrabold text-xl tracking-widest drop-shadow-md">FIST CWF</span>
            </motion.div>

            {/* FIST ASSET Circle */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-0 z-20 w-[190px] h-[190px] rounded-full bg-gradient-to-br from-fist-green to-fist-green-hover flex items-center justify-center p-6 shadow-xl"
            >
              <div className="absolute inset-0 rounded-full border-[1px] border-white/30 mix-blend-overlay"></div>
              <span className="text-white font-extrabold text-xl tracking-widest drop-shadow-md">FIST ASSET</span>
            </motion.div>

            {/* Central Connection glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-[100px] h-[100px] bg-white/40 rounded-full blur-xl pointer-events-none"></div>
          </div>

          {/* Mobile Pillar Nodes */}
          <div className="w-full mt-4">
            <h3 className="text-center text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">Ecossistema Integrado</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.values(pillars).map((pillar) => (
                <div
                  key={pillar.id}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col w-full"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-green-50 text-fist-green">
                      {pillar.icon}
                    </div>
                    <h3 className="text-lg font-bold text-[#1A1A1A]">{pillar.title}</h3>
                  </div>
                  <ul className="space-y-3 text-sm font-medium text-gray-500">
                    {pillar.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full shrink-0 bg-gray-300"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Layout (Grid Cross Layout) */}
        <div className="hidden lg:grid grid-cols-3 grid-rows-3 gap-8 items-center max-w-5xl mx-auto h-[700px] relative">

          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <defs>
              <filter id="neon-glow-desktop" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {Object.values(pillars).map((pillar) => {
              let x1, y1, x2 = '50%', y2 = '50%';
              if (pillar.id === 'parceiros') { x1 = '50%'; y1 = '15%'; }
              if (pillar.id === 'investidores') { x1 = '15%'; y1 = '50%'; }
              if (pillar.id === 'consumidores') { x1 = '85%'; y1 = '50%'; }
              if (pillar.id === 'empreendedores') { x1 = '50%'; y1 = '85%'; }

              const isActive = hoveredNode === pillar.id;

              return (
                <g key={`line-${pillar.id}`}>
                  <line x1={x1} y1={y1} x2={x2} y2={y2} className={`transition-colors duration-300 ${isActive ? 'stroke-fist-green/20' : 'stroke-gray-200'}`} strokeWidth="2" />
                  <line
                    x1={x1} y1={y1} x2={x2} y2={y2}
                    className={`cpu-flow-line transition-all duration-300 ${isActive ? 'stroke-fist-green' : 'stroke-gray-300'}`}
                    strokeWidth={isActive ? "4" : "2"}
                    filter={isActive ? "url(#neon-glow-desktop)" : "none"}
                  />
                </g>
              );
            })}
          </svg>

          {/* Central Hub */}
          <div className="col-start-2 row-start-2 flex items-center justify-center relative w-full h-full z-10 group"
            onMouseEnter={() => setHoveredNode('center')}
            onMouseLeave={() => setHoveredNode(null)}>

            {/* Central Glassmorphism Circle */}
            <div className="absolute z-50 w-[240px] h-[240px] bg-white/80 backdrop-blur-2xl border border-white/80 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer p-8">
              <img
                src="https://prod-fist.web.app/assets/logoPreta-CoFflQrd.png"
                alt="FIST Logo"
                className="w-full max-w-[140px] h-auto brightness-0"
              />
            </div>
          </div>

          {/* Pillar Nodes (Peripheral Cards) */}
          {Object.values(pillars).map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`${pillar.position} bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-fist-green/40 transition-all duration-300 z-10 relative cursor-pointer group flex flex-col w-full max-w-[280px] mx-auto`}
              onMouseEnter={() => setHoveredNode(pillar.id)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${hoveredNode === pillar.id ? 'bg-fist-green text-white shadow-lg shadow-fist-green/30 scale-110' : 'bg-green-50 text-fist-green group-hover:bg-green-100'}`}>
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-[#1A1A1A] leading-tight">{pillar.title}</h3>
              </div>

              <ul className="space-y-3 text-sm font-medium text-gray-500">
                {pillar.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${hoveredNode === pillar.id ? 'bg-fist-green' : 'bg-gray-300'}`}></div>
                    <span className={`transition-colors ${hoveredNode === pillar.id ? 'text-fist-graphite' : ''}`}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Regulatory Note */}
        <div className="mt-8 max-w-4xl mx-auto text-center bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-gray-200 shadow-sm relative z-30">
          <p className="text-sm font-medium text-fist-gray flex flex-col md:flex-row items-center justify-center gap-2">
            <ShieldCheck className="w-5 h-5 text-fist-green shrink-0" />
            <span>Todo o ecossistema opera sob a supervisão regulatória da <strong className="text-fist-graphite">CVM (Resolução 88)</strong>, garantindo segurança institucional.</span>
          </p>
        </div>
      </div>
    </section>
  );
}




export default Ecosystem;
