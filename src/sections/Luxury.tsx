import { useRef } from "react";
import { SectionTitle } from "../components/SectionTitle";
import { mall, luxuryCategories, luxuryTenants, galleryVideos } from "../data/mallData";
import { motion, useScroll, useTransform } from "framer-motion";

export function Luxury() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  return (
    <section id="luxury" className="relative overflow-hidden border-y border-border bg-ink/40">
      <div className="section-pad mx-auto max-w-[1600px]">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">

          <div className="relative h-[600px] overflow-hidden rounded-xl">
            <motion.div style={{ scale, y }} className="absolute inset-0">
              <video
                autoPlay
                muted
                loop
                playsInline
                poster={mall.images.luxury}
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src="/videos/luxery-brand.mp4" type="video/mp4" />
              </video>

              <img
                src={mall.images.luxury}
                alt="Luxury Wing"
                className="absolute inset-0 h-full w-full object-cover -z-10"
              />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-tr from-ink/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.3em] text-gold">
              The Luxury Wing · 4 Categories
            </div>
          </div>
          <div>
            <SectionTitle
              eyebrow="Luxury"
              title="Elevated. Curated. Quietly dominant."
              subtitle="Heritage maisons paired with modern flagship concepts — service, adjacency, and presentation all align with category leaders."
            />
          </div>
        </div>

        {/* Luxury category cards */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {luxuryCategories.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="group rounded-xl border border-border bg-card/60 p-6 transition hover:border-gold/60"
            >
              <div className="font-display text-2xl gold-text">{c.name}</div>
              <div className="mt-4 space-y-2 border-t border-border pt-4 text-sm">
                {c.anchors.map((a) => (
                  <div key={a} className="flex items-center gap-2 text-foreground/85">
                    <span className="h-px w-3 bg-gold/60" />
                    {a}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Luxury logo placeholders */}
        <div className="mt-16">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Maisons On-Property</div>
          <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3 lg:grid-cols-6">
            {luxuryTenants.map((t) => (
              <div
                key={t}
                className="flex aspect-[5/3] items-center justify-center bg-card/80 px-4 transition hover:bg-card"
              >
                <span className="font-display text-lg tracking-wide text-foreground/90">{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Video gallery — luxury cinemagraphs */}
        <div className="mt-20">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Cinemagraphs</div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {galleryVideos.slice(0, 3).map((g, i) => (
              <motion.button
                key={g.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group relative aspect-[16/10] overflow-hidden rounded-xl border border-border"
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
                <div className="absolute bottom-4 left-4 right-4 font-display text-lg">{g.title}</div>
              </motion.button>
            ))}
          </div>
        </div>

        <p className="mt-12 text-sm leading-relaxed text-muted-foreground">
          Flagship build-outs available · Custom storefront approvals · Concierge-level tenant services.
        </p>
      </div>
    </section>
  );
}
