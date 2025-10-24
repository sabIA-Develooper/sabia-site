import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppFloatingButton = () => {
  const whatsappNumber = "557999707310";
  const message = "Olá, vim pelo site da sabIA Developer. Quero falar sobre: [Programação | Automações | Site/App | Integrações].";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-glow"
      size="sm"
    >
      <MessageCircle size={24} />
      <span className="sr-only">Falar no WhatsApp</span>
    </Button>
  );
};

export default WhatsAppFloatingButton;