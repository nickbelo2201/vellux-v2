# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Screenshot:** `docs/design-references/section-footer.png`
- **Interaction model:** Static

## DOM Structure
```
<footer class="grid gap-[1px]">
  <!-- Row 1: Links grid -->
  <div class="flex gap-[1px]">
    <div class="content-side" />
    <div class="content-center flex-auto bg-white overflow-hidden rounded-t-lg">
      <div class="py-16 px-6 tablet:px-8 desktopDefault:px-16 grid grid-cols-2 tablet:grid-cols-3 desktopDefault:grid-cols-6 gap-8">
        <!-- 6 columns: Conta, Suporte, Produtos, Para quem, Website, AI & Devs -->
        [column1: Conta]
        [column2: Suporte]
        [column3: Produtos]
        [column4: Para quem]
        [column5: Website]
        [column6: AI & Devs]
      </div>
    </div>
    <div class="content-side" />
  </div>
  <!-- Row 2: Bottom bar -->
  <div class="flex gap-[1px]">
    <div class="content-side" />
    <div class="content-center flex-auto bg-white overflow-hidden rounded-b-lg">
      <div class="py-6 px-6 tablet:px-8 desktopDefault:px-16 flex flex-col tablet:flex-row justify-between items-center gap-4">
        <!-- Logo + copyright -->
        <div>
          <AbacatePayLogo />
          <p>Copyright © 2026 AbacatePay LLC - Abacatepay Tecnologia - CNPJ: 58.271.413/0001-90 ABACATEPAY TECNOLOGIA LTDA</p>
        </div>
        <!-- Social icons -->
        <div class="flex gap-4">
          <a href="https://twitter.com/abacatepay"><XTwitterIcon /></a>
          <a href="https://discord.com/invite/CP57mm7EFk"><DiscordIcon /></a>
          <a href="https://github.com/abacatepay"><GitHubIcon /></a>
        </div>
      </div>
    </div>
    <div class="content-side" />
  </div>
</footer>
```

## Footer Columns

### Conta
- Cadastre-se → https://app.abacatepay.com/
- Login → https://app.abacatepay.com/

### Suporte
- ajuda@abacatepay.com → mailto:ajuda@abacatepay.com
- Falar com suporte → https://discord.com/invite/CP57mm7EFk
- Entre no discord → https://discord.com/invite/CP57mm7EFk

### Produtos
- Pix → /pix
- Cartão → /card
- Boleto → /boleto
- Assinaturas → /assinaturas
- Link de Pagamento → /link-de-pagamento
- Checkout transparente → /checkout

### Para quem
- SaaS → /para/saas
- Micro-SaaS → /para/micro-saas
- E-commerce → /para/ecommerce
- Marketplaces → /para/marketplaces
- Criadores → /para/criadores-de-conteudo
- Apps → /para/apps
- Educação → /para/educacao

### Website
- Blog → https://abacatepay.com/blog
- Documentação → https://docs.abacatepay.com/pages/start/welcome
- Integrações → /integracoes
- Preços → /pricing
- Por que a Abacate? → /why
- Termos e condições → /termos
- Status dos serviços → https://statuspage.incident.io/abacate-pay

### AI & Devs
- AI Agents → /ai-agents
- Desenvolvedores → /desenvolvedores
- Open Source → /open-source
- Abacate Chat → https://chat.abacatepay.com/
- LLMs.txt → /llms.txt

## Computed Styles

### Column heading
- font: Fustat, semibold
- color: #204749 or dark
- margin-bottom: 16px
- font-size: 14-16px

### Footer links
- font: Inter Tight, 14px
- color: #4C5267
- hover: color #244C4E, underline
- line-height: 32-36px (generous spacing)

### Copyright text
- font: Inter Tight, 12-14px
- color: #4C5267
- margin-top: 8px

### Social icons
- size: 20px (w-5 h-5)
- color: #4C5267
- hover: color #244C4E

## Text Content (verbatim)
- Copyright: "Copyright © 2026 AbacatePay LLC - Abacatepay Tecnologia - CNPJ: 58.271.413/0001-90 ABACATEPAY TECNOLOGIA LTDA"

## Assets
- `AbacatePayLogo`, `XTwitterIcon`, `DiscordIcon`, `GitHubIcon` from icons.tsx

## Responsive Behavior
- **Mobile:** 2-column grid for links
- **Tablet (811px+):** 3-column grid
- **Desktop (1280px+):** 6-column grid

## Implementation Notes
- Use `Link` from next/link for internal links
- Use `<a>` for external links
- Footer uses `grid gap-[1px]` instead of flex for vertical stacking
- Include both the links section and bottom bar as separate rows
