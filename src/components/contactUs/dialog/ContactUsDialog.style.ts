import { SxProps, Theme } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  container: {
    position: "fixed",
    bottom: 1,
    right: 16,
    zIndex: 1300,
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    width: "min(95%, 1280px)",
    maxWidth: "400px",
    m: "10px",
    p: "10px",
    bgcolor: "rgba(28, 30, 42, .8)",
    backdropFilter: "blur(10px)",
    borderRadius: "15px",
    "@media (max-width: 450px)": {
      right: 0,
      left: 0,
    },
  },

  contentWrapper: {
    width: 1,
    m: "10px",
    p: "20px",
    pb: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",
    gap: "30px",
  },
  lottieContainer: {
    width: 160,
    height: 70,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    mr: "40px",
    "& .lottie-robot": {
      width: "160px",
      height: "150px",
    },
    "@media (max-width: 900px)": {
      mr: 0,
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
    minWidth: "220px",
    borderRadius: "30px",
    whiteSpace: "nowrap",
    fontSize: "1rem",
    textTransform: "none",
  },
};

export default style;
