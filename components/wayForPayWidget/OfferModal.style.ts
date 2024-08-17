import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  container: {
    position: "absolute",
    display: "grid",
    placeContent: "center",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 600,
    width: "90%",
    bgcolor: "rgb(28,30,42)",
    borderRadius: "10px",
    boxShadow: 24,
    p: "30px",
  },
  title: {
    m: "auto",
    p: "0 25px 5px",
    mb: "10px",
    width: "fit-content",
    borderBottom: "1px solid #A855F7",
  },
  closeIcon: {
    color: "#A855F7",
    position: "absolute",
    right: 8,
    top: 8,
  },
  button: {
    fontSize: "1rem",
    width: "100px",
    margin: "auto",
    fontWeight: "bold",
    minWidth: "auto",
    color: "#A855F7",
  },
};

export default style;
