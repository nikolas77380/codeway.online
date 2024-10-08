import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
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
      gap: 0,
    },
  },
  input: {
    width: 1,
    borderRadius: "10px",
    height: "60px",
    color: "#fff",
    mb: "25px",
    "& .MuiOutlinedInput-root": {
      backgroundColor: "rgb(18,20,29)",
      color: "#fff",
      "& fieldset": {
        borderColor: "rgb(18,20,29)",
      },
      "&:hover fieldset": {
        borderColor: "#A855F7",
      },
      "& :-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 100px #12141D inset",
        WebkitTextFillColor: "#fff",
        borderColor: "rgb(18,20,29)",
      },
    },
    "& .MuiInputLabel-root": {
      color: "#fff",
    },
    "& .MuiFormHelperText-root": {
      bgcolor: "rgb(28,30,42)",
      m: 0,
      p: "3px",
      fontSize: "0.8rem",
      display: "inline",
    },
  },
  buttonSubmit: {
    width: "90%",
    mt: "70px",
    ml: "5%",
    borderRadius: "10px",
    whiteSpace: "nowrap",
    fontSize: "1.2rem",
    textTransform: "none",
    color: "#fff!important",
  },
  button: {
    flex: "1",
    justifyContent: "center",
    padding: "10px",
    borderRadius: "8px",
    color: "#fff!important",
    border: "1px solid rgba(0, 0, 0, 0.52)",
    "@media (max-width: 600px)": {
      fontSize: "0.7rem",
    },
  },
  selectedButton: {
    flex: "1",
    justifyContent: "center",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid rgba(0, 0, 0, 0.52)",
    "@media (max-width: 600px)": {
      fontSize: "0.7rem",
    },
  },
  toggleGroup: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "16px",
  },
};

export default style;
