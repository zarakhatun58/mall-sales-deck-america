import { SectionTitle } from "../components/SectionTitle";
import { mall, attractions } from "../data/mallData";

export function Entertainment() {
  return (
   <section id="entertainment" className="relative overflow-hidden">
      <div className="relative h-[60vh] min-h-[460px] w-full overflow-hidden">
        <video
          autoPlay muted loop playsInline
          poster={mall.images.entertainment}
          className="h-full w-full object-cover"
        >
          <source src="/videos/attractions.mp4" type="video/mp4" />
        </video>
        <img src={mall.images.entertainment} alt="Indoor theme park" className="absolute inset-0 h-full w-full object-cover -z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1600px] px-6 pb-12 lg:px-12">
          <div className="text-xs uppercase tracking-[0.4em] text-gold">Attractions</div>
          <h2 className="mt-3 max-w-3xl font-display text-5xl leading-[1.02] md:text-7xl">
            The differentiator no other mall <span className="gold-text italic">can build.</span>
          </h2>
        </div>
      </div>

      <div className="section-pad">
        <div className="mx-auto max-w-[1600px]">
          <SectionTitle
            eyebrow="Inside the Property"
            title="A theme park. An aquarium. A flight simulator. Under one roof."
            subtitle="Entertainment is what separates Mall of America from every other retail property in the world — and what guarantees a captive, repeat-visit audience for tenants and sponsors."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
            {attractions.map((a, i) => (
              <article key={a.name} className="group bg-card p-8 transition hover:bg-card/40">
                <div className="flex items-baseline justify-between">
                  <div className="font-display text-3xl text-foreground">{a.name}</div>
                  <div className="font-display text-xl text-gold/70">0{i + 1}</div>
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.3em] text-gold">{a.type}</div>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">{a.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
