import {  Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Navbar } from "../components/Navbar";
import { SectionTitle } from "../components/SectionTitle";
import { CTAButton } from "../components/CTAButton";
import { sponsorshipSchema, submitInquiry } from "../data/inquiries";
import {
    mall,
    sponsorshipTiers,
    audienceRegions,
    heatmapGrid,
    heatmapZones,
} from "../data/mallData";
import { Helmet } from "react-helmet-async";


const caseStudies = [
    { brand: "Coca-Cola", spend: "$8M / 3yr", outcome: "+18% regional category share lift across 90-day measurement window." },
    { brand: "Samsung Galaxy Launch", spend: "$1.2M", outcome: "240K product trials. 38M earned media impressions." },
    { brand: "Toyota Future Mobility", spend: "$3.4M / 12mo", outcome: "Naming integration in Nickelodeon Universe — 6.8M family touchpoints." },
    { brand: "Delta One Lounge Pop-up", spend: "$650K", outcome: "92% positive sentiment; 14K SkyMiles sign-ups in 30 days." },
];

function intensityColor(v: number) {
    // 0-100 -> oklch warm scale
    const a = Math.max(0.06, Math.min(0.85, v / 110));
    return `oklch(0.82 0.14 80 / ${a})`;
}

type FieldErrors = Record<string, string>;

export function SponsorshipPage() {
    const [hover, setHover] = useState<{ x: number; y: number; v: number } | null>(null);
    const [selectedRegion, setSelectedRegion] = useState(audienceRegions[0]);
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errors, setErrors] = useState<FieldErrors>({});
    const [errorMsg, setErrorMsg] = useState("");
    const [refId, setRefId] = useState("");

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget).entries());
        const parsed = sponsorshipSchema.safeParse(data);
        if (!parsed.success) {
            const fe: FieldErrors = {};
            for (const issue of parsed.error.issues) {
                const key = issue.path[0]?.toString() ?? "_";
                if (!fe[key]) fe[key] = issue.message;
            }
            setErrors(fe);
            toast.error("Please fix the highlighted fields.");
            return;
        }
        setErrors({});
        setStatus("submitting");
        try {
            const { id } = await submitInquiry("sponsorship", parsed.data);
            setRefId(id);
            setStatus("success");
            toast.success("Partnership request received.");
        } catch (err) {
            setStatus("error");
            setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
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
                <title>Sponsorship · Mall of America</title>

                <meta
                    name="description"
                    content="Three partnership tiers. 40M visitor reach. Request a tailored sponsorship deck."
                />

                <meta
                    property="og:title"
                    content="Sponsorship · Mall of America"
                />

                <meta
                    property="og:description"
                    content="Buy a category. Own a generation."
                />
            </Helmet>

            <main className="bg-background text-foreground">
                <Navbar />

                {/* Hero */}
                <section className="relative min-h-[70vh] overflow-hidden">
                    <img src={mall.images.luxury} alt="" className="absolute inset-0 h-full w-full object-cover opacity-50" />
                    <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/60 to-ink" />
                    <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-[1600px] flex-col justify-end px-6 pb-16 pt-40 lg:px-12">
                        <Link to="/" className="text-xs uppercase tracking-[0.3em] text-gold hover:text-gold-soft">
                            ← Back to Overview
                        </Link>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="mt-6 max-w-4xl font-display text-5xl leading-[0.98] md:text-8xl"
                        >
                            Sponsorship <span className="gold-text italic">Module.</span>
                        </motion.h1>
                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                            Property-wide partnerships, category exclusivity, and branded environments
                            seen by 40M+ visitors a year. Choose a tier. Own a moment.
                        </p>
                        <div className="mt-8">
                            <a href="#deck" className="inline-flex items-center gap-3 rounded-full bg-gold px-7 py-3.5 text-xs uppercase tracking-[0.25em] text-ink transition hover:bg-gold-soft hover:shadow-[0_10px_40px_-10px_var(--gold)]">
                                Request a Partnership Deck <span aria-hidden>→</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* 3 Tier packages */}
                <section className="section-pad">
                    <div className="mx-auto max-w-[1600px]">
                        <SectionTitle eyebrow="Partnership Tiers" title="Three ways to own the property." />
                        <div className="mt-14 grid gap-6 lg:grid-cols-3">
                            {sponsorshipTiers.map((t: any, i: any) => (
                                <motion.div
                                    key={t.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.6 }}
                                    className={`relative overflow-hidden rounded-2xl border p-8 ${t.featured
                                            ? "border-gold/60 bg-gradient-to-b from-gold/10 to-card shadow-[0_30px_80px_-40px_var(--gold)]"
                                            : "border-border bg-card/60"
                                        }`}
                                >
                                    {t.featured && (
                                        <div className="absolute right-4 top-4 rounded-full bg-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-ink">
                                            Most chosen
                                        </div>
                                    )}
                                    <div className="text-xs uppercase tracking-[0.3em] text-gold">{t.duration}</div>
                                    <h3 className="mt-3 font-display text-4xl">{t.name}</h3>
                                    <div className="mt-2 font-display text-3xl gold-text">{t.price}</div>
                                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.blurb}</p>
                                    <ul className="mt-6 space-y-3 border-t border-border pt-6 text-sm">
                                        {t.includes.map((inc: any) => (
                                            <li key={inc} className="flex items-start gap-3">
                                                <span className="mt-2 h-px w-4 shrink-0 bg-gold/70" />
                                                <span className="text-foreground/85">{inc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
                                        <div>
                                            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Annualized reach</div>
                                            <div className="font-display text-xl text-gold">{t.reach}</div>
                                        </div>
                                        <a href="#deck" className="text-xs uppercase tracking-[0.25em] text-foreground/80 hover:text-gold">
                                            Select →
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Audience reach visualizations */}
                <section className="section-pad border-t border-border bg-card/30">
                    <div className="mx-auto max-w-[1600px]">
                        <SectionTitle
                            eyebrow="Audience Reach"
                            title="Who you're really buying."
                            subtitle="40M+ annual visitors, mapped by origin, income, and on-property foot-traffic density."
                        />

                        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
                            {/* Demographic drilldown */}
                            <div className="rounded-xl border border-border bg-card/60 p-6">
                                <div className="flex items-center justify-between">
                                    <div className="text-xs uppercase tracking-[0.3em] text-gold">Regional Drilldown</div>
                                    <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Click a region</div>
                                </div>

                                <div className="mt-6 grid grid-cols-4 gap-2">
                                    {audienceRegions.map((r: any) => {
                                        const active = selectedRegion.code === r.code;
                                        const intensity = Math.min(1, r.share / 40);
                                        return (
                                            <button
                                                key={r.code}
                                                onClick={() => setSelectedRegion(r)}
                                                className={`group relative overflow-hidden rounded-lg border p-4 text-left transition ${active ? "border-gold bg-gold/10" : "border-border hover:border-gold/60"
                                                    }`}
                                                style={{ background: active ? undefined : `linear-gradient(135deg, oklch(0.82 0.14 80 / ${intensity * 0.35}), transparent)` }}
                                            >
                                                <div className="font-display text-lg">{r.code}</div>
                                                <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                                                    {r.share}%
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>

                                <motion.div
                                    key={selectedRegion.code}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-6 rounded-lg border border-border bg-ink/40 p-5"
                                >
                                    <div className="text-xs uppercase tracking-[0.25em] text-gold">{selectedRegion.code}</div>
                                    <div className="mt-2 font-display text-2xl">{selectedRegion.name}</div>
                                    <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                                        <div>
                                            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Visitors</div>
                                            <div className="mt-1 font-display text-xl text-gold">{selectedRegion.visitors}M</div>
                                        </div>
                                        <div>
                                            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Travel</div>
                                            <div className="mt-1 text-foreground/90">{selectedRegion.drive}</div>
                                        </div>
                                        <div>
                                            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Profile</div>
                                            <div className="mt-1 text-foreground/90">{selectedRegion.income}</div>
                                        </div>
                                    </div>
                                    <div className="mt-5 h-2 overflow-hidden rounded-full bg-border">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${(selectedRegion.share / 40) * 100}%` }}
                                            transition={{ duration: 0.8 }}
                                            className="h-full bg-gradient-to-r from-gold to-gold-soft"
                                        />
                                    </div>
                                </motion.div>
                            </div>

                            {/* Heatmap */}
                            <div className="rounded-xl border border-border bg-card/60 p-6">
                                <div className="flex items-center justify-between">
                                    <div className="text-xs uppercase tracking-[0.3em] text-gold">On-Property Heatmap</div>
                                    <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Hover cells</div>
                                </div>
                                <div className="relative mt-6 overflow-hidden rounded-lg border border-border bg-ink/60 p-4">
                                    <div
                                        className="grid gap-1"
                                        style={{ gridTemplateColumns: `repeat(${heatmapGrid[0].length}, minmax(0, 1fr))` }}
                                    >
                                        {heatmapGrid.map((row: any, y: any) =>
                                            row.map((v: any, x: any) => (
                                                <div
                                                    key={`${x}-${y}`}
                                                    onMouseEnter={() => setHover({ x, y, v })}
                                                    onMouseLeave={() => setHover(null)}
                                                    className="aspect-square rounded-sm transition-transform hover:scale-110"
                                                    style={{ background: intensityColor(v), boxShadow: v > 80 ? "0 0 18px oklch(0.82 0.14 80 / 0.5)" : undefined }}
                                                />
                                            )),
                                        )}
                                    </div>
                                    <div className="pointer-events-none absolute inset-0 p-4">
                                        {heatmapZones.map((z: any) => (
                                            <div
                                                key={z.label}
                                                className="absolute -translate-x-1/2 -translate-y-1/2"
                                                style={{
                                                    left: `${((z.x + 0.5) / heatmapGrid[0].length) * 100}%`,
                                                    top: `${((z.y + 0.5) / heatmapGrid.length) * 100}%`,
                                                }}
                                            >
                                                <div className="h-2 w-2 rounded-full bg-gold shadow-[0_0_14px_var(--gold)]" />
                                                <div className="mt-1 whitespace-nowrap text-[10px] uppercase tracking-[0.2em] text-gold-soft">
                                                    {z.label}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                                    <span>Low traffic</span>
                                    <div className="mx-3 h-2 flex-1 rounded-full bg-gradient-to-r from-gold/10 via-gold/40 to-gold" />
                                    <span>Peak</span>
                                </div>
                                {hover && (
                                    <div className="mt-3 text-xs text-foreground/80">
                                        Cell <span className="text-gold">({hover.x + 1}, {hover.y + 1})</span> · density {hover.v}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Case studies */}
                <section className="section-pad border-t border-border">
                    <div className="mx-auto max-w-[1600px]">
                        <SectionTitle eyebrow="Proof" title="Brands that already chose us." />
                        <div className="mt-12 divide-y divide-border border-y border-border">
                            {caseStudies.map((c, i) => (
                                <motion.div
                                    key={c.brand}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                    className="grid grid-cols-[auto_1fr_auto] items-center gap-6 py-6"
                                >
                                    <div className="font-display text-2xl text-gold">{c.spend}</div>
                                    <div>
                                        <div className="font-display text-2xl">{c.brand}</div>
                                        <div className="mt-1 text-sm text-muted-foreground">{c.outcome}</div>
                                    </div>
                                    <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Case study →</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Deck request */}
                <section id="deck" className="section-pad border-t border-border bg-card/30">
                    <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
                        <div>
                            <SectionTitle
                                eyebrow="Request a Deck"
                                title="We'll send a tailored partnership deck within 48 hours."
                                subtitle="Tell us your category, budget band, and timing. You'll get a custom inventory map, tier proposal, and ROI model."
                            />
                            <div className="mt-8 flex flex-wrap gap-4">
                                <CTAButton href="mailto:sponsorship@mallofamerica.com">Email Sponsorship Team</CTAButton>
                                <CTAButton href="/" variant="ghost">Back to Overview</CTAButton>
                            </div>
                        </div>

                        <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-border bg-card/60 p-8">
                            {status === "success" ? (
                                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
                                    <div className="font-display text-3xl gold-text">Thank you.</div>
                                    <p className="mt-3 text-muted-foreground">
                                        A senior partnerships lead will email your custom deck within 48 hours.
                                    </p>
                                    <p className="mt-4 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                                        Reference · <span className="text-gold">{refId}</span>
                                    </p>
                                    <button
                                        type="button"
                                        onClick={reset}
                                        className="mt-6 text-xs uppercase tracking-[0.25em] text-muted-foreground underline-offset-4 hover:text-gold hover:underline"
                                    >
                                        Submit another request
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
                                        <Field label="Company" name="company" error={errors.company} />
                                    </div>
                                    <Field label="Work email" name="email" type="email" error={errors.email} />
                                    <div className="grid grid-cols-2 gap-4">
                                        <Select label="Tier of interest" name="tier" options={["Activation", "Anchor", "Naming Rights", "Not sure"]} error={errors.tier} />
                                        <Select label="Budget band" name="budget" options={["< $500K", "$500K – $2M", "$2M – $5M", "$5M+"]} error={errors.budget} />
                                    </div>
                                    <Select label="Category" name="category" options={["Beverage", "Auto", "Tech", "Finance", "Travel", "CPG", "Other"]} error={errors.category} />
                                    <div>
                                        <label className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Goal</label>
                                        <textarea
                                            name="goal"
                                            rows={3}
                                            placeholder="Launch a product, build category share, reach families…"
                                            aria-invalid={!!errors.goal}
                                            className={`mt-2 w-full rounded-md border bg-ink/40 p-3 text-sm text-foreground focus:outline-none ${errors.goal ? "border-destructive focus:border-destructive" : "border-border focus:border-gold"}`}
                                        />
                                        {errors.goal && <p className="mt-1 text-xs text-destructive">{errors.goal}</p>}
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={status === "submitting"}
                                        className="mt-2 inline-flex items-center justify-center gap-3 rounded-full bg-gold px-7 py-3.5 text-xs uppercase tracking-[0.25em] text-ink transition hover:bg-gold-soft disabled:cursor-not-allowed disabled:opacity-60"
                                    >
                                        {status === "submitting" ? "Sending…" : "Send my partnership deck request →"}
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

