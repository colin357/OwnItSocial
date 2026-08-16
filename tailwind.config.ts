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
        // The one shadow in the system — portal preview card only.
        portal: '0 8px 24px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
} satisfies Config;
