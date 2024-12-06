import { SxProps } from "@mui/material";

const style: { [key: string]: SxProps } = {
  headerContainer: {
    width: 1,
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
    minHeight: "750px",
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

    "&::after": {
      content: '""',
      position: "absolute",
      bottom: "-60px",
      left: "50%",
      width: "70px",
      height: "1px",
      background:
        "radial-gradient( ellipse at center, #A853F6  0%, rgba(168, 83, 246, 0.3) 100% )",
      borderRadius: "100%",
      boxShadow: "0 0 150px 150px rgba(168, 83, 246, 0.5)",
      zIndex: "0",
    },
  },

  leftContainer: {
    pr: "15px",
    pl: "5px",
    zIndex: "2",
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
    willChange: "opacity, transform",
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
    willChange: "opacity, transform",
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
    willChange: "opacity, transform",
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
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      color: "#FFF",
      backgroundColor: "rgb(168,85,247)",
    },
  },
  rightContainer: {
    position: "relative",
    alignSelf: "flex-end",
    zIndex: "2",
  },
  mainImage: {
    position: "relative",
    right: "25px",
    objectFit: "cover",
    width: "580px",
    backgroundImage:
      "radial-gradient(ellipse  at 50% 49%, rgba(209,165,252,0.49)  0%,rgba(209,165,252,0.79)  20.330962052582002%,rgba(186,118,255,0.33)  45.86287694619902%,rgba(186,118,255,0)  67.8486925490359%)",
    backgroundPosition: "48.285714285714285% 70.4%",
    backgroundSize: "70% 65%",
    backgroundRepeat: "no-repeat",
    backgroundBlendMode: "normal",
    aspectRatio: "796 / 876",
    "@media (min-width: 600px)": {
      willChange: "opacity, transform",
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
    "@media (max-width: 1200px)": {
      width: "480px",
    },
    "@media (max-width: 900px)": {
      right: "0",
      width: "380px",
    },
  },
  imageCodeIcon: {
    position: "absolute",
    width: "100px",
    height: "100px",
    top: "40px",
    right: "30px",
    transform: "rotate(15deg)",
    willChange: "opacity, transform",
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
    willChange: "opacity, transform",
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
    transform: "rotate(-15deg)",
    willChange: "opacity, transform",
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
