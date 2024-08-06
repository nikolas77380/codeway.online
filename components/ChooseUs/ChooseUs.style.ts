import { SxProps, Theme } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  mainSection: {
    maxWidth: "1700px",
    width: 1,
    m: "25px auto",
    p: "25px 25px",
    position: "relative",
  },

  backgroundImageCenter: {
    width: 1,
    height: 1,
    position: "absolute",
    top: '20%',
    right: '10%',
    bottom: 0,
    zIndex: 0,
  },

  textSection: {
    m: "25px 0",
    display: "flex",
    flexDirection: "column",
    gap: "25px",
    textAlign: "center",
    width: 1,
  },
  cardSection: {
    m: "50px 0",
    width: 1,
    display: "grid",
    gap: "20px",
    justifyContent: "center",
    "@media (min-width: 600px)": {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
    "@media (min-width: 900px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "@media (min-width: 1200px)": {
      gridTemplateColumns: "repeat(4, 1fr)",
    },
  },
  cardContainer: {
    backgroundColor: "rgb(25,27,38,0.6)",
    display: "flex",
    height: 1,
    borderRadius: "15px",
    p: "25px",
  },

  cardWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 1,
    height: 1,
    gap: "20px",
  },
  iconWrapper: {
    backgroundColor: "#a855f7",
    width: "70px",
    height: "70px",
    borderRadius: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& svg": {
      color: "white",
    },
    "@media (max-width: 600px)": {
      width: "55px",
      height: "55px",
    },
  },
  cardTitle: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    gap: "10px",
    "& span": {
      color: "white",
    },
    "& p": {
      whiteSpace: "pre-line",
      color: "#94a3b8",
      fontSize: "14px",
    },
  },
};

export default style;
