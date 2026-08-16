import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'fairway-green': '#129e4b',

        // ── Homepage design system ──
        // Navy is the ONLY accent: CTAs, the "Your new CMO" block, icon strokes.
        navy: '#0C2E4E',
        ink: '#1A1A1A',
        muted: '#6B6B66',
        sand: '#F5F4F0',
        line: '#E5E3DC',
      },
      fontFamily: {
        // Loaded in app/layout.tsx via next/font (400 + 500 only).
        inter: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        // Reserved for the product frame, so it reads as the one object on the
        // page with real depth.
        portal: '0 32px 80px -28px rgba(12,46,78,0.30), 0 4px 16px rgba(12,46,78,0.05)',
        // Cards lift slightly on hover; nothing else casts a shadow at rest.
        lift: '0 18px 40px -22px rgba(12,46,78,0.28)',
      },
    },
  },
  plugins: [],
} satisfies Config;
