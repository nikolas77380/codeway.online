import { SxProps, Theme } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  container: {
    width: 1,
    m: "auto",
    p: "10px 10px 0 10px",
    maxWidth: "1700px",
    maxHeight: "900px",
    height: `calc(100vh - 8rem)`,
    minHeight: "600px",
    borderRadius: "50px",
    backgroundImage:
      'url("/assets/header/bg_header_2_.png"), url("/assets/header/bg_header_3_.png")',
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    textAlign: "justify",
    overflow: "hidden",
  },

  title: {
    mt: "15px",
    fontSize: "2.5rem",
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitle: {
    mt: "15px",
    p: " 0 10px",
    color: "#94A3B8",
    fontSize: "1.5rem",
    lineHeight: "2rem",
  },
};

export default style;
