"use client";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { Red_Hat_Text } from "next/font/google";

const RedHatText = Red_Hat_Text({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

let theme = createTheme({
  typography: {
    fontFamily: RedHatText.style.fontFamily,
    h2: {
      fontWeight: "bold",
      color: "#fff",
      "@media (max-width: 700px)": {
        fontSize: "2.5rem",
      },
      "@media (max-width: 500px)": {
        fontSize: "2rem",
      },
    },
    h3: {
      color: "#fff",
      fontSize: "1.8rem",
      fontWeight: "500",
      "@media (max-width: 500px)": {
        fontSize: "1.2rem",
      },
    },
    h6: {
      color: "#94A3B8",
      "@media (max-width: 700px)": {
        fontSize: "1rem",
      },
      "@media (max-width: 500px)": {
        fontSize: "0.8rem",
      },
      // fontSize: "1.5rem",
    },
    body2: {
      color: "#a855f7",
      fontSize: "1rem",
      letterSpacing: "2px",
      textTransform: "uppercase",
    },
  },
  palette: {
    primary: {
      main: "#a855f7",
      dark: "#9333EA",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
