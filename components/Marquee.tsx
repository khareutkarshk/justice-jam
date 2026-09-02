import Image from "next/image";
import { images } from "@/lib/images";
import { marqueeArtistNames } from "@/lib/content";

function buildMarqueeTrack() {
  return marqueeArtistNames.join(" ★ ") + " ★ ";
}

export function Marquee() {
  const track = buildMarqueeTrack();

  return (
    <section
      className="bg-teal py-4 overflow-hidden border-y-4 border-ink-900"
      aria-label="Featured artists"
    >
      <div className="marquee-track font-tag uppercase text-lg sm:text-xl tracking-widest text-ink-900">
        <span className="marquee-segment">{track}</span>
        <span className="marquee-segment" aria-hidden="true">
          {track}
        </span>
      </div>
    </section>
  );
}

export function PresentedBy() {
  return (
    <section className="bg-ink-900 py-6 border-b-4 border-teal/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-center gap-5 sm:gap-10">
        <p className="font-tag uppercase text-cream-100/80 text-sm tracking-[0.2em]">
          Presented by
        </p>
        <Image
          src={images.washIp}
          alt="Washington Innocence Project"
          width={160}
          height={36}
          className="h-9 w-auto"
        />
        <span className="text-cream-100/40 font-tag text-xl">&</span>
        <Image
          src={images.tennIp}
          alt="Tennessee Innocence Project"
          width={160}
          height={36}
          className="h-9 w-auto"
        />
      </div>
    </section>
  );
}
