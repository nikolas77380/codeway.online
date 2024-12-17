import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import style from "./CourseItem.style";

interface IPriceDisplay {
  price: string;
  isFree?: boolean;
  discountPrice?: string;
}

const PriceDisplay = ({
  isFree = false,
  price,
  discountPrice,
}: IPriceDisplay) => {
  const t = useTranslations("CoursesList");

  if (isFree || discountPrice) {
    return (
      <Box sx={style.discountPriceContainer}>
        <Typography variant="body1" className="original-price" component={"p"}>
          {price}
        </Typography>
        <Typography variant="h6" className="discount-price" component={"p"}>
          {isFree ? t("freeCoursePrice") : discountPrice}
        </Typography>
      </Box>
    );
  }

  return <Typography sx={style.price}>{price}</Typography>;
};

export default PriceDisplay;
