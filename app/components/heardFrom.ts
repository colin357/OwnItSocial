// Options for the optional "How did you hear about us?" question on the lead
// forms. AI assistants strip the referrer most of the time, so this self-report
// is the reliable way to know a lead came from ChatGPT, Claude, or Perplexity.
export const HEARD_FROM_OPTIONS = [
  'AI assistant (ChatGPT, Claude, Perplexity, Gemini)',
  'Google search',
  'Referral from a colleague or agent',
  'Social media',
  'An event or conference',
  'Other',
] as const;
