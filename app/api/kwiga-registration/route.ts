import { NextResponse } from "next/server";

const kwigaToken = process.env.KWIGA_TOKEN;
const cabinetHash = process.env.CABINET_HASH;

export async function POST(request: Request) {
  const { email, offer_id } = await request.json();

  if (!kwigaToken || !cabinetHash) {
    return NextResponse.json("Not enough variables", { status: 503 });
  }
  try {
    const kwigaParams = {
      email,
      send_activation_email: true,
      offer_id,
    };
    // Process the payment (e.g., send a request to kwiga API)
    const kwigaResponse = await fetch(
      "https://api.kwiga.com/contacts/purchases",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Token: kwigaToken,
          "Cabinet-Hash": cabinetHash,
        },
        body: JSON.stringify(kwigaParams),
      }
    );

    const responseData = await kwigaResponse.json();
    if (!kwigaResponse.ok) {
      return NextResponse.json(responseData, { status: 400 });
    }
    return NextResponse.json(responseData, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
