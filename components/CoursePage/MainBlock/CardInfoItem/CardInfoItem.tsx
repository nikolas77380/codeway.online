import { Box, Typography } from "@mui/material"

import CardInfoVideoPlayer from "./CardInfoVideoPlayer";
import CardInfoAvatar from "./CardInfoAvatar";
import CardInfoIncludes from "./CardInfoIncludes";
import CardInfoLinkButton from "./CardInfoLinkButton";

import style from './CardInfoItem.style'

interface CardInfoItemProps {
  isFixed?: boolean;
}

const CardInfoItem = ({ isFixed = false }: CardInfoItemProps) => {
  return (
    <Box sx={{ ...style.cardInfoMainContainer, position: isFixed ? 'fixed' : 'static', top: isFixed ? '100px' : 'auto' }}>
      <Box sx={style.cardInfoContainer}>
        <CardInfoVideoPlayer />
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