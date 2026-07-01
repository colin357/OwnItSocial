'use client';

import { trackBookingClick } from './pixel';

type Props = {
  children?: React.ReactNode;
  /** `primary` = gradient on light bg. `inverse` = white on dark/gradient bg. */
  variant?: 'primary' | 'inverse';
  /** `lg` for hero/final CTAs, `md` for the compact header CTA. */
  size?: 'md' | 'lg';
  className?: string;
};

/**
 * The single conversion action on this page. Every CTA on /cmo is this button:
 * it fires the Meta Pixel intent event, then smooth-scrolls to the booking
 * embed (#book). Keeping it one component means the CTA behaves identically in
 * the hero, mid-page, and footer.
 */
export default function CtaButton({
  children = 'Book Your CMO Strategy Call',
  variant = 'primary',
  size = 'lg',
  className = '',
}: Props) {
  const sizes = size === 'lg' ? 'px-8 py-4 text-base' : 'px-6 py-2.5 text-sm';
  const variants =
    variant === 'inverse'
      ? 'bg-white text-purple-700 hover:bg-purple-50'
      : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white';

  function handleClick() {
    trackBookingClick();
    document
      .getElementById('book')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex items-center justify-center font-bold rounded-full shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-400/50 ${sizes} ${variants} ${className}`}
    >
      {children}
      <svg
        className="ml-2 w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7l5 5m0 0l-5 5m5-5H6"
        />
      </svg>
    </button>
  );
}
