// import { EmailTemplate } from '../../../components/EmailTemplate';

import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.From_Email;

export async function POST(req,res) {
  const {body} =req;
  const {email,subject,message}=body;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
  try {
    const data = await resend.emails.send({
      from: "fromEmail",
      to: ["daniyajosekachapally@gmail.com",email],
      subject: "Subject",
      react: (
        <>
        <h1>{subject}</h1>
        <p>Thankyou for contacting us!</p>
        <p>New message  submitted:</p>
          <p>{message}</p>
        </>
      ),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
