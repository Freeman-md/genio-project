import type { PropsWithChildren, HTMLAttributes, CSSProperties } from "react";

type GradientBorderProps = PropsWithChildren<{
  radius?: string;
  className?: string;
  innerClassName?: string;
  ringSize?: string;
}> & HTMLAttributes<HTMLDivElement>;

export default function GradientBorder({
  children,
  radius = "rounded-[28px]",
  className = "",
  innerClassName = "",
  ringSize = "1px",
  ...rest
}: GradientBorderProps) {
  return (
    <div
      className={["gradient-ring", radius, className].join(" ")}
      style={{ ["--ring-size"]: ringSize } as CSSProperties}
      {...rest}
    >
      <div className={[radius, innerClassName].join(" ")}>
        {children}
      </div>
    </div>
  );
}
