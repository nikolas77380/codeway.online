import crypto from "crypto";
import { NextResponse } from "next/server";

const SECRET_KEY = process.env.SECRET_KEY;
const kwigaToken = process.env.KWIGA_TOKEN;
const cabinetHash = process.env.CABINET_HASH;

interface WayForPayRequest {
  merchantAccount: string;
  orderReference: string;
  merchantSignature: string;
  amount: number;
  currency: string;
  authCode: string;
  email: string;
  phone: string;
  createdDate: number;
  processingDate: number;
  cardPan: string;
  cardType: string;
  issuerBankCountry: string;
  issuerBankName: string;
  recToken: string;
  transactionStatus: string;
  reason: string;
  reasonCode: string;
  fee: number;
  paymentSystem: string;
}

function generateSignature(data: string, secretKey: string): string {
  return crypto.createHmac("md5", secretKey).update(data).digest("hex");
}

export async function POST(request: Request) {
  const url = new URL(request.url);
  const offer_id = url.searchParams.get("offer_id");

  const body: WayForPayRequest = await request.json();
  const email = body.email;
  // Create a string for HMAC_MD5 generation
  const stringToSign = [
    body.merchantAccount,
    body.orderReference,
    body.amount,
    body.currency,
    body.authCode,
    body.cardPan,
    body.transactionStatus,
    body.reasonCode,
  ].join(";");

  if (!SECRET_KEY || !kwigaToken || !cabinetHash) {
    throw new Error("Not enough variables");
  }

  // Generate HMAC_MD5 signature
  const generatedSignature = generateSignature(stringToSign, SECRET_KEY);

  // Check if the signature matches
  if (generatedSignature !== body.merchantSignature) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (body.transactionStatus == "Approved") {
    const kwigaParams = {
      email,
      phone: body.phone,
      send_activation_email: true,
      offer_id,
    };
    try {
      // Process the payment (e.g., send a request to kwiga API)
      const kwigaResponse = await fetch(
        "https://api.kwiga.com/contacts/purchases",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Token": kwigaToken,
            "Cabinet-Hash": cabinetHash,
          },
          body: JSON.stringify(kwigaParams),
        }
      );

      const responseText = await kwigaResponse.text();
      const responseData = JSON.parse(responseText);
      // TODO add several tries
      if (!kwigaResponse.ok) {
        throw new Error(responseData);
      }
    } catch (error) {
      const refundParams = {
        transactionType: "REFUND",
        merchantAccount: body.merchantAccount,
        orderReference: body.orderReference,
        amount: body.amount,
        currency: body.currency,
        comment: "Refund due to transaction issue",
        merchantSignature: generateSignature(
          `${body.merchantAccount};${body.orderReference};${body.amount};${body.currency}`,
          SECRET_KEY
        ),
        apiVersion: 1,
      };

      const refundResponse = await fetch("https://api.wayforpay.com/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(refundParams),
      });

      const refundResponseText = await refundResponse.text();
      console.log("Refund Response:", refundResponseText);
      if (refundResponse.ok) {
        // TODO edd email sender
      } else {
        // TODO edd email sender
      }
    }
  }

  let status = "accept";
  const time = new Date().getTime();
  const response = {
    orderReference: body.orderReference,
    status,
    time,
    signature: generateSignature(
      `${body.orderReference};${status};${time}`,
      SECRET_KEY
    ),
  };

  return NextResponse.json(response, { status: 200 });
}
