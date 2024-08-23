type TEmailData = {
  email: string;
  subject: string;
  message: string;
  recipient: "corp_email" | "client";
};

const BASE_URL = process.env.BASE_URL;

export async function sendEmail(data: TEmailData) {
  const apiEndpoint = `http://localhost:3000/api/email`;

  try {
    const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to send email");
    }

    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      console.log("error here");
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
}
