import { siteConfig } from "@/lib/site";

export function EventSchema() {
  const { event, url, description } = siteConfig;
  const { venue } = event;

  const schema = {
    "@context": "https://schema.org",
    "@type": "MusicEvent",
    name: event.name,
    description,
    startDate: event.startDate,
    doorTime: event.doorTime,
    endDate: event.endDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    image: `${url}${siteConfig.ogImage}`,
    url,
    location: {
      "@type": "Place",
      name: venue.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: venue.street,
        addressLocality: venue.city,
        addressRegion: venue.region,
        postalCode: venue.postalCode,
        addressCountry: venue.country,
      },
    },
    performer: event.performers.map((name) => ({
      "@type": "MusicGroup",
      name,
    })),
    organizer: [
      {
        "@type": "Organization",
        name: "Washington Innocence Project",
      },
      {
        "@type": "Organization",
        name: "Tennessee Innocence Project",
      },
    ],
    offers: {
      "@type": "Offer",
      name: "General Admission",
      price: event.ticketPrice,
      priceCurrency: event.ticketCurrency,
      availability: "https://schema.org/InStock",
      url: event.ticketUrl,
      validFrom: "2026-01-01",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
