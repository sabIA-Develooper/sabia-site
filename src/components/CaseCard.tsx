import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

interface CaseCardProps {
  title: string;
  challenge: string;
  solution: string;
  impact: string;
  metric: {
    value: number;
    unit: string;
    label: string;
    chartData: { name: string; value: number }[];
  };
  index: number;
}

const CaseCard = ({ title, challenge, solution, impact, metric, index }: CaseCardProps) => {
  return (
    <Card 
      className="glass hover:bg-card/50 transition-all duration-300 hover-lift"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground mb-2">🎯 DESAFIO</h4>
            <p className="text-sm text-foreground">{challenge}</p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground mb-2">⚡ SOLUÇÃO</h4>
            <p className="text-sm text-foreground">{solution}</p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground mb-2">📈 IMPACTO</h4>
            <p className="text-sm font-semibold text-primary">{impact}</p>
          </div>
        </div>

        {/* Mini Chart */}
        <div className="bg-muted/20 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-muted-foreground">{metric.label}</span>
            <span className="text-2xl font-bold text-primary">
              {metric.value}{metric.unit}
            </span>
          </div>
          <div className="h-24">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={metric.chartData}>
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false}
                  tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }}
                />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Bar 
                  dataKey="value" 
                  fill="hsl(var(--primary))" 
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CaseCard;