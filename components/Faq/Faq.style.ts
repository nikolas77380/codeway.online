import { SxProps, Theme } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  mainSection: {
    width: 1,
    maxWidth: "1700px",
    m: "25px auto",
    p: "25px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  textSection: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    gap: "25px",
    width: 1,
  },

  faqCardContainer: {
    width: 1,
    height: 1,
    display: "flex",
    flexDirection: "column",
    mt: "25px",
    gap: "15px",
    "@media (max-width: 600px)": {
      gap: "0.2rem",
    },
  },

  faqCardWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    m: "auto",
    width: 1,
    maxWidth: "1250px",
    height: "auto",
  },

  iconSize: {
    fontSize: "2.5rem",
    color: "#a855f7",
    "@media (max-width: 600px)": {
      fontSize: "1.7rem",
    },
  },

  accordion: {
    backgroundColor: "transparent",
    boxShadow: "none",
    width: 1,
    "& span": {
      color: "#fff",
      fontSize: "1.5rem",
      fontWeight: "500",
      "@media (max-width: 600px)": {
        fontSize: "1.2rem",
      },
    },
  },

  accordionDetails: {
    overflow: "hidden",
    height: "auto",
    "& p": {
      color: "#94a3b8",
      fontSize: "16px",
      fontWeight: "400",
      "@media (max-width: 600px)": {
        fontSize: "14px",
      },
    },
  },

  accordionArrowColor: {
    color: "#a855f7",
    fontSize: "40px",
    "@media (max-width: 600px)": {
      fontSize: "30px",
    },
  },
};

export default style;
