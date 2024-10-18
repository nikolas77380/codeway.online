import { SxProps, Theme } from "@mui/material";
import { count } from "console";

const style: { [key: string]: SxProps<Theme> } = {
  countdownTimerContainer: {
    display: "flex", 
    alignItems: "center", 
    gap: "10px",
    "& span": {
      color: "#A855F7", 
      fontWeight: "bold", 
      fontSize: "30px"
    },
  },
}

export default style;