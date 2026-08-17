// ---------------------------------------------------------------------------
// Purple ticker that runs under the hero and again above the footer.
//
// The track renders the phrase list TWICE and slides exactly one copy's width
// (-50%) before looping, which is what makes the seam invisible. Duplicating
// the list is therefore load-bearing — don't render it once.
//
// Reduced motion stops the animation (see globals.css); the first copy stays
// on screen and it reads as a static banner.
// ---------------------------------------------------------------------------
type Props = {
  /** One phrase, repeated across the strip. */
  text?: string;
  /** How many times the phrase appears per copy of the track. */
  repeat?: number;
  /** `dark` renders black-on-white instead of white-on-purple. */
  tone?: 'brand' | 'dark';
};

export default function Marquee({
  text = 'You close loans. We do the rest.',
  repeat = 6,
  tone = 'brand',
}: Props) {
  const items = Array.from({ length: repeat }, (_, i) => i);
  const tones =
    tone === 'dark' ? 'bg-ink text-white' : 'bg-brand text-white';

  const copy = (key: string) => (
    <div key={key} className="flex shrink-0 items-center" aria-hidden="true">
      {items.map((i) => (
        <span
          key={`${key}-${i}`}
          className="flex shrink-0 items-center gap-6 whitespace-nowrap px-6 font-display text-[22px] font-black uppercase tracking-[-0.01em] sm:text-[34px]"
        >
          {text}
          <span className="inline-block h-2 w-2 shrink-0 rounded-full bg-current opacity-60" />
        </span>
      ))}
    </div>
  );

  return (
    <div className={`overflow-hidden py-3.5 sm:py-4 ${tones}`}>
      {/* The phrase is announced once to assistive tech; the visual copies are
          hidden so a screen reader doesn't read it a dozen times. */}
      <span className="sr-only">{text}</span>
      <div className="flex w-max animate-marquee">
        {copy('a')}
        {copy('b')}
      </div>
    </div>
  );
}
