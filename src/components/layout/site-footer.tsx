import Link from "next/link";
import { Container } from "@/components/ui/section";
import { SITE } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-surface-warm text-foreground">
      <Container className="grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-2xl font-bold tracking-tight text-primary">GOBA ECO PRECINCT</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Experience the Goba lifestyle — purchase apartments and houses within one complete land
            project in Goba. Renting is planned as a future option.
          </p>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/#offerings" className="hover:text-primary cursor-pointer">
                Homes
              </Link>
            </li>
            <li>
              <Link href="/#tenure" className="hover:text-primary cursor-pointer">
                Purchase
              </Link>
            </li>
            <li>
              <Link href="/#process" className="hover:text-primary cursor-pointer">
                Process
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-primary cursor-pointer">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary cursor-pointer">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">Get in touch</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>{SITE.address}</li>
            <li>
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary cursor-pointer"
              >
                View on Google Maps
              </a>
            </li>
            <li>
              <a href={SITE.phoneHref} className="hover:text-accent transition-colors">
                {SITE.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-accent transition-colors">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Goba Eco Precinct. All rights reserved.
      </div>
    </footer>
  );
}
