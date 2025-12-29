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

    // Go High Level API integration
    // You'll need to add your GHL API key and location ID as environment variables
    const GHL_API_KEY = process.env.GHL_API_KEY;
    const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;

    if (!GHL_API_KEY || !GHL_LOCATION_ID) {
      console.error('GHL credentials not configured');
      // Still return success to user, but log the error
      return NextResponse.json({ success: true });
    }

    // Create contact in Go High Level
    const ghlResponse = await fetch(
      `https://rest.gohighlevel.com/v1/contacts/`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${GHL_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: name.split(' ')[0],
          lastName: name.split(' ').slice(1).join(' ') || '',
          email: email,
          phone: phone,
          companyName: company,
          locationId: GHL_LOCATION_ID,
          source: 'Website Contact Form',
          tags: ['website-lead'],
        }),
      }
    );

    if (!ghlResponse.ok) {
      console.error('GHL API error:', await ghlResponse.text());
      // Still return success to user, but log the error
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}
