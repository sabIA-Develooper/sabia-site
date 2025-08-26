import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  image: string;
  index: number;
}

const TestimonialCard = ({ name, position, company, content, rating, index }: TestimonialCardProps) => {
  return (
    <Card 
      className="glass hover:bg-card/50 transition-all duration-300 hover-lift"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardContent className="p-6">
        {/* Rating Stars */}
        <div className="flex space-x-1 mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} size={16} className="fill-secondary text-secondary" />
          ))}
        </div>

        {/* Content */}
        <p className="text-foreground mb-6 leading-relaxed">"{content}"</p>

        {/* Author */}
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
            <span className="text-sm font-semibold text-primary">
              {name.split(' ').map(n => n[0]).join('').slice(0, 2)}
            </span>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">{name}</h4>
            <p className="text-xs text-muted-foreground">{position} • {company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;