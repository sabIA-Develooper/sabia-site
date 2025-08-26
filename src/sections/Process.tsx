import { CheckCircle, Search, Lightbulb, Rocket, BarChart3 } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      number: 1,
      title: "Descoberta",
      description: "Mapeamos seus processos atuais, identificamos gargalos e oportunidades de automação.",
      icon: Search,
      details: ["Análise de processos", "Identificação de pain points", "Levantamento de requisitos"]
    },
    {
      number: 2,
      title: "Prova de Valor",
      description: "Desenvolvemos um MVP funcional para validar a solução antes do investimento completo.",
      icon: Lightbulb,
      details: ["Prototipagem rápida", "Validação de conceito", "Demonstração prática"]
    },
    {
      number: 3,
      title: "Implementação",
      description: "Desenvolvimento e deploy da solução completa com metodologia ágil e entregas incrementais.",
      icon: Rocket,
      details: ["Desenvolvimento ágil", "Testes automatizados", "Deploy seguro"]
    },
    {
      number: 4,
      title: "Monitoramento",
      description: "Acompanhamento contínuo, otimizações e suporte para garantir máximo ROI.",
      icon: BarChart3,
      details: ["Métricas de performance", "Otimizações contínuas", "Suporte especializado"]
    }
  ];

  return (
    <section id="processo" className="py-20 px-4 sm:px-6 lg:px-8 bg-grid">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Como{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              trabalhamos
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Metodologia comprovada para transformar sua operação. Do diagnóstico à implementação, 
            cada etapa é cuidadosamente planejada para gerar máximo valor.
          </p>
        </div>

        {/* Desktop Process Flow */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-30"></div>
            
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={step.number} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  {/* Icon Circle */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 mx-auto glass rounded-full flex items-center justify-center border-2 border-primary/30 hover:border-primary transition-all duration-300 hover-lift">
                      <step.icon size={24} className="text-primary" />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                    
                    {/* Details */}
                    <ul className="space-y-2 text-xs">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center justify-center text-muted-foreground">
                          <CheckCircle size={12} className="text-secondary mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Process Flow */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-start space-x-4 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center border-2 border-primary/30">
                  <step.icon size={20} className="text-primary" />
                </div>
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold -mt-2 ml-3">
                  {step.number}
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 glass p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{step.description}</p>
                
                <ul className="space-y-1">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-xs text-muted-foreground">
                      <CheckCircle size={12} className="text-secondary mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center glass p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Pronto para começar sua transformação digital?
          </h3>
          <p className="text-muted-foreground mb-6">
            Agende um diagnóstico gratuito de 30 minutos e descubra como podemos automatizar sua operação.
          </p>
          <button 
            onClick={() => {
              const element = document.querySelector('#contato');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105"
          >
            Agendar diagnóstico gratuito
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;