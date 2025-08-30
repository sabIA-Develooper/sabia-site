import { Database, Cloud, Smartphone, Globe, GitBranch, Container } from 'lucide-react';

const Stack = () => {
  const technologies = [
    {
      category: "Automação & Integrações",
      icon: GitBranch,
      items: ["n8n", "Zapier", "Make (Integromat)", "Custom APIs"]
    },
    {
      category: "Backend & Dados",
      icon: Database,
      items: ["Python", "Node.js", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
      category: "Frontend & Mobile",
      icon: Smartphone,
      items: ["React", "Next.js", "TypeScript", "React Native", "Flutter"]
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      items: ["GCP", "AWS", "Docker", "Kubernetes", "CI/CD"]
    },
    {
      category: "IA & Machine Learning",
      icon: Container,
      items: ["TensorFlow", "PyTorch", "OpenAI API", "LangChain", "RAG"]
    },
    {
      category: "Integrações Comuns",
      icon: Globe,
      items: ["WhatsApp API", "CRM/ERP", "E-commerce", "Sistemas Legados"]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Stack{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              moderna
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tecnologias de ponta para soluções robustas e escaláveis. 
            Escolhemos as melhores ferramentas para cada necessidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={tech.category} 
              className="glass p-6 rounded-2xl hover:bg-card/50 transition-all duration-300 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <tech.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{tech.category}</h3>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {tech.items.map((item, itemIndex) => (
                  <div 
                    key={item}
                    className="bg-muted/20 text-muted-foreground text-sm px-3 py-2 rounded-lg text-center hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Partnerships */}
        
      </div>
    </section>
  );
};

export default Stack;