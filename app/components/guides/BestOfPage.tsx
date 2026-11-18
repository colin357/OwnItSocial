import Link from 'next/link';
import { BookingProvider } from '../home/Booking';
import BookButton from '../home/BookButton';
import FaqSection from '../home/FaqSection';
import Footer from '../home/Footer';
import Nav from '../home/Nav';
import Reveal from '../home/Reveal';
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  getStructuredDataScript,
  type FAQItem,
} from '@/lib/seo/structured-data';
import { seoConfig } from '@/lib/seo/config';

// ---------------------------------------------------------------------------
// "Best [kind of company] for [profession]" comparison pages.
//
// Rules for the data that feeds this (data/comparisons.ts):
//   - Every claim about another company comes from that company's own website
//     or another public source, and the sources are kept next to the entry.
//   - Describe each company the way its own team would. "Keep in mind" lines
//     are about fit, never put-downs.
//   - Own It Social is on every list and is labelled as ours. The page says
//     who published it at the top.
//   - No prices unless the company publishes them.
// ---------------------------------------------------------------------------

export type Company = {
  name: string;
  url: string;
  /** "Done-for-you agency", "Software platform", "Content subscription"… */
  kind: string;
  serves: string;
  summary: string;
  bestFor: string;
  keepInMind: string;
  /** Exactly as published, or "Not published". */
  pricing: string;
  /** Marks Own It Social's own entry. */
  ours?: boolean;
  /** Where the facts came from. Not rendered; kept for whoever updates this. */
  sources?: string[];
};

export type BestOfData = {
  path: string;
  title: string;
  description: string;
  updated: string;
  eyebrow: string;
  intro: string;
  /** What this page compared on, in plain words. */
  criteria: Array<{ title: string; body: string }>;
  companies: Company[];
  /** Short "if you want X, look at Y" guidance. */
  choose: Array<{ need: string; answer: string }>;
  faqs: FAQItem[];
  parent: { name: string; path: string };
  related: Array<{ label: string; href: string }>;
  source: string;
};

export default function BestOfPage({ data }: { data: BestOfData }) {
  const pageUrl = `${seoConfig.siteUrl}${data.path}`;

  const articleSchema = generateArticleSchema({
    headline: data.title,
    description: data.description,
    author: 'Colin Hickmon',
    datePublished: data.updated,
    image: '/og-image.png',
  });
  const listSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: data.title,
    url: pageUrl,
    itemListElement: data.companies.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: { '@type': 'Organization', name: c.name, url: c.url, description: c.summary },
    })),
  };
  const faqSchema = generateFAQSchema(data.faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: data.parent.name, url: data.parent.path },
    { name: data.title, url: data.path },
  ]);

  return (
    <BookingProvider source={data.source}>
      {[articleSchema, listSchema, faqSchema, breadcrumbSchema].map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: getStructuredDataScript(s) }}
        />
      ))}
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.classList.add('js')`,
        }}
      />

      <div id="top" className="min-h-screen bg-white font-montserrat text-ink antialiased">
        <Nav
          links={[
            { label: 'The list', href: '#list' },
            { label: 'Compare', href: '#compare' },
            { label: 'How to choose', href: '#choose' },
            { label: 'FAQ', href: '#faq' },
          ]}
          homeHref="/"
        />

        <article>
          <header className="border-b border-line px-5 pb-16 pt-20 sm:px-8 sm:pb-24 sm:pt-28">
            <div className="mx-auto max-w-[1400px]">
              <p className="font-display text-[12px] font-bold uppercase tracking-[0.14em] text-brand">
                {data.eyebrow} · Updated 2026
              </p>
              <h1 className="mt-6 max-w-[20ch] font-display text-[36px] font-black uppercase leading-[0.92] tracking-[-0.02em] sm:text-[56px] lg:text-[76px]">
                {data.title}
              </h1>
              <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-20">
                <p className="max-w-2xl text-[18px] leading-[1.6] text-ink sm:text-[21px]">
                  {data.intro}
                </p>
                <p className="text-[14px] leading-[1.6] text-muted">
                  Published by Own It Social, which is one of the companies on
                  this list. Written by Colin Hickmon. Descriptions of other
                  companies are based on their own websites and public
                  information as of {data.updated}; we have not been a client of
                  them. Prices are shown only where a company publishes them.
                </p>
              </div>
            </div>
          </header>

          {/* ── How we compared ── */}
          <section className="px-5 py-16 sm:px-8 sm:py-20">
            <div className="mx-auto max-w-[1400px]">
              <Reveal>
                <h2 className="font-display text-[13px] font-bold uppercase tracking-[0.14em] text-muted">
                  What we looked at
                </h2>
              </Reveal>
              <div className="mt-8 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
                {data.criteria.map((c) => (
                  <div key={c.title} className="bg-white p-7">
                    <h3 className="text-[17px] font-semibold text-ink">{c.title}</h3>
                    <p className="mt-3 text-[15px] leading-[1.6] text-muted">{c.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── The list ── */}
          <section id="list" className="scroll-mt-24 bg-sand px-5 py-20 sm:px-8 sm:py-28">
            <div className="mx-auto max-w-[1400px]">
              <Reveal>
                <h2 className="font-display text-[36px] font-black uppercase leading-[0.92] tracking-[-0.02em] sm:text-[46px] lg:text-[54px]">
                  The list
                </h2>
              </Reveal>
              <ol className="mt-12 space-y-px border border-line bg-line">
                {data.companies.map((c, i) => (
                  <li key={c.name} className="bg-white">
                    <section className="grid grid-cols-1 gap-6 p-7 sm:p-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
                      <div>
                        <span className="font-display text-[12px] font-bold uppercase tracking-[0.14em] text-brand">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <h3 className="mt-3 text-[26px] font-semibold leading-[1.2] text-ink sm:text-[30px]">
                          {c.name}
                        </h3>
                        <p className="mt-2 text-[14px] text-muted">
                          {c.kind} · {c.serves}
                        </p>
                        <a
                          href={c.url}
                          className="mt-3 inline-block break-all text-[14px] text-ink underline decoration-line underline-offset-4 hover:text-brand"
                          rel={c.ours ? undefined : 'nofollow noopener'}
                          target={c.ours ? undefined : '_blank'}
                        >
                          {c.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
                        </a>
                      </div>
                      <div>
                        <p className="text-[16px] leading-[1.7] text-ink">{c.summary}</p>
                        <dl className="mt-6 space-y-4 text-[15px] leading-[1.6]">
                          <div>
                            <dt className="font-display text-[12px] font-bold uppercase tracking-[0.12em] text-ink">Best for</dt>
                            <dd className="mt-1 text-muted">{c.bestFor}</dd>
                          </div>
                          <div>
                            <dt className="font-display text-[12px] font-bold uppercase tracking-[0.12em] text-ink">Keep in mind</dt>
                            <dd className="mt-1 text-muted">{c.keepInMind}</dd>
                          </div>
                          <div>
                            <dt className="font-display text-[12px] font-bold uppercase tracking-[0.12em] text-ink">Pricing</dt>
                            <dd className="mt-1 text-muted">{c.pricing}</dd>
                          </div>
                        </dl>
                        {c.ours && (
                          <div className="mt-7">
                            <BookButton size="md">Book a free strategy session</BookButton>
                          </div>
                        )}
                      </div>
                    </section>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* ── Compare at a glance ── */}
          <section id="compare" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
            <div className="mx-auto max-w-[1400px]">
              <Reveal>
                <h2 className="font-display text-[36px] font-black uppercase leading-[0.92] tracking-[-0.02em] sm:text-[46px] lg:text-[54px]">
                  At a glance
                </h2>
              </Reveal>
              <div className="mt-12 overflow-x-auto">
                <table className="w-full min-w-[760px] border-collapse text-left text-[15px]">
                  <thead>
                    <tr className="border-b border-ink font-display text-[12px] font-bold uppercase tracking-[0.12em] text-muted">
                      <th scope="col" className="py-4 pr-5">Company</th>
                      <th scope="col" className="py-4 pr-5">Type</th>
                      <th scope="col" className="py-4 pr-5">Serves</th>
                      <th scope="col" className="py-4 pr-5">Best for</th>
                      <th scope="col" className="py-4">Pricing</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.companies.map((c) => (
                      <tr key={c.name} className={`border-b border-line align-top ${c.ours ? 'bg-sand' : ''}`}>
                        <th scope="row" className="py-5 pr-5 font-semibold text-ink">{c.name}</th>
                        <td className="py-5 pr-5 text-ink">{c.kind}</td>
                        <td className="py-5 pr-5 leading-[1.55] text-ink">{c.serves}</td>
                        <td className="py-5 pr-5 leading-[1.55] text-ink">{c.bestFor}</td>
                        <td className="py-5 leading-[1.55] text-muted">{c.pricing}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* ── How to choose ── */}
          <section id="choose" className="scroll-mt-24 bg-ink px-5 py-20 text-white sm:px-8 sm:py-28">
            <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
              <Reveal>
                <h2 className="font-display text-[36px] font-black uppercase leading-[0.92] tracking-[-0.02em] sm:text-[46px] lg:text-[54px]">
                  How to choose
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <dl className="border-t border-white/15">
                  {data.choose.map((c) => (
                    <div key={c.need} className="grid grid-cols-1 gap-2 border-b border-white/15 py-6 sm:grid-cols-[16rem_1fr] sm:gap-8">
                      <dt className="text-[16px] font-semibold text-white">{c.need}</dt>
                      <dd className="text-[16px] leading-[1.7] text-white/75">{c.answer}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </section>

          <FaqSection heading={<>Questions</>} faqs={data.faqs} tone="light" />

          <section className="border-t border-line px-5 py-16 sm:px-8 sm:py-20">
            <div className="mx-auto max-w-[1400px]">
              <p className="font-display text-[12px] font-bold uppercase tracking-[0.14em] text-muted">
                Related guides
              </p>
              <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
                {data.related.map((r) => (
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
        </article>

        <section className="bg-brand px-5 py-24 text-white sm:px-8 sm:py-32">
          <div className="mx-auto max-w-[1400px]">
            <h2 className="max-w-[18ch] font-display text-[40px] font-black uppercase leading-[0.9] tracking-[-0.02em] sm:text-[64px] lg:text-[88px]">
              Want one team running all of it?
            </h2>
            <div className="mt-12">
              <BookButton variant="white">Book your free session</BookButton>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </BookingProvider>
  );
}
