"use client";

import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import style from "./Header.style";

const Header = () => {
  return (
    <Box sx={style.headerContainer}>
      <Box sx={style.contentWrapper}>
        <Box sx={style.leftContainer}>
          <Typography sx={style.slogan}>EMPOWERING YOUR IT JOURNEY</Typography>
          <Typography variant="h1" sx={style.title}>
            Unlock Your Full IT Potential with ByteSkill{"'"}s Courses.
          </Typography>
          <Typography variant="subtitle1" sx={style.subtitle}>
            Mollis curae molestie vel augue efficitur cursus letius malesuada
            aliquet. Facilisis tempus morbi maecenas si sapien congue odio non
            fames a aliquam.
          </Typography>
          <Button variant="contained" sx={style.button}>
            Discover more
          </Button>
        </Box>

        <Box sx={style.rightContainer}>
          <Box sx={style.mainImage}>
            <Image src={"/header/img_2.png"} alt="person" fill={true} />
          </Box>
          <Box sx={style.imageSkills}>
            <Image src={"/header/img_3.png"} alt="skills" fill={true} />
          </Box>
          <Box sx={style.imageCodeIcon}>
            <Image src={"/header/img_4.png"} alt="codeIcon" fill={true} />
          </Box>
          <Box sx={style.imageVideoIcon}>
            <Image src={"/header/img_5.png"} alt="videoIcon" fill={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
