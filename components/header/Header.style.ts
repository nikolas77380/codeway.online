import { SxProps, Theme } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  headerContainer: {
    width: 1,
    backgroundColor: "#12141D",
    p: "10px",
    "@media (max-width: 600px)": {
      mb: "50px",
    },
  },

  contentWrapper: {
    position: "relative",
    m: "auto",
    p: "10px 10px 0 10px",
    maxWidth: "1700px",
    maxHeight: "1000px",
    height: `calc(100vh - 90px)`,
    borderRadius: "50px",
    background: "linear-gradient(to bottom right, transparent, 90% , #A853F6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    "@media (max-width: 900px)": {
      m: 0,
      height: "auto",
      maxHeight: "none",
      flexDirection: "column",
      minHeight: "850px",
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
    "@media (max-width: 1050px)": {
      display: "none",
    },
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
    right: "25px",
    objectFit: "cover",
    width: "580px",
    aspectRatio: "796 / 876",
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
    },
    "@media (max-width: 900px)": {
      right: "0",
      width: "380px",
    },
  },
  backgroundImageCenter: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    "@media (max-width: 600px)": {
      "& img": {
        display: "none",
      },
      backgroundImage:
        "radial-gradient(ellipse  at 50% 49%, rgba(209,165,252,0.49)  0%,rgba(209,165,252,0.79)  20.330962052582002%,rgba(186,118,255,0.33)  45.86287694619902%,rgba(186,118,255,0)  67.8486925490359%), radial-gradient(ellipse  at 49% 51%, rgb(197,140,251)  0%,rgba(188,122,255,0.48)  32.387699641234484%,rgba(188,122,255,0)  70.68557198166002%)",
      backgroundPosition:
        "28.285714285714285% 70.4%, 56.285714285714285% 35.2%",
      backgroundSize: "70% 65%, 38% 51%",
      backgroundRepeat: "no-repeat, no-repeat",
      backgroundBlendMode: "normal, normal",
    },
  },
  imageCodeIcon: {
    position: "absolute",
    width: "100px",
    height: "100px",
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
    width: "100px",
    height: "100px",
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
      width: "75px",
      height: "75px",
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
