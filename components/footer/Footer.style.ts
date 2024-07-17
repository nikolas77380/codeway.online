import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  container: {
    color: "#fff",
    pt: "20px",
    backgroundColor: "#12141D",
    backgroundImage: "url('/footer/bg_footer.png')",
    backgroundPosition: "top center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },

  contentWrapper: {
    maxWidth: "1280px",
    m: "auto",
    p: "30px",
  },
  mainSection: {},
  "email::before": {},
  input: {},
  appLinks: {},
  socialLinks: {},
};

export default style;
