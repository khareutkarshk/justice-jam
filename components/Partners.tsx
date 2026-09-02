import { SponsorLogo } from "@/components/SponsorLogo";
import { images } from "@/lib/images";

export function Partners() {
  return (
    <section className="bg-cream-100 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-center gap-10">
        <SponsorLogo src={images.washIp} alt="Washington Innocence Project" />
        <SponsorLogo src={images.tennIp} alt="Tennessee Innocence Project" />
        <SponsorLogo src={images.vitalogy} alt="Vitalogy Foundation" />
        <SponsorLogo
          src={images.soundEmporium}
          alt="Sound Emporium"
          className="h-8 w-auto shrink-0"
        />
        <span className="font-tag uppercase text-sm tracking-wide text-ink-900">
          The Cannery
        </span>
      </div>
    </section>
  );
}
