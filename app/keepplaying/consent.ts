// ---------------------------------------------------------------------------
// The exact opt-in language shown on the /keepplaying form.
//
// It lives here, on its own, because two places have to agree on it: the
// checkboxes the visitor ticks, and the consent record the API route writes.
// If you reword a line, bump CONSENT_VERSION — that way an old record still
// says which wording it was captured under.
//
// NOTE FOR COLIN: this is written to the usual carrier requirements for
// marketing SMS (identify the sender, say rates may apply, say frequency
// varies, give the STOP keyword). Have your carrier or counsel confirm it
// matches how you actually message before you run traffic to the page.
// ---------------------------------------------------------------------------
export const CONSENT_VERSION = '2026-08-17';

export const SMS_CONSENT =
  'I agree to receive marketing text messages from Own It Social at the number provided, including messages sent by autodialer. Consent is not a condition of any purchase. Message and data rates may apply. Message frequency varies. Reply STOP to opt out or HELP for help.';

export const EMAIL_CONSENT =
  'I agree to receive marketing emails from Own It Social. You can unsubscribe at any time using the link in any email.';
