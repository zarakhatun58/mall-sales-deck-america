import { mall, heroStats } from "../data/mallData";
import { CTAButton } from "../components/CTAButton";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useCountUp } from "../hooks/useCountUp";

export function HeroStat({ value, label, delay }: { value: string; label: string; delay: number }) {
  const { ref, display } = useCountUp(value, 2200);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className="bg-ink/70 p-6 backdrop-blur-md"
    >
      <div className="font-display text-3xl gold-text md:text-4xl tabular-nums">{display}</div>
      <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </div>
    </motion.div>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-screen items-end overflow-hidden">
      {/* Background video w/ image poster fallback */}
      <motion.div style={{ scale, y }} className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={mall.images.hero}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/mall-hero.mp4" type="video/mp4" />
        </video>
        <img
          src={mall.images.hero}
          alt="Mall of America at twilight"
          className="absolute inset-0 h-full w-full object-cover -z-10"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-transparent" />

      <motion.div style={{ opacity }} className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-20 pt-40 lg:px-12 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-gold"
        >
          <span className="h-px w-10 bg-gold" />
          {mall.location}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-5xl font-display text-[clamp(2.75rem,7vw,7rem)] leading-[0.95] text-foreground"
        >
          More than a mall.
          <br />
          <span className="gold-text italic">A city under one roof.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground"
        >
          The largest shopping & entertainment destination in North America —
          drawing 40 million visitors a year through retail, dining, live events,
          and the only indoor theme park of its scale on the continent.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <CTAButton href="#why">Explore the Property</CTAButton>
          <CTAButton href="#cta" variant="ghost">Talk to Leasing</CTAButton>
        </motion.div>

        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-4">
          {heroStats.map((s, i) => (
            <HeroStat key={s.label} value={s.value} label={s.label} delay={0.9 + i * 0.12} />
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.5, duration: 1 }, y: { repeat: Infinity, duration: 2, delay: 1.5 } }}
        className="absolute bottom-6 right-6 z-10 hidden items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground lg:flex"
      >
        <span className="h-px w-8 bg-muted-foreground/60" />
        Scroll
      </motion.div>
    </section>
  );
}
