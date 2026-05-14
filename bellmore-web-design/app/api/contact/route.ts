import { NextRequest, NextResponse } from 'next/server';
import { validateContactForm, type ContactFormData } from '@/lib/validation';
import { sendContactEmail } from '@/lib/email';
import { checkRateLimit } from '@/lib/rateLimit';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as ContactFormData;

    // Honeypot check - if filled, silently accept but don't send
    if (body.companyWebsite && body.companyWebsite.trim().length > 0) {
      return NextResponse.json(
        { success: true, message: 'Message sent successfully' },
        { status: 200 }
      );
    }

    // Validate input
    const validation = validateContactForm(body);
    if (!validation.isValid) {
      return NextResponse.json(
        { success: false, message: validation.errors.join(', ') },
        { status: 400 }
      );
    }

    // Rate limiting by IP
    const ip = request.headers.get('x-forwarded-for') || 
                request.headers.get('x-real-ip') || 
                'unknown';
    const rateLimit = checkRateLimit(ip);
    
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { 
          success: false, 
          message: `Too many submissions. Please try again in ${rateLimit.retryAfter} seconds.` 
        },
        { status: 429 }
      );
    }

    // Send email
    const userAgent = request.headers.get('user-agent') || undefined;
    const result = await sendContactEmail(body, { ip, userAgent });

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: result.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: result.message },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { success: false, message: 'Method not allowed' },
    { status: 405 }
  );
}
