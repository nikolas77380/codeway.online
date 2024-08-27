import { SxProps, Theme } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  container: {
    position: "relative",
    width: "min(95%, 1280px)",
    maxWidth: "1280px",
    m: "0 auto 70px auto",
    p: "20px",
    bgcolor: "#1C1E2A",
    borderRadius: "15px",
  },
  backgroundOverlay: {
    width: 1,
    height: 1,
    backgroundImage: "url('/assets/header/bg_header_2_.png')",
    backgroundPosition: "bottom right",
    backgroundRepeat: "no-repeat",
    backgroundSize: "300%",
    opacity: 0.3,
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: "15px",
  },
  contentWrapper: {
    width: 1,
    m: "10px",
    p: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    "@media (max-width: 900px)": {
      flexDirection: "column",
      gap: "30px",
    },
  },
  lottieContainer: {
    width: 160, 
    height: 70, 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    mr: '40px',
    '& .lottie-robot': {
      width: '160px', 
      height: '150px',
    },
    '@media (max-width: 900px)': {
      mr: 0,
    }
  },
  textWrapper: {
    width: 1,
    p: "0 30px",
    "@media (max-width: 900px)": {
      p: 0,
    },
  },

  title: {
    fontSize: "1.5rem",
    color: "#FFF",
    fontWeight: "bold",
    "@media (max-width: 900px)": {
      textAlign: "center",
    },
  },

  subtitle: {
    mt: "15px",
    color: "#94A3B8",
    fontSize: "1rem",
    "@media (max-width: 900px)": {
      textAlign: "justify",
    },
  },

  button: {
    width: "300px",
    borderRadius: "30px",
    whiteSpace: "nowrap",
    fontSize: "1rem",
    textTransform: "none",
  },
};

export default style;
