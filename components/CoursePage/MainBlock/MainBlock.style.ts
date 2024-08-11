import { SxProps, Theme } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  mainContainer: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "flex-start",
    backgroundColor: "#12141d",
    m: "auto",
    p: "25px",
    maxWidth: "1500px",
    width: 1,
    height: 1,
    minHeight: "100vh",
    position: "relative",
    "@media (max-width: 900px)": {
      flexDirection: "column",
    },
  },

  mainContent: {
    display: "flex",
    flexDirection: "column",
    width: 1,
    height: 1,
    flex: 1,
  },

  mobileCardInfoBlock: {
    mt: "25px",
    ml: "25px",
    mb: "50px",
    position: "sticky",
    top: "0",
    "@media (max-width: 900px)": {
      position: "relative",
    },
  },
};

export default style;
