'use client';

import Script from 'next/script';

export default function ChatbotPage() {
  return (
    <>
      <Script src="/chatbot.js" strategy="afterInteractive" />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#1a3a6b] to-slate-900 flex flex-col items-center justify-center px-4 py-16">
        <div className="text-center max-w-xl">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 border border-white/20 text-4xl mb-4">
              🏡
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Find Your VA Home Loan in 2 Minutes
          </h1>
          <p className="text-lg text-blue-100 mb-8">
            Chat with Kris Heichel, VA Home Loan Specialist, to see what you qualify for — no credit pull, no commitment.
          </p>

          <button
            onClick={() => {
              const toggle = document.getElementById('kh-chat-toggle') as HTMLButtonElement | null;
              if (toggle) toggle.click();
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1a3a6b] font-bold text-lg rounded-full shadow-xl hover:scale-105 transition-transform duration-200"
          >
            💬 Start the Chat
          </button>

          <p className="mt-6 text-sm text-blue-200 opacity-70">
            The chat widget is in the bottom-right corner of this page.
          </p>
        </div>
      </div>
    </>
  );
}
