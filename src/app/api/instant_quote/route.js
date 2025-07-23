// app/api/instant_quote/route.js

import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      pickupAddress,
      pickupCity,
      pickupState,
      pickupPincode,
      destinationAddress,
      destinationCity,
      destinationState,
      destinationPincode,
      weight,
      length,
      width,
      height,
      packageType,
      speed,
      email,
      phone,
      estimatedPrice,
    } = body;

    const transporter = nodemailer.createTransport({
      host: "jambulogix.icewarpcloud.in",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const date = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "long",
      timeStyle: "short",
    });

    await transporter.sendMail({
      from: `"Jambulogix Instant Quote" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      subject: "🚚 New Instant Quote Request",
      html: `
  <div style="font-family: 'Segoe UI', sans-serif; background-color: #f5f5f5; padding: 30px;">
    <div style="max-width: 600px; margin: auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
      <div style="background-color: #FF7F06; padding: 20px; text-align: center;">
        <img src="https://yourdomain.com/logo.png" alt="Jambulogix" style="max-width: 150px; margin-bottom: 10px;" />
        <h2 style="color: white; margin: 0;">Instant Quote Request</h2>
      </div>

      <div style="padding: 20px; color: #333;">
        <h3 style="color: #FF7F06;">📍 Pickup Details</h3>
        <p><strong>Address:</strong> ${pickupAddress}</p>
        <p><strong>City:</strong> ${pickupCity}</p>
        <p><strong>State:</strong> ${pickupState}</p>
        <p><strong>Pincode:</strong> ${pickupPincode}</p>

        <h3 style="color: #FF7F06;">📦 Destination Details</h3>
        <p><strong>Address:</strong> ${destinationAddress}</p>
        <p><strong>City:</strong> ${destinationCity}</p>
        <p><strong>State:</strong> ${destinationState}</p>
        <p><strong>Pincode:</strong> ${destinationPincode}</p>

        <h3 style="color: #FF7F06;">📬 Package Info</h3>
        <p><strong>Weight:</strong> ${weight} kg</p>
        <p><strong>Dimensions:</strong> ${length} x ${width} x ${height} cm</p>
        <p><strong>Type:</strong> ${packageType}</p>
        <p><strong>Speed:</strong> ${speed}</p>
        <p><strong>Estimated Price:</strong> ₹${estimatedPrice}</p>

        <h3 style="color: #FF7F06;">📞 Contact Info</h3>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || "Not provided"}</p>

        <div style="margin-top: 30px; text-align: center;">
          <a href="mailto:${email}" style="background-color: #FF7F06; color: white; padding: 12px 24px; border-radius: 5px; text-decoration: none; font-weight: bold;">
            📩 Reply to Customer
          </a>
        </div>

        <p style="font-size: 12px; color: gray; margin-top: 20px;">Received on ${date}</p>
      </div>
    </div>
  </div>
`,
    });

    return new Response(JSON.stringify({ message: "Quote sent!" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Instant Quote Error:", error);
    return new Response(JSON.stringify({ message: "Email failed" }), {
      status: 500,
    });
  }
}

export async function GET() {
  return new Response("OK", { status: 200 });
}
