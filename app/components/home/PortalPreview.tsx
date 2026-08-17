'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// ---------------------------------------------------------------------------
// The visual centerpiece: the real client portal, framed in a browser-style
// card that stays pinned while the page scrolls through three phases of the
// workflow. No stock photography, no illustration — a real product screenshot
// or a clearly-marked empty frame, nothing in between.
//
// TO SHIP THE REAL THING: save each screenshot to public/images/ and fill in
// the `src` below. A 16:10 crop keeps the frame from letterboxing. That is the
// only change needed — everything else is wired.
//
// For a looping video in a phase instead of a still, set `src` to '' and swap
// the <Image> for:
//   <video src="/videos/portal-upload.mp4" autoPlay loop muted playsInline
//          className="h-full w-full object-cover object-top" />
// ---------------------------------------------------------------------------
type Phase = {
  id: string;
  /** Short label for the step indicator under the card. */
  label: string;
  /** One line under the card explaining what the screenshot shows. */
  caption: string;
  /** Set to e.g. '/images/portal-review.png' to replace the placeholder. */
  src: string;
  /** Alt text for the real screenshot, and what to capture for the placeholder. */
  shot: string;
};

// NOTE FOR COLIN: phases are mapped to what each screenshot actually shows,
// not to the filenames they arrived under — two of the three were swapped.
// The middle slot is meant to be the upload flow, but no upload-screen capture
// exists yet, so the dashboard is standing in. Send an upload screenshot and it
// drops straight into that slot.
const PHASES: Phase[] = [
  {
    id: 'home',
    label: 'Dashboard',
    caption: 'Open the portal and see exactly where your marketing stands.',
    src: '/images/portal-home.png',
    shot: 'home dashboard with open tasks and monthly progress',
  },
  {
    id: 'review',
    label: 'Review',
    caption: 'Your posts, emails, and blogs come to you finished. Approve them in a tap.',
    src: '/images/portal-review.png',
    shot: 'content review queue',
  },
  {
    id: 'calendar',
    label: 'Calendar',
    caption: 'See everything that is scheduled, posted, and coming up.',
    src: '/images/portal-calendar.png',
    shot: 'content calendar view',
  },
];

export default function PortalPreview() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [instant, setInstant] = useState(false);

  // Honour reduced-motion: the phases still change, they just don't cross-fade.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setInstant(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  // Map scroll progress through the tall wrapper onto an equal share per phase.
  useEffect(() => {
    let frame = 0;

    function measure() {
      frame = 0;
      const wrap = wrapRef.current;
      const sticky = stickyRef.current;
      if (!wrap || !sticky) return;

      const travel = wrap.offsetHeight - sticky.offsetHeight;
      if (travel <= 0) return;

      const scrolled = Math.min(
        Math.max(-wrap.getBoundingClientRect().top, 0),
        travel,
      );
      const index = Math.min(
        PHASES.length - 1,
        Math.floor((scrolled / travel) * PHASES.length),
      );
      setActive(index);
    }

    function onScroll() {
      if (frame) return;
      frame = requestAnimationFrame(measure);
    }

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  // Clicking a step scrolls to the middle of that phase's share of the wrapper,
  // so the indicator works as navigation and not just as a readout.
  function goTo(index: number) {
    const wrap = wrapRef.current;
    const sticky = stickyRef.current;
    if (!wrap || !sticky) return;

    const travel = wrap.offsetHeight - sticky.offsetHeight;
    const share = travel / PHASES.length;
    const target =
      wrap.getBoundingClientRect().top +
      window.scrollY +
      share * (index + 0.5);

    window.scrollTo({
      top: target,
      behavior: instant ? 'auto' : 'smooth',
    });
  }

  return (
    // Tall enough to give each phase roughly half a screen of dwell before the
    // card unpins and scrolls away.
    <div ref={wrapRef} className="relative h-[190vh] sm:h-[220vh]">
      <div ref={stickyRef} className="sticky top-20">
        <div className="overflow-hidden border border-ink/10 bg-white shadow-portal">
          {/* Browser chrome */}
          <div className="flex h-10 items-center gap-1.5 border-b border-line px-4">
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
          </div>

          <div className="relative aspect-[16/10] w-full bg-sand">
            {PHASES.map((phase, i) => (
              <div
                key={phase.id}
                aria-hidden={i !== active}
                className={`absolute inset-0 ${
                  instant ? '' : 'transition-opacity duration-500 ease-out'
                } ${i === active ? 'opacity-100' : 'opacity-0'}`}
              >
                {phase.src ? (
                  <Image
                    src={phase.src}
                    alt={`The Own It Social client portal: ${phase.shot}`}
                    fill
                    priority={i === 0}
                    sizes="(max-width: 1024px) 100vw, 880px"
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="absolute inset-4 flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-line px-6 text-center">
                    <p className="text-[13px] font-medium text-ink">
                      [NEEDS CONTENT: portal {phase.shot}]
                    </p>
                    <p className="max-w-sm text-[13px] leading-[1.7] text-muted">
                      16:10 crop. Save it to public/images/portal-{phase.id}.png
                      and set the src for this phase in PortalPreview.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Segmented step indicator, doubling as navigation. */}
        <div className="mt-7 flex justify-center">
          <div className="inline-flex rounded-full border border-line bg-white p-1">
            {PHASES.map((phase, i) => (
              <button
                key={phase.id}
                type="button"
                onClick={() => goTo(i)}
                aria-current={i === active ? 'step' : undefined}
                className={`rounded-full px-5 py-2 font-display text-[12px] font-bold uppercase tracking-[0.1em] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                  i === active
                    ? 'bg-brand text-white'
                    : 'text-muted hover:text-ink'
                }`}
              >
                {phase.label}
              </button>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-5 max-w-lg text-center text-[15px] leading-[1.6] text-muted">
          {PHASES[active].caption}
        </p>
      </div>
    </div>
  );
}
