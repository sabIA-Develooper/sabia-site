import { MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import sabiaLogo from '@/assets/sabia-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const whatsappNumber = "5511999999999";
  const message = "Olá! Gostaria de saber mais sobre os serviços da sabIA developer.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
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
                <span className="text-muted-foreground font-light ml-1">developer</span>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-md">
              Automação e IA que geram resultado. Transformamos operações manuais 
              em processos inteligentes e escaláveis.
            </p>
            
            <div className="text-sm text-muted-foreground">
              <p className="font-medium text-primary mb-2">Automação e IA que geram resultado.</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('#servicos')}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#casos')}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Casos de Sucesso
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#processo')}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Como Trabalhamos
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
                  +55 (79) 8823-3880
                </button>
              </li>
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <a 
                  href="mailto:contato@sabiadeveloper.com"
                  className="hover:text-primary transition-colors"
                >
                  contato@sabiadeveloper.com
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary flex-shrink-0" />
                <span>Sergipe, SE - Brasil</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Clock size={16} className="text-primary flex-shrink-0" />
                <span>Seg-Seg, 24h</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} sabIA developer. Todos os direitos reservados.
            </div>
            
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <button className="hover:text-primary transition-colors">
                Política de Privacidade
              </button>
              <button className="hover:text-primary transition-colors">
                Termos de Uso
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;