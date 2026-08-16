'use client';

import { useState } from 'react';
import BookButton from './BookButton';

// NOTE FOR COLIN: these point at homepage sections today so nothing dead-ends.
// Once /services, /portal, and /results exist, swap the `href` values for those
// routes — nothing else in this component needs to change.
const LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Portal', href: '#portal' },
  { label: 'Results', href: '#results' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-white/75 backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a
          href="#top"
          className="text-[17px] font-medium tracking-[-0.02em] text-ink"
        >
          Own It Social
        </a>

        <div className="flex items-center gap-2 sm:gap-7">
          <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[14px] text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA stays visible at every breakpoint. */}
          <BookButton size="md">Book a call</BookButton>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-9 w-9 items-center justify-center rounded-md text-ink transition-colors hover:bg-sand focus:outline-none focus-visible:ring-2 focus-visible:ring-navy md:hidden"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
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
          className="border-t border-line bg-white/95 backdrop-blur-xl md:hidden"
        >
          <ul className="mx-auto max-w-6xl px-5 py-2 sm:px-8">
            {LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-[15px] text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
