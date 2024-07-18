"use server";

import mailgun from "mailgun-js";

interface Email {
  to: string;
  from: string;
  subject: string;
  message: string;
}

const mailgunClient = mailgun({
  apiKey: process.env.MAILGUN_API_KEY || "",
  domain: process.env.MAILGUN_DOMAIN || "",
});

const sendEmail = async ({ to, from, subject, message }: Email) => {
  const emailData = {
    from,
    to,
    subject,
    text: message,
  };

  try {
    const result = await mailgunClient.messages().send(emailData);
    return result;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

export { sendEmail };
