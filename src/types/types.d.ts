interface Window {
  grecaptcha: {
    enterprise: {
      ready: (callback: () => void) => void;
      execute: (
        siteKey: string | undefined,
        options: { action: string }
      ) => Promise<string>;
    };
  };
}
