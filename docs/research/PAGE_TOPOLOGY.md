# Page Topology — abacatepay.com

## Global Layout Pattern
- `<main>` contains all sections as direct children
- Each row uses `flex gap-[1px]` pattern
- `gap-[1px]` creates 1px separator lines using the page background `rgb(239, 241, 231)` as "border"
- Three-column layout: `content-side` (88px) | `content-center` (flex-auto) | `content-side` (88px)
- `content-side`: white panels with `bg-stripes` (repeating diagonal gradient pattern)
- `content-center`: main content, white bg, rounded-lg corners
- Page bg: `rgb(239, 241, 231)` — sage/olive green, acts as grid separator
- 64px "spacer" dividers between major sections

## Page Background
- `background-color: rgb(239, 241, 231)` on `<body>`

## Fonts
- Body: `Inter Tight` (via next/font)  
- Headings + Nav: `Fustat` (via next/font)

## Color Palette
| Token | Value | Usage |
|---|---|---|
| page-bg | `rgb(239, 241, 231)` | Body background / gaps |
| white | `#FFFFFF` | Panel backgrounds |
| text-primary | `rgb(36, 76, 78)` / `#244C4E` | Headings, CTA text |
| text-nav | `rgb(76, 82, 103)` / `#4C5267` | Nav text |
| text-body | `oklch(0.183088 0.00404 285.994)` | Body text |
| accent-green | `rgb(158, 234, 108)` / `#9EEA6C` | CTA buttons, highlights |
| dark-teal | `rgb(32, 71, 73)` / `#204749` | Pricing section bg |
| border | `rgb(226, 231, 241)` / `#E2E7F1` | Dividers, borders |
| light-green-bg | `#E6F9DA` | Icon bg |
| stripe-color | `rgba(226, 231, 241, 0.8)` | Diagonal stripe pattern |

## bg-stripes Pattern (CSS)
```css
background-image: repeating-linear-gradient(
  45deg, 
  rgba(226, 231, 241, 0.8) 0px, 
  rgba(226, 231, 241, 0.8) 1px, 
  rgba(0, 0, 0, 0) 1px, 
  rgba(0, 0, 0, 0) 14px
);
```

## Sections (top to bottom)

| Index | Tag | ID | Name | OffsetTop | Height | Interaction |
|---|---|---|---|---|---|---|
| 0 | HEADER | — | Header/Nav | 0 | 104 | Click (nav dropdowns, mobile menu) |
| 1 | SECTION | — | Hero | 105 | 732 | Static + floating badges |
| 2 | SECTION | produtos | Produtos | 838 | 769 | Static tabs (Pix, Cartão, Boleto, Link) |
| 3 | DIV | — | Spacer | 1608 | 64 | Static |
| 4 | SECTION | integracoes | Integrações | 1673 | 552 | Static |
| 5 | SECTION | — | Documentação | 2226 | 733 | Static (AI integration cards) |
| 6 | DIV | — | Spacer | 2960 | 64 | Static |
| 7 | DIV | — | Suite Soluções | 3025 | 846 | Static (feature cards) |
| 8 | DIV | — | Spacer | 3872 | 64 | Static |
| 9 | SECTION | taxas | Preços/Taxas | 3937 | 621 | Static (dark teal bg #204749) |
| 10 | SECTION | — | Depoimentos | 4558 | 1187 | Auto-scroll carousel |
| 11 | DIV | — | Spacer | 5747 | 64 | Static |
| 12 | SECTION | suporte | Suporte | 5812 | 687 | Static |
| 13 | DIV | — | Spacer | 6500 | 64 | Static |
| 14 | SECTION | — | FAQ | 6565 | 758 | Click (accordion) |
| 15 | DIV | — | Spacer | 7323 | 64 | Static |
| 16 | SECTION | — | CTA Final | 7388 | 532 | Static |
| 17 | DIV | — | Spacer | 7921 | 64 | Static |
| 18 | FOOTER | — | Footer | 7986 | 733 | Static |

## Smooth Scroll
- CSS `scroll-behavior: smooth` on `html` element
- No Lenis or Locomotive Scroll

## Header Behavior
- Static position (not sticky)
- Has left and right `content-side` panels with `bg-stripes`
- Center panel: white with `rounded-b-lg`
- Nav centered with `position: absolute; left: 50%; transform: translateX(-50%)`
- Mobile: hamburger menu button (hidden on lg+)

## Sticky / Fixed Elements
- None identified (header is static)
- Chat widget button (bottom right, `position: fixed`)
