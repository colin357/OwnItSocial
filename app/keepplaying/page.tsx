import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BookingProvider } from '../components/home/Booking';
import BookButton from '../components/home/BookButton';
import Hero from '../components/home/Hero';
import LeadForm from './LeadForm';
import Nav from '../components/home/Nav';
import PortalPreview from '../components/home/PortalPreview';
import Reveal from '../components/home/Reveal';
import ServiceRail, { SERVICES } from '../components/home/ServiceRail';
import WorkGallery from '../components/home/WorkGallery';
import {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  getStructuredDataScript,
} from '@/lib/seo/structured-data';

// ---------------------------------------------------------------------------
// /keepplaying — the landing page for Fairway loan officers we meet at Keep
// Playing, the event Own It Social sponsors.
//
// It is deliberately the homepage with a Fairway frame around it: same nav,
// hero, work rail, service rail, portal, roster, and reviews, re-addressed to
// one audience. Everything is shared with the homepage components, so a design
// change there lands here too — the only thing this file owns is the copy.
//
// No pricing here by design: like the homepage, every button on the page opens
// the same free strategy session.
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Own It Social at Keep Playing — marketing for Fairway loan officers',
  description:
    'Proud sponsors of Keep Playing. Own It Social is the done-for-you marketing department for Fairway loan officers: social content, Total Expert follow-up, and Google presence. Book a free strategy session.',
  alternates: { canonical: 'https://ownitsocial.com/keepplaying' },
  openGraph: {
    title: 'Own It Social at Keep Playing — marketing for Fairway loan officers',
    description:
      'Done-for-you social content, Total Expert follow-up, and Google presence for Fairway loan officers. Book a free strategy session.',
    url: 'https://ownitsocial.com/keepplaying',
    type: 'website',
  },
};

// The homepage links minus the ones this page doesn't carry.
const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Portal', href: '#portal' },
  { label: 'Results', href: '#results' },
];

// The homepage service cards, with the CRM one re-worded for Fairway: Total
// Expert is the stack these loan officers already have, and it is the same
// claim /fairway-annual-meeting already makes.
const FAIRWAY_SERVICES = SERVICES.map((service) =>
  service.title === 'CRM'
    ? {
        ...service,
        body: 'Your past clients are your cheapest pipeline. We build your Total Expert follow-up — email and SMS journeys that keep you in front of everyone you have already closed — and we work with whatever else you use, so the next loan comes from a name you already know.',
      }
    : service,
);

// Why a Fairway loan officer, specifically, ends up here. Each line maps to
// work already described on /cmo and /fairway-annual-meeting.
const FAIRWAY_POINTS = [
  {
    title: 'We already speak Fairway',
    body: 'We build inside Total Expert every day, so your follow-up journeys, campaigns, and lists get set up by someone who has done it for Fairway loan officers before.',
  },
  {
    title: 'Compliance-friendly by default',
    body: 'Every post, email, and flyer comes to you finished and waiting for approval. Nothing goes out under your name until you have seen it.',
  },
  {
    title: 'Built around your branch',
    body: 'Your market, your programs, your agent partners. We write for the loans you actually close, not a template pack sold to a thousand originators.',
  },
];

const TESTIMONIALS = [
  {
    quote:
      'I’ve been working with Colin now for two months and he has taken a giant weight off my shoulders and managing my entire social media platform and creating content for me and scripts for me to utilize. If you are looking for someone to help take the burden off of posting social media Colin is your guy.',
    name: 'Michael Martin',
    role: 'Google review',
  },
  {
    quote:
      'Own it has helped me grow my social media by hundreds of thousands of views in just 30 days. It really has been exponential growth. They also make marketing through my crm a breeze. I highly recommend this business. Consistent and professional.',
    name: 'Taylor Eisenbarth',
    role: 'Google review',
  },
  {
    quote:
      'I’ve had an outstanding experience working with the team at Own It Social. They consistently deliver high-quality print marketing materials on time, create engaging social media content, and provide a clear strategy that keeps my marketing moving forward.',
    name: 'Justin Elkins',
    role: 'Google review',
  },
];

const ROLES = [
  { role: 'Strategist', work: 'Decides what to say and when' },
  { role: 'Copywriter', work: 'Scripts, captions, and emails' },
  { role: 'Social manager', work: 'Posts and schedules every week' },
  { role: 'Video editor', work: 'Cuts your clips into content' },
  { role: 'CRM specialist', work: 'Runs your Total Expert follow-up' },
  { role: 'Designer', work: 'Flyers and co-branded material' },
];

export default function KeepPlayingPage() {
  const organizationSchema = generateOrganizationSchema({
    name: 'Own It Social',
    url: 'https://ownitsocial.com',
    logo: 'https://ownitsocial.com/OWN IT SOCIAL.png',
    sameAs: ['https://twitter.com/ownitsocial'],
  });

  const localBusinessSchema = generateLocalBusinessSchema({
    name: 'Own It Social — marketing for Fairway loan officers',
    address: {
      street: '',
      city: 'Miami',
      state: 'FL',
      postalCode: '',
      country: 'US',
    },
    priceRange: '$$',
  });

  return (
    // The one difference from the homepage's plumbing: every CTA here opens a
    // lead form instead of the calendar, so we capture the opt-ins before the
    // conversation starts.
    <BookingProvider
      modal={<LeadForm />}
      title="Request your free strategy session"
      source="keepplaying"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: getStructuredDataScript(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: getStructuredDataScript(localBusinessSchema) }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.classList.add('js')`,
        }}
      />

      <div id="top" className="min-h-screen bg-white font-montserrat text-ink antialiased">
        <Nav
          links={NAV_LINKS}
          homeHref="#top"
          ctaLabel="Request a call"
          announcement={{
            message: 'Proud sponsor of Keep Playing. Fairway loan officers:',
            cta: 'Get your free strategy session',
          }}
        />

        {/* Headline and body are the homepage's, on purpose — only the eyebrow
            changes. Leaving both props off means this hero keeps tracking the
            homepage if that copy is ever reworded. */}
        <Hero eyebrow="Proud sponsor of Keep Playing" />

        {/* ── Who this is for ── */}
        <section
          id="results"
          className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-20">
                <h2 className="font-display text-[36px] font-black uppercase leading-[0.92] tracking-[-0.02em] sm:text-[46px] lg:text-[54px]">
                  Built for
                  <br />
                  <span className="text-brand">Fairway</span>
                  <br />
                  loan officers
                </h2>
                <div className="lg:pt-3">
                  <p className="max-w-xl text-[18px] leading-[1.6] text-ink sm:text-[21px]">
                    You have the brand, the programs, and the pricing. What you
                    do not have is a spare ten hours a week to film, write,
                    post, and follow up. That is the part we own.
                  </p>
                  <div className="mt-9">
                    <BookButton size="md">
                      Get your free strategy session
                    </BookButton>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-16 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-3">
                {FAIRWAY_POINTS.map((point) => (
                  <div key={point.title} className="bg-white p-8 sm:p-10">
                    <h3 className="font-display text-[20px] font-black uppercase leading-[1.1] tracking-[-0.01em] sm:text-[23px]">
                      {point.title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-[1.7] text-muted">
                      {point.body}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-16 flex flex-col items-start gap-8 border-t border-line pt-12 sm:flex-row sm:items-center sm:gap-14">
                <div className="relative h-14 w-[180px] shrink-0">
                  <Image
                    src="/images/Fairway.webp"
                    alt="Fairway Independent Mortgage Corporation"
                    fill
                    sizes="180px"
                    className="object-contain object-left"
                  />
                </div>
                <p className="max-w-xl text-[15px] leading-[1.7] text-muted">
                  Own It Social is an independent marketing agency and is not
                  affiliated with or endorsed by Fairway Independent Mortgage
                  Corporation. We work with Fairway loan officers directly.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Work rail ── */}
        <section
          id="work"
          className="scroll-mt-24 overflow-hidden bg-sand px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
                <div className="max-w-md">
                  <p className="text-[17px] font-medium leading-[1.5] text-ink sm:text-[19px]">
                    Every graphic, script, and caption is made for one loan
                    officer and one market. Nothing here came out of a template
                    pack.
                  </p>
                  <div className="mt-7">
                    <BookButton size="md">See more</BookButton>
                  </div>
                </div>
                <h2 className="font-display text-[42px] font-black uppercase leading-[0.9] tracking-[-0.02em] sm:text-[64px] md:text-right lg:text-[82px]">
                  A glimpse at
                  <br />
                  our work
                </h2>
              </div>
            </Reveal>

            <Reveal delay={120} className="mt-14">
              <WorkGallery />
            </Reveal>
          </div>
        </section>

        {/* ── Services rail ── */}
        <section
          id="services"
          className="scroll-mt-24 overflow-hidden px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
                <h2 className="font-display text-[42px] font-black uppercase leading-[0.9] tracking-[-0.02em] sm:text-[64px] lg:text-[82px]">
                  How we can
                  <br />
                  help you
                </h2>
                <div className="max-w-sm md:text-right">
                  <p className="text-[17px] font-medium leading-[1.5] text-ink sm:text-[19px]">
                    We are relentlessly focused on one thing: keeping your
                    pipeline full without adding to your workload.
                  </p>
                  <div className="mt-7">
                    <BookButton size="md">Learn more</BookButton>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} className="mt-14">
              <ServiceRail services={FAIRWAY_SERVICES} />
            </Reveal>
          </div>
        </section>

        {/* ── Portal ── */}
        <section
          id="portal"
          className="scroll-mt-24 border-t border-line bg-sand px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                <h2 className="max-w-[14ch] font-display text-[42px] font-black uppercase leading-[0.9] tracking-[-0.02em] sm:text-[64px] lg:text-[76px]">
                  Watch it all
                  <br />
                  in one place
                </h2>
                <p className="max-w-sm text-[17px] leading-[1.6] text-muted sm:text-[18px]">
                  Your own portal: what is written, what is scheduled, what went
                  out. Approve a month of content in a couple of taps.
                </p>
              </div>
            </Reveal>

            <div className="mx-auto mt-14 max-w-5xl">
              <PortalPreview />
            </div>
          </div>
        </section>

        {/* ── Your new CMO ── */}
        <section className="bg-ink px-5 py-20 text-white sm:px-8 sm:py-28">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:gap-24">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <p className="font-display text-[12px] font-bold uppercase tracking-[0.14em] text-brand-light">
                  Your new CMO
                </p>
                <h2 className="mt-6 font-display text-[42px] font-black uppercase leading-[0.9] tracking-[-0.02em] sm:text-[60px] lg:text-[72px]">
                  Meet your
                  <br />
                  marketing
                  <br />
                  department
                </h2>
                <p className="mt-8 max-w-md text-[17px] leading-[1.6] text-white/70 sm:text-[19px]">
                  Every role you would otherwise have to hire, interview, train,
                  and manage. One team, one retainer, and nothing for you to run.
                </p>
                <div className="mt-10 flex flex-col items-start gap-6">
                  <BookButton variant="white" className="whitespace-nowrap">
                    Get your free strategy session
                  </BookButton>
                  <Link
                    href="/cmo"
                    className="font-display text-[13px] font-bold uppercase tracking-[0.12em] text-white underline decoration-white/40 underline-offset-8 transition-colors hover:text-brand-light"
                  >
                    See everything included
                  </Link>
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

        {/* ── Testimonials ── */}
        <section className="px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <h2 className="max-w-[16ch] font-display text-[42px] font-black uppercase leading-[0.9] tracking-[-0.02em] sm:text-[64px] lg:text-[76px]">
                What loan
                <br />
                officers say
              </h2>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-3">
              {TESTIMONIALS.map((item, i) => (
                <Reveal key={i} delay={(i % 3) * 90} className="bg-white">
                  <figure className="flex h-full flex-col bg-white p-8 sm:p-10">
                    <div
                      className="flex gap-1 text-brand"
                      role="img"
                      aria-label="Rated 5 out of 5"
                    >
                      {[0, 1, 2, 3, 4].map((s) => (
                        <svg
                          key={s}
                          className="h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5-5.9-3.1-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="mt-7 flex-1 text-[17px] leading-[1.65] text-ink">
                      {item.quote}
                    </blockquote>
                    <figcaption className="mt-8 border-t border-line pt-5">
                      <span className="font-display text-[13px] font-bold uppercase tracking-[0.1em] text-ink">
                        {item.name}
                      </span>
                      <span className="mt-1 block text-[13px] text-muted">
                        {item.role}
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Closing CTA ── */}
        <section className="bg-brand px-5 py-24 text-white sm:px-8 sm:py-32">
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <p className="font-display text-[12px] font-bold uppercase tracking-[0.14em] text-white/70">
                Fairway loan officers at Keep Playing
              </p>
              <h2 className="mt-6 max-w-[18ch] font-display text-[44px] font-black uppercase leading-[0.9] tracking-[-0.02em] sm:text-[70px] lg:text-[96px]">
                Ready to hand off your marketing?
              </h2>

              <div className="mt-12 flex flex-wrap items-center gap-6">
                <BookButton variant="white">Get your free session</BookButton>
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

        {/* ── Footer ── */}
        <footer className="bg-ink px-5 pb-12 pt-20 text-white sm:px-8">
          <div className="mx-auto max-w-[1400px]">
            <div className="flex flex-col gap-12 border-b border-white/15 pb-12 lg:flex-row lg:items-start lg:justify-between">
              <Link
                href="/"
                className="font-display text-[46px] uppercase leading-none tracking-[-0.03em] sm:text-[72px] lg:text-[96px]"
              >
                <span className="font-black">Own It</span>{' '}
                <span className="font-semibold text-white/55">Social</span>
              </Link>
              <nav
                className="grid grid-cols-2 gap-x-12 gap-y-3 sm:grid-cols-3"
                aria-label="Footer"
              >
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="font-display text-[13px] font-bold uppercase tracking-[0.1em] text-white/65 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
                <Link
                  href="/"
                  className="font-display text-[13px] font-bold uppercase tracking-[0.1em] text-white/65 transition-colors hover:text-white"
                >
                  Home
                </Link>
              </nav>
            </div>
            <div className="flex flex-col gap-3 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[13px] text-white/50">
                &copy; {new Date().getFullYear()} Own It Social
              </p>
              <a
                href="mailto:colin@ownitsocial.com"
                className="text-[13px] text-white/50 transition-colors hover:text-white"
              >
                colin@ownitsocial.com
              </a>
            </div>
          </div>
        </footer>
      </div>
    </BookingProvider>
  );
}
