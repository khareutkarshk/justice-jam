import Image from "next/image";
import { images } from "@/lib/images";

const ARTISTS =
  "MIKE McCREADY ★ DIERKS BENTLEY ★ JAID JOICE ★ McCRARY SISTERS ★ ANGIE K ★ TERRI CLARK ★ BOBBY MESSANO ★ WENDY MOTEN ★ ";

export function Marquee() {
  const track = ARTISTS.repeat(2);
  return (
    <section className="bg-yellow py-4 overflow-hidden border-y-4 border-ink-900">
      <div className="marquee-track font-tag uppercase text-lg sm:text-xl tracking-widest text-ink-900">
        <span className="px-4">{track}</span>
        <span className="px-4" aria-hidden="true">
          {track}
        </span>
      </div>
    </section>
  );
}

export function PresentedBy() {
  return (
    <section className="bg-ink-900 py-6 border-b-2 border-cream-100/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-center gap-5 sm:gap-10">
        <p className="font-tag uppercase text-cream-100/60 text-xs tracking-wider">
          Presented by
        </p>
        <Image
          src={images.washIp}
          alt="Washington Innocence Project"
          width={160}
          height={36}
          className="h-9 w-auto"
        />
        <span className="text-cream-100/40 font-heading text-xl">&</span>
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
