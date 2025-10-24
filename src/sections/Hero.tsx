import { Button } from '@/components/ui/button';
import MetricBadge from '@/components/MetricBadge';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const whatsappNumber = "557999707310";
  const message = "Olá, vim pelo site da sabIA Developer. Quero falar sobre: [Programação | Automações | Site/App | Integrações].";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener');
  };

  const scrollToOffers = () => {
    const element = document.querySelector('#ofertas');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-grid">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Main Headline */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Automação e Programação{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                que destravam seu crescimento
              </span>
            </h1>
          </div>

          {/* Subheadline */}
          <div className="animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              WhatsApp, IA, sites e integrações — do diagnóstico ao go-live com entregas semanais.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 md:py-3 text-lg font-semibold transition-all hover:scale-105 hover:shadow-xl w-full sm:w-auto min-h-[48px]"
            >
              Falar no WhatsApp agora
              <ArrowRight size={20} className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToOffers}
              className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-6 md:py-3 text-lg font-semibold transition-all hover:scale-105 w-full sm:w-auto min-h-[48px]"
            >
              Ver ofertas
            </Button>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <MetricBadge label="Entregas semanais" />
            <MetricBadge label="Diagnóstico gratuito" />
            <MetricBadge label="Resposta em 2h" />
          </div>

          {/* Animated Background Shapes */}
          <div className="relative">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
              <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-primary/10 rounded-full blur-2xl animate-pulse-glow"></div>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="glass p-6 rounded-2xl hover-lift">
              <h3 className="font-semibold text-primary mb-2">Menos tarefas manuais</h3>
              <p className="text-sm text-muted-foreground">Automação inteligente para processos repetitivos</p>
            </div>
            <div className="glass p-6 rounded-2xl hover-lift">
              <h3 className="font-semibold text-primary mb-2">Ciclos mais rápidos</h3>
              <p className="text-sm text-muted-foreground">Redução drástica no tempo de execução</p>
            </div>
            <div className="glass p-6 rounded-2xl hover-lift">
              <h3 className="font-semibold text-primary mb-2">Insights com dados reais</h3>
              <p className="text-sm text-muted-foreground">Dashboards que revelam oportunidades</p>
            </div>
            <div className="glass p-6 rounded-2xl hover-lift">
              <h3 className="font-semibold text-primary mb-2">Escala com segurança</h3>
              <p className="text-sm text-muted-foreground">Arquitetura robusta e escalável</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;