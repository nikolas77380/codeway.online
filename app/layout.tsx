import Menu from "@/src/components/Menu/Menu";
import { SnackbarProvider } from "@/src/context/SnackbarContext";
import theme from "@/src/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { GoogleAnalytics } from "@next/third-parties/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { lazy, Suspense } from "react";
import { RedHatText } from "./fonts";
import "./globals.css";

interface IRootLayout {
  children: Readonly<React.ReactNode>;
}

export default async function RootLayout({ children }: IRootLayout) {
  const Footer = lazy(() => import("@/src/components/footer/Footer"));

  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className={RedHatText.className}>
      <body>
        <AppRouterCacheProvider options={{ key: "cw" }}>
          <ThemeProvider theme={theme}>
            <NextIntlClientProvider messages={messages}>
              <SnackbarProvider>
                <Menu />
                {children}
                <Suspense>
                  <Footer />
                </Suspense>
              </SnackbarProvider>
            </NextIntlClientProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
      <GoogleAnalytics
        gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ?? ""}
      />
    </html>
  );
}
