import { Clock, TrendingUp, Star } from 'lucide-react';

const SocialProof = () => {
  const stats = [
    {
      icon: Clock,
      value: '< 2h',
      label: 'Tempo de resposta',
      color: 'text-primary'
    },
    {
      icon: TrendingUp,
      value: '+90%',
      label: 'Sprints no prazo',
      color: 'text-secondary'
    },
    {
      icon: Star,
      value: '9/10',
      label: 'NPS interno',
      color: 'text-primary'
    }
  ];

  return (
    <section id="metricas" className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Métricas{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              internas
            </span>
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass p-8 rounded-2xl text-center hover-lift"
            >
              <stat.icon size={40} className={`${stat.color} mx-auto mb-4`} />
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-base text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
