import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PROJECT_GALLERY } from "@/lib/project-gallery";
import { Button } from "@/components/ui/button";
import { Container, SectionHeading } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Architectural drawings and renders from Goba Eco Precinct.",
};

export default function GalleryPage() {
  return (
    <div className="pt-28 pb-20">
      <Container>
        <SectionHeading
          eyebrow="Gallery"
          title="See the precinct unfold"
          description="Gate houses, masterplan drawings, and architectural vision for Goba Eco Precinct."
        />
        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {PROJECT_GALLERY.map((item) => (
            <figure
              key={item.imageUrl}
              className="mb-4 break-inside-avoid overflow-hidden rounded-xl border border-border bg-card"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-contain bg-white p-2"
                  sizes="(max-width:768px) 100vw, 33vw"
                  unoptimized
                />
              </div>
              <figcaption className="px-4 py-3">
                <p className="text-sm font-medium text-foreground">{item.title}</p>
                <p className="text-[11px] uppercase tracking-[0.14em] text-secondary">
                  {item.category}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-14 border border-border bg-surface-warm px-6 py-10 md:px-10">
          <h2 className="font-display text-3xl text-primary md:text-4xl">
            Interested in a home here?
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Purchase while residences remain — this is one complete land project. Renting is planned
            as a future option.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact?intent=purchase">
              <Button variant="accent">Purchase</Button>
            </Link>
            <Link href="/contact?intent=rent-interest">
              <Button variant="secondary">Rent interest</Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
