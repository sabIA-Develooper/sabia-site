import { useEffect, useState } from 'react';
import ServiceCard from '@/components/ServiceCard';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Load services from mock data
    import('@/mocks/services.json').then(data => {
      setServices(data.default);
    });
  }, []);

  return (
    <section id="servicos" className="py-20 px-4 sm:px-6 lg:px-8 bg-grid">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Serviços que{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              geram resultado
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Automação e IA que geram resultado. Transformamos operações manuais em 
            processos inteligentes e escaláveis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service: any, index: number) => (
            <div key={service.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
                index={index}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Não encontrou exatamente o que precisa?
          </p>
          <button 
            onClick={() => {
              const whatsappNumber = "5511999999999";
              const message = "Olá! Gostaria de conversar sobre um projeto específico.";
              const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
              window.open(url, '_blank');
            }}
            className="text-primary hover:text-primary/80 font-semibold underline underline-offset-4 transition-colors"
          >
            Vamos conversar sobre seu projeto específico →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;