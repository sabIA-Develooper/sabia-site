import { Zap, FileText, Layers, Headphones } from 'lucide-react';

const WhySabia = () => {
  const reasons = [
    {
      icon: Zap,
      title: 'Resultado rápido',
      description: 'Sprints semanais com entregas incrementais e roadmap claro. Você vê progresso desde a primeira semana.'
    },
    {
      icon: FileText,
      title: 'Transparência',
      description: 'Proposta itemizada, escopo fechado e comunicação contínua no WhatsApp. Sem surpresas no meio do caminho.'
    },
    {
      icon: Layers,
      title: 'Stack moderna',
      description: 'n8n, WhatsApp Business API, OpenAI, Next.js/Flutter, Vercel/AWS. Tecnologias que escalam com seu negócio.'
    },
    {
      icon: Headphones,
      title: 'Suporte próximo',
      description: 'SLA de resposta garantido e suporte pós-go-live. Estamos aqui quando você precisar.'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Diagnóstico',
      description: '30 minutos para entender seu desafio e mapear oportunidades.'
    },
    {
      number: '02',
      title: 'Proposta & Escopo',
      description: 'Orçamento detalhado e cronograma de sprints em até 24h.'
    },
    {
      number: '03',
      title: 'Sprints',
      description: 'Entregas semanais com feedback contínuo e ajustes no caminho.'
    },
    {
      number: '04',
      title: 'Go-Live & Suporte',
      description: 'Implantação segura e acompanhamento pós-lançamento.'
    }
  ];

  const technologies = [
    'n8n',
    'Meta/WhatsApp',
    'OpenAI',
    'Vercel',
    'AWS',
    'Firebase',
    'Supabase',
    'Zapier',
    'Google Cloud',
    'Next.js',
    'Flutter',
    'PostgreSQL'
  ];

  return (
    <section id="por-que" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Why sabIA */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Por que a{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              sabIA Developer?
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="glass p-6 rounded-2xl hover-lift text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <reason.icon size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Processo em 4 etapas
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="glass p-6 rounded-2xl h-full">
                  <div className="text-5xl font-bold text-primary/20 mb-4">
                    {step.number}
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
                
                {/* Connector line (hidden on last item and mobile) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="glass p-8 md:p-12 rounded-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Tecnologias que usamos
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-background/50 px-6 py-3 rounded-xl border border-border/50 hover:border-primary/50 transition-colors"
              >
                <span className="text-foreground font-medium">{tech}</span>
              </div>
            ))}
          </div>
          
          <p className="text-center text-muted-foreground mt-8 text-sm">
            Stack moderna, escalável e com suporte ativo da comunidade
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhySabia;
