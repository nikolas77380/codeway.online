import { Groups, Info } from "@mui/icons-material";
import { Box, Divider, Rating, Stack, Typography } from "@mui/material";
import style from "./HeaderCoursePage.style";

interface HeaderCoursePageProps {
  topic: string;
  name: string;
  shortDescription: string;
  rating: number;
  students: number;
  lastUpdated: string;
}

const HeaderCoursePage = ({
  topic,
  name,
  shortDescription,
  rating,
  students,
  lastUpdated,
}: HeaderCoursePageProps) => {
  return (
    <Box sx={style.container}>
      <Box sx={style.contentWrapper}>
        <Typography sx={style.topic}>{topic}</Typography>
        <Typography variant="h3" sx={style.name}>
          {name}
        </Typography>
        <Typography variant="subtitle1" sx={style.subtitle}>
          {shortDescription}
        </Typography>
        <Rating size="medium" value={rating} readOnly sx={style.rating} />
        <Stack
          direction={"row"}
          spacing={2}
          divider={<Divider orientation="vertical" sx={style.divider} />}
        >
          <Typography sx={style.extraInfo}>
            <Groups sx={style.icon} /> {`${students} students`}
          </Typography>
          <Typography sx={style.extraInfo}>
            <Info sx={style.icon} />
            {` Last updated ${lastUpdated}`}
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default HeaderCoursePage;
