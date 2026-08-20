# Goba Eco Precinct

Static marketing site for **Goba Eco Precinct** — a one-time land project. Browse the story and gallery, then inquire via contact (opens email).

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Cinzel / Josefin Sans

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

`/`, `/about`, `/sustainability`, `/gallery`, `/contact`

## Content

- Gallery images: `public/gallery/`
- Copy & contact details: `src/lib/site-content.ts` and `src/lib/cms-content.ts`
- Gallery list: `src/lib/project-gallery.ts`

Optional: set `NEXT_PUBLIC_SITE_URL` for sitemap/metadata (defaults to `http://localhost:3000`).
