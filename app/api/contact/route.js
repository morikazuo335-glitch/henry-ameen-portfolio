import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, projectType, budget, message } = await request.json();

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "Please complete your name, email and message." }, { status: 400 });
    }
    if (name.length > 120 || email.length > 254 || message.length > 5000) {
      return NextResponse.json({ error: "One or more fields are too long." }, { status: 400 });
    }

    const { GMAIL_USER, GMAIL_APP_PASSWORD } = process.env;
    if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
      return NextResponse.json({ error: "The contact inbox is not configured yet. Please try again later." }, { status: 503 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD }
    });

    await transporter.sendMail({
      from: `Portfolio Contact <${GMAIL_USER}>`,
      to: "henrycharlesab@gmail.com",
      replyTo: email,
      subject: `Portfolio enquiry: ${projectType || "New project"}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Project type: ${projectType || "Not specified"}`,
        `Budget: ${budget || "Not specified"}`,
        "",
        "Message:",
        message
      ].join("\n")
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form delivery failed:", error);
    return NextResponse.json({ error: "We couldn't send your message. Please try again shortly." }, { status: 500 });
  }
}
