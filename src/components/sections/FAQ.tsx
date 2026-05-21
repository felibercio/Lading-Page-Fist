import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronRight, Menu, X, ShieldCheck, Activity, Zap, Sun, Wind, Battery,
  Factory, TrendingUp, UserPlus, Search, Wallet, LineChart, Plus, Minus,
  Building2, Trophy, Rocket, Info, MessageCircle, CheckCircle2
} from 'lucide-react';

function FAQ() {
  const faqsEnergia = [
    {
      q: "Preciso realizar alguma instalação?",
      a: "Não. Nenhuma obra, nenhum equipamento, nenhuma alteração na sua instalação elétrica. Tudo acontece no sistema da distribuidora, sem que você precise fazer nada."
    },
    {
      q: "Continuo recebendo energia da minha distribuidora?",
      a: "Sim. Você continua recebendo energia da sua distribuidora normalmente."
    },
    {
      q: "Como recebo o desconto?",
      a: "A Fist possui usinas solares que geram energia e enviam para a rede elétrica. A distribuidora converte o que foi gerado em créditos solares. Quando você se vincula a uma das nossas usinas, esses créditos são compensados no seu consumo em kWh."
    },
    {
      q: "É um processo seguro e regulamentado?",
      a: "Sim. O modelo segue a Lei 14.300 e as regras da Aneel."
    }
  ];

  const faqsCWF = [
    {
      q: "O que é crowdfunding de investimento e como funciona?",
      a: "Crowdfunding de investimento é uma forma de várias pessoas financiarem juntas um projeto, cada uma com uma fração do valor total. Quem participa vira investidor, com direito a retorno financeiro sobre o que investiu. Na Fist, esse processo é regulamentado pela CVM (Resolução 88) e utiliza tecnologia blockchain para garantir transparência e segurança em todas as operações."
    },
    {
      q: "O que é a Resolução CVM 88 e por que ela é importante?",
      a: "É a lei que autoriza e regula plataformas como a Fist a captar investimentos de pessoas físicas para projetos reais. É a mesma entidade que fiscaliza corretoras e fundos no Brasil, ou seja, você está protegido pelas mesmas regras."
    },
    {
      q: "O que é renda variável digital e tokenização?",
      a: "Renda variável digital é um investimento com alto potencial de rentabilidade baseado na performance de ativos do mundo real. Tokenização é a forma como isso é registrado: cada investimento vira um registro digital único, público e permanente, que qualquer pessoa pode consultar."
    },
    {
      q: "Quais são as regras, taxas e prazos para investir?",
      a: "Cada oferta possui suas próprias condições de investimento, incluindo valor mínimo, prazo, taxa de retorno e forma de pagamento. Todas essas informações são detalhadas na página de cada oferta no marketplace. A Fist cobra uma taxa de intermediação que varia conforme a operação, sempre transparente e informada previamente."
    },
    {
      q: "Como funciona o investimento em energia na Fist?",
      a: (
        <div className="space-y-2">
          <p>A Fist conecta investidores a projetos de infraestrutura de energia solar e eletropostos. Veja como funciona na prática:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Você adquire frações de ativos de renda variável lastreados nesses projetos reais</li>
            <li>Os projetos entram em operação e geram receita</li>
            <li>Os retornos são distribuídos para você conforme os termos de cada oferta</li>
            <li>Tudo registrado em blockchain e acompanhável a qualquer momento</li>
          </ul>
        </div>
      )
    },
    {
      q: "Qual a segurança dos meus investimentos?",
      a: (
        <div className="space-y-2">
          <p>Seus investimentos são protegidos por múltiplas camadas de segurança:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Regulamentação da CVM (Resolução 88): a mesma que protege quem investe em corretoras e fundos</li>
            <li>Blockchain: cada operação registrada publicamente, imutável e rastreável</li>
            <li>Lastro em ativos reais: seu dinheiro é garantido por projetos físicos, não por promessas</li>
            <li>Ecossistema regulatório completo: CVM, ANBIMA, B3</li>
          </ul>
        </div>
      )
    },
    {
      q: "Posso investir com pouco dinheiro?",
      a: "Sim. A Fist foi construída para que qualquer pessoa possa participar. Cada projeto tem um valor mínimo acessível e você não precisa ter muito para começar."
    }
  ];

  const [openEnergiaIdx, setOpenEnergiaIdx] = useState<number | null>(0);
  const [openCWFIdx, setOpenCWFIdx] = useState<number | null>(null);

  return (
    <section className="py-8 lg:py-12 shrink-0 w-full">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-fist-green font-bold tracking-widest text-sm uppercase mb-2">Perguntas Frequentes</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-fist-graphite">
            Tire suas <span className="text-fist-green">dúvidas</span>
          </h2>
        </div>

        {/* Categoria Energia */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-fist-graphite mb-6 flex items-center gap-2">
            <Sun className="w-6 h-6 text-fist-green" /> Energia com Desconto
          </h3>
          <div className="space-y-4">
            {faqsEnergia.map((faq, idx) => {
              const isOpen = openEnergiaIdx === idx;
              return (
                <div
                  key={idx}
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-fist-green shadow-md' : 'border-gray-200 hover:border-gray-300'}`}
                >
                  <button
                    className="w-full px-6 py-5 flex items-center justify-between bg-white focus:outline-none"
                    onClick={() => setOpenEnergiaIdx(isOpen ? null : idx)}
                  >
                    <span className={`font-bold text-left pr-4 ${isOpen ? 'text-fist-green' : 'text-fist-graphite'}`}>{faq.q}</span>
                    <div className={`p-1 rounded-full shrink-0 ${isOpen ? 'bg-green-50 text-fist-green' : 'text-gray-400'}`}>
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

        {/* Categoria CWF */}
        <div>
          <h3 className="text-xl font-bold text-fist-graphite mb-6 flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-fist-green" /> Fist Crowdfunding (CWF)
          </h3>
          <div className="space-y-4">
            {faqsCWF.map((faq, idx) => {
              const isOpen = openCWFIdx === idx;
              return (
                <div
                  key={idx}
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-fist-green shadow-md' : 'border-gray-200 hover:border-gray-300'}`}
                >
                  <button
                    className="w-full px-6 py-5 flex items-center justify-between bg-white focus:outline-none"
                    onClick={() => setOpenCWFIdx(isOpen ? null : idx)}
                  >
                    <span className={`font-bold text-left pr-4 ${isOpen ? 'text-fist-green' : 'text-fist-graphite'}`}>{faq.q}</span>
                    <div className={`p-1 rounded-full shrink-0 ${isOpen ? 'bg-green-50 text-fist-green' : 'text-gray-400'}`}>
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

      </div>
    </section>
  );
}


export default FAQ;
