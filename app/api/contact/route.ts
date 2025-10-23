import { NextRequest, NextResponse } from 'next/server';
const sendgrid =  require('@sendgrid/mail');


sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { name, email, subject, message }: ContactForm = body;

    // Check if API key is configured
    if (!process.env.SENDGRID_API_KEY) {
      return NextResponse.json({ error: 'SendGrid API key not configured' }, { status: 500 });
    }

    try {
      await sendgrid.send({
        to: 'info@baseweight.ai', // Replace with your email address
        from: 'info@baseweight.ai', // Must match the verified sender from SendGrid
        subject: `[Contact Form Submission] ${subject}`,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });

      return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error: any) {
      console.error('SendGrid Error:', error);
      if (error.response) {
        console.error('SendGrid Response:', error.response.body);
      }

      // Return more specific error for debugging
      const errorMessage = error.response?.body?.errors?.[0]?.message || error.message || 'Email could not be sent';
      return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}
