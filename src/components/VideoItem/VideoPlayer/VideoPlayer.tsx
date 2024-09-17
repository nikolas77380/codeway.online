import { Box, IconButton } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import { URL_VIDEO_YOUTUBE } from "@/src/mocks/VideoItem/helper";

import style from "@/src/components/Video/Video.style";

interface VideoPlayerProps {
  onClose: () => void;
  autoplay: boolean;
}

const VideoPlayer = ({ onClose, autoplay }: VideoPlayerProps) => {
  const autoplayParam = autoplay ? "1" : "0";

  return (
    <Box sx={style.videoWrapper}>
      <IconButton onClick={onClose} sx={style.closeButtonModal}>
        <CloseIcon fontSize="medium" sx={style.closeIconModal} />
      </IconButton>
      <iframe
        src={`${URL_VIDEO_YOUTUBE}&autoplay=${autoplayParam}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </Box>
  );
};

export default VideoPlayer;
