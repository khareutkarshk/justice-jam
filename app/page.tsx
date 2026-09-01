"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee, PresentedBy } from "@/components/Marquee";
import { Lineup } from "@/components/Lineup";
import { Cause } from "@/components/Cause";
import { EventInfo } from "@/components/EventInfo";
import { Tickets } from "@/components/Tickets";
import { Partners } from "@/components/Partners";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { StickyBar } from "@/components/StickyBar";
import { PosterModal } from "@/components/PosterModal";

export default function Home() {
  const [posterOpen, setPosterOpen] = useState(false);

  return (
    <>
      <Header />
      <main>
        <Hero onPosterOpen={() => setPosterOpen(true)} />
        <Marquee />
        <PresentedBy />
        <Lineup />
        <Cause />
        <EventInfo />
        <Tickets />
        <Partners />
        <FAQ />
      </main>
      <Footer />
      <StickyBar />
      <PosterModal open={posterOpen} onClose={() => setPosterOpen(false)} />
    </>
  );
}
