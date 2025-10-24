import { MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import sabiaLogo from '@/assets/sabia-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const whatsappNumber = "557999707310";
  const message = "Olá, vim pelo site da sabIA Developer. Quero falar sobre: [Programação | Automações | Site/App | Integrações].";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener');
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={sabiaLogo} 
                alt="sabIA developer" 
                className="h-8 w-auto"
              />
            <div className="text-xl font-semibold">
              <span className="text-foreground">sabIA</span>
              <span className="text-muted-foreground font-light ml-1">Developer</span>
            </div>
            </div>
            
            <p className="text-muted-foreground mb-4 max-w-md">
              Automação e IA que geram resultado.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('#ofertas')}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Ofertas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#ofertas')}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Automação & IA
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#ofertas')}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Integrações & BI
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#contato')}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Contato
                </button>
              </li>
              <li>
                <button 
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Política de Privacidade
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MessageCircle size={16} className="text-primary flex-shrink-0" />
                <button 
                  onClick={handleWhatsAppClick}
                  className="hover:text-primary transition-colors"
                >
                  +55 (79) 9970-7310
                </button>
              </li>
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <a 
                  href="mailto:sabiadeveloper@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  sabiadeveloper@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary flex-shrink-0" />
                <span>Sergipe, SE - Brasil</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Clock size={16} className="text-primary flex-shrink-0" />
                <span>seg–dom</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} sabIA Developer. Todos os direitos reservados.
            </div>
            
            <Button
              onClick={handleWhatsAppClick}
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary/10 min-h-[44px]"
            >
              <MessageCircle size={18} className="mr-2" />
              Fale no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;