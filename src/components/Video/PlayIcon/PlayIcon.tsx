import { Box } from "@mui/material";
import style from "../Video.style";

export const PlayIcon = () => {
  return (
    <Box sx={style.playButtonSvg}>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="100px"
        height="100px"
        viewBox="0 0 213.7 213.7"
        enableBackground="new 0 0 213.7 213.7"
        xmlSpace="preserve"
      >
        <polygon
          fill="none"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          points="73.5,62.5 148.5,105.8 73.5,149.1 "
        ></polygon>
        <circle
          fill="none"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          cx="106.8"
          cy="106.8"
          r="103.3"
        ></circle>
      </svg>
    </Box>
  );
};
