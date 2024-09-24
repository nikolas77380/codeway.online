import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

const CORP_EMAIL = process.env.CORP_EMAIL;
const PASSWORD = process.env.APP_PASSWORD;

export async function POST(request: NextRequest) {
  const { email, subject, message, recipient } = await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",

    auth: {
      user: CORP_EMAIL,
      pass: PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: CORP_EMAIL,
    to: recipient == "client" ? email : "info@codeway.online",
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: subject,
    text: message,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
