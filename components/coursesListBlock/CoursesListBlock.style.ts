import { SxProps, Theme } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  container: {
    p: "25px",
  },

  contentWrapper: {
    maxWidth: "1700px",
    m: "25px auto",
  },

  title: {
    mt: "25px",
    textAlign: "center",
    zIndex: 2,
  },

  subtitle: {
    m: "auto",
    mt: "25px",
    pl: "20px",
    textAlign: "center",
    maxWidth: "1280px",
    zIndex: 2,
  },
};

export default style;
