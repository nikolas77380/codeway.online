import { SxProps, Theme } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  container: {
    p: "50px 25px",
    backgroundColor: "rgb(18,20,29)",
    backgroundImage: "url('/coursesListBlock/bg_memphis_1_.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },

  title: {
    mt: "15px",
    fontSize: "2rem",
    fontWeight: "bold",
    textAlign: "center",
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

  listWrapper: {
    mt: "45px",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
  },
};

export default style;
