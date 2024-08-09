import { SxProps, Theme } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  mainSection: {
    width: 1,
    position: "relative",
    maxWidth: "1700px",
    m: "auto",
    textAlign: "center",
    "& p": {
      m: "25px",
    },
  },
  backgroundImage: {
    position: "absolute",
    top: 300,
    left: 0,
    right: 0,
    height: "350px",
    width: "100%",
    transform: "rotate(180deg)",
    zIndex: 0,
    "@media (max-width: 1050px)": {
      display: "none",
    },
  },
  backgroundImage2: {
    position: "absolute",
    bottom: 205,
    left: 0,
    right: 0,
    height: "350px",
    width: "100%",
    zIndex: 0,
    "@media (max-width: 1050px)": {
      display: "none",
    },
  },
};

export default style;
