import { NextResponse } from 'next/server';
import {
  CONSENT_VERSION,
  EMAIL_CONSENT,
  SMS_CONSENT,
} from '@/app/keepplaying/consent';

// ---------------------------------------------------------------------------
// Lead capture for /keepplaying.
//
// Same delivery path as the other forms on the site: a Twilio SMS to Colin.
// There is no database in this project, so that SMS plus the server log below
// ARE the record — including the consent record, which is why both opt-ins,
// the wording they agreed to, the timestamp, and the requesting IP are written
// out rather than just a "true".
//
// NOTE FOR COLIN: if you start running real volume here, pipe this into GHL
// (or wherever the list lives) instead of relying on the SMS — a text is not a
// durable consent record if you are ever asked to produce one.
// ---------------------------------------------------------------------------

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, smsOptIn, emailOptIn } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required' },
        { status: 400 },
      );
    }

    // The checkboxes are enforced in the browser too; this is the copy that
    // matters, since a form post can arrive without ever touching the UI.
    if (smsOptIn !== true || emailOptIn !== true) {
      return NextResponse.json(
        { error: 'Both the SMS and email opt-ins are required' },
        { status: 400 },
      );
    }

    const submittedAt = new Date().toISOString();
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      request.headers.get('x-real-ip') ||
      'unknown';

    // Consent record. Written to the server log so it is greppable in Vercel
    // even when the SMS below fails or is not configured.
    console.log(
      'keep-playing lead consent',
      JSON.stringify({
        submittedAt,
        ip,
        name,
        email,
        phone,
        consentVersion: CONSENT_VERSION,
        smsOptIn: true,
        smsConsentText: SMS_CONSENT,
        emailOptIn: true,
        emailConsentText: EMAIL_CONSENT,
        source: '/keepplaying',
      }),
    );

    const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
    const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
    const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER;
    const RECIPIENT_PHONE_NUMBER = process.env.RECIPIENT_PHONE_NUMBER;

    if (
      !TWILIO_ACCOUNT_SID ||
      !TWILIO_AUTH_TOKEN ||
      !TWILIO_PHONE_NUMBER ||
      !RECIPIENT_PHONE_NUMBER
    ) {
      // The lead is already in the log above, so the visitor still gets a
      // confirmation rather than an error caused by missing server config.
      console.error('Twilio credentials not configured — lead logged only');
      return NextResponse.json({ success: true });
    }

    const message =
      `🏌️ Keep Playing lead\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      `Opt-in: SMS + email (v${CONSENT_VERSION})\n` +
      `Time: ${submittedAt}`;

    const twilioResponse = await fetch(
      `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`,
      {
        method: 'POST',
        headers: {
          Authorization:
            'Basic ' +
            Buffer.from(
              `${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`,
            ).toString('base64'),
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          To: RECIPIENT_PHONE_NUMBER,
          From: TWILIO_PHONE_NUMBER,
          Body: message,
        }).toString(),
      },
    );

    if (!twilioResponse.ok) {
      console.error(
        'Twilio API error:',
        twilioResponse.status,
        await twilioResponse.text(),
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Keep Playing lead form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 },
    );
  }
}
