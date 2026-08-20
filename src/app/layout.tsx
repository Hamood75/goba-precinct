import type { Metadata } from "next";
import { Archivo, Figtree } from "next/font/google";
import "./globals.css";

const display = Archivo({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Goba Eco Precinct",
    template: "%s · Goba Eco Precinct",
  },
  description:
    "Experience the Goba lifestyle — apartments, houses, and green precinct living on one master-planned site in Goba.",
  openGraph: {
    title: "Goba Eco Precinct",
    description:
      "A lifestyle precinct with homes, amenities, and infrastructure — enquire while residences remain.",
    type: "website",
    siteName: "Goba Eco Precinct",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
