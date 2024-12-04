import { SxProps, Theme } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  cardInfoMainContainer: {
    mt: "25px",
    ml: "25px",
    mb: "50px",
    position: "sticky",
    top: "25px",
    width: "400px",
    borderRadius: "15px",
    backgroundColor: "#191b26",
    wordWrap: "break-word",
    background: `
    linear-gradient(to bottom, rgba(159, 70, 241, 0.3), rgba(159, 70, 241, 0) 30%),
    linear-gradient(to top, rgba(159, 70, 241, 0.3), rgba(159, 70, 241, 0) 30%),
    #191b26
  `,
    "@media (max-width: 900px)": {
      width: "100%",
      height: "auto",
      ml: 0,
      position: "relative",
    },
  },

  cardInfoContainer: {
    width: 1,
    height: 1,
    p: "15px",
    "& label": {
      color: "#fff",
      "@media (max-width: 600px)": {
        fontSize: "18px",
      },
    },
  },

  cardInfoWrapper: {
    width: 1,
    display: "flex",
    justifyContent: "center",
    mt: "20px",
    "& iframe": {
      maxWidth: "700px",
      width: "100%",
      aspectRatio: "16 / 9",
      border: "none",
      borderRadius: "5px",
    },
  },

  courseImageWrapper: {
    display: "flex",
    justifyContent: "center",
    mb: "20px",
    "& img": {
      width: "100%",
      height: "auto",
      objectFit: "cover",
      maxHeight: "212px",
      maxWidth: "380px",
      borderRadius: "15px",
    },
  },

  playButton: {
    position: "absolute",
    width: "120px",
    height: "120px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  },

  avatarMainContainer: {
    width: 1,
    height: "80px",
    display: "flex",
    alignItems: "center",
    marginTop: "10px",
    gap: "15px",
    marginBottom: "20px",
    "@media (max-width: 600px)": {
      marginTop: "5px",
      marginBottom: "10px",
      flexDirection: "column",
      height: "90px",
      gap: "5px",
    },
  },

  avatarWrapper: {
    width: "70px",
    height: "70px",
    backgroundColor: "#42424d",
    borderRadius: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& image": {
      width: "60px",
      height: "60px",
    },
    "@media (max-width: 600px)": {
      width: "40px",
      height: "40px",
      "& image": {
        width: "30px",
        height: "30px",
      },
    },
  },

  avatarTextContainer: {
    display: "flex",
    flexDirection: "column",
    "& label": {
      color: "#fff",
      fontWeight: "500",
      "@media (max-width: 600px)": {
        fontSize: "12px",
        textAlign: "center",
      },
    },
    "& span": {
      color: "#92a1b6",
      fontSize: "14px",
      "@media (max-width: 600px)": {
        fontSize: "12px",
        textAlign: "center",
      },
    },
  },

  includesMainContainer: {
    width: 1,
    height: "screen",
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px",
    "@media (max-width: 600px)": {
      marginTop: "10px",
      marginBottom: "30px",
    },
  },

  includesContainers: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
    "& svg": {
      color: "#a855f7",
      fontSize: "22px",
    },
    "& span": {
      color: "#92a1b6",
      fontSize: "13px",
    },
  },

  dashSeparator: {
    width: 1,
    borderTop: "1px dashed #ffffff",
    borderColor: "rgba(146, 161, 182, 0.4)",
    marginBottom: "10px",
  },

  discountTimerContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },

  timerCardTitle: {
    fontSize: "14px",
    color: "#92a1b6",
    fontWeight: "bold",
    whiteSpace: "nowrap",
    textAlign: "center",
    "& span": {
      color: "#fff",
      fontSize: "18px",
    },
  },

  cardInfoButton: {
    width: "100%",
    mt: "15px",
    backgroundColor: "#FFF",
    color: "#a855f7",
    borderRadius: "15px",
    "&:hover": {
      color: "#FFF",
    },
  },
};

export default style;
