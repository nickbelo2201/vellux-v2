import Link from "next/link";
import { MessageCircle, Mail } from "lucide-react";
import { VelluxiaLogo, InstagramIcon } from "@/components/icons";
import { WHATSAPP_URL, EMAIL } from "@/lib/contato";

const footerColumns = [
  {
    title: "Serviços",
    links: [
      { label: "Site One-Page", href: "#servicos", external: false },
      { label: "Página de Captação", href: "#servicos", external: false },
      { label: "Automação de WhatsApp", href: "#servicos", external: false },
      { label: "Pacote Completo", href: "#servicos", external: false },
      { label: "Acompanhamento mensal", href: "#precos", external: false },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Como funciona", href: "#como-funciona", external: false },
      { label: "Depoimentos", href: "#suporte", external: false },
      { label: "Preços", href: "#precos", external: false },
      { label: "Dúvidas", href: "#faq", external: false },
    ],
  },
  {
    title: "Atendemos",
    links: [
      { label: "Brasil inteiro", href: "#contato", external: false },
      { label: "Presencial: Grande ABC", href: "#contato", external: false },
      { label: "Remoto: Em qualquer lugar", href: "#contato", external: false },
      { label: "Futuramente: Mundial", href: "#contato", external: false },
    ],
  },
  {
    title: "Contato",
    links: [
      { label: "Falar no WhatsApp", href: WHATSAPP_URL, external: true },
      { label: EMAIL, href: `mailto:${EMAIL}`, external: true },
      { label: "Instagram", href: "https://instagram.com/velluxia", external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="grid gap-[1px]">
      {/* Row 1: Link columns */}
      <div className="flex gap-[1px]">
        <div className="content-side bg-stripes" />
        <div className="content-center flex-auto w-full bg-white overflow-hidden rounded-t-lg">
          <div className="py-16 px-6 tablet:px-8 desktopDefault:px-16 grid grid-cols-2 tablet:grid-cols-4 gap-8">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h4 className="font-fustat text-sm font-semibold text-[#1E3A8A] mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-1">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target={link.href.startsWith("mailto") ? undefined : "_blank"}
                          rel={
                            link.href.startsWith("mailto")
                              ? undefined
                              : "noopener noreferrer"
                          }
                          className="font-interTight text-sm text-[#64748B] hover:text-[#1E3A8A] hover:underline leading-8 block"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="font-interTight text-sm text-[#64748B] hover:text-[#1E3A8A] hover:underline leading-8 block"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="content-side bg-stripes" />
      </div>

      {/* Row 2: Bottom bar */}
      <div className="flex gap-[1px]">
        <div className="content-side bg-stripes" />
        <div className="content-center flex-auto w-full bg-white overflow-hidden rounded-b-lg">
          <div className="py-6 px-6 tablet:px-8 desktopDefault:px-16 flex flex-col tablet:flex-row justify-between items-center gap-4">
            <div>
              <VelluxiaLogo className="h-7" />
              <p className="font-interTight text-xs text-[#64748B] mt-2">
                © 2026 Velluxia · Sites e software para negócios brasileiros.
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/velluxia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#64748B] hover:text-[#1E3A8A] transition-colors"
              >
                <InstagramIcon className="size-5" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-[#64748B] hover:text-[#16A34A] transition-colors"
              >
                <MessageCircle className="size-5" />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                aria-label="E-mail"
                className="text-[#64748B] hover:text-[#1E3A8A] transition-colors"
              >
                <Mail className="size-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="content-side bg-stripes" />
      </div>
    </footer>
  );
}
