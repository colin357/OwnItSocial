'use client';

import { useState } from 'react';
import { useBooking } from '../components/home/Booking';
import { EMAIL_CONSENT, SMS_CONSENT } from './consent';
import { trackBookingComplete } from '../cmo/pixel';

// ---------------------------------------------------------------------------
// What the modal shows on /keepplaying, in place of the calendar embed.
//
// Both opt-ins are required to submit — that is deliberate, and matches how the
// page is meant to be used. TO ALLOW ONE OR THE OTHER: drop `&& emailOptIn`
// from `canSubmit` below and relax the matching check in the API route.
//
// Rendered inside <BookingProvider>, so it can close its own modal.
// ---------------------------------------------------------------------------

const FIELD =
  'w-full border border-line bg-white px-4 py-3 text-[16px] text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-ink';
const LABEL =
  'block font-display text-[11px] font-bold uppercase tracking-[0.12em] text-muted';

export default function LeadForm() {
  const { close } = useBooking();
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [smsOptIn, setSmsOptIn] = useState(false);
  const [emailOptIn, setEmailOptIn] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  const canSubmit =
    form.name.trim() !== '' &&
    form.email.trim() !== '' &&
    form.phone.trim() !== '' &&
    smsOptIn &&
    emailOptIn &&
    !submitting;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!smsOptIn || !emailOptIn) {
      setError('Please check both boxes so we know how to reach you.');
      return;
    }

    setSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/keep-playing-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, smsOptIn, emailOptIn }),
      });

      if (res.ok) {
        trackBookingComplete(); // same conversion the calendar fires
        setDone(true);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  function change(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  if (done) {
    return (
      <div className="py-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand">
          <svg
            className="h-7 w-7 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-6 font-display text-[26px] font-black uppercase leading-none tracking-[-0.02em] text-ink">
          You&rsquo;re on the list
        </h3>
        <p className="mx-auto mt-4 max-w-sm text-[15px] leading-[1.65] text-muted">
          Thanks, {form.name.split(' ')[0]}. Colin will reach out personally to
          set up your free strategy session.
        </p>
        <button
          type="button"
          onClick={close}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 font-display text-[13px] font-bold uppercase leading-none tracking-[0.12em] text-white transition-colors hover:bg-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        >
          Back to the page
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <p className="text-[15px] leading-[1.6] text-muted">
        Tell us where to reach you and Colin will get in touch to set up your
        free strategy session.
      </p>

      <div>
        <label htmlFor="kp-name" className={LABEL}>
          Full name
        </label>
        <input
          id="kp-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          value={form.name}
          onChange={change}
          className={`mt-2 ${FIELD}`}
          placeholder="Jordan Reyes"
        />
      </div>

      <div>
        <label htmlFor="kp-email" className={LABEL}>
          Email
        </label>
        <input
          id="kp-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={form.email}
          onChange={change}
          className={`mt-2 ${FIELD}`}
          placeholder="you@fairwaymc.com"
        />
      </div>

      <div>
        <label htmlFor="kp-phone" className={LABEL}>
          Mobile phone
        </label>
        <input
          id="kp-phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          inputMode="tel"
          value={form.phone}
          onChange={change}
          className={`mt-2 ${FIELD}`}
          placeholder="(555) 123-4567"
        />
      </div>

      {/* Both unchecked by default — a pre-ticked consent box is not consent. */}
      <fieldset className="space-y-4 border-t border-line pt-5">
        <legend className="sr-only">How we can contact you</legend>

        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            required
            checked={smsOptIn}
            onChange={(e) => setSmsOptIn(e.target.checked)}
            className="mt-0.5 h-5 w-5 flex-shrink-0 accent-brand"
          />
          <span className="text-[13px] leading-[1.6] text-muted">
            {SMS_CONSENT}
          </span>
        </label>

        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            required
            checked={emailOptIn}
            onChange={(e) => setEmailOptIn(e.target.checked)}
            className="mt-0.5 h-5 w-5 flex-shrink-0 accent-brand"
          />
          <span className="text-[13px] leading-[1.6] text-muted">
            {EMAIL_CONSENT}
          </span>
        </label>
      </fieldset>

      {error && (
        <p role="alert" className="text-[14px] text-red-600">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={!canSubmit}
        className="w-full rounded-full bg-brand px-8 py-4 font-display text-[14px] font-bold uppercase leading-none tracking-[0.12em] text-white transition-colors hover:bg-brand-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40"
      >
        {submitting ? 'Sending…' : 'Send my info'}
      </button>
    </form>
  );
}
