import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and phone are required' },
        { status: 400 }
      );
    }

    const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
    const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
    const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER;
    const RECIPIENT_PHONE_NUMBER = '+19045098762';

    if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN || !TWILIO_PHONE_NUMBER) {
      console.error('Twilio credentials not configured');
      return NextResponse.json({ success: true });
    }

    const message = `🏠 New Reverse Mortgage Lead!\n\nName: ${name}\nPhone: ${phone}`;

    const twilioResponse = await fetch(
      `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`,
      {
        method: 'POST',
        headers: {
          'Authorization': 'Basic ' + Buffer.from(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`).toString('base64'),
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          To: RECIPIENT_PHONE_NUMBER,
          From: TWILIO_PHONE_NUMBER,
          Body: message,
        }).toString(),
      }
    );

    const responseText = await twilioResponse.text();

    if (!twilioResponse.ok) {
      console.error('Twilio API error:', twilioResponse.status, responseText);
    } else {
      console.log('Reverse mortgage lead SMS sent successfully');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Reverse mortgage lead form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}
