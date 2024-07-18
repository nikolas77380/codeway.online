import { SxProps, Theme } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  container: {
    backgroundImage: "url('/coursesListBlock/bg_memphis_1_.png')",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    m: "auto",
    width: "min(90%, 1280px)",
    p: "10px",
    color: "#fff",
  },
  button: {
    p: "7px 15px",
    mt: "15px",
    ml: "15px",
    textTransform: "none",
    fontSize: "1rem",
    backgroundColor: "#A855F7",
    borderRadius: "50px",
  },
};

export default style;
