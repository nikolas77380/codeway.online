import { SxProps, Theme } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  container: {
    width: 1,
    m: "auto",
    backgroundColor: "rgb(25,27,38,0.6)",
    maxWidth: "400px",
    minHeight: "500px",
    borderRadius: "10px",
    color: "white",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "@media (max-width: 600px)": {
      minHeight: "460px",
    },
  },

  name: {
    color: "#fff",
    mt: "15px",
    p: "0 10px",
    maxHeight: "64px",
  },

  description: {
    p: "0 10px",
    fontSize: "0.8rem!important",
  },

  discountPriceContainer: {
    display: "flex",
    alignItems: "center",
    m: "0 15px",
    justifyContent: "space-between",
    "& .discount-price": {
      color: "#A855F7",
      fontWeight: "bold",
      fontSize: "20px",
      "@media (max-width: 600px)": {
        fontSize: "16px",
      },
    },
    "& .original-price": {
      textDecoration: "line-through",
      color: "#747474",
      fontSize: "20px",
      "@media (max-width: 600px)": {
        fontSize: "16px",
      },
    },
  },

  price: {
    color: "#A855F7",
    ml: "15px",
    fontWeight: "bold",
    fontSize: "20px",
    "@media (max-width: 600px)": {
      fontSize: "16px",
    },
  },

  rating: {
    m: "15px",
  },

  courseButton: {
    m: "10px",
    width: "95%",
    borderRadius: "10px",
    backgroundColor: "#A855F7",
    textTransform: "none",
    mb: "10px",
  },
};

export default style;
