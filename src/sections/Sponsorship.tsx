import { motion } from "framer-motion";
import { SectionTitle } from "../components/SectionTitle";
import { mall } from "../data/mallData";
import { CTAButton } from "../components/CTAButton";

const tiers = [
  {
    name: "Property Naming",
    spend: "$25M+ / 10yr",
    reach: "40M annual impressions",
    perks: ["Exterior signage", "Atrium naming rights", "Year-round category exclusivity"],
  },
  {
    name: "Anchor Partner",
    spend: "$5M – $15M",
    reach: "12M+ branded touchpoints",
    perks: ["Atrium takeover slot", "Co-branded events", "Digital network priority"],
  },
  {
    name: "Activation Partner",
    spend: "$250K – $2M",
    reach: "500K – 4M direct guests",
    perks: ["Pop-up footprint", "Sampling rights", "Social co-marketing"],
  },
];

const audience = [
  { k: "Avg HHI", v: "$92K" },
  { k: "Median age", v: "34" },
  { k: "Dwell time", v: "3h 42m" },
  { k: "Repeat visit rate", v: "67%" },
];

export function Sponsorship() {
  
  return (
    <section id="sponsorship" className="relative overflow-hidden">
      <div className="section-pad relative border-t border-border">
        <div className="mx-auto max-w-[1600px]">
          <SectionTitle
            eyebrow="Sponsorship"
            title="Buy a category. Own a generation."
            subtitle="Mall of America is one of the few brand environments in America that combines arena-scale audiences with retail-grade dwell time. Sponsors don't get impressions — they get behavior."
          />

          <div className="mt-16 grid gap-4 lg:grid-cols-4">
            {audience.map((a, i) => (
              <motion.div
                key={a.k}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="rounded-lg border border-border bg-card/60 p-6"
              >
                <div className="text-xs uppercase tracking-[0.3em] text-gold">{a.k}</div>
                <div className="mt-3 font-display text-4xl gold-text">{a.v}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-border bg-border lg:grid-cols-3">
            {tiers.map((t, i) => (
              <motion.article
                key={t.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="relative bg-card p-8"
              >
                <div className="text-xs uppercase tracking-[0.3em] text-gold">Tier {i + 1}</div>
                <h3 className="mt-4 font-display text-3xl">{t.name}</h3>
                <div className="mt-5 border-t border-border pt-5">
                  <div className="font-display text-2xl gold-text">{t.spend}</div>
                  <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{t.reach}</div>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-foreground/80">
                  {t.perks.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-2 h-px w-3 shrink-0 bg-gold/60" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
            <p className="max-w-xl text-sm text-muted-foreground">
              Custom packages built around your category, region, and KPI. Decks delivered in 72 hours.
            </p>
            <CTAButton href="mailto:sponsorship@mallofamerica.com">Request Sponsorship Deck</CTAButton>
          </div>
        </div>
        <img
          src={mall.images.luxury}
          alt=""
          aria-hidden
          className="pointer-events-none absolute right-0 top-0 h-full w-1/3 object-cover opacity-10 mix-blend-luminosity"
        />
            <motion.div className="absolute inset-0">
              <video
                autoPlay
                muted
                loop
                playsInline
                poster={mall.images.luxury}
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src="/videos/sponsorship.mp4" type="video/mp4" />
              </video>

              <img
                src={mall.images.luxury}
                alt="Dining"
                className="absolute inset-0 h-full w-full object-cover -z-10"
              />
            </motion.div>
      </div>
      
    </section>
  );
}

