import Image from "next/image";
import { images } from "@/lib/images";

export function Cause() {
  return (
    <section id="cause" className="grid sm:grid-cols-2 border-t-[6px] border-yellow/40">
      <div className="bg-teal p-10 sm:p-14 flex flex-col items-start border-b-4 sm:border-b-0 sm:border-r-4 border-ink-900/20">
        <Image
          src={images.washIp}
          alt="Washington Innocence Project"
          width={160}
          height={40}
          className="h-10 w-auto mb-5"
        />
        <p className="font-display text-2xl text-ink-900 mb-3">
          Washington Innocence Project
        </p>
        <p className="text-sm text-ink-900/90 leading-relaxed">
          Works to free innocent people from prison and reform the criminal legal
          system in Washington State — the charity closest to Mike McCready&apos;s
          own advocacy.
        </p>
      </div>
      <div className="bg-pink-600 p-10 sm:p-14 flex flex-col items-start">
        <Image
          src={images.tennIp}
          alt="Tennessee Innocence Project"
          width={160}
          height={40}
          className="h-10 w-auto mb-5"
        />
        <p className="font-display text-2xl text-cream-100 mb-3">
          Tennessee Innocence Project
        </p>
        <p className="text-sm text-cream-100/80 leading-relaxed">
          A Nashville-based nonprofit dedicated to identifying and correcting
          wrongful convictions across Tennessee through investigation and
          litigation.
        </p>
      </div>
      {/* JJ-09 — ON HOLD: Impact statistics module. Awaiting approved client copy. Do not source or estimate figures. */}
      <div className="col-span-full bg-ink-900 p-8 flex justify-center border-t-4 border-dashed border-yellow/40">
        <div className="border-2 border-dashed border-yellow p-5 max-w-3xl">
          <p className="font-tag uppercase text-xs tracking-[0.2em] text-yellow mb-1">
            Needs Client Input
          </p>
          <p className="text-sm text-cream-100/80">
            Impact stats, case highlights, or a client quote can be dropped in
            here once approved — happy to add before launch.
          </p>
        </div>
      </div>
    </section>
  );
}
