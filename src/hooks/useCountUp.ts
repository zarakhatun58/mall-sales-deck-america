import { useEffect, useRef, useState } from "react";

export function useCountUp(target: string, durationMs = 1800) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [display, setDisplay] = useState(target.replace(/[\d.]+/g, "0"));
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const match = target.match(/([^\d.]*)([\d.]+)(.*)/);
    if (!match) {
      setDisplay(target);
      return;
    }
    const [, prefix, numStr, suffix] = match;
    const end = parseFloat(numStr);
    const decimals = (numStr.split(".")[1]?.length) ?? 0;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (t: number) => {
              const p = Math.min(1, (t - start) / durationMs);
              const eased = 1 - Math.pow(1 - p, 3);
              const v = (end * eased).toFixed(decimals);
              setDisplay(`${prefix}${v}${suffix}`);
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, durationMs]);

  return { ref, display };
}
