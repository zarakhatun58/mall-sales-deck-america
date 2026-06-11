
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const links = [
  { href: "#why", label: "Why" },
  { href: "#retail", label: "Retail" },
  { href: "#luxury", label: "Luxury" },
  { href: "#dining", label: "Dining" },
  { href: "#entertainment", label: "Entertainment" },
  { href: "#events", label: "Events" },
   { href: "#sponsorship", label: "Sponsorship" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 lg:px-12">
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="block h-2 w-2 rounded-full bg-gold shadow-[0_0_18px_var(--gold)]" />
          <span className="font-display text-lg tracking-wide text-foreground">
            Mall of America<span className="text-gold">.</span>
          </span>
        </Link>
        <ul className="hidden items-center gap-7 text-xs uppercase tracking-[0.18em] text-muted-foreground lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="transition-colors duration-300 hover:text-gold"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <Link
              to="/events"
              className="transition-colors duration-300 hover:text-gold"
            >
              Events Module
            </Link>
          </li>
        </ul>
        <a
          href="#cta"
          className="rounded-full border border-gold/40 px-4 py-2 text-xs uppercase tracking-[0.2em] text-gold transition hover:bg-gold hover:text-ink"
        >
          Inquire
        </a>
      </nav>
    </header>
  );
}
