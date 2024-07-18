import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  container: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 600,
    width: "90%",
    bgcolor: "rgb(28,30,42)",
    borderRadius: "10px",
    boxShadow: 24,
    p: "30px",
    display: "grid",
    alignContent: "center",
    gap: "30px",
    "@media (max-width: 600px)": {},
  },
  title: {
    fontSize: "1.5rem",
    color: "#FFF",
    fontWeight: "bold",
  },

  subtitle: {
    mt: "15px",
    color: "#94A3B8",
    fontSize: "1rem",
  },
  inputWrapper: {
    display: "flex",
    gap: "25px",
    "@media (max-width: 900px)": {
      display: "grid",
    },
  },
  input: {
    width: 1,
    borderRadius: "10px",
    color: "#fff",
    backgroundColor: "rgb(18,20,29)",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgb(18,20,29)",
      },
      "&:hover fieldset": {
        borderColor: "#A855F7",
      },
    },
    "& .MuiInputLabel-root": {
      color: "#fff",
    },
  },
  button: {
    width: "90%",
    m: "auto",
    borderRadius: "10px",
    whiteSpace: "nowrap",
    fontSize: "1.2rem",
    textTransform: "none",
  },
};

export default style;
