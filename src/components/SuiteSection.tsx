import { SearchCheck, MessagesSquare, LineChart } from "lucide-react";

const features = [
  {
    icon: SearchCheck,
    title: "Presença no Google.",
    description:
      "Seu negócio configurado pra aparecer quando pesquisam pelo seu segmento na sua cidade — site e Google Meu Negócio prontos.",
  },
  {
    icon: MessagesSquare,
    title: "Atendimento automático.",
    description:
      "WhatsApp com menu que responde preço, horário e localização sozinho e chama você só quando precisa de gente.",
  },
  {
    icon: LineChart,
    title: "Acompanhamento mensal.",
    description:
      "Se quiser, a gente cuida de tudo todo mês: atualizações, ajustes e um relatório simples de visitas e posição no Google.",
  },
];

export default function SuiteSection() {
  return (
    <div className="space-y-[1px]">
      {/* Row 1: Heading */}
      <div className="flex gap-[1px]">
        <div className="content-side rounded-tr-lg bg-stripes" />
        <div className="content-center flex-auto w-full bg-white overflow-hidden rounded-t-lg">
          <div className="py-16 px-6 tablet:px-8 desktopDefault:px-16">
            <span className="py-2 px-3 border border-[#E2E8F0] rounded-full leading-[10px] font-bold text-sm">
              Soluções
            </span>
            <h2 className="font-fustat text-[36px] tablet:text-[48px] font-semibold leading-[115%] tracking-tight text-[#1E3A8A] mt-6 mb-4">
              Tudo que seu negócio precisa pra{" "}
              <span className="text-[#7C3AED]">crescer no digital</span>.
            </h2>
            <p className="text-[#64748B] font-interTight text-lg font-medium leading-[160%] max-w-[680px]">
              A gente reúne site, Google e WhatsApp num lugar só, do jeito certo.
              Você não precisa contratar três pessoas diferentes nem entender de
              tecnologia — é só falar com a gente e cuidar do seu negócio.
            </p>
          </div>
        </div>
        <div className="content-side rounded-tl-lg bg-stripes" />
      </div>

      {/* Row 2: Feature cards */}
      <div className="flex gap-[1px]">
        <div className="content-side rounded-br-lg bg-stripes" />
        <div className="content-center flex-auto w-full overflow-hidden rounded-b-lg">
          <div className="grid desktopDefault:grid-cols-3 gap-[1px] bg-[#E2E8F0]">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="bg-white p-8 tablet:p-10">
                  <div className="size-12 bg-[#EDE9FE] rounded-full flex items-center justify-center mb-6">
                    <Icon className="size-6 text-[#1E3A8A]" />
                  </div>
                  <h3 className="font-fustat text-xl font-semibold text-[#1E3A8A] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#64748B] font-interTight text-base leading-[160%]">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="content-side rounded-bl-lg bg-stripes" />
      </div>
    </div>
  );
}
