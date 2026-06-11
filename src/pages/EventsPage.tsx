
import { Navbar } from "../components/Navbar";
import { SectionTitle } from "../components/SectionTitle";
import { CTAButton } from "../components/CTAButton";
import { mall, events, venueCapacities, pastEvents } from "../data/mallData";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useRef, useState, type FormEvent } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { eventsSchema, submitInquiry } from "../data/inquiries";
import { toast } from "sonner";


const venues = [
    {
        name: "The Rotunda",
        type: "Centerpiece Stage",
        spec: ["7,000 capacity", "Live broadcast-ready", "4 levels of sightlines"],
        use: "Concerts · album signings · live TV broadcasts.",
    },
    {
        name: "Huntington Bank Stage",
        type: "North Atrium",
        spec: ["1,200 capacity", "Audio + LED wall integrated", "Daily programming-ready"],
        use: "Brand activations · meet-and-greets · DJ sets.",
    },
    {
        name: "Nickelodeon Universe",
        type: "Park Buyout",
        spec: ["7-acre indoor footprint", "27 rides included", "After-hours private use"],
        use: "Private corporate buyouts · brand experiential takeovers.",
    },
    {
        name: "Full Property Buyout",
        type: "Whole-Mall",
        spec: ["5.6M sq ft", "60+ F&B in-flight", "30,000+ guest capacity"],
        use: "Product launches · galas · global brand reveals.",
    },
];

const past = [
    { brand: "Taylor Swift Album Signing", year: "2014", note: "Largest single-day signing in mall history." },
    { brand: "Marvel Universe LIVE", year: "2023", note: "12-day touring activation across atriums." },
    { brand: "LEGO Masters Live", year: "2022", note: "Brand integration with on-property flagship store." },
    { brand: "NFL Draft Town", year: "2018", note: "Multi-day national broadcast activation." },
];

type FieldErrors = Record<string, string>;

export default function EventsPage() {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errors, setErrors] = useState<FieldErrors>({});
    const [errorMsg, setErrorMsg] = useState("");
    const [refId, setRefId] = useState("");

const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  console.log("Submit clicked");

 const formData = new FormData(e.currentTarget);

const data = Object.fromEntries(
  Array.from(formData)
);

  const parsed = eventsSchema.safeParse(data);

  if (!parsed.success) {
    console.log(parsed.error.flatten());
    toast.error("Please fix the highlighted fields.");
    return;
  }

  console.log("Validation passed", parsed.data);

  try {
    const { id } = await submitInquiry("events", parsed.data);

    console.log("Success", id);
    setRefId(id);
    setStatus("success");
    toast.success("Booking inquiry received.");
  } catch (err) {
    console.error(err);

    setStatus("error");
    toast.error("Submission failed. Please try again.");
  }
};

    const reset = () => {
        setStatus("idle");
        setErrors({});
        setErrorMsg("");
        setRefId("");
    };
    return (
        <>
            <Helmet>
                <title>Events Module · Mall of America Sales Deck</title>

                <meta
                    name="description"
                    content="Concerts, brand activations, conventions, and corporate buyouts. Detailed venue capabilities and booking pathways at Mall of America."
                />

                <meta
                    property="og:title"
                    content="Events Module · Mall of America"
                />

                <meta
                    property="og:description"
                    content="Concerts, activations, conventions — book the platform."
                />
            </Helmet>

            <main className="bg-background text-foreground">
                <Navbar />

                <section className="relative min-h-[70vh] overflow-hidden">
                    <motion.div style={{ scale, y }} className="absolute inset-0">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            poster={mall.images.events}
                            className="absolute inset-0 h-full w-full object-cover"
                        >
                            <source src="/videos/events.mp4" type="video/mp4" />
                        </video>

                        <img
                            src={mall.images.events}
                            alt="Dining"
                            className="absolute inset-0 h-full w-full object-cover -z-10"
                        />
                    </motion.div>

                    <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/60 to-ink" />
                    <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-[1600px] flex-col justify-end px-6 pb-16 pt-40 lg:px-12">
                        <Link
                            to="/"
                            className="text-xs uppercase tracking-[0.3em] text-gold hover:text-gold-soft"
                        >
                            ← Back to Overview
                        </Link>
                        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.98] md:text-8xl animate-fade-up">
                            Events <span className="gold-text italic">Module.</span>
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground animate-fade-up [animation-delay:200ms] [animation-fill-mode:both]">
                            Four distinct venue types. One operating team. From a 1,200-cap activation
                            to a 30,000-guest property buyout — pre-built playbooks for every scale.
                        </p>
                    </div>
                </section>

                <section className="section-pad">
                    <div className="mx-auto max-w-[1600px]">
                        <SectionTitle
                            eyebrow="Venue Inventory"
                            title="Choose the footprint. We handle the rest."
                        />
                        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
                            {venues.map((v, i) => (
                                <article key={v.name} className="group bg-card p-8 transition hover:bg-card/40">
                                    <div className="flex items-baseline justify-between">
                                        <div>
                                            <div className="text-xs uppercase tracking-[0.3em] text-gold">{v.type}</div>
                                            <h3 className="mt-3 font-display text-3xl">{v.name}</h3>
                                        </div>
                                        <div className="font-display text-xl text-gold/60">0{i + 1}</div>
                                    </div>
                                    <ul className="mt-6 grid gap-2 border-t border-border pt-5 text-sm text-muted-foreground">
                                        {v.spec.map((s) => (
                                            <li key={s} className="flex items-center gap-2">
                                                <span className="h-px w-4 bg-gold/60" />
                                                {s}
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="mt-6 text-sm italic text-foreground/80">{v.use}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="section-pad border-t border-border bg-card/30">
                    <div className="mx-auto max-w-[1600px]">
                        <SectionTitle
                            eyebrow="Past Activations"
                            title="The platform brands have already chosen."
                        />
                        <div className="mt-12 divide-y divide-border border-y border-border">
                            {past.map((p) => (
                                <div key={p.brand} className="grid grid-cols-[auto_1fr_auto] items-center gap-6 py-6 transition hover:bg-card/40 hover:px-4">
                                    <div className="font-display text-2xl text-gold">{p.year}</div>
                                    <div>
                                        <div className="font-display text-2xl text-foreground">{p.brand}</div>
                                        <div className="mt-1 text-sm text-muted-foreground">{p.note}</div>
                                    </div>
                                    <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Case study →</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="section-pad">
                    <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-2 lg:items-center">
                        <div>
                            <SectionTitle
                                eyebrow="Book a Venue"
                                title="Tell us the scale. We'll send a tailored playbook within 48 hours."
                                subtitle="Specs · pricing tiers · turnkey production partners · sample run-of-show."
                            />
                            <div className="mt-10 flex flex-wrap gap-4">
                                <CTAButton href="mailto:events@mallofamerica.com">Email Events Team</CTAButton>
                                <CTAButton href="/" variant="ghost">Back to Deck</CTAButton>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border">
                            {events.map((e) => (
                                <div key={e.title} className="bg-card p-6">
                                    <div className="text-[10px] uppercase tracking-[0.25em] text-gold">{e.capacity}</div>
                                    <div className="mt-3 font-display text-lg">{e.title}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="section-pad">
                    <div className="mx-auto max-w-[1600px]">
                        <SectionTitle eyebrow="Venue Capacities" title="Choose the footprint." />
                        <div className="mt-12 overflow-hidden rounded-xl border border-border">
                            <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-4 border-b border-border bg-card/60 px-6 py-4 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                                <div>Venue</div>
                                <div>Type</div>
                                <div className="text-right">Sq Ft</div>
                                <div className="text-right">Capacity</div>
                            </div>
                            {venueCapacities.map((v, i) => (
                                <motion.div
                                    key={v.venue}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.06 }}
                                    className="grid grid-cols-[2fr_1fr_1fr_1fr] items-center gap-4 border-b border-border px-6 py-5 transition hover:bg-card/60"
                                >
                                    <div className="font-display text-xl">{v.venue}</div>
                                    <div className="text-xs uppercase tracking-[0.2em] text-gold">{v.type}</div>
                                    <div className="text-right font-display text-lg text-foreground/85">{v.sqft.toLocaleString()}</div>
                                    <div className="text-right font-display text-lg gold-text">{v.capacity.toLocaleString()}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Past events gallery */}
                <section className="section-pad border-t border-border bg-card/30">
                    <div className="mx-auto max-w-[1600px]">
                        <SectionTitle eyebrow="Past Events" title="The platform brands have already chosen." />
                        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {pastEvents.map((p, i) => (
                                <motion.article
                                    key={p.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.06 }}
                                    className="group relative overflow-hidden rounded-xl border border-border bg-card/60"
                                >
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <img
                                            src={mall.images.events}
                                            alt={p.title}
                                            className="h-full w-full object-cover opacity-60 transition duration-700 group-hover:scale-105 group-hover:opacity-80"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                                        <div className="absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-gold backdrop-blur">
                                            {p.tag}
                                        </div>
                                        <div className="absolute right-4 top-4 font-display text-2xl text-gold-soft">{p.year}</div>
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <div className="font-display text-xl">{p.title}</div>
                                            <div className="mt-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                                                {p.attendees} attendees
                                            </div>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    </div>
                </section>
                {/* Inquiry form */}
                <section id="inquire" className="section-pad border-t border-border">
                    <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
                        <div>
                            <SectionTitle
                                eyebrow="Booking Inquiry"
                                title="Tell us the scale. We'll send a tailored playbook within 48 hours."
                                subtitle="Specs · pricing tiers · turnkey production partners · sample run-of-show."
                            />
                            <div className="mt-8 flex flex-wrap gap-4">
                                <CTAButton href="mailto:events@mallofamerica.com">Email Events Team</CTAButton>
                                <CTAButton href="/" variant="ghost">Back to Deck</CTAButton>
                            </div>
                        </div>

                        <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-border bg-card/60 p-8">
                            {status === "success" ? (
                                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
                                    <div className="font-display text-3xl gold-text">Inquiry received.</div>
                                    <p className="mt-3 text-muted-foreground">An events producer will reach out within one business day.</p>
                                    <p className="mt-4 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                                        Reference · <span className="text-gold">{refId}</span>
                                    </p>
                                    <button
                                        type="button"
                                        onClick={reset}
                                        className="mt-6 text-xs uppercase tracking-[0.25em] text-muted-foreground underline-offset-4 hover:text-gold hover:underline"
                                    >
                                        Submit another inquiry
                                    </button>
                                </motion.div>
                            ) : (
                                <div className="grid gap-5">
                                    {status === "error" && (
                                        <div role="alert" className="rounded-md border border-destructive/50 bg-destructive/10 p-3 text-sm text-destructive">
                                            {errorMsg || "Submission failed. Please try again."}
                                        </div>
                                    )}
                                    <div className="grid grid-cols-2 gap-4">
                                        <Field label="Full name" name="name" error={errors.name} />
                                        <Field label="Company / Brand" name="company" error={errors.company} />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <Field label="Email" name="email" type="email" error={errors.email} />
                                        <Field label="Phone" name="phone" type="tel" error={errors.phone} />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <Select label="Venue" name="venue" options={venueCapacities.map((v) => v.venue)} error={errors.venue} />
                                        <Select label="Event type" name="type" options={["Concert", "Brand Activation", "Convention", "Private / Corporate", "Product Launch"]} error={errors.type} />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <Field label="Preferred date" name="date" type="date" error={errors.date} />
                                        <Field label="Expected attendees" name="attendees" type="number" error={errors.attendees} />
                                    </div>
                                    <div>
                                        <label className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Goal / notes</label>
                                        <textarea
                                            name="notes"
                                            rows={3}
                                            placeholder="What are you launching, celebrating, or activating?"
                                            aria-invalid={!!errors.notes}
                                            className={`mt-2 w-full rounded-md border bg-ink/40 p-3 text-sm text-foreground focus:outline-none ${errors.notes ? "border-destructive focus:border-destructive" : "border-border focus:border-gold"}`}
                                        />
                                        {errors.notes && <p className="mt-1 text-xs text-destructive">{errors.notes}</p>}
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={status === "submitting"}
                                        className="mt-2 inline-flex items-center justify-center gap-3 rounded-full bg-gold px-7 py-3.5 text-xs uppercase tracking-[0.25em] text-ink transition hover:bg-gold-soft disabled:cursor-not-allowed disabled:opacity-60"
                                    >
                                        {status === "submitting" ? "Submitting…" : "Submit Booking Inquiry →"}
                                    </button>
                                </div>
                            )}
                        </form>
                    </div>
                </section>
            </main>
        </>
    );
}

function Field({ label, name, type = "text", error }: { label: string; name: string; type?: string; error?: string }) {
    return (
        <div>
            <label className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}</label>
            <input
                name={name}
                type={type}
                aria-invalid={!!error}
                className={`mt-2 w-full rounded-md border bg-ink/40 p-3 text-sm text-foreground focus:outline-none ${error ? "border-destructive focus:border-destructive" : "border-border focus:border-gold"}`}
            />
            {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
        </div>
    );
}

function Select({ label, name, options, error }: { label: string; name: string; options: string[]; error?: string }) {
    return (
        <div>
            <label className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}</label>
            <select
                name={name}
                defaultValue=""
                aria-invalid={!!error}
                className={`mt-2 w-full rounded-md border bg-ink/40 p-3 text-sm text-foreground focus:outline-none ${error ? "border-destructive focus:border-destructive" : "border-border focus:border-gold"}`}
            >
                <option value="" disabled>Select…</option>
                {options.map((o) => (
                    <option key={o} value={o}>{o}</option>
                ))}
            </select>
            {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
        </div>
    );
}
