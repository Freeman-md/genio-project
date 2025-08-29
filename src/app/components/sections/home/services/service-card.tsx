"use client";
import Image from "next/image";
import GradientBorder from "@/app/components/ui/gradient-border";

function ServiceCard({
  label,
  index,
  side,
}: {
  label: string;
  index: number;
  side: "left" | "right";
}) {
  const isTop = index === 0;
  const isMiddle = index === 1;
  const isBottom = index === 2;

  const connectorSrc = isMiddle
    ? "/svgs/straight-connector.svg"
    : "/svgs/s-shaped-connector.svg";

  let flip = "";
  if (!isMiddle) {
    if (isTop) {
      flip = side === "left" ? "-scale-x-100 top-" : "";
    } else if (isBottom) {
      flip = side === "left" ? "-scale-x-100 -scale-y-100" : "-scale-y-100";
    }
  }

  const horizontalPosition = side === "left" ? "-right-full" : "-left-full";

  return (
    <div className="relative group cursor-pointer">
      <Image
        src={connectorSrc}
        alt="connector"
        width={600}
        height={600}
        className={`absolute ${horizontalPosition} -z-20 object-contain transform transition-all duration-300
    ${
      isMiddle
        ? "top-1/2 -translate-y-1/2"
        : isTop
        ? "top-0 xl:translate-y-1/4"
        : "bottom-0 xl:-translate-y-1/4"
    }
    ${
      isMiddle
        ? "w-[120px] sm:w-[200px] md:w-[280px] lg:w-[360px]"
        : "w-[220px] sm:w-[300px] md:w-[400px] lg:w-[1000px]"
    }
    ${flip}
    ${isMiddle ? "h-[30px] sm:h-[40px]" : "h-[140px] sm:h-[200px]"}
  `}
      />

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
            text-foreground sm:font-semibold
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
