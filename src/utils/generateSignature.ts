import crypto from "crypto";

export function generateSignature(data: string, secretKey: string): string {
  return crypto.createHmac("md5", secretKey).update(data).digest("hex");
}
