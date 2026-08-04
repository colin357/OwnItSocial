'use client';

import { useEffect } from 'react';

/**
 * Drives the two bits of motion in the editorial homepage:
 * the scroll-reveal on `.reveal` elements, and the nav that
 * slides in once you're past the hero.
 *
 * `.oi-js` is set by an inline script in the page head-of-body so
 * revealed elements never flash before this hydrates; if JS is off,
 * the class is never added and everything renders plainly visible.
 */
export default function EditorialChrome() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const items = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));

    let observer: IntersectionObserver | undefined;
    if (reduced) {
      items.forEach((el) => el.classList.add('reveal--visible'));
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('reveal--visible');
              observer?.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
      );
      items.forEach((el) => observer!.observe(el));
    }

    const nav = document.getElementById('oi-nav');
    const hero = document.getElementById('home');
    let navObserver: IntersectionObserver | undefined;
    if (nav && hero) {
      navObserver = new IntersectionObserver(
        ([entry]) => nav.classList.toggle('nav--visible', !entry.isIntersecting),
        { threshold: 0 }
      );
      navObserver.observe(hero);
    }

    return () => {
      observer?.disconnect();
      navObserver?.disconnect();
    };
  }, []);

  return null;
}
