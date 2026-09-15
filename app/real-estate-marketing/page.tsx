import type { Metadata } from 'next';
import Link from 'next/link';
import { BookingProvider } from '../components/home/Booking';
import BookButton from '../components/home/BookButton';
import FaqSection from '../components/home/FaqSection';
import Footer from '../components/home/Footer';
import Nav from '../components/home/Nav';
import Reveal from '../components/home/Reveal';
import { cities } from '../data/cities';
import { industries } from '../data/industries';
import type { FAQItem } from '@/lib/seo/structured-data';
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateServiceSchema,
  getStructuredDataScript,
} from '@/lib/seo/structured-data';

// ---------------------------------------------------------------------------
// /real-estate-marketing — parent of the /real-estate-marketing/[city] pages.
// Lighter than the loan officer hub on purpose: agents are the secondary
// audience, and most of what we do for them is the co-marketing side of the
// loan officer work.
// ---------------------------------------------------------------------------

const PAGE_URL = 'https://ownitsocial.com/real-estate-marketing';
const industry = industries['real-estate-marketing'];
const DESCRIPTION =
  'Done-for-you real estate marketing from Own It Social: listing and market-update content, lead nurture and CRM follow-up, and local search visibility for agents and teams, made by a team of real people.';

export const metadata: Metadata = {
  title: 'Real Estate Marketing — done-for-you content, follow-up, and local search',
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Real Estate Marketing | Own It Social',
    description: DESCRIPTION,
    url: PAGE_URL,
    type: 'website',
  },
};

const FAQS: FAQItem[] = [
  {
    question: 'What does Own It Social do for real estate agents?',
    answer:
      'We produce the recurring marketing an agent needs and rarely has time for: listing and market-update content for Instagram, Facebook, TikTok, and YouTube; automated email and SMS nurture for buyer and seller leads; CRM setup; and Google Business Profile optimization so you show up in local search. Everything is written, designed, and scheduled for you and approved by you in a portal.',
  },
  {
    question: 'Do you work with agents and loan officers together?',
    answer:
      'Yes. Much of our real estate work is co-marketing between an agent and their preferred loan officer: co-branded listing flyers, open-house content, and buyer education pieces that both parties can share. If you already have a lender partner, we can build the program around the two of you.',
  },
  {
    question: 'Where do you work?',
    answer:
      'Own It Social is based in Miami and works with agents and teams across Florida and the United States. Delivery is remote through your portal and the platforms you already use.',
  },
];

export default function RealEstateMarketingPage() {
  const serviceSchema = generateServiceSchema({
    name: 'Real Estate Marketing',
    serviceType: 'Done-for-you marketing for real estate agents and teams',
    description: DESCRIPTION,
    url: PAGE_URL,
    audience: 'Real estate agents, teams, and brokerages',
    offers: industry.services.map((s) => s.title),
  });
  const faqSchema = generateFAQSchema(FAQS);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Real Estate Marketing', url: '/real-estate-marketing' },
  ]);

  return (
    <BookingProvider source="real-estate-marketing">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: getStructuredDataScript(serviceSchema) }}
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
        <Nav
          links={[
            { label: 'Services', href: '#services' },
            { label: 'FAQ', href: '#faq' },
            { label: 'Loan officer marketing', href: '/loan-officer-marketing' },
          ]}
          homeHref="/"
        />

        <header className="border-b border-line px-5 pb-16 pt-20 sm:px-8 sm:pb-24 sm:pt-28">
          <div className="mx-auto max-w-[1400px]">
            <p className="font-display text-[12px] font-bold uppercase tracking-[0.14em] text-brand">
              Real estate marketing
            </p>
            <h1 className="mt-6 max-w-[16ch] font-display text-[40px] font-black uppercase leading-[0.9] tracking-[-0.02em] sm:text-[64px] lg:text-[88px]">
              {industry.heroTitle}
            </h1>
            <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-20">
              <p className="max-w-2xl text-[18px] leading-[1.6] text-ink sm:text-[21px]">
                {DESCRIPTION} You approve the work; we handle the rest.
              </p>
              <div>
                <BookButton size="md">Get your free strategy session</BookButton>
              </div>
            </div>
          </div>
        </header>

        <section id="services" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <h2 className="font-display text-[36px] font-black uppercase leading-[0.92] tracking-[-0.02em] sm:text-[46px] lg:text-[54px]">
                What we handle for agents
              </h2>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-3">
              {industry.services.map((s, i) => (
                <Reveal key={s.title} delay={i * 90} className="bg-white">
                  <article className="flex h-full flex-col bg-white p-8 sm:p-10">
                    <h3 className="text-[22px] font-semibold leading-[1.25] text-ink">{s.title}</h3>
                    <p className="mt-4 text-[16px] leading-[1.65] text-ink">{s.description}</p>
                    <ul className="mt-6 space-y-3">
                      {s.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-[15px] leading-[1.55] text-muted">
                          <span aria-hidden="true" className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-brand" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <FaqSection heading={<>Agents ask us</>} faqs={FAQS} />

        <section className="px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-[1400px]">
            <p className="font-display text-[12px] font-bold uppercase tracking-[0.14em] text-muted">
              Real estate marketing by market
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
              {cities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/real-estate-marketing/${city.slug}`}
                    className="text-[15px] text-ink underline decoration-line underline-offset-4 transition-colors hover:text-brand"
                  >
                    {city.name}, {city.state}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-brand px-5 py-24 text-white sm:px-8 sm:py-32">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <h2 className="max-w-[18ch] font-display text-[44px] font-black uppercase leading-[0.9] tracking-[-0.02em] sm:text-[70px] lg:text-[96px]">
                Ready to hand off your marketing?
              </h2>
              <div className="mt-12">
                <BookButton variant="white">Book your free session</BookButton>
              </div>
            </Reveal>
          </div>
        </section>

        <Footer />
      </div>
    </BookingProvider>
  );
}
