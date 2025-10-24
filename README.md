# sabIA Developer - Landing Page

Landing page profissional focada em conversão via WhatsApp, apresentando automação, desenvolvimento e integrações.

## 🚀 Tecnologias

- **React 18** + TypeScript
- **Vite** com plugin react-swc
- **TailwindCSS** + shadcn/ui
- **Lucide React** (ícones)
- **Recharts** (gráficos mock)

## 📱 Mobile-First

Esta landing page foi desenvolvida com **Mobile-First** como prioridade máxima:

- ✅ Breakpoints otimizados (360-991px)
- ✅ Tap targets ≥ 44×44px
- ✅ Font-size mínimo 16px (evita zoom iOS)
- ✅ Input modes corretos (tel, email)
- ✅ Safe areas iOS
- ✅ Performance otimizada (Core Web Vitals)

## 🛠️ Instalação e Uso

```bash
npm install
npm run dev
npm run build
```

## 📝 Personalização

### 1. Atualizar número do WhatsApp

Busque por `557999707310` e substitua pelo seu número (formato: DDI + DDD + número, sem espaços) nos arquivos:
- `src/components/WhatsAppFloatingButton.tsx`
- `src/sections/Hero.tsx`
- `src/sections/Offers.tsx`
- `src/sections/CTA.tsx`
- `src/sections/Footer.tsx`

### 2. Atualizar e-mail

Busque por `sabiadeveloper@gmail.com` em:
- `src/sections/CTA.tsx`
- `src/sections/Footer.tsx`
- `index.html`

### 3. Configurar Formspree

Em `src/components/FormspreeForm.tsx`, linha 57:
```tsx
action="https://formspree.io/f/YOUR_FORMSPREE_ID"
```

1. Acesse [formspree.io](https://formspree.io)
2. Crie um novo formulário
3. Copie o ID e substitua `YOUR_FORMSPREE_ID`

### 4. Personalizar cores

Em `src/index.css`:
```css
:root {
  --primary: 189 100% 50%; /* Ciano */
  --secondary: 102 100% 71%; /* Verde */
}
```

⚠️ Use apenas valores HSL (sem `hsl()`).

### 5. Trocar logo

Substitua `src/assets/sabia-logo.png` pela sua logo.

## 📄 Estrutura

1. **Hero** - Headline, CTAs
2. **Ofertas** - 3 ofertas-âncora + serviços apoio
3. **Por que sabIA?** - Diferenciais + processo + tecnologias
4. **Métricas** - KPIs internos
5. **CTA/Contato** - WhatsApp + Formulário
6. **Footer** - Links, contato

## 📞 Contato

- **WhatsApp**: +55 (79) 9970-7310
- **E-mail**: sabiadeveloper@gmail.com

---

**sabIA Developer** © 2025
