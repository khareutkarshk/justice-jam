import Image from "next/image";
import { images } from "@/lib/images";

export function Partners() {
  return (
    <section className="bg-cream-100 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-center gap-10">
        <Image
          src={images.washIp}
          alt="Washington Innocence Project"
          width={160}
          height={40}
          className="h-9 w-auto"
        />
        <Image
          src={images.tennIp}
          alt="Tennessee Innocence Project"
          width={160}
          height={40}
          className="h-9 w-auto"
        />
        <Image
          src={images.vitalogy}
          alt="Vitalogy Foundation"
          width={160}
          height={40}
          className="h-9 w-auto"
        />
        <Image
          src={images.soundEmporium}
          alt="Sound Emporium"
          width={160}
          height={40}
          className="h-8 w-auto"
        />
        <span className="font-tag uppercase text-sm tracking-wide text-ink-900">
          The Cannery
        </span>
      </div>
    </section>
  );
}
