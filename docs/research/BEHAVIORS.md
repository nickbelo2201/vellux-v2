# Behavior Bible — abacatepay.com

## Scroll Behaviors
- `html { scroll-behavior: smooth; }` — native CSS smooth scroll
- No Lenis / Locomotive Scroll detected
- No scroll-snap detected

## Header
- **Interaction model: static** (not sticky, does not change on scroll)
- On desktop: full nav visible, "Acessar Plataforma" green CTA button
- On mobile (< lg): hamburger menu button appears, nav hidden

## Nav Dropdowns
- Nav items "Produtos", "Soluções", "Recursos" have `lucide-chevron-down` icon
- Likely have hover/click dropdowns (not yet extracted)
- "Preços" is a plain link

## Hero Section
- **Interaction model: static** 
- Has floating badge elements with `animate-pulse-slow` animation classes
- Badges float around the hero illustration (Python, Ruby, Lovable icons)

## Produtos Section
- **Interaction model: static tabs** (click-driven)
- 4 items: Pix, Cartão de Crédito, Boleto, Link e QR codes
- Shows product cards/info per tab — likely has tab switching behavior
- Also has pricing CTA link within section

## Integrações Section
- **Interaction model: static**
- Shows SDK logos (Python, Ruby, Lovable, Javascript)
- "Veja nossa documentação" CTA link

## Documentação Section
- **Interaction model: static**
- Has two images: documentation.svg, chat.svg
- AI integration cards (Claude, ChatGPT, Lovable)

## Suite Soluções Section
- **Interaction model: static**
- 3 feature cards: Proteção antifraude, Check-out integrado, Assinaturas
- Large SVG background element

## Taxas Section (dark teal #204749)
- **Interaction model: static**
- R$0,80 per Pix received
- "Veja todos os preços" CTA
- Large decorative SVG background (abacate fruit pattern, opacity 0.2)
- Decorative arrow SVG element

## Depoimentos Section
- **Interaction model: auto-scroll carousel** (marquee-style, likely infinite loop)
- 15 testimonials from real users
- User avatars from Twitter profile images
- Multiple rows scrolling at different speeds (likely)
- Clones rows for infinite effect

## Suporte Section
- **Interaction model: static**
- Has image: imagesupport.21600be7.svg (static media file)
- Support channels info

## FAQ Section
- **Interaction model: click accordion**
- 6 Q&A pairs
- Each question expands to show answer on click

## CTA Final Section
- **Interaction model: static**
- Simple heading + CTA button
- "Vai, clica nesse botão"

## Footer
- **Interaction model: static**
- 6 column groups: Conta, Suporte, Produtos, Para quem, Website, AI & Devs
- Copyright: "Copyright © 2026 AbacatePay LLC - Abacatepay Tecnologia - CNPJ: 58.271.413/0001-90"

## Hover States (to verify)
- Buttons: `bg-[#9EEA6C] hover:bg-[#244C4E] hover:text-[#9EEA6C]` — swaps bg and text color
- Nav links: likely has hover color change
- Cards: likely has hover shadow/scale

## Animations
- `animate-pulse-slow-1` through `animate-pulse-slow-5` — floating badges in hero
- Custom CSS animations defined in globals

## Responsive
- Breakpoints observed:
  - `tablet:` — tablet breakpoint (~768px)
  - `lg:` — lg breakpoint (~1024px) — nav shows/hides
  - `desktopDefault:` — desktop breakpoint (~1280px)
  - `desktopXL:` — XL breakpoint (~1440px+)
