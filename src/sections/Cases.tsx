import { useEffect, useState } from 'react';
import CaseCard from '@/components/CaseCard';

const Cases = () => {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    // Load cases from mock data
    import('@/mocks/cases.json').then(data => {
      setCases(data.default);
    });
  }, []);

  return (
    <section id="casos" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Casos de{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              sucesso real
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Resultados concretos e mensuráveis. Veja como transformamos operações 
            e geramos impacto real nos negócios dos nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((caseItem: any, index: number) => (
            <div key={caseItem.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <CaseCard
                title={caseItem.title}
                challenge={caseItem.challenge}
                solution={caseItem.solution}
                impact={caseItem.impact}
                metric={caseItem.metric}
                index={index}
              />
            </div>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="mt-16 glass p-8 rounded-2xl text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">65%</div>
              <div className="text-sm text-muted-foreground">Redução média no tempo de processamento</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">40%</div>
              <div className="text-sm text-muted-foreground">Economia média em custos operacionais</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">85%</div>
              <div className="text-sm text-muted-foreground">Melhoria na assertividade de previsões</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cases;