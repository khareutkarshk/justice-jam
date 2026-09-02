# Justice Jam — Handover Notes (JJ-WEB-01 Rev A)

## Work items completed

| Item | Status | Notes |
|------|--------|-------|
| JJ-01 | Done | Marquee loop fixed — duplicate segments, no padding gap at seam |
| JJ-02 | Done | Wendy Moten removed sitewide; headline flagged for client copy |
| JJ-03 | Done | Palmello & TAY Rosemary retired; Roadway eyebrows + PressBox display |
| JJ-04 | Done | Lineup eyebrow 14–16px, 90% opacity, 0.2em tracking; headline larger on mobile |
| JJ-05 | Done | Glow extended to lineup/details, stronger borders, card hover, CTA teal glow |
| JJ-06 | Done | FAQ functional; marked PENDING CLIENT COPY in `components/FAQ.tsx` |
| JJ-07 | Done | Ticket CTAs use `lib/tickets.ts` placeholder; single-line AXS URL swap |
| JJ-08 | Done | Meta pixel placeholder in `components/TrackingPixel.tsx` |
| JJ-09 | On hold | Impact stats module awaiting approved client figures |
| JJ-10 | Done | QA at 375 / 768 / 1280 breakpoints |

## Placeholders left in place

- **Lineup headline** (`lib/content.ts`): still reads "EIGHT ACTS. ONE NIGHT." — pending replacement copy for 7-act lineup (JJ-02)
- **Ticket tier labels** (`components/Tickets.tsx`): VIP Balcony, High-Top Seating, Meet & Greet — naming under review (JJ-07 flag)
- **AXS ticketing URL** (`lib/tickets.ts`): `TICKETING_URL = null` — set when venue issues live link
- **FAQ content** (`components/FAQ.tsx`): placeholder Q&A — PENDING CLIENT COPY (JJ-06)
- **Impact statistics** (`components/Cause.tsx`): dashed placeholder — JJ-09 blocked
- **VIP tier pricing**: TBD on 3 tiers; GA $125 confirmed
- **Meta retargeting pixel** (`components/TrackingPixel.tsx`): snippet not yet issued (JJ-08)
- **Notify Me buttons**: disabled until email capture is scoped

## Flagged questions for project lead

1. **JJ-02**: Please supply replacement lineup headline copy (7 acts).
2. **JJ-07**: Confirm final ticket tier labels vs. current build labels.
3. **JJ-07**: Provide AXS purchase URL when available — update `TICKETING_URL` in `lib/tickets.ts` only.
4. **JJ-08**: Provide Meta pixel snippet for `components/TrackingPixel.tsx`.
5. **JJ-09**: Provide 3–5 approved impact statistics for The Cause section.

## Single-change integration points

| Integration | File | What to change |
|-------------|------|----------------|
| AXS ticket URL | `lib/tickets.ts` | Set `TICKETING_URL` |
| Meta pixel | `components/TrackingPixel.tsx` | Insert issued snippet |
| Lineup headline | `lib/content.ts` | Update `lineupHeadline` |
| FAQ copy | `components/FAQ.tsx` | Replace `faqs` array |
| Impact stats | `components/Cause.tsx` | Replace JJ-09 placeholder block |
| Production URL | `.env.local` | `NEXT_PUBLIC_SITE_URL` |

## Design system compliance

- **Fonts in use**: PressBox Clean (display), Roadway (labels), Inter (body)
- **Retired**: Palmello, TAY Rosemary — not loaded or referenced
- **Colors**: #0B0B0B, #EAE5CE, #00A3CE, existing gold/magenta accents only
- **Accessibility**: skip link, focus-visible, reduced-motion on all animations/hovers

