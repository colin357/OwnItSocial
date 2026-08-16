import Image from 'next/image';

// ---------------------------------------------------------------------------
// Tilted mosaic of real client content, bleeding off the right edge.
//
// TO ADD MORE: drop the file in public/ and add an entry below. Anything left
// with an empty `src` renders a labelled tile instead, so a half-filled grid
// still reads as a composition. The grid reflows and the bleed still works.
//
// Tiles are portrait and the art is fitted with object-contain rather than
// cropped: these are 4:5 and 1:1 social graphics whose captions sit right on
// the bottom edge, so a cover-crop would cut the copy off.
// ---------------------------------------------------------------------------
type WorkItem = {
  /** e.g. '/work-1.png' */
  src: string;
  /** Doubles as alt text and as the placeholder label. */
  label: string;
};

const WORK: WorkItem[] = [
  { src: '/work-1.png', label: 'Buyer education post — how to prepare to buy a home in 90 days' },
  { src: '/work-2.png', label: 'Loan program explainer — how USDA backing helps you' },
  { src: '/work-3.png', label: 'Just closed post for a client listing' },
  { src: '/work-4.png', label: 'USDA loan process breakdown' },
  { src: '/work-5.png', label: 'Daily affirmation post' },
  { src: '/work-6.png', label: 'VA loan explainer — what veterans need upfront' },
];

export default function WorkGallery() {
  return (
    <div className="relative lg:h-[620px]">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:absolute lg:left-0 lg:top-1/2 lg:w-[135%] lg:-translate-y-1/2 lg:-rotate-6 lg:gap-5">
        {WORK.map((item, i) => (
          <div
            key={`${item.label}-${i}`}
            className="relative aspect-[4/5] overflow-hidden rounded-xl border border-line bg-white shadow-[0_10px_30px_-16px_rgba(12,46,78,0.35)]"
          >
            {item.src ? (
              <Image
                src={item.src}
                alt={item.label}
                fill
                sizes="(max-width: 1024px) 45vw, 320px"
                className="object-contain"
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
        ))}
      </div>
    </div>
  );
}
