# Taxas / Preços Section Specification

## Overview
- **Target file:** `src/components/TaxasSection.tsx`
- **Screenshot:** `docs/design-references/section-taxas.png`
- **Interaction model:** Static

## DOM Structure
```
<section id="taxas" class="bg-[#204749] text-white relative overflow-hidden px-6 desktopDefault:p-[120px] desktopXL:px-[194px] tablet:py-16 py-8">
  <div class="mx-auto max-w-[1312px] relative z-10 grid desktopDefault:grid-cols-2 gap-8">
    <!-- Left: pricing content -->
    <div class="py-8 flex flex-col gap-8 desktopDefault:justify-center">
      <div class="space-y-12">
        <h3 class="text-[32px] tablet:text-[48px] leading-[120%] tracking-[-1.28px] tablet:tracking-[-1.92px] font-semibold">
          Nossos clientes pagam apenas 
          <span class="text-[#9EEA6C]">R$0,80 por Pix recebido.</span>
        </h3>
      </div>
      <div class="w-fit relative mt-16">
        <a href="/pricing" class="CTA btn">Veja todos os preços + CircleArrowRightIcon</a>
        <!-- Decorative arrow SVG -->
        <svg class="hidden desktopDefault:block absolute -right-[110px] bottom-0" ...>
          <!-- curved arrow pointing to CTA -->
        </svg>
      </div>
    </div>
    <!-- Right: empty (decorative bg fills) -->
  </div>
  <!-- Background: large abacate pattern, opacity 0.2 -->
  <div class="absolute left-1/2 -translate-x-1/2 bottom-0 opacity-20">
    <svg width="2586" height="840" ...>  <!-- Huge decorative SVG -->
  </div>
</section>
```

## Computed Styles

### Section
- background: rgb(32, 71, 73) → `#204749`
- color: white
- position: relative
- overflow: hidden
- padding: 32px 24px mobile, 64px tablet, 120px desktopDefault, 120px/194px desktopXL
- height: 621px

### H3
- font: Fustat, 32px mobile, 48px tablet+
- font-weight: 600
- line-height: 120%
- letter-spacing: -1.28px mobile, -1.92px tablet
- color: white
- "R$0,80 por Pix recebido." span: color #9EEA6C

### CTA Button "Veja todos os preços"
- bg: #9EEA6C, color: #244C4E
- hover: bg #244C4E, color #9EEA6C
- padding: 12px 16px, border-radius: 9999px
- font: Fustat, 16px, semibold
- Has CircleArrowRightIcon (size-5) on right
- transition: all 300ms

### Decorative arrow SVG (desktop only)
- Position: absolute, -right-[110px] bottom-0
- 3 paths: main curved arrow + 2 arrow head lines
- Color: white, stroke-width: 5.31355
- hidden on mobile, shows desktopDefault+
- Classes: path-main, path-arrow-left, path-arrow-right (no animation — static)

### Abacate pattern background
- Position: absolute, centered horizontally, bottom: 0
- Opacity: 0.2
- Very large SVG (2586x840) with repeated dot/circle pattern in #486869 color
- Creates a subtle textured background

## States & Behaviors

### CTA button hover
- **State A:** bg #9EEA6C, color #244C4E
- **State B:** bg #244C4E, color #9EEA6C
- **Transition:** 300ms

## Text Content (verbatim)
- H3: "Nossos clientes pagam apenas R$0,80 por Pix recebido."
- CTA: "Veja todos os preços"

## Assets
- `CircleArrowRightIcon` from icons.tsx

## Responsive Behavior
- **Mobile:** Single column, padding py-8 px-6, h3 32px
- **Tablet (811px+):** py-16, h3 48px
- **Desktop (1280px+):** p-[120px], 2-col grid, decorative arrow shows
- **XL (1441px+):** px-[194px]

## Implementation Notes
- This section does NOT use the content-side/content-center pattern — it's full-width dark teal
- The large background SVG is essential — it creates the visible textured pattern
- Include the full decorative SVG paths (abacate dot pattern) for visual accuracy
- The decorative arrow SVG has 3 paths with classes path-main, path-arrow-left, path-arrow-right
- Use `relative z-10` on content to sit above the background SVG
