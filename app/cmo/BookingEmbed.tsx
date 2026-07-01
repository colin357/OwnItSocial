'use client';

import { useEffect } from 'react';
import { trackBookingComplete } from './pixel';

// ---------------------------------------------------------------------------
// HOW TO SWAP IN YOUR REAL BOOKING LINK (pick ONE):
//
//   1. Preferred — set an env var (no code change, works on Vercel):
//        NEXT_PUBLIC_BOOKING_URL=https://calendly.com/your-handle/cmo-strategy-call
//
//   2. Or pass a `url` prop:  <BookingEmbed url="https://cal.com/..." />
//
// Any Calendly-style inline embed URL works. The completion listener below is
// wired for Calendly's postMessage event; if you use a different scheduler,
// adjust the `isSchedulingComplete` check.
// ---------------------------------------------------------------------------

const PLACEHOLDER_BOOKING_URL =
  'https://calendly.com/your-own-it-social-link/cmo-strategy-call';

const DEFAULT_BOOKING_URL =
  process.env.NEXT_PUBLIC_BOOKING_URL || PLACEHOLDER_BOOKING_URL;

type Props = { url?: string };

function isSchedulingComplete(e: MessageEvent): boolean {
  return (
    typeof e.origin === 'string' &&
    e.origin.includes('calendly.com') &&
    typeof e.data === 'object' &&
    e.data !== null &&
    (e.data as { event?: string }).event === 'calendly.event_scheduled'
  );
}

export default function BookingEmbed({ url = DEFAULT_BOOKING_URL }: Props) {
  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (isSchedulingComplete(e)) {
        trackBookingComplete();
      }
    }
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white ring-1 ring-gray-100">
      <iframe
        src={url}
        title="Book your CMO strategy call"
        loading="lazy"
        className="w-full"
        style={{ height: 720, border: 0 }}
      />
    </div>
  );
}
