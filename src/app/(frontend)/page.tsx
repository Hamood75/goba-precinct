import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, ShieldCheck, Trees, Droplets, Sun, Home, KeyRound, Handshake } from "lucide-react";
import { LocationMapSection } from "@/components/home/location-map";
import { GalleryStackCard } from "@/components/home/gallery-stack-card";
import { Button } from "@/components/ui/button";
import { Container, SectionHeading } from "@/components/ui/section";
import { PROJECT_GALLERY } from "@/lib/project-gallery";
import {
  ARCHITECTURE_OFFERINGS,
  BUSINESS_PROCESS,
  HOME_HERO,
  HOME_SUSTAINABILITY_IMAGE,
  LIFESTYLE_SERVICES,
  TENURE_PATHS,
} from "@/lib/site-content";

const featured = PROJECT_GALLERY.slice(0, 3).map((item) => ({
  src: item.imageUrl,
  alt: item.title,
}));

const seeAllImages = PROJECT_GALLERY.slice(0, 3).map((item) => ({
  src: item.imageUrl,
  alt: item.title,
}));

const serviceIcons = [Leaf, Droplets, Trees, ShieldCheck, Home, Sun];
const tenureIcons = { purchase: Handshake, rent: KeyRound };

export default function HomePage() {
  const hero = HOME_HERO;

  return (
    <>
      {/* 1. Lifestyle hero */}
      <section className="relative min-h-[100svh] overflow-hidden bg-surface-warm">
        <Image
          src={hero.heroImage}
          alt="Goba Eco Precinct"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3a2f28]/55 via-[#3a2f28]/25 to-transparent" />
        <div className="relative z-10 flex min-h-[100svh] items-end pb-16 pt-28 md:items-center md:pb-0">
          <Container className="w-full">
            <p className="animate-rise text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
              {hero.eyebrow}
            </p>
            <h1 className="animate-rise delay-1 mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.02] text-white md:text-6xl lg:text-7xl">
              {hero.headline}
            </h1>
            <p className="animate-rise delay-2 mt-5 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
              {hero.subheadline}
            </p>
            <div className="animate-rise delay-3 mt-8 flex flex-wrap gap-3">
              <Link href="/contact?intent=purchase">
                <Button size="lg" variant="accent">
                  Purchase a home
                </Button>
              </Link>
              <Link href="#tenure">
                <Button size="lg" variant="light">
                  See purchase &amp; rent
                </Button>
              </Link>
            </div>
          </Container>
        </div>
      </section>

      {/* 2. Purchase or rent — Balwin dual path */}
      <section id="tenure" className="scroll-mt-24 border-b border-border bg-card py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="How you can live here"
            title="Purchase now — rent later"
            description="Buying is available today. Renting is kept on the roadmap as a future option for the precinct."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {TENURE_PATHS.map((path) => {
              const Icon = tenureIcons[path.id];
              return (
                <article
                  key={path.id}
                  className={`flex flex-col border p-8 transition-colors ${
                    path.available
                      ? "border-border bg-background hover:bg-surface-warm"
                      : "border-dashed border-border bg-muted/40"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <Icon className={`h-7 w-7 ${path.available ? "text-accent" : "text-secondary"}`} />
                    {!path.available ? (
                      <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-secondary">
                        Coming later
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold text-primary">{path.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{path.body}</p>
                  <div className="mt-8">
                    <Link href={path.href}>
                      <Button variant={path.available ? "accent" : "secondary"}>
                        {path.cta} <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 3. Business process */}
      <section id="process" className="scroll-mt-24 border-b border-border bg-surface-warm py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title="A clear path from interest to home"
            description="Discover the precinct, choose a home to purchase, enquire with the team, then visit the land."
          />
          <div className="mt-12 grid gap-0 md:grid-cols-4">
            {BUSINESS_PROCESS.map((item, index) => (
              <div
                key={item.step}
                className="relative border-border px-0 py-6 md:border-l md:px-6 md:py-0 first:md:border-l-0 first:md:pl-0"
              >
                <p className="font-display text-4xl font-bold text-accent/90">{item.step}</p>
                <h3 className="mt-3 font-display text-xl font-semibold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                {index < BUSINESS_PROCESS.length - 1 ? (
                  <ArrowRight className="absolute right-2 top-8 hidden h-4 w-4 text-border md:block lg:right-0" />
                ) : null}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Featured offerings */}
      <section id="offerings" className="scroll-mt-24 bg-card py-20 md:py-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Featured offerings"
              title="Homes within the precinct"
              description="Apartments and houses available to purchase while residences remain. Rent is planned for later."
            />
            <Link href="/gallery">
              <Button variant="secondary">
                View all drawings <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {ARCHITECTURE_OFFERINGS.map((item) => (
              <article key={item.id} className="group flex flex-col bg-background">
                <div className="relative aspect-[16/11] overflow-hidden bg-muted">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width:1024px) 100vw, 33vw"
                    unoptimized
                  />
                </div>
                <div className="flex flex-1 flex-col border border-t-0 border-border p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                    {item.label}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-primary">{item.title}</h3>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">{item.location}</p>
                  {"tenure" in item ? (
                    <p className="mt-2 inline-flex w-fit bg-surface-warm px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary">
                      {item.tenure}
                    </p>
                  ) : null}
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
                  <ul className="mt-5 space-y-1 border-t border-border pt-4">
                    {item.specs.map((spec) => (
                      <li key={spec} className="text-xs font-medium uppercase tracking-[0.1em] text-secondary">
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.id === "apartments" ? (
                      <>
                        <Link href="/gallery#apartments">
                          <Button size="sm" variant="secondary">
                            View plans
                          </Button>
                        </Link>
                        <Link href="/contact?intent=purchase">
                          <Button size="sm" variant="accent">
                            Enquire to purchase
                          </Button>
                        </Link>
                      </>
                    ) : item.id !== "social" ? (
                      <Link href="/contact?intent=purchase">
                        <Button size="sm" variant="accent">
                          Enquire to purchase
                        </Button>
                      </Link>
                    ) : (
                      <Link href="/gallery">
                        <Button size="sm" variant="secondary">
                          View details
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. World of Goba */}
      <section id="lifestyle" className="scroll-mt-24 bg-surface-warm py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="World of Goba"
            title="Lifestyle beyond the front door"
            description="Everything that surrounds the homes — green living, infrastructure, community, and a complete precinct experience."
          />
          <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {LIFESTYLE_SERVICES.map((service, index) => {
              const Icon = serviceIcons[index] || Leaf;
              return (
                <div key={service.title} className="bg-card p-7 transition-colors hover:bg-background">
                  <Icon className="h-6 w-6 text-accent" />
                  <h3 className="mt-4 font-display text-xl font-semibold text-primary">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.body}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-10">
            <Link href="/sustainability">
              <Button variant="secondary">
                Explore green living <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* 6. Gallery */}
      <section className="border-y border-border bg-card py-20 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Gallery"
            title="See the precinct take shape"
            description="Site plans, gate houses, and architectural vision."
          />
          <div className="mt-12 grid grid-cols-1 items-center gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {featured.map((item) => (
              <Link
                key={item.src + item.alt}
                href="/gallery"
                className="group relative aspect-square overflow-hidden border border-border bg-surface-warm transition duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width:1024px) 50vw, 22vw"
                  unoptimized
                />
              </Link>
            ))}
            <GalleryStackCard images={seeAllImages} label="See All" href="/gallery" />
          </div>
        </Container>
      </section>

      {/* 7. Green living spotlight */}
      <section className="py-20 md:py-28">
        <Container className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={HOME_SUSTAINABILITY_IMAGE}
              alt="Homes set among landscaping at Goba Eco Precinct"
              fill
              className="object-cover"
              sizes="(max-width:768px) 100vw, 50vw"
              unoptimized
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Green living"
              title="Built for lasting, lighter living"
              description="Solar readiness, modular sewerage, gravity-fed water, and landscape that respects Goba’s setting — lifestyle with infrastructure behind it."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/sustainability">
                <Button variant="accent">Green living</Button>
              </Link>
              <Link href="/about">
                <Button variant="secondary">About the precinct</Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <LocationMapSection />

      {/* 8. Get in touch */}
      <section className="pb-0">
        <div className="border-t border-border bg-surface-warm px-4 py-16 md:px-6 md:py-20">
          <Container className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
                Get in touch
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-5xl">
                Ready to purchase a home?
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                Enquire about apartments or houses — or register interest in renting when that option opens.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link href="/contact?intent=purchase">
                <Button size="lg" variant="accent">
                  Purchase
                </Button>
              </Link>
              <Link href="/contact?intent=rent-interest">
                <Button size="lg" variant="secondary">
                  Rent interest
                </Button>
              </Link>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
}
