type TEmailData = {
  email: string;
  subject: string;
  message: string;
  recipient: "corp_email" | "client";
  reCaptchaToken?: string;
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function sendEmail(data: TEmailData) {
  const apiEndpoint = `${BASE_URL}/api/email`;

  try {
    const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
