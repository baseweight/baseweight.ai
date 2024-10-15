import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import sendgrid from '@sendgrid/mail';


sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(req: NextApiRequest) {
    
    const { name, email, subject, message }: ContactForm = req.body;

    var res = NextResponse.next();

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

      return NextResponse.json({status: 200});
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: 'Email could not be sent' }, {status: 500});
    }

}
