// ---------------------------------------------------------------------------
// Meta (Facebook) Pixel helpers for the /cmo paid-campaign landing page.
//
// The BASE pixel is initialized globally in app/layout.tsx (search for
// `fbq('init', ...)`). To fire conversions against YOUR ad account, put your
// Pixel ID in that base snippet — you do NOT need to touch this file.
//
// These helpers fire the campaign-specific events and no-op safely when the
// pixel isn't present (ad blockers, local dev, SSR), so nothing here can crash
// the page.
// ---------------------------------------------------------------------------

declare global {
  interface Window {
    // Provided by the Meta Pixel base snippet in app/layout.tsx
    fbq?: (...args: unknown[]) => void;
  }
}

function fire(...args: unknown[]) {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq(...args);
  }
}

/**
 * Top-of-funnel intent: a visitor clicked one of the "Book a Call" CTAs.
 * Custom event so you can build a lookalike/retargeting audience off it.
 */
export function trackBookingClick() {
  fire('trackCustom', 'BookCallClick', { source: 'cmo-landing' });
}

/**
 * PRIMARY conversion: a strategy call was actually booked in the embed.
 * Uses the standard `Lead` event so it maps to a Meta conversion objective.
 */
export function trackBookingComplete() {
  fire('track', 'Lead', { content_name: 'CMO Strategy Call' });
}
