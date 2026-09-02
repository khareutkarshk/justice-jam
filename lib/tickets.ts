// JJ-07: AXS ticketing URL pending from venue. Set this single value when the live purchase page is ready.
// Until then, all ticket CTAs resolve to the on-page tickets section (#tickets).
export const TICKETING_URL: string | null = null;

export const TICKETING_HREF = TICKETING_URL ?? "#tickets";

export const TICKETING_PLACEHOLDER_LABEL =
  "Ticketing link pending — AXS URL not yet available";
