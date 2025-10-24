import { Button } from '@/components/ui/button';
import FormspreeForm from '@/components/FormspreeForm';
import { MessageCircle, Calendar, Zap } from 'lucide-react';

const CTA = () => {
  const whatsappNumber = "557999707310";
  const message = "Olá, vim pelo site da sabIA Developer e quero agendar um diagnóstico gratuito de 30 minutos.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener');
  };

  return (
    <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Diagnóstico{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              gratuito (30 min)
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Entenda oportunidades, custo-benefício e roadmap sem compromisso.
          </p>
          
          {/* Benefits */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Calendar size={24} className="text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-foreground">30 minutos</h4>
                <p className="text-sm text-muted-foreground">Diagnóstico completo</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                <Zap size={24} className="text-secondary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-foreground">Análise imediata</h4>
                <p className="text-sm text-muted-foreground">Oportunidades mapeadas</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <MessageCircle size={24} className="text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-foreground">Sem compromisso</h4>
                <p className="text-sm text-muted-foreground">Apenas valor agregado</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - WhatsApp Primary */}
          <div className="space-y-8">
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Agendar via WhatsApp
              </h3>
              
              <Button
                size="lg"
                onClick={handleWhatsAppClick}
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground py-6 text-lg font-semibold transition-all hover:scale-105 min-h-[56px]"
              >
                <MessageCircle size={24} className="mr-3" />
                Agendar no WhatsApp
              </Button>
              
              <p className="text-center text-muted-foreground text-sm mt-4">
                Resposta em até 2h
              </p>
            </div>

            {/* Contact Info */}
            <div className="glass p-6 rounded-2xl">
              <h4 className="font-semibold text-foreground mb-4">Informações de contato</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>📧 sabiadeveloper@gmail.com</p>
                <p>📱 WhatsApp: +55 (79) 9970-7310</p>
                <p>🕒 Atendimento: seg–dom</p>
                <p>⚡ Resposta via WhatsApp: até 2h</p>
              </div>
            </div>
          </div>

          {/* Right Side - Form (alternative) */}
          <div className="glass p-8 rounded-2xl">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
              Ou preencha o formulário
            </h3>
            <FormspreeForm />
          </div>
        </div>

        {/* Bottom guarantee */}
        <div className="mt-16 text-center glass p-6 rounded-2xl">
          <p className="text-sm text-muted-foreground">
            🔒 <strong>Garantia de confidencialidade:</strong> Todas as informações compartilhadas 
            são tratadas com total sigilo e não serão utilizadas para outros fins.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;