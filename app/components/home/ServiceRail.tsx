import Image from 'next/image';
import Carousel from './Carousel';

// ---------------------------------------------------------------------------
// "How we can help you" — one card per service, on the same rail component as
// the work section so the two read as a pair.
//
// Copy is condensed from the deliverables on /cmo; nothing here is a new claim.
// TO ADD A SERVICE: add an entry and drop its photo in public/images/services/.
//
// Photos are free-license stock from Unsplash, saved as 1200x1200 crops so the
// square card never has to guess where to cut. Attribution isn't required by
// the Unsplash License, but the photographers are credited here:
//   social.jpg, crm.jpg, co-marketing.jpg — Vitaly Gariev
//   search.jpg                            — Arkan Perdana
// Swap any of these for a real photo of your own team or a client shoot; the
// only requirement is a square crop.
// ---------------------------------------------------------------------------
export type Service = {
  /** Small uppercase line above the title — the outcome, not the tactic. */
  eyebrow: string;
  title: string;
  body: string;
  src: string;
  /** Alt text for the photo. */
  alt: string;
};

// Exported so a landing page can start from this list and re-word a card for
// its audience (see /keep-playing, which names Total Expert on the CRM card)
// without forking the component.
export const SERVICES: Service[] = [
  {
    eyebrow: 'Staying top of mind',
    title: 'Social',
    body: 'We create the content people actually want to watch. Scripts, captions, and a posting calendar across Instagram, Facebook, and LinkedIn — written, edited, and published for you every week, so you are in front of buyers without touching an app.',
    src: '/images/services/social.jpg',
    alt: 'A man talking to a camera on a tripod, recording a video at home',
  },
  {
    eyebrow: 'Repeat and referral',
    title: 'CRM',
    body: 'Your past clients are your cheapest pipeline. We set up and clean your CRM, then run automated email and SMS campaigns that keep you connected to everyone you have already closed — so the next loan comes from a name you know.',
    src: '/images/services/crm.jpg',
    alt: 'A loan officer on a call at their desk, taking notes beside a laptop',
  },
  {
    eyebrow: 'Being found',
    title: 'Search',
    body: 'When someone searches for a lender in your market, you should be the answer. We optimize your Google Business Profile and automate a review request after every closing, so you show up with fresh five-star reviews instead of an empty listing.',
    src: '/images/services/search.jpg',
    alt: 'A hand holding a phone open to a Google search',
  },
  {
    eyebrow: 'Agent partnerships',
    title: 'Co-marketing',
    body: 'Referral partners stay loyal to the lender who makes them look good. We produce co-branded flyers, social content, and market updates your realtor partners can put straight in front of their own clients, with your name on every one.',
    src: '/images/services/co-marketing.jpg',
    alt: 'A loan officer and a realtor reviewing a document together',
  },
];

export default function ServiceRail({
  services = SERVICES,
}: {
  services?: Service[];
}) {
  return (
    <Carousel label="Services" arrows="below">
      {services.map((service) => (
        <article
          key={service.title}
          className="group w-[280px] shrink-0 snap-start sm:w-[340px] lg:w-[380px]"
        >
          <div className="relative aspect-square overflow-hidden bg-sand">
            <Image
              src={service.src}
              alt={service.alt}
              fill
              sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 380px"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </div>
          <p className="mt-6 font-display text-[12px] font-bold uppercase tracking-[0.12em] text-brand">
            {service.eyebrow}
          </p>
          <h3 className="mt-3 font-display text-[30px] font-black uppercase leading-none tracking-[-0.02em] text-ink sm:text-[36px]">
            {service.title}
          </h3>
          <p className="mt-4 text-[15px] leading-[1.7] text-muted">
            {service.body}
          </p>
        </article>
      ))}
    </Carousel>
  );
}
