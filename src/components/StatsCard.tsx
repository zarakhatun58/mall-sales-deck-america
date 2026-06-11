type Props = {
  value: string;
  label: string;
  note: string;
  index: number;
};

export function StatsCard({ value, label, note }: Props) {
  return (
    <div className="group relative overflow-hidden rounded-lg border border-border bg-card/60 p-7 backdrop-blur-sm transition-all duration-500 hover:border-gold/60 hover:bg-card">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="font-display text-5xl gold-text md:text-6xl">{value}</div>
      <div className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </div>
      {note && (
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground/90">{note}</p>
      )}
    </div>
  );
}
