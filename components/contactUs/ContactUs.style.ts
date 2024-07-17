import { SxProps, Theme } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  container: {
    position: "relative",
    width: "min(95%, 1280px)",
    maxWidth: "1280px",
    m: "auto",
    p: "20px",
    bgcolor: "#1C1E2A",
  },
  backgroundOverlay: {
    width: 1,
    height: 1,
    backgroundImage: "url('/header/bg_header_2_.png')",
    backgroundPosition: "bottom right",
    backgroundRepeat: "no-repeat",
    backgroundSize: "300%",
    opacity: 0.3,
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: "10px",
  },
  contentWrapper: {
    width: 1,
    m: "10px",
    p: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    "@media (max-width: 900px)": {
      flexDirection: "column",
      gap: "30px",
    },
  },
  textWrapper: {
    width: 1,
    p: "0 30px",
    "@media (max-width: 900px)": {
      p: 0,
    },
  },

  title: {
    fontSize: "1.5rem",
    color: "#FFF",
    fontWeight: "bold",
    "@media (max-width: 900px)": {
      textAlign: "center",
    },
  },

  subtitle: {
    mt: "15px",
    color: "#94A3B8",
    fontSize: "1rem",
    "@media (max-width: 900px)": {
      textAlign: "justify",
    },
  },

  button: {
    width: "300px",
    borderRadius: "30px",
    whiteSpace: "nowrap",
    fontSize: "1.2rem",
    textTransform: "none",
  },
  arrow: {
    fontSize: "20px",
    verticalAlign: "center",
    mb: "3px",
  },
};

export default style;
