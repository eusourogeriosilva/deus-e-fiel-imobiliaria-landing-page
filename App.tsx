
import React, { useState, useRef } from 'react';
import { PhoneIcon, CheckIcon, UsersIcon, LightBulbIcon, TargetIcon } from './components/Icons';
import AtendimentoImg from './assets/atendimento.png';
import ClienteAnaImg from './assets/cliente-ana.png';
import { WHATSAPP_NUMBER, WHATSAPP_LINK, INSTAGRAM_HANDLE, FAQ_DATA } from './constants';

const App: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    region: ''
  });

  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Lead Capturado:', formData);
    alert('Obrigado pelo contato! Nossa equipe retornará em breve.');
    setFormData({ name: '', email: '', whatsapp: '', region: '' });
  };

  return (
    <div className="flex flex-col min-h-screen selection:bg-amber-200">
      {/* Header / Nav */}
      <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">DF</div>
            <span className="font-bold text-lg tracking-tight uppercase">Deus é Fiel <span className="text-amber-500">Imobiliária</span></span>
          </div>
          <button
            onClick={scrollToForm}
            className="hidden md:flex items-center gap-2 bg-amber-500 hover:bg-amber-600 transition-colors text-white px-5 py-2 rounded-full font-semibold text-sm shadow-sm"
          >
            Dê o primeiro passo -&gt;
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Encontre seu lar com quem <span className="text-amber-500">entende você</span> de verdade
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
              Você merece mais do que uma venda, você merece atenção, verdade e o melhor imóvel pra você.
              Nós cuidamos do seu sonho como se fosse nosso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToForm}
                className="flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-amber-500/20 transition-all hover:scale-[1.02]"
              >
                Dê o primeiro passo -&gt;
              </button>
            </div>
          </div>
          <div className="relative flex flex-col">
            {/* Decorative element background */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-30"></div>

            {/* Lead Capture Form */}
            <div ref={formRef} className="relative z-10 bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-2xl scroll-mt-32">
              <h3 className="text-2xl font-bold mb-2">Dê o primeiro passo</h3>
              <p className="text-slate-500 mb-6">Preencha os dados e um consultor entrará em contato.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1">Nome Completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Seu nome aqui"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1">E-mail</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="whatsapp" className="block text-sm font-semibold text-slate-700 mb-1">WhatsApp</label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      placeholder="(11) 99999-9999"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="region" className="block text-sm font-semibold text-slate-700 mb-1">Região de Interesse</label>
                  <select
                    id="region"
                    name="region"
                    required
                    value={formData.region}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all bg-white appearance-none"
                  >
                    <option value="" disabled>Selecione uma região</option>
                    <option value="Barueri">Barueri</option>
                    <option value="Osasco">Osasco</option>
                    <option value="Ambas">Ambas as regiões</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all active:scale-[0.98] shadow-lg shadow-slate-200"
                >
                  Enviar meu interesse
                </button>
                <p className="text-[10px] text-center text-slate-400 mt-4">
                  Respeitamos sua privacidade. Seus dados estão seguros conosco.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-slate-50 diagonal-divider relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-4 block">O Desafio</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Encontrar o imóvel ideal pode ser difícil e desgastante…</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <p className="text-slate-600 italic">"Você já sentiu que os corretores só querem vender rápido?"</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <p className="text-slate-600 italic">"Ou que ninguém escuta o que você realmente precisa?"</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <p className="text-slate-600 italic">"Você quer alguém que coloque clareza e fé no processo."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src={AtendimentoImg}
                alt="Atendimento humanizado"
                className="rounded-3xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Nós somos a Deus é Fiel Imobiliária</h2>
              <p className="text-lg text-slate-600 mb-8">
                Atuamos em Osasco e Barueri com um único propósito: transformar a busca pelo imóvel em uma jornada de fé e sucesso.
                Aqui, você não é mais um número, você é parte de um sonho que vamos construir juntos.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Realizar o sonho da casa própria",
                  "Investir com segurança e sabedoria",
                  "Entender cada passo com clareza e atenção"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-lg font-medium">
                    <div className="bg-amber-100 text-amber-600 p-1 rounded-full">
                      <CheckIcon className="w-5 h-5" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">3 Benefícios que você tem aqui</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Colocamos seus objetivos no centro de tudo o que fazemos.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <BenefitCard
              icon={<UsersIcon className="w-8 h-8" />}
              title="Atendimento que escuta você"
              description="Não empurramos soluções, entendemos sua necessidade real e seu sonho de vida primeiro."
            />
            <BenefitCard
              icon={<LightBulbIcon className="w-8 h-8" />}
              title="Clareza do início ao fim"
              description="Explicamos cada etapa com total transparência. Sem surpresas negativas ou termos técnicos difíceis."
            />
            <BenefitCard
              icon={<TargetIcon className="w-8 h-8" />}
              title="Foco no seu objetivo"
              description="Seja para morar ou investir, nossa busca é focada no que é certo para você, não para o vendedor."
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-amber-500 diagonal-divider text-white overflow-hidden">
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Funciona</h2>
            <p className="text-amber-50">Transparência em cada passo do seu projeto.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <StepItem number={1} title="Página de contato" description="Você preenche nossa página de contato rapidinho." />
            <StepItem number={2} title="Ligação consultiva" description="Nós te ligamos para entender profundamente seus objetivos." />
            <StepItem number={3} title="Seleção conjunta" description="Escolhemos juntos os melhores imóveis do mercado." />
            <StepItem number={4} title="Assinatura do contrato" description="Acompanhamos você até o momento final da assinatura." />
          </div>
          <div className="text-center mt-16">
            <button
              onClick={scrollToForm}
              className="inline-block bg-white text-amber-600 px-10 py-5 rounded-full font-bold text-xl shadow-2xl transition-transform hover:scale-105"
            >
              Dê o primeiro passo -&gt;
            </button>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">O que dizem sobre nós</h2>
              <div className="p-8 bg-slate-50 rounded-3xl relative">
                <p className="text-xl text-slate-700 italic mb-6">
                  “Me senti muito respeitada, eles realmente ouviram o que eu precisava! Encontrei o apartamento perfeito em Barueri.”
                </p>
                <div className="flex items-center gap-4">
                  <img src={ClienteAnaImg} alt="Cliente" className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-bold">Ana Maria Silva</p>
                    <p className="text-sm text-slate-500">Cliente Satisfeita</p>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-amber-50 rounded-3xl relative">
                <p className="text-xl text-slate-700 italic mb-6">
                  “Consegui investir com confiança e transparência, do jeito que eu sempre quis. Clareza total em todo o processo.”
                </p>
                <div className="flex items-center gap-4">
                  <img src="https://i.pravatar.cc/100?u=ricardo" alt="Investidor" className="w-12 h-12 rounded-full" />
                  <div>
                    <p className="font-bold">Ricardo Oliveira</p>
                    <p className="text-sm text-slate-500">Investidor Feliz</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-900 rounded-3xl p-12 text-white flex flex-col justify-center items-center text-center">
              <div className="w-20 h-20 bg-amber-500 rounded-2xl mb-8 flex items-center justify-center">
                <span className="text-3xl font-bold">IG</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Siga nossa jornada</h3>
              <p className="text-slate-400 mb-8">Veja os bastidores e novas ofertas diariamente em nosso Instagram.</p>
              <a
                href={`https://instagram.com/${INSTAGRAM_HANDLE.replace('@', '')}`}
                className="text-amber-500 font-bold text-xl border-b-2 border-amber-500 pb-1"
              >
                {INSTAGRAM_HANDLE}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes (FAQ)</h2>
            <p className="text-slate-500">Tiramos suas dúvidas para você decidir com tranquilidade.</p>
          </div>
          <div className="space-y-4">
            {FAQ_DATA.map((item, idx) => (
              <AccordionItem key={idx} question={`${idx + 1}️⃣ ${item.question}`} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-amber-500 rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl shadow-amber-500/30 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">
                Pronto para encontrar o imóvel perfeito com transparência?
              </h2>
              <p className="text-xl text-amber-50 mb-10">
                👉 Fale com a gente agora! Estamos prontos para te ouvir.
              </p>
              <button
                onClick={scrollToForm}
                className="inline-flex items-center gap-4 bg-white text-amber-600 px-12 py-6 rounded-2xl font-bold text-2xl shadow-xl transition-transform hover:scale-105"
              >
                Dê o primeiro passo -&gt;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center text-white font-bold text-xs">DF</div>
            <span className="font-bold uppercase text-slate-900">Deus é Fiel Imobiliária</span>
          </div>
          <p className="text-slate-400 text-sm">© 2024 Deus é Fiel Imobiliária. Osasco & Barueri. Todos os direitos reservados.</p>
          <div className="flex gap-6 text-slate-400">
            <span className="text-xs">Privacidade</span>
            <span className="text-xs">Termos</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Helper Components
const BenefitCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="p-10 rounded-3xl bg-white border border-slate-100 hover:border-amber-200 transition-all hover:shadow-xl hover:shadow-amber-500/5 group">
    <div className="w-16 h-16 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-slate-500 leading-relaxed">{description}</p>
  </div>
);

const StepItem: React.FC<{ number: number; title: string; description: string }> = ({ number, title, description }) => (
  <div className="relative group">
    <div className="mb-6 flex items-center justify-center">
      <div className="w-12 h-12 rounded-full bg-white/20 border-2 border-white flex items-center justify-center font-bold text-xl relative z-10 group-hover:bg-white group-hover:text-amber-500 transition-colors">
        {number}
      </div>
    </div>
    <h3 className="text-xl font-bold mb-3 text-center">{title}</h3>
    <p className="text-amber-50 text-center opacity-80">{description}</p>
  </div>
);

const AccordionItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-50"
      >
        <span className="font-bold text-lg text-slate-800">{question}</span>
        <span className={`text-amber-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="p-6 pt-0 text-slate-600 border-t border-slate-50">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default App;
