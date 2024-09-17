import { getTranslation } from "@/app/i18n";
import { Box, Button, Paper, Rating, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import style from "./CourseItem.style";

interface ICourseItem {
  id: number | string;
  image: StaticImageData;
  shortDescription: string;
  name: string;
  price: string;
  rating: number;
  lang: string;
  discountPrice?: string;
}
const CourseItem = async ({
  id,
  image,
  name,
  shortDescription,
  price,
  rating,
  lang,
  discountPrice,
}: ICourseItem) => {
  const { t } = await getTranslation(lang, "CoursesList");

  return (
    <Paper sx={style.container}>
      <Box>
        <Image
          src={image}
          alt={name}
          style={{
            width: "100%",
            height: "auto",
            aspectRatio: "2016 / 1152",
            objectFit: "cover",
          }}
        />
        <Typography variant="h6" sx={style.name} component={"p"}>
          {name}
        </Typography>
        <Typography variant="h6" sx={style.description} component={"p"}>
          {shortDescription}
        </Typography>
      </Box>
      <Box>
        {discountPrice 
          ? (
          <Box sx={style.discountPriceContainer}>
            <Typography variant="body1" className="original-price">
              {price}
            </Typography>
            <Typography variant="h6" className="discount-price">
              {discountPrice}
            </Typography>
          </Box>
        ) : (
          <Typography sx={style.price}>{price}</Typography>
        )}
        <Rating size="small" value={rating} readOnly sx={style.rating} />
        <Link href={`/courses/${id}`}>
          <Button variant="contained" size="medium" sx={style.courseButton}>
            {t("button")}
          </Button>
        </Link>
      </Box>
    </Paper>
  );
};

export default CourseItem;
