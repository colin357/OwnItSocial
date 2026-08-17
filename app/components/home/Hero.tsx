'use client';

import Image from 'next/image';
import BookButton from './BookButton';
import { useBooking } from './Booking';

// ---------------------------------------------------------------------------
// Full-bleed photographic band with the headline set over it.
//
// TO SWAP IN A VIDEO: replace the <Image> below with
//   <video src="/videos/hero.mp4" autoPlay loop muted playsInline
//          poster="/images/hero-business.png"
//          className="h-full w-full object-cover object-center" />
// Everything else — the scrim, the headline, the badge — stays as is. Keep the
// scrim: the headline is white and needs it to stay legible over any frame.
//
// The copy is overridable so a landing page can address its own audience
// (see /keepplaying) while keeping the same hero.
// ---------------------------------------------------------------------------
type Props = {
  /** Small uppercase line above the headline. Omit for none (the homepage). */
  eyebrow?: string;
  /** Pass a fragment with your own <br /> — line breaks are part of the type. */
  headline?: React.ReactNode;
  body?: React.ReactNode;
};

export default function Hero({ eyebrow, headline, body }: Props) {
  const { open } = useBooking();

  return (
    <section className="relative isolate flex min-h-[78vh] items-center overflow-hidden bg-ink sm:min-h-[86vh]">
      <Image
        src="/images/hero-business.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Scrim, weighted to the bottom where the headline sits. */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/60 to-ink/75"
        aria-hidden="true"
      />

      {/* Colin, top right — the agency is a person, not a logo. Opens the same
          booking modal as every other CTA. */}
      <button
        type="button"
        onClick={open}
        className="group absolute right-5 top-6 z-10 flex items-center gap-3 rounded-full border border-white/25 bg-white/10 p-1.5 pr-5 backdrop-blur transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-8 sm:top-8"
      >
        <span className="relative block h-12 w-12 overflow-hidden rounded-full sm:h-14 sm:w-14">
          <Image
            src="/images/colin-portrait.webp"
            alt=""
            fill
            sizes="56px"
            className="object-cover object-top"
          />
        </span>
        <span className="hidden text-left font-display text-[12px] font-bold uppercase leading-tight tracking-[0.08em] text-white sm:block">
          Talk to Colin
          <span className="block text-[10px] font-semibold tracking-[0.08em] text-white/60">
            Free 30-min session
          </span>
        </span>
      </button>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32">
        {eyebrow && (
          <p className="mb-6 font-display text-[12px] font-bold uppercase tracking-[0.14em] text-brand-light">
            {eyebrow}
          </p>
        )}

        <h1 className="max-w-[16ch] font-display text-[40px] font-black uppercase leading-[0.88] tracking-[-0.02em] text-white sm:text-[84px] lg:text-[112px]">
          {headline ?? (
            <>
              You close loans.
              <br />
              We do the rest.
            </>
          )}
        </h1>

        <p className="mt-8 max-w-xl text-[17px] leading-[1.6] text-white/80 sm:text-[19px]">
          {body ??
            'We write and post your social content, run the follow-up in your CRM, and keep your Google profile working — so the pipeline stays warm while you stay on the loans.'}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <BookButton>Get your free strategy session</BookButton>
          <a
            href="#work"
            className="font-display text-[13px] font-bold uppercase tracking-[0.12em] text-white underline underline-offset-8 transition-opacity hover:opacity-70"
          >
            See the work
          </a>
        </div>
      </div>
    </section>
  );
}
