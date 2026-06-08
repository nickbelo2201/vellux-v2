# Hero Section Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Screenshot:** `docs/design-references/section-header-hero.png`
- **Interaction model:** Static with floating badges (animate-pulse-slow animations)

## DOM Structure
```
<section class="flex gap-[1px]">
  <div class="rounded-r-lg content-side" />
  <div class="content-center flex-auto w-full bg-white overflow-hidden rounded-lg">
    <div class="grid desktopDefault:grid-cols-2 hero-bg py-16 px-6 tablet:px-8 desktopDefault:px-16 desktopXL:px-[104px]">
      <!-- LEFT COLUMN -->
      <div class="desktopDefault:max-w-[440px] pb-10 pt-0 tablet:pt-10">
        <!-- Social proof badge -->
        <div class="flex items-center gap-2 border border-[#E2E7F1] rounded-full p-2 w-fit">
          <!-- 3 founder avatars stacked -->
          <span class="text-xs font-bold leading-[8px]">Mais que pagamentos, somos uma comunidade.</span>
        </div>
        <!-- H1 -->
        <h1 class="font-fustat text-[56px] tablet:text-[68px] font-semibold leading-[105%] tracking-tighter text-[#204749] mt-8">
          Receba fácil. Cresça <span class="skeleton clip-text bg-[#58C411]">rápido.</span>
        </h1>
        <!-- Subtitle -->
        <p class="text-[#4C5267] font-interTight text-lg font-medium mt-8">
          Infraestrutura de pagamentos sem complicações. <br>Orquestre, processe e otimize.
        </p>
        <!-- CTA buttons -->
        <div class="flex gap-4 items-center">
          <a href="https://app.abacatepay.com/login" class="primary-btn mt-16">Começar agora + ArrowIcon</a>
          <a href="/why" class="secondary-btn mt-16">Por que usar?</a>
        </div>
        <!-- Feature badges (hidden on mobile, show tablet+) -->
        <div class="hidden tablet:flex gap-3 mt-[76px]">
          <div class="flex-1 flex items-center gap-3">
            <!-- Badge 1: Rápido -->
            <div class="size-10 bg-[#E6F9DA] flex items-center justify-center rounded-full">
              <BoltIcon class="size-6 text-[#204749]" />
            </div>
            <div>
              <p class="font-bold text-sm">Rápido</p>
              <p class="text-xs text-[#4C5267]">Integre em minutos, não dias.</p>
            </div>
          </div>
          <div class="custom-border h-[50px]" />
          <div class="flex-1 flex items-center gap-3">
            <!-- Badge 2: Seguro -->
            <div class="size-10 bg-[#E6F9DA] flex items-center justify-center rounded-full">
              <LockClosedIcon class="size-6 text-[#204749]" />
            </div>
            <div>
              <p class="font-bold text-sm">Seguro</p>
              <p class="text-xs text-[#4C5267]">Criptografia de ponta</p>
            </div>
          </div>
        </div>
      </div>
      <!-- RIGHT COLUMN: desktop/mobile SVG mockups + floating badges -->
      <div class="relative hidden desktopDefault:block">
        <!-- Desktop mockup SVG -->
        <div class="desktop absolute bottom-0 left-[80px] border-[5px] tablet:border-[7px] border-[#EBEBEB] rounded-2xl overflow-hidden shadow-xl">
          <svg class="clamp-desktop-width clamp-desktop-height" viewBox="0 0 950 594" ...>
        <!-- Mobile mockup SVG -->
        <div class="mobile absolute bottom-0 left-[16px] bg-[#EEEEEE] border-[5px] rounded-3xl overflow-hidden shadow-xl">
          <svg class="clamp-mobile-width clamp-mobile-height" viewBox="0 0 218 486" ...>
        <!-- Floating tech badges (animate-pulse-slow) -->
        <span class="hidden desktopDefault:flex animate-pulse-slow-1 absolute -top-[12px] right-[196px]">
          <PythonIcon /> <!-- Python badge -->
        </span>
        <!-- + more floating badges -->
      </div>
    </div>
  </div>
  <div class="rounded-l-lg content-side" />
</section>
```

## Computed Styles

### Section container
- display: flex, gap: 1px
- Full width

### Hero grid container
- class: `hero-bg py-16 px-6 tablet:px-8 desktopDefault:px-16 desktopXL:px-[104px]`
- hero-bg: `radial-gradient(246.6% 88.54% at 37.12% 5.43%, rgba(255,255,255,0) 56.43%, rgb(194,250,17) 80.92%, rgb(51,189,25) 100%), #fff`
- grid: single column mobile, 2 cols at desktopDefault (1280px+)
- padding-top/bottom: 64px (py-16)

### Social proof badge
- border: 1px solid #E2E7F1
- border-radius: 9999px
- padding: 8px
- display: flex, gap: 8px, align-items: center
- Founder avatars: 20x20px circles, -space-x-2 overlap, black bg with white border

### H1
- font-family: Fustat
- font-size: 56px mobile, 68px tablet+
- font-weight: 600
- line-height: 105%
- letter-spacing: -0.04em (tracking-tighter)
- color: #204749
- margin-top: 32px
- "rápido." span: skeleton + clip-text + bg-[#58C411] → shimmer text effect

### Subtitle paragraph
- color: #4C5267
- font-family: Inter Tight
- font-size: 18px (text-lg)
- font-weight: 500
- margin-top: 32px

### CTA Buttons
Primary "Começar agora":
- bg: #9EEA6C, color: #244C4E, hover: bg #244C4E / color #9EEA6C
- padding: 12px 16px, border-radius: 9999px
- font: Fustat, 16px, semibold
- margin-top: 64px
- Has CircleArrowRightIcon (size-5) on right

Secondary "Por que usar?":
- bg: white, color: #244C4E, hover: bg #244C4E / color #9EEA6C
- Same padding/radius as primary
- margin-top: 64px

### Feature badges (tablet+)
- Flex row, gap: 12px, margin-top: 76px
- Icon container: size-10 (40px) bg-[#E6F9DA], rounded-full, flex center
- Icon: size-6, color: #204749
- Title: font-bold, text-sm
- Subtitle: text-xs, color: #4C5267
- Separator: custom-border (dashed vertical line), h-[50px]

## States & Behaviors

### "rápido." text shimmer
- `.skeleton.clip-text.bg-[#58C411]`
- skeleton: DaisyUI shimmer animation (1.8s)
- clip-text: `-webkit-text-fill-color: transparent; background-clip: text`
- Creates a moving shimmer over the lime-green text

### Floating badges (animate-pulse-slow-N)
- 5-6 small badges positioned absolutely around the right-side mockup
- Each has a different animation duration (3.5s, 4.5s, 5s, 3.8s, 4.2s)
- Show only at desktopDefault+ (hidden below 1280px)
- Badges show tech logos: Python, an avatar, Lovable/Cursor, etc.

## Assets
- Founder images: `/images/founder1.png`, `/images/founder2.png`, `/images/founder3.png`
- Icons from icons.tsx: `BoltIcon`, `LockClosedIcon`, `CircleArrowRightIcon`, `PythonIcon`
- Desktop mockup: Large SVG (950x594) — use the full SVG from extraction (clamp-desktop-width/height)
- Mobile mockup: SVG (218x486) — use with clamp-mobile-width/height

## Text Content (verbatim)
- Social badge: "Mais que pagamentos, somos uma comunidade."
- H1: "Receba fácil. Cresça rápido."
- Subtitle: "Infraestrutura de pagamentos sem complicações. Orquestre, processe e otimize."
- CTA1: "Começar agora"
- CTA2: "Por que usar?"
- Badge1 title: "Rápido" / subtitle: "Integre em minutos, não dias."
- Badge2 title: "Seguro" / subtitle: "Criptografia de ponta"

## Responsive Behavior
- **Mobile:** Single column, no side panels, no right-side mockup, no floating badges, px-6
- **Tablet (811px+):** Side panels appear, more padding (px-8), feature badges show (pt-10)
- **Desktop (1280px+):** Two-column grid, right mockup column shows, floating badges show (px-16)
- **XL (1441px+):** More padding (px-[104px]), hero-bg gradient changes

## Implementation Notes
- Import `Image` from `next/image` for founder avatars
- Import icons from `@/components/icons`
- The hero mockup SVGs are large inline SVGs — include them directly in the component
- For the right-column SVG mockups, wrap in a relative-positioned container and use `clamp-desktop-width/height` and `clamp-mobile-width/height` classes
- The skeleton+clip-text effect on "rápido." requires both CSS classes together
