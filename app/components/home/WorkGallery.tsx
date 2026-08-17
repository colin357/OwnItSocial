import Image from 'next/image';
import Carousel from './Carousel';

// ---------------------------------------------------------------------------
// Horizontal rail of real client content.
//
// TO ADD MORE: drop the file in public/ and add an entry below. Anything left
// with an empty `src` renders a labelled tile instead, so a half-filled rail
// still reads as a composition.
//
// The art is fitted with object-contain rather than cropped: these are 4:5 and
// 1:1 social graphics whose captions sit right on the bottom edge, so a
// cover-crop would cut the copy off.
// ---------------------------------------------------------------------------
type WorkItem = {
  /** e.g. '/work-1.png' */
  src: string;
  /** Doubles as alt text and as the placeholder label. */
  label: string;
  /** Short uppercase tag shown under the tile. */
  tag: string;
};

const WORK: WorkItem[] = [
  {
    src: '/work-1.png',
    label: 'Buyer education post — how to prepare to buy a home in 90 days',
    tag: 'Buyer education',
  },
  {
    src: '/work-2.png',
    label: 'Loan program explainer — how USDA backing helps you',
    tag: 'Loan programs',
  },
  {
    src: '/work-3.png',
    label: 'Just closed post for a client listing',
    tag: 'Just closed',
  },
  {
    src: '/work-4.png',
    label: 'USDA loan process breakdown',
    tag: 'Process explainer',
  },
  {
    src: '/work-5.png',
    label: 'Daily affirmation post',
    tag: 'Brand voice',
  },
  {
    src: '/work-6.png',
    label: 'VA loan explainer — what veterans need upfront',
    tag: 'VA loans',
  },
];

export default function WorkGallery() {
  return (
    <Carousel label="Selected client work">
      {WORK.map((item, i) => (
        <figure
          key={`${item.label}-${i}`}
          className="w-[240px] shrink-0 snap-start sm:w-[300px] lg:w-[340px]"
        >
          <div className="relative aspect-[4/5] overflow-hidden border border-line bg-sand">
            {item.src ? (
              <Image
                src={item.src}
                alt={item.label}
                fill
                sizes="(max-width: 640px) 240px, (max-width: 1024px) 300px, 340px"
                className="object-contain transition-transform duration-500 hover:scale-[1.03]"
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-1.5 px-4 text-center">
                <span className="text-[13px] text-ink">{item.label}</span>
                <span className="text-[11px] text-muted/70">
                  [NEEDS CONTENT]
                </span>
              </div>
            )}
          </div>
          <figcaption className="mt-4 font-display text-[12px] font-bold uppercase tracking-[0.1em] text-muted">
            {item.tag}
          </figcaption>
        </figure>
      ))}
    </Carousel>
  );
}
