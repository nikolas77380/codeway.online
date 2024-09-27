import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  container: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 600,
    width: "90%",
    bgcolor: "rgb(28,30,42)",
    borderRadius: "10px",
    boxShadow: 24,
    p: "30px",

    "@media (max-width: 600px)": {},
  },

  closeButton: {
    position: "absolute",
    top: 25,
    right: 25,
    "& svg": {
      transition: "all 0.3s",
      ":hover": { color: "#FFF" },
    },
  },
};

export default style;
