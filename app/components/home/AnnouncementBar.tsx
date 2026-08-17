'use client';

import { useBooking } from './Booking';

/**
 * Thin purple strip under the nav. One promise, one underlined action — the
 * link opens the same booking modal every other CTA on the page opens.
 *
 * NOTE FOR COLIN: to run a different offer here, change the two strings below.
 * If you'd rather point at a page than the booking modal, swap the <button>
 * for a <Link> and keep the classes.
 */
export default function AnnouncementBar() {
  const { open } = useBooking();

  return (
    <div className="bg-brand text-white">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-x-2 gap-y-1 px-5 py-2.5 text-center sm:px-8">
        <span className="font-display text-[11px] font-bold uppercase tracking-[0.1em] sm:text-[13px]">
          Marketing is a full-time job. You already have one:
        </span>
        <button
          type="button"
          onClick={open}
          className="font-display text-[11px] font-bold uppercase tracking-[0.1em] underline underline-offset-4 transition-opacity hover:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:text-[13px]"
        >
          Book your free strategy session
        </button>
      </div>
    </div>
  );
}
