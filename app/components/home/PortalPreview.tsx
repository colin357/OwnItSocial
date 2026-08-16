import Image from 'next/image';

// ---------------------------------------------------------------------------
// The visual centerpiece of the homepage: the real client portal, framed in a
// browser-style card. No stock photography, no illustration — a real product
// screenshot or a clearly-marked empty frame, nothing in between.
//
// TO SHIP THE REAL THING: drop a screenshot of the portal calendar/task view at
// public/images/portal-preview.png (2560×1600 or any 16:10 crop) and set the
// constant below to '/images/portal-preview.png'. That is the only change.
//
// For a looping video instead, replace the <Image> with:
//   <video src="/videos/portal-preview.mp4" autoPlay loop muted playsInline
//          className="h-full w-full object-cover" />
// ---------------------------------------------------------------------------
const PORTAL_SCREENSHOT: string = '';

export default function PortalPreview() {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-white shadow-portal">
      {/* Browser chrome */}
      <div className="flex h-9 items-center gap-1.5 border-b border-line px-4">
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
      </div>

      <div className="relative aspect-[16/10] w-full bg-sand">
        {PORTAL_SCREENSHOT ? (
          <Image
            src={PORTAL_SCREENSHOT}
            alt="The Own It Social client portal, showing a loan officer's content calendar and approval tasks"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 880px"
            className="object-cover object-top"
          />
        ) : (
          <div className="absolute inset-4 flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-line px-6 text-center">
            <p className="text-[13px] font-medium text-ink">
              [NEEDS CONTENT: client portal screenshot]
            </p>
            <p className="max-w-sm text-[13px] leading-[1.7] text-muted">
              Calendar or task view, 16:10 crop. Save it to
              public/images/portal-preview.png and set PORTAL_SCREENSHOT in this
              component.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
