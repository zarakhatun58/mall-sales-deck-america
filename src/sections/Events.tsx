import { CTAButton } from "../components/CTAButton";
import { SectionTitle } from "../components/SectionTitle";
import { events, mall } from "../data/mallData";


export function Events() {
  return (
     <section id="events" className="relative overflow-hidden">
      <div className="section-pad relative">
        <video
          autoPlay muted loop playsInline
          poster={mall.images.events}
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        >
          {/* <source src="/videos/events.mp4" type="video/mp4" /> */}
        </video>
        <img src={mall.images.events} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25 -z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" />

        <div className="relative z-10 mx-auto max-w-[1600px]">
          <SectionTitle
            eyebrow="Events & Platform"
            title="Not a building. A global platform."
            subtitle="400+ events every year — from arena-scale concerts to brand activations seen on national TV. When global brands want to reach Middle America with spectacle, they come here."
          />

          <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
            {events.map((e) => (
              <article key={e.title} className="group bg-card/80 p-8 backdrop-blur transition hover:bg-card">
                <div className="text-xs uppercase tracking-[0.3em] text-gold">{e.capacity}</div>
                <h3 className="mt-4 font-display text-2xl text-foreground">{e.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{e.blurb}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
            <p className="max-w-xl text-sm text-muted-foreground">
              Need detailed venue specs, past activation case studies, and a booking flow?
            </p>
            <CTAButton href="/events">Open the Events Module</CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
