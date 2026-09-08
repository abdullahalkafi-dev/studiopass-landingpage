import { NextResponse } from "next/server";

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
        { error: "Missing required application fields" },
        { status: 400 }
      );
    }

    console.log("=========================================");
    console.log("📥 NEW STUDIOPASS PARTNER APPLICATION:");
    console.log(`Name/Company: ${name}`);
    console.log(`Partner Type: ${partnerType}`);
    console.log(`Country: ${country}`);
    console.log(`Phone: ${phone}`);
    console.log(`Email: ${email}`);
    console.log(`Website/Social: ${websiteOrSocial || "N/A"}`);
    console.log(`Short Description: ${shortDescription || "N/A"}`);
    console.log(`Message: ${message || "N/A"}`);
    console.log(`Timestamp: ${new Date().toISOString()}`);
    console.log("=========================================");

    // In a live environment with SMTP configured, send mail here.
    // For standalone marketing, return confirmation immediately.
    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for your interest in StudioPass. Our team will review your application and contact you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Onboarding submission error:", error);
    return NextResponse.json(
      { error: "Internal server error processing application" },
      { status: 500 }
    );
  }
}
