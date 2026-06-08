"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Globe,
  MousePointerClick,
  MessageCircle,
  Package,
  type LucideIcon,
} from "lucide-react";

interface Servico {
  id: string;
  label: string;
  description: string;
  icon: LucideIcon;
}

const servicos: Servico[] = [
  {
    id: "site",
    label: "Site One-Page",
    description:
      "Uma página completa que funciona bem no celular: seus serviços, fotos, localização no mapa e botão de WhatsApp direto. Tudo configurado pra você aparecer quando pesquisarem pelo seu segmento na sua cidade.",
    icon: Globe,
  },
  {
    id: "landing",
    label: "Página de Captação",
    description:
      "Uma página feita pra uma única coisa: o cliente entrar em contato. Texto pensado pro seu segmento, formulário e WhatsApp integrados. Ideal pra quem quer receber contato de cliente novo todo dia.",
    icon: MousePointerClick,
  },
  {
    id: "whatsapp",
    label: "Automação de WhatsApp",
    description:
      "Um menu automático que responde preço, horário e localização sozinho, 24 horas por dia, e chama você só quando precisa de gente. Você para de perder cliente por demora na resposta.",
    icon: MessageCircle,
  },
  {
    id: "pacote",
    label: "Pacote Completo",
    description:
      "Site (ou página de captação) + automação de WhatsApp + Google Meu Negócio configurado. Tudo linkado: site, Google, WhatsApp e Instagram trabalhando juntos por você.",
    icon: Package,
  },
];

export default function ProdutosSection() {
  const [activeTab, setActiveTab] = useState<string>("site");

  const activeServico = servicos.find((s) => s.id === activeTab) ?? servicos[0];
  const ActiveIcon = activeServico.icon;

  return (
    <section id="servicos" className="flex gap-[1px]">
      <div className="content-side rounded-r-lg bg-stripes" />
      <div className="content-center flex-auto w-full bg-white overflow-hidden rounded-lg">
        <div className="grid desktopDefault:grid-cols-2 min-h-[700px] gap-[1px] bg-[#E2E8F0]">

          {/* Left: Tab selector */}
          <div className="bg-white py-16 px-6 tablet:px-8 desktopDefault:px-16 space-y-2">
            {servicos.map((servico) => {
              const TabIcon = servico.icon;
              const isActive = activeTab === servico.id;
              return (
                <button
                  key={servico.id}
                  onClick={() => setActiveTab(servico.id)}
                  className={cn(
                    "w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-200",
                    isActive
                      ? "bg-[#EDE9FE] border-l-4 border-[#7C3AED]"
                      : "hover:bg-gray-50 border-l-4 border-transparent"
                  )}
                >
                  <div
                    className={cn(
                      "size-10 rounded-full flex items-center justify-center flex-shrink-0",
                      isActive ? "bg-[#7C3AED]" : "bg-[#EDE9FE]"
                    )}
                  >
                    <TabIcon
                      className={cn(
                        "size-5",
                        isActive ? "text-white" : "text-[#7C3AED]"
                      )}
                    />
                  </div>
                  <span
                    className={cn(
                      "font-fustat font-semibold text-base",
                      isActive ? "text-[#1E3A8A]" : "text-[#64748B]"
                    )}
                  >
                    {servico.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Active service content */}
          <div className="bg-stripes flex items-center justify-center p-8 tablet:p-12">
            <div className="bg-white rounded-2xl p-8 max-w-[400px] w-full shadow-sm">
              <div className="size-16 bg-[#EDE9FE] rounded-full flex items-center justify-center mb-6">
                <ActiveIcon className="size-8 text-[#7C3AED]" />
              </div>
              <h3 className="font-fustat text-2xl font-semibold text-[#1E3A8A] mb-4">
                {activeServico.label}
              </h3>
              <p className="text-[#64748B] font-interTight text-base leading-[160%]">
                {activeServico.description}
              </p>
            </div>
          </div>
        </div>

        {/* Pricing CTA banner at bottom */}
        <Link
          href="#orcamento"
          className="flex items-center gap-2 px-6 tablet:px-8 desktopDefault:px-16 py-4 border-t border-[#E2E8F0] hover:bg-gray-50 transition-colors group"
        >
          <span className="text-sm font-fustat text-[#64748B]">
            Cada negócio é diferente.{" "}
            <strong className="text-[#1E3A8A]">Vamos conversar sobre o seu orçamento</strong>?
          </span>
          <span className="ml-auto font-fustat font-semibold text-[#7C3AED] whitespace-nowrap group-hover:underline">
            Solicitar orçamento →
          </span>
        </Link>
      </div>
      <div className="content-side rounded-l-lg bg-stripes" />
    </section>
  );
}
