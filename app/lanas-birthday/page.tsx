import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import Gallery, { type MediaItem } from './Gallery';

export const metadata: Metadata = {
  title: "Lana's Birthday Party 🎉",
  description: "Photos and videos from Lana's birthday party — view and download the memories!",
  // Keep this personal page out of search engines.
  robots: {
    index: false,
    follow: false,
  },
};

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif', '.heic', '.heif'];
const VIDEO_EXTENSIONS = ['.mp4', '.mov', '.webm', '.m4v', '.ogg'];

/**
 * Reads the media folder at build time. Colin adds photos/videos by committing
 * files to `public/lanas-birthday/media/` — each git push triggers a Vercel
 * rebuild and the new files show up here automatically.
 */
function getMediaItems(): MediaItem[] {
  const mediaDir = path.join(process.cwd(), 'public', 'lanas-birthday', 'media');

  let files: string[] = [];
  try {
    files = fs.readdirSync(mediaDir);
  } catch {
    // Folder doesn't exist yet — return an empty gallery.
    return [];
  }

  return files
    .filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return IMAGE_EXTENSIONS.includes(ext) || VIDEO_EXTENSIONS.includes(ext);
    })
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
    .map((file) => {
      const ext = path.extname(file).toLowerCase();
      return {
        name: file,
        src: `/lanas-birthday/media/${encodeURIComponent(file)}`,
        type: VIDEO_EXTENSIONS.includes(ext) ? 'video' : 'image',
      };
    });
}

export default function LanasBirthdayPage() {
  const media = getMediaItems();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500" />
        <div className="relative max-w-5xl mx-auto px-6 py-16 sm:py-24 text-center text-white">
          <p className="text-2xl sm:text-3xl mb-3" aria-hidden="true">
            🎉🎂🎈
          </p>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight drop-shadow-sm">
            Lana&apos;s Birthday Party
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            All the photos and videos from the celebration — view them here and
            download your favorites, or grab them all at once.
          </p>
        </div>
      </header>

      {/* Gallery */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <Gallery media={media} />
      </main>

      <footer className="py-10 text-center text-sm text-gray-500">
        Made with 💜 by Own It Social
      </footer>
    </div>
  );
}
