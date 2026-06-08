# Integrações Section Specification

## Overview
- **Target file:** `src/components/IntegracoesSection.tsx`
- **Screenshot:** (scroll to 1673px)
- **Interaction model:** Static

## DOM Structure
```
<section id="integracoes" class="flex gap-[1px]">
  <div class="content-side rounded-r-lg" />
  <div class="content-center flex-auto bg-white overflow-hidden rounded-lg">
    <div class="grid desktopDefault:grid-cols-2 ...">
      <!-- Left: text content -->
      <div>
        <span class="label-badge">Integrações</span>
        <h2>Integre como quiser! Code, vibe-code, no-code!</h2>
        <p>Integre com o nosso MCP via API ou use um dos 15+ SDKs prontos. Ideal até para quem programa com IA.</p>
        <!-- SDK logos row -->
        <div class="flex items-center gap-5">
          [PixIcon/Python logo] [Ruby logo] [Lovable logo] [JS logo]
        </div>
        <!-- CTA link -->
        <a href="https://docs.abacatepay.com/...">Veja nossa documentação →</a>
      </div>
      <!-- Right: decorative (bg-stripes panel or illustration) -->
      <div class="bg-stripes content-center" />
    </div>
  </div>
  <div class="content-side rounded-l-lg" />
</section>
```

## Computed Styles

### Section
- height: 552px, flex gap-[1px]

### Label badge (Integrações)
- border: 1px solid #E2E7F1
- border-radius: 9999px (rounded-full)
- padding: 8px 12px (py-2 px-3)
- font: bold, 14px
- leading: 10px

### H2
- font: Fustat, semibold, ~36-40px
- color: #204749 or #244C4E
- leading: 120%
- tracking: tight

### Paragraph
- color: #4C5267
- font: Inter Tight, 18px, medium
- line-height: 180%

### SDK logos row
- display: flex, gap: 20px, align-items: center
- Each logo: 24x24px icon or small text badge
- SDK names: Python, Ruby, Lovable, Javascript

### CTA link
- color: #58C411 (green)
- font: semibold
- hover: scale 102%, underline
- Uses group hover pattern with underline animation

## Text Content (verbatim)
- Label: "Integrações"
- H2: "Integre como quiser! Code, vibe-code, no-code!"
- Paragraph: "Integre com o nosso MCP via API ou use um dos 15+ SDKs prontos. Ideal até para quem programa com IA."
- SDK list: Python, Ruby, Lovable, Javascript
- CTA: "Veja nossa documentação"

## Responsive Behavior
- **Mobile:** Single column, bg-stripes right panel hidden
- **Desktop (1280px+):** Two columns — text left, striped panel right

## Implementation Notes
- The right panel uses `bg-stripes` + `content-center` diagonal pattern
- Use PythonIcon from icons.tsx; others as text labels or simple colored badges
- Padding: tablet:p-8, desktopDefault:p-16 or similar
