import type { Metadata } from 'next';
import Image from 'next/image';
import CtaButton from './CtaButton';
import { BookingProvider } from './BookingModal';

// Paid-traffic campaign page — must NOT be indexed. This overrides the
// site-wide `index: true` / canonical set in app/layout.tsx.
export const metadata: Metadata = {
  title: 'Your New CMO — A Full Marketing Department for Loan Officers | Own It Social',
  description:
    'Stop duct-taping your marketing together. Own It Social becomes your entire marketing department — strategy plus execution — so you close more loans without hiring, managing, or posting anything yourself.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
  alternates: { canonical: 'https://ownitsocial.com/cmo' },
  openGraph: {
    title: 'Your New CMO — Done-For-You Marketing for Loan Officers',
    description:
      'A CMO’s strategy plus a full team’s execution — for a rounding error against the cost of hiring one. Book your strategy call.',
    type: 'website',
  },
};

// The department, framed as outcomes (role) with the deliverable underneath.
const DEPARTMENT = [
  {
    role: 'A social presence that actually runs',
    outcome:
      'You stay top of mind with agents and past clients every single week — without ever opening the app.',
    deliverable:
      'Done-for-you content: scripts, captions, and a posting calendar across Instagram, Facebook, and LinkedIn, published for you.',
  },
  {
    role: 'A database that reactivates itself',
    outcome:
      'The past clients and dead leads sitting in your CRM turn back into refis, referrals, and repeat business.',
    deliverable:
      'CRM setup and cleanup, plus automated email + SMS reactivation campaigns to your entire past-client list.',
  },
  {
    role: 'A Google profile that ranks and collects reviews',
    outcome:
      'When someone searches for a loan officer near them, you show up — with fresh 5-star reviews to close the deal.',
    deliverable:
      'Google Business Profile optimization and an automated review-request system after every closing.',
  },
  {
    role: 'Handwritten cards that make you unforgettable',
    outcome:
      'Clients remember you at the closing table and refer you at dinner parties — because you showed up in their mailbox.',
    deliverable:
      'Real handwritten thank-you cards sent to clients and partners at the moments that matter.',
  },
  {
    role: 'Co-marketing that makes agents want to send you deals',
    outcome:
      'Realtor partners see you as the loan officer who makes them look good — so they send business your way.',
    deliverable:
      'Co-branded flyers, social content, and market updates your agents can actually use with their clients.',
  },
];

const PROBLEMS = [
  {
    title: 'Your socials have been dead for months',
    body: 'You know you should be posting. You&apos;re not. And every week of silence is a week an agent forgets you exist.',
  },
  {
    title: 'Your database is a graveyard',
    body: 'Hundreds of past clients and old leads sit untouched in your CRM — a pipeline of refis and referrals you never work.',
  },
  {
    title: 'You have no system for realtor referrals',
    body: 'Deals come from relationships you happen to remember to nurture. There&apos;s no engine — just you, hustling, hoping.',
  },
  {
    title: 'You have no time to do any of it',
    body: 'You&apos;re closing loans, not writing captions. Marketing is the thing that only happens when everything else is done — so it never does.',
  },
];

const FOR = [
  'Loan officers who treat their book like a business, not a side hustle',
  'Owner-operators who want to grow purchase volume and referral partners',
  'People who&apos;d rather delegate marketing to a team than white-knuckle it alone',
  'Anyone tired of being the bottleneck in their own growth',
];

const NOT_FOR = [
  'Anyone shopping for the cheapest post-a-day service',
  'People who want to micromanage every caption and comma',
  'Tire-kickers looking for a magic button instead of a system',
  'Loan officers who aren&apos;t actually committed to growing',
];

const FAQS = [
  {
    q: 'How is this different from an agency or a VA?',
    a: 'A VA needs you to hand them a plan. A typical agency runs one channel — social, or ads, or email. We do neither. We&apos;re your marketing department: we own the strategy AND the execution across every channel, and we report to your growth, not your task list. You get a CMO&apos;s thinking and a full team&apos;s output under one roof.',
  },
  {
    q: 'Do I actually have to do anything?',
    a: 'Almost nothing. We handle strategy, content, your CRM, your Google profile, the cards, the co-marketing — all of it. You approve what you want to approve, send us the occasional selfie video if you like being on camera, and close loans. That&apos;s the entire job.',
  },
  {
    q: 'How fast will I see results?',
    a: 'Your presence goes live within the first couple of weeks, and database reactivation often surfaces conversations in the first 30–60 days. Referral relationships and search rankings compound from there. This is a marketing department, not a lottery ticket — it builds a durable pipeline instead of a one-time spike.',
  },
  {
    q: 'What if I already post sometimes?',
    a: 'Good — you already know it works when you&apos;re consistent. The problem is &ldquo;sometimes.&rdquo; We make it every week, on strategy, without it depending on whether you had a free Sunday. We build on what&apos;s working and take the whole thing off your plate.',
  },
];

export default function CmoLandingPage() {
  return (
    <BookingProvider>
    <div className="min-h-screen bg-white text-gray-900">
      {/* Minimal header — no nav links, no escape routes. Logo + the one CTA. */}
      <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          {/* Logo is intentionally NOT a link — this is a single-purpose page. */}
          <span className="relative block h-9 w-48" aria-label="Own It Social">
            <Image
              src="/OWN IT SOCIAL.png"
              alt="Own It Social"
              fill
              priority
              sizes="192px"
              className="object-contain object-left"
            />
          </span>
          <CtaButton size="md" className="hidden sm:inline-flex">
            Book a Call
          </CtaButton>
        </div>
      </header>

      <main>
        {/* 1. HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-28 md:pb-24 text-center">
            <p className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white shadow-sm ring-1 ring-purple-100 text-sm font-bold tracking-wide text-purple-700">
              FOR LOAN OFFICERS WHO WANT TO GROW
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight text-balance">
              You don&apos;t need another tool.
              <span className="block mt-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                You need a CMO.
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Your socials are dead, your database is a graveyard, and your
              agents stopped sending deals. We become your entire marketing
              department — done for you — so you close more loans without
              lifting a finger on marketing.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4">
              <CtaButton />
              <p className="text-sm text-gray-500">
                A 30-minute strategy call. No pitch decks, no pressure.
              </p>
            </div>
          </div>
        </section>

        {/* 2. THE PROBLEM */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">
              You&apos;re a great loan officer.
              <br />
              <span className="text-gray-500">
                Your marketing is quietly costing you deals.
              </span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {PROBLEMS.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-gray-100 bg-gray-50/60 p-8"
              >
                <h3 className="text-xl font-black mb-3 text-gray-900">
                  {p.title}
                </h3>
                <p
                  className="text-gray-600 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: p.body }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* 3. THE SHIFT / MECHANISM */}
        <section className="bg-gray-900 text-white py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-bold tracking-widest text-purple-400 mb-6">
              THE THIRD OPTION
            </p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-10">
              Until now, you&apos;ve had two bad choices.
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-left mb-12">
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-8">
                <h3 className="text-xl font-black mb-3">Hire a real CMO</h3>
                <p className="text-gray-400 leading-relaxed">
                  A seasoned marketing leader runs $200k+ a year, fully loaded —
                  $15,000–$20,000 every month — before you&apos;ve hired a single
                  person to actually execute the work underneath them.
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-8">
                <h3 className="text-xl font-black mb-3">Do it all yourself</h3>
                <p className="text-gray-400 leading-relaxed">
                  Squeeze marketing into the cracks between closings. It&apos;s
                  inconsistent, it doesn&apos;t scale, and it always loses to the
                  next loan in your pipeline.
                </p>
              </div>
            </div>
            <div className="rounded-3xl bg-gradient-to-r from-purple-600 to-blue-600 p-[1px]">
              <div className="rounded-3xl bg-gray-900 px-8 py-12">
                <h3 className="text-2xl md:text-3xl font-black mb-4">
                  &ldquo;Your New CMO&rdquo; is the third option.
                </h3>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  A CMO&apos;s strategy plus a full team&apos;s execution — a
                  complete marketing department, done for you, for a rounding
                  error against the cost of building one yourself.
                </p>
                <div className="mt-8">
                  <CtaButton variant="inverse">
                    Book Your CMO Strategy Call
                  </CtaButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. WHAT YOU GET — the department */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
              You don&apos;t get a freelancer.
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                You get a whole department.
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Every role a growing loan officer needs — filled, managed, and
              executed for you.
            </p>
          </div>
          <div className="space-y-5">
            {DEPARTMENT.map((item, i) => (
              <div
                key={item.role}
                className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-black">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-2">
                      {item.role}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      {item.outcome}
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed border-l-2 border-purple-200 pl-4">
                      {item.deliverable}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <CtaButton>Book Your CMO Strategy Call</CtaButton>
          </div>
        </section>

        {/* 5. WHO THIS IS FOR / NOT FOR */}
        <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight">
                Let&apos;s be honest about fit.
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <h3 className="text-xl font-black mb-6 text-gray-900">
                  This is for you if&hellip;
                </h3>
                <ul className="space-y-4">
                  {FOR.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg
                        className="flex-shrink-0 w-6 h-6 text-fairway-green mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span
                        className="text-gray-700 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: item }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <h3 className="text-xl font-black mb-6 text-gray-900">
                  This is not for you if&hellip;
                </h3>
                <ul className="space-y-4">
                  {NOT_FOR.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg
                        className="flex-shrink-0 w-6 h-6 text-gray-300 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span
                        className="text-gray-500 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: item }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 6. SOCIAL PROOF — placeholders, drop real ones in */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
              Loan officers who stopped doing their own marketing
            </h2>
            <p className="text-lg text-gray-600">
              {/* PLACEHOLDER: replace with a real proof stat once available. */}
              Real results from real loan officers.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((n) => (
              <figure
                key={n}
                className="rounded-2xl border border-gray-100 bg-gray-50/60 p-8 flex flex-col"
              >
                <div className="flex gap-1 mb-4" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.17c.969 0 1.371 1.24.588 1.81l-3.375 2.452a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.374-2.453a1 1 0 00-1.176 0l-3.375 2.453c-.783.57-1.838-.196-1.538-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.98 9.393c-.783-.57-.38-1.81.588-1.81h4.17a1 1 0 00.95-.69l1.287-3.966z" />
                    </svg>
                  ))}
                </div>
                {/* PLACEHOLDER TESTIMONIAL — swap in a real quote. */}
                <blockquote className="text-gray-700 leading-relaxed flex-1">
                  &ldquo;[ Testimonial placeholder — drop a real loan officer
                  quote here about what changed after Own It Social took over
                  their marketing. ]&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  {/* PLACEHOLDER HEADSHOT — replace the initials block with a photo. */}
                  <span className="flex-shrink-0 w-11 h-11 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-black text-sm">
                    LO
                  </span>
                  <span className="text-sm">
                    <span className="block font-bold text-gray-900">
                      [ Name, Loan Officer ]
                    </span>
                    <span className="block text-gray-500">
                      [ Company / City ]
                    </span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          {/* PLACEHOLDER LOGO ROW — drop in partner/lender logos. */}
          <p className="text-center text-xs font-bold tracking-widest text-gray-400 mt-16 mb-6">
            [ TRUSTED BY LOAN OFFICERS AT — ADD LOGOS ]
          </p>
          <div
            className="flex flex-wrap justify-center items-center gap-6"
            aria-hidden="true"
          >
            {[...Array(4)].map((_, i) => (
              <span
                key={i}
                className="h-10 w-32 rounded-lg bg-gray-100 border border-dashed border-gray-200"
              />
            ))}
          </div>
        </section>

        {/* 7. FAQ */}
        <section className="bg-gray-50 py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight">
                Questions loan officers ask us
              </h2>
            </div>
            <div className="space-y-4">
              {FAQS.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-2xl bg-white p-6 shadow-sm"
                >
                  <summary className="flex justify-between items-center cursor-pointer list-none font-bold text-lg text-gray-900">
                    {faq.q}
                    <svg
                      className="flex-shrink-0 ml-4 w-5 h-5 text-purple-600 group-open:rotate-180 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <p
                    className="mt-4 text-gray-600 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: faq.a }}
                  />
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 8. FINAL CTA — button opens the booking modal */}
        <section className="bg-gradient-to-br from-purple-600 to-blue-600 py-20 md:py-28">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight text-balance">
              Get a marketing department without building one.
            </h2>
            <p className="mt-6 text-lg md:text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed">
              Book a 30-minute strategy call. We&apos;ll map out exactly how your
              new CMO takes social, your database, Google, and your referral
              partners off your plate — so you can get back to closing loans.
            </p>
            <div className="mt-10">
              <CtaButton variant="inverse">
                Book Your CMO Strategy Call
              </CtaButton>
            </div>
          </div>
        </section>
      </main>

      {/* Minimal footer — legal only, no link farm, no escape routes. */}
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="font-black text-lg bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-3">
            OWN IT SOCIAL
          </div>
          <p className="text-sm text-gray-500">
            © 2026 OwnItSocial.com · All rights reserved.
          </p>
          <p className="mt-2 text-xs text-gray-600">
            Marketing services for loan officers. Results vary.
          </p>
        </div>
      </footer>
    </div>
    </BookingProvider>
  );
}
