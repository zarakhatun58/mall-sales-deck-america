import { CTAButton } from "../components/CTAButton";

const tracks = [
  {
    title: "Leasing",
    body: "Flagships, mid-tier, F&B, and pop-ups. Concept-to-doors-open in under 12 months.",
    cta: "Start a leasing conversation",
  },
  {
    title: "Sponsorship",
    body: "Property-wide partnerships, naming opportunities, and category exclusivity.",
    cta: "Request the sponsorship deck",
  },
  {
    title: "Events",
    body: "Concerts, brand activations, product launches, conventions, and corporate buyouts.",
    cta: "Book a venue",
  },
];

export function CTA() {
  return (
    <section id="cta" className="section-pad relative border-t border-border">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-gold">
          <span className="h-px w-10 bg-gold" />
          Next Step
        </div>
        <h2 className="mt-5 max-w-4xl font-display text-5xl leading-[1.02] md:text-7xl">
          Three doors in. <span className="gold-text italic">Pick yours.</span>
        </h2>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {tracks.map((t) => (
            <div
              key={t.title}
              className="group flex flex-col justify-between rounded-lg border border-border bg-card/60 p-8 transition hover:border-gold/60 hover:bg-card"
            >
              <div>
                <div className="font-display text-3xl text-foreground">{t.title}</div>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{t.body}</p>
              </div>
              <CTAButton href="mailto:leasing@mallofamerica.com" className="mt-8 self-start" variant="ghost">
                {t.cta}
              </CTAButton>
            </div>
          ))}
        </div>

        <footer className="mt-24 flex flex-wrap items-end justify-between gap-6 border-t border-border pt-10 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <div>© {new Date().getFullYear()} Mall of America · Bloomington, MN</div>
          <div className="text-gold/70">Interactive Sales Deck · v1.0</div>
        </footer>
      </div>
    </section>
  );
}
