import { NextResponse } from "next/server";

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

    console.log("=========================================");
    console.log("📨 NEW CONTACT INQUIRY RECEIVED:");
    console.log(`From: ${name} (${email})`);
    console.log(`Country: ${country || "Not specified"}`);
    console.log(`Subject: ${subject || "General Inquiry"}`);
    console.log(`Message: ${message}`);
    console.log(`Timestamp: ${new Date().toISOString()}`);
    console.log("=========================================");

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been sent. We will get back to you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
