# Documentação Section Specification

## Overview
- **Target file:** `src/components/DocumentacaoSection.tsx`
- **Screenshot:** (scroll to 2226px)
- **Interaction model:** Static

## DOM Structure
```
<section class="flex gap-[1px]">
  <div class="content-side rounded-r-lg" />
  <div class="content-center flex-auto bg-white overflow-hidden rounded-lg">
    <div class="grid desktopDefault:grid-cols-2 ...">
      <!-- Left: text + AI integrations -->
      <div>
        <span class="label-badge">Documentação</span>
        <h2>Documentação</h2>
        <p>Feita de desenvolvedores, para desenvolvedores...</p>
        <a href="https://docs.abacatepay.com/...">Acessar documentação →</a>
        
        <!-- AI integration section -->
        <div>
          <p class="font-bold">Integrar fácil</p>
          <p>A AbacatePay foi feita também para IAs e LLMs lerem...</p>
          <a href="/llms.txt">abacatepay.com/llms.txt</a>
          <!-- AI tool buttons -->
          <div class="flex gap-3">
            <a>Claude - Usar Claude</a>
            <a>Usar ChatGPT</a>
            <a>Lovable - Usar Lovable</a>
          </div>
        </div>
      </div>
      <!-- Right: images -->
      <div>
        <img src="/images/documentation.svg" alt="documentation" />
        <img src="/images/chat.svg" alt="Integração com IA" />
      </div>
    </div>
  </div>
  <div class="content-side rounded-l-lg" />
</section>
```

## Computed Styles

### Section
- height: 733px, flex gap-[1px]

### Images
- documentation.svg: white bg, rounded-lg, max-h-[500px]
- chat.svg: white bg, rounded-lg, max-h-[500px]
- Both: `bg-white rounded-lg overflow-hidden max-h-[500px]`

### AI tool buttons
- Small pill buttons with brand colors
- Each has icon + text
- border: 1px solid #E2E7F1, rounded-full

## Text Content (verbatim)
- Label: "Documentação"
- H2: "Documentação"
- Paragraph: "Feita de desenvolvedores, para desenvolvedores, nossa plataforma foi projetada para ser fácil e intuitiva."
- CTA link: "Acessar documentação →"
- Sub-heading: "Integrar fácil"
- Sub-paragraph: "A AbacatePay foi feita também para IAs e LLMs lerem — e isso deixa a integração muito mais simples. Cole o link de contexto na sua IA ou clique na sua favorita aqui embaixo:"
- URL: "abacatepay.com/llms.txt"
- AI buttons: "Usar Claude", "Usar ChatGPT", "Usar Lovable"

## Assets
- `/images/documentation.svg`
- `/images/chat.svg`

## Responsive Behavior
- **Mobile:** Single column
- **Desktop (1280px+):** Two columns

## Implementation Notes
- Use `<Image>` from next/image for the SVG images
- AI tool buttons are small pill-shaped links
