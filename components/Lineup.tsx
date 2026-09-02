import Image from "next/image";
import { lineupArtists, lineupHeadline } from "@/lib/content";

export function Lineup() {
  return (
    <section
      id="lineup"
      className="relative glow-bg-subtle py-16 sm:py-20 border-t-4 border-b-4 border-teal/30"
      aria-labelledby="lineup-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <p className="font-tag uppercase text-sm sm:text-base tracking-[0.2em] text-cream-100/90 mb-2 text-center">
          The Lineup
        </p>
        <h2
          id="lineup-heading"
          className="font-display text-[2.75rem] sm:text-6xl lg:text-[4rem] text-cream-100 text-center mb-12 leading-[0.9]"
        >
          {lineupHeadline.line1}
          <br className="sm:hidden" /> {lineupHeadline.line2}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {lineupArtists.map((artist) => (
            <div
              key={artist.name}
              className={`lineup-card ${artist.cardClass} bg-ink-800 border-t-[6px] ${artist.borderColor} border-x-2 border-b-2 border-cream-100/10 p-5`}
            >
              {artist.image ? (
                <Image
                  src={artist.image}
                  alt={artist.name}
                  width={300}
                  height={375}
                  className="aspect-[4/5] w-full object-cover mb-4"
                />
              ) : (
                <div className="aspect-[4/5] bg-ink-900 flex items-center justify-center mb-4 border-2 border-cream-100/10">
                  <span className="font-display text-6xl text-cream-100">
                    {artist.initials}
                  </span>
                </div>
              )}
              <p className="font-display text-xl text-cream-100">
                {artist.name}
              </p>
              <p className="text-sm mt-2 leading-snug text-cream-100/70">
                {artist.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
