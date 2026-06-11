interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionTitle({ eyebrow, title, subtitle, align = "left" }: Props) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignment} animate-fade-up`}>
      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-gold">
        <span className="h-px w-10 bg-gold/60" />
        {eyebrow}
      </div>
      <h2 className="mt-5 font-display text-4xl leading-[1.05] text-foreground md:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
