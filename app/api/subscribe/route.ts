import { NextRequest, NextResponse } from 'next/server';
import axios from "axios";

export async function POST(req: NextRequest) {
    const body = await req.json();

	var res = NextResponse.next();
	
	axios
     .put(
       "https://api.sendgrid.com/v3/marketing/contacts",
       {
         contacts: [{ email: `${body.mail}` }],
         list_ids: [process.env.SENDGRID_MAILING_ID],
       },
       {
         headers: {
           "content-type": "application/json",
           Authorization: `Bearer ${process.env.SENDGRID_SECRET}`,
         },
       }
     )
     .then((result) => {
		res = NextResponse.json({status: 200});
     })
     .catch((err) => {
		res = NextResponse.json({status: 500, error: ""})
     });

	 return res;

}