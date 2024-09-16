import { SxProps, Theme } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  cardInfoMainContainer: {
    mt: "25px",
    ml: "25px",
    mb: "50px",
    position: "sticky",
    top: "25px",
    width: "400px",
    height: "760px",
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
    padding: "2rem 2rem",
    "& label": {
      color: "#fff",
      "@media (max-width: 600px)": {
        fontSize: "18px",
      },
    },
    "@media (max-width: 600px)": {
      padding: "1.5rem",
    },
  },

  cardInfoWrapper: {
    width: 1,
    height: "200px",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
    "& iframe": {
      border: "none",
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
    marginBottom: "40px",
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

  discountPriceContainer: {
    textAlign: "end",
    '& .discount-price': {
      color: "rgba(255, 0, 0, 0.9)",
      fontWeight: "bold",
      fontSize: "20px",
      "@media (max-width: 600px)": {
        fontSize: "16px",
      },
    },
    '& .original-price': {
      textDecoration: "line-through",
      color: "gray",
      fontSize: "20px",
      "@media (max-width: 600px)": {
        fontSize: "16px",
      },
    },
  },

  cardInfoButton: {
    width: 1,
    height: "40px",
    borderRadius: "50px",
    backgroundColor: "#A855F7",
    textTransform: "none",
  },
};

export default style;
