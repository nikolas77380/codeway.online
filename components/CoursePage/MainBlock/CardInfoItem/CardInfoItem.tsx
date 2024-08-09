import { Box, Typography } from "@mui/material"

import dynamic from "next/dynamic";

import CardInfoAvatar from "./CardInfoAvatar";
import CardInfoIncludes from "./CardInfoIncludes";
import CardInfoLinkButton from "./CardInfoLinkButton";

import style from './CardInfoItem.style'

const CardInfoVideoPlayerWithNoSSR = dynamic(
  () => import("@/components/CoursePage/MainBlock/CardInfoItem/CardInfoVideoPlayer"),
  { ssr: false }
);

interface CardInfoItemProps {
  isFixed?: boolean;
  isBottom?: boolean;
}

const CardInfoItem = ({ isFixed = false, isBottom = false }: CardInfoItemProps) => {
  return (
    <Box sx={{ 
      ...style.cardInfoMainContainer, 
      position: isFixed ? 'fixed' : 'static', 
      top: isFixed && !isBottom ? '100px' : 'auto',
      bottom: isBottom ? '0px' : 'auto',
      transition: 'top 0.5s ease, bottom 0.5s ease',
      }}
    >
      <Box sx={style.cardInfoContainer}>
        <CardInfoVideoPlayerWithNoSSR />
        <Typography variant="h6" component='label'>
          Instructor
        </Typography>
        <CardInfoAvatar />
        <Typography variant="h6" component='label'>
          This course includes:
        </Typography>
        <CardInfoIncludes />
        <CardInfoLinkButton />
      </Box>
    </Box>
  )
}

export default CardInfoItem