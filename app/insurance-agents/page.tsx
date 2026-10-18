import type { Metadata } from 'next';
import { BookingProvider } from '../components/home/Booking';
import BookButton from '../components/home/BookButton';
import Hero from '../components/home/Hero';
import Nav from '../components/home/Nav';
import PortalPreview from '../components/home/PortalPreview';
import Reveal from '../components/home/Reveal';
import ServiceRail, { type Service } from '../components/home/ServiceRail';
import FaqSection from '../components/home/FaqSection';
import Footer from '../components/home/Footer';
import {
  generateFAQSchema,
  getStructuredDataScript,
  type FAQItem,
} from '@/lib/seo/structured-data';

// ---------------------------------------------------------------------------
// /insurance-agents, a standalone landing page for insurance agents.
//
// Built from the homepage components so it looks like the rest of the site,
// but every line of copy is written for agents. The loan officer positioning
// on the homepage and everywhere else is untouched; this page is the only
// place that speaks to insurance.
//
// Deliberately left out:
//   - Client logos, testimonials, and the work rail. Those are loan officer
//     clients and loan officer content, so none of it is reused here.
//   - Organization and LocalBusiness schema. The only JSON-LD on this page is
//     the FAQPage markup for the FAQ section.
//   - Named CRMs and named carriers.
//
// Every button opens the same free strategy session calendar as the homepage.
// ---------------------------------------------------------------------------

const PAGE_URL = 'https://ownitsocial.com/insurance-agents';
const TITLE = 'Marketing Agency for Insurance Agents | Own It Social';
const DESCRIPTION =
  'Done-for-you social media, Google Business Profile optimization, and automated follow-up for insurance agents. Win more referrals, renewals, and bundled policies without buying more leads.';

export const metadata: Metadata = {
  // Absolute so the layout's "%s | Own It Social" template is not applied twice.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: 'website',
    siteName: 'Own It Social',
    locale: 'en_US',
    // A page-level openGraph replaces the layout's, so the share image is
    // repeated here or the link would unfurl without one.
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Own It Social' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/og-image.png'],
  },
};

const NAV_LINKS = [
  { label: 'Why us', href: '#why' },
  { label: 'Services', href: '#services' },
  { label: 'Portal', href: '#portal' },
  { label: 'Compliance', href: '#compliance' },
  { label: 'FAQ', href: '#faq' },
];

// The problems agents bring to a first call, each paired with what we do
// about it.
const PAIN_POINTS = [
  {
    title: 'Leads you rent, not own',
    body: 'Purchased leads work right up until you stop paying for them. We build a local audience that recognizes your name and keeps reaching out long after a campaign ends.',
  },
  {
    title: 'Renewals that go shopping',
    body: 'A client who only hears from you at renewal time is a client who compares quotes. We keep you in their feed and inbox all year, so the renewal conversation starts warm.',
  },
  {
    title: 'One policy per household',
    body: 'Plenty of your auto clients still insure their home, their life, or their business somewhere else. Timed campaigns about bundling open that conversation without a cold call.',
  },
  {
    title: 'Partners who forget to refer',
    body: 'Realtors and loan officers meet new homeowners every week. We give them co-branded content that makes you the easiest name to pass along at the closing table.',
  },
  {
    title: 'A Google listing nobody sees',
    body: 'When someone nearby searches for an insurance agent, a thin profile with a handful of reviews loses. We build yours out and ask for a review after every new policy.',
  },
  {
    title: 'No time to post or follow up',
    body: 'Between quoting, servicing, and claims questions, marketing is the first thing to slip. We write and post for you, and automated follow-up keeps working every open quote.',
  },
];

// Same rail and the same stock photos as the homepage, with every card
// rewritten for agents. Alt text is rewritten too so it describes the photo
// without assuming the person's profession.
const INSURANCE_SERVICES: Service[] = [
  {
    eyebrow: 'Staying top of mind',
    title: 'Social',
    body: 'Short videos, carousels, and captions that explain coverage in plain language and show the person behind the policy. Written, edited, and posted to Instagram, Facebook, and LinkedIn every week, so your community sees you long before they need a quote.',
    src: '/images/services/social.jpg',
    alt: 'A man talking to a camera on a tripod, recording a video at home',
  },
  {
    eyebrow: 'Renewals and cross-sells',
    title: 'CRM',
    body: 'Your existing book is your best source of new premium. We set up and organize your CRM, then run automated email and SMS journeys for open quotes, policy anniversaries, and life events, so bundling home, auto, life, and commercial coverage becomes a regular conversation.',
    src: '/images/services/crm.jpg',
    alt: 'A professional on a phone call at a desk, taking notes beside a laptop',
  },
  {
    eyebrow: 'Being found locally',
    title: 'Search',
    body: 'Most people still start with a search for an agent near them. We optimize your Google Business Profile, keep it active with fresh posts, and send an automatic review request after every new policy, so your listing does the convincing.',
    src: '/images/services/search.jpg',
    alt: 'A hand holding a phone open to a Google search',
  },
  {
    eyebrow: 'Referral partners',
    title: 'Co-marketing',
    body: 'Realtors and loan officers are some of the best referral sources an agent can have. We create co-branded flyers, homeowner checklists, and social content they can share with their own clients, with your name and number on every piece.',
    src: '/images/services/co-marketing.jpg',
    alt: 'Two professionals reviewing a document together',
  },
];

const ROLES = [
  { role: 'Strategist', work: 'Plans around renewals and seasons' },
  { role: 'Copywriter', work: 'Scripts, captions, and emails' },
  { role: 'Social manager', work: 'Publishes on schedule, every week' },
  { role: 'Video editor', work: 'Turns your clips into posts' },
  { role: 'CRM specialist', work: 'Runs quote and renewal follow-up' },
  { role: 'Designer', work: 'Partner flyers and local brand' },
];

const COMPLIANCE = [
  {
    label: 'Captive agents',
    title: 'Content that fits your carrier',
    body: 'Many carriers require agents to post approved material or send content through a review before it goes live. We build your calendar around carrier-approved content and your carrier’s review process, and we leave anything off the page that your guidelines do not allow.',
  },
  {
    label: 'Independent agents',
    title: 'A brand that belongs to you',
    body: 'You represent several carriers and have more room to say what you want. We use that room to build an agency brand that stands on its own, with content about coverage, your community, and the people on your team.',
  },
];

const FAQS: FAQItem[] = [
  {
    question: 'Do you work with captive agents or only independent agents?',
    answer:
      'Both. For captive agents we build around carrier-approved content and your carrier’s review process, and nothing is published until it has cleared. For independent agents we have more creative room and use it to build a brand that is yours rather than any single carrier’s. Either way, you approve every post, email, and flyer before it goes out under your name.',
  },
  {
    question: 'Will this replace the leads I buy?',
    answer:
      'It gives you a pipeline you own alongside them. Purchased leads stop the day you stop paying. A steady social presence, a strong Google Business Profile, active referral partners, and automated follow-up keep producing conversations month after month. Many agents use that to lean less on purchased leads over time.',
  },
  {
    question: 'How do you help with renewals and cross-sells?',
    answer:
      'We set up automated email and SMS journeys inside your CRM for policy anniversaries, open quotes, and life events like a new home, a new driver, or a growing family. Each one is a natural moment to review coverage and talk about bundling home, auto, life, or commercial policies, and it happens without you remembering to send it.',
  },
  {
    question: 'Can you help me get more referrals from realtors and loan officers?',
    answer:
      'Yes. We create co-branded flyers, homeowner checklists, and social content your referral partners can share with their own clients. It keeps your name in front of the people who meet new homeowners every week and gives them an easy reason to send business your way.',
  },
  {
    question: 'How much of my time does this take?',
    answer:
      'Very little. After the strategy session, we handle the writing, design, editing, scheduling, and follow-up. Your part is recording a few short clips when it suits you and approving content in your client portal, which takes a few taps.',
  },
  {
    question: 'Will my content look like every other agent’s?',
    answer:
      'No. Nothing comes from a template pack. Every caption, graphic, and email is written for your agency, your market, and the lines of coverage you actually write, in a voice that sounds like you.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Book a free 30-minute strategy session. We look at your market, your current book, your Google presence, and your referral partners, then lay out what your marketing department would take on first. No pitch deck and no obligation.',
  },
];

export default function InsuranceAgentsPage() {
  // The only structured data on this page: FAQPage markup for the FAQ section.
  const faqSchema = generateFAQSchema(FAQS);

  return (
    <BookingProvider source="insurance-agents">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: getStructuredDataScript(faqSchema) }}
      />
      {/* Arms the scroll reveal only when JS is available, before first paint. */}
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.classList.add('js')`,
        }}
      />

      <div id="top" className="min-h-screen bg-white font-montserrat text-ink antialiased">
        <Nav
          links={NAV_LINKS}
          homeHref="#top"
          announcement={{
            message: 'You protect your clients. Who is growing your agency?',
            cta: 'Book your free strategy session',
          }}
        />

        <Hero
          eyebrow="For insurance agents"
          headline={
            <>
              You cover them.
              <br />
              We cover you.
            </>
          }
          body="We create and post your social content, keep your Google Business Profile working, and run automated follow-up on every quote and renewal, so new business keeps coming in while you take care of your clients."
        />

        {/* ── Positioning statement ── */}
        <section
          id="why"
          className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-20">
                <h2 className="font-display text-[36px] font-black uppercase leading-[0.92] tracking-[-0.02em] sm:text-[46px] lg:text-[54px]">
                  A marketing
                  <br />
                  department for
                  <br />
                  <span className="text-brand">insurance agents</span>
                </h2>
                <div className="lg:pt-3">
                  <p className="max-w-xl text-[18px] leading-[1.6] text-ink sm:text-[21px]">
                    Buying leads keeps you busy. Owning your pipeline keeps you
                    growing. We build the kind that comes to you: neighbors who
                    know your face, clients who add a second policy because you
                    asked, and partners who send referrals without a reminder.
                  </p>
                  <div className="mt-9">
                    <BookButton size="md">
                      Get your free strategy session
                    </BookButton>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Intro for the grid below, so it reads as "problems we fix"
                rather than a list of unexplained headings. */}
            <Reveal>
              <div className="mt-20 flex flex-col gap-6 border-t border-line pt-12 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="font-display text-[12px] font-bold uppercase tracking-[0.14em] text-brand">
                    Sound familiar?
                  </p>
                  <h3 className="mt-5 max-w-[18ch] font-display text-[32px] font-black uppercase leading-[0.92] tracking-[-0.02em] sm:text-[42px] lg:text-[48px]">
                    Six things holding most agencies back
                  </h3>
                </div>
                <p className="max-w-sm text-[17px] leading-[1.6] text-muted sm:text-[18px] md:text-right">
                  We hear these on almost every first call with an agent. Each
                  card names the problem, then how we fix it for you.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
              {PAIN_POINTS.map((item, i) => (
                <Reveal key={item.title} delay={(i % 3) * 90} className="bg-white">
                  <div className="flex h-full flex-col bg-white p-8 sm:p-10">
                    <span className="font-display text-[12px] font-bold uppercase tracking-[0.14em] text-brand">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-5 font-display text-[24px] font-black uppercase leading-[0.95] tracking-[-0.02em] text-ink sm:text-[28px]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-[1.7] text-muted">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services rail. The shared hero's "See the work" link points at
             #work; this page has no work rail, so it lands here instead. ── */}
        <span id="work" className="block scroll-mt-24" aria-hidden="true" />
        <section
          id="services"
          className="scroll-mt-24 overflow-hidden bg-sand px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
                <h2 className="font-display text-[42px] font-black uppercase leading-[0.9] tracking-[-0.02em] sm:text-[64px] lg:text-[82px]">
                  What we
                  <br />
                  take off
                  <br />
                  your plate
                </h2>
                <div className="max-w-sm md:text-right">
                  <p className="text-[17px] font-medium leading-[1.5] text-ink sm:text-[19px]">
                    Four jobs that grow an agency and never seem to make it onto
                    the calendar. We run all of them, every week.
                  </p>
                  <div className="mt-7">
                    <BookButton size="md">Talk it through</BookButton>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} className="mt-14">
              <ServiceRail services={INSURANCE_SERVICES} />
            </Reveal>
          </div>
        </section>

        {/* ── The client portal, same component as the homepage ── */}
        <section
          id="portal"
          className="scroll-mt-24 border-t border-line px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                <h2 className="max-w-[14ch] font-display text-[42px] font-black uppercase leading-[0.9] tracking-[-0.02em] sm:text-[64px] lg:text-[76px]">
                  Your marketing,
                  <br />
                  at a glance
                </h2>
                <p className="max-w-sm text-[17px] leading-[1.6] text-muted sm:text-[18px]">
                  One portal shows what is drafted, what is scheduled, and what
                  already went out. Review a full month of content between
                  appointments.
                </p>
              </div>
            </Reveal>

            <div className="mx-auto mt-14 max-w-5xl">
              <PortalPreview />
            </div>
          </div>
        </section>

        {/* ── Your new CMO, the one black moment on the page ── */}
        <section className="bg-ink px-5 py-20 text-white sm:px-8 sm:py-28">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:gap-24">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <p className="font-display text-[12px] font-bold uppercase tracking-[0.14em] text-brand-light">
                  Your new CMO
                </p>
                <h2 className="mt-6 font-display text-[42px] font-black uppercase leading-[0.9] tracking-[-0.02em] sm:text-[60px] lg:text-[72px]">
                  A full team
                  <br />
                  behind your
                  <br />
                  agency
                </h2>
                <p className="mt-8 max-w-md text-[17px] leading-[1.6] text-white/70 sm:text-[19px]">
                  Hiring a marketer means recruiting, training, and managing one
                  person who cannot do all of this alone. We bring the whole
                  department on one retainer, and you never have to run it.
                </p>
                <div className="mt-10">
                  <BookButton variant="white" className="whitespace-nowrap">
                    Get your free strategy session
                  </BookButton>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <ul className="border-t border-white/15">
                {ROLES.map((item) => (
                  <li
                    key={item.role}
                    className="group flex flex-col gap-1 border-b border-white/15 py-7 transition-colors duration-300 hover:border-brand sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                  >
                    <span className="font-display text-[26px] font-black uppercase leading-none tracking-[-0.02em] text-white transition-colors duration-300 group-hover:text-brand-light sm:text-[32px]">
                      {item.role}
                    </span>
                    <span className="text-[15px] text-white/55 transition-colors duration-300 group-hover:text-white/85 sm:text-right">
                      {item.work}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ── Compliance: captive and independent ── */}
        <section
          id="compliance"
          className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                <h2 className="max-w-[16ch] font-display text-[42px] font-black uppercase leading-[0.9] tracking-[-0.02em] sm:text-[64px] lg:text-[76px]">
                  Captive or
                  <br />
                  independent
                </h2>
                <p className="max-w-sm text-[17px] leading-[1.6] text-muted sm:text-[18px]">
                  We work inside your rules. Every post, email, and flyer comes
                  to you finished, and nothing goes out under your name until
                  you approve it.
                </p>
              </div>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-2">
              {COMPLIANCE.map((item, i) => (
                <Reveal key={item.label} delay={i * 90} className="bg-white">
                  <div className="flex h-full flex-col bg-white p-8 sm:p-10">
                    <p className="font-display text-[12px] font-bold uppercase tracking-[0.14em] text-brand">
                      {item.label}
                    </p>
                    <h3 className="mt-5 font-display text-[28px] font-black uppercase leading-[0.95] tracking-[-0.02em] text-ink sm:text-[34px]">
                      {item.title}
                    </h3>
                    <p className="mt-5 text-[16px] leading-[1.7] text-muted sm:text-[17px]">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ. The same copy is emitted as FAQPage JSON-LD above. ── */}
        <FaqSection
          heading={
            <>
              Questions
              <br />
              agents ask
            </>
          }
          intro="What insurance agents usually want to know before a first call."
          faqs={FAQS}
        />

        {/* ── Closing CTA ── */}
        <section className="bg-brand px-5 py-24 text-white sm:px-8 sm:py-32">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <h2 className="max-w-[18ch] font-display text-[44px] font-black uppercase leading-[0.9] tracking-[-0.02em] sm:text-[70px] lg:text-[96px]">
                Grow your book without the busywork
              </h2>
              <div className="mt-12 flex flex-wrap items-center gap-6">
                <BookButton variant="white">Book your free session</BookButton>
                <a
                  href="mailto:colin@ownitsocial.com"
                  className="font-display text-[13px] font-bold uppercase tracking-[0.12em] text-white underline underline-offset-8 transition-opacity hover:opacity-70"
                >
                  colin@ownitsocial.com
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <Footer />
      </div>
    </BookingProvider>
  );
}
