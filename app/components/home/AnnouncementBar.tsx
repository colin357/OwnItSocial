'use client';

import { useBooking } from './Booking';

/**
 * Thin purple strip under the nav. One promise, one underlined action — the
 * link opens the same booking modal every other CTA on the page opens.
 *
 * NOTE FOR COLIN: to run a different offer here, change the two defaults below,
 * or pass `message`/`cta` from a landing page (see /keep-playing). If you'd
 * rather point at a page than the booking modal, swap the <button> for a
 * <Link> and keep the classes.
 */
type Props = {
  message?: string;
  cta?: string;
};

export default function AnnouncementBar({
  message = 'Marketing is a full-time job. You already have one:',
  cta = 'Book your free strategy session',
}: Props) {
  const { open } = useBooking();

  return (
    <div className="bg-brand text-white">
      {/* On phones the type drops to 10px and the letter-spacing to 0.04em —
          together that pulls the first sentence back onto a single line, so the
          bar reads as two lines instead of three. Both go back up at sm. */}
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-x-2 gap-y-0.5 px-4 py-2.5 text-center sm:px-8">
        <span className="font-display text-[10px] font-bold uppercase tracking-[0.04em] sm:text-[13px] sm:tracking-[0.1em]">
          {message}
        </span>
        <button
          type="button"
          onClick={open}
          className="font-display text-[10px] font-bold uppercase tracking-[0.04em] underline underline-offset-4 transition-opacity hover:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:text-[13px] sm:tracking-[0.1em]"
        >
          {cta}
        </button>
      </div>
    </div>
  );
}
