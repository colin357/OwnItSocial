'use client';

import { useBooking } from './Booking';

type Props = {
  children?: React.ReactNode;
  /** `md` for the nav, `lg` for the hero and closing CTA. */
  size?: 'md' | 'lg';
  /** `white` for use on the navy sections. */
  variant?: 'navy' | 'white';
  className?: string;
};

/**
 * The one action on the homepage. Flat navy, 6px radius, no shadow, no gradient
 * — per the design system, navy appears only on CTAs, the offer block, and icons.
 */
export default function BookButton({
  children = 'Get your free strategy session',
  size = 'lg',
  variant = 'navy',
  className = '',
}: Props) {
  const { open } = useBooking();
  const sizes =
    size === 'lg' ? 'px-7 py-3.5 text-[17px]' : 'px-5 py-2 text-[14px]';
  const variants =
    variant === 'white'
      ? 'bg-white text-navy hover:bg-white/90'
      : 'bg-navy text-white hover:bg-[#16436e]';

  return (
    <button
      type="button"
      onClick={open}
      className={`inline-flex items-center justify-center rounded-full font-medium tracking-[-0.01em] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 ${sizes} ${variants} ${className}`}
    >
      {children}
    </button>
  );
}
