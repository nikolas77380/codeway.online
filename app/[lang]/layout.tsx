import Footer from "@/components/footer/Footer";
import Menu from "@/components/Menu/Menu";
import { SnackbarProvider } from "@/context/SnackbarContext";
import theme from "@/src/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { dir } from "i18next";
import { Inter } from "next/font/google";
import { getTranslation } from "../i18n";
import { languages } from "../i18n/settings";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
  };
}

export default function RootLayout({
  children,
  params: { lang },
}: IRootLayout) {
  return (
    <html lang={lang} dir={dir(lang)}>
      <body className={inter.className}>
        <AppRouterCacheProvider options={{ key: "cw" }}>
          <ThemeProvider theme={theme}>
            <SnackbarProvider>
              <Menu lang={lang} />
              {children}
              <Footer />
            </SnackbarProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
