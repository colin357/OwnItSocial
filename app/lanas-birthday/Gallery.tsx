'use client';

import { useCallback, useEffect, useState } from 'react';

export type MediaItem = {
  name: string;
  src: string;
  type: 'image' | 'video';
};

/** Triggers a same-origin download for a single file. */
async function downloadFile(item: MediaItem) {
  try {
    const response = await fetch(item.src);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = item.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } catch {
    // Fallback: open in a new tab if the fetch/blob approach fails.
    window.open(item.src, '_blank');
  }
}

export default function Gallery({ media }: { media: MediaItem[] }) {
  const [lightbox, setLightbox] = useState<MediaItem | null>(null);
  const [downloadingAll, setDownloadingAll] = useState(false);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, closeLightbox]);

  const downloadAll = useCallback(async () => {
    setDownloadingAll(true);
    // Download sequentially so browsers don't block the batch.
    for (const item of media) {
      await downloadFile(item);
      await new Promise((resolve) => setTimeout(resolve, 400));
    }
    setDownloadingAll(false);
  }, [media]);

  if (media.length === 0) {
    return (
      <div className="rounded-2xl border-2 border-dashed border-purple-200 bg-white/60 p-10 sm:p-16 text-center">
        <p className="text-5xl mb-4" aria-hidden="true">
          📸
        </p>
        <h2 className="text-xl font-semibold text-gray-800">
          Photos &amp; videos coming soon!
        </h2>
        <p className="mt-2 text-gray-600 max-w-md mx-auto">
          The party memories are being uploaded. Check back shortly to view and
          download them.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <p className="text-gray-600">
          <span className="font-semibold text-gray-900">{media.length}</span>{' '}
          {media.length === 1 ? 'memory' : 'memories'} from the party
        </p>
        <button
          onClick={downloadAll}
          disabled={downloadingAll}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 font-semibold text-white shadow-lg shadow-purple-500/20 transition hover:shadow-purple-500/40 hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
        >
          {downloadingAll ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              Downloading…
            </>
          ) : (
            <>
              <DownloadIcon />
              Download all
            </>
          )}
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
        {media.map((item) => (
          <div
            key={item.name}
            className="group relative aspect-square overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5"
          >
            <button
              onClick={() => setLightbox(item)}
              className="absolute inset-0 h-full w-full cursor-zoom-in"
              aria-label={`View ${item.name}`}
            >
              {item.type === 'image' ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.src}
                  alt={item.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              ) : (
                <>
                  <video
                    src={item.src}
                    className="h-full w-full object-cover"
                    muted
                    playsInline
                    preload="metadata"
                  />
                  <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm">
                      <PlayIcon />
                    </span>
                  </span>
                </>
              )}
            </button>

            {/* Per-item download */}
            <button
              onClick={() => downloadFile(item)}
              className="absolute bottom-2 right-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-purple-700 shadow-md opacity-0 transition group-hover:opacity-100 focus:opacity-100 hover:bg-white"
              aria-label={`Download ${item.name}`}
              title="Download"
            >
              <DownloadIcon />
            </button>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Close"
          >
            <CloseIcon />
          </button>

          <div
            className="max-h-[85vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {lightbox.type === 'image' ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={lightbox.src}
                alt={lightbox.name}
                className="max-h-[85vh] w-auto rounded-lg object-contain"
              />
            ) : (
              <video
                src={lightbox.src}
                controls
                autoPlay
                playsInline
                className="max-h-[85vh] w-auto rounded-lg"
              />
            )}

            <div className="mt-4 flex justify-center">
              <button
                onClick={() => downloadFile(lightbox)}
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-semibold text-gray-900 transition hover:bg-gray-100"
              >
                <DownloadIcon />
                Download
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function DownloadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
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

function PlayIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
