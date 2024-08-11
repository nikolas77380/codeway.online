import CardMembershipIcon from "@mui/icons-material/CardMembership";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import TapAndPlayIcon from "@mui/icons-material/TapAndPlay";
import VideoChatIcon from "@mui/icons-material/VideoChat";
import { Box, Typography } from "@mui/material";
import style from "./CardInfoItem.style";

interface ICardInfoIncludes {
  courseDuration: number;
}

const CardInfoIncludes = ({ courseDuration }: ICardInfoIncludes) => {
  return (
    <Box sx={style.includesMainContainer}>
      <Box sx={style.includesContainers}>
        <PlayCircleIcon />
        <Typography component="span">
          {courseDuration} hours on-demand video
        </Typography>
      </Box>
      <Box sx={style.dashSeparator} />
      <Box sx={style.includesContainers}>
        <ExitToAppIcon />
        <Typography component="span">Full lifetime access</Typography>
      </Box>
      <Box sx={style.dashSeparator} />
      <Box sx={style.includesContainers}>
        <TapAndPlayIcon />
        <Typography component="span">Access on mobile and TV</Typography>
      </Box>
      <Box sx={style.dashSeparator} />
      <Box sx={style.includesContainers}>
        <VideoChatIcon />
        <Typography component="span">Free Webinar</Typography>
      </Box>
      <Box sx={style.dashSeparator} />
      <Box sx={style.includesContainers}>
        <CardMembershipIcon />
        <Typography component="span">Certificate of completion</Typography>
      </Box>
    </Box>
  );
};

export default CardInfoIncludes;
