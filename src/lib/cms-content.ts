export type CmsPillar = { title: string; body: string };

export type AboutContent = {
  description: string;
  vision: string;
  mission: string;
  sustainability: string;
  imageUrl: string;
  eyebrow?: string;
  title?: string;
};

export type SustainabilityContent = {
  eyebrow: string;
  title: string;
  description: string;
  imageUrl: string;
  pillars: CmsPillar[];
};

export const DEFAULT_ABOUT: AboutContent = {
  eyebrow: "About Goba Eco Precinct",
  title: "A precinct with purpose",
  description:
    "Goba Eco Precinct is a one-time land project in Goba: homes built by the development on this master-planned site. It is not an open-ended property marketplace — when residences are taken, the project is complete.",
  vision:
    "To deliver a regenerative residential precinct where community and landscape grow together for the people who make this place home.",
  mission:
    "Build thoughtfully planned homes on this land with clear pathways from interest to ownership — while homes remain.",
  sustainability:
    "Every phase prioritizes water-sensitive design, native habitat, energy-conscious homes, and a lighter footprint on Goba’s landscape.",
  imageUrl: "/gallery/about-precinct.png",
};

export const DEFAULT_SUSTAINABILITY: SustainabilityContent = {
  eyebrow: "Sustainability",
  title: "Luxury that restores more than it takes",
  description:
    "We design for closed-loop water systems, native habitat corridors, energy-conscious envelopes, and shared mobility — so luxury living leaves a lighter footprint.",
  imageUrl:
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80",
  pillars: [
    {
      title: "Water",
      body: "Rain gardens, permeable surfaces, and recycled irrigation loops.",
    },
    {
      title: "Energy",
      body: "Passive orientation strategies and readiness for rooftop solar.",
    },
    {
      title: "Biodiversity",
      body: "Native planting corridors that connect people with living systems.",
    },
  ],
};
