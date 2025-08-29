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
  className="relative overflow-hidden py-14 sm:py-16 md:py-20 lg:py-24"
>
  <div className="container relative">
    <div className="relative grid grid-cols-[1.5fr_9fr_1.5fr] items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 max-[415px]:gap-4">
      <div className="flex flex-col gap-6 sm:gap-8 md:gap-12 lg:gap-40">
        {leftItems.map((service) => (
          <ServiceCard key={service.id} label={service.label} />
        ))}
      </div>

      <div className="relative mx-auto">
        <GradientBorder
          radius="rounded-full"
          className="
            opacity-60 grid place-items-center
            w-[200px] h-[200px] max-[415px]:w-[150px] max-[415px]:h-[150px]
            sm:w-[340px] sm:h-[340px]
            lg:w-[520px] lg:h-[520px]
            xl:w-[700px] xl:h-[700px]
          "
          innerClassName="rounded-full bg-background/5"
        >
          <GradientBorder
            radius="rounded-full"
            className="
              grid place-items-center backdrop-blur-sm
              bg-[radial-gradient(48.16%_51.91%_at_50%_50%,_#FFFFFF_0%,_rgba(25,25,25,0)_100%)]
              w-[140px] h-[140px] max-[415px]:w-[110px] max-[415px]:h-[110px]
              sm:w-[240px] sm:h-[240px]
              lg:w-[320px] lg:h-[320px]
              xl:w-[400px] xl:h-[400px]
            "
          >
            <div
              className="
                relative rounded-full overflow-visible grid place-items-center
                [perspective:800px]
                bg-[linear-gradient(180deg,_rgba(217,217,217,0)_0%,_#333333_69%)]
                w-20 h-20 max-[415px]:w-16 max-[415px]:h-16
                sm:w-40 sm:h-40
                lg:w-48 lg:h-48
                xl:w-60 xl:h-60
              "
            >
              <div
                className="
                  relative w-full h-full transform-gpu will-change-transform
                  translate-y-2 sm:translate-y-3 lg:translate-y-4 max-[415px]:translate-y-1 scale-[1.9] sm:scale-[2.1] lg:scale-[2.3] xl:scale-[2.5] max-[415px]:scale-[1.6]
                "
              >
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

      {/* RIGHT STACK */}
      <div className="flex flex-col gap-6 sm:gap-8 md:gap-12 lg:gap-40">
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
      {/* Hover glow */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0 -z-10 rounded-full
          opacity-0 group-hover:opacity-100 transition-opacity duration-300
        "
      >
        <div className="absolute -inset-4 sm:-inset-5 md:-inset-6 max-[415px]:-inset-3 rounded-full bg-gradient blur-lg sm:blur-xl opacity-70" />
        <div className="absolute -inset-4 sm:-inset-5 md:-inset-6 max-[415px]:-inset-3 rounded-full bg-vignette" />
      </div>

      <GradientBorder
        radius="rounded-2xl"
        className="
          aspect-square
          w-16 h-16 max-[415px]:w-14 max-[415px]:h-14
          sm:w-24 sm:h-24
          md:w-28 md:h-28
          xl:w-40 xl:h-40
        "
        innerClassName="w-full h-full flex flex-col items-center justify-center rounded-2xl"
        aria-label={label}
      >
        <span
          className="
            text-white sm:font-semibold
            text-xs sm:text-base md:text-lg
          "
        >
          {label}
        </span>
        <Image
          src="/svgs/receipt.svg"
          alt="Receipt"
          width={96}
          height={96}
          className="w-6 h-6 max-[415px]:w-5 max-[415px]:h-5 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-[72px] lg:h-[72px]"
          priority
        />
      </GradientBorder>
    </div>
  );
}
