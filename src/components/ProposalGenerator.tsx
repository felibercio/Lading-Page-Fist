import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, Zap, MapPin, User, ChevronRight, CheckCircle2, Building2, Check } from 'lucide-react';

export function ProposalGenerator() {
  // Form State
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    cep: '',
    logradouro: '',
    bairro: '',
    cidade: '',
    uf: '',
    prospector: ''
  });

  const prospectores = [
    "João Silva - Agente Autônomo",
    "Maria Souza - Consultora Especialista",
    "Roberto Carlos - Parceria B2B",
    "Outro (Não sei informar)"
  ];

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSubmit = () => {
    if (!formData.nome || !formData.whatsapp || !formData.email || !formData.cep) {
      setFormError('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    
    setFormError('');
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowModal(true);
    }, 1000);
  };

  // Calculator State
  const [consumo, setConsumo] = useState<number>(500);
  const [conexao, setConexao] = useState<'monofasico' | 'bifasico' | 'trifasico'>('bifasico');
  const [economia, setEconomia] = useState({ mensal: 0, anual: 0 });

  // Handle WhatsApp Mask (99) 99999-9999
  const handleWhatsappChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    
    let masked = value;
    if (value.length > 2) masked = `(${value.slice(0,2)}) ` + value.slice(2);
    if (value.length > 7) masked = masked.slice(0,10) + '-' + masked.slice(10);
    
    setFormData(prev => ({ ...prev, whatsapp: masked }));
  };

  // Handle CEP API Fetch
  const handleCepChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 8) value = value.slice(0, 8);
    
    let masked = value;
    if (value.length > 5) masked = value.slice(0,5) + '-' + value.slice(5);
    
    setFormData(prev => ({ ...prev, cep: masked }));

    if (value.length === 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${value}/json/`);
        const data = await response.json();
        if (!data.erro) {
          setFormData(prev => ({
            ...prev,
            logradouro: data.logradouro,
            bairro: data.bairro,
            cidade: data.localidade,
            uf: data.uf
          }));
        }
      } catch (error) {
        console.error("Erro ao buscar CEP:", error);
      }
    }
  };

  // Calculate Savings
  useEffect(() => {
    // Taxa de disponibilidade em kWh
    const taxaDisponibilidade = {
      monofasico: 30,
      bifasico: 50,
      trifasico: 100
    };

    const taxa = taxaDisponibilidade[conexao];
    const consumoUtil = Math.max(0, consumo - taxa);
    
    // Parâmetros simulados
    const tarifaMedia = 0.90; // R$ 0,90 por kWh
    const desconto = 0.15; // 15% de desconto

    const economiaMensal = consumoUtil * tarifaMedia * desconto;
    const economiaAnual = economiaMensal * 12;

    setEconomia({ mensal: economiaMensal, anual: economiaAnual });
  }, [consumo, conexao]);

  return (
    <section className="py-8 lg:py-12 relative overflow-hidden shrink-0 w-full">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-fist-green/10 to-transparent blur-3xl pointer-events-none rounded-bl-full"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-100 text-xs font-semibold text-fist-green mb-6 shadow-sm">
            <Calculator className="w-4 h-4" />
            <span>Gerador de Propostas</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-fist-graphite mb-4 tracking-tight">
            Descubra sua <span className="text-fist-green">Economia Inteligente</span>
          </h2>
          <p className="text-fist-gray text-lg leading-relaxed">
            Preencha os dados abaixo e calcule na hora quanto você pode economizar na sua fatura de energia, sem obras ou investimentos.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Formulário de Qualificação */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-white p-8 rounded-3xl shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-fist-graphite mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-fist-green text-white flex items-center justify-center text-sm">1</span>
              Seus Dados
            </h3>
            
            <div className="space-y-6">
              {/* Dados Pessoais */}
              <div className="space-y-4">
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Nome Completo"
                    value={formData.nome}
                    onChange={(e) => setFormData(prev => ({...prev, nome: e.target.value}))}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-fist-green focus:ring-2 focus:ring-fist-green/20 outline-none transition-all"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="WhatsApp"
                    value={formData.whatsapp}
                    onChange={handleWhatsappChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-fist-green focus:ring-2 focus:ring-fist-green/20 outline-none transition-all"
                  />
                  <input 
                    type="email" 
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-fist-green focus:ring-2 focus:ring-fist-green/20 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Endereço */}
              <div className="pt-4 border-t border-gray-100 space-y-4">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Endereço
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input 
                    type="text" 
                    placeholder="CEP"
                    value={formData.cep}
                    onChange={handleCepChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-fist-green focus:ring-2 focus:ring-fist-green/20 outline-none transition-all"
                  />
                  <input 
                    type="text" 
                    placeholder="Logradouro"
                    value={formData.logradouro}
                    disabled
                    className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 text-gray-500 md:col-span-2 outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <input 
                    type="text" 
                    placeholder="Bairro"
                    value={formData.bairro}
                    disabled
                    className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 text-gray-500 outline-none md:col-span-1"
                  />
                  <input 
                    type="text" 
                    placeholder="Cidade"
                    value={formData.cidade}
                    disabled
                    className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 text-gray-500 md:col-span-2 outline-none"
                  />
                </div>
              </div>

              {/* Vínculo Comercial */}
              <div className="pt-4 border-t border-gray-100 space-y-4">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                  <Building2 className="w-4 h-4" /> Vínculo Comercial
                </h4>
                <div className="relative">
                  <select 
                    value={formData.prospector}
                    onChange={(e) => setFormData(prev => ({...prev, prospector: e.target.value}))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-fist-green focus:ring-2 focus:ring-fist-green/20 outline-none transition-all appearance-none bg-white text-gray-700"
                  >
                    <option value="" disabled>Selecione um Prospector</option>
                    {prospectores.map((p, i) => (
                      <option key={i} value={p}>{p}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Calculadora */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-fist-dark p-8 rounded-3xl shadow-2xl text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-fist-green/10 rounded-full blur-3xl"></div>
            
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 relative z-10">
              <span className="w-8 h-8 rounded-full bg-white/10 text-fist-green flex items-center justify-center text-sm">2</span>
              Seu Consumo
            </h3>

            <div className="space-y-8 relative z-10">
              {/* Slider de Consumo */}
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="text-gray-300 font-medium">Consumo Mensal Médio</label>
                  <span className="text-3xl font-bold text-fist-green">{consumo} <span className="text-sm text-gray-400">kWh</span></span>
                </div>
                <input 
                  type="range" 
                  min="50" 
                  max="10000" 
                  step="50"
                  value={consumo}
                  onChange={(e) => setConsumo(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-fist-green hover:accent-fist-green-hover transition-all"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
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
                      className={`py-3 px-2 rounded-xl border text-center transition-all ${
                        conexao === tipo.id 
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
                  <InfoIcon className="w-4 h-4 shrink-0 mt-0.5 text-fist-green" />
                  <p>A taxa de disponibilidade é o custo mínimo obrigatório cobrado pela distribuidora e é subtraída antes do cálculo de economia.</p>
                </div>
              </div>

              {/* Resultado */}
              <div className="pt-8 border-t border-gray-800">
                <p className="text-center text-gray-400 text-sm mb-4">Economia Estimada</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-2xl p-6 text-center border border-white/5">
                    <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">Mensal</p>
                    <p className="text-2xl lg:text-3xl font-extrabold text-fist-green">
                      <span className="text-sm font-medium opacity-70">R$</span> {economia.mensal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                  </div>
                  <div className="bg-fist-green/10 rounded-2xl p-6 text-center border border-fist-green/20">
                    <p className="text-fist-green text-xs font-semibold uppercase tracking-wider mb-2 flex items-center justify-center gap-1">
                      <Zap className="w-3 h-3" /> Anual
                    </p>
                    <p className="text-2xl lg:text-3xl font-extrabold text-fist-green">
                      <span className="text-sm font-medium opacity-70">R$</span> {economia.anual.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                  </div>
                </div>
              </div>

              {formError && (
                <div className="mt-6 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center font-medium animate-pulse">
                  {formError}
                </div>
              )}

              <button 
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full mt-6 flex items-center justify-center gap-2 bg-fist-green text-white py-4 rounded-full font-extrabold text-lg shadow-lg shadow-fist-green/20 hover:bg-fist-green-hover hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-70 disabled:hover:scale-100"
              >
                {isSubmitting ? 'Processando...' : <>Gerar Proposta Oficial <ChevronRight className="w-5 h-5" /></>}
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-fist-dark/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative overflow-hidden text-center"
            >
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                <Check className="w-10 h-10 text-fist-green" strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-extrabold text-fist-graphite mb-2">Proposta Solicitada!</h3>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Seus dados foram enviados com sucesso. Nossa equipe entrará em contato via WhatsApp em breve.
              </p>
              <button
                onClick={() => {
                  setShowModal(false);
                  setFormData({ nome: '', whatsapp: '', email: '', cep: '', logradouro: '', bairro: '', cidade: '', uf: '', prospector: '' });
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full bg-fist-graphite text-white py-4 rounded-full font-bold hover:bg-black transition-all active:scale-95"
              >
                Voltar para o Início
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
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
