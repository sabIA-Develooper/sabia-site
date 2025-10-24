import { MessageCircle, Globe, Database, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Offers = () => {
  const whatsappNumber = "557999707310";
  
  const handleWhatsAppClick = (offerType: string) => {
    const message = `Olá, vim pelo site da sabIA Developer. Quero falar sobre: ${offerType}.`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener');
  };

  const mainOffers = [
    {
      icon: MessageCircle,
      title: 'Automação no WhatsApp & IA',
      description: 'Chatbots com contexto, funis de venda/atendimento, opt-in, n8n + WhatsApp Cloud API, analytics.',
      features: [
        'Chatbots inteligentes com IA',
        'Funis automatizados de venda',
        'Integração WhatsApp Cloud API',
        'Analytics e métricas'
      ],
      ctaText: 'Começar pelo WhatsApp',
      offerType: 'Automação no WhatsApp & IA'
    },
    {
      icon: Globe,
      title: 'Sites & Apps com Integrações',
      description: 'Landing e Web/Mobile (Next.js/Flutter), SEO técnico no verde, integrações CRM/ERP, gateways e APIs.',
      features: [
        'Landing pages e aplicações web',
        'Apps mobile (Flutter)',
        'SEO técnico otimizado',
        'Integrações CRM/ERP/Gateways'
      ],
      ctaText: 'Quero meu projeto',
      offerType: 'Sites & Apps'
    },
    {
      icon: Database,
      title: 'Integrações & BI',
      description: 'Conecte ERP/CRM/APIs, centralize dados e dashboards executivos (ETL/ELT: GSheets/Notion/Supabase).',
      features: [
        'Integração ERP/CRM/APIs',
        'Centralização de dados',
        'Dashboards executivos',
        'ETL/ELT automatizado'
      ],
      ctaText: 'Ver possibilidades',
      offerType: 'Integrações & BI'
    }
  ];

  const supportServices = {
    'Conteúdo & Design': [
      'Edição de vídeo e foto',
      'Branding e identidade visual',
      'UI/UX Design',
      'Materiais gráficos',
      'Landing pages e funis'
    ],
    'Suporte & Treinamento': [
      'Manutenção de sistemas',
      'Hospedagem & DevOps',
      'Treinamentos personalizados',
      'Suporte técnico contínuo'
    ]
  };

  return (
    <section id="ofertas" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Escolha sua{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              oferta-âncora
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções completas para destravar o crescimento do seu negócio
          </p>
        </div>

        {/* Main Offers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {mainOffers.map((offer, index) => (
            <div
              key={index}
              className="glass p-8 rounded-2xl hover-lift group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <offer.icon size={32} className="text-primary" />
              </div>
              
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {offer.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {offer.description}
              </p>
              
              <ul className="space-y-3 mb-6">
                {offer.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                onClick={() => handleWhatsAppClick(offer.offerType)}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground min-h-[48px]"
              >
                {offer.ctaText}
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          ))}
        </div>

        {/* Support Services */}
        <div className="glass p-8 md:p-12 rounded-2xl">
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">
            Serviços de apoio
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {Object.entries(supportServices).map(([category, services]) => (
              <div key={category}>
                <h4 className="text-xl font-semibold text-primary mb-4">{category}</h4>
                <ul className="space-y-2">
                  {services.map((service, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-muted-foreground">
                      <span className="text-secondary mt-1">•</span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button
              size="lg"
              onClick={() => handleWhatsAppClick('Priorizar meu projeto')}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-lg font-semibold min-h-[48px]"
            >
              Quero priorizar meu projeto
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
