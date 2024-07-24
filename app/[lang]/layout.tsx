import Footer from "@/components/footer/Footer";
import Menu from "@/components/Menu/Menu";
import theme from "@/src/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { dir } from "i18next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { languages } from "../i18n/settings";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Codeway",
  description: "Learn code on your way",
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

interface IRootLayout {
  children: Readonly<React.ReactNode>;
  params: {
    lang: string;
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
            <Menu lang={lang} />
            {children}
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
