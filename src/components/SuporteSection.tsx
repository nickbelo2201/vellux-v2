import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/contato";

export default function SuporteSection() {
  return (
    <section id="suporte" className="flex gap-[1px]">
      <div className="content-side rounded-r-lg bg-stripes" />
      <div className="content-center flex-auto w-full bg-white overflow-hidden rounded-lg">
        <div className="grid desktopDefault:grid-cols-2 min-h-[500px] gap-[1px] bg-[#E2E8F0]">
          {/* Left: decorative panel with WhatsApp-style card */}
          <div className="relative overflow-hidden min-h-[300px] flex items-center justify-center p-8 tablet:p-12 bg-gradient-to-br from-[#1E3A8A] to-[#7C3AED]">
            <div className="w-full max-w-[320px] bg-white rounded-2xl shadow-xl p-5 space-y-3">
              <div className="flex items-center gap-3">
                <div className="size-9 rounded-full bg-[#16A34A] flex items-center justify-center text-white font-fustat font-bold">
                  V
                </div>
                <div>
                  <p className="font-fustat font-bold text-sm text-[#1E3A8A] leading-none">
                    Velluxia
                  </p>
                  <p className="text-[11px] text-[#16A34A] leading-none mt-1">
                    online agora
                  </p>
                </div>
              </div>
              <div className="bg-[#F1F5F9] rounded-xl rounded-tl-sm p-3 text-sm text-[#1E293B]">
                Oi! Vi que você tem um negócio aqui no Grande ABC. Posso te mandar
                um resumo rápido de como ficaria o seu site?
              </div>
              <div className="bg-[#EDE9FE] rounded-xl rounded-tr-sm p-3 text-sm text-[#1E293B] ml-auto max-w-[80%]">
                Pode mandar! 🙌
              </div>
            </div>
          </div>

          {/* Right: text content */}
          <div className="bg-white flex justify-center items-center p-8 tablet:p-12">
            <div className="space-y-4 desktopDefault:max-w-[360px]">
              <span className="py-2 px-3 border border-[#E2E8F0] rounded-full leading-[10px] font-bold text-sm w-fit block">
                Suporte
              </span>
              <h3 className="font-fustat text-[32px] tablet:text-[36px] font-semibold leading-[120%] tracking-[-1.28px] pt-5 text-[#1E3A8A]">
                Suporte de gente de verdade, aqui do Grande ABC.
              </h3>
              <p className="text-[#64748B] text-[18px] font-interTight font-medium leading-[180%] tracking-[0.9px]">
                Nada de robô que não resolve. Você fala direto com quem cuida do
                seu site, com resposta em até 2 horas no horário comercial.
              </p>
              <div className="group inline-block">
                <Link
                  className="block mt-16 text-[#7C3AED] leading-[11px] font-semibold tracking-[-0.32px] hover:scale-[102%] transition-transform duration-500"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={WHATSAPP_URL}
                >
                  Falar no WhatsApp →
                </Link>
                <div className="w-full mt-1 h-[2px] bg-[#7C3AED] scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-side rounded-l-lg bg-stripes" />
    </section>
  );
}
