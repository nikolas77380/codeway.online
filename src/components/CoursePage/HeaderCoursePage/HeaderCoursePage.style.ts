import { SxProps, Theme } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  container: {
    color: "#fff",
    height: "600px",
    m: "auto",
    p: "10px 10px 0 10px",
    maxWidth: "1700px",
    width: 1,
    borderRadius: "50px",
    backgroundImage:
      'url("/assets/header/bg_header_2_.webp"), url("/assets/header/bg_header_3_.webp")',
    backgroundPosition: "bottom right",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    "@media (max-width: 600px)": {
      height: "400px",
    },
  },
  contentWrapper: {
    m: "auto",
    width: "min(90%, 1280px)",
    height: 1,
    p: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    textAlign: "center",
    "@media (max-width: 600px)": {
      p: "5px",
    },
  },
  topic: {
    display: "inline-block",
    p: "10px 31px",
    color: "rgb(168,85,247)",
    textAlign: "center",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    border: "1px solid rgba(168, 85, 247, 0.4)",
    borderRadius: "50px",
    boxShadow: "0px 0px 30px 0px rgba(255, 255, 255, 0.1)",
    "@media (max-width: 600px)": {
      fontSize: "0.7rem",
    },
  },

  name: {
    mt: "25px",
    textTransform: "uppercase",
  },

  subtitle: {
    mt: "25px",
  },
  rating: {
    mt: "25px",
    mb: "10px",
  },
  icon: {
    color: "#A855F7",
    mr: "5px",
    position: "relative",
    top: "6px",
  },
  divider: {
    borderColor: "#8769A9",
    borderRightWidth: "3px",
    height: "15px",
    alignSelf: "center",
  },
  extraInfo: {
    "@media (max-width: 600px)": {
      fontSize: "0.7rem",
    },
  },
};

export default style;
