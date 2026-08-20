import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type StackImage = {
  src: string;
  alt: string;
};

type GalleryStackCardProps = {
  images: StackImage[];
  label?: string;
  href?: string;
  className?: string;
};

/**
 * Compact “See All” card: same-size landscape photos fanned behind a flat front image.
 */
export function GalleryStackCard({
  images,
  label = "See All",
  href = "/gallery",
  className,
}: GalleryStackCardProps) {
  const front = images[0];
  const left = images[1] || images[0];
  const right = images[2] || images[1] || images[0];

  if (!front) return null;

  return (
    <Link
      href={href}
      className={cn(
        "group flex h-[11.5rem] w-[11.5rem] shrink-0 flex-col items-center justify-center self-center justify-self-center bg-white px-3 shadow-[0_8px_28px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-1 cursor-pointer sm:h-[12.5rem] sm:w-[12.5rem]",
        className,
      )}
    >
      <div className="relative h-[4.75rem] w-[7.25rem]">
        {/* Back left — same frame, rotated counter-clockwise */}
        <div className="absolute left-1/2 top-1/2 z-0 h-[3.35rem] w-[6.1rem] -translate-x-1/2 -translate-y-1/2 -rotate-[18deg] overflow-hidden rounded-2xl shadow-md transition-transform duration-300 group-hover:-rotate-[22deg]">
          <Image
            src={left.src}
            alt=""
            fill
            className="object-cover"
            sizes="100px"
            unoptimized={left.src.startsWith("/uploads/") || left.src.startsWith("/gallery/")}
          />
        </div>
        {/* Back right — same frame, rotated clockwise */}
        <div className="absolute left-1/2 top-1/2 z-0 h-[3.35rem] w-[6.1rem] -translate-x-1/2 -translate-y-1/2 rotate-[18deg] overflow-hidden rounded-2xl shadow-md transition-transform duration-300 group-hover:rotate-[22deg]">
          <Image
            src={right.src}
            alt=""
            fill
            className="object-cover"
            sizes="100px"
            unoptimized={right.src.startsWith("/uploads/") || right.src.startsWith("/gallery/")}
          />
        </div>
        {/* Front — flat landscape on top */}
        <div className="absolute left-1/2 top-1/2 z-10 h-[3.35rem] w-[6.1rem] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl shadow-[0_6px_16px_rgba(0,0,0,0.2)] ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-[1.02]">
          <Image
            src={front.src}
            alt={front.alt}
            fill
            className="object-cover"
            sizes="100px"
            unoptimized={front.src.startsWith("/uploads/") || front.src.startsWith("/gallery/")}
          />
        </div>
      </div>

      <p className="mt-3 text-center text-xs font-semibold tracking-tight text-neutral-900 sm:text-sm">
        {label}
      </p>
    </Link>
  );
}
