'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import BookingEmbed from '../../cmo/BookingEmbed';
import { trackBookingClick } from '../../cmo/pixel';

// The homepage drives exactly one action: booking a strategy session. Every CTA
// on the page opens this single modal, which mounts the same LeadConnector
// calendar the /cmo campaign page uses (swap it with NEXT_PUBLIC_BOOKING_URL).

type BookingCtx = { open: () => void; close: () => void };

const Ctx = createContext<BookingCtx | null>(null);

export function useBooking(): BookingCtx {
  const ctx = useContext(Ctx);
  if (!ctx) {
    throw new Error('useBooking must be used within <BookingProvider>');
  }
  return ctx;
}

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    trackBookingClick('homepage'); // Meta Pixel intent event
    setIsOpen(true);
  }, []);
  const close = useCallback(() => setIsOpen(false), []);

  // Esc to close + lock body scroll while the modal is open.
  useEffect(() => {
    if (!isOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setIsOpen(false);
    }
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  return (
    <Ctx.Provider value={{ open, close }}>
      {children}
      {isOpen && (
        // The modal renders outside the page's font wrapper, so it sets its own.
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center p-0 font-inter text-ink sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Book your free strategy session"
        >
          <button
            type="button"
            aria-label="Close booking"
            onClick={close}
            className="absolute inset-0 bg-ink/60"
          />
          <div className="relative h-full w-full overflow-y-auto overscroll-contain bg-white sm:h-auto sm:max-h-[92vh] sm:max-w-2xl sm:rounded-xl sm:border sm:border-line">
            <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-line bg-white px-5 py-4">
              <span className="text-[15px] font-medium text-ink">
                Book your free strategy session
              </span>
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md text-muted transition-colors hover:bg-sand hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-navy"
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
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4 sm:p-5">
              {/* Iframe only mounts once the modal is opened. */}
              <BookingEmbed title="Book your free strategy session" />
            </div>
          </div>
        </div>
      )}
    </Ctx.Provider>
  );
}
