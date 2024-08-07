import { Box, Typography } from "@mui/material";

import dynamic from "next/dynamic";

import { classesData } from "@/src/mocks/AboutUsPage/dataPopularClasses";

import { TFunction } from "i18next";

import { MotionBox } from "@/utils/motionElements";
import { scrollRightToLeft } from "@/utils/motionVariants";

import style from "./OurPopularClasses.style";

const ScrollAnimationWrapper = dynamic(
  () => import("@/hooks/useScrollAnimationWrapper").then((mod) => mod.ScrollAnimationWrapper),
  { ssr: false }
);

interface IPopularClasses {
  t: TFunction;
}

const OurPopularClasses = ({ t }: IPopularClasses) => {

  const numRows = Math.ceil(classesData.length / 3);
  const rows = Array(Math.ceil(classesData.length / 3)).fill(null);

  return (
    <Box sx={style.mainContainer}>
      <Box sx={style.popularClassesContainer}>
        <Typography variant="h3" component="span">
          {t("popular-classes.title")}
        </Typography>
        <Box sx={style.separatorShort} />
        {rows.map((_, rowIndex) => (
          <ScrollAnimationWrapper
            key={rowIndex}
            threshold={0.5}
          >
            <MotionBox 
              sx={style.classesRow}     
              initial='hidden'
              animate={'visible'}
              variants={scrollRightToLeft(rowIndex * 0.3, 1.6)}
            >
              {classesData
                .slice(rowIndex * 3, rowIndex * 3 + 3)
                .map((item, index) => {
                  const IconComponent = item.icon;
                  const isLeftBorder = index === 0 || (index === 3 && rowIndex === 1);
                  const isBottomBorder = rowIndex < numRows - 1;

                  const leftBottomStyles = {
                    ...style.classesDataWrapper,
                    ...(isLeftBorder ? style.leftBorder : {}),
                    ...(isBottomBorder ? style.bottomBorder : {}),
                  };

                  const gradientStyles = {
                    ...style.gradientOverlay,
                    ...(isBottomBorder
                      ? style.gradientBottom
                      : style.gradientTop),
                  };

                  return (
                    <Box key={index} sx={leftBottomStyles}>
                      <Box sx={style.iconContainer} className="gradientOverlay">
                        <IconComponent />
                      </Box>
                      <Box sx={style.titleContainer}>
                        <Box sx={style.highlightBar} className="highlightBar" />
                        <Typography
                          component="span"
                          sx={style.title}
                          className="title-hover"
                        >
                          {item.title}
                        </Typography>
                      </Box>
                      <Typography component="p" sx={style.description}>
                        {item.description}
                      </Typography>
                      <Box sx={gradientStyles} />
                    </Box>
                  );
                })}
            </MotionBox>
          </ScrollAnimationWrapper>
        ))}
      </Box>
    </Box>
  );
};

export default OurPopularClasses;
