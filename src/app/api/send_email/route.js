import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, company, service, customService, message } =
      body;

    const transporter = nodemailer.createTransport({
      host: "jambulogix.icewarpcloud.in",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      subject: `New Contact Form Submission (${service})`,
      html: `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 30px; background: #FFFFFF; color: #24577F; direction: ltr;">
    <!-- Logo -->
    <div style="text-align: center; margin-bottom: 20px;">
      <img src="https://yourwebsite.com/logo.png" alt="Jambulogix Logo" style="height: 60px;" />
    </div>

    <!-- Title -->
    <h2 style="color: #FF7F06; text-align: center;">🚚 New Contact Request</h2>
    <p style="text-align: center; font-size: 14px; color: #999;">Received on ${new Date().toLocaleString(
      "en-IN",
      {
        timeZone: "Asia/Kolkata",
        dateStyle: "long",
        timeStyle: "short",
      }
    )}</p>

    <hr style="border: none; border-top: 1px solid #ddd;" />

    <!-- Details -->
    <table style="width: 100%; margin-top: 20px; border-collapse: collapse;">
      <tr>
        <td style="padding: 8px; font-weight: bold;">👤 Name:</td>
        <td style="padding: 8px;">${name}</td>
      </tr>
      <tr>
        <td style="padding: 8px; font-weight: bold;">🏢 Company:</td>
        <td style="padding: 8px;">${company}</td>
      </tr>
      <tr>
        <td style="padding: 8px; font-weight: bold;">✉️ Email:</td>
        <td style="padding: 8px;">${email}</td>
      </tr>
      <tr>
        <td style="padding: 8px; font-weight: bold;">📞 Phone:</td>
        <td style="padding: 8px;">${phone}</td>
      </tr>
      <tr>
        <td style="padding: 8px; font-weight: bold;">📦 Service:</td>
        <td style="padding: 8px;">${service}</td>
      </tr>
      ${
        service === "Other"
          ? `
        <tr>
          <td style="padding: 8px; font-weight: bold;">🛠️ Custom Service:</td>
          <td style="padding: 8px;">${customService}</td>
        </tr>`
          : ""
      }
    </table>

    <!-- Message -->
    <div style="margin-top: 30px;">
      <p style="font-weight: bold; margin-bottom: 10px;">📝 Message:</p>
      <p style="white-space: pre-wrap; line-height: 1.5; background: #F9F9F9; padding: 15px; border: 1px solid #ddd; border-radius: 4px;">
        ${message}
      </p>
    </div>

    <!-- CTA Button -->
    <div style="text-align: center; margin-top: 30px;">
      <a href="mailto:${email}" style="background-color: #FF7F06; color: #FFFFFF; padding: 12px 20px; border-radius: 6px; text-decoration: none; font-weight: bold;">
        📧 Reply to ${name}
      </a>
    </div>

    <!-- Footer -->
    <hr style="margin: 30px 0; border: none; border-top: 1px solid #ccc;" />
    <p style="font-size: 12px; text-align: center; color: #999;">
      This message was sent from the contact form on the Jambulogix website.
    </p>
  </div>
`,
    });

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Email send error:", error);
    return new Response(JSON.stringify({ message: "Failed to send email" }), {
      status: 500,
    });
  }
}

export async function GET() {
  return new Response("OK", { status: 200 });
}
