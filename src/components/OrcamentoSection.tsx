import Link from "next/link";
import { CircleArrowRightIcon } from "@/components/icons";
import { WHATSAPP_URL } from "@/lib/contato";

export default function OrcamentoSection() {
  return (
    <section
      id="orcamento"
      className="bg-[#1E3A8A] text-white relative overflow-hidden px-6 tablet:py-16 py-8 desktopDefault:p-[120px] desktopXL:px-[194px]"
    >
      {/* Content */}
      <div className="mx-auto max-w-[1312px] relative z-10 grid desktopDefault:grid-cols-2 gap-8 items-center">
        <div className="py-8 flex flex-col gap-8 desktopDefault:justify-center">
          <div className="space-y-12">
            <h3 className="text-[32px] tablet:text-[48px] leading-[120%] tracking-[-1.28px] tablet:tracking-[-1.92px] font-semibold font-fustat">
              Orçamento personalizado para seu projeto, nicho e{" "}
              <span className="text-[#A78BFA]">objetivos únicos</span>.
            </h3>
            <p className="font-interTight text-lg text-white/90 leading-[160%]">
              Cada negócio é diferente. Qualidade, escopo e timing variam bastante.
              Por isso não fixamos preço aqui — vamos conversa rápida no WhatsApp
              para entender bem o que você precisa e montar a melhor solução.
            </p>
          </div>
          <div className="w-fit relative mt-8 desktopDefault:mt-16">
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[16px] duration-300 transition-all font-fustat font-semibold flex gap-2 items-center py-3 px-4 w-fit rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white"
            >
              Solicitar orçamento no WhatsApp{" "}
              <CircleArrowRightIcon className="size-5 flex-shrink-0" />
            </Link>
            {/* Decorative arrow (desktop only) */}
            <svg
              className="hidden desktopDefault:block absolute -right-[110px] bottom-0"
              xmlns="http://www.w3.org/2000/svg"
              width="139"
              height="124"
              viewBox="0 0 139 124"
              fill="none"
            >
              <path
                d="M82.8343 2.44531L1.04297 37.3531C1.04297 37.3531 135.476 16.9902 135.476 65.7585C135.476 93.0196 69.8026 94.6773 69.8026 94.6773"
                stroke="white"
                strokeWidth="5.31355"
                fill="none"
              />
              <path
                d="M69.8026 94.6773L96.3833 64.8322"
                stroke="white"
                strokeWidth="5.31355"
                fill="none"
              />
              <path
                d="M69.8026 94.6773L99.7093 121.203"
                stroke="white"
                strokeWidth="5.31355"
                fill="none"
              />
            </svg>
          </div>
        </div>

        {/* Right: benefit box */}
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6 tablet:p-8 backdrop-blur-sm">
          <h4 className="font-fustat font-bold text-white mb-4">Quando você conversa conosco:</h4>
          <ul className="space-y-3">
            <li className="flex gap-3 font-interTight text-white/90">
              <span className="text-[#16A34A] font-bold">✓</span>
              <span>Explicamos bem o que entra e o que não entra</span>
            </li>
            <li className="flex gap-3 font-interTight text-white/90">
              <span className="text-[#16A34A] font-bold">✓</span>
              <span>Dividimos o orçamento em etapas claras</span>
            </li>
            <li className="flex gap-3 font-interTight text-white/90">
              <span className="text-[#16A34A] font-bold">✓</span>
              <span>Você sabe exatamente quando fica pronto</span>
            </li>
            <li className="flex gap-3 font-interTight text-white/90">
              <span className="text-[#16A34A] font-bold">✓</span>
              <span>Conversamos em português simples, sem jargão</span>
            </li>
          </ul>
          <p className="font-interTight text-xs text-white/60 mt-6 pt-6 border-t border-white/10">
            Nenhuma cobrança por orçamento. Não tem compromisso.
          </p>
        </div>
      </div>

      {/* Large decorative pattern bg, opacity 0.2 */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 opacity-20 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1400"
          height="600"
          viewBox="0 0 2586 840"
          fill="none"
        >
          {/* Simplified dot/circle grid pattern matching original */}
          {Array.from({ length: 20 }, (_, row) =>
            Array.from({ length: 30 }, (_, col) => (
              <ellipse
                key={`${row}-${col}`}
                cx={col * 86 + 43}
                cy={row * 42 + 21}
                rx="7"
                ry="4"
                fill="#3B4FA0"
              />
            ))
          )}
        </svg>
      </div>
    </section>
  );
}
