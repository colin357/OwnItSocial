import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Lana's Birthday Party 🎉",
  description:
    "Photos and videos from Lana's birthday party — view them all and download your favorites.",
  // Keep this personal page out of search engines.
  robots: {
    index: false,
    follow: false,
  },
};

// Google Drive folder holding all the party photos & videos.
const DRIVE_FOLDER_ID = '1l1y__6cqvI3y2QAgWSXpYqBJw4RsQvga';
const DRIVE_FOLDER_URL = `https://drive.google.com/drive/folders/${DRIVE_FOLDER_ID}`;
const DRIVE_EMBED_URL = `https://drive.google.com/embeddedfolderview?id=${DRIVE_FOLDER_ID}#grid`;

const PHOTO_COUNT = 158;
const VIDEO_COUNT = 5;

export default function LanasBirthdayPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500" />
        <div className="relative max-w-5xl mx-auto px-6 py-16 sm:py-24 text-center text-white">
          <p className="text-3xl sm:text-4xl mb-3" aria-hidden="true">
            🎉🎂🎈
          </p>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight drop-shadow-sm">
            Lana&apos;s Birthday Party
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            All the photos and videos from the celebration are here — {PHOTO_COUNT}{' '}
            photos and {VIDEO_COUNT} videos. Take a look and download whatever
            you&apos;d like to keep.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={DRIVE_FOLDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-purple-700 shadow-xl transition hover:scale-[1.03] hover:bg-purple-50"
            >
              <DownloadIcon />
              View &amp; Download Photos &amp; Videos
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* How to download */}
        <section className="mb-12 rounded-2xl bg-white/70 p-6 sm:p-8 shadow-sm ring-1 ring-black/5">
          <h2 className="text-xl font-bold text-gray-900">How to download</h2>
          <ul className="mt-4 space-y-3 text-gray-700">
            <li className="flex gap-3">
              <Step>1</Step>
              <span>
                Tap{' '}
                <a
                  href={DRIVE_FOLDER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-purple-700 underline"
                >
                  View &amp; Download Photos &amp; Videos
                </a>{' '}
                to open the full album.
              </span>
            </li>
            <li className="flex gap-3">
              <Step>2</Step>
              <span>
                <span className="font-semibold">To save one item:</span> click it,
                then tap the download icon (⤓) in the top-right.
              </span>
            </li>
            <li className="flex gap-3">
              <Step>3</Step>
              <span>
                <span className="font-semibold">To save everything at once:</span>{' '}
                press <kbd className="rounded bg-gray-100 px-1.5 py-0.5 text-sm">Ctrl</kbd>
                /<kbd className="rounded bg-gray-100 px-1.5 py-0.5 text-sm">⌘</kbd> +{' '}
                <kbd className="rounded bg-gray-100 px-1.5 py-0.5 text-sm">A</kbd> to
                select all, then the ⋮ menu → <span className="font-semibold">Download</span>.
                Google packages them into a zip file for you.
              </span>
            </li>
          </ul>
        </section>

        {/* Inline album preview */}
        <section>
          <h2 className="mb-4 text-xl font-bold text-gray-900">Browse the album</h2>
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
            <iframe
              src={DRIVE_EMBED_URL}
              title="Lana's Birthday Party album"
              className="h-[600px] w-full"
              loading="lazy"
            />
          </div>
          <p className="mt-3 text-sm text-gray-500">
            Preview not loading? Open the full album here:{' '}
            <a
              href={DRIVE_FOLDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-purple-700 underline"
            >
              View &amp; Download Photos &amp; Videos
            </a>
            .
          </p>
        </section>
      </main>

      <footer className="py-10 text-center text-sm text-gray-500">
        Made with 💜 by Own It Social
      </footer>
    </div>
  );
}

function Step({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-purple-600 text-sm font-bold text-white">
      {children}
    </span>
  );
}

function DownloadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}
