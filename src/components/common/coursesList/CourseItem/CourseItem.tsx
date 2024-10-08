'use client'

import { Box, Button, Paper, Rating, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import style from "./CourseItem.style";
import { useTranslation } from "@/app/i18n/client";
import { useEffect, useState } from "react";

interface ICourseItem {
  id: number | string;
  image: StaticImageData;
  shortDescription: string;
  name: string;
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
  price,
  rating,
  discountPrice,
  discountEndDateTimer
}: ICourseItem) => {

  const { t } = useTranslation("CoursesList");

  const [isDiscountActive, setIsDiscountActive] = useState(false);

  useEffect(() => {
    const checkDiscount = () => {
      if (discountPrice && discountEndDateTimer) {
        const endDate = new Date(discountEndDateTimer);
        const now = new Date();

        if (now < endDate) {
          setIsDiscountActive(true);
          localStorage.setItem("discountActive", "true");
        } else {
          setIsDiscountActive(false);
          localStorage.setItem("discountActive", "false");
        }
      } else {
        setIsDiscountActive(false);
        localStorage.setItem("discountActive", "false");
      }
    };

    checkDiscount();

    const discountStatus = localStorage.getItem("discountActive");
    if (discountStatus === null) {
      localStorage.setItem("discountActive", "false");
    }

  }, [discountPrice, discountEndDateTimer]); 

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
        {isDiscountActive && discountPrice ? (
          <Box sx={style.discountPriceContainer}>
            <Typography
              variant="body1"
              className="original-price"
              component={"p"}
            >
              {price}
            </Typography>
            <Typography variant="h6" className="discount-price" component={"p"}>
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
