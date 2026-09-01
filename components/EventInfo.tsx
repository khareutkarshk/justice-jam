import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function EventInfo() {
  const { maps, event } = siteConfig;
  const { venue } = event;
  const address = `${venue.street}, ${venue.city}, ${venue.region} ${venue.postalCode}`;

  return (
    <section
      id="info"
      className="bg-ink-900 py-14 sm:py-20 border-t-4 border-yellow"
      aria-labelledby="event-info-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <p className="font-tag uppercase text-yellow text-sm tracking-widest mb-1 text-center">
          Event Info
        </p>
        <h2
          id="event-info-heading"
          className="font-display text-5xl sm:text-6xl text-cream-100 text-center mb-10"
        >
          THE DETAILS
        </h2>
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <div className="grid grid-cols-2 gap-3 font-tag text-sm uppercase">
              {[
                { label: "Date", value: "Oct 27, 2026" },
                { label: "Doors / Show", value: "6:30 / 7:00 PM" },
                { label: "Age Restriction", value: "None — All Ages" },
                { label: "Ticketing", value: "AXS" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="bg-ink-800 border border-cream-100/10 p-4"
                >
                  <p className="text-xs text-cream-100/50">{label}</p>
                  <p className="text-lg mt-1 text-cream-100">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-yellow text-ink-900 p-5">
              <p className="font-heading text-base mb-2">{venue.name}</p>
              <p className="text-sm text-ink-900/80">{address}</p>
            </div>
            <div className="mt-6 space-y-3">
              <div className="bg-ink-800 p-4 border-l-4 border-teal">
                <p className="font-heading text-sm text-cream-100">
                  VIP Pre-Party — 3rd Man Records
                </p>
                <p className="text-xs mt-1 text-cream-100/70">
                  5:00 – 6:00 PM. Contact Ben Blackwell for details.
                </p>
              </div>
              <div className="bg-ink-800 p-4 border-l-4 border-pink-600">
                <p className="font-heading text-sm text-cream-100">
                  VIP After-Party — Amaranth
                </p>
                <p className="text-xs mt-1 text-cream-100/70">
                  Cannery 3rd floor. Capacity 400 · $1,500 beverage minimum.
                </p>
              </div>
            </div>
          </div>
          <div className="min-h-[420px] border-4 border-yellow bg-ink-800 flex flex-col overflow-hidden">
            <iframe
              title={`Map showing ${venue.name} at ${address}`}
              src={maps.embedUrl}
              className="w-full flex-1 min-h-[340px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="p-4 text-center border-t border-cream-100/10">
              <p className="font-heading text-lg text-cream-100">{venue.name}</p>
              <p className="font-tag text-xs text-cream-100/70 uppercase tracking-wide mt-1">
                {venue.street} · {venue.city}, {venue.region} {venue.postalCode}
              </p>
              <Link
                href={maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 bg-yellow text-ink-900 font-tag uppercase tracking-wide px-6 py-3 rounded-sm hover:bg-cream-100 transition-colors"
              >
                Get Directions →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
