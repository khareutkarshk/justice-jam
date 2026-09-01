"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { navLinks } from "@/lib/site";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      className="w-6 h-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      {open ? (
        <path d="M6 6l12 12M18 6L6 18" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" />
      )}
    </svg>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 bg-ink-900/95 backdrop-blur border-b-2 border-teal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        <Link
          href="#top"
          className="font-display text-xl text-cream-100 shrink-0"
          onClick={closeMenu}
        >
          JUSTICE JAM
        </Link>

        <nav
          className="hidden md:flex gap-7 font-tag uppercase text-xs tracking-widest text-cream-100/80"
          aria-label="Main navigation"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-yellow transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#tickets"
            className="hidden sm:inline-flex bg-teal text-ink-900 font-tag uppercase text-xs tracking-widest px-5 py-2.5 rounded-sm hover:bg-yellow hover:text-ink-900 transition-colors"
            onClick={closeMenu}
          >
            Get Tickets
          </Link>

          <button
            ref={menuButtonRef}
            type="button"
            className="md:hidden p-2 text-cream-100 hover:text-yellow transition-colors"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <>
          <button
            type="button"
            className="md:hidden fixed inset-0 top-[57px] bg-ink-900/60 z-40"
            aria-label="Close menu overlay"
            onClick={closeMenu}
          />
          <nav
            id={menuId}
            ref={menuRef}
            className="md:hidden absolute left-0 right-0 top-full z-50 bg-ink-900 border-b-2 border-teal shadow-lg"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col font-tag uppercase text-sm tracking-widest">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block px-6 py-4 text-cream-100/90 hover:bg-ink-800 hover:text-yellow transition-colors border-b border-cream-100/10"
                    onClick={closeMenu}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#tickets"
                  className="block px-6 py-4 bg-teal text-ink-900 hover:bg-yellow transition-colors text-center"
                  onClick={closeMenu}
                >
                  Get Tickets
                </Link>
              </li>
            </ul>
          </nav>
        </>
      )}
    </header>
  );
}
