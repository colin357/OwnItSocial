import Link from 'next/link';

// ---------------------------------------------------------------------------
// Site footer, shared by the homepage and the indexable service pages so the
// same set of links (and therefore the same crawl paths) appears everywhere.
// Section anchors are absolute so they resolve from any page.
// ---------------------------------------------------------------------------
export const FOOTER_LINKS = [
  { label: 'Loan officer marketing', href: '/loan-officer-marketing' },
  { label: 'Choosing an agency', href: '/loan-officer-marketing-agencies' },
  { label: 'Real estate marketing', href: '/real-estate-marketing' },
  { label: 'Services', href: '/#services' },
  { label: 'Work', href: '/#work' },
  { label: 'Portal', href: '/#portal' },
  { label: 'Articles', href: '/articles' },
  { label: 'Locations', href: '/locations' },
];

export default function Footer() {
  return (
    <footer className="bg-ink px-5 pb-12 pt-20 text-white sm:px-8">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col gap-12 border-b border-white/15 pb-12 lg:flex-row lg:items-start lg:justify-between">
          <span className="font-display text-[46px] uppercase leading-none tracking-[-0.03em] sm:text-[72px] lg:text-[96px]">
            <span className="font-black">Own It</span>{' '}
            <span className="font-semibold text-white/55">Social</span>
          </span>
          <nav
            className="grid grid-cols-2 gap-x-12 gap-y-3 sm:grid-cols-3"
            aria-label="Footer"
          >
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-display text-[13px] font-bold uppercase tracking-[0.1em] text-white/65 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-3 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-white/50">
            &copy; {new Date().getFullYear()} Own It Social &middot; Miami, FL
            &middot; Marketing for loan officers across the United States
          </p>
          <a
            href="mailto:colin@ownitsocial.com"
            className="text-[13px] text-white/50 transition-colors hover:text-white"
          >
            colin@ownitsocial.com
          </a>
        </div>
      </div>
    </footer>
  );
}
