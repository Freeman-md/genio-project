import type { PropsWithChildren } from "react";

type GradientBorderProps = PropsWithChildren<{
  radius?: string;
  className?: string;
  innerClassName?: string;
  gradientClassName?: string;
}>;

export default function GradientBorder({
  children,
  radius = "rounded-[28px]",
  className = "",
  innerClassName = "",
  gradientClassName = "bg-[linear-gradient(180deg,rgba(150,34,122,0.75)_0%,rgba(171,91,154,0.75)_46%,rgba(192,146,171,0.75)_100%)]",
}: GradientBorderProps) {
  return (
    <div className={["relative p-[1px]", radius, gradientClassName, className].join(" ")}>
      <div className={[radius, innerClassName].join(" ")}>{children}</div>
    </div>
  );
}
