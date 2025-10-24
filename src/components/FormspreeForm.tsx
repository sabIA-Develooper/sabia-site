import { useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const FormspreeForm = () => {
  useEffect(() => {
    const form = document.getElementById('lead-form') as HTMLFormElement;
    const WPP = '557999707310';

    if (!form) return;

    const handleSubmit = async (e: Event) => {
      e.preventDefault();
      
      const formData = new FormData(form);
      const formAction = form.action;
      
      try {
        await fetch(formAction, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });
        
        const nome = (formData.get('nome') as string)?.trim() || 'Cliente';
        const desafio = (formData.get('desafio') as string)?.trim() || '';
        const msg = `Olá, sou ${nome}. Enviei o formulário do site e quero falar sobre: ${desafio}`;
        
        window.location.href = `https://wa.me/${WPP}?text=${encodeURIComponent(msg)}`;
      } catch (error) {
        const nome = (formData.get('nome') as string)?.trim() || 'Cliente';
        const desafio = (formData.get('desafio') as string)?.trim() || '';
        const msg = `Olá, sou ${nome}. Tive um problema ao enviar o formulário, mas quero falar sobre: ${desafio}`;
        
        window.location.href = `https://wa.me/${WPP}?text=${encodeURIComponent(msg)}`;
      }
    };

    form.addEventListener('submit', handleSubmit);
    
    return () => {
      form.removeEventListener('submit', handleSubmit);
    };
  }, []);

  return (
    <form 
      action="https://formspree.io/f/YOUR_FORMSPREE_ID" 
      method="POST" 
      id="lead-form" 
      data-name="Lead sabIA"
      className="space-y-4 w-full"
    >
      <div>
        <Label htmlFor="nome" className="text-sm font-medium text-foreground">
          Seu nome *
        </Label>
        <Input
          id="nome"
          name="nome"
          type="text"
          className="mt-1 bg-background/50 border-border min-h-[48px] text-base"
          placeholder="Seu nome"
          required
        />
      </div>

      <div>
        <Label htmlFor="email" className="text-sm font-medium text-foreground">
          Seu e-mail *
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          className="mt-1 bg-background/50 border-border min-h-[48px] text-base"
          placeholder="seu@email.com"
          required
        />
      </div>

      <div>
        <Label htmlFor="whatsapp" className="text-sm font-medium text-foreground">
          WhatsApp (com DDD) *
        </Label>
        <Input
          id="whatsapp"
          name="whatsapp"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          className="mt-1 bg-background/50 border-border min-h-[48px] text-base"
          placeholder="(79) 99999-9999"
          required
        />
      </div>

      <div>
        <Label htmlFor="empresa" className="text-sm font-medium text-foreground">
          Empresa (opcional)
        </Label>
        <Input
          id="empresa"
          name="empresa"
          type="text"
          autoComplete="organization"
          className="mt-1 bg-background/50 border-border min-h-[48px] text-base"
          placeholder="Nome da sua empresa"
        />
      </div>

      <div>
        <Label htmlFor="desafio" className="text-sm font-medium text-foreground">
          O que você precisa resolver nas próximas 2-4 semanas? *
        </Label>
        <Textarea
          id="desafio"
          name="desafio"
          className="mt-1 bg-background/50 border-border resize-none text-base"
          placeholder="Descreva seu desafio..."
          rows={4}
          required
        />
      </div>

      {/* Hidden fields */}
      <input type="hidden" name="_subject" value="Novo lead — sabIA Developer" />
      <input 
        type="text" 
        name="_honeypot" 
        style={{ display: 'none' }} 
        tabIndex={-1} 
        autoComplete="off" 
      />

      <Button
        type="submit"
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground min-h-[48px] text-base font-semibold"
      >
        Enviar
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Resposta em até 2h úteis.
      </p>
    </form>
  );
};

export default FormspreeForm;
