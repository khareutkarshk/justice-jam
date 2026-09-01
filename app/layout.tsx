import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Justice Jam — Oct 27, 2026 — Cannery Hall, Nashville",
  description:
    "Justice Jam: a benefit concert presented by the Washington Innocence Project and Tennessee Innocence Project. October 27, 2026 at Cannery Hall, Nashville, TN.",
  openGraph: {
    title: "Justice Jam — Oct 27, 2026",
    description:
      "A benefit concert for the Washington Innocence Project and Tennessee Innocence Project. Cannery Hall, Nashville, TN.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body
        className="min-h-full flex flex-col pb-20"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
