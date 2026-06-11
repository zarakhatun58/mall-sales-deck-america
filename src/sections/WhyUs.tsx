import { SectionTitle } from "../components/SectionTitle";
import { StatsCard } from "../components/StatsCard";
import { whyStats } from "../data/mallData";
import { motion } from 'framer-motion';

const reach = [
  { label: "Within 30 min", pct: 92, note: "1.4M residents" },
  { label: "Within 90 min", pct: 78, note: "6.5M residents" },
  { label: "Within 1 flight", pct: 64, note: "180M U.S. consumers" },
  { label: "International", pct: 38, note: "Direct from 130+ cities via MSP" },
];

export function WhyUs() {
  return (
    <section id="why" className="section-pad relative">
      <div className="mx-auto max-w-[1600px]">
        <SectionTitle
          eyebrow="Why This Property"
          title="A destination engineered for scale."
          subtitle="Mall of America isn't competing with malls. It's competing with theme parks, convention centers, and global tourist landmarks — and it's winning."
        />
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
           {whyStats.map((s, i:number) => (
            <StatsCard key={s.label} {...s} index={i} />
          ))}
        </div>

        {/* Demographics / Reach Map */}
        <div className="mt-20 grid gap-12 border-t border-border pt-16 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Regional Reach</div>
            <h3 className="mt-4 font-display text-3xl md:text-4xl leading-tight">
              One property. <span className="gold-text italic">Continental gravity.</span>
            </h3>
            <p className="mt-5 max-w-xl text-muted-foreground leading-relaxed">
              Bloomington, MN sits at the intersection of the Midwest's largest metropolitan
              corridor and the nation's 7th-busiest international airport — putting half the
              U.S. consumer base inside a 2-hour journey.
            </p>
            <div className="mt-8 space-y-5">
              {reach.map((r, i) => (
                <motion.div
                  key={r.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                >
                  <div className="flex items-baseline justify-between text-sm">
                    <span className="uppercase tracking-[0.2em] text-foreground/80">{r.label}</span>
                    <span className="font-display text-gold">{r.note}</span>
                  </div>
                  <div className="mt-2 h-px w-full bg-border overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${r.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                      className="h-px bg-gold shadow-[0_0_12px_var(--gold)]"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Map visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-square overflow-hidden rounded-lg border border-border bg-gradient-to-br from-card/80 to-ink"
          >
            <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
              <defs>
                <radialGradient id="ring" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.4" />
                  <stop offset="60%" stopColor="var(--gold)" stopOpacity="0.05" />
                  <stop offset="100%" stopColor="var(--gold)" stopOpacity="0" />
                </radialGradient>
              </defs>
              {/* Concentric rings */}
              {[180, 130, 80, 40].map((r, i) => (
                <motion.circle
                  key={r}
                  cx="200" cy="200" r={r}
                  fill="none"
                  stroke="var(--gold)"
                  strokeOpacity={0.18 + i * 0.08}
                  strokeDasharray={i === 3 ? "0" : "2 4"}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.15, duration: 0.8 }}
                  style={{ transformOrigin: "200px 200px" }}
                />
              ))}
              <circle cx="200" cy="200" r="180" fill="url(#ring)" />
              <motion.circle
                cx="200" cy="200" r="6"
                fill="var(--gold)"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, type: "spring" }}
              />
              {/* pulse */}
              <motion.circle
                cx="200" cy="200" r="6"
                fill="none"
                stroke="var(--gold)"
                animate={{ r: [6, 40], opacity: [0.8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              {/* labels */}
              <text x="200" y="60" textAnchor="middle" fill="var(--gold)" fontSize="10" letterSpacing="3">1 FLIGHT</text>
              <text x="200" y="110" textAnchor="middle" fill="var(--gold)" fontSize="10" letterSpacing="3" opacity="0.7">90 MIN</text>
              <text x="200" y="160" textAnchor="middle" fill="var(--gold)" fontSize="10" letterSpacing="3" opacity="0.5">30 MIN</text>
              <text x="200" y="230" textAnchor="middle" fill="oklch(0.97 0.005 80)" fontSize="11" fontFamily="Playfair Display" fontStyle="italic">Bloomington, MN</text>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
