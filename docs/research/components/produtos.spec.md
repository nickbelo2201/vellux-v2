# Produtos Section Specification

## Overview
- **Target file:** `src/components/ProdutosSection.tsx`
- **Screenshot:** `docs/design-references/section-produtos.png`
- **Interaction model:** Click-driven tabs (4 tabs: Pix, Cartão, Boleto, Link&QR)

## DOM Structure
```
<section id="produtos" class="flex gap-[1px]">
  <div class="content-side rounded-r-lg" />
  <div class="content-center flex-auto bg-white overflow-hidden rounded-lg">
    <!-- Main content: two column grid -->
    <div class="grid desktopDefault:grid-cols-2">
      <!-- Left: tab selector -->
      <div>
        <!-- 4 product tabs as clickable items -->
        [tab1: Pagamentos via Pix]
        [tab2: Cartão de Crédito]
        [tab3: Boleto]
        [tab4: Link e QR codes]
      </div>
      <!-- Right: active tab content -->
      <div>
        <!-- Shows description for active tab -->
      </div>
    </div>
    <!-- Pricing CTA banner at bottom -->
    <a href="/pricing" class="pricing-cta">
      Pix, Cartão, Boleto e Assinaturas. Quanto custa? Menos do que você imagina. Sem taxa mensal, sem surpresas. Ver taxas →
    </a>
  </div>
  <div class="content-side rounded-l-lg" />
</section>
```

## Tab Content

### Tab 1: Pix
- **Label:** "Pagamentos via Pix"
- **Icon:** PixIcon (custom SVG)
- **Description:** "Permite transferências instantâneas e seguras via Pix, integradas ao seu sistema em tempo real"

### Tab 2: Cartão de Crédito
- **Label:** "Cartão de Crédito"
- **Icon:** CreditCardIcon
- **Description:** "Aceitamos os pagamentos com cartão de crédito com alta taxa de aprovação."

### Tab 3: Boleto
- **Label:** "Boleto"
- **Icon:** DocumentIcon
- **Description:** "A AbacatePay gera boletos de forma prática e rastreável, facilitando a cobrança e a reconciliação financeira."

### Tab 4: Link e QR codes
- **Label:** "Link e QR codes"
- **Icon:** LinkIcon
- **Description:** "Também é possível criar links e QR Codes de pagamento personalizados, ideais para vendas rápidas e remotas."

## Computed Styles

### Section layout
- flex gap-[1px], full width

### Active tab
- Left border highlight: `border-l-4 border-[#9EEA6C]` or similar green accent
- Background: slightly lighter bg on active
- Font: Fustat, semibold

### Tab item
- padding: py-4 px-6 or similar
- font: Fustat, 16-18px
- display: flex, align-items: center, gap: ~12px
- Inactive: text #4C5267
- Active: text #244C4E, with green left border

### Description area (right)
- White bg
- Large description text: 18-20px
- padding: 32-48px
- Shows icon + text

## States & Behaviors

### Tab switching
- **Interaction model: click**
- Default state: Tab 1 (Pix) active
- On click: show corresponding description
- Transition: fade or instant switch

### Pricing CTA at bottom
- Background: light striped or white
- Text: "Pix, Cartão, Boleto e Assinaturas. Quanto custa? Menos do que você imagina. Sem taxa mensal, sem surpresas. Ver taxas"
- Link to /pricing
- Color: #244C4E or muted

## Assets
- Icons from icons.tsx: `PixIcon`, `CreditCardIcon`, `DocumentIcon`, `LinkIcon`

## Text Content (verbatim)
- Section heading (within tab): "Pagamentos via Pix"
- Tab descriptions as listed above
- Pricing CTA: "Pix, Cartão, Boleto e Assinaturas. Quanto custa? Menos do que você imagina. Sem taxa mensal, sem surpresas. Ver taxas"

## Responsive Behavior
- **Mobile:** Single column, tabs stack vertically above description
- **Desktop (1280px+):** Two columns — tabs on left, description on right

## Implementation Notes
- Use `useState` for active tab
- Import icon components from icons.tsx
- The pricing CTA text is all in one `<a>` tag with /pricing href
