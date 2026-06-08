# Header / Navigation Specification

## Overview
- **Target file:** `src/components/Header.tsx`
- **Screenshot:** `docs/design-references/section-header-hero.png`
- **Interaction model:** Static (no sticky, no scroll-triggered changes)

## DOM Structure
```
<header class="flex gap-[1px] text-[#4C5267] font-fustat">
  <div class="content-side rounded-br-lg bg-stripes relative" />  ← 88px wide, left decorative panel
  <div class="content-center w-full flex-auto bg-white rounded-b-lg relative">
    <div class="flex justify-between items-center p-8 relative" style="height:104px">
      <a href="/" class="shrink-0">  ← Logo SVG (76x28px)
      <nav class="hidden lg:flex absolute left-1/2 -translate-x-1/2">
        <ul class="flex items-center gap-1">
          <!-- 4 nav items -->
        </ul>
      </nav>
      <div class="hidden lg:flex items-center gap-3 shrink-0">
        <span class="w-px h-[35px] bg-[#E2E7F1]" />  ← vertical divider
        <a href="https://app.abacatepay.com/" class="CTA button">Acessar Plataforma</a>
      </div>
      <button class="lg:hidden rounded-full border border-[#E2E7F1] p-2.5 text-[#244C4E]">
        <!-- hamburger icon -->
      </button>
    </div>
  </div>
  <div class="content-side rounded-bl-lg bg-stripes" />  ← 88px wide, right decorative panel
</header>
```

## Computed Styles

### Header element
- display: flex
- gap: 1px
- font-family: Fustat, sans-serif
- color: rgb(76, 82, 103) → `#4C5267`
- height: 104px
- width: 100%

### content-side panels (left & right)
- width: 88px (min) on desktop, hidden on mobile
- height: 104px
- background: white with diagonal stripes pattern
- bg-stripes: `repeating-linear-gradient(45deg, rgba(226,231,241,0.8) 0px, rgba(226,231,241,0.8) 1px, transparent 1px, transparent 14px) #fff`
- Left panel: `border-radius: 0 0 8px 0` (rounded-br-lg)
- Right panel: `border-radius: 0 0 0 8px` (rounded-bl-lg)

### content-center (main nav area)
- background: white
- border-radius: 0 0 8px 8px (rounded-b-lg)
- padding: 32px
- display: flex, justify-between, align-items: center

### Logo
- SVG, w-[76px] h-[28px]
- Import from icons.tsx: `<AbacatePayLogo />`

### Nav (desktop only, hidden on mobile)
- `hidden lg:flex absolute left-1/2 -translate-x-1/2`
- 4 nav items: Produtos, Soluções, Recursos (have dropdown), Preços (plain link)
- Gap: 4px between items
- Nav item style: `flex items-center gap-1.5 rounded-full px-4 py-3 text-base font-fustat`
- Hover: likely background color change

### Nav items
| Label | href | Has dropdown? |
|---|---|---|
| Produtos | #produtos | Yes (chevron-down icon) |
| Soluções | # | Yes (chevron-down icon) |
| Recursos | # | Yes (chevron-down icon) |
| Preços | /pricing | No |

### CTA Button "Acessar Plataforma"
- background: rgb(158, 234, 108) → `#9EEA6C`
- color: rgb(36, 76, 78) → `#244C4E`
- font-weight: 600 (semibold)
- border-radius: 9999px (full)
- padding: 12px 16px
- font-size: 16px
- hover: `hover:bg-[#244C4E] hover:text-[#9EEA6C]`
- transition: all 300ms

### Mobile hamburger button
- `lg:hidden rounded-full border border-[#E2E7F1] p-2.5 text-[#244C4E]`
- Contains: `<MenuIcon className="h-5 w-5" />` from icons.tsx

## States & Behaviors

### Default state
- Static at top of page, no scroll sticky

### Hover on CTA button
- **State A:** bg #9EEA6C, text #244C4E
- **State B:** bg #244C4E, text #9EEA6C
- **Transition:** all 300ms

### Nav item hover
- Likely: slight background tint on rounded-full pill

## Assets
- Logo: `<AbacatePayLogo />` from `src/components/icons.tsx`
- ChevronDown: `<ChevronDownIcon />` from icons.tsx
- Menu: `<MenuIcon />` from icons.tsx

## Text Content
- "Acessar Plataforma" (CTA)
- "Produtos", "Soluções", "Recursos", "Preços" (nav)

## Responsive Behavior
- **Desktop (lg+):** Full nav + CTA button visible, side panels shown
- **Mobile (< lg):** Nav hidden, hamburger button shown; side panels hidden (content-side display:none)
- **Tablet (811px+):** Side panels appear

## Implementation Notes
- Import `cn` from `@/lib/utils`
- Use `Link` from `next/link` for nav items
- For the nav dropdown items (Produtos, Soluções, Recursos), render as `<button>` elements for now (no actual dropdown functionality needed — static clone)
- The `content-side` + `content-center` layout is the core visual pattern used throughout the page
