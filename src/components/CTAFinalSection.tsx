import Link from "next/link";
import { CircleArrowRightIcon } from "@/components/icons";
import { WHATSAPP_URL } from "@/lib/contato";

export default function CTAFinalSection() {
  return (
    <section id="contato" className="flex gap-[1px]">
      <div className="content-side rounded-tr-lg bg-stripes" />
      <div className="content-center flex-auto w-full bg-white overflow-hidden rounded-t-lg">
        <div className="py-24 px-6 tablet:px-8 desktopDefault:px-16 text-center">
          <h2 className="font-fustat text-[40px] tablet:text-[56px] font-semibold text-[#1E3A8A] leading-[105%] tracking-tighter">
            Pronto para aparecer no Google?
          </h2>
          <p className="text-[#64748B] text-lg mt-6 max-w-[600px] mx-auto font-interTight">
            Seu concorrente já está lá. Manda uma mensagem e em 5 dias o seu
            negócio também está — sem complicação.
          </p>
          <div className="mt-12 flex flex-col items-center gap-4">
            <div className="flex items-center gap-3 text-[#7C3AED] font-semibold text-lg">
              <CircleArrowRightIcon className="size-6" />
              <span>É rápido e o orçamento é na hora</span>
            </div>
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-8 bg-[#16A34A] text-white rounded-full text-lg font-semibold font-fustat hover:bg-[#15803D] transition-all duration-300"
            >
              Falar no WhatsApp
            </Link>
          </div>
        </div>
      </div>
      <div className="content-side rounded-tl-lg bg-stripes" />
    </section>
  );
}
