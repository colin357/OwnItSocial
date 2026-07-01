'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { trackBookingComplete } from './pixel';

// ---------------------------------------------------------------------------
// Booking widget: LeadConnector / GoHighLevel calendar embed.
//
// HOW TO SWAP IN A DIFFERENT CALENDAR (pick ONE):
//   1. Preferred — set an env var (no code change, works on Vercel):
//        NEXT_PUBLIC_BOOKING_URL=https://api.leadconnectorhq.com/widget/booking/XXXX
//   2. Or pass a `url` prop:  <BookingEmbed url="https://.../booking/XXXX" />
//
// form_embed.js (loaded below) finds the iframe by its "/booking" src and
// auto-sizes its height via postMessage — so we don't hardcode a height, only
// a min-height so the layout doesn't jump before the script runs.
// ---------------------------------------------------------------------------

const DEFAULT_BOOKING_URL =
  process.env.NEXT_PUBLIC_BOOKING_URL ||
  'https://api.leadconnectorhq.com/widget/booking/puxlTsFzbfDiOhN8CMhS';

type Props = { url?: string };

// Best-effort booking-completion conversion.
//
// NOTE: LeadConnector's embed script does NOT post a standard "appointment
// booked" event to the parent page, so client-side detection isn't guaranteed.
// The RELIABLE way to fire a Meta conversion on a confirmed booking is inside
// GHL: add your Pixel ID under the calendar/funnel settings so it fires a
// Lead/Schedule event on the confirmation step.
//
// This listener is a safe fallback: it only fires when a GHL-origin message
// clearly signals a booking success, so it can't false-fire on the resize /
// query-param / sticky-contact messages the widget normally sends.
function isBookingSuccess(e: MessageEvent): boolean {
  const fromGhl =
    typeof e.origin === 'string' &&
    (e.origin.includes('leadconnector') || e.origin.includes('msgsndr'));
  if (!fromGhl) return false;

  let payload = '';
  try {
    payload =
      typeof e.data === 'string' ? e.data : JSON.stringify(e.data ?? '');
  } catch {
    return false;
  }
  return (
    /appointment|booking/i.test(payload) &&
    /success|booked|confirm|complete|scheduled/i.test(payload)
  );
}

export default function BookingEmbed({ url = DEFAULT_BOOKING_URL }: Props) {
  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (isBookingSuccess(e)) {
        trackBookingComplete();
      }
    }
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  return (
    <div className="relative overflow-hidden bg-white">
      <iframe
        src={url}
        title="Book your CMO strategy call"
        scrolling="no"
        loading="lazy"
        className="w-full block"
        style={{ minHeight: 700, border: 'none' }}
      />
      {/* GHL resize/booking script — loaded once, after the page is interactive. */}
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
