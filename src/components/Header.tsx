"use client";

import Link from "next/link";
import { useState } from "react";
import {
  VelluxiaLogo,
  MenuIcon,
  CircleArrowRightIcon,
} from "@/components/icons";
import { cn } from "@/lib/utils";
import { WHATSAPP_URL } from "@/lib/contato";

const navItems = [
  { label: "Serviços", href: "#servicos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Stack", href: "#stack" },
  { label: "Dúvidas", href: "#faq" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex gap-[1px]">
      {/* Left side panel */}
      <div className="content-side rounded-br-lg bg-stripes" />

      {/* Main content */}
      <div
        className={cn(
          "content-center flex-auto w-full bg-white overflow-hidden",
        )}
      >
        <div className="flex items-center justify-between py-4 px-6 tablet:px-8 desktopDefault:px-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <VelluxiaLogo className="h-8" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden tablet:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[#64748B] hover:text-[#1E3A8A] transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden tablet:flex items-center gap-3">
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 py-2.5 px-4 bg-[#16A34A] text-white rounded-full text-sm font-semibold font-fustat hover:bg-[#15803D] transition-all duration-300"
            >
              Falar no WhatsApp
              <CircleArrowRightIcon className="size-4 flex-shrink-0" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="tablet:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <MenuIcon className="size-6 text-[#1E3A8A]" />
          </button>
        </div>

        {/* Mobile nav drawer */}
        {mobileOpen && (
          <div className="tablet:hidden border-t border-[#E2E8F0] px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[#64748B] hover:text-[#1E3A8A] py-1"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-2 border-t border-[#E2E8F0]">
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-4 bg-[#16A34A] text-white rounded-full text-sm font-semibold font-fustat"
              >
                Falar no WhatsApp
                <CircleArrowRightIcon className="size-4 flex-shrink-0" />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Right side panel */}
      <div className="content-side rounded-bl-lg bg-stripes" />
    </header>
  );
}
