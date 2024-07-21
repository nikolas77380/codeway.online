import { SxProps, Theme } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  title: {
    fontWeight: "bold",
    m: "20px",
  },
  link: {
    p: "3px 3px 3px 0",
    color: "#94A3B8",
    fontSize: "0.8rem",
    lineHeight: "1rem",
    transition: "color 0.3s ease-in-out",
    "&:first-child": {
      mt: "10px",
    },
    "&:hover": {
      color: "#9333EA",
    },
  },
};

export default style;
