# Suite Soluções Section Specification

## Overview
- **Target file:** `src/components/SuiteSection.tsx`
- **Screenshot:** (scroll to 3025px)
- **Interaction model:** Static

## DOM Structure
```
<div class="space-y-[1px]">
  <!-- Row 1: Heading + description -->
  <div class="flex gap-[1px]">
    <div class="content-side rounded-tr-lg" />
    <div class="content-center flex-auto bg-white overflow-hidden rounded-t-lg">
      <div class="py-16 px-6 tablet:px-8 desktopDefault:px-16">
        <span class="label-badge">Soluções</span>
        <h2>Uma suite de <span class="text-[#9EEA6C]">soluções</span> para o seu negócio.</h2>
        <p>Centralize as operações da sua empresa...</p>
      </div>
    </div>
    <div class="content-side rounded-tl-lg" />
  </div>
  <!-- Row 2: Feature cards grid -->
  <div class="flex gap-[1px]">
    <div class="content-side rounded-br-lg" />
    <div class="content-center flex-auto">
      <div class="grid desktopDefault:grid-cols-3 gap-[1px] bg-[rgb(239,241,231)]">
        <!-- Card 1: Proteção antifraude -->
        <div class="bg-white p-8">...</div>
        <!-- Card 2: Check-out integrado -->
        <div class="bg-white p-8">...</div>
        <!-- Card 3: Assinaturas -->
        <div class="bg-white p-8">...</div>
      </div>
    </div>
    <div class="content-side rounded-bl-lg" />
  </div>
</div>
```

## Feature Cards

### Card 1: Proteção antifraude
- Icon: ShieldIcon or similar
- Title: "Proteção antifraude."
- Description: "Detecte e previna fraudes automaticamente, garantindo segurança para você e seus clientes e principalmente seu negócio."

### Card 2: Check-out integrado
- Icon: ShoppingCartIcon or similar
- Title: "Check-out integrado."
- Description: "Ofereça um processo de pagamento rápido e intuitivo, totalmente integrado à sua plataforma ou site totalmente customizável."

### Card 3: Assinaturas
- Icon: RepeatIcon or similar
- Title: "Assinaturas."
- Description: "Gerencie planos recorrentes de forma simples, garantindo pagamentos previsíveis e fidelização de clientes."

## Computed Styles

### H2
- font: Fustat, ~40-48px, semibold
- "soluções" span: color #9EEA6C
- tracking: tight

### Description paragraph
- color: #4C5267
- font: Inter Tight, 18px

### Feature cards
- Background: white
- padding: 32px (p-8)
- grid: 3 cols at desktopDefault, 1 col mobile
- Gap between cards: 1px (showing page bg as separator)
- Card icon area: size-10 bg-[#E6F9DA] rounded-full with icon
- Card title: Fustat, 20px, semibold
- Card description: Inter Tight, 16px, color #4C5267

## Text Content (verbatim)
- Label: "Soluções"
- H2: "Uma suite de soluções para o seu negócio."
- Paragraph: "Centralize as operações da sua empresa com uma suíte completa que une pagamentos, dados e automações. Nossa tecnologia foi desenvolvida para garantir eficiência, segurança e escalabilidade à medida que o seu negócio evolui."
- Card 1: "Proteção antifraude." / "Detecte e previna fraudes automaticamente, garantindo segurança para você e seus clientes e principalmente seu negócio."
- Card 2: "Check-out integrado." / "Ofereça um processo de pagamento rápido e intuitivo, totalmente integrado à sua plataforma ou site totalmente customizável."
- Card 3: "Assinaturas." / "Gerencie planos recorrentes de forma simples, garantindo pagamentos previsíveis e fidelização de clientes."

## Responsive Behavior
- **Mobile:** Single column cards
- **Desktop (1280px+):** 3-column grid for cards

## Implementation Notes
- Use `space-y-[1px]` for the vertical gap between rows
- Cards grid uses `gap-[1px]` with bg of page-bg color to create separator effect
- Use Lucide icons: ShieldCheckIcon, ShoppingBagIcon, RefreshCwIcon (or similar)
