import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return new Response(
      JSON.stringify({ error: 'Email is required' }), 
      { status: 400 }
    );
  }

  const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
  const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
  const DATACENTER = MAILCHIMP_API_KEY?.split('-')[1];

  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`;

  try {
    const response = await axios.post(url, 
      {
        email_address: email,
        status: 'subscribed'
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `apikey ${MAILCHIMP_API_KEY}`,
        },
      }
    );

    if (response.status === 200) {
      return new Response(
        JSON.stringify({ success: true, message: 'Successfully subscribed!' }), 
        { status: 200 }
      );
    }
    
    return new Response(
      JSON.stringify({ success: false, message: 'Failed to subscribe' }), 
      { status: response.status }
    );
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Mailchimp API Error:', {
        error,
        status: error.response?.status,
        data: error.response?.data,
      });
    }

    if (axios.isAxiosError(error) && error.response) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: error.response.data.detail || 'Failed to subscribe',
          error: error.response.data 
        }), 
        { status: error.response.status }
      );
    }

    const errorMessage = error instanceof Error ? error.message : 'An error occurred while subscribing';
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: 'An error occurred while subscribing', 
        error: errorMessage 
      }), 
      { status: 500 }
    );
  }
}