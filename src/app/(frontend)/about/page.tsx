import type { Metadata } from "next";
import Image from "next/image";
import { ABOUT } from "@/lib/site-content";
import { Container, SectionHeading } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "About",
  description: "Vision, mission, and the story behind Goba Eco Precinct.",
};

export default function AboutPage() {
  const content = ABOUT;

  return (
    <div className="pt-28 pb-20">
      <Container>
        <SectionHeading
          eyebrow={content.eyebrow || "About Goba Eco Precinct"}
          title={content.title || "A precinct with purpose"}
          description={content.description}
        />

        <div className="relative mx-auto mt-12 aspect-[16/10] w-full max-w-3xl overflow-hidden border border-border bg-white">
          <Image
            src={content.imageUrl}
            alt="Goba Eco Precinct masterplan overview"
            fill
            className="object-contain p-2 md:p-4"
            sizes="(max-width:768px) 100vw, 768px"
            unoptimized
            priority
          />
        </div>

        <div className="mt-14 grid gap-px bg-border md:grid-cols-3">
          {[
            { title: "Vision", body: content.vision },
            { title: "Mission", body: content.mission },
            { title: "Sustainability", body: content.sustainability },
          ].map((block) => (
            <div key={block.title} className="bg-card p-6">
              <h2 className="font-display text-2xl font-semibold text-primary">{block.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{block.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
