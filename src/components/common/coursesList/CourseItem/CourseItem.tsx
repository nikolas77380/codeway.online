"use client";

import { useDiscountStatus } from "@/src/hooks/useDiscountStatus";
import { Box, Button, Paper, Rating, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import style from "./CourseItem.style";
import PriceDisplay from "./PriceDisplay";

interface ICourseItem {
  id: number | string;
  image: StaticImageData;
  shortDescription: string;
  name: string;
  isFree?: boolean;
  price: string;
  rating: number;
  discountPrice?: string;
  discountEndDateTimer?: string;
}
const CourseItem = ({
  id,
  image,
  name,
  shortDescription,
  isFree = false,
  price,
  rating,
  discountPrice,
  discountEndDateTimer,
}: ICourseItem) => {
  const t = useTranslations("CoursesList");

  const isDiscountActive = useDiscountStatus(
    discountPrice,
    discountEndDateTimer
  );

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
        <Typography variant="h6" sx={style.name} component={"h3"}>
          {name}
        </Typography>
        <Typography variant="h6" sx={style.description} component={"h4"}>
          {shortDescription}
        </Typography>
      </Box>
      <Box>
        <PriceDisplay
          isFree={isFree}
          price={price}
          discountPrice={isDiscountActive ? discountPrice : undefined}
        />
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
