import { keyframes, SxProps, Theme } from "@mui/material";

const fadeInScale = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5) rotate(0deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(15deg);
  }
`;
const moveFromBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const style: { [key: string]: SxProps<Theme> } = {
  headerContainer: {
    width: 1,
    backgroundColor: "#12141D",
    p: "10px",
  },

  contentWrapper: (theme) => ({
    m: "auto",
    p: "10px 10px 0 10px",
    maxWidth: "1700px",
    height: `calc(100vh - 6rem)`,
    borderRadius: "50px",
    backgroundImage:
      'url("/header/bg_header_2_.png"), url("/header/bg_header_3_.png")',
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      m: 0,
      height: "950px",
      flexDirection: "column",
    },
  }),

  leftContainer: (theme) => ({
    pr: "15px",
    pl: "5px",
    [theme.breakpoints.down("md")]: {
      margin: "auto",
      textAlign: "center",
    },
  }),

  slogan: {
    ml: "15px",
    display: "inline-block",
    p: "3px 21px",
    color: "rgb(168,85,247)",
    textAlign: "center",
    letterSpacing: "2px",
    textTransform: "uppercase",
    textWrap: "nowrap",
    border: "1px solid rgba(168, 85, 247, 0.4)",
    borderRadius: "50px",
    boxShadow: "0px 0px 30px 0px rgba(255, 255, 255, 0.1)",
    animation: `${moveFromBottom} 1.5s forwards`,
  },

  title: (theme) => ({
    mt: "15px",
    fontSize: "3.5rem",
    color: "white",
    fontWeight: "bold",
    animation: `${moveFromBottom} 1.5s forwards`,
    [theme.breakpoints.down("lg")]: {
      fontSize: "2.5rem",
    },
  }),

  subtitle: (theme) => ({
    mt: "15px",
    color: "#94A3B8",
    fontSize: "1.5rem",
    lineHeight: "2rem",
    animation: `${moveFromBottom} 1.5s forwards`,
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.2rem",
    },
  }),

  button: {
    p: "15px 30px",
    mt: "15px",
    ml: "15px",
    textTransform: "none",
    fontSize: "1rem",
    backgroundColor: "#A855F7",
    borderRadius: "50px",
  },

  rightContainer: {
    position: "relative",
    right: "50px",
    bottom: 0,
    alignSelf: "flex-end",
  },

  mainImage: (theme) => ({
    width: "580px",
    height: "600px",
    backgroundImage: "url('/header/bg_header_1_.png')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    animation: `${moveFromBottom} 1.5s forwards`,
    [theme.breakpoints.down("lg")]: {
      width: "480px",
      height: "500px",
    },
  }),

  imageSkills: (theme) => ({
    position: "absolute",
    width: "210px",
    height: "200px",
    top: "50px",
    rotate: "-5deg",
    borderRadius: "10px",
    overflow: "hidden",
    animation: `${fadeInScale} 2s forwards`,
    [theme.breakpoints.down("lg")]: {
      width: "150px",
      height: "155px",
    },
    [theme.breakpoints.down("md")]: {
      left: "90px",
      width: "120px",
      height: "125px",
    },
  }),

  imageCodeIcon: (theme) => ({
    position: "absolute",
    width: "108px",
    height: "108px",
    top: "200px",
    right: "30px",
    rotate: "15deg",
    animation: `${fadeInScale} 1s forwards`,
    [theme.breakpoints.down("lg")]: {
      width: "75px",
      height: "75px",
    },
  }),

  imageVideoIcon: (theme) => ({
    position: "absolute",
    width: "108px",
    height: "108px",
    bottom: "30px",
    right: "70px",
    rotate: "-15deg",
    animation: `${fadeInScale} 1.5s forwards`,
    [theme.breakpoints.down("lg")]: {
      width: "75px",
      height: "75px",
    },
  }),
};

export default style;
