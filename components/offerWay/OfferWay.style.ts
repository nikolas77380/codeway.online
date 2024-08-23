import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  container: {
    width: "100%",
    maxWidth: "1700px",
    height: "1918px",
    position: "relative",
  },
  line_container: {
    position: "absolute",
    top: "-200px",
    left: 0,
    right: 0,
    width: 1,
    height: 1,
    zIndex: 2,
    textAlign: "center",
    "& svg": {
      display: "inline-block",
      height: "100%",
    },
  },
};

export default style;
