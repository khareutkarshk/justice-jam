import { images } from "@/lib/images";
import { lineupArtists } from "@/lib/content";
import { TICKETING_HREF } from "@/lib/tickets";

export const siteConfig = {
  name: "Justice Jam",
  title: "Justice Jam — Oct 27, 2026 — Cannery Hall, Nashville",
  description:
    "Justice Jam: a benefit concert for the Washington Innocence Project and Tennessee Innocence Project. October 27, 2026 at Cannery Hall, Nashville, TN.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ogImage: images.poster,
  keywords: [
    "Justice Jam",
    "Nashville concert",
    "Cannery Hall",
    "benefit concert",
    "Washington Innocence Project",
    "Tennessee Innocence Project",
    "Mike McCready",
    "Dierks Bentley",
    "country music",
    "live music Nashville",
  ],
  event: {
    name: "Justice Jam",
    startDate: "2026-10-27T19:00:00-05:00",
    doorTime: "2026-10-27T18:30:00-05:00",
    endDate: "2026-10-27T23:00:00-05:00",
    venue: {
      name: "Cannery Hall",
      street: "1 Cannery Row",
      city: "Nashville",
      region: "TN",
      postalCode: "37203",
      country: "US",
    },
    performers: lineupArtists.map((a) => a.name),
    ticketPrice: 125,
    ticketCurrency: "USD",
    ticketUrl: TICKETING_HREF,
  },
  maps: {
    embedUrl:
      "https://maps.google.com/maps?q=Cannery+Hall,+1+Cannery+Row,+Nashville,+TN+37203&hl=en&z=16&output=embed",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Cannery+Hall+1+Cannery+Row+Nashville+TN+37203",
  },
} as const;

export const navLinks = [
  { href: "#lineup", label: "Lineup" },
  { href: "#cause", label: "The Cause" },
  { href: "#info", label: "Details" },
  { href: "#tickets", label: "Tickets" },
  { href: "#faq", label: "FAQ" },
] as const;
