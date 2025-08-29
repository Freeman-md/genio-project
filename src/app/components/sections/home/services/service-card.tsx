"use client";
import Image from "next/image";
import GradientBorder from "@/app/components/ui/gradient-border";

function ServiceCard({
  label,
}: {
  label: string;
}) {
  return (
    <div className="relative group cursor-pointer">
      

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

export default ServiceCard;
