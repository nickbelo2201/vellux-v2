# Suporte + FAQ + CTA Final Sections Specification

## Overview
- **Target files:** 
  - `src/components/SuporteSection.tsx`
  - `src/components/FAQSection.tsx`
  - `src/components/CTAFinalSection.tsx`
- **Screenshots:** `docs/design-references/section-suporte.png`, `docs/design-references/section-faq.png`, `docs/design-references/section-cta-footer.png`

---

# SuporteSection

## DOM Structure
```
<section id="suporte" class="flex gap-[1px]">
  <div class="rounded-r-lg content-side responsive" />
  <div class="content-center flex-auto w-full bg-white overflow-hidden rounded-lg">
    <div class="grid desktopDefault:grid-cols-2">
      <!-- Left: image -->
      <img alt="suporte" src="/images/imagesupport.svg" class="w-full object-cover" />
      <!-- Right: text -->
      <div class="flex justify-center items-center p-8">
        <div class="space-y-4 desktopDefault:max-w-[360px]">
          <span class="label-badge">Suporte</span>
          <h3 class="text-[32px] tablet:text-[36px] font-semibold leading-[120%] tracking-[-1.28px] pt-5">
            E tudo isso com um suporte que não te deixa na mão.
          </h3>
          <p class="text-[#4C5267] text-[18px] font-interTight font-medium leading-[180%] tracking-[0.9px]">
            Na Abacate, você conta com diferentes canais para receber atendimento rápido e eficiente.
          </p>
          <!-- CTA with hover underline animation -->
          <div class="group inline-block">
            <a class="block !mt-16 text-[#58c411] leading-[11px] font-semibold tracking-[-0.32px] hover:scale-[102%] transition-transform duration-500"
               target="_blank" href="https://discord.com/invite/CP57mm7EFk">
              Entre em contato →
            </a>
            <div class="w-full mt-1 h-[2px] bg-[#58c411] scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-500" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="rounded-l-lg content-side responsive" />
</section>
```

## Suporte Styles
- H3: 32px mobile, 36px tablet, semibold, tracking -1.28px, leading 120%
- Paragraph: #4C5267, 18px, Inter Tight, medium, line-height 180%, letter-spacing 0.9px
- CTA link: color #58c411, font-semibold, with expanding underline on group-hover
- Underline div: 2px height, bg #58c411, scale-x transitions from 0 to 1 on hover

## Suporte Text (verbatim)
- Label: "Suporte"
- H3: "E tudo isso com um suporte que não te deixa na mão."
- Paragraph: "Na Abacate, você conta com diferentes canais para receber atendimento rápido e eficiente."
- CTA: "Entre em contato →" → https://discord.com/invite/CP57mm7EFk

## Suporte Assets
- `/images/imagesupport.svg`

---

# FAQSection

## DOM Structure
```
<section class="flex gap-[1px]">
  <div class="content-side rounded-r-lg" />
  <div class="content-center flex-auto bg-white overflow-hidden rounded-lg">
    <div class="py-16 px-6 tablet:px-8 desktopDefault:px-16 desktopDefault:max-w-[900px] mx-auto">
      <span class="label-badge">FAQ</span>
      <h2>Tem dúvidas? Relaxa, nós temos as respostas.</h2>
      <p>Selecionamos algumas dúvidas que recebemos com frequência sobre nossos serviços, elas podem ser úteis para você!</p>
      <!-- Accordion items -->
      [6 accordion items]
    </div>
  </div>
  <div class="content-side rounded-l-lg" />
</section>
```

## FAQ Items (verbatim)

```typescript
const faqs = [
  {
    question: "O que é a AbacatePay e para quem ela serve?",
    answer: "A AbacatePay é uma solução de pagamento que oferece um gateway especializado em transações via PIX. Com uma taxa fixa e acessível de R$ 0,80 por transação, a plataforma foi desenvolvida para simplificar a gestão de pagamentos e reduzir custos operacionais para negócios de diferentes portes."
  },
  {
    question: "Quais formas de pagamento são aceitas (PIX, cartão de crédito, boleto)?",
    answer: "Atualmente, a AbacatePay aceita pagamentos via PIX, cartão de crédito e boleto bancário."
  },
  {
    question: "Posso usar com pessoa física ou é necessário CNPJ?",
    answer: "Por enquanto, o uso da AbacatePay requer um CNPJ."
  },
  {
    question: "A AbacatePay pode ser integrada apps feitos em lovable?",
    answer: "Sim. A AbacatePay oferece suporte para integração com aplicativos desenvolvidos no Lovable, seja por meio dos nossos SDKs oficiais ou utilizando a Abacate Chat, nossa inteligência artificial que auxilia na configuração e automação da integração."
  },
  {
    question: "É possível fazer split de pagamento entre diferentes recebedores?",
    answer: "Ainda não. No entanto, a funcionalidade de split de pagamento está em desenvolvimento e será disponibilizada em breve para permitir a divisão automática de valores entre múltiplos recebedores."
  },
  {
    question: "Quanto tempo demora para a minha conta ser verificada?",
    answer: "Nosso compromisso é concluir a verificação da sua conta em até 1 hora após o envio dos documentos. No entanto, o prazo oficial pode se estender para até 3 dias úteis, dependendo do volume de solicitações ou da análise de conformidade."
  },
];
```

## FAQ Styles
- Each item: border-b 1px #E2E7F1, cursor-pointer
- Question: Fustat, 16-18px, font-semibold, py-5
- Answer: Inter Tight, 16px, color #4C5267, pb-5
- ChevronDown icon rotates on open: `transition-transform duration-200`
- Use shadcn Accordion component (from `@/components/ui/accordion`)

## FAQ Text (verbatim)
- H2: "Tem dúvidas? Relaxa, nós temos as respostas."
- Subtitle: "Selecionamos algumas dúvidas que recebemos com frequência sobre nossos serviços, elas podem ser úteis para você!"

---

# CTAFinalSection

## DOM Structure
```
<section class="flex gap-[1px]">
  <div class="content-side rounded-tr-lg" />
  <div class="content-center flex-auto bg-white overflow-hidden rounded-t-lg">
    <div class="py-24 px-6 tablet:px-8 desktopDefault:px-16 text-center">
      <h2 class="font-fustat text-[40px] tablet:text-[56px] font-semibold text-[#204749] leading-[105%] tracking-tighter">
        Você chegou no fim da página.
      </h2>
      <p class="text-[#4C5267] text-lg mt-6 max-w-[600px] mx-auto">
        Se chegou até aqui, é porque tá interessado. Então vai lá, faz logo o cadastro.
      </p>
      <div class="mt-12">
        <div class="flex items-center gap-3 text-[#58C411] font-semibold text-lg justify-center">
          <CircleArrowRightIcon class="size-6" />
          <span>Vai, clica nesse botão</span>
        </div>
        <a href="https://app.abacatepay.com/" class="primary-cta-large mt-4">
          Começar agora
        </a>
      </div>
    </div>
  </div>
  <div class="content-side rounded-tl-lg" />
</section>
```

## CTA Final Styles
- H2: Fustat, 40px mobile, 56px tablet, semibold, color #204749
- Paragraph: #4C5267, 18px, max-width 600px, centered
- Small text "Vai, clica nesse botão": #58C411, semibold, flex with icon
- Big CTA button: same as primary btn (#9EEA6C bg, #244C4E text, rounded-full)
- Content: centered (text-center)

## CTA Final Text (verbatim)
- H2: "Você chegou no fim da página."
- Paragraph: "Se chegou até aqui, é porque tá interessado. Então vai lá, faz logo o cadastro."
- Arrow text: "Vai, clica nesse botão"
- CTA: "Começar agora" → https://app.abacatepay.com/

## Responsive Behavior (all 3 sections)
- **Mobile:** Single column, reduced padding
- **Desktop (1280px+):** Two columns where applicable

## Implementation Notes
- Use `<Accordion>` from `@/components/ui/accordion` for FAQ
- Suporte hover underline: use group + group-hover Tailwind pattern
- All three sections are separate exported components
- Each uses the same `content-side` / `content-center` pattern
