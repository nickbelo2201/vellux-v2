"use client";

import { Zap, Bot, Brain, TrendingUp } from "lucide-react";

const etapas = [
  {
    num: "01",
    icon: Zap,
    titulo: "Prospecção",
    desc: "SDR com IA aborda leads frios no WhatsApp, Instagram e e-mail.",
  },
  {
    num: "02",
    icon: Bot,
    titulo: "Atendimento",
    desc: "IA responde, qualifica e agenda sem você precisar estar online.",
  },
  {
    num: "03",
    icon: Brain,
    titulo: "CRM",
    desc: "Cada conversa registrada automaticamente. Histórico completo do lead.",
  },
  {
    num: "04",
    icon: TrendingUp,
    titulo: "Fechamento",
    desc: "Closer com IA envia proposta, faz follow-up e empurra pro sim.",
  },
];

export default function AutomacaoIASection() {
  return (
    <section id="automacao" className="flex gap-[1px]">
      <div className="content-side rounded-r-lg bg-stripes" />
      <div className="content-center flex-auto w-full bg-white overflow-hidden rounded-lg">

        {/* Header da seção */}
        <div className="py-16 px-6 tablet:px-8 desktopDefault:px-16 border-b border-[#E2E8F0]">
          <span className="py-2 px-3 border border-[#E2E8F0] rounded-full font-bold text-sm w-fit block mb-6">
            AUTOMAÇÃO IA
          </span>
          <div className="desktopDefault:flex desktopDefault:items-end desktopDefault:justify-between gap-8">
            <h2 className="font-fustat text-[36px] tablet:text-[44px] font-semibold leading-[115%] tracking-tight text-[#1E3A8A] max-w-[600px]">
              Sua empresa trabalhando enquanto você dorme
            </h2>
            <p className="text-[#64748B] font-interTight text-lg font-medium leading-[180%] desktopDefault:max-w-[380px] mt-4 desktopDefault:mt-0 desktopDefault:text-right">
              Prospecção, atendimento, CRM e fechamento conectados numa única esteira de vendas.
            </p>
          </div>
        </div>

        {/* Pipeline — 4 etapas */}
        <div className="grid tablet:grid-cols-2 desktopDefault:grid-cols-4 gap-[1px] bg-[#E2E8F0]">
          {etapas.map((etapa) => {
            const Icon = etapa.icon;
            return (
              <div
                key={etapa.num}
                className="bg-white py-12 px-6 tablet:px-8 desktopDefault:px-10 flex flex-col gap-6 group hover:bg-[#FAFBFF] transition-colors duration-200"
              >
                {/* Número grande + ícone */}
                <div className="flex items-center justify-between">
                  <span className="font-fustat text-[56px] font-semibold leading-none text-[#E2E8F0] select-none">
                    {etapa.num}
                  </span>
                  <div className="size-12 bg-[#EDE9FE] rounded-full flex items-center justify-center group-hover:bg-[#7C3AED] transition-colors duration-300">
                    <Icon className="size-6 text-[#7C3AED] group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                {/* Texto */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-fustat text-xl font-semibold text-[#1E3A8A]">
                    {etapa.titulo}
                  </h3>
                  <p className="font-interTight text-[#64748B] text-sm leading-[160%]">
                    {etapa.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner inferior: CTA */}
        <div className="flex flex-col tablet:flex-row items-start tablet:items-center justify-between gap-4 px-6 tablet:px-8 desktopDefault:px-16 py-5 border-t border-[#E2E8F0]">
          <p className="font-interTight text-[#64748B] text-sm">
            Do primeiro contato ao fechamento —{" "}
            <strong className="text-[#1E3A8A]">tudo no automático</strong>.
          </p>
          <a
            href="#orcamento"
            className="font-fustat font-semibold text-sm text-[#7C3AED] whitespace-nowrap hover:underline"
          >
            Quero montar minha esteira →
          </a>
        </div>

      </div>
      <div className="content-side rounded-l-lg bg-stripes" />
    </section>
  );
}
