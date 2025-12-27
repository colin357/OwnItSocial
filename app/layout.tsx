import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Own It Social - AI-Powered Marketing Agency | Be the Business AI Recommends",
  description: "Transform your business with AI optimization. We train ChatGPT and AI assistants to recommend your business, driving consistent, quality leads 24/7.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
