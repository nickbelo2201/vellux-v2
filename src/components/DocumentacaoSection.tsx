import { Search, Smartphone, Clock, MapPin } from "lucide-react";

const beneficios = [
  {
    icon: Search,
    titulo: "Aparece quando procuram",
    descricao:
      "Configurado pra surgir quando alguém pesquisa seu segmento na sua cidade.",
  },
  {
    icon: Smartphone,
    titulo: "Funciona no celular",
    descricao: "A maioria dos seus clientes vai te encontrar pelo celular.",
  },
  {
    icon: Clock,
    titulo: "Trabalha 24 horas",
    descricao: "Seu site e o WhatsApp atendem mesmo quando você está fechado.",
  },
  {
    icon: MapPin,
    titulo: "Aqui no Grande ABC",
    descricao: "A gente conhece a realidade do negócio de bairro daqui.",
  },
];

export default function DocumentacaoSection() {
  return (
    <section className="flex gap-[1px]">
      <div className="content-side rounded-r-lg bg-stripes" />
      <div className="content-center flex-auto w-full bg-white overflow-hidden rounded-lg">
        <div className="grid desktopDefault:grid-cols-2 min-h-[700px] gap-[1px] bg-[#E2E8F0]">
          {/* LEFT: content */}
          <div className="bg-white py-16 px-6 tablet:px-8 desktopDefault:px-16 flex flex-col justify-center space-y-8">
            <div>
              <span className="py-2 px-3 border border-[#E2E8F0] rounded-full leading-[10px] font-bold text-sm">
                Por que agora
              </span>
              <h2 className="font-fustat text-[36px] tablet:text-[44px] font-semibold leading-[115%] tracking-tight text-[#1E3A8A] mt-6 mb-4">
                Quem não aparece no Google perde pro vizinho que aparece.
              </h2>
              <p className="text-[#64748B] font-interTight text-lg font-medium leading-[160%]">
                Todo dia gente pesquisa no Google antes de escolher onde comprar.
                Se o seu negócio não está lá, quem leva o cliente é o concorrente
                que está. A gente coloca você no jogo — rápido e sem complicação.
              </p>
            </div>

            {/* Destaque */}
            <div className="border border-[#E2E8F0] rounded-2xl p-6 bg-[#F8FAFC]">
              <p className="font-fustat font-bold text-[#1E3A8A] mb-2">
                Site que trabalha por você
              </p>
              <p className="text-[#64748B] font-interTight text-sm leading-[160%]">
                Enquanto você cuida do negócio, seu site mostra seus serviços,
                responde no WhatsApp e te coloca no mapa. É como ter um vendedor
                que nunca tira folga.
              </p>
            </div>
          </div>

          {/* RIGHT: benefit cards */}
          <div className="grid grid-cols-1 tablet:grid-cols-2 gap-[1px] bg-[#E2E8F0]">
            {beneficios.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.titulo}
                  className="bg-white p-8 flex flex-col justify-center"
                >
                  <div className="size-12 bg-[#EDE9FE] rounded-full flex items-center justify-center mb-4">
                    <Icon className="size-6 text-[#7C3AED]" />
                  </div>
                  <h3 className="font-fustat text-lg font-semibold text-[#1E3A8A] mb-2">
                    {b.titulo}
                  </h3>
                  <p className="text-[#64748B] font-interTight text-sm leading-[160%]">
                    {b.descricao}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="content-side rounded-l-lg bg-stripes" />
    </section>
  );
}
