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

// The page drives exactly one action, and every CTA on it opens this single
// modal. By default that modal is the same LeadConnector calendar the /cmo
// campaign page uses (swap it with NEXT_PUBLIC_BOOKING_URL).
//
// A page that wants a different action passes its own `modal` — /keepplaying
// passes a lead form instead of the calendar. Whatever is passed renders
// inside this provider, so it can call useBooking() to close itself.

type BookingCtx = { open: () => void; close: () => void };

const Ctx = createContext<BookingCtx | null>(null);

export function useBooking(): BookingCtx {
  const ctx = useContext(Ctx);
  if (!ctx) {
    throw new Error('useBooking must be used within <BookingProvider>');
  }
  return ctx;
}

type ProviderProps = {
  children: React.ReactNode;
  /** Modal body. Defaults to the booking calendar. */
  modal?: React.ReactNode;
  /** Modal heading, and the dialog's accessible name. */
  title?: string;
  /** Distinguishes the pixel's intent event per page. */
  source?: string;
};

export function BookingProvider({
  children,
  modal,
  title = 'Book your free strategy session',
  source = 'homepage',
}: ProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    trackBookingClick(source); // Meta Pixel intent event
    setIsOpen(true);
  }, [source]);
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
          className="fixed inset-0 z-[100] flex items-start justify-center p-0 font-montserrat text-ink sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={close}
            className="absolute inset-0 bg-ink/60"
          />
          <div className="relative h-full w-full overflow-y-auto overscroll-contain bg-white sm:h-auto sm:max-h-[92vh] sm:max-w-2xl sm:border sm:border-ink">
            <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-line bg-white px-5 py-4">
              <span className="font-display text-[13px] font-bold uppercase tracking-[0.1em] text-ink">
                {title}
              </span>
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-muted transition-colors hover:bg-sand hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
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
              {/* Whatever this is, it only mounts once the modal is opened —
                  which is what keeps the calendar iframe off the initial load. */}
              {modal ?? <BookingEmbed title={title} />}
            </div>
          </div>
        </div>
      )}
    </Ctx.Provider>
  );
}
