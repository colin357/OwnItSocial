'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import BookingEmbed from './BookingEmbed';
import { trackBookingClick } from './pixel';

// Shared booking state so every CTA on the page opens the same modal.
// The provider is a client component wrapping the (server-rendered) page;
// the CTA buttons are client consumers that call open().

type BookingCtx = { open: () => void; close: () => void };

const Ctx = createContext<BookingCtx | null>(null);

export function useBooking(): BookingCtx {
  const ctx = useContext(Ctx);
  if (!ctx) {
    // Fail loud in dev if a CTA is rendered outside the provider.
    throw new Error('useBooking must be used within <BookingProvider>');
  }
  return ctx;
}

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    trackBookingClick(); // fire the Meta Pixel intent event on every open
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
        <div
          className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center p-0 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Book your CMO strategy call"
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close booking"
            onClick={close}
            className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm"
          />
          {/* Panel */}
          <div className="relative w-full sm:max-w-2xl bg-white sm:rounded-2xl shadow-2xl h-full sm:h-auto sm:max-h-[92vh] overflow-y-auto overscroll-contain">
            <div className="sticky top-0 z-10 flex items-center justify-between gap-4 px-5 py-4 border-b border-gray-100 bg-white/95 backdrop-blur">
              <span className="font-black text-gray-900">
                Book Your CMO Strategy Call
              </span>
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-4 sm:p-5">
              {/* Iframe only mounts once the modal is opened. */}
              <BookingEmbed />
            </div>
          </div>
        </div>
      )}
    </Ctx.Provider>
  );
}
