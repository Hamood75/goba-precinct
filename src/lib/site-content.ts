import { DEFAULT_ABOUT, DEFAULT_SUSTAINABILITY } from "@/lib/cms-content";

export const SITE = {
  name: "Goba Eco Precinct",
  phone: "+2550000010011",
  phoneHref: "tel:+2550000010011",
  email: "hello@gobaeco.com",
  mapsUrl: "https://maps.app.goo.gl/DAq5MoKoV4uptpyJ9",
  address: "Goba Eco Estate",
};

export const HOME_HERO = {
  heroImage: "/gallery/hero-home.png",
  eyebrow: "Goba Eco Precinct",
  headline: "Experience the Goba lifestyle",
  subheadline:
    "A complete residential precinct in Goba — purchase a home today, with rent planned as a future option as the precinct opens.",
};

export const TENURE_PATHS = [
  {
    id: "purchase",
    title: "Purchase a home",
    body: "Own an apartment or house in the precinct — the primary path into Goba Eco Precinct while residences remain.",
    href: "/contact?intent=purchase",
    cta: "Enquire to purchase",
    available: true,
  },
  {
    id: "rent",
    title: "Rent a home",
    body: "Renting into the lifestyle is planned as a future option. For now, enquire to purchase — or ask us to note your interest in renting later.",
    href: "/contact?intent=rent-interest",
    cta: "Register rent interest",
    available: false,
  },
] as const;

export const HOME_SUSTAINABILITY_IMAGE = "/gallery/sustainability-home.png";

/** Balwin-style journey: Discover → Choose → Enquire → Visit */
export const BUSINESS_PROCESS = [
  {
    step: "01",
    title: "Discover the precinct",
    body: "Explore the masterplan, lifestyle amenities, and green infrastructure that define Goba Eco Precinct.",
  },
  {
    step: "02",
    title: "Choose to purchase",
    body: "Select apartments or family houses to buy. Renting is planned as a future option once the precinct opens further.",
  },
  {
    step: "03",
    title: "Enquire with the team",
    body: "Share your interest — availability and next steps are confirmed directly with you.",
  },
  {
    step: "04",
    title: "Visit the land",
    body: "Walk the grounds, see the context, and envision your place before residences are fully taken.",
  },
] as const;

export const ARCHITECTURE_OFFERINGS = [
  {
    id: "apartments",
    label: "The compact collection",
    title: "Apartments",
    location: "High density · Goba",
    summary:
      "1-bedroom and bachelor units with open parking — efficient living inside a secure lifestyle precinct.",
    tenure: "Available to purchase",
    specs: ["40 units planned", "1 bedroom & bachelor", "Purchase now", "Open parking"],
    image: "/gallery/about-precinct.png",
  },
  {
    id: "houses",
    label: "The family collection",
    title: "Houses",
    location: "Low density · Goba",
    summary:
      "Single or double-storey homes with garage options — modern architecture on landscaped stands.",
    tenure: "Available to purchase",
    specs: ["20 houses planned", "3–4 bedrooms", "Purchase now", "250–300 m²"],
    image: "/gallery/hero-home.png",
  },
  {
    id: "social",
    label: "Shared lifestyle",
    title: "Social area & park",
    location: "Community · Goba",
    summary:
      "Everyday amenities woven through the precinct — shop, play, gather, and look out over the land.",
    specs: ["Kiosk / shop", "Timber playground", "Shaded seating", "Water tower viewpoint"],
    image: "/gallery/sustainability-home.png",
  },
] as const;

export const LIFESTYLE_SERVICES = [
  {
    title: "Green living",
    body: "Native landscape, water-sensitive design, and homes oriented for light and breeze.",
  },
  {
    title: "Infrastructure",
    body: "Gravity-fed water, Bio-rock® sewerage, and solar-ready rooftops built into the plan.",
  },
  {
    title: "Lifestyle amenities",
    body: "Park spaces, shaded seating, a local kiosk, and a playground for everyday living.",
  },
  {
    title: "Secure precinct",
    body: "Defined gate houses and a clear masterplan from arrival through to each stand.",
  },
  {
    title: "Architecture",
    body: "Modern residential language — stone, timber, metal roofs, indoor–outdoor living.",
  },
  {
    title: "One complete project",
    body: "Not an open-ended marketplace — when residences are taken, the precinct is complete.",
  },
] as const;

export const ABOUT = DEFAULT_ABOUT;
export const SUSTAINABILITY = DEFAULT_SUSTAINABILITY;
