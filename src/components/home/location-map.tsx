const MAPS_URL = "https://maps.app.goo.gl/DAq5MoKoV4uptpyJ9";
const EMBED_SRC =
  "https://www.google.com/maps?q=Goba+Eco+estate@-6.7141081,39.1322715&z=16&output=embed";

export function LocationMapSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">Location</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-5xl">
            Find Goba Eco Estate
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Visit the precinct on the ground — explore the site, surrounding landscape, and access
            routes before you book a guided tour.
          </p>
        </div>

        <div className="relative mt-10 h-[360px] overflow-hidden border border-border md:h-[440px]">
          <iframe
            title="Goba Eco Estate on Google Maps"
            src={EMBED_SRC}
            className="absolute inset-0 h-full w-full border-0 grayscale-[20%] contrast-[1.05]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">Goba Eco Estate · −6.7141, 39.1323</p>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-accent underline-offset-4 transition-colors duration-200 hover:text-primary hover:underline cursor-pointer"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
