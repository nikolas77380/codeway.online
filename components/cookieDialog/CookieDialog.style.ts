import { SxProps, Theme } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  popup: {
    maxWidth: "800px",
    width: "80%",
    ml: "max(10%, 50% - 800px)!important",
    minHeight: "130px",
    top: "unset!important",
    bottom: "30px",
    p: "20px",
    backgroundColor: "rgb(83,49,122, 0.95)",
    borderRadius: "10px",
    position: "fixed!important",
    opacity: 0,
    "@keyframes fadeIn": {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
    animation: "fadeIn 2s 1.5s forwards",
    "@media (min-width: 1200px)": {
      width: "50%",
      ml: "max(5%, 50% - 800px)!important",
    },
  },

  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@media (max-width: 600px)": {
      flexDirection: "column",
    },
  },

  subtitle: {
    p: " 10px 10px",
    color: "#94A3B8",
    fontSize: "0.8rem",
    "@media (min-width: 600px)": {
      fontSize: "1rem",
    },
  },

  link: {
    whiteSpace: "nowrap",
  },

  linkButton: {
    borderRadius: "50px",
    p: "5px 30px",
    fontSize: "0.7rem",
    color: "#A855F7",
    borderColor: "#A855F7",
  },

  accButton: {
    p: "5px 40px",
    textTransform: "none",
    fontSize: "1rem",
    backgroundColor: "#A855F7",
    borderRadius: "50px",
  },
};

export default style;
