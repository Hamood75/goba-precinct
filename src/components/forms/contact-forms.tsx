"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/input";
import { SITE } from "@/lib/site-content";

type Intent = "purchase" | "rent-interest";

export function InquiryForm() {
  const searchParams = useSearchParams();
  const intentParam = searchParams.get("intent");
  const defaultIntent: Intent =
    intentParam === "rent-interest" || intentParam === "rent" ? "rent-interest" : "purchase";

  const [status, setStatus] = useState("");
  const [intent, setIntent] = useState<Intent>(defaultIntent);

  const intentLabel = useMemo(
    () => (intent === "rent-interest" ? "Rent interest (future)" : "Purchase"),
    [intent],
  );

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const email = String(data.get("email") || "");
    const homeType = String(data.get("homeType") || "");
    const message = String(data.get("message") || "");
    const subject =
      intent === "rent-interest"
        ? "Rent interest (future) — Goba Eco Precinct"
        : "Purchase enquiry — Goba Eco Precinct";

    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Interest: ${intentLabel}`,
      `Home type: ${homeType || "Not specified"}`,
      "",
      message,
    ].join("\n");

    const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setStatus("Opening your email app…");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <fieldset>
        <legend className="text-sm font-medium text-foreground">I want to</legend>
        <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {(
            [
              { id: "purchase" as const, label: "Purchase a home", hint: "Available now" },
              {
                id: "rent-interest" as const,
                label: "Rent interest",
                hint: "Coming later",
              },
            ] as const
          ).map((option) => (
            <label
              key={option.id}
              className={`flex cursor-pointer flex-col items-center justify-center border px-4 py-3 text-center transition-colors ${
                intent === option.id
                  ? "border-accent bg-accent text-white"
                  : "border-border bg-card text-primary hover:bg-muted"
              }`}
            >
              <input
                type="radio"
                name="intent"
                value={option.id}
                checked={intent === option.id}
                onChange={() => setIntent(option.id)}
                className="sr-only"
              />
              <span className="text-sm font-semibold uppercase tracking-[0.12em]">{option.label}</span>
              <span
                className={`mt-1 text-[10px] uppercase tracking-[0.12em] ${
                  intent === option.id ? "text-white/80" : "text-muted-foreground"
                }`}
              >
                {option.hint}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <Label htmlFor="homeType">Home type</Label>
        <select
          id="homeType"
          name="homeType"
          className="mt-1.5 flex h-11 w-full border border-input bg-card px-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
          defaultValue=""
        >
          <option value="">Select…</option>
          <option value="Apartment">Apartment</option>
          <option value="House">House</option>
          <option value="Either / not sure">Either / not sure</option>
          <option value="Visit only">Visit the land first</option>
        </select>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required className="mt-1.5" />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" className="mt-1.5" />
        </div>
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required className="mt-1.5" />
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder={
            intent === "rent-interest"
              ? "Tell us you’d like to be notified when renting opens…"
              : "Tell us more about the home you’d like to purchase…"
          }
          className="mt-1.5"
        />
      </div>
      {status ? <p className="text-sm text-muted-foreground">{status}</p> : null}
      <Button type="submit" variant="accent">
        {intent === "rent-interest" ? "Register rent interest" : "Send purchase enquiry"}
      </Button>
    </form>
  );
}
