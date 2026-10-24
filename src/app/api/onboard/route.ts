import { NextResponse } from "next/server";
import { sendNotificationEmail } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      partnerType,
      country,
      phone,
      email,
      websiteOrSocial,
      shortDescription,
      message,
    } = body;

    // Basic validation
    if (!name || !country || !phone || !email) {
      return NextResponse.json(
        { error: "Missing required application fields (name, country, phone, email)" },
        { status: 400 }
      );
    }

    const emailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
        <div style="background: linear-gradient(135deg, #1e60f2 0%, #1545b5 100%); padding: 24px 32px; color: #ffffff;">
          <h1 style="margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.02em;">New Partner Application</h1>
          <p style="margin: 4px 0 0 0; font-size: 13px; color: #bfdbfe;">StudioPass Station / Partner Onboarding</p>
        </div>
        <div style="padding: 32px;">
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px; width: 140px; font-weight: 600;">Station / Company:</td>
              <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600;">Partner Type:</td>
              <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${partnerType || "Radio Station"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600;">Country / Region:</td>
              <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${country}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600;">Email:</td>
              <td style="padding: 8px 0; color: #1e60f2; font-size: 14px;"><a href="mailto:${email}" style="color: #1e60f2; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600;">Phone / WhatsApp:</td>
              <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600;">Website / Stream:</td>
              <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${websiteOrSocial || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px; font-weight: 600;">Submitted At:</td>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px;">${new Date().toLocaleString()}</td>
            </tr>
          </table>

          ${
            shortDescription
              ? `
          <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #e2e8f0;">
            <p style="margin: 0 0 6px 0; color: #64748b; font-size: 13px; font-weight: 600;">Short Description:</p>
            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px; font-size: 13px; color: #334155;">${shortDescription}</div>
          </div>
          `
              : ""
          }

          ${
            message
              ? `
          <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #e2e8f0;">
            <p style="margin: 0 0 6px 0; color: #64748b; font-size: 13px; font-weight: 600;">Additional Notes / Message:</p>
            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 12px; font-size: 13px; color: #334155; white-space: pre-wrap;">${message}</div>
          </div>
          `
              : ""
          }

          <div style="margin-top: 32px; padding: 12px 16px; background-color: #eff6ff; border-radius: 8px; font-size: 12px; color: #1e40af;">
            💡 <strong>Quick Reply:</strong> Hitting "Reply" in your email client will reply directly to <strong>${email}</strong>.
          </div>
        </div>
      </div>
    `;

    await sendNotificationEmail({
      subject: `[StudioPass Onboarding] Partner Application from ${name} (${country})`,
      html: emailHtml,
      replyTo: email,
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for your interest in StudioPass! Our team has received your application and will review it shortly.",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Onboarding submission error:", error);
    return NextResponse.json(
      {
        error: error?.message || "Internal server error processing application. Please try again.",
      },
      { status: 500 }
    );
  }
}
