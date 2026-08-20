import type { Metadata } from "next";
import Image from "next/image";
import { SUSTAINABILITY } from "@/lib/site-content";
import { Container, SectionHeading } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Sustainability",
  description: "How Goba Eco Precinct designs for regeneration and low-impact living.",
};

export default function SustainabilityPage() {
  const content = SUSTAINABILITY;

  return (
    <div className="pt-28 pb-20">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
          />
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={content.imageUrl}
              alt="Forest canopy and natural landscape"
              fill
              className="object-cover"
              sizes="(max-width:768px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {content.pillars.map((pillar) => (
            <div key={pillar.title} className="rounded-xl border border-border bg-card p-6">
              <h2 className="font-display text-xl text-primary">{pillar.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{pillar.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
