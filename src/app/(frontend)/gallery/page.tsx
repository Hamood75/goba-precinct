import type { Metadata } from "next";
import Link from "next/link";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
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
          description="Gate houses, home designs, masterplan drawings, and architectural vision for Goba Eco Precinct. Click any image to preview."
        />
        <GalleryGrid items={PROJECT_GALLERY} />

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
