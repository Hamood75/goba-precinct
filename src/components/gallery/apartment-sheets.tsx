"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from "lucide-react";

const SHEETS = [
  {
    title: "Lower level",
    detail: "Parking, stairs, and the site boundary",
    imageUrl: "/gallery/apartments-lower-level.png",
  },
  {
    title: "Ground floor",
    detail: "Apartment blocks, elevation, and communal court",
    imageUrl: "/gallery/apartments-ground-floor.png",
  },
  {
    title: "Units & roof",
    detail: "Unit A, Unit B, and the communal roof",
    imageUrl: "/gallery/apartments-units.png",
  },
  {
    title: "Exterior views",
    detail: "Approaches, garden, parking, and the blocks",
    imageUrl: "/gallery/apartments-exteriors.png",
  },
] as const;

export function ApartmentSheets() {
  const [index, setIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [zoom, setZoom] = useState(1);
  const sheet = SHEETS[index];

  const showPrev = useCallback(() => {
    setIndex((current) => (current - 1 + SHEETS.length) % SHEETS.length);
    setZoom(1);
  }, []);

  const showNext = useCallback(() => {
    setIndex((current) => (current + 1) % SHEETS.length);
    setZoom(1);
  }, []);

  const closeZoom = useCallback(() => {
    setZoomed(false);
    setZoom(1);
  }, []);

  useEffect(() => {
    if (!zoomed) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeZoom();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
      if (event.key === "+" || event.key === "=") setZoom((value) => Math.min(4, Number((value + 0.5).toFixed(1))));
      if (event.key === "-") setZoom((value) => Math.max(1, Number((value - 0.5).toFixed(1))));
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [zoomed, closeZoom, showPrev, showNext]);

  return (
    <section id="apartments" className="scroll-mt-28 mt-12 border border-border bg-card p-4 md:p-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">Apartment</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-primary">Apartment drawings</h2>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">
            Four sheets from the apartment presentation. Choose a page, then click the drawing to zoom.
          </p>
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary">
          {index + 1} / {SHEETS.length}
        </p>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-2 md:grid-cols-4">
        {SHEETS.map((item, sheetIndex) => (
          <button
            key={item.imageUrl}
            type="button"
            onClick={() => {
              setIndex(sheetIndex);
              setZoom(1);
            }}
            className={`cursor-pointer border px-3 py-3 text-left transition-colors ${
              sheetIndex === index
                ? "border-accent bg-accent text-white"
                : "border-border bg-background text-primary hover:bg-surface-warm"
            }`}
          >
            <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] opacity-70">
              0{sheetIndex + 1}
            </span>
            <span className="mt-1 block text-sm font-semibold">{item.title}</span>
          </button>
        ))}
      </div>

      <div className="relative mt-4 bg-white">
        <button
          type="button"
          onClick={showPrev}
          className="absolute left-3 top-1/2 z-10 hidden -translate-y-1/2 cursor-pointer rounded-full border border-border bg-card/95 p-2 text-primary shadow-sm hover:bg-surface-warm md:inline-flex"
          aria-label="Previous sheet"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => {
            setZoomed(true);
            setZoom(1);
          }}
          className="mx-auto flex max-h-[78vh] w-full cursor-zoom-in items-center justify-center px-4 py-4 md:px-16"
          aria-label={`Zoom ${sheet.title}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={sheet.imageUrl}
            alt={`Apartment — ${sheet.title}`}
            className="max-h-[72vh] w-auto max-w-full object-contain"
          />
        </button>
        <button
          type="button"
          onClick={showNext}
          className="absolute right-3 top-1/2 z-10 hidden -translate-y-1/2 cursor-pointer rounded-full border border-border bg-card/95 p-2 text-primary shadow-sm hover:bg-surface-warm md:inline-flex"
          aria-label="Next sheet"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="font-display text-lg font-semibold text-primary">{sheet.title}</p>
          <p className="text-sm text-muted-foreground">{sheet.detail}</p>
        </div>
        <button
          type="button"
          onClick={() => {
            setZoomed(true);
            setZoom(1);
          }}
          className="inline-flex cursor-pointer items-center gap-1.5 border border-border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary hover:bg-surface-warm"
        >
          <ZoomIn className="h-3.5 w-3.5" />
          Zoom sheet
        </button>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3 md:hidden">
        <button type="button" onClick={showPrev} className="inline-flex cursor-pointer items-center gap-1 text-sm text-primary">
          <ChevronLeft className="h-4 w-4" /> Previous
        </button>
        <button type="button" onClick={showNext} className="inline-flex cursor-pointer items-center gap-1 text-sm text-primary">
          Next <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-5 grid grid-cols-4 gap-2">
        {SHEETS.map((item, sheetIndex) => (
          <button
            key={`${item.imageUrl}-thumb`}
            type="button"
            onClick={() => {
              setIndex(sheetIndex);
              setZoom(1);
            }}
            className={`cursor-pointer overflow-hidden border bg-white ${
              sheetIndex === index ? "border-accent" : "border-border opacity-70 hover:opacity-100"
            }`}
            aria-label={`Show ${item.title}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.imageUrl} alt="" className="aspect-[3/4] w-full object-contain object-top" />
          </button>
        ))}
      </div>

      {zoomed ? (
        <div className="fixed inset-0 z-50 flex flex-col bg-[#2a2420]/94" role="dialog" aria-modal="true" aria-label={sheet.title}>
          <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 text-white md:px-6">
            <div className="min-w-0">
              <p className="truncate font-display text-base font-semibold md:text-lg">Apartment — {sheet.title}</p>
              <p className="text-[11px] uppercase tracking-[0.14em] text-white/60">
                {sheet.detail}
                <span className="ml-3 text-white/40">
                  {index + 1} / {SHEETS.length}
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
              <span className="min-w-12 text-center text-xs tabular-nums text-white/70">{Math.round(zoom * 100)}%</span>
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
                onClick={closeZoom}
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
              aria-label="Previous sheet"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="h-full w-full overflow-auto overscroll-contain px-3 py-4 md:px-16">
              <div className="mx-auto flex min-h-full w-max min-w-full items-start justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={sheet.imageUrl}
                  alt={`Apartment — ${sheet.title}`}
                  className="bg-white shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
                  style={{
                    width: `${zoom * 100}vw`,
                    maxWidth: zoom === 1 ? "min(1100px, 92vw)" : "none",
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
              aria-label="Next sheet"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
