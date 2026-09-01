"use client";

import Image from "next/image";
import { images } from "@/lib/images";

export function PosterModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-ink-900/90 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Poster preview"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 text-cream-100 text-3xl leading-none hover:text-yellow transition-colors"
        aria-label="Close poster"
      >
        ×
      </button>
      <Image
        src={images.poster}
        alt="Official Justice Jam poster"
        width={600}
        height={840}
        className="max-h-[90vh] w-auto object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
