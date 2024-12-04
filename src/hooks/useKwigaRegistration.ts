import { useState } from "react";

interface KwigaRegistrationResult {
  success: boolean;
  data?: any;
  error?: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const useKwigaRegistration = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const apiEndpoint = `${BASE_URL}/api/kwiga-registration`;

  const sendKwigaResponse = async (
    email: string,
    offerId: number
  ): Promise<KwigaRegistrationResult> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          offer_id: offerId,
        }),
      });

      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message || "Kwiga API Error");
      }

      return {
        success: true,
        data: responseData,
      };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      setError(error as Error);

      return {
        success: false,
        error: errorMessage,
      };
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, sendKwigaResponse };
};
