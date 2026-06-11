import { useRef } from "react";
import { SectionTitle } from "../components/SectionTitle";
import { mall, retailCategories, partnerLogos, galleryVideos } from "../data/mallData";
import { motion, useScroll, useTransform } from "framer-motion";

export function Retail() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  return (
     <section id="retail" className="section-pad relative overflow-hidden">
      <div className="mx-auto max-w-[1600px]">
        <SectionTitle
          eyebrow="Retail"
          title="Where category leaders meet flagship ambition."
          subtitle="520+ brands across 6 verticals — the broadest retail mix of any single property in North America."
        />

        {/* Category cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {retailCategories.map((c, i) => (
            <motion.article
              key={c.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group rounded-xl border border-border bg-card/60 p-6 transition hover:border-gold/60 hover:bg-card"
            >
              <div className="flex items-baseline justify-between">
                <div className="text-xs uppercase tracking-[0.3em] text-gold">{c.name}</div>
                <div className="font-display text-3xl gold-text">{c.count}</div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.anchors.map((a) => (
                  <span
                    key={a}
                    className="rounded-full border border-border bg-ink/40 px-3 py-1 text-xs text-foreground/85"
                  >
                    {a}
                  </span>
                ))}
              </div>
              <div className="mt-5 h-1 overflow-hidden rounded-full bg-border">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${Math.min(100, (c.count / 200) * 100)}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.1 + i * 0.05 }}
                  className="h-full bg-gradient-to-r from-gold to-gold-soft"
                />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Store logos placeholders grid */}
        <div className="mt-16">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Featured Tenants</div>
          <div className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4 lg:grid-cols-6">
            {partnerLogos.map((logo, i) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="flex aspect-[3/2] items-center justify-center bg-card/80 transition hover:bg-card"
              >
                <span className="font-display text-lg text-foreground/75 transition group-hover:text-gold">
                  {logo}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Video gallery panels */}
        <div className="mt-20">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Inside the Floors</div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {galleryVideos.map((g, i) => (
              <motion.button
                key={g.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-border"
              >
                <img
                  src={g.thumb}
                  alt={g.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/60 bg-ink/50 text-gold backdrop-blur transition group-hover:scale-110 group-hover:bg-gold group-hover:text-ink">
                    ▶
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="font-display text-lg">{g.title}</div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Hero retail image */}
        <div className="mt-20 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="relative h-[520px] overflow-hidden rounded-xl">
            <motion.div style={{ scale, y }} className="absolute inset-0">
              <video
                autoPlay
                muted
                loop
                playsInline
                poster={mall.images.retail}
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src="/videos/retail-shop.mp4" type="video/mp4" />
              </video>

              <img
                src={mall.images.retail}
                alt="Dining"
                className="absolute inset-0 h-full w-full object-cover -z-10"
              />
            </motion.div>
            
            <div className="absolute inset-0 bg-gradient-to-tr from-ink/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.3em] text-gold">
              520+ Brands · 4 Levels
            </div>
          </div>
          <div className="grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-border bg-border">
            {[
              { v: "92%", l: "Occupancy" },
              { v: "$925", l: "Sales / sq ft" },
              { v: "4 lvl", l: "Vertical retail" },
            ].map((s) => (
              <div key={s.l} className="bg-card p-5">
                <div className="font-display text-2xl gold-text">{s.v}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mt-24 overflow-hidden border-y border-border bg-card/40 py-6">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap text-2xl font-display text-muted-foreground/60">
          {[...partnerLogos, ...partnerLogos].map((logo, i) => (
            <span key={i} className="flex items-center gap-12">
              {logo}
              <span className="text-gold/40">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
