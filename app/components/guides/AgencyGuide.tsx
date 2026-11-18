import Link from 'next/link';
import { BookingProvider } from '../home/Booking';
import BookButton from '../home/BookButton';
import FaqSection from '../home/FaqSection';
import Footer from '../home/Footer';
import Nav from '../home/Nav';
import Reveal from '../home/Reveal';
import type { Alternative } from '../../data/loan-officer-alternatives';
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  getStructuredDataScript,
  type FAQItem,
} from '@/lib/seo/structured-data';

// ---------------------------------------------------------------------------
// "How to choose a marketing agency as a [profession]" buyer's guide.
//
// Shared by /loan-officer-marketing-agencies and
// /insurance-agent-marketing-agencies so the two read as one series. Every
// word of copy comes in through props; this file is layout only.
// ---------------------------------------------------------------------------

const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
const numberWord = (n: number) => NUMBER_WORDS[n] ?? String(n);
const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export type AgencyGuideProps = {
  /** Booking analytics source, e.g. "insurance-agent-marketing-agencies". */
  source: string;
  path: string;
  title: string;
  description: string;
  published: string;
  /** Small line above the H1, e.g. "A buyer’s guide for loan officers". */
  eyebrow: string;
  intro: string;
  /** The profession in plural, lower case: "loan officers". */
  audience: string;
  /** Parent service page, for breadcrumbs and links. */
  parent: { name: string; path: string };
  alternatives: Alternative[];
  checklist: Array<{ item: string; detail: string }>;
  /** How Own It Social answers each checklist line. */
  fit: Array<[string, string]>;
  faqs: FAQItem[];
  /** Related reading shown under the FAQ. */
  related?: Array<{ label: string; href: string }>;
};

export default function AgencyGuide(props: AgencyGuideProps) {
  const {
    source,
    path,
    title,
    description,
    published,
    eyebrow,
    intro,
    audience,
    parent,
    alternatives,
    checklist,
    fit,
    faqs,
    related = [],
  } = props;

  const articleSchema = generateArticleSchema({
    headline: title,
    description,
    author: 'Colin Hickmon',
    datePublished: published,
    image: '/og-image.png',
  });
  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: parent.name, url: parent.path },
    { name: 'Choosing an agency', url: path },
  ]);

  const navLinks = [
    { label: 'Compare', href: '#compare' },
    { label: 'Contract checklist', href: '#contract' },
    { label: 'FAQ', href: '#faq' },
    { label: parent.name, href: parent.path },
  ];

  return (
    <BookingProvider source={source}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: getStructuredDataScript(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: getStructuredDataScript(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: getStructuredDataScript(breadcrumbSchema) }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.classList.add('js')`,
        }}
      />

      <div id="top" className="min-h-screen bg-white font-montserrat text-ink antialiased">
        <Nav links={navLinks} homeHref="/" />

        <article>
          {/* ── Title ── */}
          <header className="border-b border-line px-5 pb-16 pt-20 sm:px-8 sm:pb-24 sm:pt-28">
            <div className="mx-auto max-w-[1400px]">
              <p className="font-display text-[12px] font-bold uppercase tracking-[0.14em] text-brand">
                {eyebrow}
              </p>
              <h1 className="mt-6 max-w-[18ch] font-display text-[40px] font-black uppercase leading-[0.9] tracking-[-0.02em] sm:text-[64px] lg:text-[88px]">
                {title}
              </h1>
              <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-20">
                <p className="max-w-2xl text-[18px] leading-[1.6] text-ink sm:text-[21px]">
                  {intro}
                </p>
                <p className="text-[14px] leading-[1.6] text-muted">
                  Written by Colin Hickmon, founder of Own It Social. Cost
                  figures are typical market ranges in the United States as of
                  2026, not quotes. Updated {published}.
                </p>
              </div>
            </div>
          </header>

          {/* ── Comparison ── */}
          <section id="compare" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
            <div className="mx-auto max-w-[1400px]">
              <Reveal>
                <h2 className="max-w-[16ch] font-display text-[36px] font-black uppercase leading-[0.92] tracking-[-0.02em] sm:text-[46px] lg:text-[54px]">
                  {capitalize(numberWord(alternatives.length))} ways to buy marketing, side by side
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <div className="mt-12 overflow-x-auto">
                  <table className="w-full min-w-[960px] border-collapse text-left text-[15px]">
                    <thead>
                      <tr className="border-b border-ink font-display text-[12px] font-bold uppercase tracking-[0.12em] text-muted">
                        <th scope="col" className="py-4 pr-5">Option</th>
                        <th scope="col" className="py-4 pr-5">Typical cost</th>
                        <th scope="col" className="py-4 pr-5">Who runs strategy</th>
                        <th scope="col" className="py-4 pr-5">Who executes</th>
                        <th scope="col" className="py-4 pr-5">Channels</th>
                        <th scope="col" className="py-4 pr-5">Best for</th>
                        <th scope="col" className="py-4">Watch out for</th>
                      </tr>
                    </thead>
                    <tbody>
                      {alternatives.map((a) => (
                        <tr
                          key={a.name}
                          className={`border-b border-line align-top ${a.featured ? 'bg-sand' : ''}`}
                        >
                          <th scope="row" className="py-5 pr-5 text-[16px] font-semibold text-ink">
                            {a.name}
                          </th>
                          <td className="py-5 pr-5 text-ink">{a.typicalCost}</td>
                          <td className="py-5 pr-5 text-ink">{a.whoRunsStrategy}</td>
                          <td className="py-5 pr-5 leading-[1.55] text-ink">{a.whoExecutes}</td>
                          <td className="py-5 pr-5 leading-[1.55] text-ink">{a.channels}</td>
                          <td className="py-5 pr-5 leading-[1.55] text-ink">{a.bestFor}</td>
                          <td className="py-5 leading-[1.55] text-muted">{a.watchOutFor}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Reveal>
              <Reveal delay={180}>
                <div className="mt-12 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-3">
                  {alternatives
                    .filter((a) => !a.featured)
                    .slice(1, 4)
                    .map((a) => (
                      <div key={a.name} className="bg-white p-8">
                        <h3 className="text-[18px] font-semibold text-ink">
                          When {a.name.toLowerCase()} is the right call
                        </h3>
                        <p className="mt-3 text-[15px] leading-[1.65] text-muted">{a.bestFor}.</p>
                      </div>
                    ))}
                </div>
              </Reveal>
            </div>
          </section>

          {/* ── Contract checklist ── */}
          <section id="contract" className="scroll-mt-24 bg-sand px-5 py-20 sm:px-8 sm:py-28">
            <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
              <Reveal>
                <div className="lg:sticky lg:top-32">
                  <h2 className="font-display text-[36px] font-black uppercase leading-[0.92] tracking-[-0.02em] sm:text-[46px] lg:text-[54px]">
                    {capitalize(numberWord(checklist.length))} things to check before you sign
                  </h2>
                  <p className="mt-6 max-w-md text-[17px] leading-[1.6] text-muted">
                    Read any marketing agreement against this list. If a line is
                    missing or vague, ask for it in writing before you sign.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <ol className="border-t border-line">
                  {checklist.map((c, i) => (
                    <li key={c.item} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-line py-7">
                      <span className="font-display text-[13px] font-bold uppercase tracking-[0.12em] text-brand">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="text-[19px] font-semibold leading-[1.35] text-ink">{c.item}</h3>
                        <p className="mt-3 text-[16px] leading-[1.7] text-muted">{c.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>
          </section>

          {/* ── How Own It Social fits ── */}
          <section className="bg-ink px-5 py-20 text-white sm:px-8 sm:py-28">
            <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
              <Reveal>
                <p className="font-display text-[12px] font-bold uppercase tracking-[0.14em] text-brand-light">
                  Where we fit
                </p>
                <h2 className="mt-6 font-display text-[36px] font-black uppercase leading-[0.92] tracking-[-0.02em] sm:text-[46px] lg:text-[54px]">
                  How Own It Social answers the checklist
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <dl className="border-t border-white/15">
                  {fit.map(([k, v]) => (
                    <div key={k} className="grid grid-cols-1 gap-2 border-b border-white/15 py-6 sm:grid-cols-[12rem_1fr] sm:gap-8">
                      <dt className="font-display text-[13px] font-bold uppercase tracking-[0.12em] text-white">{k}</dt>
                      <dd className="text-[16px] leading-[1.7] text-white/75">{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-10 flex flex-wrap items-center gap-6">
                  <BookButton variant="white">Book a strategy session</BookButton>
                  <Link
                    href={parent.path}
                    className="font-display text-[13px] font-bold uppercase tracking-[0.12em] text-white underline decoration-white/40 underline-offset-8 transition-colors hover:text-brand-light"
                  >
                    See everything included for {audience}
                  </Link>
                </div>
              </Reveal>
            </div>
          </section>

          <FaqSection
            heading={
              <>
                Choosing an
                <br />
                agency: FAQ
              </>
            }
            faqs={faqs}
            tone="light"
          />

          {related.length > 0 && (
            <section className="border-t border-line px-5 py-16 sm:px-8 sm:py-20">
              <div className="mx-auto max-w-[1400px]">
                <p className="font-display text-[12px] font-bold uppercase tracking-[0.14em] text-muted">
                  Related guides
                </p>
                <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
                  {related.map((r) => (
                    <li key={r.href}>
                      <Link
                        href={r.href}
                        className="text-[15px] text-ink underline decoration-line underline-offset-4 transition-colors hover:text-brand"
                      >
                        {r.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}
        </article>

        <Footer />
      </div>
    </BookingProvider>
  );
}
