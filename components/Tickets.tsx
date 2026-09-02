import { TicketCta } from "@/components/TicketCta";

// JJ-07: Tier labels pending project lead confirmation (JJ-WEB-01 §07).
// Availability counts and GA pricing are confirmed. Do not change GA ($125 / 1,200).
const tiers = [
  {
    name: "General Admission",
    price: "$125",
    availability: "1,200 available",
    accent: "bg-teal",
    labelColor: "text-ink-900/80",
    priceColor: "text-ink-900",
    availColor: "text-ink-900/70",
    cta: "Buy Now",
    ctaClass:
      "btn-primary block text-center bg-cream-100 text-ink-900 font-tag uppercase tracking-wide px-4 py-3 mt-5 hover:bg-ink-900 hover:text-cream-100 transition-colors",
    badge: "On Sale",
    isPurchase: true,
  },
  {
    name: "VIP Balcony",
    price: "TBD",
    availability: "46 available",
    accent: "bg-ink-800 border-2 border-pink-600",
    labelColor: "text-pink-600",
    priceColor: "text-cream-100/50",
    availColor: "text-cream-100/60",
    cta: "Notify Me",
    ctaClass:
      "block text-center border-2 border-cream-100 text-cream-100 font-tag uppercase tracking-wide px-4 py-3 mt-5 hover:bg-cream-100 hover:text-ink-900 transition-colors",
    isPurchase: false,
  },
  {
    name: "High-Top Seating",
    price: "TBD",
    availability: "16 high-top seats",
    accent: "bg-ink-800 border-2 border-yellow",
    labelColor: "text-yellow",
    priceColor: "text-cream-100/50",
    availColor: "text-cream-100/60",
    cta: "Notify Me",
    ctaClass:
      "block text-center border-2 border-cream-100 text-cream-100 font-tag uppercase tracking-wide px-4 py-3 mt-5 hover:bg-cream-100 hover:text-ink-900 transition-colors",
    isPurchase: false,
  },
  {
    name: "Meet & Greet Add-On",
    price: "TBD",
    availability: "35 available",
    accent: "bg-ink-800 border-2 border-teal",
    labelColor: "text-teal",
    priceColor: "text-cream-100/50",
    availColor: "text-cream-100/60",
    cta: "Notify Me",
    ctaClass:
      "block text-center border-2 border-cream-100 text-cream-100 font-tag uppercase tracking-wide px-4 py-3 mt-5 hover:bg-cream-100 hover:text-ink-900 transition-colors",
    isPurchase: false,
  },
];

export function Tickets() {
  return (
    <section
      id="tickets"
      className="bg-ink-900 py-16 sm:py-20 border-t-[6px] border-teal"
      aria-labelledby="tickets-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="font-tag uppercase text-sm tracking-[0.2em] text-cream-100/90 mb-1 text-center">
          Tickets
        </p>
        <h2
          id="tickets-heading"
          className="font-display text-5xl sm:text-6xl text-cream-100 text-center mb-12"
        >
          GET IN
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier) => (
            <div key={tier.name} className={`${tier.accent} p-6 relative`}>
              {tier.badge && (
                <span className="absolute top-3 right-3 bg-cream-100 text-ink-900 text-[10px] font-tag uppercase px-2 py-1">
                  {tier.badge}
                </span>
              )}
              <p
                className={`font-tag uppercase text-xs tracking-wide ${tier.labelColor} mb-2`}
              >
                {tier.name}
              </p>
              <p className={`font-display text-4xl ${tier.priceColor}`}>
                {tier.price}
              </p>
              <p className={`text-xs mt-2 ${tier.availColor}`}>
                {tier.availability}
              </p>
              {tier.isPurchase ? (
                <TicketCta className={tier.ctaClass}>{tier.cta}</TicketCta>
              ) : (
                <button
                  type="button"
                  disabled
                  title="Notify Me — email capture pending (JJ-07)"
                  className={`${tier.ctaClass} opacity-60 cursor-not-allowed`}
                >
                  {tier.cta}
                </button>
              )}
            </div>
          ))}
        </div>
        <p className="text-sm font-tag uppercase tracking-wide text-yellow mt-6 text-center">
          Needs Client Input — 3 tiers pending final pricing from the venue.
        </p>
        <p className="text-xs font-tag uppercase tracking-wide text-cream-100/50 mt-2 text-center">
          AXS ticketing link pending — purchase CTAs scroll here until live URL is
          issued
        </p>
      </div>
    </section>
  );
}
