import { Box, Typography } from "@mui/material";
import Link from "next/link";
import style from "../Menu.style";
import { AnimatedText } from "./AnimatedText";

const Logo = () => {
  return (
    <Box sx={style.logoWrapper}>
      <Link href="/">
        <Typography sx={style.squareBracket}>{"[ "}</Typography>
        <AnimatedText />
        <Typography sx={style.squareBracket}>{"]"}</Typography>
      </Link>
    </Box>
  );
};

export default Logo;
