import { SxProps, Theme } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  item: {
    width: "400px",
    height: "320px",
    p: "15px",
    m: "auto",
    alignContent: "center",
    backgroundColor: "rgb(25,27,38,0.6)",
    maxWidth: "420px",
    borderRadius: "10px",
    color: "white",
    overflow: "hidden",
    "& img": {
      width: 1,
      borderRadius: "10px",
    },
  },
};

export default style;
