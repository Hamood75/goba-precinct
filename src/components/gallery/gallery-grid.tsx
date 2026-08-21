"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from "lucide-react";

export type GalleryItem = {
  title: string;
  category: string;
  imageUrl: string;
};

type GalleryGridProps = {
  items: readonly GalleryItem[];
};

export function GalleryGrid({ items }: GalleryGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);

  const active = activeIndex === null ? null : items[activeIndex];
  const open = activeIndex !== null;

  const close = useCallback(() => {
    setActiveIndex(null);
    setZoom(1);
  }, []);

  const showPrev = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return current;
      return (current - 1 + items.length) % items.length;
    });
    setZoom(1);
  }, [items.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return current;
      return (current + 1) % items.length;
    });
    setZoom(1);
  }, [items.length]);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
      if (event.key === "+" || event.key === "=") setZoom((value) => Math.min(4, value + 0.5));
      if (event.key === "-") setZoom((value) => Math.max(1, value - 0.5));
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close, showPrev, showNext]);

  return (
    <>
      <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {items.map((item, index) => (
          <figure
            key={item.imageUrl}
            className="mb-4 break-inside-avoid overflow-hidden rounded-xl border border-border bg-card"
          >
            <button
              type="button"
              onClick={() => {
                setActiveIndex(index);
                setZoom(1);
              }}
              className="group relative block aspect-[4/3] w-full cursor-zoom-in bg-white text-left"
              aria-label={`Preview ${item.title}`}
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-contain p-2 transition duration-300 group-hover:scale-[1.02]"
                sizes="(max-width:768px) 100vw, 33vw"
                unoptimized
              />
              <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition group-hover:bg-black/10 group-hover:opacity-100">
                <span className="inline-flex items-center gap-1.5 bg-card/95 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary shadow-sm">
                  <ZoomIn className="h-3.5 w-3.5" />
                  Preview
                </span>
              </span>
            </button>
            <figcaption className="px-4 py-3">
              <p className="text-sm font-medium text-foreground">{item.title}</p>
              <p className="text-[11px] uppercase tracking-[0.14em] text-secondary">{item.category}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      {open && active ? (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-[#2a2420]/94"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
        >
          <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 text-white md:px-6">
            <div className="min-w-0">
              <p className="truncate font-display text-base font-semibold md:text-lg">{active.title}</p>
              <p className="text-[11px] uppercase tracking-[0.14em] text-white/60">
                {active.category}
                <span className="ml-3 text-white/40">
                  {activeIndex! + 1} / {items.length}
                </span>
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-1">
              <button
                type="button"
                onClick={() => setZoom((value) => Math.max(1, Number((value - 0.5).toFixed(1))))}
                className="cursor-pointer rounded-md p-2 text-white/80 hover:bg-white/10 hover:text-white disabled:opacity-35"
                aria-label="Zoom out"
                disabled={zoom <= 1}
              >
                <ZoomOut className="h-5 w-5" />
              </button>
              <span className="min-w-12 text-center text-xs tabular-nums text-white/70">
                {Math.round(zoom * 100)}%
              </span>
              <button
                type="button"
                onClick={() => setZoom((value) => Math.min(4, Number((value + 0.5).toFixed(1))))}
                className="cursor-pointer rounded-md p-2 text-white/80 hover:bg-white/10 hover:text-white disabled:opacity-35"
                aria-label="Zoom in"
                disabled={zoom >= 4}
              >
                <ZoomIn className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={close}
                className="ml-1 cursor-pointer rounded-md p-2 text-white/80 hover:bg-white/10 hover:text-white"
                aria-label="Close preview"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="relative flex min-h-0 flex-1">
            <button
              type="button"
              onClick={showPrev}
              className="absolute left-2 top-1/2 z-10 hidden -translate-y-1/2 cursor-pointer rounded-full bg-white/10 p-2 text-white hover:bg-white/20 md:left-4 md:inline-flex"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div
              className="h-full w-full overflow-auto overscroll-contain px-3 py-4 md:px-16"
              onClick={(event) => {
                if (event.target === event.currentTarget) close();
              }}
            >
              <div className="mx-auto flex min-h-full w-max min-w-full items-start justify-center">
                {/* Native img keeps full resolution for floor-plan detail */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={active.imageUrl}
                  alt={active.title}
                  className="bg-white shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
                  style={{
                    width: `${zoom * 100}vw`,
                    maxWidth: zoom === 1 ? "min(1400px, 92vw)" : "none",
                    height: "auto",
                  }}
                  draggable={false}
                />
              </div>
            </div>

            <button
              type="button"
              onClick={showNext}
              className="absolute right-2 top-1/2 z-10 hidden -translate-y-1/2 cursor-pointer rounded-full bg-white/10 p-2 text-white hover:bg-white/20 md:right-4 md:inline-flex"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="flex items-center justify-between gap-3 border-t border-white/10 px-4 py-3 text-white md:hidden">
            <button
              type="button"
              onClick={showPrev}
              className="inline-flex cursor-pointer items-center gap-1 text-sm text-white/80"
            >
              <ChevronLeft className="h-4 w-4" /> Prev
            </button>
            <button
              type="button"
              onClick={close}
              className="cursor-pointer text-sm text-white/70"
            >
              Close
            </button>
            <button
              type="button"
              onClick={showNext}
              className="inline-flex cursor-pointer items-center gap-1 text-sm text-white/80"
            >
              Next <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
