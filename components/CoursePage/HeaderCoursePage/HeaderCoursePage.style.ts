import { SxProps, Theme } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  container: {
    color: "#fff",
    height: "600px",
    m: "auto",
    p: "10px 10px 0 10px",
    width: "min(95%, 1700px)",
    borderRadius: "50px",
    backgroundImage:
      'url("/header/bg_header_2_.png"), url("/header/bg_header_3_.png")',
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
    ml: "15px",
    display: "inline-block",
    p: "3px 21px",
    textAlign: "center",
    letterSpacing: "2px",
    textTransform: "uppercase",
    textWrap: "nowrap",
    border: "1px solid rgba(168, 85, 247, 0.4)",
    borderRadius: "50px",
    boxShadow: "0px 0px 30px 0px rgba(255, 255, 255, 0.1)",
  },

  name: {
    mt: "15px",
    fontSize: "2.5rem",
    color: "#FFF",
    fontWeight: "bold",
    "@media (max-width: 600px)": {
      fontSize: "1.5rem",
    },
  },

  subtitle: {
    mt: "15px",
    fontSize: "1rem",
    "@media (max-width: 600px)": {
      fontSize: "0.9rem",
    },
  },
  rating: {
    mt: "15px",
  },
  icon: {
    color: "#A855F7",
    mr: "5px",
    position: "relative",
    top: "6px",
  },
  divider: {
    borderColor: "#474255",
    borderRightWidth: "3px",
    height: "20px",
    alignSelf: "center",
  },
  extraInfo: {
    "@media (max-width: 600px)": {
      fontSize: "0.7rem",
    },
  },
};

export default style;
