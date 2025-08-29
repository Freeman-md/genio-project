"use client";

import Image from "next/image";
import GradientBorder from "@/app/components/ui/gradient-border";
import ServiceCard from "./service-card";

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
      className="relative overflow-hidden !-mt-40 pb-14 sm:pb-16 md:pb-20 lg:pb-24"
    >
      <div className="container relative">
        <div className="relative grid grid-cols-[1.5fr_9fr_1.5fr] items-center">
          {/* LEFT SERVICES */}
          <div className="flex flex-col gap-6 sm:gap-8 md:gap-12 lg:gap-40">
            {leftItems.map((service) => (
              <ServiceCard key={service.id} label={service.label} side="left" />
            ))}
          </div>

          <div className="relative isolate mx-auto w-full flex justify-center items-center">
            <div
              className="
                absolute inset-0
                grid grid-cols-2 grid-rows-[6.5fr_1fr_6.5fr]
                pointer-events-none
                -z-10
              "
            >
              <div />
              <div />

              <div className="relative col-span-2 flex items-center">
                <div className="relative w-full h-[20px] sm:h-[28px] md:h-[36px] lg:h-[44px] xl:h-[52px] opacity-80">
                  <Image
                    src="/svgs/straight-connector.svg"
                    alt=""
                    fill
                    className="object-cover"
                    priority={false}
                  />
                </div>
              </div>

              <div />
              <div />
            </div>

            <GradientBorder
              radius="rounded-full"
              className="
                relative z-20
                opacity-60 grid place-items-center
                p-6 sm:p-8 md:p-12 lg:p-16
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
                  bg-[radial-gradient(51%_50.91%_at_50%_50%,_#FFFFFF_0%,_rgba(25,25,25,0)_100%)]
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
                      translate-y-2 sm:translate-y-3 lg:translate-y-4 max-[415px]:translate-y-1
                      scale-[1.9] sm:scale-[2.1] lg:scale-[2.3] xl:scale-[2.5]
                      max-[415px]:scale-[1.6]
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

          <div className="flex flex-col gap-6 sm:gap-8 md:gap-12 lg:gap-40">
            {rightItems.map((service) => (
              <ServiceCard
                key={service.id}
                label={service.label}
                side="right"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
