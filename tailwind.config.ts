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
        // Editorial agency look: near-black type on white, one saturated purple
        // doing every piece of accent work (banner, buttons, hovers).
        brand: {
          DEFAULT: '#8B3DFF',
          dark: '#6C1FE8',   // hover / pressed
          light: '#B487FF',  // on-dark secondary text
        },
        ink: '#0A0A0A',
        muted: '#5B5B5B',
        sand: '#F4F3F1',
        line: '#E4E3E0',

        // Retained so the older campaign pages that reference it keep working.
        navy: '#0C2E4E',
      },
      fontFamily: {
        // Body copy. Loaded in app/layout.tsx via next/font (400/500/600/700).
        montserrat: ['var(--font-montserrat)', 'system-ui', '-apple-system', 'sans-serif'],
        // Display face for the oversized uppercase headlines (700/800/900).
        display: ['var(--font-archivo)', 'var(--font-montserrat)', 'Impact', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        // Reserved for the product frame, so it reads as the one object on the
        // page with real depth.
        portal: '0 32px 80px -28px rgba(10,10,10,0.35), 0 4px 16px rgba(10,10,10,0.06)',
        lift: '0 18px 40px -22px rgba(10,10,10,0.30)',
      },
    },
  },
  plugins: [],
} satisfies Config;
