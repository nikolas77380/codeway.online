import { SxProps, Theme } from "@mui/material";

const style: { [key: string]: SxProps<Theme> } = {
  listWrapper: {
    position: "relative",
    pt: "40px",
    m: "25px",
    display: "grid",
    gap: "20px",
    "@media (min-width: 900px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "@media (min-width: 1200px)": {
      gridTemplateColumns: "repeat(4, 1fr)",
    },
  },
  backgroundImage: {
    position: "absolute",
    top: "-50%",
    left: 0,
    right: 0,
    bottom: 0,
    height: "200%",
    aspectRatio: "750 / 533",
    zIndex: 1,
    "@media (max-width: 900px)": {
      top: 0,
      height: "100%",
      width: "200%",
      left: "-25%",
    },
  },
};

export default style;
