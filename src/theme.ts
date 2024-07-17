"use client";
import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
    subtitle2: {
      color: "#94A3B8",
      fontSize: "1rem",
    },
  },
  palette: {
    primary: {
      main: "#a855f7",
      dark: "#9333EA",
    },
  },
});

export default theme;
