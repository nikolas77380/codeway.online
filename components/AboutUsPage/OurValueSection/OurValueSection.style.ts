import { SxProps, Theme } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  mainContainer: {
    width: 1,
    height: 1,
    backgroundColor: "#1c1e2a",
    backgroundImage: 'url("/assets/aboutUs/bg_header_3.png")',
    backgroundPosition: "bottom center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },

  valueContainer: {
    width: "90%",
    height: 1,
    p: "4rem 18rem",
    display: "flex",
    gap: "20px",
    "@media (max-width: 600px)": {
      p: "1rem 2rem",
      flexDirection: "column",
    },
  },

  separator: {
    width: 1,
    height: "1px",
    backgroundColor: "#42444e",
  },

  mainContent: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: 1,
    height: 1,
    flex: 1,
    p: "5rem 0",
    "@media (max-width: 600px)": {
      p: "2rem 0",
    },
    "& label": {
      textTransform: "uppercase",
      color: "#a855f7",
      fontSize: "1rem",
      fontWeight: "500",
      "@media (max-width: 600px)": {
        fontSize: "0.8rem",
      },
    },
    "& span": {
      color: "#fff",
      fontWeight: "600",
      fontSize: "2.5rem",
      "@media (max-width: 600px)": {
        fontSize: "1.6rem",
      },
    },
  },

  valueSection: {
    width: 1,
    height: 1,
    mt: "15px",
    "@media (max-width: 600px)": {
      mt: "10px",
    },
  },

  valueWrapper: {
    width: 1,
    height: 1,
    display: "flex",
    alignItems: "center",
    gap: "20px",
    mb: "15px",
    "@media (max-width: 600px)": {
      mb: "10px",
    },
  },

  icon: {
    backgroundColor: "#372954",
    p: "20px 20px",
    "& svg": {
      color: "#9333ea",
      "@media (max-width: 600px)": {
        fontSize: "25px",
      },
    },
    "@media (max-width: 600px)": {
      width: "40px",
      height: "40px",
      p: "10px 10px",
    },
  },

  valueTextSection: {
    width: 1,
    height: 1,
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    "& span": {
      color: "#fff",
      fontSize: "1.3rem",
      "@media (max-width: 600px)": {
        fontSize: "1.1rem",
        fontWeight: "500",
      },
    },
    "& p": {
      color: "#94a3b8",
      fontSize: "1.1rem",
      "@media (max-width: 600px)": {
        fontSize: "0.8rem",
      },
    },
  },

  mainContent2: {
    width: 1,
    height: 1,
    flex: 1,
    m: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    zIndex: 0,
    ml: "100px",
    "@media (max-width: 600px)": {
      ml: "0px",
      mr: '0px',
      mt: "260px",
      mb: "20px",
      flexDirection: "column",
      height: '400px'
    },
  },

  iconWrapper: {
    width: 1,
    height: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
  },

  iconPlay: {
    width: "100px",
    height: "100px",
    position: "absolute",
    backgroundColor: "#fff",
    top: "-50px",
    bootom: 0,
    left: "50%",
    right: "50%",
    borderRadius: "50%",
    "&:hover": {
      backgroundColor: "#fff",
    },
    "& svg": {
      fontSize: "60px",
      color: "#a855f7",
    },
    "@media (max-width: 600px)": {
      top: "-50px",
      left: "130px",
    },
  },

  imgContainer: {
    height: 1,
    "& img": {
      objectFit: "cover",
      position: "absolute",
      zIndex: 10,
      top: "-250px",
      right: "-100px",
      borderRadius: "15px",
      width: "300px",
      height: "250px",
      "@media (max-width: 600px)": {
        width: '700px',
        height: "400px",
        display: 'block !important',
        position: 'relative',
      },
    },
    "@media (max-width: 600px)": {
      height: '150px',
    },
  },

  imgContainer2: {
    "& img": {
      objectFit: "cover",
      position: "absolute",
      zIndex: 10,
      top: "15px",
      right: "-170px",
      borderRadius: "15px",
      width: "370px",
      height: "350px",
      "@media (max-width: 600px)": {
        top: "10px",
        right: "-65px",
        width: "200px",
        height: "190px",
        display: 'none'
      },
    },
  },

  imgContainer3: {
    "& img": {
      objectFit: "cover",
      position: "absolute",
      zIndex: 10,
      top: "20px",
      left: "-5px",
      borderRadius: "15px",
      width: "300px",
      height: "250px",
      "@media (max-width: 600px)": {
        top: "10px",
        left: "-20px",
        width: "200px",
        height: "190px",
        display: 'none'
      },
    },
  },

  imgContainer4: {
    "& img": {
      objectFit: "cover",
      position: "absolute",
      zIndex: 10,
      top: "-445px",
      left: "-25px",
      borderRadius: "15px",
      width: "320px",
      height: "450px",
      "@media (max-width: 600px)": {
        top: "-190px",
        left: "-20px",
        width: "200px",
        height: "190px",
        display: 'none'
      },
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
      border: "none",
    },
    "@media (max-width: 600px)": {
      paddingBottom: "56.25%",
      height: "auto",
      "& iframe": {
        top: "50%",
      },
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
};

export default style;
