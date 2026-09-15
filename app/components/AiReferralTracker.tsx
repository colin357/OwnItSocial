'use client';

import { useEffect } from 'react';
import { track } from '@vercel/analytics';

// ---------------------------------------------------------------------------
// Notices when a visit came from an AI assistant and remembers it for the
// session, so the booking modal and lead forms can label the lead.
//
// Referrers from these apps are often stripped, so this catches only some of
// the traffic. The self-reported "How did you hear about us?" field on the
// forms is the reliable half of the picture; this is the free half.
// ---------------------------------------------------------------------------

export const AI_SOURCE_KEY = 'ois_ai_source';

const AI_REFERRERS: Array<[RegExp, string]> = [
  [/chatgpt\.com|chat\.openai\.com|openai\.com/i, 'ChatGPT'],
  [/claude\.ai|anthropic\.com/i, 'Claude'],
  [/perplexity\.ai/i, 'Perplexity'],
  [/gemini\.google\.com|bard\.google\.com/i, 'Gemini'],
  [/copilot\.microsoft\.com|bing\.com\/chat/i, 'Copilot'],
  [/you\.com/i, 'You.com'],
  [/meta\.ai/i, 'Meta AI'],
  [/grok\.com|x\.ai/i, 'Grok'],
];

function detect(): string | null {
  try {
    const params = new URLSearchParams(window.location.search);
    // ChatGPT and others sometimes append utm_source=chatgpt.com.
    const utm = params.get('utm_source') || params.get('ref') || '';
    for (const [re, name] of AI_REFERRERS) {
      if (re.test(utm)) return name;
    }
    const ref = document.referrer || '';
    for (const [re, name] of AI_REFERRERS) {
      if (re.test(ref)) return name;
    }
  } catch {
    // Referrer or URL parsing failed; treat as unknown.
  }
  return null;
}

/** The AI source remembered for this session, or null. Safe on the server. */
export function getAiSource(): string | null {
  if (typeof window === 'undefined') return null;
  try {
    return window.sessionStorage.getItem(AI_SOURCE_KEY);
  } catch {
    return null;
  }
}

export default function AiReferralTracker() {
  useEffect(() => {
    if (getAiSource()) return; // already recorded this session
    const source = detect();
    if (!source) return;
    try {
      window.sessionStorage.setItem(AI_SOURCE_KEY, source);
    } catch {
      // Storage blocked; the event below still fires.
    }
    track('ai_referral', { source, path: window.location.pathname });
  }, []);

  return null;
}
