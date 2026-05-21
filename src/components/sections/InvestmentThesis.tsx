import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronRight, Menu, X, ShieldCheck, Activity, Zap, Sun, Wind, Battery,
  Factory, TrendingUp, UserPlus, Search, Wallet, LineChart, Plus, Minus,
  Building2, Trophy, Rocket, Info, MessageCircle, CheckCircle2
} from 'lucide-react';
import AnimatedCounter from '../ui/AnimatedCounter';

function InvestmentThesis() {
  const [activeTab, setActiveTab] = useState("energia");

  const thesisData = [
    {
      id: "energia",
      tabLabel: "Energia",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80",
      headline: (
        <>Energia: uma das maiores <span className="text-fist-green">oportunidades</span> de investimento no Brasil.</>
      ),
      description: "O Brasil tem um dos maiores potenciais de geração de energia solar do mundo, com grandes oportunidades de investimento nessa infraestrutura. O mercado está aquecido, os projetos são concretos e quem posiciona capital agora acessa condições que tendem a se tornar mais disputadas com o tempo.",
      secondaryDescription: "Na Fist, você investe em usinas solares e eletropostos por meio de frações de títulos de renda fixa lastreados nesses projetos reais. Os retornos são gerados pela operação de cada projeto e distribuídos conforme os termos de cada oferta.",
      tags: ["Usinas solares", "Eletropostos", "Armazenamento de energia", "Retorno fixo", "Lastreado em projeto real"],
      cardPrefix: "R$ ",
      cardNum: 16.1,
      cardSuffix: "T",
      cardDecimals: 1,
      cardLabel: "Mercado de tokenização projetado para 2030",
      cardSource: "Fonte: Boston Consulting Group"
    },
    {
      id: "real-estate",
      tabLabel: "Imobiliário",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
      headline: (
        <>Redefinindo o acesso ao mercado <span className="text-fist-green">Imobiliário</span></>
      ),
      description: "Historicamente marcado por alta barreira de entrada e baixa liquidez, o setor imobiliário ganha uma nova dimensão. Através da nossa infraestrutura (CVM 88), transformamos loteamentos, incorporações e galpões logísticos em ativos líquidos e rentáveis.",
      secondaryDescription: "Ao adquirir um token de Imobiliário, o investidor detém uma fração digital respaldada na força e segurança das garantias do mercado tradicional, mas com a agilidade da Web3.",
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
        <>O torcedor assumindo o <span className="text-fist-green">protagonismo</span> como investidor</>
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
        <>Venture Capital <span className="text-fist-green">descentralizado</span> e líquido</>
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
    <section className="py-8 lg:py-12 overflow-hidden relative shrink-0 w-full">
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
                    <p className="text-fist-green font-bold text-xs uppercase tracking-widest mb-2">{data.tabLabel}</p>
                    <h3 className="text-white text-2xl font-extrabold leading-[1.2]">{data.headline}</h3>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center mb-2 shadow-inner">
                    <Icon className="w-7 h-7 text-fist-green stroke-[1.5]" />
                  </div>
                  <p className="text-gray-600 text-[16px] leading-[1.6]">{data.description}</p>

                  <div className="mt-4 bg-gray-50 rounded-2xl p-4 border border-gray-100">
                    <div className="text-2xl font-extrabold text-fist-green mb-1">
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
              <div className="flex items-center gap-2 mb-2 text-fist-green font-bold text-3xl">
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
                    className="flex-1 bg-fist-green/20 rounded-t-sm relative group"
                  >
                    <div className="absolute inset-x-0 bottom-0 bg-fist-green rounded-t-sm transition-all duration-300" style={{ height: i === 5 ? '100%' : '50%' }}></div>
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
            <p className="text-fist-green font-bold tracking-[0.2em] text-xs uppercase mb-2">
              ONDE INVESTIR
            </p>
            <h3 className="text-2xl lg:text-3xl font-extrabold text-fist-graphite mb-2 leading-tight">
              Escolha o projeto. Receba o retorno.
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
              Você sabe exatamente quanto vai receber e quando, antes de investir qualquer valor. Sem surpresa, sem volatilidade.
            </p>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {thesisData.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${activeTab === tab.id
                    ? 'bg-fist-graphite text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  {tab.tabLabel}
                </button>
              ))}
            </div>

            <div className="min-h-[240px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab + "-content"}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <h2 className="text-3xl md:text-4xl font-extrabold text-fist-graphite leading-[1.15] mb-4">
                    {activeData.headline}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {activeData.description}
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium mb-6">
                    {activeData.secondaryDescription}
                  </p>

                  {/* @ts-ignore */}
                  {activeData.tags && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {/* @ts-ignore */}
                      {activeData.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1.5 bg-gray-50 border border-gray-200 text-gray-600 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider rounded-lg shadow-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <a
              href="#marketplace"
              className="group inline-flex items-center gap-2 font-bold text-fist-green hover:text-fist-green-hover transition-colors relative"
            >
              <span>Ver oportunidades disponíveis</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              {/* Glow Vermelho Invisível/Visível Hover */}
              <div className="absolute inset-0 bg-fist-green/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}


export default InvestmentThesis;
