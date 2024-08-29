import { SxProps, Theme } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  container: {
    width: 1,
    m: "auto",
    backgroundColor: "rgb(25,27,38,0.6)",
    maxWidth: "400px",
    height: "460px",
    borderRadius: "10px",
    color: "white",
    overflow: "hidden",
  },

  contentWrapper: {
    width: 1,
    height: "250px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  name: {
    color: "#fff",
    mt: "5px",
    p: "0 10px",
    maxHeight: "64px",
  },

  description: {
    p: "0 10px",
    fontSize: "0.8rem!important",
  },

  price: {
    color: "#A855F7",
    ml: "15px",
  },

  rating: {
    m: "15px",
  },

  courseButton: {
    m: "10px",
    width: "95%",
    borderRadius: "50px",
    backgroundColor: "#A855F7",
    textTransform: "none",
  },
};

export default style;
