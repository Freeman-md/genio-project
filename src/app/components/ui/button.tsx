import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonStyles = cva(
  "inline-flex items-center justify-center rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 cursor-pointer",
  {
    variants: {
      variant: {
        "solid-white":
          "text-black shadow-sm bg-[linear-gradient(to_bottom,rgba(255,255,255,1)_0%,rgba(230,230,230,1)_100%)] hover:bg-[linear-gradient(to_bottom,rgba(255,255,255,0.9)_0%,rgba(220,220,220,0.9)_100%)]",
        "solid-muted": "bg-muted text-foreground hover:bg-muted/90",
        "outline-white":
          "border border-white text-foreground hover:bg-white/10",
      },
      size: {
        sm: "px-4 py-1",
        md: "px-5 py-2.5 text-base",
        lg: "px-6 py-3 text-lg",
      },
    },
    defaultVariants: {
      variant: "solid-white",
      size: "sm",
    },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyles>;

export default function Button({
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonStyles({ variant, size }), className)}
      {...props}
    />
  );
}
