"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto custa?",
    answer:
      "O orçamento varia bastante de projeto para projeto — depende do que você precisa, da qualidade esperada e do timeline. Nada de preço tabelado aqui. A gente conversa direto com você no WhatsApp, entende bem o seu caso e propõe a solução com o preço justo.",
  },
  {
    question: "Em quanto tempo fica pronto?",
    answer:
      "Normalmente entre 5 a 10 dias úteis, contando a partir do briefing. Se tiver prazo apertado, a gente vê se consegue acelerar. Tudo depende do escopo, mas tentamos ser rápido sem perder qualidade.",
  },
  {
    question: "Preciso entender de tecnologia?",
    answer:
      "Não. A gente cuida de tudo e fala no seu idioma, sem termo difícil. Você só conta sobre o seu negócio num papo rápido e aprova o resultado.",
  },
  {
    question: "Vocês atende de qualquer lugar do Brasil?",
    answer:
      "Sim. Trabalhamos 100% online — pode ser sua primeira vez em São Paulo, Bahia ou qualquer canto do Brasil. Se você tiver negócio online ou quiser estar na internet, a gente ajuda.",
  },
  {
    question: "Já preciso ter site ou domínio?",
    answer:
      "Não precisa. Se você já tiver um endereço (o www do seu negócio), a gente configura. Se não tiver, orientamos passo a passo pra registrar — é simples e barato.",
  },
  {
    question: "E depois que fica pronto, tem suporte?",
    answer:
      "Tem sim. A gente oferece suporte mensal (acompanhamento, atualizações, pequenos ajustes) se você quiser. Sem fidelidade, você escolhe continuar ou parar quando achar melhor.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="flex gap-[1px]">
      <div className="content-side rounded-r-lg bg-stripes" />
      <div className="content-center flex-auto w-full bg-white overflow-hidden rounded-lg">
        <div className="py-16 px-6 tablet:px-8 desktopDefault:px-16 desktopDefault:max-w-[900px] mx-auto w-full">
          <span className="py-2 px-3 border border-[#E2E8F0] rounded-full leading-[10px] font-bold text-sm w-fit block mb-6">
            Dúvidas
          </span>
          <h2 className="font-fustat text-[36px] tablet:text-[44px] font-semibold leading-[115%] tracking-tight text-[#1E3A8A] mb-4">
            Tem dúvidas? Relaxa, nós temos as respostas.
          </h2>
          <p className="text-[#64748B] font-interTight text-lg font-medium leading-[160%] mb-10">
            As perguntas que mais recebemos de donos de negócio antes de começar.
          </p>
          <Accordion className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-[#E2E8F0]"
              >
                <AccordionTrigger className="font-fustat text-base tablet:text-lg font-semibold text-[#1E3A8A] py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#64748B] font-interTight text-base leading-[160%] pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <div className="content-side rounded-l-lg bg-stripes" />
    </section>
  );
}
