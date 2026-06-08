"use client";

import { cn } from "@/lib/utils";

interface Stack {
  name: string;
  category: string;
  color: string;
  icon: string;
}

const stacks: Stack[] = [
  { name: "Next.js", category: "Framework", color: "#1E3A8A", icon: "N" },
  { name: "React 19", category: "UI Library", color: "#7C3AED", icon: "R" },
  { name: "Tailwind CSS", category: "Styling", color: "#16A34A", icon: "T" },
  { name: "TypeScript", category: "Language", color: "#1E3A8A", icon: "TS" },
  { name: "Vercel", category: "Deployment", color: "#0F172A", icon: "V" },
  { name: "PostgreSQL", category: "Database", color: "#7C3AED", icon: "PG" },
  { name: "Shadcn/ui", category: "Components", color: "#16A34A", icon: "UI" },
  { name: "Node.js", category: "Backend", color: "#1E3A8A", icon: "NJ" },
  { name: "Framer Motion", category: "Animations", color: "#7C3AED", icon: "FM" },
  { name: "Zod", category: "Validation", color: "#16A34A", icon: "Z" },
  { name: "Drizzle ORM", category: "Database ORM", color: "#0F172A", icon: "DB" },
  { name: "Stripe", category: "Payments", color: "#1E3A8A", icon: "$" },
];

function StackCard({ stack }: { stack: Stack }) {
  return (
    <div
      className="flex-shrink-0 min-w-[280px] max-w-[280px] rounded-xl p-6 bg-white hover:shadow-lg transition-shadow duration-300"
      style={{ border: "1px solid #E2E8F0" }}
    >
      <div className="flex items-center justify-between mb-4">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center text-sm font-bold text-white"
          style={{ backgroundColor: stack.color }}
        >
          {stack.icon}
        </div>
        <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">
          {stack.category}
        </span>
      </div>
      <h3 className="font-fustat font-bold text-lg text-[#1E3A8A]">
        {stack.name}
      </h3>
    </div>
  );
}

type MarqueeDirection = "left" | "right" | "left-slow";

const directionClassMap: Record<MarqueeDirection, string> = {
  left: "animate-marquee-left",
  right: "animate-marquee-right",
  "left-slow": "animate-marquee-left-slow",
};

function MarqueeRow({
  items,
  direction,
}: {
  items: Stack[];
  direction: MarqueeDirection;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div
        className={cn(
          "flex gap-4",
          directionClassMap[direction],
          "hover:[animation-play-state:paused]"
        )}
      >
        {doubled.map((stack, index) => (
          <StackCard key={index} stack={stack} />
        ))}
      </div>
    </div>
  );
}

export default function StacksSection() {
  const row1 = stacks.slice(0, 4);
  const row2 = stacks.slice(4, 8);
  const row3 = stacks.slice(8, 12);

  return (
    <section id="stack" className="flex gap-[1px]">
      <div className="content-side rounded-r-lg bg-stripes" />
      <div className="content-center flex-auto w-full bg-white overflow-hidden rounded-lg">
        {/* Header */}
        <div className="py-16 pb-8 px-6 tablet:px-8 desktopDefault:px-16">
          <span className="py-2 px-3 border border-[#E2E8F0] rounded-full leading-[10px] font-bold text-sm">
            Nossa Stack
          </span>
          <h2 className="font-fustat text-[36px] tablet:text-[44px] font-semibold leading-[115%] tracking-tight text-[#1E3A8A] mt-6 mb-4">
            Tecnologias modernas e escaláveis que usamos.
          </h2>
          <p className="text-[#64748B] font-interTight text-lg font-medium leading-[160%]">
            Construímos com as melhores ferramentas do mercado: rápido,
            seguro, fácil de manter e pronto para crescer com você.
          </p>
        </div>

        {/* Marquee rows */}
        <div className="overflow-hidden pb-16 flex flex-col gap-4">
          <MarqueeRow items={row1} direction="left" />
          <MarqueeRow items={row2} direction="right" />
          <MarqueeRow items={row3} direction="left-slow" />
        </div>
      </div>
      <div className="content-side rounded-l-lg bg-stripes" />
    </section>
  );
}
