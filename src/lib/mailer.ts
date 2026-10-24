import nodemailer from "nodemailer";

const host = process.env.SMTP_HOST || "smtp.gmail.com";
const port = Number(process.env.SMTP_PORT || 465);
const secure = process.env.SMTP_SECURE !== "false" && port === 465;
const user = process.env.SMTP_USER || "uggotech@gmail.com";
const pass = process.env.SMTP_PASS?.replace(/\s+/g, ""); // strip any spaces from app password
const receiver = process.env.NOTIFICATION_RECEIVER_EMAIL || "uggotech@gmail.com";

export const transporter = nodemailer.createTransport({
  host,
  port,
  secure,
  auth: {
    user,
    pass,
  },
});

export interface SendMailOptions {
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
}

export async function sendNotificationEmail({
  subject,
  html,
  text,
  replyTo,
}: SendMailOptions) {
  if (!user || !pass) {
    throw new Error("SMTP credentials are not configured in environment variables.");
  }

  const info = await transporter.sendMail({
    from: `"StudioPass Notifications" <${user}>`,
    to: receiver,
    replyTo: replyTo || user,
    subject,
    html,
    text: text || html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim(),
  });

  return info;
}
