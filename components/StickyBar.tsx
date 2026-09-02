"use client";

import { useEffect, useState } from "react";
import { TicketCta } from "@/components/TicketCta";

export function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    function onScroll() {
      if (!hero) return;
      setVisible(window.scrollY > hero.offsetHeight);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 bg-ink-900 border-t-4 border-teal px-4 py-3 flex items-center justify-between gap-4 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="font-display text-cream-100 text-sm hidden sm:inline">
          JUSTICE JAM
        </span>
        <span className="font-tag text-xs text-cream-100/70 uppercase tracking-[0.15em]">
          Oct 27 · Cannery Hall
        </span>
      </div>
      <TicketCta className="btn-primary bg-teal text-ink-900 font-tag uppercase text-xs tracking-[0.2em] px-5 py-2.5 rounded-sm hover:bg-yellow hover:text-ink-900 transition-colors">
        Get Tickets
      </TicketCta>
    </div>
  );
}
