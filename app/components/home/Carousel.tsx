'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

// ---------------------------------------------------------------------------
// Horizontal, snap-scrolling rail used by both the work and the services
// sections. It's a real scroll container first — swipe and trackpad work with
// no JS — and the arrows are a convenience layered on top, which is why they
// disappear entirely once the rail fits on screen.
//
// Cards set their own widths (the caller passes them as children); the arrows
// page by the width of the first card plus the gap, so a rail of mixed-width
// tiles still advances by one tile.
// ---------------------------------------------------------------------------
type Props = {
  children: React.ReactNode;
  /** Announced on the scroll region, e.g. 'Selected client work'. */
  label: string;
  /** `overlay` floats the arrows over the rail's edges; `below` puts them in a row under it. */
  arrows?: 'overlay' | 'below';
  className?: string;
};

export default function Carousel({
  children,
  label,
  arrows = 'overlay',
  className = '',
}: Props) {
  const railRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [overflows, setOverflows] = useState(false);

  const sync = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    // 2px of slack: sub-pixel layout means scrollLeft rarely lands exactly on
    // the maximum, which would otherwise leave the right arrow live forever.
    const max = rail.scrollWidth - rail.clientWidth;
    setOverflows(max > 2);
    setAtStart(rail.scrollLeft <= 2);
    setAtEnd(rail.scrollLeft >= max - 2);
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    sync();
    rail.addEventListener('scroll', sync, { passive: true });

    // Card widths are responsive, so the overflow state has to be re-measured
    // on resize as well as on scroll.
    const ro =
      typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(sync)
        : null;
    ro?.observe(rail);
    window.addEventListener('resize', sync);

    return () => {
      rail.removeEventListener('scroll', sync);
      ro?.disconnect();
      window.removeEventListener('resize', sync);
    };
  }, [sync]);

  function page(direction: -1 | 1) {
    const rail = railRef.current;
    if (!rail) return;
    const first = rail.firstElementChild as HTMLElement | null;
    // Falls back to most of a viewport-width when the rail is somehow empty.
    const step = first ? first.offsetWidth + 20 : rail.clientWidth * 0.8;
    rail.scrollBy({ left: step * direction, behavior: 'smooth' });
  }

  const arrowBase =
    'flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors duration-200 hover:border-ink hover:bg-ink hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand disabled:pointer-events-none disabled:opacity-25';

  const arrowButtons = (
    <>
      <button
        type="button"
        onClick={() => page(-1)}
        disabled={atStart}
        aria-label="Previous"
        className={arrowBase}
      >
        <Arrow direction="left" />
      </button>
      <button
        type="button"
        onClick={() => page(1)}
        disabled={atEnd}
        aria-label="Next"
        className={arrowBase}
      >
        <Arrow direction="right" />
      </button>
    </>
  );

  return (
    <div className={`relative ${className}`}>
      <div
        ref={railRef}
        role="region"
        aria-label={label}
        tabIndex={0}
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
      >
        {children}
      </div>

      {overflows &&
        (arrows === 'overlay' ? (
          <>
            <div className="pointer-events-none absolute inset-y-0 -left-2 hidden items-center lg:flex">
              <div className="pointer-events-auto flex">
                <button
                  type="button"
                  onClick={() => page(-1)}
                  disabled={atStart}
                  aria-label="Previous"
                  className={`${arrowBase} shadow-lift`}
                >
                  <Arrow direction="left" />
                </button>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-y-0 -right-2 hidden items-center lg:flex">
              <div className="pointer-events-auto flex">
                <button
                  type="button"
                  onClick={() => page(1)}
                  disabled={atEnd}
                  aria-label="Next"
                  className={`${arrowBase} shadow-lift`}
                >
                  <Arrow direction="right" />
                </button>
              </div>
            </div>
            {/* Below the lg breakpoint the rail is swiped, so the arrows move
                out from the edges and sit under it instead. */}
            <div className="mt-6 flex justify-center gap-3 lg:hidden">
              {arrowButtons}
            </div>
          </>
        ) : (
          <div className="mt-8 flex gap-3">{arrowButtons}</div>
        ))}
    </div>
  );
}

function Arrow({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg
      className={`h-5 w-5 ${direction === 'left' ? 'rotate-180' : ''}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 12h16m-6-6 6 6-6 6" />
    </svg>
  );
}
