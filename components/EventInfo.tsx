import Link from "next/link";

export function EventInfo() {
  return (
    <section
      id="info"
      className="bg-ink-900 py-14 sm:py-20 border-t-4 border-yellow"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <p className="font-tag uppercase text-yellow text-sm tracking-widest mb-1 text-center">
          Event Info
        </p>
        <h2 className="font-display text-5xl sm:text-6xl text-cream-100 text-center mb-10">
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
              <p className="font-heading text-base mb-2">Cannery Hall</p>
              <p className="text-sm text-ink-900/80">
                1 Cannery Row, Nashville, TN 37203
              </p>
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
          <div className="h-[340px] sm:h-full min-h-[420px] border-4 border-yellow bg-ink-800 flex flex-col items-center justify-center text-center p-8 gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className="w-14 h-14 text-yellow"
              aria-hidden="true"
            >
              <path
                d="M12 22s8-7.58 8-13a8 8 0 1 0-16 0c0 5.42 8 13 8 13z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle
                cx="12"
                cy="9"
                r="3"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            <p className="font-heading text-2xl text-cream-100">Cannery Hall</p>
            <p className="font-tag text-sm text-cream-100/70 uppercase tracking-wide">
              1 Cannery Row · Nashville, TN 37203
            </p>
            <Link
              href="https://www.google.com/maps/search/?api=1&query=Cannery+Hall+1+Cannery+Row+Nashville+TN+37203"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 bg-yellow text-ink-900 font-tag uppercase tracking-wide px-6 py-3 rounded-sm hover:bg-cream-100 transition-colors"
            >
              Get Directions →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
