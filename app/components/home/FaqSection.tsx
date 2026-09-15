import type { FAQItem } from '@/lib/seo/structured-data';
import Reveal from './Reveal';

// ---------------------------------------------------------------------------
// Question-and-answer block. Rendered as plain <details> so the full answer is
// in the HTML for crawlers and AI assistants, not behind a click handler. Pair
// it with generateFAQSchema() on the page so the same copy is also in JSON-LD.
// ---------------------------------------------------------------------------
type Props = {
  heading: React.ReactNode;
  intro?: string;
  faqs: FAQItem[];
  id?: string;
  tone?: 'light' | 'sand';
};

export default function FaqSection({
  heading,
  intro,
  faqs,
  id = 'faq',
  tone = 'sand',
}: Props) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28 ${
        tone === 'sand' ? 'bg-sand' : 'bg-white'
      }`}
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
        <Reveal>
          <div className="lg:sticky lg:top-32">
            <h2 className="font-display text-[36px] font-black uppercase leading-[0.92] tracking-[-0.02em] sm:text-[46px] lg:text-[54px]">
              {heading}
            </h2>
            {intro && (
              <p className="mt-6 max-w-md text-[17px] leading-[1.6] text-muted">
                {intro}
              </p>
            )}
          </div>
        </Reveal>
        <Reveal delay={120}>
          <dl className="border-t border-line">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group border-b border-line"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-left">
                  <dt className="text-[18px] font-semibold leading-[1.4] text-ink sm:text-[20px]">
                    {faq.question}
                  </dt>
                  <span
                    aria-hidden="true"
                    className="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-line text-ink transition-transform group-open:rotate-45"
                  >
                    <svg
                      className="h-3.5 w-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <dd className="pb-7 text-[16px] leading-[1.7] text-muted sm:text-[17px]">
                  {faq.answer}
                </dd>
              </details>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
