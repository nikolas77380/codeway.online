import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";
const style: { [key: string]: SxProps<Theme> } = {
  container: {
    width: "100%",
    maxWidth: "1700px",
    minHeight: "750px",
    p: "25px",
  },
  achievements: {
    mt: "50px",
    display: "grid",
    gridTemplateColumns: "150px 1fr",
    alignItems: "flex-start",
    justifyItems: "start",
    gap: "25px",
    textAlign: "left",
    "@media (max-width: 900px)": {
      gridTemplateColumns: "100px 1fr",
      gap: "50px",
    },
    "@media (max-width: 600px)": {
      gridTemplateColumns: "60px 1fr",
    },
    "& span": {
      fontWeight: "bold",
    },
    "& p": {
      color: "#FFF",
      "@media (max-width: 900px)": {
        lineHeight: "1.3rem",
      },
    },
  },
};

export default style;
