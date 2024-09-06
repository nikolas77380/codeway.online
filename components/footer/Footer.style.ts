import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  container: {
    boxSizing: "border-box",
    color: "#fff",
    pt: "20px",
    backgroundColor: "#12141D",
    position: "relative",
  },

  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "350px",
    width: "100%",
    transform: "rotate(180deg)",
    zIndex: 0,

    "@media (max-width: 599px)": {
      width: "200%",
      left: "-50%",
    },
  },

  contentWrapper: {
    maxWidth: "1280px",
    m: "auto",
    p: "30px",
    zIndex: 1,
  },
  mainSection: {
    zIndex: 1,
  },
  address: {
    mt: "10px",
    p: "10px",
    fontSize: "0.9rem",
  },
  email: {
    p: "5px",
    fontSize: "0.9rem",
    "&::before": {
      content: "'✉'",
      color: "#A855F7",
      mr: "5px",
    },
  },
  phone: {
    p: "5px",
    fontSize: "0.9rem",
  },
  phoneIcon: {
    mr: "5px",
    lineHeight: "1.2rem",
    color: "#A855F7",
    fontSize: "1rem",
  },
  signUpText: {
    mt: "10px",
    fontSize: "0.9rem",
  },
  form: {
    width: 1,
    display: "flex",
    mt: "10px",
    justifyContent: "space-between",
  },
  input: {
    flex: 1,
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#1E2231",
        borderRadius: "30px",
      },
      "&:hover fieldset": {
        borderColor: "#A855F7",
      },
    },
    "& .MuiInputBase-input": {
      color: "#fff",
      borderRadius: "30px",
      backgroundColor: "#1C1E2A",
    },
    "& .MuiInputLabel-root": {
      color: "#fff",
    },
  },

  button: {
    ml: "10px",
    mr: "10px",
    borderRadius: "30px",
    textTransform: "none",
  },
  appLinks: {
    width: 1,
    m: "20px 4px",
    minHeight: "120px",
    p: "20px 30px",
    backgroundColor: "#1C1E2A",
    alignItems: "center",
    borderRadius: "10px",
  },
  appLinksTitle: {
    "@media (max-width: 600px)": {
      fontSize: "1rem",
      textAlign: "center",
      mb: "5px",
    },
  },
  storeImg: {
    pt: "0!important",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "20px",
    "@media (max-width: 1050px)": {
      flexDirection: "column",
    },
    "@media (max-width: 599px)": {
      flexDirection: "row",
      justifyContent: "center",
    },
    "@media (max-width: 450px)": {
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  socialIcon: {
    color: "#fff",
    transition: "color 0.3s ease, transform 0.3s ease",
    "&:hover": {
      color: "#9333EA",
      transform: "scale(1.1)",
    },
  },
  copyright: {
    textAlign: "end",
    whiteSpace: "nowrap",
    "@media (max-width: 800px)": {
      fontSize: "0.6rem",
    },
  },
};

export default style;
