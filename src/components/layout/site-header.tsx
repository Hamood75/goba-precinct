"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/#offerings", label: "Homes" },
  { href: "/#tenure", label: "Purchase" },
  { href: "/#process", label: "Process" },
  { href: "/#lifestyle", label: "Lifestyle" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/80 bg-card/95 text-foreground backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="font-display text-lg font-bold tracking-tight text-primary cursor-pointer md:text-xl">
          GOBA ECO
        </Link>

        <nav className="hidden items-center gap-6 xl:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors duration-200 cursor-pointer hover:text-accent",
                !link.href.startsWith("/#") && pathname.startsWith(link.href)
                  ? "text-accent"
                  : "text-muted-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link href="/#offerings">
            <Button size="sm" variant="secondary">
              View homes
            </Button>
          </Link>
          <Link href="/contact?intent=purchase">
            <Button size="sm" variant="accent">
              Purchase
            </Button>
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden cursor-pointer rounded-md p-2 text-primary hover:bg-muted"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-card px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="text-sm font-semibold uppercase tracking-[0.14em] text-primary cursor-pointer"
            >
              Home
            </Link>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact?intent=purchase" onClick={() => setOpen(false)}>
              <Button className="w-full" variant="accent">
                Purchase a home
              </Button>
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
