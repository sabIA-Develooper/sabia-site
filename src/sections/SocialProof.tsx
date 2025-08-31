import { useEffect, useState } from 'react';
import TestimonialCard from '@/components/TestimonialCard';
import { Star, Award, Users, TrendingUp } from 'lucide-react';

const SocialProof = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Load testimonials from mock data
    import('@/mocks/testimonials.json').then(data => {
      setTestimonials(data.default);
    });
  }, []);

  const stats = [
    {
      icon: Users,
      value: "50+",
      label: "Projetos entregues"
    },
    {
      icon: Star,
      value: "4.9",
      label: "Avaliação média"
    },
    {
      icon: TrendingUp,
      value: "98%",
      label: "Taxa de sucesso"
    },
    {
      icon: Award,
      value: "100%",
      label: "Satisfação do cliente"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-grid">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Prova{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              social
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A confiança de quem já transformou seus processos conosco. 
            Resultados que falam por si só.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center glass p-6 rounded-2xl hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon size={24} className="text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials 
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial: any, index: number) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              position={testimonial.position}
              company={testimonial.company}
              content={testimonial.content}
              rating={testimonial.rating}
              image={testimonial.image}
              index={index}
            />
          ))}
        </div>
        */}

        {/* Awards & Recognition */}
        <div className="glass p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-6">
            Participações & Reconhecimentos
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-70">
            <div className="p-4">
              <Award size={32} className="text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-2">Google Cloud Partner</h4>
              <p className="text-sm text-muted-foreground">Certificação em soluções cloud</p>
            </div>
            <div className="p-4">
              <Users size={32} className="text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-2">Comunidade n8n Brasil</h4>
              <p className="text-sm text-muted-foreground">Membros ativos e contribuintes</p>
            </div>
            <div className="p-4">
              <TrendingUp size={32} className="text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-2">Startup Weekend</h4>
              <p className="text-sm text-muted-foreground">Mentores em eventos de inovação</p>
            </div>
          </div>
        </div>

        {/* Average Rating Display */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-secondary text-secondary" />
              ))}
            </div>
            <span className="text-lg font-semibold text-primary">4.9</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground">Baseado em 47 avaliações</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;