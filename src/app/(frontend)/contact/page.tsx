import type { Metadata } from "next";
import { Suspense } from "react";
import { InquiryForm } from "@/components/forms/contact-forms";
import { Container, SectionHeading } from "@/components/ui/section";
import { SITE } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Enquire to purchase at Goba Eco Precinct, or register interest in renting later.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20">
      <Container>
        <SectionHeading
          eyebrow="Get in touch"
          title="Purchase a home at Goba"
          description="Buying is available now. You can also register interest in renting for when that option opens later."
        />
        <div className="mx-auto mt-12 max-w-2xl border border-border bg-card p-6 md:p-8">
          <h2 className="font-display text-2xl font-semibold text-primary">Send an enquiry</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Choose purchase, or leave rent interest for the future — then share your details.
          </p>
          <div className="mt-6">
            <Suspense fallback={<p className="text-sm text-muted-foreground">Loading form…</p>}>
              <InquiryForm />
            </Suspense>
          </div>
        </div>
        <div className="mt-10 grid gap-4 border border-border bg-surface-warm p-6 md:grid-cols-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">Address</p>
            <p className="mt-2 text-sm text-foreground">{SITE.address}</p>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-sm text-accent underline-offset-2 hover:underline cursor-pointer"
            >
              Open in Google Maps
            </a>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">Phone</p>
            <p className="mt-2 text-sm text-foreground">
              <a href={SITE.phoneHref} className="hover:text-accent transition-colors">
                {SITE.phone}
              </a>
            </p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">Email</p>
            <p className="mt-2 text-sm text-foreground">
              <a href={`mailto:${SITE.email}`} className="hover:text-accent transition-colors">
                {SITE.email}
              </a>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
