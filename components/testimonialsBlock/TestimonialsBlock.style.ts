import { SxProps, Theme } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  mainSection: {
    width: 1,
    maxWidth: "1700px",
    m: "auto",
    textAlign: "center",
    "& p": {
      m: "25px",
    },
  },
};

export default style;
