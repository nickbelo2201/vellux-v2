const passos = [
  {
    numero: "1",
    titulo: "Briefing rápido",
    descricao:
      "Você conta sobre o seu negócio num papo rápido no WhatsApp. Sem formulário gigante, sem reunião que não acaba.",
  },
  {
    numero: "2",
    titulo: "A gente constrói",
    descricao:
      "Criamos seu site e configuramos tudo: textos que vendem, Google Meu Negócio e WhatsApp. Você só aprova.",
  },
  {
    numero: "3",
    titulo: "No ar em 5 dias",
    descricao:
      "Seu negócio aparece no Google e começa a receber contato de cliente novo. Sem você precisar mexer em nada.",
  },
];

export default function IntegracoesSection() {
  return (
    <section id="como-funciona" className="flex gap-[1px]">
      <div className="content-side rounded-r-lg bg-stripes" />
      <div className="content-center flex-auto w-full bg-white overflow-hidden rounded-lg">
        <div className="grid desktopDefault:grid-cols-2 min-h-[500px] gap-[1px] bg-[#E2E8F0]">
          {/* LEFT: text content */}
          <div className="bg-white py-16 px-6 tablet:px-8 desktopDefault:px-16 flex flex-col justify-center">
            <span className="py-2 px-3 border border-[#E2E8F0] rounded-full leading-[10px] font-bold text-sm w-fit mb-6">
              Como funciona
            </span>
            <h2 className="font-fustat text-[36px] tablet:text-[44px] font-semibold leading-[115%] tracking-tight text-[#1E3A8A] mb-6">
              Simples assim: você fala, a gente faz.
            </h2>
            <p className="text-[#64748B] font-interTight text-lg font-medium leading-[180%]">
              Do primeiro contato ao site no ar em até 5 dias úteis. Sem
              complicação e sem você precisar entender de tecnologia.
            </p>
          </div>

          {/* RIGHT: steps over striped panel */}
          <div className="bg-stripes min-h-[400px] flex items-center justify-center p-8 tablet:p-12">
            <div className="w-full max-w-[420px] flex flex-col gap-[1px] bg-[#E2E8F0] rounded-2xl overflow-hidden">
              {passos.map((passo) => (
                <div key={passo.numero} className="bg-white p-6 flex gap-4">
                  <div className="size-10 rounded-full bg-[#7C3AED] text-white font-fustat font-bold flex items-center justify-center flex-shrink-0">
                    {passo.numero}
                  </div>
                  <div>
                    <h3 className="font-fustat font-semibold text-[#1E3A8A] mb-1">
                      {passo.titulo}
                    </h3>
                    <p className="text-[#64748B] font-interTight text-sm leading-[160%]">
                      {passo.descricao}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="content-side rounded-l-lg bg-stripes" />
    </section>
  );
}
