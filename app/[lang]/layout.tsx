import Menu from "@/src/components/Menu/Menu";
import { SnackbarProvider } from "@/src/context/SnackbarContext";
import theme from "@/src/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { dir } from "i18next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { lazy, Suspense } from "react";
import { RedHatText } from "../fonts";
import { getTranslation } from "../i18n";
import { languages } from "../i18n/settings";
import "./globals.css";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

interface IRootLayout {
  children: Readonly<React.ReactNode>;
  params: {
    lang: string;
  };
}

export async function generateMetadata({ params: { lang } }: IRootLayout) {
  const { t } = await getTranslation(lang, "MainPage");

  return {
    title: t("meta.title"),
    description: t("meta.description"),
    keywords: t("meta.keywords"),
    robots: "index, follow",
  };
}

export default function RootLayout({
  children,
  params: { lang },
}: IRootLayout) {
  const Footer = lazy(() => import("@/src/components/footer/Footer"));

  return (
    <html lang={lang} dir={dir(lang)} className={RedHatText.className}>
      <body>
        <AppRouterCacheProvider options={{ key: "cw" }}>
          <ThemeProvider theme={theme}>
            <SnackbarProvider>
              <Menu lang={lang} />
              {children}
              <Suspense>
                <Footer />
              </Suspense>
            </SnackbarProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
      <GoogleAnalytics gaId="G-8WDF2LBTHD" />
    </html>
  );
}
