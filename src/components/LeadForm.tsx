import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

const LeadForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Mock submission - replace with real API call
    try {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em até 2 horas úteis.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente ou entre em contato via WhatsApp.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.company && formData.message;

  return (
    <Card className="glass backdrop-blur-xl max-w-md w-full mx-auto">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-center text-foreground">
          Diagnóstico Gratuito
        </CardTitle>
        <p className="text-sm text-muted-foreground text-center">
          30 minutos para entender sua operação
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-sm font-medium text-foreground">
              Nome completo *
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 bg-background/50 border-border"
              placeholder="Seu nome"
              required
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-sm font-medium text-foreground">
              E-mail corporativo *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 bg-background/50 border-border"
              placeholder="seu@empresa.com"
              required
            />
          </div>

          <div>
            <Label htmlFor="company" className="text-sm font-medium text-foreground">
              Empresa *
            </Label>
            <Input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              className="mt-1 bg-background/50 border-border"
              placeholder="Nome da sua empresa"
              required
            />
          </div>

          <div>
            <Label htmlFor="message" className="text-sm font-medium text-foreground">
              Desafio atual *
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 bg-background/50 border-border resize-none"
              placeholder="Conte sobre o principal desafio que você gostaria de automatizar..."
              rows={4}
              required
            />
          </div>

          <Button
            type="submit"
            disabled={!isFormValid || isLoading}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            {isLoading ? (
              "Enviando..."
            ) : (
              <>
                <Send size={16} className="mr-2" />
                Agendar diagnóstico
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Resposta em até 2 horas úteis
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default LeadForm;