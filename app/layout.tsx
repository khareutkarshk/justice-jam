import type { Metadata } from "next";
import { EventSchema } from "@/components/EventSchema";
import { SkipLink } from "@/components/SkipLink";
import { TrackingPixel } from "@/components/TrackingPixel";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: "Social Link" }],
  creator: "Social Link",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Justice Jam — Oct 27, 2026",
    description: siteConfig.description,
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    url: siteConfig.url,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Justice Jam — Official event poster",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Justice Jam — Oct 27, 2026",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body
        className="min-h-full flex flex-col pb-20"
        suppressHydrationWarning
      >
        <SkipLink />
        <TrackingPixel />
        <EventSchema />
        {children}
      </body>
    </html>
  );
}
