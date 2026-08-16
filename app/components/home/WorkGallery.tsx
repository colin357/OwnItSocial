import Image from 'next/image';

// ---------------------------------------------------------------------------
// Tilted mosaic of real client content, bleeding off the right edge.
//
// TO SHIP THE REAL THING: drop the graphics in public/images/work/ and fill in
// each `src` below. 4:3 crops, roughly 1200x900. Anything left empty renders a
// labelled tile instead, so a half-filled grid still reads as a composition.
//
// Add or remove entries freely — the grid reflows and the bleed still works.
// ---------------------------------------------------------------------------
type WorkItem = {
  /** e.g. '/images/work/buy-a-home-90-days.png' */
  src: string;
  /** Doubles as alt text and as the placeholder label. */
  label: string;
};

const WORK: WorkItem[] = [
  { src: '', label: 'Buyer education carousel' },
  { src: '', label: 'Loan program explainer' },
  { src: '', label: 'Listing feature post' },
  { src: '', label: 'Process breakdown graphic' },
  { src: '', label: 'Daily affirmation post' },
  { src: '', label: 'Market myth-buster' },
];

export default function WorkGallery() {
  return (
    <div className="relative lg:h-[540px]">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:absolute lg:left-0 lg:top-1/2 lg:w-[150%] lg:-translate-y-1/2 lg:-rotate-6 lg:gap-5">
        {WORK.map((item, i) => (
          <div
            key={`${item.label}-${i}`}
            className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line bg-white shadow-[0_10px_30px_-16px_rgba(12,46,78,0.35)]"
          >
            {item.src ? (
              <Image
                src={item.src}
                alt={item.label}
                fill
                sizes="(max-width: 1024px) 45vw, 300px"
                className="object-cover"
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
