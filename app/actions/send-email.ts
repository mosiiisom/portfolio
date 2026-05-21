"use server";

import { Resend } from "resend";
import { siteConfig } from "@/config/site";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;
  const senderEmail = siteConfig.senderEmail;
  const replayEmail = siteConfig.replayEmail;

  if (!name || !email || !message) {
    return { error: "Please fill out all fields." };
  }

  try {
    const data = await resend.emails.send({
      from: `Portfolio <${senderEmail}>`,
      to: siteConfig.email,
      subject: `New message from ${name} on your portfolio`,
      replyTo: replayEmail,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (data.error) {
      return { error: data.error.message };
    }

    return { success: true };
  } catch (error: unknown) {
    return { error: error instanceof Error ? error.message : "An error occurred while sending the email." };
  }
}
