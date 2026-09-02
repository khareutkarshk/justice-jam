"use client";

import { useEffect, useRef, useState } from "react";
import { images } from "@/lib/images";
import { marqueeArtistNames } from "@/lib/content";
import { SponsorLogo } from "@/components/SponsorLogo";

const SEPARATOR = " ★ ";
const baseCycle = marqueeArtistNames.join(SEPARATOR) + SEPARATOR;

function buildSegment(cyclesPerHalf: number) {
  return baseCycle.repeat(Math.max(1, cyclesPerHalf));
}

export function Marquee() {
  const containerRef = useRef<HTMLElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);
  const [segment, setSegment] = useState(() => buildSegment(3));

  useEffect(() => {
    function update() {
      const container = containerRef.current;
      const measure = measureRef.current;
      if (!container || !measure) return;

      const cycleWidth = measure.getBoundingClientRect().width;
      const viewportWidth = container.getBoundingClientRect().width;
      if (cycleWidth <= 0 || viewportWidth <= 0) return;

      const cyclesPerHalf = Math.ceil(viewportWidth / cycleWidth) + 1;
      setSegment(buildSegment(cyclesPerHalf));
    }

    update();

    const observer = new ResizeObserver(update);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-teal py-4 overflow-hidden border-y-4 border-ink-900"
      aria-label="Featured artists"
    >
      <span
        ref={measureRef}
        className="pointer-events-none absolute left-0 top-0 -z-10 opacity-0 font-tag uppercase text-lg sm:text-xl tracking-widest whitespace-nowrap"
        aria-hidden="true"
      >
        {baseCycle}
      </span>
      <div className="marquee-track font-tag uppercase text-lg sm:text-xl tracking-widest text-ink-900">
        <span className="marquee-segment">{segment}</span>
        <span className="marquee-segment" aria-hidden="true">
          {segment}
        </span>
      </div>
    </section>
  );
}

export function PresentedBy() {
  return (
    <section className="bg-ink-900 py-6 border-b-4 border-teal/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
        <p className="font-tag uppercase text-cream-100/80 text-sm tracking-[0.2em] shrink-0">
          Presented by
        </p>
        <SponsorLogo src={images.washIp} alt="Washington Innocence Project" />
        <span className="text-cream-100/40 font-tag text-xl shrink-0">&</span>
        <SponsorLogo src={images.tennIp} alt="Tennessee Innocence Project" />
      </div>
    </section>
  );
}
