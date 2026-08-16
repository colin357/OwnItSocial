'use client';

import { useBooking } from './Booking';

type Props = {
  children?: React.ReactNode;
  /** `md` for the nav, `lg` for the hero and closing CTA. */
  size?: 'md' | 'lg';
  className?: string;
};

/**
 * The one action on the homepage. Flat navy, 6px radius, no shadow, no gradient
 * — per the design system, navy appears only on CTAs, the offer block, and icons.
 */
export default function BookButton({
  children = 'Get your free strategy session',
  size = 'lg',
  className = '',
}: Props) {
  const { open } = useBooking();
  const sizes =
    size === 'lg' ? 'px-6 py-3.5 text-[15px]' : 'px-4 py-2 text-[14px]';

  return (
    <button
      type="button"
      onClick={open}
      className={`inline-flex items-center justify-center rounded-md bg-navy font-medium text-white transition-colors duration-150 hover:bg-[#123c66] focus:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 ${sizes} ${className}`}
    >
      {children}
    </button>
  );
}
