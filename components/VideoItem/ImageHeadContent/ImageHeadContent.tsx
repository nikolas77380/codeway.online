import { Box, Button, Typography } from "@mui/material";

import style from "@/components/Video/Video.style";

const ImageHeadContent = () => {
  return (
    <Box sx={style.headContent}>
      <Box sx={{ marginBottom: "50px" }}>
        <Typography variant="h5" component="h2">
          Start your learning journey today!
        </Typography>
        <Typography variant="h5" component="h2">
          Enroll now in our online course.
        </Typography>
      </Box>
      <Typography variant="body1" component="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </Typography>
      <Button variant="contained">Discover more</Button>
    </Box>
  );
};

export default ImageHeadContent;
