import { NextResponse } from "next/server";
import { sendNotificationEmail } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, country, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
        <div style="background: linear-gradient(135deg, #1e60f2 0%, #1545b5 100%); padding: 24px 32px; color: #ffffff;">
          <h1 style="margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.02em;">New Contact Inquiry</h1>
          <p style="margin: 4px 0 0 0; font-size: 13px; color: #bfdbfe;">StudioPass Landing Page Submission</p>
        </div>
        <div style="padding: 32px;">
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px; width: 120px; font-weight: 600;">From:</td>
              <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600;">Email:</td>
              <td style="padding: 8px 0; color: #1e60f2; font-size: 14px;"><a href="mailto:${email}" style="color: #1e60f2; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600;">Country:</td>
              <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${country || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600;">Subject / Topic:</td>
              <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${subject || "General Inquiry"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600;">Submitted At:</td>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px;">${new Date().toLocaleString()}</td>
            </tr>
          </table>

          <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="margin: 0 0 8px 0; color: #64748b; font-size: 13px; font-weight: 600;">Message:</p>
            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; font-size: 14px; line-height: 1.6; color: #1e293b; white-space: pre-wrap;">${message}</div>
          </div>

          <div style="margin-top: 32px; padding: 12px 16px; background-color: #eff6ff; border-radius: 8px; font-size: 12px; color: #1e40af;">
            💡 <strong>Quick Reply:</strong> You can hit "Reply" in your email client to directly reply to <strong>${email}</strong>.
          </div>
        </div>
      </div>
    `;

    await sendNotificationEmail({
      subject: `[StudioPass Contact] ${subject || "Inquiry"} from ${name}`,
      html: emailHtml,
      replyTo: email,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been sent. We will get back to you shortly.",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Contact submission error:", error);
    return NextResponse.json(
      {
        error: error?.message || "Failed to deliver contact inquiry. Please try again later.",
      },
      { status: 500 }
    );
  }
}
