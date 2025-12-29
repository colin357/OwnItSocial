import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, phone, email } = body;

    // Validate required fields
    if (!name || !company || !phone || !email) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Twilio SMS integration
    const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
    const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
    const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER;
    const RECIPIENT_PHONE_NUMBER = process.env.RECIPIENT_PHONE_NUMBER;

    if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN || !TWILIO_PHONE_NUMBER || !RECIPIENT_PHONE_NUMBER) {
      console.error('Twilio credentials not configured');
      console.error('Missing credentials:', {
        hasSID: !!TWILIO_ACCOUNT_SID,
        hasToken: !!TWILIO_AUTH_TOKEN,
        hasFromNumber: !!TWILIO_PHONE_NUMBER,
        hasToNumber: !!RECIPIENT_PHONE_NUMBER
      });
      // Still return success to user, but log the error
      return NextResponse.json({ success: true });
    }

    // Create SMS message with lead info
    const message = `🚀 New Lead from OwnItSocial.com!\n\nName: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone}`;

    console.log('Sending SMS via Twilio...');

    // Send SMS using Twilio API
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
      console.error('Twilio API error response:', {
        status: twilioResponse.status,
        statusText: twilioResponse.statusText,
        body: responseText,
      });

      // Try to parse error message
      try {
        const errorData = JSON.parse(responseText);
        console.error('Twilio error details:', errorData);
      } catch (e) {
        console.error('Could not parse Twilio error response');
      }
    } else {
      console.log('SMS sent successfully!');
      try {
        const successData = JSON.parse(responseText);
        console.log('Twilio response:', {
          sid: successData.sid,
          status: successData.status
        });
      } catch (e) {
        console.log('Twilio raw response:', responseText);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    if (error instanceof Error) {
      console.error('Error details:', {
        message: error.message,
        stack: error.stack
      });
    }
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}
