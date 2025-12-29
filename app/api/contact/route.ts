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
    const GHL_API_KEY = process.env.GHL_API_KEY;
    const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;

    if (!GHL_API_KEY || !GHL_LOCATION_ID) {
      console.error('GHL credentials not configured');
      console.error('GHL_API_KEY exists:', !!GHL_API_KEY);
      console.error('GHL_LOCATION_ID exists:', !!GHL_LOCATION_ID);
      // Still return success to user, but log the error
      return NextResponse.json({ success: true });
    }

    // Split name into first and last
    const nameParts = name.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    // Prepare payload for GHL API
    const ghlPayload = {
      firstName,
      lastName,
      email,
      phone,
      companyName: company,
      locationId: GHL_LOCATION_ID,
      source: 'Website Contact Form',
      tags: ['website-lead'],
    };

    console.log('Sending to GHL:', {
      endpoint: 'https://rest.gohighlevel.com/v1/contacts/',
      hasApiKey: !!GHL_API_KEY,
      locationId: GHL_LOCATION_ID,
      payload: { ...ghlPayload, email: '***', phone: '***' } // Log sanitized version
    });

    // Create contact in Go High Level
    const ghlResponse = await fetch(
      `https://rest.gohighlevel.com/v1/contacts/`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${GHL_API_KEY}`,
          'Content-Type': 'application/json',
          'Version': '2021-07-28', // GHL API version header
        },
        body: JSON.stringify(ghlPayload),
      }
    );

    const responseText = await ghlResponse.text();

    if (!ghlResponse.ok) {
      console.error('GHL API error response:', {
        status: ghlResponse.status,
        statusText: ghlResponse.statusText,
        body: responseText,
        headers: Object.fromEntries(ghlResponse.headers.entries())
      });

      // Try to parse error message
      try {
        const errorData = JSON.parse(responseText);
        console.error('GHL error details:', errorData);
      } catch (e) {
        console.error('Could not parse GHL error response');
      }
    } else {
      console.log('GHL API success:', {
        status: ghlResponse.status,
        response: responseText
      });
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
