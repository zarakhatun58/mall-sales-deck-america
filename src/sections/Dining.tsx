import { useRef } from "react";
import { SectionTitle } from "../components/SectionTitle";
import { mall, diningHighlights } from "../data/mallData";
import { motion, useScroll, useTransform } from "framer-motion";

export function Dining() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  return (
    <section id="dining" className="section-pad relative">
      <div className="mx-auto max-w-[1600px]">
        <SectionTitle
          eyebrow="Dining & Lifestyle"
          title="Food as the reason to come — not the afterthought."
          subtitle="60+ restaurants, bars, and lifestyle concepts. Average visit duration: 3.5 hours. Dining is the dwell-time engine."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="relative h-[520px] overflow-hidden rounded-xl">
            <motion.div style={{ scale, y }} className="absolute inset-0">
              <video
                autoPlay
                muted
                loop
                playsInline
                poster={mall.images.dining}
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src="/videos/dining.mp4" type="video/mp4" />
              </video>

              <img
                src={mall.images.dining}
                alt="Dining"
                className="absolute inset-0 h-full w-full object-cover -z-10"
              />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <div className="text-xs uppercase tracking-[0.3em] text-gold">Featured</div>
              <div className="mt-2 font-display text-3xl">Crave · FireLake · Twin City Grill</div>
            </div>
          </div>

          <ul className="grid gap-px overflow-hidden rounded-lg border border-border bg-border">
            {diningHighlights.map((d) => (
              <li key={d.name} className="group flex items-center justify-between bg-card p-5 transition hover:bg-card/40">
                <div>
                  <div className="font-display text-xl text-foreground">{d.name}</div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{d.type}</div>
                </div>
                <div className="text-right text-xs text-gold/80">{d.note}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
