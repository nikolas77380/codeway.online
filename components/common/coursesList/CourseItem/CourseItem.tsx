import { getTranslation } from "@/app/i18n";
import { Box, Button, Paper, Rating, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import style from "./CourseItem.style";

interface ICourseItem {
  id: number;
  image: StaticImageData;
  shortDescription: string;
  name: string;
  price: string;
  rating: number;
  lang: string;
}
const CourseItem = async ({
  id,
  image,
  name,
  shortDescription,
  price,
  rating,
  lang,
}: ICourseItem) => {
  const { t } = await getTranslation(lang, "CoursesList");

  return (
    <Paper sx={style.container}>
      <Image
        src={image}
        alt={name}
        style={{ width: "100%", height: "200px" }}
      />
      <Box sx={style.contentWrapper}>
        <Typography variant="h6" sx={style.name}>
          {name}
        </Typography>
        <Typography variant="h6" sx={style.description}>
          {shortDescription}
        </Typography>
        <Box>
          <Typography sx={style.price}>{price}</Typography>
          <Rating size="small" value={rating} readOnly sx={style.rating} />
          <Link href={`/courses/${id}`}>
            <Button variant="contained" size="medium" sx={style.courseButton}>
              {t("button")}
            </Button>
          </Link>
        </Box>
      </Box>
    </Paper>
  );
};

export default CourseItem;
