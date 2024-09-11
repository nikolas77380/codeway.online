import { SxProps, Theme } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  videoContainer: {
    width: "100%",
    height: "650px",
    position: "relative",
    overflow: "hidden",
    backgroundColor: "transparent",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: 0.7,
    },
    "@media (max-width: 600px)": {
      height: "400px",
      marginTop: "5rem",
    },
  },
  videoWrapper: {
    position: "relative",
    paddingBottom: "45%",
    height: 0,
    "& iframe": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    },
    "@media (max-width: 600px)": {
      paddingBottom: "56.25%",
      height: "auto",
      "& iframe": {
        top: "50%",
      },
    },
  },

  playButton: {
    position: "absolute",
    top: "25%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    "@media (max-width: 600px)": {
      top: "22%",
    },
  },
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    height: "70%",
    outline: 0,
    "@media (max-width: 600px)": {
      width: "90%",
      height: "90%",
      padding: "2px",
    },
  },
  closeButtonModal: {
    position: "absolute",
    top: -80,
    right: -180,
    border: "1px solid #949495",
    zIndex: 1,
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    transition: "all 0.5s ease",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      borderColor: "black",
      "& svg": {
        color: "white",
      },
    },
    "@media (max-width: 600px)": {
      top: 60,
      right: -20,
    },
    "@media (min-width: 601px) and (max-width: 1024px)": {
      top: -50,
      right: -20,
    },
  },
  closeIconModal: {
    color: "#949495",
    fontWeight: "bold",
  },
  playButtonSvg: {
    "& svg": {
      width: "100px",
      height: "100px",
      marginTop: "5px",
      "& polygon": {
        strokeDasharray: 240,
        strokeDashoffset: 480,
        stroke: "white",
        transform: "translateY(0)",
        transition: "all 0.7s ease-in-out",
      },
      "& circle": {
        strokeDasharray: 650,
        strokeDashoffset: 1300,
        stroke: "white",
        transition: "all 0.5s ease-in-out",
      },
      "&:hover": {
        color: "#a855f7",
        "&:hover polygon": {
          strokeDashoffset: 0,
          opacity: 1,
          stroke: "#a855f7",
          animation: "trailorPlay 0.7s ease-in-out",
        },
        "&:hover circle": {
          strokeDashoffset: 0,
          stroke: "#a855f7",
        },
      },
    },
  },
  headContent: {
    position: "absolute",
    overflow: "hidden",
    width: "600px",
    bottom: "22%",
    left: "50%",
    transform: "translateX(-50%)",
    textAlign: "center",
    color: "white",
    "& h2": {
      fontSize: "40px",
      fontWeight: "700",
      marginBottom: "-8px",
    },
    "& p": {
      marginBottom: "4px",
    },
    "& button": {
      marginTop: "1rem",
      padding: "10px 30px",
      borderRadius: "45px",
      color: "white",
      backgroundColor: "#9333ea",
      fontSize: "14px",
      textTransform: "none",
    },
    "@media (max-width: 600px)": {
      width: "90%",
      bottom: "5%",
      "& h2": {
        fontSize: "24px",
        marginBottom: "-5px",
      },
      "& p": {
        marginBottom: "1px",
      },
      "& button": {
        padding: "10px 25px",
        fontSize: "12px",
      },
    },
  },
};

export default style;
