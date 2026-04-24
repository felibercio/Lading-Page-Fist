import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  Menu, 
  X, 
  ShieldCheck, 
  Activity, 
  Zap, 
  Sun, 
  Wind, 
  Battery, 
  Factory, 
  TrendingUp,
  UserPlus,
  Search,
  Wallet,
  LineChart,
  Plus,
  Minus,
  Building2,
  Trophy,
  Rocket,
  Info,
  MessageCircle
} from 'lucide-react';

import { PulseBeams } from './components/ui/pulse-beams';
import { CpuArchitecture } from './components/ui/cpu-architecture';

export default function App() {
  return (
    <div className="min-h-screen bg-fist-offwhite text-fist-graphite font-sans pb-24 md:pb-0">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <MarketData />
        <InvestmentThesis />
        <Ecosystem />
        <FAQ />
      </main>
      <Footer />
      
      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-white/90 backdrop-blur-xl border-t border-gray-100 p-4 pb-safe shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
         <button className="w-full flex items-center justify-center gap-2 bg-fist-red text-white py-3.5 rounded-full font-extrabold text-lg shadow-lg shadow-fist-red/20 active:scale-95 transition-transform">
            Invista Agora <ChevronRight className="w-5 h-5" />
         </button>
      </div>
    </div>
  );
}

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-fist-dark/95 backdrop-blur-md shadow-md py-3' : 'bg-fist-dark py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030289072/h5tigukZUBaktzJyg3XPZX/fist-logo_91487e65.png" alt="FIST Logo" className="h-8 w-auto" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-300">
          <a href="#sobre" className="hover:text-fist-red transition-colors">Sobre</a>
          <a href="#tese" className="hover:text-fist-red transition-colors">Tese de Energia</a>
          <a href="#ecossistema" className="hover:text-fist-red transition-colors">Nosso Ecossistema</a>
          <a href="#faq" className="hover:text-fist-red transition-colors">FAQ</a>
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-2 bg-fist-red text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-fist-red-hover transition-colors shadow-lg shadow-fist-red/20">
            Invista Agora <ChevronRight className="w-4 h-4" />
          </button>
          
          <button className="md:hidden text-gray-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-fist-dark md:hidden flex flex-col pt-24 px-8 pb-32 overflow-y-auto"
          >
            <div className="flex flex-col gap-6 flex-1 mt-4">
              {[ 
                {href: '#sobre', label: 'Sobre a FIST', icon: Info}, 
                {href: '#tese', label: 'Tese de Energia', icon: Zap}, 
                {href: '#ecossistema', label: 'Nosso Ecossistema', icon: Activity}, 
                {href: '#faq', label: 'Perguntas Frequentes', icon: MessageCircle} 
              ].map((link, idx) => (
                <motion.a 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  key={link.href} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="group flex items-center gap-5 text-2xl font-extrabold text-white hover:text-fist-red transition-colors"
                >
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-fist-red/10 group-hover:rotate-6 transition-all">
                     <link.icon className="w-7 h-7 text-fist-red" />
                  </div>
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
      <motion.div 
        initial={{ opacity: 0, x: -30 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.6 }}
        className="flex-1 text-center lg:text-left z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-fist-gray mb-6 shadow-sm">
          <ShieldCheck className="w-4 h-4 text-fist-red" />
          <span>Autorizada pela CVM — Resolução 88</span>
        </div>
        
        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-fist-graphite leading-[1.1] mb-6">
          Investimentos <br className="hidden lg:block"/>
          Alternativos em <br className="hidden lg:block"/>
          <span className="text-fist-red">Energia.</span>
        </h1>
        
        <p className="text-lg text-fist-gray mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
          Plataforma de oferta pública de renda fixa digital com foco no setor energético. Invista com segurança, transparência e tecnologia blockchain.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-fist-graphite text-white px-8 py-3.5 rounded-full font-semibold hover:bg-black transition-all hover:scale-105 active:scale-95 text-base shadow-xl">
            Investir <ChevronRight className="w-4 h-4" />
          </button>
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-fist-graphite border border-gray-200 px-8 py-3.5 rounded-full font-semibold hover:bg-gray-50 transition-all text-base">
            Como Funciona
          </button>
        </div>
        
        <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 border-t border-gray-200 pt-8">
           <div>
              <p className="font-bold text-fist-graphite">CVM 88</p>
              <p className="text-xs text-fist-gray font-medium uppercase tracking-widest mt-1">Regulamentação</p>
           </div>
           <div>
              <p className="font-bold text-fist-graphite">Energia</p>
              <p className="text-xs text-fist-gray font-medium uppercase tracking-widest mt-1">Tese Principal</p>
           </div>
           <div>
              <p className="font-bold text-fist-graphite">Blockchain</p>
              <p className="text-xs text-fist-gray font-medium uppercase tracking-widest mt-1">Infraestrutura</p>
           </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 relative w-full h-[400px] lg:h-[600px]"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-red-50/50 rounded-[40px] transform rotate-3 scale-95 opacity-50"></div>
        
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
            <div className="bg-red-50 flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl text-fist-red shadow-inner">
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
            <div className="bg-red-50 flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl text-fist-red shadow-inner">
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

function TrustBar() {
  const logos = [
    <div key="1" className="text-2xl font-bold font-serif px-8 lg:px-16 whitespace-nowrap">CVM</div>,
    <div key="2" className="text-2xl font-bold tracking-tighter px-8 lg:px-16 whitespace-nowrap">ANBIMA</div>,
    <div key="3" className="text-2xl font-black italic px-8 lg:px-16 whitespace-nowrap">B3</div>,
    <div key="4" className="text-2xl font-bold tracking-wide px-8 lg:px-16 whitespace-nowrap">DREX</div>,
    <div key="5" className="text-2xl font-bold px-8 lg:px-16 whitespace-nowrap">ANEEL</div>
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-xs font-bold tracking-widest uppercase text-fist-gray mb-8">Ecossistema Regulatório e de Mercado</p>
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

function AnimatedCounter({ prefix, target, suffix, decimals }: { prefix: string, target: number, suffix: string, decimals: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number | null = null;
    let animationFrame: number;
    const duration = 2000;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(easeProgress * target);

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrame = window.requestAnimationFrame(step);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [target, isVisible]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

function MarketData() {
  const stats = [
    { prefix: "R$ ", num: 16.1, suffix: "T", decimals: 1, label: "Mercado de tokenização projetado para 2030", desc: "Boston Consulting Group" },
    { prefix: "CVM ", num: 88, suffix: "", decimals: 0, label: "Resolução que regulamenta a plataforma", desc: "Comissão de Valores Mobiliários" },
    { prefix: "", num: 100, suffix: "%", decimals: 0, label: "Digital e transparente via blockchain", desc: "Infraestrutura FIST" },
    { prefix: "", num: 1, suffix: "ª", decimals: 0, label: "Plataforma CVM 88 de Pernambuco", desc: "Pioneira no Nordeste" },
  ];

  return (
    <section id="sobre" className="py-24 bg-[#F6F5F3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 w-full">
            <div className="mb-12">
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-fist-red font-bold tracking-widest text-sm uppercase mb-4"
              >
                Sobre a Fist
              </motion.p>
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-extrabold text-black mb-6 leading-tight"
              >
                Infraestrutura de mercado de capitais para o <span className="text-fist-red">futuro da energia</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-600 text-lg md:text-xl leading-relaxed"
              >
                A FIST atua como uma plataforma de Capital Markets as a Service, oferecendo funcionalidades para ofertas públicas e privadas, fundos de investimento e gestão completa do ciclo de vida de debêntures e notas comerciais utilizando tecnologia blockchain.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm group hover:border-gray-300 transition-colors"
                >
                  <h3 className="text-3xl font-extrabold text-black mb-2 group-hover:text-fist-red transition-colors">
                    <AnimatedCounter prefix={stat.prefix} target={stat.num} suffix={stat.suffix} decimals={stat.decimals} />
                  </h3>
                  <p className="text-black font-medium mb-2 text-sm">{stat.label}</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest">{stat.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-5/12"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-[500px] lg:h-[700px] rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030289072/h5tigukZUBaktzJyg3XPZX/hero-energy-fHNnbETNc7zAxRNqcHZgnC.webp" 
                alt="Sobre a FIST" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-fist-red/10 mix-blend-multiply pointer-events-none"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InvestmentThesis() {
  const [activeTab, setActiveTab] = useState("energia");

  const thesisData = [
    {
      id: "energia",
      tabLabel: "Energia",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80",
      headline: (
        <>O setor de energia é a <span className="text-fist-red">maior oportunidade</span> de investimento da década</>
      ),
      description: "A transição energética global representa uma das maiores transferências de capital da história. Com a tokenização de ativos reais via blockchain, a FIST democratiza o acesso a investimentos em infraestrutura energética que antes eram exclusivos de grandes investidores institucionais.",
      secondaryDescription: "Nossos projetos incluem usinas solares, parques eólicos e soluções de armazenamento, todos estruturados como títulos de renda fixa digital com retornos previsíveis e lastro em ativos reais do setor energético.",
      cardPrefix: "R$ ",
      cardNum: 16.1,
      cardSuffix: "T",
      cardDecimals: 1,
      cardLabel: "Mercado de tokenização projetado para 2030",
      cardSource: "Fonte: Boston Consulting Group"
    },
    {
      id: "real-estate",
      tabLabel: "Real Estate",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
      headline: (
        <>Redefinindo o acesso ao mercado de <span className="text-fist-red">Real Estate</span></>
      ),
      description: "Historicamente marcado por alta barreira de entrada e baixa liquidez, o setor imobiliário ganha uma nova dimensão. Através da nossa infraestrutura (CVM 88), transformamos loteamentos, incorporações e galpões logísticos em ativos líquidos e rentáveis.",
      secondaryDescription: "Ao adquirir um token de Real Estate, o investidor detém uma fração digital respaldada na força e segurança das garantias do mercado tradicional, mas com a agilidade da Web3.",
      cardPrefix: "$ ",
      cardNum: 100,
      cardSuffix: "B+",
      cardDecimals: 0,
      cardLabel: "Volume global de imóveis a serem tokenizados",
      cardSource: "Fonte: Moore Global"
    },
    {
      id: "esportes",
      tabLabel: "Esportes",
      image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&q=80",
      headline: (
        <>O torcedor assumindo o <span className="text-fist-red">protagonismo</span> como investidor</>
      ),
      description: "Conectamos a paixão dos fãs à racionalidade dos investimentos. Clubes, federações e atletas podem captar recursos de forma autônoma e descentralizada, antecipando recebíveis e tokenizando direitos econômicos.",
      secondaryDescription: "Permitimos o financiamento coletivo da cadeia esportiva e a criação de novas fontes de receita, integrando fãs do mundo todo em poucos cliques.",
      cardPrefix: "$ ",
      cardNum: 24,
      cardSuffix: "B",
      cardDecimals: 0,
      cardLabel: "Tamanho do mercado estimado para 2028",
      cardSource: "Fonte: Grand View Research"
    },
    {
      id: "startups",
      tabLabel: "Startups",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80",
      headline: (
        <>Venture Capital <span className="text-fist-red">descentralizado</span> e líquido</>
      ),
      description: "Acreditamos que o financiamento de startups não precisa ficar restrito a fundos elitizados. Estruturamos ofertas que destravam capital para empreendedores e dão acesso antecipado a investidores de varejo.",
      secondaryDescription: "Modelos disruptivos e cap tables complexos são simplificados por meio dos nossos smart contracts, oferecendo um novo nível de compliance e velocidade.",
      cardPrefix: "R$ ",
      cardNum: 4.5,
      cardSuffix: "B+",
      cardDecimals: 1,
      cardLabel: "Levantados por plataformas no Brasil (CVM)",
      cardSource: "Fonte: Relatório CVM"
    }
  ];

  const activeData = thesisData.find(d => d.id === activeTab) || thesisData[0];

  return (
    <section id="tese" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Mobile Layout: Card Swiper */}
        <div className="lg:hidden flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 -mx-6 px-6 hide-scrollbar">
          {thesisData.map((data, idx) => {
            const Icon = data.id === 'energia' ? Zap : data.id === 'real-estate' ? Building2 : data.id === 'esportes' ? Trophy : Rocket;
            return (
              <div key={idx} className="snap-center shrink-0 w-[85vw] flex flex-col gap-6">
                <div className="w-full relative h-[380px] rounded-[2rem] overflow-hidden shadow-xl">
                  <img src={data.image} alt={data.tabLabel} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-fist-red font-bold text-xs uppercase tracking-widest mb-2">{data.tabLabel}</p>
                    <h3 className="text-white text-2xl font-extrabold leading-[1.2]">{data.headline}</h3>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mb-2 shadow-inner">
                      <Icon className="w-7 h-7 text-fist-red stroke-[1.5]" />
                  </div>
                  <p className="text-gray-600 text-[16px] leading-[1.6]">{data.description}</p>
                  
                  <div className="mt-4 bg-gray-50 rounded-2xl p-4 border border-gray-100">
                      <div className="text-2xl font-extrabold text-fist-red mb-1">
                        {data.cardPrefix}{data.cardNum}{data.cardSuffix}
                      </div>
                      <p className="text-[13px] font-semibold text-fist-graphite leading-snug">{data.cardLabel}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Lado Esquerdo: Imagem Dinâmica e Card Flutuante */}
          <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[650px] rounded-[2.5rem] overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeTab}
                src={activeData.image}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
                alt={activeData.tabLabel}
              />
            </AnimatePresence>
            
            {/* Gradiente sutil para manter contraste */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

            {/* Floating Data Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white/20 w-64 md:w-72"
            >
              <div className="flex items-center gap-2 mb-2 text-fist-red font-bold text-3xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab + "-counter"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <AnimatedCounter prefix={activeData.cardPrefix} target={activeData.cardNum} suffix={activeData.cardSuffix} decimals={activeData.cardDecimals} />
                  </motion.div>
                </AnimatePresence>
              </div>
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeTab + "-label"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-fist-graphite font-semibold text-sm leading-snug mb-4"
                >
                  {activeData.cardLabel}
                </motion.p>
              </AnimatePresence>
              
              {/* Mini Gráfico Mockup */}
              <div className="h-12 w-full flex items-end gap-1 mb-3">
                {[40, 55, 45, 65, 80, 100].map((h, i) => (
                  <motion.div 
                    key={i + activeTab}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex-1 bg-fist-red/20 rounded-t-sm relative group"
                  >
                    <div className="absolute inset-x-0 bottom-0 bg-fist-red rounded-t-sm transition-all duration-300" style={{ height: i === 5 ? '100%' : '50%' }}></div>
                  </motion.div>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.p
                  key={activeTab + "-source"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-[10px] text-gray-500 uppercase tracking-wider"
                >
                  {activeData.cardSource}
                </motion.p>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Lado Direito: Tabs e Copywriting */}
          <div className="w-full lg:w-1/2">
            <p className="text-fist-red font-bold tracking-[0.2em] text-xs uppercase mb-8">
              Tese de Investimento
            </p>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-10">
              {thesisData.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeTab === tab.id 
                      ? 'bg-fist-graphite text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {tab.tabLabel}
                </button>
              ))}
            </div>

            <div className="min-h-[280px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab + "-content"}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <h2 className="text-4xl md:text-5xl font-extrabold text-fist-graphite leading-[1.15] mb-6">
                    {activeData.headline}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {activeData.description}
                  </p>
                  <p className="text-md text-gray-500 leading-relaxed font-medium mb-10">
                    {activeData.secondaryDescription}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <a 
              href="#marketplace" 
              className="group inline-flex items-center gap-2 font-bold text-fist-red hover:text-fist-red-hover transition-colors relative"
            >
              <span>Ver oportunidades disponíveis</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              {/* Glow Vermelho Invisível/Visível Hover */}
              <div className="absolute inset-0 bg-fist-red/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

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
    <section id="ecossistema" className="py-24 bg-fist-offwhite relative overflow-hidden">
      {/* Background Animated Gradient */}
      <div className="absolute inset-0 z-0 opacity-30">
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-fist-red/10 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-fist-red font-bold tracking-widest text-sm uppercase mb-2">Nosso Ecossistema</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1A1A] mb-4 tracking-tight">
            Conectamos capital inteligente aos <span className="text-fist-red">ativos reais</span> que movem a economia.
          </h2>
          <p className="text-fist-gray text-lg leading-relaxed">
            Através da tecnologia blockchain, criamos uma infraestrutura global para investimentos fracionados em Energia, Real Estate, Esportes e Startups. Segurança regulatória e liquidez para um novo mercado de capitais.
          </p>
        </div>

        {/* Mobile Layout (Vertical Venn Bubble Flow) */}
        <div className="flex flex-col lg:hidden relative w-full pt-6">
           
           {/* Overlapping Circles on Y-axis */}
           <div className="relative w-full h-[320px] flex flex-col items-center justify-center pointer-events-none mb-10">
              {/* FIST CWF Circle */}
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-0 z-10 w-[190px] h-[190px] rounded-full bg-gradient-to-br from-fist-red to-fist-red-hover flex items-center justify-center p-6 shadow-2xl"
              >
                  <div className="absolute inset-0 rounded-full border-[1px] border-white/30 mix-blend-overlay"></div>
                  <span className="text-white font-extrabold text-xl tracking-widest drop-shadow-md">FIST CWF</span>
              </motion.div>
              
              {/* FIST ASSET Circle */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-0 z-20 w-[190px] h-[190px] rounded-full bg-white/20 backdrop-blur-xl border border-white/50 flex items-center justify-center p-6 shadow-xl"
              >
                  <span className="text-fist-graphite font-extrabold text-xl tracking-widest drop-shadow-md">FIST ASSET</span>
              </motion.div>

              {/* Central Connection glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-[100px] h-[100px] bg-white/40 rounded-full blur-xl pointer-events-none"></div>
           </div>

           {/* Horizontal Snap Carousel */}
           <div className="w-full">
              <h3 className="text-center text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Setores Integrados</h3>
              <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 hide-scrollbar -mx-6 px-6">
                 {["Energia", "Real Estate", "Esportes", "Startups"].map((setor, idx) => {
                    const icons = [Zap, Building2, Trophy, Rocket];
                    const Icon = icons[idx];
                    return (
                      <div key={idx} className="snap-center shrink-0 w-[65vw] bg-white/80 backdrop-blur-md border border-white/60 p-6 rounded-3xl shadow-sm flex flex-col items-center justify-center text-center h-[140px] gap-3">
                         <div className="bg-red-50 w-12 h-12 rounded-xl flex items-center justify-center text-fist-red shadow-inner">
                            <Icon className="w-6 h-6 stroke-[1.5]" />
                         </div>
                         <span className="text-lg font-extrabold text-fist-graphite">{setor}</span>
                      </div>
                    );
                 })}
              </div>
           </div>
        </div>

        {/* Desktop Layout (Grid Cross Layout) */}
        <div className="hidden lg:grid grid-cols-3 grid-rows-3 gap-8 items-center max-w-5xl mx-auto h-[700px] relative">
          
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <defs>
              <filter id="neon-glow-desktop" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
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
                    <line x1={x1} y1={y1} x2={x2} y2={y2} className={`transition-colors duration-300 ${isActive ? 'stroke-fist-red/20' : 'stroke-gray-200'}`} strokeWidth="2" />
                    <line 
                      x1={x1} y1={y1} x2={x2} y2={y2} 
                      className={`cpu-flow-line transition-all duration-300 ${isActive ? 'stroke-fist-red' : 'stroke-gray-300'}`}
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
              className={`${pillar.position} bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-fist-red/40 transition-all duration-300 z-10 relative cursor-pointer group flex flex-col w-full max-w-[280px] mx-auto`}
              onMouseEnter={() => setHoveredNode(pillar.id)}
              onMouseLeave={() => setHoveredNode(null)}
            >
               <div className="flex items-center gap-4 mb-5">
                 <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${hoveredNode === pillar.id ? 'bg-fist-red text-white shadow-lg shadow-fist-red/30 scale-110' : 'bg-red-50 text-fist-red group-hover:bg-red-100'}`}>
                   {pillar.icon}
                 </div>
                 <h3 className="text-lg font-bold text-[#1A1A1A] leading-tight">{pillar.title}</h3>
               </div>
               
               <ul className="space-y-3 text-sm font-medium text-gray-500">
                  {pillar.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${hoveredNode === pillar.id ? 'bg-fist-red' : 'bg-gray-300'}`}></div>
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
            <ShieldCheck className="w-5 h-5 text-fist-red shrink-0" />
            <span>Todo o ecossistema opera sob a supervisão regulatória da <strong className="text-fist-graphite">CVM (Resolução 88)</strong>, garantindo segurança institucional.</span>
          </p>
        </div>
      </div>
    </section>
  );
}



function FAQ() {
  const faqs = [
    { q: "O que é crowdfunding de investimento e como funciona?", a: "Crowdfunding de investimento é uma forma de captar recursos para projetos ou empresas por meio da participação de múltiplos investidores, cada um contribuindo com uma fração do valor total. Na FIST, esse processo é regulamentado pela CVM (Resolução 88) e utiliza tecnologia blockchain para garantir transparência e segurança em todas as operações." },
    { q: "O que é a Resolução CVM 88 e por que ela é importante?", a: "A Resolução CVM 88 regula a oferta pública de distribuição de valores mobiliários emitidos por empresas de pequeno porte, realizada com dispensa de registro. Ela estabelece regras claras para plataformas de crowdfunding de investimento, garantindo proteção ao investidor e transparência nas operações. A FIST é autorizada pela CVM sob essa resolução." },
    { q: "O que é renda fixa digital e tokenização?", a: "Renda fixa digital são títulos de dívida (como debêntures e notas comerciais) que são emitidos e gerenciados em formato digital utilizando tecnologia blockchain. A tokenização transforma esses ativos em tokens digitais, permitindo que investidores adquiram frações menores dos títulos, democratizando o acesso a investimentos antes restritos a grandes investidores." },
    { q: "Quais são as regras, taxas e prazos para investir?", a: "Cada oferta possui suas próprias condições de investimento, incluindo valor mínimo, prazo, taxa de retorno e forma de pagamento. Todas essas informações são detalhadas na página de cada oferta no marketplace. A FIST cobra uma taxa de intermediação que varia conforme a operação, sempre transparente e informada previamente." },
    { q: "Como funciona o investimento em energia na FIST?", a: "A FIST foca em projetos de infraestrutura energética, incluindo usinas solares, parques eólicos e soluções de armazenamento. Os investidores adquirem tokens que representam frações de títulos de renda fixa lastreados nesses ativos reais. Os retornos são gerados pela operação dos projetos energéticos e distribuídos conforme os termos de cada oferta." },
    { q: "Qual a segurança dos meus investimentos?", a: "Seus investimentos são protegidos por múltiplas camadas de segurança: regulamentação pela CVM, registro em blockchain imutável, custódia segura dos ativos e lastro em projetos reais de energia. Além disso, toda a documentação legal e financeira de cada oferta é disponibilizada de forma transparente na plataforma." },
    { q: "Como funciona o desconto na conta de energia?", a: "Para projetos de geração distribuída, os investidores podem receber créditos de energia que geram descontos na conta de luz. O processo funciona por meio de compensação de créditos junto à distribuidora local, conforme regulamentação da ANEEL. Os detalhes específicos variam conforme cada projeto." },
    { q: "Posso investir com pouco capital?", a: "Sim! A tokenização permite fracionar investimentos que antes exigiam valores elevados. Na FIST, você pode começar a investir com valores acessíveis, participando de projetos de infraestrutura energética que antes eram exclusivos de investidores institucionais. Cada oferta define seu valor mínimo de investimento." }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-fist-red font-bold tracking-widest text-sm uppercase mb-2">Perguntas Frequentes</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-fist-graphite">
            Tire suas <span className="text-fist-red">dúvidas</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-fist-red shadow-md' : 'border-gray-200 hover:border-gray-300'}`}
              >
                <button 
                  className="w-full px-6 py-5 flex items-center justify-between bg-white focus:outline-none"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                >
                  <span className={`font-bold text-left ${isOpen ? 'text-fist-red' : 'text-fist-graphite'}`}>{faq.q}</span>
                  <div className={`p-1 rounded-full ${isOpen ? 'bg-red-50 text-fist-red' : 'text-gray-400'}`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-5 text-gray-600 text-sm leading-relaxed"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-fist-dark text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030289072/h5tigukZUBaktzJyg3XPZX/fist-logo_91487e65.png" alt="FIST" className="h-8 w-auto" />
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Infraestrutura de mercado de capitais para o futuro da energia. Tokenização e renda fixa digital acessível.
            </p>
            <div className="flex items-center gap-4 text-fist-red font-bold">
               <ShieldCheck className="w-5 h-5"/> Autorizada CVM 88
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
              <li><a href="mailto:contato@fist.com.br" className="text-fist-red hover:underline">contato@fist.com.br</a></li>
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
