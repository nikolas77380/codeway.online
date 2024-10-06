import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

const CORP_EMAIL_RECIPIENT = "info@codeway.online";
const CORP_EMAIL = process.env.CORP_EMAIL;
const PASSWORD = process.env.APP_PASSWORD;
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY;

export async function POST(request: NextRequest) {
  try {
    const { email, subject, message, recipient, reCaptchaToken } =
      await request.json();

    const recaptchaResponse = await fetch(
      `https://recaptchaenterprise.googleapis.com/v1/projects/codeway-project-1727197908685/assessments?key=${GOOGLE_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          event: {
            token: reCaptchaToken,
            expectedAction: "LOGIN",
            siteKey: SITE_KEY,
          },
        }),
      }
    );

    const recaptchaResult = await recaptchaResponse.json();
    if (!recaptchaResponse.ok || recaptchaResult.riskAnalysis.score < 0.5) {
      return NextResponse.json({ message: "info" });
    }

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: CORP_EMAIL,
        pass: PASSWORD,
      },
    });

    const mailOptions: Mail.Options = {
      from: CORP_EMAIL,
      to: recipient == "client" ? email : CORP_EMAIL_RECIPIENT,
      // cc: email, (uncomment this line if you want to send a copy to the sender)
      subject: subject,
      text: message,
    };

    const sendMailPromise = () =>
      new Promise<string>((resolve, reject) => {
        transport.sendMail(mailOptions, function (err) {
          if (!err) {
            resolve("success");
          } else {
            reject(err.message);
          }
        });
      });

    await sendMailPromise();
    return NextResponse.json({ message: "success" });
  } catch (err) {
    return NextResponse.json({ message: "success" }, { status: 500 });
  }
}
