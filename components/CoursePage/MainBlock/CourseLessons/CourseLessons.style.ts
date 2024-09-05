import { SxProps, Theme } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  mainCourseLessonsContainer: {
    width: 1,
    height: 1,
    display: "flex",
    flexDirection: "column",
    "& span": {
      color: "#fff",
      fontSize: "1.8rem",
      fontWeight: "500",
      marginBottom: "10px",
    },
    "@media (max-width: 600px)": {
      marginBottom: "20px",
      "& span": {
        fontSize: "1.4rem",
      },
    },
  },

  accordionMainContainer: {
    width: 1,
    height: "auto",
    mt: "25px",
    display: "flex",
    alignItems: "center",
    "@media (max-width: 600px)": {
      flexDirection: "column",
    },
  },

  accordion: {
    width: 1,
    backgroundColor: "#1c1e2a",
    borderRadius: "10px",
    marginBottom: "10px",
    marginTop: "10px",
    overflow: "hidden",
    "&:first-of-type": {
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    "&:last-of-type": {
      borderBottomLeftRadius: "10px",
      borderBottomRightRadius: "10px",
    },
    "&.Mui-expanded": {
      backgroundColor: "#191b26",
      margin: "auto",
    },
    "&.Mui-expanded:first-of-type": {
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    "&.Mui-expanded:last-of-type": {
      borderBottomLeftRadius: "10px",
      borderBottomRightRadius: "10px",
    },
    "& span": {
      color: "#fff",
      fontSize: "1.2rem",
      fontWeight: "500",
      "@media (max-width: 600px)": {
        fontSize: "1rem",
      },
    },
    "@media (max-width: 600px)": {
      marginBottom: "0px",
    },
  },

  accordionSummary: {
    height: "auto",
    display: "flex",
    alignItems: "center",
    "&.Mui-expanded": {
      backgroundColor: "#9f46f1",
    },
  },

  accordionSummaryList: {
    height: "auto",
    display: "flex",
    alignItems: "center",
    "&.Mui-expanded": {
      backgroundColor: "#9f46f1",
    },
    "& span": {
      fontSize: "16px",
      fontWeight: "300",
    },
  },

  accordionDetails: {
    overflow: "hidden",
    height: "auto",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
    p: "1rem 1rem",
    "& p": {
      color: "#fff",
      p: "0 25px",
      fontSize: "16px",
      fontWeight: "400",
      "@media (max-width: 600px)": {
        fontSize: "14px",
      },
    },
  },

  accordionDetailsList: {
    overflow: "hidden",
    height: "auto",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
    p: "1rem 1rem",
    "& p": {
      color: "#fff",
      fontSize: "16px",
      fontWeight: "400",
      "@media (max-width: 600px)": {
        fontSize: "14px",
      },
    },
  },

  listLessonsContainer: {
    paddingTop: "15px",
    width: 1,
    // borderBottom: "1px solid ",
    // borderColor: "rgba(168,85,247, 0.4)",
    p: "10px 25px",
    '& span': {
      color: "rgba(255, 253, 254, 0.8)",
    },
  },

  accordionList: {
    backgroundColor: "#9f46f1",
    borderRadius: "10px",
    marginBottom: "10px",
    overflow: "hidden",
    "&:first-of-type": {
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    "&:last-of-type": {
      borderBottomLeftRadius: "10px",
      borderBottomRightRadius: "10px",
    },
    "&.Mui-expanded": {
      backgroundColor: "#191b26",
      margin: "auto",
    },
    "&.Mui-expanded:first-of-type": {
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    "&.Mui-expanded:last-of-type": {
      borderBottomLeftRadius: "10px",
      borderBottomRightRadius: "10px",
    },
    "& span": {
      color: "#fff",
      fontSize: "1.2rem",
      fontWeight: "500",
      "@media (max-width: 600px)": {
        fontSize: "1rem",
      },
    },
  },

  accordionArrowContainer: {
    backgroundColor: "#a855f7",
    borderRadius: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&.Mui-expanded": {
      backgroundColor: "#ffffff",
    },
  },

  accordionArrowColor: {
    color: "#fff",
    fontSize: "30px",
    "@media (max-width: 600px)": {
      fontSize: "20px",
    },
    "&.Mui-expanded": {
      color: "#a855f7",
    },
  },
};

export default style;
