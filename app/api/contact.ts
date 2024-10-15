import type { NextApiRequest, NextApiResponse } from 'next';
import sendgrid from '@sendgrid/mail';


sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, subject, message }: ContactForm = req.body;

    try {
      await sendgrid.send({
        to: 'hello@baseweight.ai', // Replace with your email address
        from: 'your-sendgrid-verified-email@example.com', // Must match the verified sender from SendGrid
        subject: `[Contact Form Submission] ${subject}`,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });

      return res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: 'Email could not be sent' });
    }

    // Respond with success
    return res.status(200).json({ success: true });
  }

  // Respond with method not allowed if not a POST request
  return res.status(405).json({ message: 'Method not allowed' });
}
