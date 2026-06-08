"use client";

import Image from "next/image";
import Link from "next/link";
import { BoltIcon, LockClosedIcon, CircleArrowRightIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import { WHATSAPP_URL } from "@/lib/contato";

const founders = ["founder1", "founder2", "founder3"] as const;

interface FloatingBadge {
  id: number;
  label: string;
  sublabel: string;
  animClass: string;
  position: string;
}

const floatingBadges: FloatingBadge[] = [
  {
    id: 1,
    label: "5 dias",
    sublabel: "Site no ar",
    animClass: "animate-pulse-slow-1",
    position: "top-8 right-4",
  },
  {
    id: 2,
    label: "Google",
    sublabel: "Cliente te encontra",
    animClass: "animate-pulse-slow-3",
    position: "top-1/3 right-0",
  },
  {
    id: 3,
    label: "WhatsApp",
    sublabel: "Atende sozinho",
    animClass: "animate-pulse-slow-5",
    position: "bottom-24 right-8",
  },
];

export default function HeroSection() {
  return (
    <section className="flex gap-[1px]">
      {/* Left decorative side panel */}
      <div className="rounded-r-lg content-side" />

      {/* Main content */}
      <div className="content-center flex-auto w-full bg-white overflow-hidden rounded-lg">
        <div
          className={cn(
            "grid desktopDefault:grid-cols-2 hero-bg",
            "py-10 tablet:py-16 px-6 tablet:px-8 desktopDefault:px-16 desktopXL:px-[104px]"
          )}
        >
          {/* ── LEFT COLUMN ── */}
          <div className="desktopDefault:max-w-[440px] pb-2 tablet:pb-10 pt-0 tablet:pt-10">

            {/* Social proof badge */}
            <div className="flex items-center gap-2 border border-[#E2E8F0] rounded-full p-2 w-fit">
              {/* Overlapping founder avatars */}
              <div className="flex -space-x-2">
                {founders.map((f, i) => (
                  <div
                    key={f}
                    className="rounded-full size-5 border-[1.5px] bg-black border-white overflow-hidden"
                  >
                    <Image
                      src={`/images/${f}.png`}
                      alt={`Founder ${i + 1}`}
                      width={20}
                      height={20}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <span className="text-xs font-bold leading-[8px]">
                Mais que um site, um parceiro digital.
              </span>
            </div>

            {/* H1 */}
            <h1 className="font-fustat text-[56px] tablet:text-[68px] font-semibold leading-[105%] tracking-tighter text-[#1E3A8A] mt-8">
              Seu negócio no Google.{" "}
              <span className="skeleton clip-text" style={{ backgroundColor: "#7C3AED" }}>Em 5 dias.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[#64748B] font-interTight text-lg font-medium mt-8">
              Sites, páginas de captação e automação de WhatsApp sem complicação.
              A gente cuida do digital enquanto você cuida do negócio.
            </p>

            {/* CTA buttons */}
            <div className="flex gap-4 items-center flex-wrap">
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[16px] duration-300 transition-all font-fustat font-semibold flex gap-2 items-center py-3 px-4 w-fit rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white mt-16 leading-[12px]"
              >
                Quero meu site{" "}
                <CircleArrowRightIcon className="size-5 flex-shrink-0" />
              </Link>
              <Link
                href="#servicos"
                className="text-[16px] duration-300 transition-all font-fustat font-semibold flex gap-2 items-center py-3 px-4 w-fit rounded-full bg-[#FFF] border border-[#E2E8F0] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white mt-16 leading-[20px]"
              >
                Ver serviços
              </Link>
            </div>

            {/* Feature badges — hidden on mobile, visible tablet+ */}
            <div className="hidden tablet:flex gap-3 mt-[76px] desktopDefault:mb-0 mb-[76px]">
              {/* Fast badge */}
              <div className="flex-1 flex items-center gap-3">
                <div className="size-10 bg-[#EDE9FE] flex items-center justify-center rounded-full shrink-0">
                  <BoltIcon className="size-6 text-[#1E3A8A]" />
                </div>
                <div>
                  <p className="font-bold text-sm">Rápido</p>
                  <p className="text-xs text-[#64748B]">Pronto em 5 dias, não em meses.</p>
                </div>
              </div>

              {/* Dashed divider */}
              <span className="custom-border h-[50px] self-center" />

              {/* Secure badge */}
              <div className="flex-1 flex items-center gap-3">
                <div className="size-10 bg-[#EDE9FE] flex items-center justify-center rounded-full shrink-0">
                  <LockClosedIcon className="size-6 text-[#1E3A8A]" />
                </div>
                <div>
                  <p className="font-bold text-sm">Sem complicação</p>
                  <p className="text-xs text-[#64748B]">Você não precisa entender de tecnologia.</p>
                </div>
              </div>
            </div>

          </div>

          {/* ── RIGHT COLUMN: app mockups — desktop + mobile ── */}
          <div className="clamp-desktop-height flex-1 relative mt-6 desktopDefault:mt-0">

            {/* Desktop payment dashboard mockup */}
            <div className="desktop absolute bottom-0 left-auto tablet:left-[80px] right-[-20px] tablet:right-auto border-[7px] border-[#EBEBEB] rounded-2xl overflow-hidden shadow-xl">
              <svg
                className="clamp-desktop-width clamp-desktop-height"
                viewBox="0 0 950 594"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="heroAreaFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#16A34A" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#16A34A" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* Background */}
                <rect width="950" height="594" fill="#F1F5F9" />

                {/* Sidebar */}
                <rect width="200" height="594" fill="#FFFFFF" />
                <circle cx="32" cy="32" r="10" fill="#16A34A" />
                <rect x="50" y="26" width="64" height="12" rx="4" fill="#1E3A8A" fillOpacity="0.2" />
                <rect x="16" y="68" width="168" height="34" rx="8" fill="#16A34A" fillOpacity="0.25" />
                <rect x="30" y="80" width="14" height="10" rx="3" fill="#1E3A8A" fillOpacity="0.5" />
                <rect x="54" y="80" width="92" height="10" rx="4" fill="#1E3A8A" fillOpacity="0.45" />
                {[120, 164, 208, 252].map((y) => (
                  <g key={y}>
                    <rect x="30" y={y + 12} width="14" height="10" rx="3" fill="#C2C8D4" />
                    <rect x="54" y={y + 12} width="84" height="10" rx="4" fill="#E2E8F0" />
                  </g>
                ))}

                {/* Top bar */}
                <rect x="200" y="0" width="750" height="56" fill="#FFFFFF" />
                <rect x="224" y="16" width="220" height="24" rx="12" fill="#F1F5F9" />
                <rect x="236" y="24" width="120" height="8" rx="4" fill="#E2E8F0" />
                <circle cx="876" cy="28" r="14" fill="#F1F5F9" />
                <rect x="900" y="16" width="34" height="24" rx="12" fill="#16A34A" />

                {/* Header: Total em vendas + big number */}
                <rect x="224" y="80" width="120" height="12" rx="4" fill="#C2C8D4" />
                <text x="224" y="128" fill="#1E3A8A" fontSize="34" fontWeight="700" fontFamily="sans-serif">R$ 8.283,35</text>
                <rect x="470" y="98" width="58" height="22" rx="11" fill="#EDE9FE" />
                <path d="M481 112l5-6 5 6" stroke="#7C3AED" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="498" y="104" width="22" height="9" rx="4" fill="#7C3AED" fillOpacity="0.7" />

                {/* Tab pills */}
                <rect x="224" y="150" width="60" height="28" rx="14" fill="#16A34A" />
                <rect x="238" y="160" width="32" height="8" rx="4" fill="#1E3A8A" fillOpacity="0.6" />
                {[296, 372, 462].map((x, i) => (
                  <g key={x}>
                    <rect x={x} y="150" width={i === 2 ? 64 : 68} height="28" rx="14" fill="#F1F5F9" />
                    <rect x={x + 14} y="160" width={i === 2 ? 36 : 40} height="8" rx="4" fill="#C2C8D4" />
                  </g>
                ))}

                {/* Chart card */}
                <rect x="220" y="198" width="470" height="240" rx="12" fill="#FFFFFF" />
                {/* gridlines */}
                {[250, 300, 350, 400].map((y) => (
                  <rect key={y} x="240" y={y} width="430" height="1" fill="#F0F2F5" />
                ))}
                {/* area + line */}
                <path d="M244 392 L300 360 L356 372 L412 320 L468 336 L524 286 L580 300 L636 246 L666 232 L666 418 L244 418 Z" fill="url(#heroAreaFill)" />
                <path d="M244 392 L300 360 L356 372 L412 320 L468 336 L524 286 L580 300 L636 246 L666 232" stroke="#7C3AED" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="636" cy="246" r="5" fill="#FFFFFF" stroke="#7C3AED" strokeWidth="3" />

                {/* Right column: Pedidos feitos / pagos */}
                <rect x="706" y="198" width="218" height="116" rx="12" fill="#FFFFFF" />
                <rect x="722" y="216" width="96" height="10" rx="4" fill="#C2C8D4" />
                <text x="722" y="270" fill="#1E3A8A" fontSize="26" fontWeight="700" fontFamily="sans-serif">652</text>
                <rect x="846" y="216" width="62" height="22" rx="11" fill="#EDE9FE" />
                <rect x="858" y="223" width="38" height="8" rx="4" fill="#7C3AED" fillOpacity="0.7" />

                <rect x="706" y="322" width="218" height="116" rx="12" fill="#FFFFFF" />
                <rect x="722" y="340" width="96" height="10" rx="4" fill="#C2C8D4" />
                <text x="722" y="394" fill="#1E3A8A" fontSize="26" fontWeight="700" fontFamily="sans-serif">231</text>
                <rect x="846" y="340" width="62" height="22" rx="11" fill="#FDE6E6" />
                <rect x="858" y="347" width="38" height="8" rx="4" fill="#E5484D" fillOpacity="0.7" />

                {/* Bottom transactions table */}
                <rect x="220" y="456" width="704" height="120" rx="12" fill="#FFFFFF" />
                <rect x="236" y="472" width="120" height="10" rx="4" fill="#C2C8D4" />
                {[500, 532].map((y) => (
                  <g key={y}>
                    <circle cx="248" cy={y + 14} r="10" fill="#EDE9FE" />
                    <rect x="270" y={y + 8} width="160" height="8" rx="4" fill="#E2E8F0" />
                    <rect x="270" y={y + 20} width="96" height="7" rx="3" fill="#F0F2F5" />
                    <rect x="820" y={y + 9} width="88" height="14" rx="4" fill="#1E3A8A" fillOpacity="0.12" />
                  </g>
                ))}
              </svg>
            </div>

            {/* Mobile payment app mockup */}
            <div className="mobile absolute bottom-0 left-auto tablet:left-[16px] right-[140px] tablet:right-auto bg-[#EEEEEE] border-[5px] border-[#EEEEEE] rounded-3xl overflow-hidden shadow-xl">
              <svg
                className="clamp-mobile-width clamp-mobile-height"
                viewBox="0 0 218 486"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background */}
                <rect width="217.997" height="485.407" fill="#F1F5F9" />

                {/* Status bar */}
                <rect width="218" height="40" fill="#FFFFFF" />
                <rect x="80" y="14" width="58" height="12" rx="6" fill="#E2E8F0" />

                {/* Header */}
                <rect y="40" width="218" height="56" fill="#FFFFFF" />
                <rect x="16" y="54" width="80" height="16" rx="4" fill="#1E3A8A" fillOpacity="0.2" />
                <rect x="168" y="50" width="34" height="24" rx="12" fill="#16A34A" />

                {/* Balance card */}
                <rect x="12" y="110" width="194" height="96" rx="12" fill="#1E3A8A" />
                <rect x="24" y="126" width="60" height="10" rx="4" fill="#FFFFFF" fillOpacity="0.4" />
                <text x="24" y="168" fill="#FFFFFF" fontSize="20" fontWeight="700" fontFamily="sans-serif">R$ 8.283,35</text>
                <path d="M120 192 L138 184 L150 188 L164 176 L180 182 L196 170" stroke="#16A34A" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="24" y="182" width="44" height="9" rx="4" fill="#16A34A" fillOpacity="0.85" />

                {/* Quick actions */}
                <rect x="12" y="222" width="90" height="72" rx="10" fill="#FFFFFF" />
                <rect x="118" y="222" width="88" height="72" rx="10" fill="#FFFFFF" />
                <rect x="28" y="238" width="32" height="32" rx="16" fill="#EDE9FE" />
                <rect x="134" y="238" width="32" height="32" rx="16" fill="#EDE9FE" />
                <rect x="24" y="278" width="50" height="8" rx="4" fill="#E2E8F0" />
                <rect x="130" y="278" width="50" height="8" rx="4" fill="#E2E8F0" />

                {/* Transaction list */}
                <rect x="12" y="312" width="194" height="152" rx="10" fill="#FFFFFF" />
                <rect x="24" y="326" width="60" height="10" rx="4" fill="#E2E8F0" />
                <rect x="24" y="352" width="170" height="28" rx="6" fill="#F1F5F9" />
                <rect x="24" y="388" width="170" height="28" rx="6" fill="#F1F5F9" />
                <rect x="24" y="424" width="170" height="28" rx="6" fill="#F1F5F9" />

                {/* Bottom nav */}
                <rect y="452" width="218" height="34" fill="#FFFFFF" />
                <rect x="28" y="460" width="28" height="18" rx="4" fill="#E2E8F0" />
                <rect x="96" y="460" width="28" height="18" rx="4" fill="#16A34A" fillOpacity="0.6" />
                <rect x="164" y="460" width="28" height="18" rx="4" fill="#E2E8F0" />
              </svg>
            </div>

            {/* Floating tech badges (decorative, animate on loop) */}
            {floatingBadges.map((badge) => (
              <div
                key={badge.id}
                className={cn(
                  "hidden desktopDefault:flex items-center gap-2",
                  "absolute z-10 px-3 py-2 rounded-xl shadow-lg border border-[#E2E8F0] bg-white",
                  badge.position,
                  badge.animClass
                )}
              >
                <div className="size-7 rounded-full bg-[#EDE9FE] flex items-center justify-center shrink-0">
                  <BoltIcon className="size-4 text-[#1E3A8A]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1E3A8A] leading-tight">{badge.label}</p>
                  <p className="text-[10px] text-[#64748B] leading-tight">{badge.sublabel}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right decorative side panel */}
      <div className="rounded-l-lg content-side" />
    </section>
  );
}
