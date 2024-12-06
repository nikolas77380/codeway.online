import { useEffect, useState } from "react";

const useReCaptcha = () => {
  const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY;
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [isReady, setIsReady] = useState(false);

  // Dynamically load the reCAPTCHA script
  const loadReCaptchaScript = () => {
    if (document.querySelector("#recaptcha-script")) {
      setIsScriptLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.id = "recaptcha-script";
    script.src = `https://www.google.com/recaptcha/enterprise.js?render=${SITE_KEY}`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      setIsScriptLoaded(true);
      window.grecaptcha?.enterprise.ready(() => {
        setIsReady(true);
      });
    };

    script.onerror = () => {
      console.error("Failed to load reCAPTCHA script.");
    };

    document.body.appendChild(script);
  };

  const showReCAPTCHABadge = () => {
    const badge = document.querySelector(".grecaptcha-badge") as HTMLElement;
    if (badge) {
      badge.style.opacity = "1";
      badge.style.visibility = "visible";
    }
  };

  const hideReCAPTCHABadge = () => {
    const badge = document.querySelector(".grecaptcha-badge") as HTMLElement;
    if (badge) {
      badge.style.opacity = "0";
      badge.style.visibility = "hidden";
    }
  };

  const getReCAPTCHAToken = async () => {
    //if (!isScriptLoaded || !isReady) {
    //  throw new Error("reCAPTCHA script is not ready yet.");
    //}

    return new Promise<string>((resolve, reject) => {
      window.grecaptcha.enterprise.ready(async () => {
        try {
          const token = await window.grecaptcha.enterprise.execute(SITE_KEY, {
            action: "LOGIN",
          });
          resolve(token);
        } catch (error) {
          reject(error);
        }
      });
    });
  };

  useEffect(() => {
    loadReCaptchaScript();
  });

  return { showReCAPTCHABadge, hideReCAPTCHABadge, getReCAPTCHAToken, isReady };
};

export default useReCaptcha;
