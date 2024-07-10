import { SxProps, Theme } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  container: {
    width: 1,
    backgroundColor: "rgb(25,27,38,0.6)",
    maxWidth: "430px",
    minWidth: "250px",
    height: "400px",
    borderRadius: "10px",
    color: "white",
    overflow: "hidden",
  },

  contentWrapper: {
    width: 1,
    height: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  name: {
    mt: "5px",
    p: "0 10px",
    maxHeight: "64px",
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
