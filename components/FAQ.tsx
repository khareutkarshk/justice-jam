const faqs = [
  {
    question: "What time do doors open?",
    answer:
      "Doors open at 6:30 PM, with the show beginning at 7:00 PM.",
    open: true,
  },
  {
    question: "Is there an age restriction?",
    answer: "No age restriction — Justice Jam is an all-ages event.",
  },
  {
    question: "Where do tickets go on sale?",
    answer:
      "All tickets for Justice Jam are sold exclusively through AXS.",
  },
  {
    question: "Where does the money go?",
    answer:
      "Proceeds benefit the Washington Innocence Project and the Tennessee Innocence Project, both dedicated to freeing the wrongfully convicted.",
  },
  {
    question: "Is there a VIP experience?",
    answer:
      "Yes — a VIP Pre-Party runs 5:00–6:00 PM at 3rd Man Records, and a VIP After-Party follows at Amaranth on the Cannery's 3rd floor.",
  },
  {
    question: "Where can I park?",
    answer: (
      <>
        Cannery Hall sits within the Cannery District, with several surface lots
        and street parking nearby.{" "}
        <span className="italic text-cream-100/50">
          Details to be confirmed with the venue.
        </span>
      </>
    ),
  },
];

function Chevron() {
  return (
    <svg
      className="chev w-5 h-5 transition-transform text-yellow"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="bg-ink-900 py-16 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <p className="font-tag uppercase text-xs tracking-widest text-cream-100/50 mb-1 text-center">
          FAQ
        </p>
        <h2 className="font-display text-5xl sm:text-6xl text-cream-100 text-center mb-10">
          QUESTIONS?
        </h2>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="bg-ink-800 border-2 border-cream-100/10 p-5"
              open={faq.open}
            >
              <summary className="flex justify-between items-center font-heading text-lg text-cream-100">
                {faq.question}
                <Chevron />
              </summary>
              <p className="mt-3 text-sm text-cream-100/70">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
