import { SxProps, Theme } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  container: {
    p: "25px",
    backgroundColor: "rgb(18,20,29)",
  },

  contentWrapper: {
    maxWidth: "1700px",
    m: "25px auto",
    backgroundImage: "url('/assets/coursesListBlock/bg_memphis_1_.png')",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },

  title: {
    mt: "25px",
    textAlign: "center",
  },

  subtitle: {
    m: "auto",
    mt: "25px",
    pl: "20px",
    textAlign: "center",
    maxWidth: "1280px",
  },
};

export default style;
