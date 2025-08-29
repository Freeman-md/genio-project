"use client";

import Image from "next/image";
import GradientBorder from "@/app/components/ui/gradient-border";

type Service = { id: string; label: string; icon?: string };

const leftItems: Service[] = [
  { id: "tax", label: "Tax" },
  { id: "vat", label: "VAT" },
  { id: "accounts", label: "Accounts" },
];

const rightItems: Service[] = [
  { id: "lorem", label: "Lorem" },
  { id: "ipsum", label: "Ipsum" },
  { id: "pnh", label: "Pnh" },
];

export default function ServicesHub() {
  return (
    <section
      aria-label="Genio services hub"
      className="relative overflow-hidden py-20 md:py-28"
    >
      <div className="container relative">
        <div className="relative grid items-center md:grid-cols-[1.5fr_9fr_1.5fr] gap-10 md:gap-16">
          <div className="flex flex-col gap-8 md:gap-48">
            {leftItems.map((service) => (
              <ServiceCard key={service.id} label={service.label} />
            ))}
          </div>

          <div className="relative mx-auto">
            <GradientBorder
              radius="rounded-full"
              className="opacity-60 w-[800px] h-[800px] place-items-center content-center"
              innerClassName="rounded-full bg-background/5"
            >
              <GradientBorder
                radius="rounded-full"
                className="w-[450px] h-[450px] content-center place-items-center bg-white/20
 backdrop-blur-sm"
              >
                <div className="relative w-64 h-64 rounded-full overflow-visible grid place-items-center [perspective:800px] bg-[linear-gradient(180deg,_rgba(217,217,217,0)_0%,_#333333_69%)]">
                  <div className="relative w-full h-full transform-gpu translate-y-5 scale-[2.5] will-change-transform">
                    <Image
                      src="/svgs/cube.svg"
                      alt="Genio cube"
                      fill
                      className="object-contain drop-shadow-[0_18px_40px_rgba(175,32,122,0.35)]"
                      priority
                    />
                  </div>
                </div>
              </GradientBorder>
            </GradientBorder>
          </div>

          <div className="flex flex-col gap-8 md:gap-48">
            {rightItems.map((service) => (
              <ServiceCard key={service.id} label={service.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ label }: { label: string }) {
  return (
    <div className="relative group cursor-pointer">
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0 -z-10
          rounded-full
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
        "
      >
        <div className="absolute -inset-6 rounded-full bg-gradient blur-xl opacity-70" />
        <div className="absolute -inset-6 rounded-full bg-vignette" />
      </div>

      <GradientBorder
        radius="rounded-2xl"
        className="aspect-square w-40 h-40"
        innerClassName="w-full h-full flex flex-col items-center justify-center rounded-2xl"
        aria-label={label}
      >
        <span className="text-white text-lg font-semibold">{label}</span>
        <Image
          src="/svgs/receipt.svg"
          alt="Receipt"
          width={100}
          height={100}
          priority
        />
      </GradientBorder>
    </div>
  );
}
