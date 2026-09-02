import Image from "next/image";
import { images } from "@/lib/images";

export function Footer() {
  return (
    <footer className="bg-ink-900 border-t-2 border-cream-100/10 py-10 text-center">
      <Image
        src={images.logo}
        alt="Justice Jam"
        width={160}
        height={32}
        className="h-8 w-auto mx-auto mb-3"
        style={{ width: "auto" }}
      />
      <p className="text-xs text-cream-100/60">
        Cannery Hall · 1 Cannery Row · Nashville, TN 37203
      </p>
      <p className="text-xs text-cream-100/60 mt-1">
        Benefiting the Washington Innocence Project & Tennessee Innocence
        Project
      </p>
      <Image
        src={images.socialLink}
        alt="Social Link"
        width={80}
        height={16}
        className="h-4 w-auto mx-auto mt-6 opacity-70"
        style={{ width: "auto" }}
      />
      <p className="text-[11px] text-cream-100/40 mt-2">
        © 2026 Justice Jam. Site by Social Link.
      </p>
    </footer>
  );
}
