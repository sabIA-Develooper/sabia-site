# sabIA developer - Landing Page

Uma landing page moderna e responsiva para a sabIA developer, especializada em automação, IA e desenvolvimento sob medida.

## 🚀 Tecnologias

- **React 18** + TypeScript
- **Vite** (com plugin react-swc)
- **TailwindCSS** + **shadcn/ui**
- **Lucide React** (ícones)
- **Recharts** (gráficos)
- **React Router DOM**
- **React Query**

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes shadcn/ui
│   ├── Navbar.tsx      # Navegação principal
│   ├── ServiceCard.tsx # Card de serviços
│   ├── CaseCard.tsx    # Card de casos de sucesso
│   └── ...
├── sections/           # Seções da landing page
│   ├── Hero.tsx        # Seção hero
│   ├── Services.tsx    # Seções de serviços
│   ├── Cases.tsx       # Casos de sucesso
│   └── ...
├── mocks/              # Dados mockados
│   ├── services.json   # Dados dos serviços
│   ├── cases.json      # Casos de sucesso
│   └── testimonials.json
├── assets/             # Imagens e recursos
└── pages/              # Páginas principais
```

## 🎨 Design System

### Cores Principais
- **Primary**: Ciano (#00E5FF) - `hsl(189, 100%, 50%)`
- **Secondary**: Verde (#7CFF6B) - `hsl(102, 100%, 71%)`
- **Background**: Dark gradient (#0B0F1A → #0F172A)

### Customização de Cores

Para alterar as cores do tema, edite o arquivo `src/index.css`:

```css
:root {
  --primary: 189 100% 50%; /* Ciano */
  --secondary: 102 100% 71%; /* Verde */
  --background: 220 34% 9%; /* Dark blue */
}
```

## 📱 WhatsApp Integration

Para configurar o número do WhatsApp:

1. Abra o arquivo `src/components/WhatsAppFloatingButton.tsx`
2. Altere a variável `whatsappNumber`:

```typescript
const whatsappNumber = "5511999999999"; // Substitua pelo seu número
```

3. Faça o mesmo nos arquivos:
   - `src/sections/Hero.tsx`
   - `src/sections/CTA.tsx`
   - `src/sections/Footer.tsx`

## 🚀 Como Executar

1. **Instale as dependências:**
```bash
npm install
```

2. **Inicie o servidor de desenvolvimento:**
```bash
npm run dev
```

3. **Acesse no navegador:**
```
http://localhost:8080
```

## 📝 Editando Conteúdo

### Serviços
Edite `src/mocks/services.json` para modificar os serviços oferecidos.

### Casos de Sucesso
Edite `src/mocks/cases.json` para atualizar os casos de sucesso.

### Depoimentos
Edite `src/mocks/testimonials.json` para alterar os depoimentos de clientes.

## 🔧 Formulário de Contato

O formulário está configurado com validação básica. Para integrar com um serviço real:

1. Abra `src/components/LeadForm.tsx`
2. Substitua a função `handleSubmit` mock por sua API real
3. Configure o endpoint de destino

## 📊 Analytics & SEO

### Meta Tags
As meta tags estão configuradas em `index.html` para SEO básico.

### Schema.org
JSON-LD estruturado está implementado para melhor indexação pelos motores de busca.

## 🎯 Seções da Landing Page

1. **Hero** - Apresentação principal com CTAs
2. **Serviços** - Cards com os serviços oferecidos  
3. **Casos** - Casos de sucesso com métricas
4. **Processo** - Como a empresa trabalha
5. **Stack** - Tecnologias utilizadas
6. **Prova Social** - Depoimentos e estatísticas
7. **CTA** - Formulário de contato e CTAs finais
8. **Footer** - Informações de contato e links

## 🔒 Acessibilidade

- Contraste AA implementado
- Labels em todos os inputs
- Aria-labels nos ícones
- Navegação por teclado funcional
- Textos alternativos nas imagens

## 📱 Responsividade

- Mobile-first design
- Breakpoints: xs, sm, md, lg, xl, 2xl
- Componentes adaptáveis
- Menu mobile funcional

## 🚀 Deploy

Para fazer deploy:

1. **Build do projeto:**
```bash
npm run build
```

2. **Preview local:**
```bash
npm run preview
```

3. **Deploy:** Use o serviço de sua preferência (Vercel, Netlify, etc.)

## 📄 Licença

Este projeto foi desenvolvido pela sabIA developer. Todos os direitos reservados.

---

**sabIA developer** - Automação e IA que geram resultado.