'use client';

import { useState } from 'react';
import Link from 'next/link';
import AnnouncementBar from './AnnouncementBar';
import BookButton from './BookButton';

// NOTE FOR COLIN: these point at homepage sections today so nothing dead-ends.
// Once /services, /work, and /portal exist as their own pages, swap the `href`
// values for those routes — nothing else in this component needs to change.
const LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Portal', href: '#portal' },
  { label: 'Results', href: '#results' },
  { label: 'Articles', href: '/articles' },
];

type Props = {
  /** Overrides the two strings in the purple strip (see /keepplaying). */
  announcement?: { message?: string; cta?: string };
  /** Landing pages that don't have every homepage section pass their own. */
  links?: { label: string; href: string }[];
  /** Where the wordmark points. Landing pages send it to the top of the page. */
  homeHref?: string;
};

export default function Nav({
  announcement,
  links = LINKS,
  homeHref = '#top',
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="mx-auto flex h-[76px] max-w-[1400px] items-center justify-between gap-4 px-5 sm:px-8">
        {/* Wordmark, set in the display face at its heaviest. The two halves
            carry different weights so the lockup reads as one mark rather than
            three loose words. */}
        <a
          href={homeHref}
          className="font-display text-[22px] uppercase leading-none tracking-[-0.03em] text-ink sm:text-[27px]"
          aria-label="Own It Social — home"
        >
          <span className="font-black">Own It</span>{' '}
          <span className="font-semibold">Social</span>
        </a>

        <div className="flex items-center gap-3 sm:gap-8">
          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Main"
          >
            {links.map((link) =>
              link.href.startsWith('/') ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-display text-[13px] font-bold uppercase tracking-[0.08em] text-ink transition-colors hover:text-brand"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-display text-[13px] font-bold uppercase tracking-[0.08em] text-ink transition-colors hover:text-brand"
                >
                  {link.label}
                </a>
              ),
            )}
          </nav>

          {/* CTA stays visible at every breakpoint. */}
          <BookButton size="sm" className="hidden sm:inline-flex">
            Book a call
          </BookButton>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-sand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand lg:hidden"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.25}
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Main"
          className="border-t border-line bg-white lg:hidden"
        >
          <ul className="mx-auto max-w-[1400px] px-5 py-3 sm:px-8">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line py-4 font-display text-[20px] font-black uppercase tracking-[-0.01em] text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="py-5 sm:hidden">
              <BookButton size="md">Book a call</BookButton>
            </li>
          </ul>
        </nav>
      )}

      <AnnouncementBar {...announcement} />
    </header>
  );
}
