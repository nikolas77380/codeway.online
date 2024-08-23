import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";
const style: { [key: string]: SxProps<Theme> } = {
  container: {
    width: "100%",
    maxWidth: "1700px",
    p: "25px",
  },
  achievements: {
    display: "grid",
    gridTemplateColumns: "150px 1fr",
    alignItems: "flex-start",
    justifyItems: "start",
    gap: "25px",
    p: "50px",
    textAlign: "left",
    "& p": {
      color: "#FFF",
    },
  },
};

export default style;
