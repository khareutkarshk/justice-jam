"use client";

import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { Countdown } from "@/components/Countdown";

export function Hero({ onPosterOpen }: { onPosterOpen: () => void }) {

  return (
    <section id="top" className="relative glow-bg overflow-hidden py-14 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <p className="font-script text-2xl sm:text-3xl text-teal mb-3">
          presenting
        </p>
        <h1 className="font-display leading-[0.85] text-[3.6rem] sm:text-[6rem] lg:text-[7.5rem] text-cream-100 mt-2">
          JUSTICE JAM
        </h1>
        <p className="text-yellow text-lg mt-4">★ ★ ★ ★ ★ ★ ★ ★</p>
        <p className="font-heading text-2xl sm:text-3xl mt-4 text-cream-100">
          October 27 · 2026
        </p>
        <p className="font-tag uppercase tracking-wide text-sm sm:text-base mt-1 text-cream-100/70">
          Cannery Hall · Nashville, TN
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-12 grid lg:grid-cols-[1fr_1.1fr_1fr] gap-8 lg:gap-10 items-start relative z-10">
        <div className="order-2 lg:order-1 space-y-5">
          <div className="bg-ink-900/70 border border-cream-100/15 p-5">
            <p className="font-tag uppercase text-xs tracking-widest text-yellow mb-3">
              The Facts
            </p>
            <dl className="text-sm font-tag uppercase space-y-2">
              <div className="flex justify-between border-b border-cream-100/10 pb-2">
                <dt className="text-cream-100/50">Date</dt>
                <dd className="text-cream-100">Oct 27, 2026</dd>
              </div>
              <div className="flex justify-between border-b border-cream-100/10 pb-2">
                <dt className="text-cream-100/50">Doors / Show</dt>
                <dd className="text-cream-100">6:30 / 7:00 PM</dd>
              </div>
              <div className="flex justify-between border-b border-cream-100/10 pb-2">
                <dt className="text-cream-100/50">Venue</dt>
                <dd className="text-cream-100">Cannery Hall</dd>
              </div>
              <div className="flex justify-between border-b border-cream-100/10 pb-2">
                <dt className="text-cream-100/50">Age</dt>
                <dd className="text-cream-100">All Ages</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-cream-100/50">Ticketing</dt>
                <dd className="text-cream-100">AXS</dd>
              </div>
            </dl>
          </div>

          <div className="bg-ink-900/70 border border-cream-100/15 p-5">
            <p className="font-tag uppercase text-xs tracking-widest text-yellow mb-3">
              Countdown
            </p>
            <Countdown />
          </div>

          <Link
            href="#lineup"
            className="block text-center border-2 border-cream-100 text-cream-100 font-tag uppercase tracking-wide px-5 py-3 rounded-sm hover:bg-cream-100 hover:text-ink-900 transition-colors text-sm"
          >
            See Lineup
          </Link>
        </div>

        <div className="order-1 lg:order-2 flex flex-col items-center py-2">
          <button
            type="button"
            onClick={onPosterOpen}
            className="poster-frame block w-full max-w-sm border-4 border-cream-100 shadow-2xl cursor-pointer"
            aria-label="View full poster"
          >
            <Image
              src={images.poster}
              alt="Official Justice Jam poster"
              width={400}
              height={560}
              className="w-full h-auto block"
              priority
            />
          </button>
          <p className="font-tag uppercase text-xs tracking-widest text-cream-100/50 mt-3">
            Tap poster to zoom
          </p>
        </div>

        <div className="order-3 space-y-4">
          <div className="border-2 border-teal bg-ink-900/70 p-5">
            <p className="font-heading text-2xl text-cream-100 mb-2">Get In</p>
            <p className="text-sm text-cream-100/70 mb-4">
              General Admission tickets are on sale now. VIP tiers to be
              announced.
            </p>
            <p className="font-display text-4xl text-cream-100 mb-1">$125</p>
            <p className="text-xs text-cream-100/50 mb-4">
              General Admission · 1,200 available
            </p>
            <Link
              href="#tickets"
              className="block text-center bg-teal text-ink-900 font-tag uppercase tracking-widest px-6 py-3 hover:bg-yellow hover:text-ink-900 transition-colors"
            >
              Buy Now
            </Link>
          </div>
          <p className="text-yellow text-center text-sm">★ ★ ★ ★ ★ ★ ★ ★</p>
        </div>
      </div>
    </section>
  );
}
