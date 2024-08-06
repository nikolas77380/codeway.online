import { SxProps, Theme } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  headerContainer: {
    width: 1,
    backgroundColor: "#12141D",
    m: "10px",
  },

  contentWrapper: {
    position: "relative",
    m: "auto",
    p: "10px 10px 0 10px",
    maxWidth: "1700px",
    maxHeight: "900px",
    height: `calc(100vh - 8rem)`,
    minHeight: "600px",
    borderRadius: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    "@media (max-width: 900px)": {
      m: 0,
      height: "auto",
      maxHeight: "none",
      flexDirection: "column",
    },
  },
  backgroundImage: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "35vh",
    width: "100%",
    overflow: "hidden",
    zIndex: 0,
  },
  leftContainer: {
    pr: "15px",
    pl: "5px",
    "@media (max-width: 900px)": {
      margin: "auto",
      textAlign: "center",
    },
  },

  slogan: {
    display: "inline-block",
    p: "10px 31px",
    color: "rgb(168,85,247)",
    textAlign: "center",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    border: "1px solid rgba(168, 85, 247, 0.4)",
    borderRadius: "50px",
    boxShadow: "0px 0px 30px 0px rgba(255, 255, 255, 0.1)",
    animation: `moveFromBottom 1.5s forwards`,
    "@keyframes moveFromBottom": {
      "0%": {
        opacity: 0,
        transform: "translateY(100%)",
      },
      "100%": {
        opacity: 1,
        transform: "translateY(0)",
      },
    },
    "@media (max-width: 600px)": {
      fontSize: "0.7rem",
    },
  },

  title: {
    mt: "25px",
    animation: `moveFromBottom 1.5s forwards`,
    "@keyframes moveFromBottom": {
      "0%": {
        opacity: 0,
        transform: "translateY(100%)",
      },
      "100%": {
        opacity: 1,
        transform: "translateY(0)",
      },
    },
    "& span": {
      fontFamily: "Permanent_Marker",
      color: "#A855F7",
      position: "relative",
    },
  },

  subtitle: {
    mt: "25px",
    animation: `moveFromBottom 1.5s forwards`,
    "@keyframes moveFromBottom": {
      "0%": {
        opacity: 0,
        transform: "translateY(100%)",
      },
      "100%": {
        opacity: 1,
        transform: "translateY(0)",
      },
    },
  },

  button: {
    p: "10px 31px",
    mt: "25px",
    textTransform: "none",
    fontSize: "1rem",
    letterSpacing: "1.5px",
    boxShadow: "0px 0px 30px 0px rgba(255, 255, 255, 0.1)",
    borderRadius: "50px",
    transition: "all 0.3s easy",
    "&:hover": {
      color: "#FFF",
      backgroundColor: "rgb(168,85,247)",
    },
  },

  rightContainer: {
    position: "relative",
    alignSelf: "flex-end",
  },

  mainImage: {
    position: "relative",
    objectFit: "cover",
    width: "580px",
    height: "600px",
    animation: `moveFromBottom 1.5s forwards`,
    "@keyframes moveFromBottom": {
      "0%": {
        opacity: 0,
        transform: "translateY(100%)",
      },
      "100%": {
        opacity: 1,
        transform: "translateY(0)",
      },
    },
    "@media (max-width: 1200px)": {
      width: "480px",
      height: "500px",
    },
    "@media (max-width: 900px)": {
      width: "380px",
      height: "400px",
    },
  },
  backgroundImageCenter: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  imageCodeIcon: {
    position: "absolute",
    width: "108px",
    height: "108px",
    top: "40px",
    right: "30px",
    rotate: "15deg",
    animation: `fadeInScale 1s forwards`,
    "@keyframes fadeInScale": {
      "0%": {
        opacity: 0,
        transform: "scale(0.5) rotate(0deg)",
      },
      "100%": {
        opacity: 1,
        transform: "scale(1) rotate(15deg)",
      },
    },
    "@media (max-width: 1200px)": {
      width: "75px",
      height: "75px",
    },
  },

  imageCssIcon: {
    position: "absolute",
    width: "108px",
    height: "108px",
    bottom: "50%",
    right: "300px",
    animation: `fadeInScaleRight 1s forwards`,
    "@keyframes fadeInScaleRight": {
      "0%": {
        opacity: 0,
        transform: "scale(0.5) rotate(0deg)",
      },
      "100%": {
        opacity: 1,
        transform: "scale(1) rotate(-15deg)",
      },
    },
    "@media (max-width: 1200px)": {
      right: "250px",
    },
    "@media (max-width: 900px)": {
      right: "200px",
      bottom: "45%",
    },
  },
  imageReactIcon: {
    position: "absolute",
    width: "108px",
    height: "108px",
    top: "50%",
    right: "150px",
    rotate: "-15deg",
    animation: `fadeInScale 1s forwards`,
    "@keyframes fadeInScale": {
      "0%": {
        opacity: 0,
        transform: "scale(0.5) rotate(0deg)",
      },
      "100%": {
        opacity: 1,
        transform: "scale(1) rotate(15deg)",
      },
    },
    "@media (max-width: 900px)": {
      right: "100px",
      width: "75px",
      height: "75px",
    },
  },
};

export default style;
