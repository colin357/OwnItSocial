'use client';

import { useBooking } from './Booking';

type Props = {
  children?: React.ReactNode;
  /** `sm` for the nav, `md` for inline section CTAs, `lg` for hero and closing. */
  size?: 'sm' | 'md' | 'lg';
  /** `white` on the purple and black sections, `outline` on light photography. */
  variant?: 'brand' | 'white' | 'outline';
  className?: string;
};

/**
 * The one action on the homepage: every CTA opens the same booking modal.
 * Full-round purple pill, uppercase, wide-tracked — the shape carries the
 * accent colour, so nothing else on the page needs to.
 */
export default function BookButton({
  children = 'Book a call',
  size = 'lg',
  variant = 'brand',
  className = '',
}: Props) {
  const { open } = useBooking();

  const sizes = {
    sm: 'px-5 py-2.5 text-[12px] tracking-[0.1em]',
    md: 'px-7 py-3.5 text-[13px] tracking-[0.12em]',
    lg: 'px-9 py-4 text-[14px] tracking-[0.12em]',
  }[size];

  const variants = {
    brand: 'bg-brand text-white hover:bg-brand-dark',
    white: 'bg-white text-ink hover:bg-brand hover:text-white',
    outline:
      'border-2 border-ink bg-transparent text-ink hover:bg-ink hover:text-white',
  }[variant];

  return (
    <button
      type="button"
      onClick={open}
      className={`inline-flex items-center justify-center rounded-full font-display font-bold uppercase leading-none transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${sizes} ${variants} ${className}`}
    >
      {children}
    </button>
  );
}
