import * as Sentry from '@sentry/nextjs';
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer, { SentMessageInfo } from 'nodemailer';

const contactHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { firstName, lastName, company, email, subject, message } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const ticketNumber =
    Math.random().toString(36).substring(2, 4).toUpperCase() +
    Math.random().toString().substring(2, 12);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
		user: 'sumeetvishwakarma31@gmail.com',
		pass: 'rgzv evtw denl stuv'
	}
  });

  try {
    const info = await transporter.sendMail({
      from: `${firstName} ${lastName}${company ? `(${company})` : ''} <your@gmail.com>`,
      to: 'vishwakarmasumeet01@gmail.com', // Replace with the recipient's email
      replyTo: email,
      subject: `Website Contact: ${subject} (Ticket ${ticketNumber})`,
      text: message,
      html: `<div><p>${message}</p></div>`,
    });

    Sentry.captureEvent({
      message: `Contact Form Submitted`,
      tags: { ticketNumber },
      level: 'info',
    });

    return res.status(200).json({ status: 'success' });
  } catch (error) {
    Sentry.captureException(error);
    console.log(error);
    return res.status(500).json({ error: 'Something went wrong' });
  }
};

export default contactHandler;
