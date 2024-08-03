import { SxProps, Theme } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  container: {
    p: "50px 25px",
    backgroundColor: "rgb(18,20,29)",
  },

  contentWrapper: {
    maxWidth: "1700px",
    m: "auto",
    backgroundImage: "url('/assets/coursesListBlock/bg_memphis_1_.png')",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },

  title: {
    mt: "15px",
    fontSize: "2.5rem",
    fontWeight: "bold",
    textAlign: "center",
    color: "#FFF",
  },

  subtitle: {
    m: "auto",
    mt: "15px",
    pl: "20px",
    color: "#94A3B8",
    fontSize: "1rem",
    textAlign: "center",
    maxWidth: "650px",
  },
};

export default style;
