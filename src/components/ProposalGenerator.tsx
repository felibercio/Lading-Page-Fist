import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calculator, Zap, ChevronRight } from 'lucide-react';

export function ProposalGenerator() {
  // Calculator State
  const [consumo, setConsumo] = useState<number>(500);
  const [conexao, setConexao] = useState<'monofasico' | 'bifasico' | 'trifasico'>('bifasico');
  const [tarifaString, setTarifaString] = useState<string>('');
  const [desconto, setDesconto] = useState<number>(0.15);
  const [economia, setEconomia] = useState({ mensal: 0, anual: 0 });

  // Calculate Savings
  useEffect(() => {
    // Taxa de disponibilidade em kWh
    const taxaDisponibilidade = {
      monofasico: 30,
      bifasico: 50,
      trifasico: 100
    };

    const tarifaVal = Number(tarifaString.replace(',', '.'));
    const tarifa = isNaN(tarifaVal) ? 0 : tarifaVal;
    const taxa = taxaDisponibilidade[conexao];
    const consumoUtil = Math.max(0, consumo - taxa);

    const economiaMensal = consumoUtil * tarifa * desconto;
    const economiaAnual = economiaMensal * 12;

    setEconomia({ mensal: economiaMensal, anual: economiaAnual });
  }, [consumo, conexao, tarifaString, desconto]);

  return (
    <section className="py-4 lg:py-6 relative overflow-hidden shrink-0 w-full">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-fist-green/10 to-transparent blur-3xl pointer-events-none rounded-bl-full"></div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-100 text-xs font-semibold text-fist-green mb-4 shadow-sm">
            <Calculator className="w-4 h-4" />
            <span>Gerador de Propostas</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-fist-graphite mb-3 tracking-tight">
            Veja quanto você <span className="text-fist-green">vai economizar</span>
          </h2>
          <p className="text-fist-gray text-base leading-relaxed">
            Preencha os dados abaixo e calcule na hora quanto você pode economizar na sua fatura de energia, sem obras ou investimentos.
          </p>
        </div>

        {/* Calculadora */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-fist-dark p-6 rounded-3xl shadow-2xl text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-fist-green/10 rounded-full blur-3xl"></div>

          <h3 className="text-xl font-bold mb-6 flex items-center gap-3 relative z-10">
            <span className="w-8 h-8 rounded-full bg-white/10 text-fist-green flex items-center justify-center text-sm">1</span>
            Seu Consumo
          </h3>

          <div className="space-y-6 relative z-10">
            {/* Slider de Consumo */}
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-end mb-6 gap-2">
                <label className="text-gray-300 font-medium">Consumo Mensal Médio</label>
                <span className="text-4xl font-bold text-fist-green">{consumo} <span className="text-lg text-gray-400 font-normal">kWh</span></span>
              </div>
              <input
                type="range"
                min="50"
                max="10000"
                step="50"
                value={consumo}
                onChange={(e) => setConsumo(Number(e.target.value))}
                onInput={(e) => setConsumo(Number(e.currentTarget.value))}
                onTouchStart={(e) => e.stopPropagation()}
                className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-fist-green hover:accent-fist-green-hover transition-all touch-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:bg-fist-green [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-lg [&::-moz-range-thumb]:w-8 [&::-moz-range-thumb]:h-8 [&::-moz-range-thumb]:bg-fist-green [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:rounded-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-4">
                <span>50 kWh</span>
                <span>10.000+ kWh</span>
              </div>
            </div>

            {/* Tipo de Conexão */}
            <div>
              <label className="text-gray-300 font-medium block mb-4">Tipo de Conexão (Fase)</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'monofasico', label: 'Mono', desc: '-30 kWh' },
                  { id: 'bifasico', label: 'Bi', desc: '-50 kWh' },
                  { id: 'trifasico', label: 'Tri', desc: '-100 kWh' }
                ].map((tipo) => (
                  <button
                    key={tipo.id}
                    onClick={() => setConexao(tipo.id as any)}
                    className={`py-3 px-2 rounded-xl border text-center transition-all ${conexao === tipo.id
                      ? 'border-fist-green bg-fist-green/10 text-fist-green'
                      : 'border-gray-700 text-gray-400 hover:border-gray-500'
                      }`}
                  >
                    <div className="font-bold">{tipo.label}</div>
                    <div className="text-[10px] opacity-70 mt-1">{tipo.desc}</div>
                  </button>
                ))}
              </div>
              <div className="mt-3 text-xs text-gray-400 flex items-start gap-2 bg-white/5 p-3 rounded-lg">
                <InfoIcon className="w-5 h-5 shrink-0 mt-0.5 text-fist-green" />
                <p>A taxa de disponibilidade é o valor cobrado pela distribuidora e descontado antes do cálculo, pois não recebe benefício.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Tarifa de Energia */}
              <div>
                <label className="text-gray-300 font-medium block mb-4">Tarifa de Energia (R$/kWh)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">R$</span>
                  <input
                    type="text"
                    inputMode="decimal"
                    value={tarifaString}
                    onChange={(e) => setTarifaString(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-gray-700 text-white focus:border-fist-green focus:ring-2 focus:ring-fist-green/20 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Desconto */}
              <div>
                <label className="text-gray-300 font-medium block mb-4">Desconto Desejado</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setDesconto(0.15)}
                    className={`py-3 px-2 rounded-xl border text-center transition-all ${desconto === 0.15
                      ? 'border-fist-green bg-fist-green/10 text-fist-green'
                      : 'border-gray-700 text-gray-400 hover:border-gray-500'
                      }`}
                  >
                    <div className="font-bold">15%</div>
                  </button>
                  <button
                    onClick={() => setDesconto(0.20)}
                    className={`py-3 px-2 rounded-xl border text-center transition-all ${desconto === 0.20
                      ? 'border-fist-green bg-fist-green/10 text-fist-green'
                      : 'border-gray-700 text-gray-400 hover:border-gray-500'
                      }`}
                  >
                    <div className="font-bold">20%</div>
                  </button>
                </div>
              </div>
            </div>

            {/* Resultado */}
            <div className="pt-6 border-t border-gray-800">
              <p className="text-center text-gray-400 text-sm mb-4">Economia Estimada</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-2xl p-4 text-center border border-white/5">
                  <p className="text-gray-400 text-[10px] font-semibold uppercase tracking-wider mb-1">Mensal</p>
                  <p className="text-xl lg:text-2xl font-extrabold text-fist-green">
                    <span className="text-xs font-medium opacity-70">R$</span> {economia.mensal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </p>
                </div>
                <div className="bg-fist-green/10 rounded-2xl p-4 text-center border border-fist-green/20">
                  <p className="text-fist-green text-[10px] font-semibold uppercase tracking-wider mb-1 flex items-center justify-center gap-1">
                    <Zap className="w-3 h-3" /> Anual
                  </p>
                  <p className="text-xl lg:text-2xl font-extrabold text-fist-green">
                    <span className="text-xs font-medium opacity-70">R$</span> {economia.anual.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </p>
                </div>
              </div>
            </div>

            <button
              className="w-full mt-4 flex items-center justify-center gap-2 bg-fist-green text-white py-3.5 rounded-full font-extrabold text-base shadow-lg shadow-fist-green/20 hover:bg-fist-green-hover hover:scale-[1.02] active:scale-95 transition-all"
            >
              Quero começar minha economia <ChevronRight className="w-4 h-4" />
            </button>
            <p className="text-center text-xs text-gray-400 mt-3 px-4 leading-relaxed">
              Fique tranquilo! Ao clicar no botão acima, você será direcionado(a) de forma segura para nossa equipe no WhatsApp.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function InfoIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="16" x2="12" y2="12"></line>
      <line x1="12" y1="8" x2="12.01" y2="8"></line>
    </svg>
  );
}
