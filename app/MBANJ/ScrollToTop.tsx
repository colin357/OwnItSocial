'use client';

import { useEffect } from 'react';

export default function ScrollToTop() {
  useEffect(() => {
    if (typeof window === 'undefined' || window.location.hash) {
      return;
    }

    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    requestAnimationFrame(() => window.scrollTo(0, 0));
  }, []);

  return null;
}
