import { SxProps, Theme } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  container: {
    color: "#fff",
    height: "400px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    m: "auto",
    p: "10px 10px 0 10px",
    width: "min(95%, 1700px)",
    borderRadius: "50px",
    backgroundImage:
      'url("/assets/header/bg_header_2_.webp"), url("/assets/header/bg_header_3_.webp")',
    backgroundPosition: "bottom right",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    "@media (max-width: 600px)": {
      height: "200px",
      borderRadius: "20px",
      width: 1,
    },
  },

  contentWrapper: {
    m: "auto",
    width: "min(90%, 1280px)",
    height: 1,
    p: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    textAlign: "center",
    "@media (max-width: 600px)": {
      p: "10px",
    },
  },
};

export default style;
