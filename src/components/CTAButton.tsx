import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "ghost";

interface Props extends ComponentPropsWithoutRef<"a"> {
  variant?: Variant;
}

export function CTAButton({ variant = "primary", className = "", children, ...rest }: Props) {
  const base =
    "group inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-xs uppercase tracking-[0.25em] transition-all duration-300";
  const styles =
    variant === "primary"
      ? "bg-gold text-ink hover:bg-gold-soft hover:shadow-[0_10px_40px_-10px_var(--gold)]"
      : "border border-border text-foreground hover:border-gold hover:text-gold";
  return (
    <a className={`${base} ${styles} ${className}`} {...rest}>
      {children}
      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}
