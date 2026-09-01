import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-ink-900/95 backdrop-blur border-b-2 border-teal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link href="#top" className="font-display text-xl text-cream-100">
          JUSTICE JAM
        </Link>
        <nav className="hidden md:flex gap-7 font-tag uppercase text-xs tracking-widest text-cream-100/80">
          <Link href="#lineup" className="hover:text-yellow transition-colors">
            Lineup
          </Link>
          <Link href="#cause" className="hover:text-yellow transition-colors">
            The Cause
          </Link>
          <Link href="#info" className="hover:text-yellow transition-colors">
            Details
          </Link>
          <Link href="#tickets" className="hover:text-yellow transition-colors">
            Tickets
          </Link>
          <Link href="#faq" className="hover:text-yellow transition-colors">
            FAQ
          </Link>
        </nav>
        <Link
          href="#tickets"
          className="bg-teal text-ink-900 font-tag uppercase text-xs tracking-widest px-5 py-2.5 rounded-sm hover:bg-yellow hover:text-ink-900 transition-colors"
        >
          Get Tickets
        </Link>
      </div>
    </header>
  );
}
