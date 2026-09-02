import Link from "next/link";
import {
  TICKETING_HREF,
  TICKETING_PLACEHOLDER_LABEL,
  TICKETING_URL,
} from "@/lib/tickets";

type TicketCtaProps = {
  children: React.ReactNode;
  className?: string;
};

export function TicketCta({ children, className = "" }: TicketCtaProps) {
  const isPlaceholder = TICKETING_URL === null;

  if (isPlaceholder) {
    return (
      <Link
        href={TICKETING_HREF}
        className={className}
        title={TICKETING_PLACEHOLDER_LABEL}
        aria-label={`${children} — ${TICKETING_PLACEHOLDER_LABEL}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={TICKETING_HREF}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  );
}
