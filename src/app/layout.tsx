import type { Metadata } from "next";
import { Inter_Tight, Fustat } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fustat = Fustat({
  variable: "--font-fustat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Velluxia — Sites e Automação para o seu negócio aparecer no Google",
  description:
    "Construímos sites, páginas de captação e automação de WhatsApp para negócios do Grande ABC. Seu negócio no Google em 5 dias, sem complicação e a partir de R$800.",
  keywords: [
    "criação de site",
    "site para empresa",
    "aparecer no Google",
    "automação de WhatsApp",
    "Grande ABC",
    "Santo André",
    "São Bernardo",
  ],
  openGraph: {
    title: "Velluxia — Seu negócio no Google em 5 dias",
    description:
      "Sites, páginas de captação e automação de WhatsApp sem complicação. A partir de R$800.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${interTight.variable} ${fustat.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
