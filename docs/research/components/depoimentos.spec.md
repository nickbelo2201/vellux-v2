# Depoimentos Section Specification

## Overview
- **Target file:** `src/components/DepoimentosSection.tsx`
- **Screenshot:** `docs/design-references/section-depoimentos.png`
- **Interaction model:** Auto-scroll marquee (infinite horizontal scroll)

## DOM Structure
```
<section class="flex gap-[1px]">
  <div class="content-side rounded-r-lg" />
  <div class="content-center flex-auto bg-white overflow-hidden rounded-lg">
    <!-- Header row -->
    <div class="py-16 px-6 tablet:px-8 desktopDefault:px-16">
      <span class="label-badge">Depoimentos</span>
      <h2>Histórias reais de quem usa a Abacate no dia a dia.</h2>
      <p>Veja relatos de clientes que simplificaram pagamentos...</p>
    </div>
    <!-- Marquee rows -->
    <div class="overflow-hidden">
      <!-- Row 1: scrolls left -->
      <div class="flex animate-marquee-left gap-4">
        [5 cards] [5 cards repeated] <!-- double for infinite effect -->
      </div>
      <!-- Row 2: scrolls right (or slower) -->
      <div class="flex animate-marquee-right gap-4">
        [5 cards] [5 cards repeated]
      </div>
      <!-- Row 3: scrolls left slow -->
      <div class="flex animate-marquee-left-slow gap-4">
        [5 cards] [5 cards repeated]
      </div>
    </div>
  </div>
  <div class="content-side rounded-l-lg" />
</section>
```

## Testimonials Data (verbatim quotes)

```typescript
const testimonials = [
  {
    quote: "Profissional se cadastra, recebe clientes direto no WhatsApp e usamos a @AbacatePay como gateway para assinaturas mensais...",
    author: "Joao → encontramais",
    handle: "@encontramais",
    avatarSrc: "/images/testimonial-joao.jpg",
  },
  {
    quote: "Se você tem um produto e precisa integrar pagamentos por PIX. Melhor gateway é o Abacate Pay, melhor DX e Taxas.",
    author: "Bruno Rodrigues",
    handle: "@brunordrgs",
    avatarSrc: "/images/testimonial-bruno.jpg",
  },
  {
    quote: "Incrível como é fácil implementar a API, qualquer idiota (eu) consegue usar. Ficou nível stripe de facilidade.",
    author: "Brahma",
    handle: "@brahma",
    avatarSrc: "/images/testimonial-brahma.jpg",
  },
  {
    quote: "Nunca integrei tão fácil uma API como com o @abacatepay. As empresas deveriam aprender com eles...",
    author: "Joao → encontramais",
    handle: "@encontramais",
    avatarSrc: "/images/testimonial-joao.jpg",
  },
  {
    quote: "Mas, queria falar mesmo de como foi fácil integrar o pagamento com a @abacatepay...",
    author: "Bruno Rodrigues",
    handle: "@brunordrgs",
    avatarSrc: "/images/testimonial-bruno.jpg",
  },
  {
    quote: "Batemos a meta de 10k no abacato! Agora é bater os 100k pra pegar essa plaquinha.",
    author: "Brahma",
    handle: "@brahma",
    avatarSrc: "/images/testimonial-brahma.jpg",
  },
  {
    quote: "Realmente a api dos caras é bala pra integrar. (Amanhã vai estar em prod)",
    author: "Joao → encontramais",
    handle: "@encontramais",
    avatarSrc: "/images/testimonial-joao.jpg",
  },
  {
    quote: "A taxa é muito pequena em relação a outras gateways, R$ 0,80 por transação. É um gateway que tá crescendo exponencialmente.",
    author: "Bruno Rodrigues",
    handle: "@brunordrgs",
    avatarSrc: "/images/testimonial-bruno.jpg",
  },
  {
    quote: "A integração de vocês é a melhor que eu já fiz, sem sacanagem e sem puxar saco. Não tem a mesma facilidade em outras empresas, e o contato com o suporte é incrível.",
    author: "Brahma",
    handle: "@brahma",
    avatarSrc: "/images/testimonial-brahma.jpg",
  },
  {
    quote: "Já??? Que isso, é o AbacatePay ou a liga da justiça? Atendimento Flash! Vocês são foda demais.",
    author: "Joao → encontramais",
    handle: "@encontramais",
    avatarSrc: "/images/testimonial-joao.jpg",
  },
  {
    quote: "Só passando pra avisar que deu tudo certo.. vocês são diferenciados. Atendimento impecável.",
    author: "Bruno Rodrigues",
    handle: "@brunordrgs",
    avatarSrc: "/images/testimonial-bruno.jpg",
  },
  {
    quote: "Ouvi falar de vocês no LinkedIn, pesquisei um pouco mais e estou gostando bastante da plataforma. Fácil utilização da API e o suporte é perfeito e rápido. Parabéns!",
    author: "Brahma",
    handle: "@brahma",
    avatarSrc: "/images/testimonial-brahma.jpg",
  },
  {
    quote: "Muito obrigado! Por isso estou usando AbacatePay. Vocês são fera!",
    author: "Joao → encontramais",
    handle: "@encontramais",
    avatarSrc: "/images/testimonial-joao.jpg",
  },
  {
    quote: "Cara eu sinceramente espero que essa plataforma exploda e fique gigante. Já estou rodando minha AbacatePay com o SaaS que fiz e já tá faturando, bora pra cima!",
    author: "Bruno Rodrigues",
    handle: "@brunordrgs",
    avatarSrc: "/images/testimonial-bruno.jpg",
  },
];
```

## Testimonial Card Styles

### Card container
- background: white or light (bg-white or bg-gray-50)
- border: 1px solid #E2E7F1
- border-radius: 12px
- padding: 24px (p-6)
- min-width: ~300px (w-fit or w-[300px])
- box-shadow: subtle

### Author area
- display: flex, gap: 12px, align-items: center
- Avatar: w-12 h-12, rounded-full, overflow-hidden
- Name: font-bold, 14-16px
- Handle: text-[#4C5267], 14px
- Twitter icon: top-right corner, color: #4C5267

### Quote text
- font: Inter Tight, 14-15px
- color: #204749 or dark
- margin-top: 12px
- line-height: 160%

## Marquee Animation
- Uses CSS animation from globals.css:
  - Row 1: `animate-marquee-left` (30s, left scroll)
  - Row 2: `animate-marquee-right` (30s, right scroll)  
  - Row 3: `animate-marquee-left-slow` (40s, left scroll)
- Double the cards array to create seamless infinite loop
- Container: overflow-hidden, no wrapping (flex, nowrap)
- Gap between cards: 16px (gap-4)

## Text Content (verbatim)
- Label: "Depoimentos"
- H2: "Histórias reais de quem usa a Abacate no dia a dia."
- Subtitle: "Veja relatos de clientes que simplificaram pagamentos e gerenciaram suas transações com facilidade usando a Abacate."

## Assets
- `/images/testimonial-joao.jpg`
- `/images/testimonial-bruno.jpg`
- `/images/testimonial-brahma.jpg`
- `XTwitterIcon` from icons.tsx for tweet indicator

## Responsive Behavior
- **All sizes:** Marquee always visible, just cards scroll horizontally

## Implementation Notes
- Split testimonials array into 3 groups (5 each) for 3 rows
- Duplicate each group at the end for seamless infinite loop
- Use `"use client"` directive since marquee uses CSS animation
- Pause on hover: `hover:[animation-play-state:paused]` on each row
